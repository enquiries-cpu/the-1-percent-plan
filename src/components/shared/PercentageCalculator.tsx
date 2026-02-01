'use client';

import { useState } from 'react';
import { BarChart2 } from 'lucide-react';

interface PercentageCalculatorProps {
    color?: string;
    title?: string;
}

export default function PercentageCalculator({ color = 'var(--color-brand-orange)', title = 'Percentage Calculator' }: PercentageCalculatorProps) {
    const [calculatorWeight, setCalculatorWeight] = useState<string>('');
    const percentages = [50, 60, 70, 75, 80, 85, 90, 95, 100, 105];

    return (
        <section style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            border: '1px solid var(--color-surface-hover)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)', gap: 'var(--spacing-sm)' }}>
                <BarChart2 size={20} color={color} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{title}</h3>
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
    );
}
