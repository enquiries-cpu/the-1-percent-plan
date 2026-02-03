import { useAuth } from '@/context/AuthContext';
import { allPrograms, getProgramByTrackAndId } from '@/lib/allPrograms';
import { User, Activity, CheckCircle, BarChart, Calendar, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
    const { user, updateProfile } = useAuth();

    if (!user || !user.profile) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                <p>Please log in to view your profile.</p>
                <Link href="/login" className="btn btn-primary" style={{ marginTop: '20px' }}>Login</Link>
            </div>
        );
    }

    const { profile } = user;
    const activeProgramId = profile.activeProgramId;
    const activeProgramTrack = profile.activeProgramTrack;
    const activeProgram = (activeProgramTrack && activeProgramId)
        ? getProgramByTrackAndId(activeProgramTrack, activeProgramId)
        : null;

    const handleRmChange = (liftId: string, value: string) => {
        const newRms = { ...profile.liftRms, [liftId.toLowerCase()]: value };
        updateProfile({ liftRms: newRms });
    };

    const lifts = [
        { id: 'snatch', label: 'Snatch' },
        { id: 'clean & jerk', label: 'Clean & Jerk' },
        { id: 'power snatch', label: 'Power Snatch' },
        { id: 'power clean', label: 'Power Clean' },
        { id: 'back squat', label: 'Back Squat' },
        { id: 'front squat', label: 'Front Squat' },
        { id: 'overhead squat', label: 'Overhead Squat' },
        { id: 'deadlift', label: 'Deadlift' },
        { id: 'strict press', label: 'Strict Press' },
        { id: 'push press', label: 'Push Press' },
        { id: 'bench press', label: 'Bench Press' }
    ];

    // Calculate progress for active program
    const completedInActive = (activeProgram && activeProgramTrack)
        ? profile.completedSessions.filter(s => s.startsWith(`${activeProgramTrack}-${activeProgram.id}-`)).length
        : 0;

    let totalSessions = 0;
    if (activeProgram && activeProgram.weeks) {
        totalSessions = activeProgram.weeks.reduce((acc, w) => acc + (w.days?.length || 0), 0);
    }

    const progressPercent = totalSessions > 0 ? Math.round((completedInActive / totalSessions) * 100) : 0;

    const getTrackRoute = (track: string) => {
        switch (track) {
            case 'A': return '/track-a';
            case 'B': return '/track-b';
            case 'C': return '/track-c';
            default: return '/';
        }
    };

    return (
        <main className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            {/* Profile Header */}
            <header style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                        {profile.displayName.toUpperCase()}
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: '600' }}>{user.email}</span>
                        <div style={{ background: 'var(--color-brand-orange)', color: 'black', fontSize: '0.65rem', fontWeight: '900', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                            ELITE STATUS
                        </div>
                    </div>
                </div>
                {activeProgram && (
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.6, marginBottom: '4px' }}>CURRENT FOCUS</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: '800', color: activeProgram.color }}>{activeProgram.title.toUpperCase()}</div>
                    </div>
                )}
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-xl)' }}>

                {/* Left Column: Lifts & Progress */}
                <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>

                    {/* 1RM Matrix */}
                    <section style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-surface-hover)' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', marginBottom: 'var(--spacing-lg)' }}>
                            <BarChart size={20} color="var(--color-brand-orange)" />
                            YOUR 1RMs <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>(KG)</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {lifts.map(lift => (
                                <div key={lift.id}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: 'var(--color-text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>{lift.label}</label>
                                    <input
                                        type="number"
                                        value={profile.liftRms[lift.id.toLowerCase()] || ''}
                                        onChange={(e) => handleRmChange(lift.id, e.target.value)}
                                        placeholder="0"
                                        style={{
                                            width: '100%',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid var(--color-surface-hover)',
                                            borderRadius: 'var(--radius-md)',
                                            padding: '10px',
                                            color: 'white',
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            outline: 'none',
                                            transition: 'border-color 0.2s'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Progress Timeline */}
                    <section style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-surface-hover)' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', marginBottom: 'var(--spacing-lg)' }}>
                            <TrendingUp size={20} color="var(--color-brand-blue)" />
                            PROGRESSION LOG
                        </h2>
                        {profile.completedSessions.length === 0 ? (
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>No sessions completed yet. Start training to see your timeline!</p>
                        ) : (
                            <div style={{ display: 'grid', gap: '12px' }}>
                                {[...profile.completedSessions].reverse().slice(0, 5).map((sid, idx) => {
                                    const parts = sid.split('-');
                                    // Handle legacy "PID-W-D" and new "T-PID-W-D"
                                    const track = parts.length === 4 ? parts[0] : 'A';
                                    const pid = parts.length === 4 ? parts[1] : parts[0];
                                    const week = parts.length === 4 ? parts[2] : parts[1];
                                    const day = parts.length === 4 ? parts[3] : parts[2];

                                    const prog = getProgramByTrackAndId(track, parseInt(pid));

                                    return (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '12px',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: `3px solid ${prog?.color || 'var(--color-brand-orange)'}`
                                        }}>
                                            <CheckCircle size={16} color="var(--color-success)" />
                                            <div>
                                                <div style={{ fontSize: '0.9rem', fontWeight: '800' }}>Week {week}, Day {day} Complete</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                                                    {prog?.title} <span style={{ opacity: 0.5 }}>[{track}]</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>
                </div>

                {/* Right Column: Active Program & Stats */}
                <div style={{ display: 'grid', gap: 'var(--spacing-xl)', alignContent: 'start' }}>

                    {/* Active Program Card */}
                    {activeProgram ? (
                        <div style={{
                            background: `linear-gradient(135deg, ${activeProgram.color}20 0%, var(--color-surface) 100%)`,
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            border: `1px solid ${activeProgram.color}30`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                                    <div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '900', color: activeProgram.color, letterSpacing: '0.1em' }}>ACTIVE ENROLLMENT</span>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '4px' }}>{activeProgram.title}</h3>
                                    </div>
                                    <Activity color={activeProgram.color} size={32} style={{ opacity: 0.5 }} />
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>
                                        <span>Program Progress</span>
                                        <span>{progressPercent}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ width: `${progressPercent}%`, height: '100%', background: activeProgram.color, transition: 'width 0.5s ease' }}></div>
                                    </div>
                                </div>

                                <Link href={`${getTrackRoute(activeProgramTrack!)}/programs/${activeProgram.id}`} className="btn" style={{
                                    width: '100%',
                                    background: activeProgram.color,
                                    color: 'black',
                                    fontWeight: '800',
                                    padding: '12px',
                                    textAlign: 'center',
                                    display: 'block',
                                    textDecoration: 'none',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    CONTINUE TRAINING
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-surface-hover)',
                            textAlign: 'center'
                        }}>
                            <Calendar size={48} style={{ opacity: 0.2, marginBottom: 'var(--spacing-md)' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: 'var(--spacing-sm)' }}>No Active Program</h3>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)' }}>
                                Enroll in a specialized track to start tracking your elite progression.
                            </p>
                            <Link href="/track-a/programs" className="btn btn-primary" style={{ display: 'block' }}>Browse Programs</Link>
                        </div>
                    )}

                    {/* Quick Stats */}
                    <section style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-surface-hover)' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: 'var(--spacing-lg)', letterSpacing: '0.05em' }}>QUICK STATS</h2>
                        <div style={{ display: 'grid', gap: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Total Sessions</span>
                                <span style={{ fontWeight: '800' }}>{profile.completedSessions.length}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Lifts Logged</span>
                                <span style={{ fontWeight: '800' }}>{Object.values(profile.liftRms).filter(v => !!v).length}</span>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </main>
    );
}
