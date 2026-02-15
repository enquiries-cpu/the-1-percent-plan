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
            },
            {
                week: 5,
                title: 'Re-Accumulation',
                days: [
                    { day: 'Day 1', focus: 'Snatch Complexes', exercises: ['Snatch Pull + Snatch (5x2 @ 70%)', 'OHS (4x4 @ 75%)'] },
                    { day: 'Day 2', focus: 'Clean Technical', exercises: ['Clean + Front Squat + Jerk (5x1 @ 70%)', 'Front Squat (4x5 @ 80%)'] },
                    { day: 'Day 3', focus: 'Active Recovery', exercises: ['Zone 2 Cardio (30 min)', 'Prehab'] },
                    { day: 'Day 4', focus: 'Absolute Strength', exercises: ['Clean Deadlift (5x5 @ 100%)', 'Weighted Back Extensions (3x12)'] },
                    { day: 'Day 5', focus: 'Squat Volume', exercises: ['Back Squat (4x8 @ 70%)', 'Step Ups (3x10)'] }
                ]
            },
            {
                week: 6,
                title: 'Intensity Creep',
                days: [
                    { day: 'Day 1', focus: 'Snatch Heavy', exercises: ['Snatch (5x2 @ 80%)', 'Snatch Balance (3x3 @ 80%)'] },
                    { day: 'Day 2', focus: 'Clean & Jerk Heavy', exercises: ['Clean & Jerk (5x2 @ 80%)', 'Front Squat (3x3 @ 85%)'] },
                    { day: 'Day 3', focus: 'Active Recovery', exercises: ['Swimming', 'Mobility'] },
                    { day: 'Day 4', focus: 'Pulling Power', exercises: ['Snatch High Pull (5x3 @ 90%)', 'RDL (4x8)'] },
                    { day: 'Day 5', focus: 'Leg Strength', exercises: ['Back Squat (5x3 @ 85%)', 'Pistol Squats (3x8)'] }
                ]
            },
            {
                week: 7,
                title: 'Pre-Competition',
                days: [
                    { day: 'Day 1', focus: 'Max Snatch', exercises: ['Snatch (Work to Heavy Single @ 90%+)'] },
                    { day: 'Day 2', focus: 'Max Clean & Jerk', exercises: ['Clean & Jerk (Work to Heavy Single @ 90%+)'] },
                    { day: 'Day 3', focus: 'Rest', exercises: ['Total Rest'] },
                    { day: 'Day 4', focus: 'Priming', exercises: ['Power Snatch (3x2 @ 70%)', 'Power Clean (3x2 @ 70%)'] },
                    { day: 'Day 5', focus: 'Squat Maintenance', exercises: ['Back Squat (3x2 @ 80%)'] }
                ]
            },
            {
                week: 8,
                title: 'Test Week',
                days: [
                    { day: 'Day 1', focus: 'Activation', exercises: ['Snatch (3x2 @ 60%)', 'Clean & Jerk (3x2 @ 60%)'] },
                    { day: 'Day 2', focus: 'Rest', exercises: ['Mobility Flow'] },
                    { day: 'Day 3', focus: 'TEST DAY: TOTAL', exercises: ['Snatch (Max Attempt)', 'Clean & Jerk (Max Attempt)'] },
                    { day: 'Day 4', focus: 'Rest', exercises: ['Rest'] },
                    { day: 'Day 5', focus: 'Fun / Bodybuilding', exercises: ['Choose 3 favorite accessories (3x10)'] }
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
            },
            {
                week: 3,
                title: 'Functional Hypertrophy',
                days: [
                    { day: 'Day 1', focus: 'Heavy Push', exercises: ['Bench Press (5x5)', 'Incline DB Press (4x8)'] },
                    { day: 'Day 2', focus: 'Heavy Legs', exercises: ['Back Squat (5x5)', 'Walking Lunges (3x20)'] },
                    { day: 'Day 3', focus: 'Speed Oly', exercises: ['Power Snatch (6x2 @ 70%)', 'Power Clean (6x2 @ 70%)'] }
                ]
            },
            {
                week: 4,
                title: 'Resensitization',
                days: [
                    { day: 'Day 1', focus: 'Deload Push', exercises: ['Push Ups (3x20)', 'DB Flys (3x12)'] },
                    { day: 'Day 2', focus: 'Deload Legs', exercises: ['Goblet Squats (3x10)', 'Leg Curls (3x15)'] },
                    { day: 'Day 3', focus: 'Flow', exercises: ['Barbell Complex (5 sets)', 'Cardio (20 min)'] }
                ]
            },
            {
                week: 5,
                title: 'Strength-Hypertrophy',
                days: [
                    { day: 'Day 1', focus: 'Upper Power', exercises: ['Push Press (5x3)', 'Weighted Dips (4x6)'] },
                    { day: 'Day 2', focus: 'Lower Power', exercises: ['Front Squat (Work to 3RM)', 'Box Jumps (5x5)'] },
                    { day: 'Day 3', focus: 'Heavy Oly', exercises: ['Snatch (Work to Heavy Single)', 'Clean & Jerk (Work to Heavy Single)'] }
                ]
            },
            {
                week: 6,
                title: 'Max Pump / Test',
                days: [
                    { day: 'Day 1', focus: 'Chest/Back', exercises: ['Bench Press (Test 1RM)', 'Pull Ups (Max reps)'] },
                    { day: 'Day 2', focus: 'Legs/Shoulders', exercises: ['Back Squat (Test 1RM)', 'DB Press (3xMax)'] },
                    { day: 'Day 3', focus: 'Total Body', exercises: ['CrossFit WOD "Fran" or similar'] }
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
                title: 'Volume Taper',
                days: [
                    { day: 'Day 1', focus: 'Heavy Single CJ', exercises: ['Clean & Jerk (Work to 92%)', 'Front Squat (2x1 @ 85%)'] },
                    { day: 'Day 2', focus: 'Speed Work', exercises: ['Snatch (3x2 @ 70%)', 'Clean (3x2 @ 70%)'] }
                ]
            },
            {
                week: 3,
                title: 'Max Intensity',
                days: [
                    { day: 'Day 1', focus: 'Openers', exercises: ['Snatch (Work to Opener - approx 95%)', 'Clean & Jerk (Work to Opener)'] },
                    { day: 'Day 2', focus: 'Priming', exercises: ['Power Snatch (3x1 @ 60%)', 'Power Clean (3x1 @ 60%)'] }
                ]
            },
            {
                week: 4,
                title: 'Competition Week',
                days: [
                    { day: 'Day 1', focus: 'Flush', exercises: ['Muscle Snatch (3x3 @ 40%)', 'Back Squat (3x3 @ 50%)'] },
                    { day: 'Day 2', focus: 'COMPETITION DAY', exercises: ['Snatch 1-1-1', 'Clean & Jerk 1-1-1'] }
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
            },
            {
                week: 3,
                title: 'Wave 2 Volume',
                days: [
                    { day: 'Day 1', focus: 'Volume BS', exercises: ['Back Squat (6x6 @ 75%)'] },
                    { day: 'Day 2', focus: 'Pause FS', exercises: ['Front Squat (Pause, 5x3 @ 75%)'] }
                ]
            },
            {
                week: 4,
                title: 'Wave 2 Intensity',
                days: [
                    { day: 'Day 1', focus: 'Heavy Double', exercises: ['Back Squat (Work to 2RM)'] },
                    { day: 'Day 2', focus: 'Heavy Single FS', exercises: ['Front Squat (Work to 1RM)'] }
                ]
            },
            {
                week: 5,
                title: 'Supercompensation',
                days: [
                    { day: 'Day 1', focus: 'Flush', exercises: ['Back Squat (3x5 @ 50%)'] },
                    { day: 'Day 2', focus: 'TEST DAY', exercises: ['Back Squat (New 1RM Attempt)'] }
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
            },
            {
                week: 2,
                title: 'Positional Strength',
                days: [
                    { day: 'Day 1', focus: 'Second Pull Emphasis', exercises: ['Snatch High Pull from Blocks (5x3)', 'Clean Pull from Blocks (5x3)'] },
                    { day: 'Day 2', focus: 'Catch Position', exercises: ['Heaving Snatch Balance (5x3)', 'Tall Clean (5x3)'] }
                ]
            },
            {
                week: 3,
                title: 'Speed & Timing',
                days: [
                    { day: 'Day 1', focus: 'Under the Bar', exercises: ['Tall Snatch (4x3)', 'Tall Clean (4x3)'] },
                    { day: 'Day 2', focus: 'Jerk Timing', exercises: ['Jerk Balance (4x3)', 'Press in Split (4x5)'] }
                ]
            },
            {
                week: 4,
                title: 'Integration',
                days: [
                    { day: 'Day 1', focus: 'Full Lifts (Tempo)', exercises: ['Tempo Snatch (Slow Pull: 3s Floor to Hip, Pause Catch: 3s in Bottom) (5x2 @ 60%)', 'Tempo Clean (Slow Pull: 3s Floor to Hip, Pause Catch: 3s in Bottom) (5x2 @ 60%)'] },
                    { day: 'Day 2', focus: 'Flow', exercises: ['Barbell Complex: Clean Pull + Hang Power Clean + Front Squat + Push Press + Back Squat (5 Rounds, 1 rep each, build weight)'] }
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
            },
            {
                week: 2,
                title: 'Volume Pulls',
                days: [
                    { day: 'Day 1', focus: 'Volume DL', exercises: ['Clean Deadlift (5x5 @ 85%)'] },
                    { day: 'Day 2', focus: 'Accessories', exercises: ['Good Mornings (3x10)', 'Weighted Pull Ups (3x8)'] }
                ]
            },
            {
                week: 3,
                title: 'Intensity Pulls',
                days: [
                    { day: 'Day 1', focus: 'Heavy DL', exercises: ['Snatch Deadlift (5x3 @ 100% of Snatch)'] },
                    { day: 'Day 2', focus: 'Dynamic', exercises: ['Speed Pulls (8x2 @ 70%)'] }
                ]
            },
            {
                week: 4,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Light Hinge', exercises: ['RDL (3x10 light)', 'Back Extensions (3x15)'] },
                    { day: 'Day 2', focus: 'Mobility', exercises: ['Hip Flow'] }
                ]
            },
            {
                week: 5,
                title: 'Specialization',
                days: [
                    { day: 'Day 1', focus: 'Clean Pull Heavy', exercises: ['Clean Pull (5x2 @ 105%)'] },
                    { day: 'Day 2', focus: 'Snatch Pull Heavy', exercises: ['Snatch Pull (5x2 @ 105%)'] }
                ]
            },
            {
                week: 6,
                title: 'Testing',
                days: [
                    { day: 'Day 1', focus: 'Max Deadlift', exercises: ['Deadlift (1RM Attempt)'] },
                    { day: 'Day 2', focus: 'Recovery', exercises: ['Walk / Swim'] }
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
            },
            {
                week: 2,
                title: 'Moderate Load',
                days: [
                    { day: 'Day 1', focus: 'Main Clean', exercises: ['Clean & Jerk (5x2 @ 80%)', 'Front Squat (3x3 @ 80%)'] },
                    { day: 'Day 2', focus: 'Capacity', exercises: ['EMOM 10: 1 Power Clean'] }
                ]
            },
            {
                week: 3,
                title: 'Intensity',
                days: [
                    { day: 'Day 1', focus: 'Heavy Singles', exercises: ['Snatch (Work to Heavy Single)', 'CJ (Work to Heavy Single)'] },
                    { day: 'Day 2', focus: 'Rest', exercises: ['Total Rest'] }
                ]
            },
            {
                week: 4,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Technique', exercises: ['Snatch (3x3 @ 60%)', 'CJ (3x3 @ 60%)'] }
                ]
            },
            {
                week: 5,
                title: 'Volume +',
                days: [
                    { day: 'Day 1', focus: 'Snatch Volume', exercises: ['Snatch (6x2 @ 82%)'] },
                    { day: 'Day 2', focus: 'Accessories', exercises: ['DB Row', 'DB Press'] }
                ]
            },
            {
                week: 6,
                title: 'Intensity +',
                days: [
                    { day: 'Day 1', focus: 'CJ Heavy', exercises: ['Clean & Jerk (5x2 @ 85%)'] }
                ]
            },
            {
                week: 7,
                title: 'Peak',
                days: [
                    { day: 'Day 1', focus: 'Complexes', exercises: ['Snatch + OHS (Max)', 'Clean + Jerk (Max)'] }
                ]
            },
            {
                week: 8,
                title: 'Test',
                days: [
                    { day: 'Day 1', focus: 'Total', exercises: ['Snatch 1RM', 'CJ 1RM'] }
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
                    { day: 'Day 1', focus: 'Contrast Snatch', exercises: ['Snatch Pull + Box Jump (4 sets x 3+3 reps)', 'Power Snatch (6x2)'] },
                    { day: 'Day 2', focus: 'Plyometrics Lower', exercises: ['Depth Jumps (4x3)', 'Broad Jumps (4x3)'] }
                ]
            },
            {
                week: 2,
                title: 'Loaded Power',
                days: [
                    { day: 'Day 1', focus: 'Weighted Jumps', exercises: ['Trap Bar Jumps (5x3)', 'Weighted Box Jumps (5x3)'] },
                    { day: 'Day 2', focus: 'Ballistic Upper', exercises: ['Med Ball Slams (5x8)', 'Plyo Pushups (5x5)'] }
                ]
            },
            {
                week: 3,
                title: 'Contrast Peaks',
                days: [
                    { day: 'Day 1', focus: 'French Contrast', exercises: ['French Contrast: 4 Rounds (2 Heavy Squat > 2 Hurdle Hops > 3 Loaded Jumps > 10m Sprint)'] },
                    { day: 'Day 2', focus: 'Power Enurance', exercises: ['Power Clean Clusters (3.3.3 x 3 sets)'] }
                ]
            },
            {
                week: 4,
                title: 'Max Velocity',
                days: [
                    { day: 'Day 1', focus: 'Max Height', exercises: ['Max Box Jump Test', 'Max Broad Jump Test'] },
                    { day: 'Day 2', focus: 'Speed', exercises: ['Sprints (10x10m)', 'Agility Drills (e.g., 5-10-5 Pro Agility, L-Drill, T-Drill)'] }
                ]
            }
        ],
        color: '#fbc02d'
    }
];
