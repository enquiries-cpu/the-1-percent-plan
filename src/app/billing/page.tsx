'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { CreditCard, Lock, Check } from 'lucide-react';

export default function BillingPage() {
    const { user, upgradeSubscription, isLoading } = useAuth();
    const [cardNumber, setCardNumber] = useState('');

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate payment validation
        if (cardNumber.length >= 12) {
            await upgradeSubscription();
        }
    };

    return (
        <div className="container" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-md)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '900px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-xl)',
            }}>

                {/* Plan Details */}
                <div style={{ padding: 'var(--spacing-lg)' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: 'var(--spacing-md)' }}>
                        THE <span style={{ color: 'var(--color-brand-orange)' }}>1%</span> PRO
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
                        The complete architecture for elite performance.
                    </p>

                    <ul style={{ display: 'grid', gap: '16px' }}>
                        {['8 Science-Backed Lifting Programs', '5 Gymnastics Skill Phases', 'Daily Workout Dashboard', 'Progress Tracking', 'Cancel Anytime'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
                                <Check size={20} color="var(--color-success)" style={{ marginRight: '12px' }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Payment Form */}
                <div style={{
                    background: 'var(--color-surface)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-surface-hover)'
                }}>
                    <div style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1.25rem' }}>Secure Checkout</h2>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                            <Lock size={14} style={{ marginRight: '6px' }} /> SSL Encrypted
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '16px',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: 'var(--spacing-lg)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid var(--color-surface-hover)'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>PAYMENT DUE TODAY</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>£20.00 <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>/ mo</span></p>
                        </div>
                        <div style={{ background: 'var(--color-brand-orange)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                            MONTHLY
                        </div>
                    </div>

                    <form onSubmit={handlePayment} style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem' }}>Card Information</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 12px 12px 40px',
                                        background: 'black',
                                        border: '1px solid var(--color-surface-hover)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'white',
                                        fontFamily: 'monospace'
                                    }}
                                />
                                <CreditCard size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--color-text-muted)' }} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem' }}>Expiry</label>
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'black',
                                        border: '1px solid var(--color-surface-hover)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'white'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem' }}>CVC</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'black',
                                        border: '1px solid var(--color-surface-hover)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'white'
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{ width: '100%', marginTop: 'var(--spacing-md)', background: 'white', color: 'black', fontWeight: 'bold', padding: '16px', borderRadius: 'var(--radius-md)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {isLoading ? 'PROCESSING...' : 'COMPLETE REGISTRATION'} <Check size={18} style={{ marginLeft: '8px' }} />
                        </button>

                        <button
                            type="button"
                            onClick={() => upgradeSubscription()}
                            style={{
                                width: '100%',
                                marginTop: '8px',
                                background: 'transparent',
                                border: '1px dashed var(--color-text-muted)',
                                color: 'var(--color-text-muted)',
                                padding: '8px',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '0.75rem'
                            }}
                        >
                            Dev: Bypass Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
