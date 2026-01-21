'use client';

import { programsData } from '@/lib/programData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, BarChart, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();
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

                    {/* Science Section */}
                    <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>
                            <BookOpen size={24} style={{ marginRight: '12px', color: 'var(--color-text-primary)' }} />
                            The Logic (Science-Based)
                        </h2>
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)',
                            lineHeight: '1.6',
                            color: 'var(--color-text-secondary)',
                            borderLeft: `4px solid ${program.color}`
                        }}>
                            <div dangerouslySetInnerHTML={{ __html: program.science.replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>') }} />
                        </div>
                    </section>

                    {/* Schedule Section */}
                    <section>
                        <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>
                            <Calendar size={24} style={{ marginRight: '12px', color: 'var(--color-text-primary)' }} />
                            Weekly Schedule
                        </h2>
                        <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                            {program.schedule.map((day, idx) => (
                                <div key={idx} style={{
                                    background: 'var(--color-surface)',
                                    padding: 'var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                        <span style={{ fontWeight: 'bold', color: 'white' }}>{day.day}</span>
                                        <span style={{ fontSize: '0.875rem', color: program.color }}>{day.focus}</span>
                                    </div>
                                    <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--color-surface-hover)' }}>
                                        {day.exercises.map((ex, i) => (
                                            <div key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                                                • {ex}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar / Stats */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '20px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>Expected Results</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <CheckCircle size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Improve {program.focus} markers significantly.</span>
                            </li>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <CheckCircle size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Based on {program.science.includes('Linear') ? 'Linear' : 'Advanced'} periodization.</span>
                            </li>
                            <li style={{ display: 'flex', marginBottom: '12px', alignItems: 'start' }}>
                                <CheckCircle size={18} color="var(--color-success)" style={{ marginRight: '10px', marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Scalable to {program.level}.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
