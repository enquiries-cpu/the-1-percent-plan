'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface UserProfile {
    displayName: string;
    liftRms: Record<string, string>;
    activeProgramId?: number | null; // Deprecated, kept for migration
    activeProgramTrack?: string | null; // Deprecated, kept for migration
    activeEnrollments: { track: string; id: number; enrollmentDate: string }[];
    completedSessions: string[]; // e.g., ["A-3-1-1"] for Track A, Program 3, Week 1, Day 1
}

interface User {
    id: string;
    username: string;
    email: string;
    hasActiveSubscription: boolean;
    profile?: UserProfile;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string) => Promise<void>;
    register: (username: string, email: string) => Promise<void>;
    logout: () => void;
    upgradeSubscription: () => Promise<void>;
    updateProfile: (updates: Partial<UserProfile>) => void;
    markSessionComplete: (track: string, programId: number, week: number, day: number) => void;
    toggleEnrollment: (track: string, programId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Init: Check local storage for session
    useEffect(() => {
        const storedUser = localStorage.getItem('aph_user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            // Legacy migration: If user doesn't have a profile, create one
            if (!parsedUser.profile) {
                const savedRms = localStorage.getItem('liftRms');
                parsedUser.profile = {
                    displayName: parsedUser.username,
                    liftRms: savedRms ? JSON.parse(savedRms) : {},
                    activeProgramId: null,
                    activeProgramTrack: null,
                    activeEnrollments: [],
                    completedSessions: []
                };
            } else if (!parsedUser.profile.activeEnrollments) {
                // Migration: Move legacy single enrollment to array
                parsedUser.profile.activeEnrollments = [];
                if (parsedUser.profile.activeProgramId && parsedUser.profile.activeProgramTrack) {
                    parsedUser.profile.activeEnrollments.push({
                        track: parsedUser.profile.activeProgramTrack,
                        id: parsedUser.profile.activeProgramId,
                        enrollmentDate: new Date().toISOString()
                    });
                }
            }
            setUser(parsedUser);
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));

        const storedUser = localStorage.getItem('aph_user');
        let existingUser = storedUser ? JSON.parse(storedUser) : null;

        const mockUser: User = {
            id: existingUser?.id || 'user_123',
            username: email.split('@')[0],
            email,
            hasActiveSubscription: existingUser?.hasActiveSubscription || false,
            profile: existingUser?.profile || {
                displayName: email.split('@')[0],
                liftRms: {},
                activeProgramId: null,
                activeProgramTrack: null,
                activeEnrollments: [],
                completedSessions: []
            }
        };

        setUser(mockUser);
        localStorage.setItem('aph_user', JSON.stringify(mockUser));
        setIsLoading(false);

        if (mockUser.hasActiveSubscription) {
            router.push('/');
        } else {
            router.push('/billing');
        }
    };

    const register = async (username: string, email: string) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newUser: User = {
            id: `user_${Math.floor(Math.random() * 1000)}`,
            username,
            email,
            hasActiveSubscription: true, // Free access for testing
            profile: {
                displayName: username,
                liftRms: {},
                activeProgramId: null,
                activeProgramTrack: null,
                activeEnrollments: [],
                completedSessions: []
            }
        };

        setUser(newUser);
        localStorage.setItem('aph_user', JSON.stringify(newUser));
        setIsLoading(false);
        router.push('/billing');
    };

    const updateProfile = (updates: Partial<UserProfile>) => {
        if (!user || !user.profile) return;
        const updatedUser = {
            ...user,
            profile: { ...user.profile, ...updates }
        };
        setUser(updatedUser);
        localStorage.setItem('aph_user', JSON.stringify(updatedUser));

        // Sync liftRms to legacy key for compatibility with components not yet migrated
        if (updates && updates.liftRms) {
            localStorage.setItem('liftRms', JSON.stringify(updatedUser.profile.liftRms));
        }
    };

    const markSessionComplete = (track: string, programId: number, week: number, day: number) => {
        if (!user || !user.profile) return;

        const sessionId = `${track}-${programId}-${week}-${day}`;
        if (user.profile.completedSessions.includes(sessionId)) return;

        const updatedSessions = [...user.profile.completedSessions, sessionId];
        updateProfile({ completedSessions: updatedSessions });
    };

    const toggleEnrollment = (track: string, programId: number) => {
        if (!user || !user.profile) return;

        const enrollments = user.profile.activeEnrollments || [];
        const isEnrolled = enrollments.some(e => e.track === track && e.id === programId);

        let newEnrollments;
        if (isEnrolled) {
            newEnrollments = enrollments.filter(e => !(e.track === track && e.id === programId));
        } else {
            newEnrollments = [...enrollments, { track, id: programId, enrollmentDate: new Date().toISOString() }];
        }

        // Also update legacy fields for backward compatibility during transition if needed, 
        // but primarily we rely on activeEnrollments now.
        // We set the most recently interacted program as the "active" legacy one if adding.
        const legacyUpdates: any = {};
        if (!isEnrolled) {
            legacyUpdates.activeProgramId = programId;
            legacyUpdates.activeProgramTrack = track;
        } else if (user.profile.activeProgramId === programId && user.profile.activeProgramTrack === track) {
            // If checking out of the "active" one, fallback to the last one in the list or null
            const last = newEnrollments[newEnrollments.length - 1];
            if (last) {
                legacyUpdates.activeProgramId = last.id;
                legacyUpdates.activeProgramTrack = last.track;
            } else {
                legacyUpdates.activeProgramId = null;
                legacyUpdates.activeProgramTrack = null;
            }
        }

        updateProfile({ ...legacyUpdates, activeEnrollments: newEnrollments });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('aph_user');
        router.push('/');
    };

    const upgradeSubscription = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (user) {
            const updatedUser = { ...user, hasActiveSubscription: true };
            setUser(updatedUser);
            localStorage.setItem('aph_user', JSON.stringify(updatedUser));
            router.push('/');
        }
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            login,
            register,
            logout,
            upgradeSubscription,
            updateProfile,
            markSessionComplete,
            toggleEnrollment
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
