'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, Dumbbell, Activity, Watch, Smartphone } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    equipment: '',
    wearable: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate sync delay then redirect
      setTimeout(() => router.push('/'), 1500);
    }
  };

  const updateForm = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 'var(--spacing-xl)'
    }}>
      {/* Progress Bar */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div style={{
          height: '6px',
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${(step / 3) * 100}%`,
            background: 'var(--color-brand-orange)',
            transition: 'width 0.4s ease'
          }} />
        </div>
        <p style={{ marginTop: '12px', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          Step {step} of 3
        </p>
      </div>

      {step === 1 && (
        <div className="animate-fade-in">
          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is your primary focus?</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
            We&apos;ll tailor your daily programming based on this goal.
          </p>

          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            <button
              onClick={() => updateForm('goal', 'strength')}
              style={{
                background: formData.goal === 'strength' ? 'rgba(255, 87, 34, 0.1)' : 'var(--color-surface)',
                border: formData.goal === 'strength' ? '2px solid var(--color-brand-orange)' : '2px solid transparent',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                cursor: 'pointer'
              }}
            >
              <div style={{ background: 'rgba(255, 87, 34, 0.2)', padding: '12px', borderRadius: '50%', color: 'var(--color-brand-orange)' }}>
                <Dumbbell size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>Novice Strength Gains</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Focus on linear progression & technique.</p>
              </div>
            </button>

            <button
              onClick={() => updateForm('goal', 'gymnastics')}
              style={{
                background: formData.goal === 'gymnastics' ? 'rgba(33, 150, 243, 0.1)' : 'var(--color-surface)',
                border: formData.goal === 'gymnastics' ? '2px solid var(--color-brand-blue)' : '2px solid transparent',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                cursor: 'pointer'
              }}
            >
              <div style={{ background: 'rgba(33, 150, 243, 0.2)', padding: '12px', borderRadius: '50%', color: 'var(--color-brand-blue)' }}>
                <Activity size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>USAG Level 4 Progression</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Skill mastery for floor & bar routines.</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Available Equipment</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
            Select what you have access to right now.
          </p>

          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            {['Full Gym Access', 'Home Garage (Barbell + Rack)', 'Kettlebells Only'].map((eq) => (
              <button
                key={eq}
                onClick={() => updateForm('equipment', eq)}
                style={{
                  background: formData.equipment === eq ? 'var(--color-surface-hover)' : 'var(--color-surface)',
                  border: formData.equipment === eq ? '2px solid var(--color-brand-orange)' : '2px solid transparent',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                {eq}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in">
          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Sync Wearables</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
            Connect your device to enable &quot;Daily Readiness&quot; logic.
          </p>

          <div style={{ display: 'grid', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
            <button
              onClick={() => updateForm('wearable', 'apple')}
              style={{
                background: formData.wearable === 'apple' ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-surface)',
                border: formData.wearable === 'apple' ? '2px solid white' : '2px solid transparent',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Smartphone size={32} style={{ marginBottom: '8px' }} />
              <span>Apple Health</span>
            </button>

            <button
              onClick={() => updateForm('wearable', 'garmin')}
              style={{
                background: formData.wearable === 'garmin' ? 'rgba(33, 150, 243, 0.1)' : 'var(--color-surface)',
                border: formData.wearable === 'garmin' ? '2px solid var(--color-brand-blue)' : '2px solid transparent',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Watch size={32} style={{ marginBottom: '8px' }} />
              <span>Garmin Connect</span>
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
        <button
          className="btn btn-primary"
          style={{ width: '100%', fontSize: '1.1rem' }}
          onClick={handleNext}
          disabled={!formData.goal && step === 1 || !formData.equipment && step === 2 || !formData.wearable && step === 3}
        >
          {step === 3 ? (formData.wearable ? 'Sync & Finish' : 'Select Provider') : 'Continue'}
          {step !== 3 && <ArrowRight size={20} style={{ marginLeft: '8px' }} />}
        </button>
      </div>
    </div>
  );
}
