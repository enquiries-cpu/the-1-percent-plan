export const programsData = [
    {
        id: 1,
        title: 'Olympic Base 1.0',
        duration: '8 Weeks',
        level: 'Beginner / Intermediate',
        focus: 'Technical Efficiency',
        description: 'The definitive foundation cycle. Rebuild your Snatch and Clean & Jerk mechanics from the ground up.',
        science: 'Based on **Linear Periodization** principles. The focus is on increasing *General Physical Preparedness (GPP)* and movement competency before intensifying load. Utilizes the **Bondarchuk** classification of exercises to prioritize "Developmental" lifts over "Competitive" lifts in the early phase.',
        weeks: [
            {
                week: 1,
                title: 'Technical Foundation',
                days: [
                    { day: 'Day 1', focus: 'Snatch Technical', exercises: ['Tall Snatch (3x3 @ 40%)', 'Snatch Balance (4x3 @ 60%)', 'Overhead Squat (5x5 @ 70%)'] },
                    { day: 'Day 2', focus: 'Clean & Jerk Volume', exercises: ['Power Clean + Push Jerk (5x2+1 @ 65%)', 'Front Squat (4x6 @ 75%)'] },
                    { day: 'Day 3', focus: 'Active Recovery', exercises: ['Mobility Flow (20 min)', 'Core Stability (3 rounds)'] },
                    { day: 'Day 4', focus: 'Pulling Strength', exercises: ['Snatch Deadlift (5x3 @ 90%)', 'Clean Pulls (4x4 @ 95%)'] },
                    { day: 'Day 5', focus: 'Squat Capacity', exercises: ['Back Squat (5x8 @ 65% - Hypertrophy)', 'Unilateral Leg Press (3x10)'] }
                ]
            },
            {
                week: 2,
                title: 'Volume Loading',
                days: [
                    { day: 'Day 1', focus: 'Snatch Precision', exercises: ['Hang Snatch (5x3 @ 65%)', 'Snatch Balance (4x3 @ 70%)', 'Overhead Squat (3x5 @ 75%)'] },
                    { day: 'Day 2', focus: 'Clean & Jerk Drive', exercises: ['Power Clean + Power Jerk (6x2 @ 70%)', 'Front Squat (5x5 @ 80%)'] },
                    { day: 'Day 3', focus: 'Active Recovery', exercises: ['Swim or Row (30 min)', 'Dynamic Stretching'] },
                    { day: 'Day 4', focus: 'Heavy Pulls', exercises: ['Clean Deadlift (5x2 @ 100%)', 'Snatch Pulls (4x3 @ 105%)'] },
                    { day: 'Day 5', focus: 'Back Squat Strength', exercises: ['Back Squat (5x5 @ 75%)', 'Bulgarian Split Squats (3x8)'] }
                ]
            },
            {
                week: 3,
                title: 'Transmutation',
                days: [
                    { day: 'Day 1', focus: 'Full Snatch', exercises: ['Snatch (Work to heavy double @ 80%)', 'OHS (3x3 @ 85%)'] },
                    { day: 'Day 2', focus: 'Full Clean & Jerk', exercises: ['Clean & Jerk (Work to heavy single @ 85%)', 'Front Squat (3x3 @ 85%)'] },
                    { day: 'Day 3', focus: 'Active Recovery', exercises: ['Yoga Flow', 'Light Aerobic Work (20 min)'] },
                    { day: 'Day 4', focus: 'Posterior Strength', exercises: ['Snatch Pulls (5x2 @ 110%)', 'RDLs (4x10)'] },
                    { day: 'Day 5', focus: 'Max Squat Effort', exercises: ['Back Squat (Work to 3RM)', 'Leg Press (3x12)'] }
                ]
            },
            {
                week: 4,
                title: 'Functional Deload',
                days: [
                    { day: 'Day 1', focus: 'Speed Technique', exercises: ['Snatch (3x3 @ 60%)', 'Snatch Balance (3x3 @ 50%)'] },
                    { day: 'Day 2', focus: 'Power Accuracy', exercises: ['Power Clean + Push Jerk (4x2 @ 60%)', 'Front Squat (4x4 @ 65%)'] },
                    { day: 'Day 3', focus: 'Rest', exercises: ['Total Rest'] },
                    { day: 'Day 4', focus: 'Light Pulls', exercises: ['Clean Deadlift (3x3 @ 70%)'] },
                    { day: 'Day 5', focus: 'Priming', exercises: ['Back Squat (3x5 @ 60%)', 'Mobility Core Work'] }
                ]
            }
        ],
        color: '#ff5722'
    },
    {
        id: 2,
        title: 'Hypertrophy Hybrid',
        duration: '6 Weeks',
        level: 'Intermediate',
        focus: 'Muscle Size',
        description: 'Traditional Olympic lifting volume mixed with high-rep bodybuilding accessories to pack on mass.',
        science: 'Utilizes **Metabolic Stress** and **Mechanical Tension** drivers of hypertrophy. The Olympic lifts stimulate high-threshold motor units (Type II fibers), while accessory work targets Type I fibers via higher time-under-tension (8-12 rep range), maximizing cross-sectional area (CSA).',
        weeks: [
            {
                week: 1,
                title: 'High Volume Phase',
                days: [
                    { day: 'Day 1', focus: 'Upper Body Push', exercises: ['Strict Press (4x8)', 'Bench Press (4x10)'] },
                    { day: 'Day 2', focus: 'Lower Body Quad', exercises: ['Front Squat (4x8)', 'Hack Squat (3x12)'] },
                    { day: 'Day 3', focus: 'Oly Technique', exercises: ['Snatch (6x2)', 'Clean & Jerk (5x2)'] }
                ]
            },
            {
                week: 2,
                title: 'Metabolic Stress',
                days: [
                    { day: 'Day 1', focus: 'Upper Body Pull', exercises: ['Weighted Pullups (4x6)', 'Barbell Rows (4x10)'] },
                    { day: 'Day 2', focus: 'Posterior Chain', exercises: ['RDLs (4x10)', 'Glute Ham Raise (3x15)'] },
                    { day: 'Day 3', focus: 'Shoulder Hypertrophy', exercises: ['Push Press (4x8)', 'Lateral Raises (3x15)'] }
                ]
            }
        ],
        color: '#d32f2f'
    },
    {
        id: 3,
        title: 'Competition Peaking',
        duration: '4 Weeks',
        level: 'Advanced',
        focus: '1RM Strength',
        description: 'High intensity, low volume. A dedicated taper cycle designed to test your maxes on the platform.',
        science: 'Leverages the **Delayed Transmutation Effect** (Supercompensation). Volume is drastically reduced (by 40-60%) while intensity remains high (>90%) to dissipate fatigue while maintaining neuromuscular adaptations, allowing "fitness" to express itself as "performance".',
        weeks: [
            {
                week: 1,
                title: 'Intensity Ramp',
                days: [
                    { day: 'Day 1', focus: 'Max Effort Snatch', exercises: ['Snatch (Work to 90%)', 'Squat (2x2 @ 85%)'] },
                    { day: 'Day 2', focus: 'Power Production', exercises: ['Power Clean (3x2 @ 75%)', 'Push Press (3x3 @ 80%)'] }
                ]
            },
            {
                week: 2,
                title: 'Peaking Block',
                days: [
                    { day: 'Day 1', focus: 'Max Effort CJ', exercises: ['Clean & Jerk (Work to 95%)'] },
                    { day: 'Day 2', focus: 'Priming', exercises: ['Snatch (3x1 @ 70%)', 'Clean & Jerk (3x1 @ 70%)'] }
                ]
            }
        ],
        color: '#ff9800'
    },
    {
        id: 4,
        title: 'Squat Nemesis',
        duration: '5 Weeks',
        level: 'Intermediate',
        focus: 'Leg Strength',
        description: 'Daily squatting protocols to blast through plateaus. Not for the faint of heart.',
        science: 'Based on **Daily Undulating Periodization (DUP)** and the "Bulgarian" logic of **Specific Adaptation to Imposed Demands (SAID)**. High frequency (squatting 4-5x/week) improves neuromuscular efficiency (inter-muscular coordination) rather than just structural damage.',
        weeks: [
            {
                week: 1,
                title: 'Introduction to Frequency',
                days: [
                    { day: 'Day 1', focus: 'Volume Back Squat', exercises: ['Back Squat (5x5 @ 75%)'] },
                    { day: 'Day 2', focus: 'Pause Front Squat', exercises: ['Front Squat (3s Pause, 4x3 @ 70%)'] }
                ]
            },
            {
                week: 2,
                title: 'Neuromuscular Adaptation',
                days: [
                    { day: 'Day 1', focus: 'Intensity Back Squat', exercises: ['Back Squat (Work to 3RM)'] },
                    { day: 'Day 2', focus: 'Volume Front Squat', exercises: ['Front Squat (4x6 @ 70%)'] }
                ]
            }
        ],
        color: '#7b1fa2'
    },
    {
        id: 5,
        title: 'Technical Restoration',
        duration: '4 Weeks',
        level: 'All Levels',
        focus: 'Movement Quality',
        description: 'A "deload" logic program focusing purely on drill work, positioning, and mobility.',
        science: 'Focuses on **Motor Learning** principles, specifically "Blocked Practice" for refinement. By reducing load to <60%, we eliminate "survival" compensations and allow the athlete to overwrite poor motor patterns with correct kinematic sequences.',
        weeks: [
            {
                week: 1,
                title: 'Motor Patterning',
                days: [
                    { day: 'Day 1', focus: 'First Pull Mechanics', exercises: ['Segment Snatch Deadlift (3 pauses)', 'Snatch Pull (5x3)'] },
                    { day: 'Day 2', focus: 'Overhead Stability', exercises: ['Sots Press (5x5)', 'Duck Walk (3x20m)'] }
                ]
            }
        ],
        color: '#00bcd4'
    },
    {
        id: 6,
        title: 'Pulling Performance',
        duration: '6 Weeks',
        level: 'Intermediate',
        focus: 'Posterior Chain',
        description: 'Deadlift and Pull dominance to fix weak first-pulls and back strength issues.',
        science: 'Prioritizes the **Posterior Chain** (Erector Spinae, Glutes, Hamstrings). Addresses the common "hips rise too fast" error by strengthening the static start position. Uses **Isometric Variations** (pauses) to increase time under tension at the weakest joint angles.',
        weeks: [
            {
                week: 1,
                title: 'Start Position Strength',
                days: [
                    { day: 'Day 1', focus: 'Clean Deadlift', exercises: ['Deficit Clean Deadlift (4x4)', 'RDL (3x8)'] },
                    { day: 'Day 2', focus: 'Snatch Pulls', exercises: ['Snatch High Pull (5x3)', 'Pendlay Rows (4x8)'] }
                ]
            }
        ],
        color: '#3f51b5'
    },
    {
        id: 7,
        title: 'Masters Capacity',
        duration: '8 Weeks',
        level: 'Masters (35+)',
        focus: 'Work Capacity',
        description: 'Optimized volume and recovery ratios specifically designed for the aging athlete.',
        science: 'Adjusts **Volume Load** to account for slower collagen synthesis and hormonal recovery rates in older athletes. The frequency is reduced to 3-4 days, and intensity is waved (High/Low/Medium/Rest) to prevent Central Nervous System (CNS) burnout.',
        weeks: [
            {
                week: 1,
                title: 'Volume Management',
                days: [
                    { day: 'Day 1', focus: 'Main Snatch', exercises: ['Snatch (5x2 @ 80%)', 'OHS (3x3 @ 75%)'] },
                    { day: 'Day 2', focus: 'Mobility/Recovery', exercises: ['Zone 2 Cardio (20min)', 'Foam Rolling'] }
                ]
            }
        ],
        color: '#4caf50'
    },
    {
        id: 8,
        title: 'Speed & Power',
        duration: '4 Weeks',
        level: 'Advanced',
        focus: 'Velocity',
        description: 'Plyometrics and sub-maximal bar loads moving at high velocities to improve Rate of Force Development.',
        science: 'Targets the **Velocity** end of the Force-Velocity curve. Uses **Plyometrics** (Shock Method) and **Contrast Training** (Heavy lift followed immediately by a jump) to enhance Neural Drive and Rate of Force Development (RFD).',
        weeks: [
            {
                week: 1,
                title: 'Developing RFD',
                days: [
                    { day: 'Day 1', focus: 'Contrast Snatch', exercises: ['Snatch Pull + Box Jump', 'Power Snatch (6x2)'] },
                    { day: 'Day 2', focus: 'Plyometrics Lower', exercises: ['Depth Jumps (4x3)', 'Broad Jumps (4x3)'] }
                ]
            }
        ],
        color: '#fbc02d'
    }
];
