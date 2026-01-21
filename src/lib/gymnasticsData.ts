export const gymnasticsData = [
    {
        id: 1,
        title: 'Strict Toes-to-Bar',
        duration: '4 Weeks',
        level: 'Beginner / Intermediate',
        focus: 'Core Compression',
        description: 'Master the strict mechanics of the hanging leg raise to build unbreakable core strength.',
        science: 'Based on **Gymnastic Lever Mechanics**. The ability to bring the toes to the bar is primarily a function of **Active Compression** (hip flexor strength) and **Lat Extension Strength**, not just "abs". This cycle prioritizes end-range hip flexion strength to close the lever arm.',
        schedule: [
            { day: 'Day 1', focus: 'Hip Flexor Strength', exercises: ['Seated Pike Lifts (4x10 @ RPE 8)', 'Hanging Knee Raises (Strict, 4x8 @ RPE 7)', 'L-Sit Hold (Accumulate 60s)'] },
            { day: 'Day 2', focus: 'Lat Activation', exercises: ['Straight Arm Lat Pulldowns (4x12 @ RPE 8)', 'Hanging Scapular Retractions (4x10 @ RPE 7)'] },
            { day: 'Day 3', focus: 'Integration', exercises: ['Strict Toes-to-Bar Negatives (5x3 @ 5s descent)', 'V-Ups (3x15 @ RPE 8)'] },
            { day: 'Day 4', focus: 'Rest', exercises: ['Mobility: Hamstring Flossing'] },
            { day: 'Day 5', focus: 'Volume', exercises: ['Strict Toes-to-Bar (EMOM 10: 3-5 reps)', 'Hollow Body Rocks (3x30s)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Explosive Pulling', exercises: ['Chest-to-Bar Pull-Ups (Explosive, 5x3 @ RPE 8)', 'Band Assisted Bar MU Transitions (4x5)'] },
            { day: 'Day 2', focus: 'Kip Mechanics', exercises: ['Box Glide Kips (4x8)', 'Hollow-Arch Snaps (5x10)'] },
            { day: 'Day 3', focus: 'Transition Strength', exercises: ['Russian Dips (4x6 @ RPE 8)', 'Straight Bar Dips (4x8 @ RPE 7)'] },
            { day: 'Day 4', focus: 'Rest', exercises: ['Thoracic Mobility'] },
            { day: 'Day 5', focus: 'Complexes', exercises: ['1 Chest-to-Bar + 1 Bar MU (5 sets)', 'Jumping Bar Muscle-Ups (3x5)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'False Grip Strength', exercises: ['False Grip Hangs (4x20s)', 'False Grip Ring Rows (4x8 @ RPE 7)'] },
            { day: 'Day 2', focus: 'Ring Support', exercises: ['Ring Support Hold (Accumulate 60s)', 'Ring Dips (Strict, 4x6 @ RPE 8)'] },
            { day: 'Day 3', focus: 'Transition Mechanics', exercises: ['Ring Muscle-Up Transitions (Kneeling, 4x5)', 'Baby Muscle-Ups (feet on box, 3x5)'] },
            { day: 'Day 4', focus: 'Pulling Power', exercises: ['Weighted Pull-Ups (5x3 @ 85%)', 'Explosive High Pulls (4x5)'] },
            { day: 'Day 5', focus: 'Skill Work', exercises: ['Kipping Ring Muscle-Up Attempts (5 sets of 1-2)', 'Strict Ring Pull-Ups (3x5)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Rhythm Drills', exercises: ['Small Circles (Box drill, 4x10)', 'Reverse Bicycle Kicks (Hanging, 3x20s)'] },
            { day: 'Day 2', focus: 'Eccentric Strength', exercises: ['Negatives (3x5 @ 5s descent)', 'Scapular Pull-Ups (4x15)'] },
            { day: 'Day 3', focus: 'Flow Work', exercises: ['Butterfly Beats (Open/Close, 4x10)', 'Chin-Over-Bar Holds (3x10s)'] },
            { day: 'Day 4', focus: 'Rest', exercises: ['Shoulder Distraction'] },
            { day: 'Day 5', focus: 'Volume Integration', exercises: ['Butterfly Pull-Ups (EMOM 8: 4-6 reps)', 'Band Face Pulls (3x20)'] }
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
        schedule: [
            { day: 'Day 1', focus: 'Straight Arm Strength', exercises: ['Planche Leans (4x20s)', 'German Hang (3x15s)'] },
            { day: 'Day 2', focus: 'Scapular Health', exercises: ['Crossover Symmetry (3 sets)', 'Prone Y-T-W Raises (3x10)'] },
            { day: 'Day 3', focus: 'Elbow Prehab', exercises: ['Zottman Curls (3x15 @ RPE 6)', 'Wrist Roller (3 sets)'] },
            { day: 'Day 4', focus: 'Core Integration', exercises: ['Hollow Body Hold (Accumulate 2 min)', 'Arch Body Hold (Accumulate 2 min)'] },
            { day: 'Day 5', focus: 'Handstand Prep', exercises: ['Wall Walks (3x3)', 'Handstand Hold against wall (Accumulate 60s)'] }
        ],
        color: '#607d8b'
    }
];
