'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, PlayCircle, BarChart2, RefreshCw } from 'lucide-react';
import ProtectedRoute from '@/components/shared/ProtectedRoute';

export default function LiftingPage() {
    const [activeProgram, setActiveProgram] = useState<any>(null);
    const [calculatorWeight, setCalculatorWeight] = useState<string>('');

    const percentages = [50, 60, 70, 75, 80, 85, 90, 95, 100, 105];

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
                        <div style={{ margin: 'var(--spacing-lg) 0', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                            Select a program to start lifting.
                        </div>
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

                {/* Percentage Calculator */}
                <section style={{
                    marginTop: 'var(--spacing-xl)',
                    background: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-lg)',
                    border: '1px solid var(--color-surface-hover)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', gap: 'var(--spacing-sm)' }}>
                        <BarChart2 size={20} color="var(--color-brand-orange)" />
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Percentage Calculator</h3>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label htmlFor="1rm-input" style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: 'var(--spacing-xs)',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Enter Your 1RM (kg)
                        </label>
                        <input
                            id="1rm-input"
                            type="number"
                            placeholder="e.g. 100"
                            value={calculatorWeight}
                            onChange={(e) => setCalculatorWeight(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--color-surface-hover)',
                                borderRadius: 'var(--radius-md)',
                                padding: 'var(--spacing-md)',
                                color: 'white',
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {calculatorWeight && parseFloat(calculatorWeight) > 0 && (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 'var(--spacing-sm)'
                        }}>
                            {percentages.map(pct => {
                                const weight = (parseFloat(calculatorWeight) * (pct / 100)).toFixed(1);
                                return (
                                    <div key={pct} style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>{pct}%</span>
                                        <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{weight}<span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginLeft: '2px' }}>kg</span></span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>


            </div>
        </ProtectedRoute>
    );
}
