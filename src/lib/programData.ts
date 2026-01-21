export const programsData = [
    {
        id: 1,
        title: 'Olympic Base 1.0',
        duration: '8 Weeks',
        level: 'Beginner / Intermediate',
        focus: 'Technical Efficiency',
        description: 'The definitive foundation cycle. Rebuild your Snatch and Clean & Jerk mechanics from the ground up.',
        science: 'Based on **Linear Periodization** principles. The focus is on increasing *General Physical Preparedness (GPP)* and movement competency before intensifying load. Utilizes the **Bondarchuk** classification of exercises to prioritize "Developmental" lifts over "Competitive" lifts in the early phase.',
        schedule: [
            { day: 'Day 1', focus: 'Snatch Technical', exercises: ['Tall Snatch (3x3 @ 40% / RPE 5)', 'Snatch Balance (4x3 @ 60% / RPE 6)', 'Overhead Squat (5x5 @ 70% / RPE 7)'] },
            { day: 'Day 2', focus: 'Clean & Jerk Volume', exercises: ['Power Clean + Push Jerk (5x2+1 @ 65% / RPE 6)', 'Front Squat (4x6 @ 75% / RPE 8)'] },
            { day: 'Day 3', focus: 'Active Recovery', exercises: ['Mobility Flow (20 min)', 'Core Stability (3 rounds)', 'Monostructural Cardio (Zone 2)'] },
            { day: 'Day 4', focus: 'Pulling Strength', exercises: ['Snatch Deadlift (5x3 @ 90% / RPE 8)', 'Clean Pulls (4x4 @ 95% / RPE 8.5)', 'RDLs (3x8 @ RPE 7)'] },
            { day: 'Day 5', focus: 'Squat Capacity', exercises: ['Back Squat (5x8 @ 65% - Hypertrophy)', 'Unilateral Leg Press (3x10 @ RPE 7)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Upper Body Push', exercises: ['Strict Press (4x8 @ RPE 8)', 'Bench Press (4x10 @ RPE 8)', 'Tricep Extensions (3x15 @ RPE 9)'] },
            { day: 'Day 2', focus: 'Lower Body Quad', exercises: ['Front Squat (4x8 @ 65% / RPE 7.5)', 'Hack Squat (3x12 @ RPE 8)', 'Leg Extensions (3x15 @ RPE 9)'] },
            { day: 'Day 3', focus: 'Oly Technique', exercises: ['Snatch (6x2 @ 70% / RPE 6)', 'Clean & Jerk (5x2 @ 75% / RPE 7)'] },
            { day: 'Day 4', focus: 'Upper Body Pull', exercises: ['Weighted Pullups (4x6 @ RPE 8.5)', 'Barbell Rows (4x10 @ RPE 8)', 'Bicep Curls (3x12 @ RPE 9)'] },
            { day: 'Day 5', focus: 'Posterior Chain', exercises: ['RDLs (4x10 @ RPE 8)', 'Glute Ham Raise (3x15 @ RPE 7)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Max Effort Snatch', exercises: ['Snatch (Work up to heavy single @ 90-95% / RPE 9)', 'Squat (2x2 @ 85% / RPE 8.5)'] },
            { day: 'Day 2', focus: 'Power Production', exercises: ['Power Clean (3x2 @ 75% / RPE 6)', 'Push Press (3x3 @ 80% / RPE 7.5)'] },
            { day: 'Day 3', focus: 'Rest', exercises: ['Full Rest Day'] },
            { day: 'Day 4', focus: 'Max Effort CJ', exercises: ['Clean & Jerk (Work up to heavy single @ 90-95% / RPE 9)'] },
            { day: 'Day 5', focus: 'Priming', exercises: ['Snatch (3x1 @ 70% / RPE 6)', 'Clean & Jerk (3x1 @ 70% / RPE 6)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Volume Back Squat', exercises: ['Back Squat (5x5 @ 75% / RPE 7.5)'] },
            { day: 'Day 2', focus: 'Pause Front Squat', exercises: ['Front Squat (3s Pause, 4x3 @ 70% / RPE 7)'] },
            { day: 'Day 3', focus: 'Intensity Back Squat', exercises: ['Back Squat (Work to 3RM @ RPE 9)'] },
            { day: 'Day 4', focus: 'Speed Squat', exercises: ['Box Squat (8x2 @ 60% with bands / RPE 5)'] },
            { day: 'Day 5', focus: 'Volume Front Squat', exercises: ['Front Squat (4x6 @ 70% / RPE 7.5)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'First Pull Mechanics', exercises: ['Segment Snatch Deadlift (3 pauses @ 60% / RPE 4)', 'Snatch Pull (5x3 @ 80% / RPE 6)'] },
            { day: 'Day 2', focus: 'Overhead Stability', exercises: ['Sots Press (5x5 @ Bar-30kg / RPE 5)', 'Duck Walk (3x20m / RPE 5)'] },
            { day: 'Day 3', focus: 'Turnover Drill', exercises: ['Tall Clean (5x3 @ 40% / RPE 5)', 'Scarecrow Snatch (5x3 @ Bar / RPE 3)'] },
            { day: 'Day 4', focus: 'Jerk Timing', exercises: ['Press in Split (5x5 @ 40% / RPE 5)', 'Tall Jerk (5x3 @ 40% / RPE 5)'] },
            { day: 'Day 5', focus: 'Tempo Work', exercises: ['Tempo Squat (5s down, 5s up @ 50% / RPE 6)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Clean Deadlift', exercises: ['Deficit Clean Deadlift (4x4 @ 85% / RPE 7.5)', 'RDL (3x8 @ RPE 7)'] },
            { day: 'Day 2', focus: 'Snatch Pulls', exercises: ['Snatch High Pull (5x3 @ 80% / RPE 7)', 'Pendlay Rows (4x8 @ RPE 8)'] },
            { day: 'Day 3', focus: 'Accessory', exercises: ['Good Mornings (3x10 @ RPE 7)', 'Back Extensions (3x15 @ RPE 6)'] },
            { day: 'Day 4', focus: 'Heavy Pulls', exercises: ['Clean Deadlift (Work to 3RM @ RPE 9)', 'Farmers Carry (4x30m)'] },
            { day: 'Day 5', focus: 'Dynamic Pulls', exercises: ['Snatch (No foot movement, 5x2 @ 65% / RPE 6)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Main Snatch', exercises: ['Snatch (5x2 @ 80% / RPE 7.5)', 'Overhead Squat (3x3 @ 75% / RPE 7)'] },
            { day: 'Day 2', focus: 'Mobility/Recovery', exercises: ['Zone 2 Cardio (20min @ 130bpm)', 'Foam Rolling'] },
            { day: 'Day 3', focus: 'Main Clean', exercises: ['Clean & Jerk (5x2 @ 80% / RPE 7.5)', 'Front Squat (3x3 @ 80% / RPE 8)'] },
            { day: 'Day 4', focus: 'Rest', exercises: ['Full Rest'] },
            { day: 'Day 5', focus: 'Volume Accessories', exercises: ['Light Back Squat (3x8 @ 65%)', 'Rows (3x10)', 'Press (3x10)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Contrast Snatch', exercises: ['Heavy Snatch Pull + Box Jump (5 sets @ 90% / Max Height)', 'Power Snatch (6x2 @ 70% / RPE 6)'] },
            { day: 'Day 2', focus: 'Plyometrics Lower', exercises: ['Depth Jumps (4x3 @ 45cm)', 'Broad Jumps (4x3 @ Max Effort)'] },
            { day: 'Day 3', focus: 'Speed Squat', exercises: ['Speed Squat (8x2 @ 50% + 25% Bands / RPE 6)'] },
            { day: 'Day 4', focus: 'Contrast Jerk', exercises: ['Heavy Jerk Dip + Vertical Jump (5 sets @ 100% / Max Effort)'] },
            { day: 'Day 5', focus: 'Ballistic Upper', exercises: ['Med Ball Throws (5x5)', 'Claping Pushups (5x5)'] }
        ],
        color: '#fbc02d'
    }
];
