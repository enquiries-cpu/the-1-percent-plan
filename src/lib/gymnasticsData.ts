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
            }
        ],
        color: '#607d8b'
    }
];
