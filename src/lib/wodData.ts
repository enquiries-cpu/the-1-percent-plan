export interface WOD {
    id: string;
    name: string;
    type: 'Benchmark' | 'Hero' | 'Girl' | 'Interval' | 'Chipper';
    description: string; // The workouts details
    stimulus: string; // Intended feeling/intensity
    outcome: string; // Physiological adaptation
    timeDomain: string;
    movements: string[];
}

export const wodData: WOD[] = [
    {
        id: 'fran',
        name: 'Fran',
        type: 'Girl',
        description: '21-15-9 Reps for Time:\nThrusters (95/65 lb)\nPull-ups',
        stimulus: 'Full body sprint. Lungs burning, grip failing. Uncomfortable but short.',
        outcome: 'Anaerobic Power & Muscular Endurance. Testing the threshold of capacity.',
        timeDomain: '2:00 - 9:00 Minutes',
        movements: ['Thruster', 'Pull-up']
    },
    {
        id: 'diane',
        name: 'Diane',
        type: 'Girl',
        description: '21-15-9 Reps for Time:\nDeadlifts (225/155 lb)\nHandstand Push-ups',
        stimulus: 'Posterior chain fatigue mixed with pressing interference. High skill under fatigue.',
        outcome: 'Heavy Hinge Strength-Endurance & Inverted Pressing Capacity.',
        timeDomain: '3:00 - 10:00 Minutes',
        movements: ['Deadlift', 'Handstand Push-up']
    },
    {
        id: 'murph',
        name: 'Murph',
        type: 'Hero',
        description: 'For Time (with 20/14 lb Vest):\n1 Mile Run\n100 Pull-ups\n200 Push-ups\n300 Air Squats\n1 Mile Run',
        stimulus: 'Long duration, mental grit. Volume accumulation leading to local muscular failure.',
        outcome: 'Muscular Endurance & Mental Fortitude. Aerobic Capacity flush.',
        timeDomain: '30:00 - 60:00+ Minutes',
        movements: ['Run', 'Pull-up', 'Push-up', 'Air Squat']
    },
    {
        id: 'grace',
        name: 'Grace',
        type: 'Girl',
        description: '30 Clean & Jerks for Time (135/95 lb)',
        stimulus: 'Short, heavy-ish cycle speed. Heart rate spikes immediately and stays pinned.',
        outcome: 'Power Endurance. Cycling moderate loads efficiently under respiratory distress.',
        timeDomain: '1:00 - 5:00 Minutes',
        movements: ['Clean & Jerk']
    },
    {
        id: 'helen',
        name: 'Helen',
        type: 'Girl',
        description: '3 Rounds for Time:\n400m Run\n21 Kettlebell Swings (53/35 lb)\n12 Pull-ups',
        stimulus: 'Moderate time domain. Running heart rate recovery into grip dominant movements.',
        outcome: 'Mixed Modal Aerobic Power. Ability to recover heart rate while working.',
        timeDomain: '7:00 - 12:00 Minutes',
        movements: ['Run', 'Kettlebell Swing', 'Pull-up']
    },
    {
        id: 'fight-gone-bad',
        name: 'Fight Gone Bad',
        type: 'Benchmark',
        description: '3 Rounds For Total Reps:\n1 min Wall Balls (20/14)\n1 min Sumo Deadlift High-pull (75/55)\n1 min Box Jumps (20 in)\n1 min Push Press (75/55)\n1 min Row (Calories)\n1 min Rest',
        stimulus: 'Maximum sustain. The minute domains force you to work when you want to rest.',
        outcome: 'Lactate Tolerance & Recovery. Managing output across diverse modalities.',
        timeDomain: '17:00 Minutes',
        movements: ['Wall Ball', 'SDLHP', 'Box Jump', 'Push Press', 'Row']
    },
    {
        id: 'karen',
        name: 'Karen',
        type: 'Girl',
        description: '150 Wall Balls for Time (20/14 lb)',
        stimulus: 'Legs and lungs. Simple, rhythmic suffering. Mental battle to not drop the ball.',
        outcome: 'Squatting Endurance & Respiratory Threshold.',
        timeDomain: '5:00 - 10:00 Minutes',
        movements: ['Wall Ball']
    },
    {
        id: 'dt',
        name: 'DT',
        type: 'Hero',
        description: '5 Rounds for Time:\n12 Deadlifts (155/105 lb)\n9 Hang Power Cleans (155/105 lb)\n6 Push Jerks (155/105 lb)',
        stimulus: 'Grip limiter. Heavy barbell cycling. Red-lining heart rate due to tension.',
        outcome: 'Barbell Cycling Efficiency & Grip Stamina.',
        timeDomain: '6:00 - 12:00 Minutes',
        movements: ['Deadlift', 'Hang Power Clean', 'Push Jerk']
    },
    {
        id: 'filthy-fifty',
        name: 'Filthy Fifty',
        type: 'Chipper',
        description: 'For Time:\n50 Box Jumps (24/20)\n50 Jumping Pull-ups\n50 KB Swings (35/26)\n50 Walking Lunges\n50 Knees-to-Elbows\n50 Push Press (45/35)\n50 Back Extensions\n50 Wall Balls (20/14)\n50 Burpees\n50 Double Unders',
        stimulus: 'Just keep moving. A tour of movements. Muscular endurance is the limiter.',
        outcome: 'General Physical Preparedness (GPP). Work capacity across broad domains.',
        timeDomain: '15:00 - 30:00 Minutes',
        movements: ['Box Jump', 'Pull-up', 'KB Swing', 'Lunge', 'Push Press', 'Wall Ball', 'Burpee', 'Double Under']
    },
    {
        id: 'annie',
        name: 'Annie',
        type: 'Girl',
        description: '50-40-30-20-10 Reps for Time:\nDouble Unders\nSit-ups',
        stimulus: 'Core and Cardio. Fast paced, minimal muscular interference.',
        outcome: 'Core Stamina & Monostructural Capacity.',
        timeDomain: '5:00 - 10:00 Minutes',
        movements: ['Double Under', 'Sit-up']
    },
    {
        id: 'mary',
        name: 'Mary',
        type: 'Girl',
        description: 'AMRAP 20:\n5 Handstand Push-ups\n10 Pistols (alternating)\n15 Pull-ups',
        stimulus: 'Gymnastics density. High skill requirement under moderate fatigue.',
        outcome: 'Advanced Bodyweight Control & Gymnastics Endurance.',
        timeDomain: '20:00 Minutes',
        movements: ['HSPU', 'Pistol', 'Pull-up']
    },
    {
        id: 'cindy',
        name: 'Cindy',
        type: 'Girl',
        description: 'AMRAP 20:\n5 Pull-ups\n10 Push-ups\n15 Air Squats',
        stimulus: 'Muscle endurance. Shoulders and legs burn. Constant movement.',
        outcome: 'Local Muscular Endurance (Upper & Lower).',
        timeDomain: '20:00 Minutes',
        movements: ['Pull-up', 'Push-up', 'Air Squat']
    }
];

export function getDailyWOD(): WOD {
    // Simple seeded random to get same WOD for the same day
    const date = new Date();
    const seed = date.getFullYear() * 1000 + (date.getMonth() + 1) * 50 + date.getDate();
    const index = seed % wodData.length;
    return wodData[index];
}
