'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Star, Activity, CheckCircle, BarChart } from 'lucide-react';
import { gymnasticsData } from '@/lib/gymnasticsData';

export default function GymnasticsProgramsPage() {
    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <Link href="/track-b" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                    <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back to Dashboard
                </Link>
                <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Gymnastics Progressions</h1>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                    Select a skill-specific cycle to master bodyweight mechanics. These programs are designed to be run alongside your normal training.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {gymnasticsData.map((program) => (
                    <div key={program.id} className="program-card" style={{
                        background: 'var(--color-surface)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-lg)',
                        border: '1px solid transparent',
                        transition: 'transform 0.2s, border-color 0.2s',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.borderColor = program.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <span style={{
                                color: program.color,
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                background: `${program.color}15`,
                                padding: '4px 8px',
                                borderRadius: '4px'
                            }}>
                                {program.focus}
                            </span>
                        </div>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{program.title}</h2>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}><Clock size={16} style={{ marginRight: '6px' }} /> {program.duration}</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}><Activity size={16} style={{ marginRight: '6px' }} /> {program.level}</div>
                        </div>

                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)', flex: 1 }}>
                            {program.description}
                        </p>

                        <Link href={`/track-b/programs/${program.id}`} className="btn" style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            background: 'var(--color-surface-hover)',
                            color: 'white'
                        }}>
                            View Progression <ArrowRight size={18} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
