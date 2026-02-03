'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { User, LogOut, Layout, Home } from 'lucide-react';
import { getProgramByTrackAndId } from '@/lib/allPrograms';

export default function Header() {
    const { user, logout, isLoading } = useAuth();

    const activeProgramId = user?.profile?.activeProgramId;
    const activeProgramTrack = user?.profile?.activeProgramTrack;
    const activeProgram = (activeProgramTrack && activeProgramId)
        ? getProgramByTrackAndId(activeProgramTrack, activeProgramId)
        : null;

    return (
        <nav style={{
            background: 'var(--color-surface)',
            borderBottom: '1px solid var(--color-surface-hover)',
            padding: 'var(--spacing-md) var(--spacing-lg)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <Link href="/" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'white'
            }}>
                <div style={{
                    background: 'var(--color-brand-orange)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '900',
                    fontSize: '0.8rem'
                }}>1%</div>
                <span style={{ fontWeight: '800', letterSpacing: '-0.02em', fontSize: '1.1rem' }}>HUB</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                {!isLoading && user?.profile?.activeEnrollments && user.profile.activeEnrollments.length > 0 && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {user.profile.activeEnrollments.map((enrollment, idx) => {
                            const prog = getProgramByTrackAndId(enrollment.track, enrollment.id);
                            if (!prog) return null;
                            return (
                                <Link key={`${enrollment.track}-${enrollment.id}`} href={`/${enrollment.track === 'A' ? 'track-a' : enrollment.track === 'B' ? 'track-b' : 'track-c'}/programs/${enrollment.id}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: prog.color,
                                    background: `${prog.color}15`,
                                    padding: '6px 12px',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    border: `1px solid ${prog.color}30`
                                }}>
                                    <Layout size={12} />
                                    {prog.title.split(' ')[0].toUpperCase()}
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Fallback for legacy data if migration didn't run yet or failed silently (though it should have run) */}
                {!isLoading && (!user?.profile?.activeEnrollments || user.profile.activeEnrollments.length === 0) && activeProgram && (
                    <Link href={`/${activeProgramTrack === 'A' ? 'track-a' : activeProgramTrack === 'B' ? 'track-b' : 'track-c'}/programs/${activeProgram.id}`} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: activeProgram.color,
                        background: `${activeProgram.color}15`,
                        padding: '6px 12px',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        border: `1px solid ${activeProgram.color}30`
                    }}>
                        <Layout size={12} />
                        {activeProgram.title.split(' ')[0].toUpperCase()}
                    </Link>
                )}

                {!isLoading ? (
                    user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                            <Link href="/profile" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                            }}>
                                <User size={18} />
                                {user.profile?.displayName || user.username}
                            </Link>
                            <button
                                onClick={logout}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--color-error)',
                                    cursor: 'pointer',
                                    padding: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    opacity: 0.7
                                }}
                                title="Logout"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                            Join The 1%
                        </Link>
                    )
                ) : (
                    // Optional: Add a skeleton loader here if needed, or render nothing to minimize layout shift
                    <div style={{ width: '100px', height: '32px' }}></div>
                )}
            </div>
        </nav>
    );
}
