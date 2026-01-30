import Link from 'next/link';
import { ArrowRight, Dumbbell, Activity } from 'lucide-react';

export default function Home() {
    return (
        <main className="container" style={{ minHeight: '100vh', padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            {/* Header */}
            <header style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: 'var(--spacing-xs)', letterSpacing: '-0.05em' }}>
                    THE <span style={{ color: 'var(--color-brand-orange)' }}>1%</span>
                </h1>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>Training Plan</p>
                <div style={{ height: '2px', width: '40px', background: 'var(--color-brand-orange)', marginTop: 'var(--spacing-sm)' }}></div>
            </header>

            {/* The 1% Club Philosophy */}
            <section className="animate-fade-in" style={{
                marginBottom: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.2em', color: 'var(--color-brand-orange)', marginBottom: 'var(--spacing-sm)' }}>
                        THE PHILOSOPHY
                    </h2>
                    <p style={{ fontSize: '1.25rem', fontWeight: '500', lineHeight: '1.6', maxWidth: '600px', color: 'white' }}>
                        The 1% Club is built on a single obsession: <span style={{ color: 'var(--color-brand-orange)' }}>doing 1% more every day.</span>
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-sm)', fontStyle: 'italic' }}>
                        This is a journey, not a race. Elite performance is the compound interest of consistency.
                    </p>
                </div>
                {/* Decorative 1% in background */}
                <div style={{
                    position: 'absolute',
                    right: '-10px',
                    bottom: '-20px',
                    fontSize: '8rem',
                    fontWeight: '900',
                    color: 'rgba(255, 255, 255, 0.02)',
                    userSelect: 'none',
                    pointerEvents: 'none'
                }}>1%</div>
            </section>



            {/* Track Selection */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>

                {/* Daily WOD: Programming */}
                <Link href="/wod" className="animate-fade-in" style={{
                    background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(244, 67, 54, 0.05) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-lg)',
                    display: 'block',
                    border: '1px solid var(--color-surface-hover)',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                        <div style={{
                            background: 'rgba(244, 67, 54, 0.1)',
                            padding: '12px',
                            borderRadius: 'var(--radius-md)',
                            color: '#f44336'
                        }}>
                            <Dumbbell size={24} />
                        </div>
                        <span style={{
                            fontSize: '0.7rem',
                            fontWeight: '800',
                            letterSpacing: '0.1em',
                            color: 'var(--color-text-muted)'
                        }}>ELITE PROGRAMMING</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: 'var(--spacing-xs)' }}>DAILY WOD</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        The cornerstone of the 1%. RX, Scaled, & Masters tracks daily.
                    </p>
                    <div className="btn" style={{ width: '100%', background: 'white', color: 'black', fontWeight: 'bold' }}>
                        ENTER HUB
                    </div>
                </Link>

                {/* Track A: Lifting */}
                <Link href="/track-a" className="animate-fade-in" style={{
                    background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(255, 87, 34, 0.05) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-lg)',
                    display: 'block',
                    border: '1px solid var(--color-surface-hover)',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                        <div style={{
                            background: 'rgba(255, 87, 34, 0.1)',
                            padding: '12px',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-brand-orange)'
                        }}>
                            <Dumbbell size={24} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>PHASE: STRENGTH</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: 'var(--spacing-xs)' }}>WEIGHTLIFTING</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        Quant-driven strength cycles. 80-90% elite gap logic.
                    </p>
                    <div className="btn" style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        START LIFTING
                    </div>
                </Link>



                {/* Track C: Metabolic */}
                <Link href="/track-c" className="animate-fade-in" style={{
                    background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(76, 175, 80, 0.05) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-lg)',
                    display: 'block',
                    border: '1px solid var(--color-surface-hover)',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    animationDelay: '0.2s'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                        <div style={{
                            background: 'rgba(76, 175, 80, 0.1)',
                            padding: '12px',
                            borderRadius: 'var(--radius-md)',
                            color: '#4caf50'
                        }}>
                            <Activity size={24} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>PHASE: ENGINE</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: 'var(--spacing-xs)' }}>METABOLIC</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        Energy system development. Intervals, Threshold, & Capacity.
                    </p>
                    <div className="btn" style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        START ENGINE
                    </div>
                </Link>


            </div>
        </main>
    );
}
