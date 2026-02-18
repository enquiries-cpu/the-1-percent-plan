'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, profile, isLoading, hasActiveSubscription } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                router.push('/login');
            } else if (!hasActiveSubscription) {
                router.push('/billing');
            }
        }
    }, [user, profile, isLoading, router, hasActiveSubscription]);

    if (isLoading || !user || !hasActiveSubscription) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black' }}>
                <p style={{ color: 'var(--color-text-secondary)' }}>Verifying Access...</p>
            </div>
        );
    }

    return <>{children}</>;
}
