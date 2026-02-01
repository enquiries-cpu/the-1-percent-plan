'use client';

import { useState, useEffect } from 'react';
import { programsData } from '@/lib/programData';
import PercentageCalculator from '@/components/shared/PercentageCalculator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, BarChart, Calendar, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [activeWeek, setActiveWeek] = useState(1);
    const [liftRms, setLiftRms] = useState({
        snatch: '',
        'clean & jerk': '',
        'back squat': '',
        'front squat': '',
        deadlift: ''
    });

    useEffect(() => {
        const savedRms = localStorage.getItem('liftRms');
        if (savedRms) {
            setLiftRms(JSON.parse(savedRms));
        }
    }, []);

    const updateRm = (lift: string, value: string) => {
        const newRms = { ...liftRms, [lift.toLowerCase()]: value };
        setLiftRms(newRms);
        localStorage.setItem('liftRms', JSON.stringify(newRms));
    };

    const renderExercise = (ex: string) => {
        const percentMatch = ex.match(/@\s*(\d+)%/);
        if (!percentMatch) return ex;

        const percent = parseInt(percentMatch[1]);
        let baseLift = '';

        const lowerEx = ex.toLowerCase();
        if (lowerEx.includes('snatch')) baseLift = 'snatch';
        else if (lowerEx.includes('clean') || lowerEx.includes('jerk')) baseLift = 'clean & jerk';
        else if (lowerEx.includes('back squat')) baseLift = 'back squat';
        else if (lowerEx.includes('front squat')) baseLift = 'front squat';
        else if (lowerEx.includes('deadlift') || lowerEx.includes('pull')) baseLift = 'deadlift';

        if (baseLift && liftRms[baseLift as keyof typeof liftRms]) {
            const rm = parseFloat(liftRms[baseLift as keyof typeof liftRms]);
            if (!isNaN(rm)) {
                const weight = (rm * (percent / 100)).toFixed(1);
                return (
                    <span>
                        {ex} <span style={{ color: program.color, fontWeight: '700' }}>→ {weight}kg</span>
                    </span>
                );
            }
        }
        return ex;
    };
    const program = programsData.find(p => p.id === parseInt(params.id));

    const handleEnroll = () => {
        if (program) {
            localStorage.setItem('activeProgram', JSON.stringify(program));
            router.push('/track-a');
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
                    <button onClick={handleEnroll} className="btn btn-primary" style={{ background: program.color, cursor: 'pointer' }}>
                        Enroll Now
                    </button>
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
                                    <div key={idx} style={{
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
                                        <div style={{ paddingLeft: '12px', borderLeft: `2px solid ${program.color}40` }}>
                                            {day.exercises.map((ex, i) => (
                                                <div key={i} style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                                                    <ChevronRight size={14} style={{ marginRight: '8px', color: program.color, opacity: 0.5 }} />
                                                    {renderExercise(ex)}
                                                </div>
                                            ))}
                                        </div>
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
                            Enter your maxes to see inline weights in the workout.
                        </p>
                        <div style={{ display: 'grid', gap: '12px' }}>
                            {Object.entries(liftRms).map(([lift, value]) => (
                                <div key={lift}>
                                    <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 'bold' }}>
                                        {lift} (kg)
                                    </label>
                                    <input
                                        type="number"
                                        value={value}
                                        onChange={(e) => updateRm(lift, e.target.value)}
                                        placeholder="Enter kg"
                                        style={{
                                            width: '100%',
                                            background: 'var(--color-surface)',
                                            border: '1px solid var(--color-surface-hover)',
                                            borderRadius: 'var(--radius-md)',
                                            padding: '8px 12px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
