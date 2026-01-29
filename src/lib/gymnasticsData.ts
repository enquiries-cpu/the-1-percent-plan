export const gymnasticsData = [
    {
        id: 1,
        title: 'Strict Toes-to-Bar',
        duration: '4 Weeks',
        level: 'Beginner / Intermediate',
        focus: 'Core Compression',
        description: 'Master the strict mechanics of the hanging leg raise to build unbreakable core strength.',
        science: 'Based on **Gymnastic Lever Mechanics**. The ability to bring the toes to the bar is primarily a function of **Active Compression** (hip flexor strength) and **Lat Extension Strength**, not just "abs". This cycle prioritizes end-range hip flexion strength to close the lever arm.',
        weeks: [
            {
                week: 1,
                title: 'Positioning & Tension',
                days: [
                    { day: 'Day 1', focus: 'Hip Flexor Strength', exercises: ['Seated Pike Lifts (4x10)', 'Hanging Knee Raises (4x8)', 'L-Sit Hold (60s)'] },
                    { day: 'Day 2', focus: 'Lat Activation', exercises: ['Straight Arm Lat Pulldowns (4x12)', 'Scapular Pulls (4x10)'] },
                    { day: 'Day 3', focus: 'Integration', exercises: ['Strict T2B Negatives (5x3)', 'V-Ups (3x15)'] },
                    { day: 'Day 4', focus: 'Rest', exercises: ['Hamstring Flossing'] },
                    { day: 'Day 5', focus: 'Volume', exercises: ['Strict T2B (EMOM 10)', 'Hollow Rocks (3x30s)'] }
                ]
            },
            {
                week: 2,
                title: 'Compression Loading',
                days: [
                    { day: 'Day 1', focus: 'Compression Power', exercises: ['Straddle Lifts (4x10)', 'Hanging Leg Raises (4x6)'] },
                    { day: 'Day 2', focus: 'Static Control', exercises: ['L-Sit on Floor (Accumulate 45s)', 'Ring Support (3x30s)'] },
                    { day: 'Day 3', focus: 'Dynamic Tension', exercises: ['T2B with 2s Pause at Top (4x5)', 'Arch Rocks (3x30s)'] },
                    { day: 'Day 4', focus: 'Active Recovery', exercises: ['Z-Press (4x10)', 'Skin the Cat (3 sets)'] },
                    { day: 'Day 5', focus: 'Endurance', exercises: ['Strict T2B (3 sets of Max - 2)', 'Dead Hangs (3x45s)'] }
                ]
            },
            {
                week: 3,
                title: 'Volume Peak',
                days: [
                    { day: 'Day 1', focus: 'Density', exercises: ['Strict T2B (EMOM 12: 4-6 reps)'] },
                    { day: 'Day 2', focus: 'Accessory', exercises: ['Toes-to-Rings (4x8)', 'Candlesticks (3x10)'] }
                ]
            },
            {
                week: 4,
                title: 'Test Week',
                days: [
                    { day: 'Day 1', focus: 'Activation', exercises: ['V-Ups (3x15)', 'Kip Swings (3x10)'] },
                    { day: 'Day 2', focus: 'Max Test', exercises: ['Strict T2B (Max unbroken reps)'] }
                ]
            }
        ],
        color: '#4caf50'
    },
    {
        id: 2,
        title: 'Bar Muscle-Up Mastery',
        duration: '6 Weeks',
        level: 'Advanced',
        focus: 'Explosive Pulling',
        description: 'Unlock the elusive Bar Muscle-Up by deconstructing the glide kip and the aggressive transition.',
        science: 'Focuses on the **Stretch-Shortening Cycle (SSC)**. The Bar Muscle-Up requires converting horizontal momentum (the swing) into vertical displacement. We utilize **Segmented Practice** to isolate the three phases: The Glide Kip (potential energy), The Pull-Around (C-shape mechanics), and The Press-Over.',
        weeks: [
            {
                week: 1,
                title: 'Explosive Pulling',
                days: [
                    { day: 'Day 1', focus: 'Explosive Pulling', exercises: ['Chest-to-Bar Pull-Ups', 'Band Assisted transitions'] },
                    { day: 'Day 2', focus: 'Kip Mechanics', exercises: ['Box Glide Kips', 'Hollow-Arch Snaps'] }
                ]
            },
            {
                week: 2,
                title: 'Aggressive Transitions',
                days: [
                    { day: 'Day 1', focus: 'Transition Strength', exercises: ['Russian Dips', 'Straight Bar Dips'] },
                    { day: 'Day 2', focus: 'Complexes', exercises: ['1 Chest-to-Bar + 1 Bar MU', 'Jumping Bar MU'] }
                ]
            },
            {
                week: 3,
                title: 'Transition Speed',
                days: [
                    { day: 'Day 1', focus: 'Speed Drills', exercises: ['Band Lat Pulldowns (Fast)', 'Hip to Bar drills'] },
                    { day: 'Day 2', focus: 'Low Bar Work', exercises: ['Assisted Transition from floor'] }
                ]
            },
            {
                week: 4,
                title: 'Eccentric Control',
                days: [
                    { day: 'Day 1', focus: 'Negatives', exercises: ['Bar MU Negatives (3x3 - 5s down)'] },
                    { day: 'Day 2', focus: 'Top Support', exercises: ['Support Holds', 'Dips'] }
                ]
            },
            {
                week: 5,
                title: 'Integration',
                days: [
                    { day: 'Day 1', focus: 'Attempts', exercises: ['3x5 Attempts with light band'] },
                    { day: 'Day 2', focus: 'Linked Reps', exercises: ['Attempts at linking 2 reps'] }
                ]
            },
            {
                week: 6,
                title: 'Mastery',
                days: [
                    { day: 'Day 1', focus: 'Test', exercises: ['Max Reps Bar MU'] }
                ]
            }
        ],
        color: '#2196f3'
    },
    {
        id: 3,
        title: 'Ring Muscle-Up',
        duration: '8 Weeks',
        level: 'Advanced',
        focus: 'Stability & False Grip',
        description: 'The gold standard of gymnastics strength. Learn to control instability and master the false grip.',
        science: 'Drills the **False Grip**, which shortens the lever arm of the wrist flexors, allowing for an easier transition above the rings. Emphasizes **Proprioception** and stabilizer muscle recruitment (rotator cuff) to manage the inherent instability of the rings.',
        weeks: [
            {
                week: 1,
                title: 'Stability & False Grip',
                days: [
                    { day: 'Day 1', focus: 'False Grip Strength', exercises: ['False Grip Hangs', 'False Grip Ring Rows'] },
                    { day: 'Day 2', focus: 'Ring Support', exercises: ['Ring Support Hold', 'Ring Dips'] }
                ]
            },
            {
                week: 2,
                title: 'Support Positions',
                days: [
                    { day: 'Day 1', focus: 'Transition Mechanics', exercises: ['Ring MU Transitions', 'Baby Muscle-Ups'] },
                    { day: 'Day 2', focus: 'Pulling Power', exercises: ['Weighted Pull-Ups', 'Explosive High Pulls'] }
                ]
            },
            {
                week: 3,
                title: 'Deep Support',
                days: [
                    { day: 'Day 1', focus: 'Deep Dips', exercises: ['Deep Ring Dips (4x6)'] },
                    { day: 'Day 2', focus: 'Catch', exercises: ['Catch Position Holds (4x10s)'] }
                ]
            },
            {
                week: 4,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Mobility', exercises: ['Shoulder Extension', 'Internal Rotation'] }
                ]
            },
            {
                week: 5,
                title: 'Efficiency',
                days: [
                    { day: 'Day 1', focus: 'Kipping', exercises: ['Ring Kips (4x10)', 'Kip to Support attempts'] }
                ]
            },
            {
                week: 6,
                title: 'Complexes',
                days: [
                    { day: 'Day 1', focus: 'Building', exercises: ['3 False Grip Pull Ups + 3 Dips'] }
                ]
            },
            {
                week: 7,
                title: 'Fatigue Management',
                days: [
                    { day: 'Day 1', focus: 'EMOM', exercises: ['EMOM 10: 1 Ring MU (or attempt)'] }
                ]
            },
            {
                week: 8,
                title: 'Full Test',
                days: [
                    { day: 'Day 1', focus: 'Max Set', exercises: ['Max Unbroken Ring Muscle-Ups'] }
                ]
            }
        ],
        color: '#ff9800'
    },
    {
        id: 4,
        title: 'Butterfly Pull-Ups',
        duration: '4 Weeks',
        level: 'Intermediate',
        focus: 'Cyclical Efficiency',
        description: 'Learn the rhythm and flow of the Butterfly Pull-Up for high-volume CrossFit workflows.',
        science: 'Based on **Cyclical Motor Patterning**. Unlike strict or kipping pull-ups, the particular "oval" path of the butterfly pull-up removes the "stop" at the bottom, utilizing continuous momentum. This program builds the requisite **Shoulder Resilience** to handle the high eccentric forces.',
        weeks: [
            {
                week: 1,
                title: 'Cyclical Efficiency',
                days: [
                    { day: 'Day 1', focus: 'Rhythm Drills', exercises: ['Small Circles (Box drill)', 'Reverse Bicycle Kicks'] },
                    { day: 'Day 2', focus: 'Eccentric Strength', exercises: ['Negatives (3x5)', 'Scapular Pull-Ups'] }
                ]
            },
            {
                week: 2,
                title: 'Speed',
                days: [
                    { day: 'Day 1', focus: 'Small Circles', exercises: ['Rapid small circles (4x15)'] },
                    { day: 'Day 2', focus: 'Pulling', exercises: ['Chin over bar hold (4x15s)'] }
                ]
            },
            {
                week: 3,
                title: 'Volume',
                days: [
                    { day: 'Day 1', focus: 'Integration', exercises: ['Butterfly Pull-ups (4x5)'] },
                    { day: 'Day 2', focus: 'Capacity', exercises: ['EMOM 8: 5 reps'] }
                ]
            },
            {
                week: 4,
                title: 'Test',
                days: [
                    { day: 'Day 1', focus: 'Max', exercises: ['Max Butterfly Pull-ups'] }
                ]
            }
        ],
        color: '#9c27b0'
    },
    {
        id: 5,
        title: 'Gymnastic Strength Support',
        duration: 'Ongoing',
        level: 'All Levels',
        focus: 'Structural Balance',
        description: 'Joint armoring and tendon health to support high-impact gymnastics work.',
        science: 'Utilizes **Connective Tissue Conditioning** (CTC). Tendons adapt slower than muscles (poor vascularity). This program uses **Isometrics** (Straight Arm Strength) and high-rep, low-load eccentrics to stimulate collagen synthesis and prevent overuse injuries like golfer\'s elbow.',
        weeks: [
            {
                week: 1,
                title: 'Structural Balance',
                days: [
                    { day: 'Day 1', focus: 'Straight Arm Strength', exercises: ['Planche Leans', 'German Hang'] },
                    { day: 'Day 2', focus: 'Scapular Health', exercises: ['Crossover Symmetry', 'Prone Y-T-W Raises'] }
                ]
            },
            {
                week: 2,
                title: 'Wrist Health',
                days: [
                    { day: 'Day 1', focus: 'Flexion/Extension', exercises: ['Wrist Pushups', 'Rice Bucket'] },
                    { day: 'Day 2', focus: 'Elbows', exercises: ['Zottman Curls'] }
                ]
            },
            {
                week: 3,
                title: 'Planche Prep',
                days: [
                    { day: 'Day 1', focus: 'Protract', exercises: ['Scap Pushups (Weighted)', 'Planche Lean (Max hold)'] }
                ]
            },
            {
                week: 4,
                title: 'Front Lever Prep',
                days: [
                    { day: 'Day 1', focus: 'Retract', exercises: ['Tuck Lever Hold', 'Ice Cream Makers'] }
                ]
            },
            {
                week: 5,
                title: 'Mobility + Strength',
                days: [
                    { day: 'Day 1', focus: 'Jefferson Curl', exercises: ['Jefferson Curl (5x5 slow)'] }
                ]
            },
            {
                week: 6,
                title: 'Flow',
                days: [
                    { day: 'Day 1', focus: 'Movement', exercises: ['Ido Portal Locomotion'] }
                ]
            }
        ],
        color: '#607d8b'
    }
];
