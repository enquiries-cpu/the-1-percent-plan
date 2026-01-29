export const metabolicData = [
    {
        id: 1,
        title: 'Aerobic Engine Builder',
        category: 'Endurance',
        duration: '8 Weeks',
        intensity: 'Low (RPE 3-4)',
        level: 'All Levels',
        focus: 'Aerobic Capacity',
        description: 'Zone 2 volume progression to build an unbreakable cardiovascular base.',
        science: 'Training in **Zone 2** (60-70% Max HR) maximizes **fat oxidation** and improves mitochondrial density in Type I muscle fibers. This 8-week cycle progressively increases total volume (Time in Zone) while maintaining strict intensity caps to avoid "garbage mileage".',
        weeks: [
            {
                week: 1,
                title: 'Base Assessment',
                days: [
                    { day: 'Day 1', focus: 'Zone 2 Establish', exercises: ['45 min Bike Erg (Hold consistent RPM)'] },
                    { day: 'Day 2', focus: 'Active Recovery', exercises: ['30 min Walk or Swim'] },
                    { day: 'Day 3', focus: 'Cadence Drills', exercises: ['30 min Ride (5 min @ 70rpm / 5 min @ 90rpm)'] }
                ]
            },
            {
                week: 2,
                title: 'Volume Step 1',
                days: [
                    { day: 'Day 1', focus: 'Linear Volume', exercises: ['50 min Bike/Row (Zone 2)'] },
                    { day: 'Day 2', focus: 'Flush', exercises: ['30 min Easy Movement'] },
                    { day: 'Day 3', focus: 'Mixed Modal Z2', exercises: ['45 min AMRAP (Bike/Row/Jog) @ nasal breath pace'] }
                ]
            },
            {
                week: 3,
                title: 'Volume Step 2',
                days: [
                    { day: 'Day 1', focus: 'Linear Volume', exercises: ['60 min Continuous Effort (Zone 2)'] },
                    { day: 'Day 2', focus: 'Recovery', exercises: ['Mobility Flow'] },
                    { day: 'Day 3', focus: 'Split Intervals', exercises: ['2 x 30 min (Rest 5 min)'] }
                ]
            },
            {
                week: 4,
                title: 'Volume Peak',
                days: [
                    { day: 'Day 1', focus: 'Long Ride', exercises: ['75 min Bike Erg'] },
                    { day: 'Day 2', focus: 'Recovery', exercises: ['Swim 20 min'] },
                    { day: 'Day 3', focus: 'Tempo Z2', exercises: ['3 x 20 min @ upper limit of Z2'] }
                ]
            },
            {
                week: 5,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Recovery', exercises: ['30 min Easy Choice'] },
                    { day: 'Day 2', focus: 'Technique', exercises: ['20 min Rowing Technique Drills'] },
                    { day: 'Day 3', focus: 'Flush', exercises: ['40 min Walk/Jog'] }
                ]
            },
            {
                week: 6,
                title: 'Polarized Intro',
                days: [
                    { day: 'Day 1', focus: 'Long Distance', exercises: ['60 min Run/Row'] },
                    { day: 'Day 2', focus: 'Priming', exercises: ['30 min Bike + 5x10s Sprints'] },
                    { day: 'Day 3', focus: 'Volume', exercises: ['45 min Mixed Machine (Switch every 15 min)'] }
                ]
            },
            {
                week: 7,
                title: 'Capacity',
                days: [
                    { day: 'Day 1', focus: 'Long Haul', exercises: ['90 min Effort (Bike preferred)'] },
                    { day: 'Day 2', focus: 'Active Recovery', exercises: ['Yoga'] },
                    { day: 'Day 3', focus: 'Flux', exercises: ['40 min (2 min Z2 / 1 min Z3)'] }
                ]
            },
            {
                week: 8,
                title: 'Assessment',
                days: [
                    { day: 'Day 1', focus: 'Flush', exercises: ['30 min Easy Spin'] },
                    { day: 'Day 2', focus: 'TEST', exercises: ['60 Minute Time Trial for Calories (Bike or Row)'] }
                ]
            }
        ],
        color: '#00bcd4'
    },
    {
        id: 2,
        title: 'Lactate Threshold',
        category: 'Threshold',
        duration: '6 Weeks',
        intensity: 'Hard (RPE 7-8)',
        level: 'Intermediate',
        focus: 'Sustainable Power',
        description: 'Push your red line. Increase the pace you can hold for 20-40 minutes.',
        science: 'By spending time at or slightly below **OBLA (Onset of Blood Lactate Accumulation)**, you improve the body’s ability to clear lactate, effectively pushing your "red line" higher.',
        weeks: [
            {
                week: 1,
                title: 'Interval Intro',
                days: [
                    { day: 'Day 1', focus: 'Threshold Intervals', exercises: ['3 x 8 min @ Threshold (Rest 4 min)'] },
                    { day: 'Day 2', focus: 'Flush', exercises: ['30 min Z1 Recovery'] },
                    { day: 'Day 3', focus: 'Tempo', exercises: ['20 min Continuous Tempo (Sub-threshold)'] }
                ]
            },
            {
                week: 2,
                title: 'Density',
                days: [
                    { day: 'Day 1', focus: 'Threshold Intervals', exercises: ['4 x 8 min @ Threshold (Rest 3 min)'] },
                    { day: 'Day 2', focus: 'Flush', exercises: ['30 min Easy'] },
                    { day: 'Day 3', focus: 'Over/Unders', exercises: ['3 x 9 min (2 min Under / 1 min Over)'] }
                ]
            },
            {
                week: 3,
                title: 'Duration',
                days: [
                    { day: 'Day 1', focus: 'Long Intervals', exercises: ['3 x 12 min @ Threshold (Rest 5 min)'] },
                    { day: 'Day 2', focus: 'Recovery', exercises: ['Mobility Flow'] },
                    { day: 'Day 3', focus: 'Continuous', exercises: ['30 min Time Trial Pace'] }
                ]
            },
            {
                week: 4,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Short Intervals', exercises: ['2 x 10 min @ 85% effort'] },
                    { day: 'Day 2', focus: 'Easy', exercises: ['30 min walk'] }
                ]
            },
            {
                week: 5,
                title: 'Specific Power',
                days: [
                    { day: 'Day 1', focus: 'Classic Threshold', exercises: ['2 x 20 min (Rest 5 min)'] },
                    { day: 'Day 2', focus: 'Flush', exercises: ['40 min Z1'] },
                    { day: 'Day 3', focus: 'VO2 Touch', exercises: ['5 x 3 min @ VO2 Max (Rest 3 min)'] }
                ]
            },
            {
                week: 6,
                title: 'Test',
                days: [
                    { day: 'Day 1', focus: 'Warmup', exercises: ['20 min Easy + 3 openers'] },
                    { day: 'Day 2', focus: 'TEST', exercises: ['5km Row or 10km Bike Time Trial'] }
                ]
            }
        ],
        color: '#ff9800'
    },
    {
        id: 3,
        title: 'Anaerobic Power',
        category: 'Anaerobic',
        duration: '4 Weeks',
        level: 'Advanced',
        intensity: 'Max Effort (RPE 10)',
        focus: 'Sprint Capacity',
        description: 'Explosive bursts to improve max wattage and recovery speed.',
        science: 'Utilizes the **ATP-PC System**. Long rest periods are crucial to allow full phosphocreatine replenishment.',
        weeks: [
            {
                week: 1,
                title: 'Alactic Base',
                days: [
                    { day: 'Day 1', focus: 'Max Watts', exercises: ['10 x 15s Sprint (Rest 2 min)'] },
                    { day: 'Day 2', focus: 'Recovery', exercises: ['30 min Spin'] },
                    { day: 'Day 3', focus: 'Repeats', exercises: ['15 x 30s Hard / 30s Easy'] }
                ]
            },
            {
                week: 2,
                title: 'Lactic Power',
                days: [
                    { day: 'Day 1', focus: 'Capacity', exercises: ['5 x 60s Max Effort (Rest 4 min)'] },
                    { day: 'Day 2', focus: 'Flush', exercises: ['Slow Jog 30 min'] },
                    { day: 'Day 3', focus: 'Tabata', exercises: ['Tabata Bike (20s on / 10s off) x 8 rounds'] }
                ]
            },
            {
                week: 3,
                title: 'Pain Cave',
                days: [
                    { day: 'Day 1', focus: 'Acid Bath', exercises: ['3 x 90s All Out (Rest 6 min)'] },
                    { day: 'Day 2', focus: 'Recovery', exercises: ['Walk'] },
                    { day: 'Day 3', focus: 'Speed', exercises: ['20 x 10s Sprint (Rest 50s)'] }
                ]
            },
            {
                week: 4,
                title: 'Peak Power',
                days: [
                    { day: 'Day 1', focus: 'Priming', exercises: ['5 x 10s Sprints'] },
                    { day: 'Day 2', focus: 'TEST', exercises: ['Max Calories in 60 seconds (Air Bike)'] }
                ]
            }
        ],
        color: '#f44336'
    },
    {
        id: 4,
        title: 'Mixed Modal Capacity',
        category: 'Conditioning',
        duration: '8 Weeks',
        level: 'Advanced',
        intensity: 'High (RPE 8-9)',
        focus: 'Sport of Fitness',
        description: 'The "Sport of Fitness" style conditioning. Mix monostructural work with gymnastics and weights.',
        science: 'Increases **EPOC** and metabolic flexibility. Prepares the body to perform high-skill movements under cardiorespiratory fatigue.',
        weeks: [
            {
                week: 1,
                title: 'Work:Rest',
                days: [
                    { day: 'Day 1', focus: 'Intervals', exercises: ['5 Rounds: 500m Row / 15 Burpees (Rest 1:1)'] },
                    { day: 'Day 2', focus: 'Chipper', exercises: ['For Time: 50 WB / 40 Situps / 30 KB Swings / 20 Box Jump / 10 Pullup'] },
                    { day: 'Day 3', focus: 'Steady', exercises: ['EMOM 20: 10/8 Cal Bike (Sustainability Focus)'] }
                ]
            },
            {
                week: 2,
                title: 'Interference',
                days: [
                    { day: 'Day 1', focus: 'Leg Stamina', exercises: ['5 Rounds: 400m Run / 20 Air Squats / 15 Lunges'] },
                    { day: 'Day 2', focus: 'Upper Push', exercises: ['AMRAP 12: 12 Push Press / 12 Box Jump'] },
                    { day: 'Day 3', focus: 'Grip', exercises: ['3 Rounds: 500m Row / 20 T2B / 10 DL'] }
                ]
            },
            {
                week: 3,
                title: 'High Heart Rate',
                days: [
                    { day: 'Day 1', focus: 'Sprint', exercises: ['10 Rounds: 10 Burpees / 100m Run'] },
                    { day: 'Day 2', focus: 'Grind', exercises: ['20 min AMRAP: 5 Man Makers / 10 Box Step Overs'] },
                    { day: 'Day 3', focus: 'Recovery', exercises: ['30 min easy bike'] }
                ]
            },
            {
                week: 4,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Flow', exercises: ['EMOM 16: Min 1 Row / Min 2 Plank'] },
                    { day: 'Day 2', focus: 'Skills', exercises: ['Double Under Practice (20 min)'] }
                ]
            },
            {
                week: 5,
                title: 'Complexity',
                days: [
                    { day: 'Day 1', focus: 'Gymnastics', exercises: ['AMRAP 15: 5 C2B Pullups / 10 Pushups / 15 Squats'] },
                    { day: 'Day 2', focus: 'Weightlifting', exercises: ['5 Rounds: 400m Run / 10 Power Cleans (Moderate)'] },
                    { day: 'Day 3', focus: 'Engine', exercises: ['30 min Max Distance Row'] }
                ]
            },
            {
                week: 6,
                title: 'Threshold',
                days: [
                    { day: 'Day 1', focus: 'Fight Gone Bad Style', exercises: ['3 Rounds: 1 min Wallball / 1 min SDHP / 1 min Box Jump / 1 min Push Press / 1 min Row / 1 min REST'] },
                    { day: 'Day 2', focus: 'Sprints', exercises: ['10 x 100m Sprint (Walk back rest)'] }
                ]
            },
            {
                week: 7,
                title: 'Benchmarks',
                days: [
                    { day: 'Day 1', focus: 'The Girls', exercises: ['"Helen": 3 RFT (400m Run / 21 KB Swing / 12 Pullup)'] },
                    { day: 'Day 2', focus: 'Hero Style', exercises: ['20 min AMRAP: Long grinding movements'] }
                ]
            },
            {
                week: 8,
                title: 'Testing',
                days: [
                    { day: 'Day 1', focus: 'Capacity Test', exercises: ['"Murph" (Partitioned) or 5k Run Test'] }
                ]
            }
        ],
        color: '#4caf50'
    }
];
