
export interface WODLevel {
    level: 'RX' | 'INTERMEDIATE' | 'SCALED' | 'MASTERS';
    description: string;
    movements: string[];
    notes?: string;
}

export interface DailyProgram {
    id: string;
    name: string;
    date?: string; // Optional, for specific dates if needed
    type: 'Metcon' | 'Strength' | 'Intervals';
    timeDomain: string; // e.g., "Short (<10min)", "Medium (10-20min)"
    stimulus: string;
    outcome: string;
    variations: {
        rx: WODLevel;
        intermediate: WODLevel;
        scaled: WODLevel;
        masters: WODLevel;
    };
    coachNotes: string;
}

export const dailyProgramming: DailyProgram[] = [
    {
        id: 'fran-plus',
        name: 'Heavy Fran',
        type: 'Metcon',
        timeDomain: 'Short (< 8 min)',
        stimulus: 'High Intensity / Anaerobic Power',
        outcome: 'Lactate Threshold & CNS Priming',
        coachNotes: 'This variation of Fran adds load to test structural integrity under fatigue. The goal is unbroken sets on the thrusters regardless of the level chosen. If you break the thrusters, the weight is too heavy.',
        variations: {
            rx: {
                level: 'RX',
                description: '21-15-9:\nThrusters (115/85 lb)\nChest-to-Bar Pull-ups',
                movements: ['Thruster', 'Chest-to-Bar Pull-up'],
                notes: 'Go for unbroken sets. Fast transitions.'
            },
            intermediate: {
                level: 'INTERMEDIATE',
                description: '21-15-9:\nThrusters (95/65 lb)\nChin-over-Bar Pull-ups',
                movements: ['Thruster', 'Pull-up'],
                notes: 'Reduce weight to ensure non-stop movement. Standard pull-ups allowed.'
            },
            scaled: {
                level: 'SCALED',
                description: '21-15-9:\nThrusters (65/45 lb)\nJumping Pull-ups',
                movements: ['Thruster', 'Jumping Pull-up'],
                notes: 'Focus on full range of motion. fast turnover.'
            },
            masters: {
                level: 'MASTERS',
                description: '21-15-9:\nThrusters (75/55 lb)\nChin-over-Bar Pull-ups (or Ring Rows)',
                movements: ['Thruster', 'Pull-up'],
                notes: 'Volume and load reduced to protect joints while maintaining intensity.'
            }
        }
    },
    {
        id: 'murph-prep',
        name: 'Mini Murph',
        type: 'Metcon',
        timeDomain: 'Medium (15-20 min)',
        stimulus: 'Muscular Endurance',
        outcome: 'Local Muscle Stamina',
        coachNotes: 'A volume accumulation piece preparing for the full Murph. Pacing is key here. Do not sprint the first run.',
        variations: {
            rx: {
                level: 'RX',
                description: 'For Time:\n800m Run\n5 Rounds of:\n5 Pull-ups\n10 Push-ups\n15 Air Squats\n800m Run',
                movements: ['Run', 'Pull-up', 'Push-up', 'Air Squat'],
                notes: 'Vest optional (20/14lb) if sub 20min 5k.'
            },
            intermediate: {
                level: 'INTERMEDIATE',
                description: 'For Time:\n400m Run\n5 Rounds of:\n5 Ring Rows\n10 Push-ups (knees allowed)\n15 Air Squats\n400m Run',
                movements: ['Run', 'Ring Row', 'Push-up', 'Air Squat']
            },
            scaled: {
                level: 'SCALED',
                description: 'For Time:\n400m Run/Row\n4 Rounds of:\n5 Ring Rows\n10 Box Push-ups\n15 Box Squats\n400m Run/Row',
                movements: ['Run', 'Ring Row', 'Box Push-up', 'Box Squat']
            },
            masters: {
                level: 'MASTERS',
                description: 'For Time:\n600m Run\n4 Rounds of:\n5 Pull-ups/Ring Rows\n10 Push-ups\n15 Air Squats\n600m Run',
                movements: ['Run', 'Pull-up', 'Push-up', 'Air Squat'],
                notes: 'Reduced running volume to save knees.'
            }
        }
    },
    {
        id: 'grace-intervals',
        name: 'Interval Grace',
        type: 'Intervals',
        timeDomain: 'Medium',
        stimulus: 'Power Output & Recovery',
        outcome: 'ATP-CP Regeneration',
        coachNotes: 'Instead of doing Grace (30 Clean and Jerks) straight through, we are breaking it into precise intervals to maintain higher power output per rep.',
        variations: {
            rx: {
                level: 'RX',
                description: 'EMOM 10:\n3 Clean & Jerks (135/95 lb)',
                movements: ['Clean and Jerk'],
                notes: 'Must be touch-and-go for RX stimulus.'
            },
            intermediate: {
                level: 'INTERMEDIATE',
                description: 'EMOM 10:\n3 Clean & Jerks (115/75 lb)',
                movements: ['Clean and Jerk'],
                notes: 'Singles are okay if fast.'
            },
            scaled: {
                level: 'SCALED',
                description: 'EMOM 10:\n3 Clean & Jerks (75/55 lb)',
                movements: ['Clean and Jerk'],
                notes: 'Focus on mechanics. Scale weight to ensure safety.'
            },
            masters: {
                level: 'MASTERS',
                description: 'EMOM 10:\n3 Power Cleans + Push Press (95/65 lb)',
                movements: ['Power Clean', 'Push Press'],
                notes: 'Breaking the movement into two parts to reduce shoulder/back torque.'
            }
        }
    },
    {
        id: 'diane-tempo',
        name: 'Strict Diane',
        type: 'Metcon',
        timeDomain: 'Short-Medium',
        stimulus: 'Upper Body Strength Endurance',
        outcome: 'Posterior Chain & Pressing Strength',
        coachNotes: 'Strict HSPU change the stimulus entirely from the kipping version. This is a strength limiter workout.',
        variations: {
            rx: {
                level: 'RX',
                description: '21-15-9:\nDeadlift (225/155 lb)\nStrict Handstand Push-ups',
                movements: ['Deadlift', 'Strict HSPU'],
                notes: 'Deadlifts must be dead-stop.'
            },
            intermediate: {
                level: 'INTERMEDIATE',
                description: '21-15-9:\nDeadlift (185/125 lb)\nKipping Handstand Push-ups',
                movements: ['Deadlift', 'HSPU'],
                notes: 'Kipping allowed to keep intensity high.'
            },
            scaled: {
                level: 'SCALED',
                description: '21-15-9:\nDeadlift (135/95 lb)\nHand Release Push-ups',
                movements: ['Deadlift', 'Push-up'],
                notes: 'HR Push-ups ensure full ROM.'
            },
            masters: {
                level: 'MASTERS',
                description: '21-15-9:\nDeadlift (185/115 lb)\nPush Press (95/65 lb)',
                movements: ['Deadlift', 'Push Press'],
                notes: 'Inverting is removed to manage blood pressure/shoulder risks.'
            }
        }
    }
];

export const getDailyProgram = (): DailyProgram => {
    // Seeded selection logic (simple daily rotation)
    const today = new Date();
    const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    return dailyProgramming[dayIndex % dailyProgramming.length];
};
