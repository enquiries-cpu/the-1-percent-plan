'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { User, LogOut, Layout } from 'lucide-react';
import { getProgramByTrackAndId } from '@/lib/allPrograms';

export default function Header() {
    const { user, logout, isLoading, updateProfile, profile } = useAuth();

    // Debug log
    // console.log('Header Render:', { isLoading, user: user?.email, role: profile?.role });

    const activeProgramId = profile?.activeEnrollments?.[0]?.id || null; // fallback logic
    const activeProgramTrack = profile?.activeEnrollments?.[0]?.track || null;
    const activeProgram = (activeProgramTrack && activeProgramId)
        ? getProgramByTrackAndId(activeProgramTrack, activeProgramId)
        : null;

    const handleDevAdminToggle = async () => {
        if (!updateProfile || !user) return;
        const newRole = profile?.role === 'admin' ? 'user' : 'admin';
        await updateProfile({ role: newRole });
        window.location.reload();
    };

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
                {!isLoading && profile?.activeEnrollments && profile.activeEnrollments.length > 0 && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {profile.activeEnrollments.map((enrollment, idx) => {
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

                {/* Legacy fallback - simplified */}
                {!isLoading && (!profile?.activeEnrollments || profile.activeEnrollments.length === 0) && activeProgram && (
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

                {/* DEBUG STATUS - Hiden for production-like feel, but keeping logic for now if needed */}
                {/* <div style={{ fontSize: '10px', color: 'gray', position: 'absolute', top: '0', right: '10px' }}>
                    Status: {isLoading ? 'Loading' : user ? `In (${user.email})` : 'Out'}
                </div> */}

                {!isLoading ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        {/* Admin Bootstrapper - Only for damonpf@hotmail.co.uk */}
                        {user?.email?.toLowerCase() === 'damonpf@hotmail.co.uk' && (
                            <button
                                onClick={handleDevAdminToggle}
                                style={{
                                    background: profile?.role === 'admin' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                                    color: profile?.role === 'admin' ? '#ef4444' : '#22c55e',
                                    fontSize: '9px',
                                    fontWeight: '900',
                                    padding: '4px 10px',
                                    borderRadius: '4px',
                                    border: `1px solid ${profile?.role === 'admin' ? '#ef4444' : '#22c55e'}`,
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                {profile?.role === 'admin' ? 'Exit Admin Mode' : 'Enter Admin Mode'}
                            </button>
                        )}

                        {user ? (
                            <>
                                {/* Admin Dashboard Link */}
                                {profile?.role === 'admin' && (
                                    <Link
                                        href="/admin"
                                        style={{
                                            color: 'var(--color-brand-orange)',
                                            fontWeight: '700',
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        DASHBOARD
                                    </Link>
                                )}

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
                                    {profile?.display_name || user.email?.split('@')[0]}
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
                            </>
                        ) : (
                            <Link href="/login" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                                Join The 1%
                            </Link>
                        )}
                    </div>
                ) : (
                    <div className="h-8 w-24 bg-zinc-800 rounded animate-pulse"></div>
                )}
            </div>
        </nav>
    );
}
