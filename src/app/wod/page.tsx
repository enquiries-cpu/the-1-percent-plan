'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProtectedRoute from '@/components/shared/ProtectedRoute';
import { ArrowLeft, Share2, Info, Dumbbell } from 'lucide-react';
import { getDailyProgram, WODLevel } from '@/lib/dailyProgramming';

export default function DailyWodPage() {
    const dailyProgram = getDailyProgram();
    const [selectedLevel, setSelectedLevel] = useState<'rx' | 'intermediate' | 'scaled' | 'masters'>('rx');

    // Helper to get the current level data based on selection
    const getLevelData = (): WODLevel => {
        return dailyProgram.variations[selectedLevel];
    };

    const activeLevel = getLevelData();

    return (
        <ProtectedRoute>
            <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
                {/* Header */}
                <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="/" style={{ padding: '8px', marginRight: 'var(--spacing-sm)' }}>
                            <ArrowLeft size={24} color="var(--color-text-secondary)" />
                        </Link>
                        <div>
                            <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Todays Programming</h1>
                            <p style={{ color: 'var(--color-text-secondary)' }}>{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </div>
                </header>

                {/* Level Selectors (Tabs) */}
                <div style={{
                    display: 'flex',
                    gap: '4px',
                    background: 'var(--color-surface)',
                    padding: '4px',
                    borderRadius: 'var(--radius-md)',
                    overflowX: 'auto',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    {(['rx', 'intermediate', 'scaled', 'masters'] as const).map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            style={{
                                flex: 1,
                                padding: '10px 16px',
                                borderRadius: 'var(--radius-sm)',
                                border: 'none',
                                background: selectedLevel === level ? 'var(--color-primary)' : 'transparent',
                                color: selectedLevel === level ? 'var(--color-background)' : 'var(--color-text-secondary)',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Main WOD Card */}
                <section className="animate-fade-in">
                    <div style={{
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-xl)',
                        border: '1px solid var(--color-surface-hover)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '4px' }}>"{dailyProgram.name}"</h2>
                                <span style={{
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    background: 'rgba(255,255,255,0.1)',
                                    fontSize: '0.75rem',
                                    color: 'var(--color-text-secondary)',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold'
                                }}>
                                    {dailyProgram.type} • {dailyProgram.timeDomain}
                                </span>
                            </div>
                            <Dumbbell size={24} color={selectedLevel === 'rx' ? '#f44336' : '#90caf9'} />
                        </div>

                        {/* The Workout */}
                        <div style={{
                            whiteSpace: 'pre-line',
                            fontSize: '1.25rem',
                            fontWeight: '500',
                            marginBottom: 'var(--spacing-xl)',
                            lineHeight: '1.6',
                            fontFamily: 'monospace' // Monospace for that "WOD Board" feel
                        }}>
                            {activeLevel.description}
                        </div>

                        {/* Notes specifically for this level */}
                        {activeLevel.notes && (
                            <div style={{
                                padding: '12px',
                                background: 'rgba(33, 150, 243, 0.1)',
                                borderLeft: '4px solid #2196f3',
                                borderRadius: '0 4px 4px 0',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                <p style={{ fontSize: '0.9rem', color: '#90caf9' }}>
                                    <strong>Target:</strong> {activeLevel.notes}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Coach's Notes / Science */}
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
                            <Info size={16} style={{ marginRight: '8px' }} color="var(--color-brand-orange)" />
                            Coach's Intent
                        </h3>
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                                {dailyProgram.coachNotes}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>STIMULUS</span>
                                    <span style={{ color: '#ff9800', fontWeight: 'bold' }}>{dailyProgram.stimulus}</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>PHYSIOLOGICAL OUTCOME</span>
                                    <span style={{ color: '#4caf50', fontWeight: 'bold' }}>{dailyProgram.outcome}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ProtectedRoute>
    );
}
