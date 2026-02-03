'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface UserProfile {
    displayName: string;
    liftRms: Record<string, string>;
    activeProgramId: number | null;
    completedSessions: string[]; // e.g., ["3-1-1"] for Program 3, Week 1, Day 1
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
    markSessionComplete: (programId: number, week: number, day: number) => void;
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
                    completedSessions: []
                };
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

    const markSessionComplete = (programId: number, week: number, day: number) => {
        if (!user || !user.profile) return;

        const sessionId = `${programId}-${week}-${day}`;
        if (user.profile.completedSessions.includes(sessionId)) return;

        const updatedSessions = [...user.profile.completedSessions, sessionId];
        updateProfile({ completedSessions: updatedSessions });
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
            markSessionComplete
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
