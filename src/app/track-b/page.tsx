'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Circle, Lock, ArrowRight, PlayCircle } from 'lucide-react';
import ProtectedRoute from '@/components/shared/ProtectedRoute';

export default function GymnasticsPage() {
    const [activeProgram, setActiveProgram] = useState<any>(null);

    useEffect(() => {
        const saved = localStorage.getItem('activeGymnasticsProgram');
        if (saved) {
            setActiveProgram(JSON.parse(saved));
        }
    }, []);

    const skills = [
        { id: 1, name: 'Strength', status: 'completed' },
        { id: 2, name: 'Shapes', status: 'completed' },
        { id: 3, name: 'Progressions', status: 'active' },
        { id: 4, name: 'Drills', status: 'locked' },
        { id: 5, name: 'Spot', status: 'locked' },
        { id: 6, name: 'Can Do', status: 'locked' },
    ];

    return (
        <ProtectedRoute>
            <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
                <header style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <Link href="/" style={{ padding: '8px', marginRight: 'var(--spacing-sm)' }}>
                        <ArrowLeft size={24} color="var(--color-text-secondary)" />
                    </Link>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Gymnastics Track</h1>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-brand-blue)' }}>
                            {activeProgram ? 'Program Active' : 'Skill Tree Mode'}
                        </p>
                    </div>
                </header>

                {/* Active Program Card (Priority) */}
                {activeProgram && (
                    <section className="animate-fade-in" style={{
                        background: 'var(--color-surface)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-lg)',
                        marginBottom: 'var(--spacing-xl)',
                        borderLeft: `4px solid ${activeProgram.color}`
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{activeProgram.title}</h2>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                    {activeProgram.weeks ? `Week 1 • Day 1 • ${activeProgram.weeks[0]?.days[0]?.focus}` : `Day 1 • ${activeProgram.schedule?.[0]?.focus}`}
                                </p>
                            </div>
                            <div style={{
                                background: activeProgram.color,
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                ACTIVE CYCLE
                            </div>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-lg)' }}>
                            {(activeProgram.weeks ? activeProgram.weeks[0]?.days[0]?.exercises : activeProgram.schedule?.[0]?.exercises || []).map((exercise: string, index: number) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '12px',
                                    borderBottom: '1px solid var(--color-surface-hover)',
                                    marginBottom: '8px'
                                }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: `2px solid ${activeProgram.color}`,
                                        marginRight: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        color: activeProgram.color
                                    }}>
                                        {index + 1}
                                    </div>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>{exercise}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Quick Actions (Catalog Link) */}
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <Link href="/track-b/programs" style={{
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(33, 150, 243, 0.1) 100%)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid var(--color-surface-hover)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(33, 150, 243, 0.2)', padding: '8px', borderRadius: '50%', marginRight: '12px' }}>
                                <PlayCircle size={20} color="var(--color-brand-blue)" />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600' }}>Browse Skill Programs</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Toes-to-Bar, Muscle-Ups & More</p>
                            </div>
                        </div>
                        <ArrowRight size={20} style={{ color: 'var(--color-text-secondary)' }} />
                    </Link>
                </div>

                {/* Skill Tree (Secondary) */}
                {!activeProgram && (
                    <>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>Skill Tree (Level 4)</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', position: 'relative' }}>
                            {/* Connector Line */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                bottom: '20px',
                                left: '20px',
                                width: '2px',
                                background: 'var(--color-surface-hover)',
                                zIndex: 0
                            }} />

                            {skills.map((skill, index) => {
                                const isCompleted = skill.status === 'completed';
                                const isActive = skill.status === 'active';

                                return (
                                    <div key={skill.id} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        zIndex: 1,
                                        opacity: skill.status === 'locked' ? 0.5 : 1
                                    }}>
                                        {/* Icon Status */}
                                        <div style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            background: isActive ? 'var(--color-brand-blue)' : 'var(--color-surface)',
                                            border: isCompleted ? '2px solid var(--color-success)' : isActive ? '4px solid rgba(33, 150, 243, 0.3)' : '2px solid var(--color-surface-hover)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 'var(--spacing-md)',
                                            color: isCompleted ? 'var(--color-success)' : 'white'
                                        }}>
                                            {isCompleted ? <CheckCircle size={20} /> : skill.status === 'locked' ? <Lock size={16} /> : <Circle size={16} fill="white" />}
                                        </div>

                                        {/* Card */}
                                        <div style={{
                                            flex: 1,
                                            background: 'var(--color-surface)',
                                            padding: '16px',
                                            borderRadius: 'var(--radius-md)',
                                            border: isActive ? '1px solid var(--color-brand-blue)' : '1px solid transparent',
                                        }}>
                                            <h3 style={{ fontSize: '1rem' }}>{skill.name}</h3>
                                            {isActive && (
                                                <div style={{ marginTop: '8px' }}>
                                                    <div style={{
                                                        height: '4px',
                                                        background: 'var(--color-surface-hover)',
                                                        borderRadius: '4px',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <div style={{
                                                            width: '60%',
                                                            height: '100%',
                                                            background: 'var(--color-brand-blue)'
                                                        }} />
                                                    </div>
                                                    <p style={{ fontSize: '0.75rem', marginTop: '4px', color: 'var(--color-text-muted)' }}>3/5 Drills Completed</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </ProtectedRoute>
    );
}
