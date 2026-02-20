'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

// Define the shape of our Profile (from public.profiles)
export interface UserProfile {
    id: string;
    email: string;
    display_name: string;
    role: 'admin' | 'user';
    subscription_status: string;
    // Legacy/App specific fields that might be stored in JSONB or separate tables eventually
    // For now, let's keep them here as local state or handled via a separate fetch if needed.
    // Ideally these should be in a `user_data` table or JSON column in profiles.
    // For this refactor, I will add a `data` jsonb column to profiles in a future migration if needed,
    // but for now, we will stick to the basic Auth + Profile.
    // To support the existing app features (liftRms etc), we might need to rely on LocalStorage TEMPORARILY
    // or quickly add a columns to profiles.

    // Let's assume we will mix Supabase Profile + Local Storage for the "Heavy" workout data for now
    // to avoid massive schema changes in one go, unless instructed otherwise.
    // Wait - the user wants "access to every user's accounts". 
    // This implies data MUST be in the DB.

    // Quick fix: Add a `app_data` JSONB column to profiles? 
    // Or just fetch it. 

    // For type safety, let's define what we expect, but know it might be partial.
    liftRms?: Record<string, string>;
    activeEnrollments?: { track: string; id: number; enrollmentDate: string }[];
    completedSessions?: string[];
}

interface AuthContextType {
    user: User | null; // Supabase Auth User
    profile: UserProfile | null; // Public Profile
    isLoading: boolean;
    login: (email: string) => Promise<void>; // Magic Link or OTP? We will use OTP for simplicity or standard PW?
    // Actually, standard email/password is easiest.
    signInWithPassword: (email: string, password: string) => Promise<{ error: any }>;
    signUp: (email: string, password: string, username: string) => Promise<{ error: any }>;
    logout: () => Promise<void>;
    updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
    upgradeSubscription: () => Promise<void>;
    markSessionComplete: (track: string, programId: number, week: number, day: number) => Promise<void>;
    toggleEnrollment: (track: string, programId: number) => Promise<void>;
    isAdmin: boolean;
    hasActiveSubscription: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const supabase = useMemo(() => createClient(), []);

    // Fetch profile helper
    const fetchProfile = useCallback(async (userId: string, email?: string) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (error && error.code === 'PGRST116') {
            // Profile missing, attempt to create it (Self-healing)
            console.log('Profile missing for user, creating default...');
            const { data: newProfile, error: insertError } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: userId,
                        email: email || '',
                        display_name: email ? email.split('@')[0] : 'User',
                        role: 'user'
                    }
                ])
                .select()
                .single();

            if (insertError) {
                console.error('Error creating profile:', insertError);
                return null;
            }
            return newProfile as UserProfile;
        }

        if (error) {
            console.error('Error fetching profile:', error);
            return null;
        }
        return data as UserProfile;
    }, [supabase]);

    useEffect(() => {
        const initializeAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user) {
                setUser(session.user);
                const userProfile = await fetchProfile(session.user.id, session.user.email);
                setProfile(userProfile);
            } else {
                setUser(null);
                setProfile(null);
            }
            setIsLoading(false);

            const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
                if (session?.user) {
                    setUser(session.user);
                    const userProfile = await fetchProfile(session.user.id, session.user.email);
                    setProfile(userProfile);
                } else {
                    setUser(null);
                    setProfile(null);
                }
                setIsLoading(false);
            });

            return () => {
                subscription.unsubscribe();
            };
        };

        initializeAuth();
    }, [fetchProfile, supabase.auth]);

    const signInWithPassword = async (email: string, password: string) => {
        setIsLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (!error) {
            router.push('/');
        }
        setIsLoading(false);
        return { error };
    };

    // Fallback for existing components calling login(email) - assume magic link if we supported it, 
    // but we are switching to Email/Pass for full features. 
    // We will keep this function signature but warn, or implement magic link.
    const login = async (email: string) => {
        // Implement Magic Link login
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) console.error(error);
        else alert('Check your email for the login link!');
    };

    const signUp = async (email: string, password: string, username: string) => {
        setIsLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    display_name: username,
                    // We trigger the profile creation via SQL Trigger, so just passing metadata is enough
                }
            }
        });

        if (!error) {
            // Optionally sign them in immediately? Supabase does this by default if email confirm is off.
            // If email confirm is on, they need to verify.
        }
        setIsLoading(false);
        return { error };
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
        router.push('/');
    };

    const updateProfile = async (updates: Partial<UserProfile>) => {
        if (!user) return;

        // Optimistic update
        setProfile(prev => prev ? { ...prev, ...updates } : null);

        const { error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', user.id);

        if (error) {
            console.error('Error updating profile', error);
            // Revert on error?
        }
    };

    const upgradeSubscription = async () => {
        if (!user) return;
        await updateProfile({ subscription_status: 'active' });
    };

    const markSessionComplete = async (track: string, programId: number, week: number, day: number) => {
        if (!user || !profile) return;
        const sessionId = `${track}-${programId}-${week}-${day}`;
        const completedSessions = profile.completedSessions || [];
        if (!completedSessions.includes(sessionId)) {
            const newSessions = [...completedSessions, sessionId];
            await updateProfile({ completedSessions: newSessions });
        }
    };

    const toggleEnrollment = async (track: string, programId: number) => {
        if (!user || !profile) return;
        const enrollments = profile.activeEnrollments || [];
        const isEnrolled = enrollments.some(e => e.track === track && e.id === programId);

        let newEnrollments;
        if (isEnrolled) {
            newEnrollments = enrollments.filter(e => !(e.track === track && e.id === programId));
        } else {
            newEnrollments = [...enrollments, { track, id: programId, enrollmentDate: new Date().toISOString() }];
        }
        await updateProfile({ activeEnrollments: newEnrollments });
    };

    return (
        <AuthContext.Provider value={{
            user,
            profile,
            isLoading,
            login,
            signInWithPassword,
            signUp,
            logout,
            updateProfile,
            upgradeSubscription,
            markSessionComplete,
            toggleEnrollment,
            isAdmin: profile?.role === 'admin',
            hasActiveSubscription: profile?.subscription_status === 'active'
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
