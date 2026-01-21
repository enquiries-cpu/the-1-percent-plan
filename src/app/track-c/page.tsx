'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Zap, Flame, Repeat, Wind, Activity } from 'lucide-react';
import ProtectedRoute from '@/components/shared/ProtectedRoute';
import { metabolicData } from '@/lib/metabolicData';

export default function MetabolicPage() {
    const [selectedProtocol, setSelectedProtocol] = useState<any>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);

    // Default to the first protocol or a random one for "Today's Focus"
    const dailyFocus = metabolicData[0];

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setTimer(0);
    };

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
                        <p style={{ fontSize: '0.875rem', color: '#4caf50' }}>Energy System Development</p>
                    </div>
                </header>

                {/* Main View: Either Catalog or Active Session */}
                {!selectedProtocol ? (
                    <>
                        {/* Featured / Daily Prescription */}
                        <section
                            onClick={() => setSelectedProtocol(dailyFocus)}
                            style={{
                                background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(76, 175, 80, 0.1) 100%)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--spacing-lg)',
                                marginBottom: 'var(--spacing-xl)',
                                border: '1px solid var(--color-surface-hover)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                            }}
                            className="animate-fade-in"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
                                <span style={{
                                    background: '#4caf50',
                                    color: 'white',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    marginRight: '12px'
                                }}>
                                    TODAY'S PRESCRIPTION
                                </span>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                    {dailyFocus.duration} • {dailyFocus.intensity}
                                </span>
                            </div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{dailyFocus.title}</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>{dailyFocus.description}</p>

                            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                <button className="btn" style={{ background: '#4caf50', color: 'white' }}>
                                    Start Session
                                </button>
                            </div>
                        </section>

                        {/* Catalog Grid */}
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>Engine Catalog</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            {metabolicData.map((protocol) => (
                                <div
                                    key={protocol.id}
                                    onClick={() => setSelectedProtocol(protocol)}
                                    style={{
                                        background: 'var(--color-surface)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: 'var(--spacing-lg)',
                                        borderLeft: `4px solid ${protocol.color}`,
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <h4 style={{ fontWeight: '600' }}>{protocol.title}</h4>
                                        <Activity size={16} color={protocol.color} />
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{protocol.category}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Active Session View */
                    <section className="animate-fade-in">
                        <button
                            onClick={() => { setSelectedProtocol(null); resetTimer(); }}
                            style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        >
                            <ArrowLeft size={16} style={{ marginRight: '4px' }} /> Back to Catalog
                        </button>

                        <div style={{
                            background: 'var(--color-surface)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--spacing-xl)',
                            marginBottom: 'var(--spacing-lg)',
                            borderTop: `4px solid ${selectedProtocol.color}`
                        }}>
                            <h1 style={{ fontSize: '2rem', marginBottom: '4px' }}>{selectedProtocol.title}</h1>
                            <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--spacing-xl)' }}>
                                <span style={{ display: 'flex', alignItems: 'center' }}><Clock size={14} style={{ marginRight: '4px' }} /> {selectedProtocol.duration}</span>
                                <span style={{ display: 'flex', alignItems: 'center' }}><Zap size={14} style={{ marginRight: '4px' }} /> {selectedProtocol.intensity}</span>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--color-text-primary)' }}>The Science</h3>
                                <div
                                    style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: 'var(--radius-sm)' }}
                                    dangerouslySetInnerHTML={{ __html: selectedProtocol.science.replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>') }}
                                />
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Protocol</h3>

                                <div style={{ display: 'grid', gap: '12px' }}>
                                    <div style={{ display: 'flex', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                                        <span style={{ minWidth: '80px', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Warmup</span>
                                        <span>{selectedProtocol.protocol.warmup}</span>
                                    </div>
                                    <div style={{ display: 'flex', padding: '16px', background: 'rgba(33, 150, 243, 0.1)', borderRadius: '4px', border: '1px solid rgba(33, 150, 243, 0.2)' }}>
                                        <span style={{ minWidth: '80px', fontSize: '0.8rem', color: '#64b5f6', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Main</span>
                                        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{selectedProtocol.protocol.main}</span>
                                    </div>
                                    <div style={{ display: 'flex', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                                        <span style={{ minWidth: '80px', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Cooldown</span>
                                        <span>{selectedProtocol.protocol.cooldown}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Session Timer */}
                            <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)', background: 'black', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ fontSize: '3rem', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: 'var(--spacing-md)', color: isRunning ? '#4caf50' : 'white' }}>
                                    {formatTime(timer)}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)' }}>
                                    <button
                                        className="btn"
                                        onClick={toggleTimer}
                                        style={{
                                            background: isRunning ? 'var(--color-brand-orange)' : '#4caf50',
                                            color: 'white',
                                            minWidth: '120px'
                                        }}
                                    >
                                        {isRunning ? 'Pause' : 'Start Timer'}
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={resetTimer}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>
                )}
            </div>
        </ProtectedRoute>
    );
}
