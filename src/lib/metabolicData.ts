export const metabolicData = [
    {
        id: 1,
        title: 'Aerobic Capacity (Zone 2)',
        category: 'Endurance',
        duration: '45-60 Min',
        intensity: 'Low (RPE 3-4)',
        description: 'Long duration, steady-state effort. **Recommended: Bike Erg, Rower, or Running.**',
        science: 'Training in **Zone 2** (60-70% Max HR) maximizes **fat oxidation** and improves the efficiency of Type I muscle fibers. This is the foundation of all metabolic performance.',
        protocol: {
            warmup: '5 min progressive ramp',
            main: '45 min continuous effort at conversational pace. Nasal breathing recommended.',
            cooldown: '5 min easy spin/walk'
        },
        color: '#00bcd4'
    },
    {
        id: 2,
        title: 'Lactate Threshold Intervals',
        category: 'Threshold',
        duration: '40 Min',
        intensity: 'Hard (RPE 7-8)',
        description: 'Tempo intervals. **Recommended: Rower, Ski Erg, or Running.**',
        science: 'By spending time at or slightly below **OBLA (Onset of Blood Lactate Accumulation)**, you improve the body’s ability to clear lactate, effectively pushing your "red line" higher.',
        protocol: {
            warmup: '10 min easy + 3x30s accelerators',
            main: '3 x 8 minutes @ Threshold Power/Pace (Rest 4 mins)',
            cooldown: '5 min easy recovery'
        },
        color: '#ff9800'
    },
    {
        id: 3,
        title: 'VO2 Max Intervals',
        category: 'Aerobic Power',
        duration: '35 Min',
        intensity: 'Very Hard (RPE 9)',
        description: 'High-intensity intervals. **Best on: Air Bike (Assault/Echo) or Rower.**',
        science: 'Targeting **Zone 5** forces cardiac remodeling (increased stroke volume) and enhances oxygen delivery to working muscles. This is the gold standard for increasing "engine size".',
        protocol: {
            warmup: '10 min progressive + openers',
            main: '5 x 3 minutes @ Max Sustainable Pace (Rest 3 mins 1:1)',
            cooldown: '10 min easy flush'
        },
        color: '#f44336'
    },
    {
        id: 4,
        title: 'Anaerobic Power Sprints',
        category: 'Anaerobic',
        duration: '25 Min',
        intensity: 'Max Effort (RPE 10)',
        description: 'Explosive bursts. **Best on: Air Bike or Ski Erg.**',
        science: 'Utilizes the **ATP-PC System**. Long rest periods are crucial to allow full phosphocreatine replenishment, ensuring each rep is true max power.',
        protocol: {
            warmup: '15 min extensive dynamic warmup',
            main: '10 x 30s ALL OUT Sprints (Rest 90s-2min)',
            cooldown: '5 min walk'
        },
        color: '#9c27b0'
    },
    {
        id: 5,
        title: 'Aerobic Flux (Over/Under)',
        category: 'Mixed',
        duration: '45 Min',
        intensity: 'Variable',
        description: 'Alternating intensities. **Mix: Run + Bike Erg or Rower + Ski Erg.**',
        science: 'Forces the body to process lactate *while still working*. This improves lactate shuttling and metabolic flexibility.',
        protocol: {
            warmup: '10 min easy',
            main: '3 Sets: [4 rounds of (2 min @ Threshold / 2 min @ Zone 2)]. 4 min rest between sets.',
            cooldown: '5 min spin'
        },
        color: '#3f51b5'
    },
    {
        id: 6,
        title: 'Mixed Modal (MetCon)',
        category: 'Conditioning',
        duration: '20 Min',
        intensity: 'High (RPE 8-9)',
        description: 'Functional HIIT. **Equipment: Rower, Kettlebell, Bodyweight.**',
        science: 'Increases **EPOC (Excess Post-exercise Oxygen Consumption)**. High metabolic cost improves work capacity across broad time and modal domains.',
        protocol: {
            warmup: '10 min general mobility',
            main: 'AMRAP 20: 500m Row (or 400m Run), 15 Burpees, 20 KB Swings',
            cooldown: '5 min static stretching'
        },
        color: '#4caf50'
    }
];
