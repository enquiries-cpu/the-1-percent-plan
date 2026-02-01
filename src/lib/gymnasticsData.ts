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
                    { day: 'Day 1', focus: 'Hip Flexor Strength', exercises: ['Seated Pike Lifts (4x10)', 'Hanging Knee Raises (4x8)', 'L-Sit Hold (60s accumulated)'] },
                    { day: 'Day 2', focus: 'Lat Activation', exercises: ['Straight Arm Lat Pulldowns (4x12)', 'Scapular Pulls (4x10)'] },
                    { day: 'Day 3', focus: 'Integration', exercises: ['Strict T2B Negatives (5x3 @ 3s descent)', 'V-Ups (3x15)'] },
                    { day: 'Day 4', focus: 'Rest', exercises: ['Hamstring Flossing (2 min/side)'] },
                    { day: 'Day 5', focus: 'Volume', exercises: ['Strict T2B (EMOM 10: 3-5 reps)', 'Hollow Rocks (3x30s)'] }
                ]
            },
            {
                week: 2,
                title: 'Compression Loading',
                days: [
                    { day: 'Day 1', focus: 'Compression Power', exercises: ['Straddle Lifts (4x10)', 'Hanging Leg Raises (4x6)'] },
                    { day: 'Day 2', focus: 'Static Control', exercises: ['L-Sit on Floor (Accumulate 45s)', 'Ring Support (3x30s)'] },
                    { day: 'Day 3', focus: 'Dynamic Tension', exercises: ['T2B with 2s Pause at Top (4x5)', 'Arch Rocks (3x30s)'] },
                    { day: 'Day 4', focus: 'Active Recovery', exercises: ['Z-Press (4x10)', 'Skin the Cat (3x3)'] },
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
                    { day: 'Day 1', focus: 'Explosive Pulling', exercises: ['Chest-to-Bar Pull-Ups (4x6-8)', 'Band Assisted transitions (3x5)'] },
                    { day: 'Day 2', focus: 'Kip Mechanics', exercises: ['Box Glide Kips (4x8)', 'Hollow-Arch Snaps (3x15)'] }
                ]
            },
            {
                week: 2,
                title: 'Aggressive Transitions',
                days: [
                    { day: 'Day 1', focus: 'Transition Strength', exercises: ['Russian Dips (4x6)', 'Straight Bar Dips (4x8)'] },
                    { day: 'Day 2', focus: 'Complexes', exercises: ['EMOM 8: 1 Chest-to-Bar + 1 Bar MU Transition', 'Jumping Bar MU (5x3)'] }
                ]
            },
            {
                week: 3,
                title: 'Transition Speed',
                days: [
                    { day: 'Day 1', focus: 'Speed Drills', exercises: ['Band Lat Pulldowns (Fast) (4x15)', 'Hip to Bar drills (4x8)'] },
                    { day: 'Day 2', focus: 'Low Bar Work', exercises: ['Assisted Transition from floor (5x5)'] }
                ]
            },
            {
                week: 4,
                title: 'Eccentric Control',
                days: [
                    { day: 'Day 1', focus: 'Negatives', exercises: ['Bar MU Negatives (3x3 - 5s descent)'] },
                    { day: 'Day 2', focus: 'Top Support', exercises: ['Support Holds (4x20s)', 'Weighted Dips (4x6)'] }
                ]
            },
            {
                week: 5,
                title: 'Integration',
                days: [
                    { day: 'Day 1', focus: 'Attempts', exercises: ['5 sets of 2-3 Attempts (light band if needed)'] },
                    { day: 'Day 2', focus: 'Linked Reps', exercises: ['EMOM 10: 1-2 Bar MU or Jumping MU'] }
                ]
            },
            {
                week: 6,
                title: 'Mastery',
                days: [
                    { day: 'Day 1', focus: 'Test', exercises: ['Max Unbroken Bar Muscle-Ups'] }
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
                    { day: 'Day 1', focus: 'False Grip Strength', exercises: ['False Grip Hangs (4x20s)', 'False Grip Ring Rows (4x8)'] },
                    { day: 'Day 2', focus: 'Ring Support', exercises: ['Ring Support Hold (Accumulate 60s)', 'Ring Dips (4x6)'] }
                ]
            },
            {
                week: 2,
                title: 'Support Positions',
                days: [
                    { day: 'Day 1', focus: 'Transition Mechanics', exercises: ['Ring MU Transitions (Feet on floor) (3x8)', 'Baby Muscle-Ups (3x5)'] },
                    { day: 'Day 2', focus: 'Pulling Power', exercises: ['Weighted Pull-Ups (5x3)', 'Explosive High Pulls (4x5)'] }
                ]
            },
            {
                week: 3,
                title: 'Deep Support',
                days: [
                    { day: 'Day 1', focus: 'Deep Dips', exercises: ['Deep Ring Dips (4x6 @ 2020 tempo)'] },
                    { day: 'Day 2', focus: 'Catch', exercises: ['Catch Position Holds (4x10s)', 'Ring Dip Negatives (3x5)'] }
                ]
            },
            {
                week: 4,
                title: 'Deload',
                days: [
                    { day: 'Day 1', focus: 'Mobility', exercises: ['Shoulder Extension Stretch (2 min/side)', 'Internal Rotation (2 min/side)'] }
                ]
            },
            {
                week: 5,
                title: 'Efficiency',
                days: [
                    { day: 'Day 1', focus: 'Kipping', exercises: ['Ring Kips (4x10)', 'Kip to Support attempts (5x3)'] }
                ]
            },
            {
                week: 6,
                title: 'Complexes',
                days: [
                    { day: 'Day 1', focus: 'Building', exercises: ['EMOM 10: 1 False Grip Pull Up + 1 Strict Dip'] }
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
                    { day: 'Day 1', focus: 'Rhythm Drills', exercises: ['Small Circles (Box drill) (4x15 reps)', 'Reverse Bicycle Kicks (3x20)'] },
                    { day: 'Day 2', focus: 'Eccentric Strength', exercises: ['Negatives (3x5 @ 3s down)', 'Scapular Pull-Ups (4x12)'] }
                ]
            },
            {
                week: 2,
                title: 'Speed',
                days: [
                    { day: 'Day 1', focus: 'Small Circles', exercises: ['Rapid small circles (4x15 reps)', 'Kip Swings (3x10)'] },
                    { day: 'Day 2', focus: 'Pulling', exercises: ['Chin over bar hold (4x15s)', 'Strict Pull-ups (3xMax)'] }
                ]
            },
            {
                week: 3,
                title: 'Volume',
                days: [
                    { day: 'Day 1', focus: 'Integration', exercises: ['Butterfly Pull-ups (4x5 small range)', 'Box Butterfly Kips (3x10)'] },
                    { day: 'Day 2', focus: 'Capacity', exercises: ['EMOM 8: 5 reps (Sub: 10 Kip Swings)'] }
                ]
            },
            {
                week: 4,
                title: 'Test',
                days: [
                    { day: 'Day 1', focus: 'Max', exercises: ['Max Unbroken Butterfly Pull-ups'] }
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
                    { day: 'Day 1', focus: 'Straight Arm Strength', exercises: ['Planche Leans (4x30s)', 'German Hang (3x20-30s)'] },
                    { day: 'Day 2', focus: 'Scapular Health', exercises: ['Crossover Symmetry (3x10 each)', 'Prone Y-T-W Raises (3x8 each)'] }
                ]
            },
            {
                week: 2,
                title: 'Wrist Health',
                days: [
                    { day: 'Day 1', focus: 'Flexion/Extension', exercises: ['Wrist Pushups (3x15)', 'Rice Bucket Digs (2 mins)'] },
                    { day: 'Day 2', focus: 'Elbows', exercises: ['Zottman Curls (3x12 @ 2020)', 'Band Pushdowns (3x25)'] }
                ]
            },
            {
                week: 3,
                title: 'Planche Prep',
                days: [
                    { day: 'Day 1', focus: 'Protract', exercises: ['Scap Pushups (Weighted) (4x12)', 'Planche Lean (4xMax hold)'] }
                ]
            },
            {
                week: 4,
                title: 'Front Lever Prep',
                days: [
                    { day: 'Day 1', focus: 'Retract', exercises: ['Tuck Lever Hold (4x15-30s)', 'Ice Cream Makers (3x8)'] }
                ]
            },
            {
                week: 5,
                title: 'Mobility + Strength',
                days: [
                    { day: 'Day 1', focus: 'Jefferson Curl', exercises: ['Jefferson Curl (5x5 @ 3030 tempo, light weight)'] }
                ]
            },
            {
                week: 6,
                title: 'Flow',
                days: [
                    { day: 'Day 1', focus: 'Movement', exercises: ['Ido Portal Locomotion (10 mins continuous)'] }
                ]
            }
        ],
        color: '#607d8b'
    },
    {
        id: 6,
        title: 'Handstand Push-Up Power',
        duration: '6 Weeks',
        level: 'Advanced',
        focus: 'Vertical Pressing & Balance',
        description: 'Build the immense overhead strength and balance required for strict and kipping handstand push-ups.',
        science: 'Utilizes **Vertical Pressing Mechanics** and **Inversion Tolerance**. Prioritizes **Tripod Position** stability and **Overhead Lockout** strength. The program progressively increases range of motion (deficit work) and density (volume) to build capacity.',
        weeks: [
            {
                week: 1,
                title: 'Strict Strength Base',
                days: [
                    { day: 'Day 1', focus: 'Vertical Pressing', exercises: ['Box Pike Push-Ups (4x8-10)', 'Strict Press (4x8)'] },
                    { day: 'Day 2', focus: 'Inversion', exercises: ['Wall Walks (3x3)', 'Handstand Hold (Accumulate 60s)'] }
                ]
            },
            {
                week: 2,
                title: 'Eccentric Control',
                days: [
                    { day: 'Day 1', focus: 'Negatives', exercises: ['Strict HSPU Negatives (5x3 @ 3s down)', 'Z-Press (4x10)'] },
                    { day: 'Day 2', focus: 'Stability', exercises: ['Shoulder Taps (Box or Wall) (3x20)', 'Hollow Body Hold (4x30s)'] }
                ]
            },
            {
                week: 3,
                title: 'Kipping Mechanics',
                days: [
                    { day: 'Day 1', focus: 'The Kip', exercises: ['Headstand Kips (Non-pressing) (4x10)', 'Wall Kips (4x5)'] },
                    { day: 'Day 2', focus: 'Volume', exercises: ['Box Pike Push-Ups (5x10)', 'DB Push Press (4x12)'] }
                ]
            },
            {
                week: 4,
                title: 'Deficit Strength',
                days: [
                    { day: 'Day 1', focus: 'Range of Motion', exercises: ['Deficit Pike Push-Ups (4x8)', 'Close Grip Bench Press (4x8)'] },
                    { day: 'Day 2', focus: 'Kip Integration', exercises: ['Kipping HSPU (EMOM 8: 2-3 reps)', 'Strict Pull-Ups (4x6)'] }
                ]
            },
            {
                week: 5,
                title: 'Volume & Capacity',
                days: [
                    { day: 'Day 1', focus: 'Density', exercises: ['Strict HSPU (or mod) (EMOM 10: 3-5 reps)'] },
                    { day: 'Day 2', focus: 'Kipping Capacity', exercises: ['Kipping HSPU (3 sets of Max - 2)', 'Handstand Walk Drills (15 mins)'] }
                ]
            },
            {
                week: 6,
                title: 'Test Week',
                days: [
                    { day: 'Day 1', focus: 'Max Effort', exercises: ['Max Strict HSPU', 'Max Kipping HSPU'] }
                ]
            }
        ],
        color: '#e91e63'
    }
];
