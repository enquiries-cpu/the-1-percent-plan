'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, PlayCircle, BarChart2, RefreshCw } from 'lucide-react';
import ProtectedRoute from '@/components/shared/ProtectedRoute';

export default function LiftingPage() {
    const [activeProgram, setActiveProgram] = useState<any>(null);

    useEffect(() => {
        const saved = localStorage.getItem('activeProgram');
        if (saved) {
            setActiveProgram(JSON.parse(saved));
        }
    }, []);

    return (
        <ProtectedRoute>
            <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>

                <header style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <Link href="/" style={{ padding: '8px', marginRight: 'var(--spacing-sm)' }}>
                        <ArrowLeft size={24} color="var(--color-text-secondary)" />
                    </Link>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Today's Session</h1>
                </header>

                {/* Main Set - Gap Method or Active Program */}
                <section style={{
                    background: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-lg)',
                    marginBottom: 'var(--spacing-md)',
                    borderLeft: activeProgram ? `4px solid ${activeProgram.color}` : '4px solid var(--color-brand-orange)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>
                                {activeProgram ? activeProgram.title : 'Snatch (Competition)'}
                            </h2>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                {activeProgram ? (activeProgram.weeks ? `Week 1 • Day 1 • ${activeProgram.weeks[0]?.days[0]?.focus}` : `Day 1 • ${activeProgram.schedule?.[0]?.focus}`) : 'Category A • Gap Method Active'}
                            </p>
                        </div>
                        <div style={{
                            background: activeProgram ? activeProgram.color : 'var(--color-brand-orange)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            {activeProgram ? 'ACTIVE CYCLE' : 'TARGET: 85%'}
                        </div>
                    </div>

                    {activeProgram ? (
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
                    ) : (
                        <>
                            <div style={{ margin: 'var(--spacing-lg) 0', textAlign: 'center' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'monospace' }}>92<span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>kg</span></div>
                                <p style={{ color: 'var(--color-text-muted)' }}>Auto-regulated based on RPE 7</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                <button className="btn btn-secondary" style={{ width: '100%' }}>RPE 7</button>
                                <button className="btn btn-secondary" style={{ width: '100%' }}>RPE 8</button>
                            </div>
                        </>
                    )}
                </section>




                {/* Quick Actions */}
                <div style={{ marginTop: 'var(--spacing-xl)', display: 'grid', gap: 'var(--spacing-md)' }}>
                    <Link href="/track-a/programs" style={{
                        background: 'var(--color-surface)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid var(--color-surface-hover)'
                    }}>
                        <div>
                            <h4 style={{ fontWeight: '600' }}>Browse Training Programs</h4>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>8 specialized cycles available</p>
                        </div>
                        <ArrowLeft size={20} style={{ transform: 'rotate(180deg)', color: 'var(--color-text-secondary)' }} />
                    </Link>
                </div>

                {/* History/Analytics Preview */}
                <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)', overflowX: 'auto', paddingBottom: '8px' }}>
                    <div style={{
                        minWidth: '140px',
                        background: 'var(--color-surface)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-md)'
                    }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Best 1RM</p>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>108kg</p>
                    </div>
                    <div style={{
                        minWidth: '140px',
                        background: 'var(--color-surface)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-md)'
                    }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Avg Velocity</p>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>1.8 m/s</p>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
