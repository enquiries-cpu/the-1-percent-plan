'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Zap, Activity, PlayCircle, ArrowRight } from 'lucide-react';
import ProtectedRoute from '@/components/shared/ProtectedRoute';

export default function MetabolicPage() {
    const [activeProgram, setActiveProgram] = useState<any>(null);

    useEffect(() => {
        const saved = localStorage.getItem('activeMetabolicProgram');
        if (saved) {
            setActiveProgram(JSON.parse(saved));
        }
    }, []);

    return (
        <ProtectedRoute>
            <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>

                {/* Header */}
                <header style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <Link href="/" style={{ padding: '8px', marginRight: 'var(--spacing-sm)' }}>
                        <ArrowLeft size={24} color="var(--color-text-secondary)" />
                    </Link>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Metabolic Engines</h1>
                        <p style={{ fontSize: '0.875rem', color: '#00bcd4' }}>Energy System Development</p>
                    </div>
                </header>

                {/* Active Program Card */}
                {activeProgram ? (
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
                                    {activeProgram.weeks ? `Week 1 • Day 1 • ${activeProgram.weeks[0]?.days[0]?.focus}` : 'Day 1 • Foundation'}
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
                                ACTIVE ENGINE
                            </div>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-lg)' }}>
                            {/* Safe Access to Day 1 Exercises */}
                            {(activeProgram.weeks ? activeProgram.weeks[0]?.days[0]?.exercises : []).map((exercise: string, index: number) => (
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
                ) : (
                    /* No Active Program State */
                    <section style={{
                        textAlign: 'center',
                        padding: '40px 20px',
                        background: 'var(--color-surface)',
                        borderRadius: 'var(--radius-lg)',
                        marginBottom: 'var(--spacing-xl)',
                        border: '1px solid var(--color-surface-hover)'
                    }}>
                        <Activity size={48} color="#00bcd4" style={{ marginBottom: '20px', opacity: 0.8 }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No Active Cycle</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px', maxWidth: '400px', margin: '0 auto 30px' }}>
                            Choose a specific energy system to target. We have specialized blocks for Aerobic Capacity, Threshold, and Max Power.
                        </p>
                        <Link href="/track-c/programs" className="btn btn-primary" style={{ background: '#00bcd4' }}>
                            View Engine Catalog
                        </Link>
                    </section>
                )}

                {/* Quick Actions / Link to Catalog */}
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <Link href="/track-c/programs" style={{
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 188, 212, 0.1) 100%)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid var(--color-surface-hover)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(0, 188, 212, 0.2)', padding: '8px', borderRadius: '50%', marginRight: '12px' }}>
                                <PlayCircle size={20} color="#00bcd4" />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600' }}>Browse All Engines</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Aerobic, Threshold, Power & Mixed</p>
                            </div>
                        </div>
                        <ArrowRight size={20} style={{ color: 'var(--color-text-secondary)' }} />
                    </Link>
                </div>

            </div>
        </ProtectedRoute>
    );
}
