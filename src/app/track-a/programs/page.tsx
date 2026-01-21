'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, BarChart, ArrowRight, Zap, Target, Layers } from 'lucide-react';

const programs = [
    {
        id: 1,
        title: 'Olympic Base 1.0',
        duration: '8 Weeks',
        level: 'Beginner / Intermediate',
        focus: 'Technical Efficiency',
        description: 'The definitive foundation cycle. Rebuild your Snatch and Clean & Jerk mechanics from the ground up.',
        color: '#ff5722'
    },
    {
        id: 2,
        title: 'Hypertrophy Hybrid',
        duration: '6 Weeks',
        level: 'Intermediate',
        focus: 'Muscle Size',
        description: 'Traditional Olympic lifting volume mixed with high-rep bodybuilding accessories to pack on mass.',
        color: '#d32f2f'
    },
    {
        id: 3,
        title: 'Competition Peaking',
        duration: '4 Weeks',
        level: 'Advanced',
        focus: '1RM Strength',
        description: 'High intensity, low volume. A dedicated taper cycle designed to test your maxes on the platform.',
        color: '#ff9800'
    },
    {
        id: 4,
        title: 'Squat Nemesis',
        duration: '5 Weeks',
        level: 'Intermediate',
        focus: 'Leg Strength',
        description: 'Daily squatting protocols to blast through plateaus. Not for the faint of heart.',
        color: '#7b1fa2'
    },
    {
        id: 5,
        title: 'Technical Restoration',
        duration: '4 Weeks',
        level: 'All Levels',
        focus: 'Movement Quality',
        description: 'A "deload" logic program focusing purely on drill work, positioning, and mobility.',
        color: '#00bcd4'
    },
    {
        id: 6,
        title: 'Pulling Performance',
        duration: '6 Weeks',
        level: 'Intermediate',
        focus: 'Posterior Chain',
        description: 'Deadlift and Pull dominance to fix weak first-pulls and back strength issues.',
        color: '#3f51b5'
    },
    {
        id: 7,
        title: 'Masters Capacity',
        duration: '8 Weeks',
        level: 'Masters (35+)',
        focus: 'Work Capacity',
        description: 'Optimized volume and recovery ratios specifically designed for the aging athlete.',
        color: '#4caf50'
    },
    {
        id: 8,
        title: 'Speed & Power',
        duration: '4 Weeks',
        level: 'Advanced',
        focus: 'Velocity',
        description: 'Plyometrics and sub-maximal bar loads moving at high velocities to improve Rate of Force Development.',
        color: '#fbc02d'
    }
];

export default function ProgramsPage() {
    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            <header style={{ marginBottom: 'var(--spacing-xl)' }}>
                <Link href="/track-a" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                    <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back to Dashboard
                </Link>
                <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Training Programs</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>Select a cycle to begin your new block.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {programs.map((program) => (
                    <div key={program.id} className="program-card" style={{
                        background: 'var(--color-surface)',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid transparent',
                        transition: 'transform 0.2s, border-color 0.2s'
                    }}>
                        {/* Header / Banner */}
                        <div style={{ padding: '24px', background: `linear-gradient(135deg, ${program.color}20 0%, var(--color-surface) 100%)`, borderBottom: '1px solid var(--color-surface-hover)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    color: program.color,
                                    background: 'rgba(0,0,0,0.3)',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                }}>
                                    {program.focus.toUpperCase()}
                                </span>
                                {program.level.includes('Advanced') && <Zap size={16} color="var(--color-warning)" />}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>{program.title}</h3>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Clock size={16} style={{ marginRight: '6px' }} /> {program.duration}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <BarChart size={16} style={{ marginRight: '6px' }} /> {program.level}
                                </div>
                            </div>

                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '24px', flex: 1 }}>
                                {program.description}
                            </p>

                            <Link href={`/track-a/programs/${program.id}`} className="btn" style={{
                                width: '100%',
                                background: 'var(--color-surface-hover)',
                                color: 'white',
                                border: `1px solid ${program.color}40`,
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                Preview Cycle <ArrowRight size={18} />
                            </Link>

                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .program-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-surface-hover);
        }
      `}</style>
        </div>
    );
}
