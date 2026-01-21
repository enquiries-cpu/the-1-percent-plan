'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    username: string;
    email: string;
    hasActiveSubscription: boolean;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string) => Promise<void>;
    register: (username: string, email: string) => Promise<void>;
    logout: () => void;
    upgradeSubscription: () => Promise<void>;
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
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string) => {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock Login Logic
        // In a real app, this would verify credentials. 
        // Here, we just simulate retrieving a user if they exist in "DB" (localStorage) or creating a mock one.

        const mockUser: User = {
            id: 'user_123',
            username: email.split('@')[0],
            email,
            // Persist subscription status if re-logging in, otherwise false
            hasActiveSubscription: user?.hasActiveSubscription || false
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
            hasActiveSubscription: true // Free access for testing
        };

        setUser(newUser);
        localStorage.setItem('aph_user', JSON.stringify(newUser));
        setIsLoading(false);
        router.push('/billing');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('aph_user');
        router.push('/');
    };

    const upgradeSubscription = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate payment processing

        if (user) {
            const updatedUser = { ...user, hasActiveSubscription: true };
            setUser(updatedUser);
            localStorage.setItem('aph_user', JSON.stringify(updatedUser));
            router.push('/');
        }
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout, upgradeSubscription }}>
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
