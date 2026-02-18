'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
    const { signUp, isLoading } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (username && email && password) {
            const { error } = await signUp(email, password, username);
            if (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div className="container" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-md)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                background: 'var(--color-surface)',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-surface-hover)'
            }}>
                <div style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '8px' }}>Join THE 1%</h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Elite programming for those who refuse to be average.</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-md mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem' }}>Username</label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem' }}>Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem' }}>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{ width: '100%', marginTop: '8px', background: 'white', color: 'black', fontWeight: 'bold', padding: '12px', borderRadius: 'var(--radius-md)', border: 'none' }}
                    >
                        {isLoading ? 'INITIATING...' : 'SECURE ACCESS'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Already have an account? <Link href="/login" style={{ color: 'var(--color-brand-orange)' }}>Sign In</Link>
                </p>
            </div>
        </div>
    );
}
