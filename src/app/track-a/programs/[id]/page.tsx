'use client';

import { useState, useEffect } from 'react';
import { programsData } from '@/lib/programData';
import PercentageCalculator from '@/components/shared/PercentageCalculator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, BarChart, Calendar, BookOpen, CheckCircle, ChevronRight, Check, PlusCircle, XCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { user, profile, updateProfile, markSessionComplete, toggleEnrollment } = useAuth();
    const program = programsData.find(p => p.id === parseInt(params.id));

    const [activeWeek, setActiveWeek] = useState(1);
    const [liftRms, setLiftRms] = useState({
        snatch: '',
        'clean & jerk': '',
        'power snatch': '',
        'power clean': '',
        'back squat': '',
        'front squat': '',
        deadlift: '',
        'push press': '',
        'strict press': '',
        'bench press': '',
        'overhead squat': ''
    });

    useEffect(() => {
        if (profile?.liftRms) {
            setLiftRms(prev => ({ ...prev, ...profile.liftRms }));
        }
    }, [profile?.liftRms]);

    // Scroll to next session logic
    useEffect(() => {
        if (!program) return;

        // Find first incomplete day in the active week
        const firstIncompleteIdx = program.weeks
            ?.find(w => w.week === activeWeek)
            ?.days.findIndex((_, idx) => !isSessionComplete(activeWeek, idx + 1));

        if (firstIncompleteIdx !== undefined && firstIncompleteIdx !== -1) {
            // Delay slightly to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(`day-${firstIncompleteIdx}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }, [activeWeek, profile?.completedSessions]);

    const updateRm = (lift: string, value: string) => {
        const liftKey = lift.toLowerCase();
        const newRms = { ...liftRms, [liftKey]: value };
        setLiftRms(newRms);
        updateProfile({ liftRms: newRms });
    };

    const isSessionComplete = (week: number, day: number) => {
        if (!profile || !program) return false;
        return (profile.completedSessions || []).includes(`A-${program.id}-${week}-${day}`);
    };

    const handleCompleteSession = (week: number, dayNum: number) => {
        if (!program) return;
        markSessionComplete('A', program.id, week, dayNum);
    };

    const renderExercise = (ex: string, dayFocus: string) => {
        if (!program) return ex;

        const percentMatch = ex.match(/(\d+)\s*%/);
        const lowerEx = ex.toLowerCase();
        const lowerFocus = dayFocus.toLowerCase();

        if (percentMatch) {
            const percent = parseInt(percentMatch[1]);
            let primaryLift = '';
            let fallbackLift = '';

            if (lowerEx.includes('power snatch')) {
                primaryLift = 'power snatch';
                fallbackLift = 'snatch';
            } else if (lowerEx.includes('snatch')) {
                primaryLift = 'snatch';
            } else if (lowerEx.includes('overhead squat') || lowerEx.includes('ohs')) {
                primaryLift = 'overhead squat';
                fallbackLift = 'snatch';
            } else if (lowerEx.includes('power clean')) {
                primaryLift = 'power clean';
                fallbackLift = 'clean & jerk';
            } else if (lowerEx.includes('clean') || lowerEx.includes('jerk')) {
                primaryLift = 'clean & jerk';
            } else if (lowerEx.includes('back squat')) {
                primaryLift = 'back squat';
            } else if (lowerEx.includes('front squat')) {
                primaryLift = 'front squat';
                fallbackLift = 'back squat';
            } else if (lowerEx.includes('deadlift') || lowerEx.includes('pull')) {
                primaryLift = 'deadlift';
            } else if (lowerEx.includes('push press')) {
                primaryLift = 'push press';
                fallbackLift = 'strict press';
            } else if (lowerEx.includes('strict press') || lowerEx.includes('press')) {
                primaryLift = 'strict press';
            } else if (lowerEx.includes('bench')) {
                primaryLift = 'bench press';
            }

            const getWeight = (liftKey: string) => {
                const val = liftRms[liftKey as keyof typeof liftRms];
                return val ? parseFloat(val) : null;
            };

            const rmValue = getWeight(primaryLift) || getWeight(fallbackLift);

            if (rmValue && !isNaN(rmValue)) {
                const weight = (rmValue * (percent / 100)).toFixed(1);
                return (
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                        <span>{ex}</span>
                        <span style={{
                            color: program.color,
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            background: `${program.color}15`,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            border: `1px solid ${program.color}30`
                        }}>→ {weight}kg</span>
                    </div>
                );
            }
        }

        const isRecovery = lowerFocus.includes('recovery') || lowerFocus.includes('mobility') || lowerFocus.includes('rest');
        const isMaxEffort = lowerFocus.includes('max') || lowerFocus.includes('intensity') || lowerFocus.includes('heavy single') || lowerFocus.includes('opener') || lowerFocus.includes('1rm') || lowerFocus.includes('test');
        const isSpeed = lowerFocus.includes('speed') || lowerFocus.includes('power') || lowerFocus.includes('priming') || lowerFocus.includes('dynamic') || lowerFocus.includes('activation');

        if (!isRecovery && !ex.toLowerCase().includes('rest') && !ex.toLowerCase().includes('mobility')) {
            let rpeLabel = 'RPE 7-8';
            let rpeColor = 'var(--color-text-secondary)';

            if (isMaxEffort) {
                rpeLabel = 'RPE 9-9.5';
                rpeColor = 'var(--color-error)';
            } else if (isSpeed) {
                rpeLabel = 'RPE 5-6 Speed';
                rpeColor = 'var(--color-info)';
            }

            return (
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <span>{ex}</span>
                    <span style={{
                        color: rpeColor,
                        opacity: 0.8,
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        padding: '2px 6px',
                        border: '1px solid currentColor',
                        borderRadius: '4px'
                    }}>{rpeLabel}</span>
                </div>
            );
        }

        return ex;
    };

    const isEnrolled = profile?.activeEnrollments?.some(e => e.track === 'A' && e.id === program?.id);

    const handleEnroll = () => {
        if (program) {
            toggleEnrollment('A', program.id);
        }
    };

    if (!program) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                <h1>Program Not Found</h1>
                <Link href="/track-a/programs" className="btn btn-primary" style={{ marginTop: '20px' }}>Back</Link>
            </div>
        );
    }

    const currentWeekData = program.weeks?.find(w => w.week === activeWeek) || program.weeks?.[0];

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            {/* Navigation */}
            <Link href="/track-a/programs" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
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
                            {program.focus}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '8px 0' }}>{program.title}</h1>
                        <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-muted)' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}><Clock size={16} style={{ marginRight: '6px' }} /> {program.duration}</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}><BarChart size={16} style={{ marginRight: '6px' }} /> {program.level}</div>
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
                            Enroll Now
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
                                {currentWeekData.days.map((day, idx) => (
                                    <div key={idx} id={`day-${idx}`} style={{
                                        background: 'var(--color-surface)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid var(--color-surface-hover)'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
                                            <span style={{ fontWeight: '900', color: 'white', letterSpacing: '0.05em' }}>{day.day.toUpperCase()}</span>
                                            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: program.color, background: `${program.color}15`, padding: '4px 8px', borderRadius: '4px' }}>{day.focus.toUpperCase()}</span>
                                        </div>
                                        <div style={{ paddingLeft: '12px', borderLeft: `2px solid ${program.color}40`, marginBottom: '12px' }}>
                                            {day.exercises.map((ex, i) => (
                                                <div key={i} style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                                                    <ChevronRight size={14} style={{ marginRight: '8px', color: program.color, opacity: 0.5, marginTop: '4px' }} />
                                                    {renderExercise(ex, day.focus)}
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handleCompleteSession(activeWeek, idx + 1)}
                                            style={{
                                                marginTop: 'auto',
                                                background: isSessionComplete(activeWeek, idx + 1) ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                                border: `1px solid ${isSessionComplete(activeWeek, idx + 1) ? 'rgba(76, 175, 80, 0.3)' : 'var(--color-surface-hover)'}`,
                                                color: isSessionComplete(activeWeek, idx + 1) ? '#4caf50' : 'var(--color-text-secondary)',
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
                                            {isSessionComplete(activeWeek, idx + 1) ? (
                                                <><Check size={14} /> SESSION COMPLETE</>
                                            ) : (
                                                'MARK AS COMPLETE'
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar / Logic */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '20px', border: '1px solid var(--color-surface-hover)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                            <BookOpen size={20} style={{ marginRight: '10px' }} /> The Science
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

                        <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>Elite Outcomes</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <CheckCircle size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Compound {program.focus} Gains.</span>
                            </li>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <CheckCircle size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Mastery-based progression.</span>
                            </li>
                        </ul>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-md)' }}>
                        <PercentageCalculator color={program.color} title="Quick Table" />
                    </div>

                    {/* 1RM Settings */}
                    <div style={{
                        marginTop: 'var(--spacing-lg)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-surface-hover)'
                    }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center' }}>
                            <BarChart size={18} style={{ marginRight: '8px', color: program.color }} />
                            YOUR 1RMs
                        </h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                            Enter your maxes to see inline weights in the training blocks.
                        </p>

                        <div style={{ display: 'grid', gap: '20px' }}>
                            {/* Olympic Lifts Group */}
                            <div>
                                <h4 style={{ fontSize: '0.65rem', color: program.color, fontWeight: '900', letterSpacing: '0.1em', marginBottom: '8px', borderBottom: `1px solid ${program.color}20`, paddingBottom: '4px' }}>OLYMPIC</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {[
                                        { id: 'snatch', label: 'Snatch' },
                                        { id: 'clean & jerk', label: 'C&J' },
                                        { id: 'power snatch', label: 'P. Snatch' },
                                        { id: 'power clean', label: 'P. Clean' },
                                        { id: 'overhead squat', label: 'OHS' }
                                    ].map(lift => (
                                        <div key={lift.id}>
                                            <input
                                                type="number"
                                                value={liftRms[lift.id as keyof typeof liftRms]}
                                                onChange={(e) => updateRm(lift.id, e.target.value)}
                                                placeholder={lift.label}
                                                style={{
                                                    width: '100%',
                                                    background: 'var(--color-surface)',
                                                    border: '1px solid var(--color-surface-hover)',
                                                    borderRadius: 'var(--radius-sm)',
                                                    padding: '6px 10px',
                                                    color: 'white',
                                                    fontSize: '0.8rem',
                                                    outline: 'none'
                                                }}
                                            />
                                            <div style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)', marginTop: '2px', textAlign: 'center' }}>{lift.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Strength & Squats Group */}
                            <div>
                                <h4 style={{ fontSize: '0.65rem', color: program.color, fontWeight: '900', letterSpacing: '0.1em', marginBottom: '8px', borderBottom: `1px solid ${program.color}20`, paddingBottom: '4px' }}>STRENGTH</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {[
                                        { id: 'back squat', label: 'Back Squat' },
                                        { id: 'front squat', label: 'Front Squat' },
                                        { id: 'deadlift', label: 'Deadlift' },
                                        { id: 'strict press', label: 'Strict Press' },
                                        { id: 'push press', label: 'Push Press' },
                                        { id: 'bench press', label: 'Bench Press' }
                                    ].map(lift => (
                                        <div key={lift.id}>
                                            <input
                                                type="number"
                                                value={liftRms[lift.id as keyof typeof liftRms]}
                                                onChange={(e) => updateRm(lift.id, e.target.value)}
                                                placeholder={lift.label}
                                                style={{
                                                    width: '100%',
                                                    background: 'var(--color-surface)',
                                                    border: '1px solid var(--color-surface-hover)',
                                                    borderRadius: 'var(--radius-sm)',
                                                    padding: '6px 10px',
                                                    color: 'white',
                                                    fontSize: '0.8rem',
                                                    outline: 'none'
                                                }}
                                            />
                                            <div style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)', marginTop: '2px', textAlign: 'center' }}>{lift.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
