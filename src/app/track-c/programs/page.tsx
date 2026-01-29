'use client';

import { metabolicData } from '@/lib/metabolicData';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap, Activity } from 'lucide-react';

export default function MetabolicProgramsPage() {
    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <Link href="/track-c" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                    <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back to Dashboard
                </Link>
                <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Metabolic Engines</h1>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                    Structured energy system protocols designed to increase work capacity, threshold power, and recovery speed.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {metabolicData.map((program, index) => (
                    <Link href={`/track-c/programs/${program.id}`} key={program.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="animate-fade-in" style={{
                            background: 'var(--color-surface)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            border: '1px solid var(--color-surface-hover)',
                            transition: 'transform 0.2s',
                            animationDelay: `${index * 0.1}s`,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ height: '6px', background: program.color }} />
                            <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'flex-start' }}>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        color: program.color,
                                        background: `${program.color}15`,
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {program.category}
                                    </span>
                                    {program.level && (
                                        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', border: '1px solid var(--color-surface-hover)', padding: '2px 6px', borderRadius: '4px' }}>
                                            {program.level}
                                        </span>
                                    )}
                                </div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>{program.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', flex: 1 }}>
                                    {program.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    gap: '16px',
                                    paddingTop: '16px',
                                    borderTop: '1px solid var(--color-surface-hover)',
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.8rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Clock size={14} style={{ marginRight: '6px' }} /> {program.duration}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Zap size={14} style={{ marginRight: '6px' }} /> {program.intensity.split('(')[0]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
