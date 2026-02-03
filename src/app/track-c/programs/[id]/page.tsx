'use client';

import { useState, useEffect } from 'react';
import { metabolicData } from '@/lib/metabolicData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Zap, Activity, Calendar, Award, ChevronRight, BarChart, Check, CheckCircle, PlusCircle, XCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function MetabolicProgramDetail({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { user, updateProfile, markSessionComplete, toggleEnrollment } = useAuth();
    const [activeWeek, setActiveWeek] = useState(1);
    const program = metabolicData.find(p => p.id === parseInt(params.id));

    // Scroll to next session logic
    useEffect(() => {
        if (!program) return;

        const firstIncompleteIdx = program.weeks
            ?.find(w => w.week === activeWeek)
            ?.days.findIndex((_, idx) => !isSessionComplete(activeWeek, idx + 1));

        if (firstIncompleteIdx !== undefined && firstIncompleteIdx !== -1) {
            setTimeout(() => {
                const element = document.getElementById(`day-${firstIncompleteIdx}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }, [activeWeek, user?.profile?.completedSessions]);

    const isSessionComplete = (week: number, day: number) => {
        if (!user?.profile || !program) return false;
        return user.profile.completedSessions.includes(`C-${program.id}-${week}-${day}`);
    };

    const handleCompleteSession = (week: number, dayNum: number) => {
        if (!program) return;
        markSessionComplete('C', program.id, week, dayNum);
    };

    const isEnrolled = user?.profile?.activeEnrollments?.some(e => e.track === 'C' && e.id === program?.id) ||
        (user?.profile?.activeProgramId === program?.id && user?.profile?.activeProgramTrack === 'C');

    const handleEnroll = () => {
        if (program) {
            toggleEnrollment('C', program.id);
        }
    };

    if (!program) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                <h1>Program Not Found</h1>
                <Link href="/track-c/programs" className="btn btn-primary" style={{ marginTop: '20px' }}>Back</Link>
            </div>
        );
    }

    const currentWeekData = program.weeks?.find(w => w.week === activeWeek) || program.weeks?.[0];

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            {/* Navigation */}
            <Link href="/track-c/programs" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back to Programs
            </Link>

            {/* Hero Header */}
            <header className="animate-fade-in" style={{
                background: `linear-gradient(135deg, ${program.color}15 0%, var(--color-surface) 100%)`,
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                border: `1px solid ${program.color}30`,
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <span style={{ color: program.color, fontWeight: 'bold', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {program.category}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '8px 0' }}>{program.title}</h1>
                        <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-muted)' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}><Clock size={16} style={{ marginRight: '6px' }} /> {program.duration}</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}><Zap size={16} style={{ marginRight: '6px' }} /> {program.intensity.split('(')[0]}</div>
                        </div>
                    </div>
                    {isEnrolled ? (
                        <button onClick={handleEnroll} style={{
                            background: 'transparent',
                            color: program.color,
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '800',
                            fontSize: '0.9rem',
                            border: `1px solid ${program.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer'
                        }}>
                            <CheckCircle size={18} />
                            ENROLLED
                        </button>
                    ) : (
                        <button onClick={handleEnroll} className="btn btn-primary" style={{ background: program.color, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlusCircle size={18} />
                            Start Engine
                        </button>
                    )}
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
                {/* Main Content */}
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>

                    {/* Week Selector */}
                    <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: 'var(--spacing-md)', letterSpacing: '0.05em' }}>TRAINING BLOCKS</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
                            {program.weeks?.map((w) => (
                                <button
                                    key={w.week}
                                    onClick={() => setActiveWeek(w.week)}
                                    style={{
                                        padding: '16px',
                                        background: activeWeek === w.week ? 'white' : 'var(--color-surface)',
                                        color: activeWeek === w.week ? 'black' : 'white',
                                        border: `1px solid ${activeWeek === w.week ? program.color : 'var(--color-surface-hover)'}`,
                                        borderRadius: 'var(--radius-md)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <div style={{ fontSize: '0.7rem', fontWeight: '900', opacity: 0.6 }}>WEEK {w.week}</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '800', marginTop: '4px' }}>{w.title.toUpperCase()}</div>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Schedule Section */}
                    {currentWeekData && (
                        <section>
                            <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>
                                <Calendar size={24} style={{ marginRight: '12px', color: 'var(--color-text-primary)' }} />
                                Week {activeWeek}: {currentWeekData.title}
                            </h2>
                            <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                                {currentWeekData.days.map((day, idx) => {
                                    const complete = isSessionComplete(activeWeek, idx + 1);
                                    return (
                                        <div key={idx} id={`day-${idx}`} style={{
                                            background: 'var(--color-surface)',
                                            padding: 'var(--spacing-md)',
                                            borderRadius: 'var(--radius-md)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            border: complete ? '1px solid rgba(76, 175, 80, 0.3)' : '1px solid var(--color-surface-hover)',
                                            opacity: complete ? 0.8 : 1
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <span style={{ fontWeight: '900', color: 'white', letterSpacing: '0.05em' }}>{day.day.toUpperCase()}</span>
                                                    {complete && <CheckCircle size={14} color="#4caf50" />}
                                                </div>
                                                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: program.color, background: `${program.color}15`, padding: '4px 8px', borderRadius: '4px' }}>{day.focus.toUpperCase()}</span>
                                            </div>
                                            <div style={{ paddingLeft: '12px', borderLeft: `2px solid ${program.color}40`, marginBottom: '16px' }}>
                                                {day.exercises.map((ex, i) => (
                                                    <div key={i} style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                                                        <ChevronRight size={14} style={{ marginRight: '8px', color: program.color, opacity: 0.5 }} />
                                                        {ex}
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => handleCompleteSession(activeWeek, idx + 1)}
                                                style={{
                                                    marginTop: 'auto',
                                                    background: complete ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                                    border: `1px solid ${complete ? 'rgba(76, 175, 80, 0.3)' : 'var(--color-surface-hover)'}`,
                                                    color: complete ? '#4caf50' : 'var(--color-text-secondary)',
                                                    padding: '8px',
                                                    borderRadius: 'var(--radius-sm)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '800',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                {complete ? (
                                                    <><Check size={14} /> SESSION COMPLETE</>
                                                ) : (
                                                    'MARK AS COMPLETE'
                                                )}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar / Logic */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '20px', border: '1px solid var(--color-surface-hover)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                            <Activity size={20} style={{ marginRight: '10px' }} /> Energy Systems
                        </h3>
                        <div style={{
                            lineHeight: '1.6',
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                            paddingBottom: '20px',
                            borderBottom: '1px solid var(--color-surface-hover)',
                            marginBottom: '20px'
                        }}>
                            <div dangerouslySetInnerHTML={{ __html: program.science.replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>') }} />
                        </div>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>Target Adaptations</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <Award size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Improve {program.focus}</span>
                            </li>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <Award size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Optimization of {program.category} pathway.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
