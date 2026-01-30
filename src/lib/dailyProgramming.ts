
export interface WODLevel {
    level: 'RX' | 'INTERMEDIATE' | 'SCALED' | 'MASTERS';
    description: string;
    movements: string[];
    notes?: string;
}

export interface DailyProgram {
    id: string;
    name: string;
    date?: string;
    type: 'Metcon' | 'Strength' | 'Intervals';
    timeDomain: string;
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

// --- Data for Generation ---

type MovementCategory = 'Gymnastics' | 'Weightlifting' | 'Monostructural';
type MovementPattern = 'Push' | 'Pull' | 'Squat' | 'Hinge' | 'Core' | 'Cardio';

interface Movement {
    name: string;
    category: MovementCategory;
    pattern: MovementPattern;
    rxWeight?: string; // e.g. "135/95"
    intermediateWeight?: string;
    scaledWeight?: string;
    mastersWeight?: string;
    intermediateSub?: string; // If the movement changes entirely (e.g. Ring MU -> C2B)
    scaledSub?: string;
    mastersSub?: string;
}

const movements: Movement[] = [
    // Weightlifting
    { name: 'Thruster', category: 'Weightlifting', pattern: 'Push', rxWeight: '95/65 lb', intermediateWeight: '75/55 lb', scaledWeight: '45/35 lb', mastersWeight: '65/45 lb' },
    { name: 'Deadlift', category: 'Weightlifting', pattern: 'Hinge', rxWeight: '225/155 lb', intermediateWeight: '185/125 lb', scaledWeight: '135/95 lb', mastersWeight: '185/115 lb' },
    { name: 'Power Clean', category: 'Weightlifting', pattern: 'Pull', rxWeight: '135/95 lb', intermediateWeight: '115/80 lb', scaledWeight: '75/55 lb', mastersWeight: '95/65 lb' },
    { name: 'Push Jerk', category: 'Weightlifting', pattern: 'Push', rxWeight: '135/95 lb', intermediateWeight: '115/80 lb', scaledWeight: '75/55 lb', mastersWeight: '95/65 lb' },
    { name: 'Squat Snatch', category: 'Weightlifting', pattern: 'Squat', rxWeight: '135/95 lb', intermediateWeight: '95/65 lb', scaledWeight: '65/45 lb', mastersWeight: '75/55 lb', scaledSub: 'Power Snatch' },
    { name: 'Overhead Squat', category: 'Weightlifting', pattern: 'Squat', rxWeight: '135/95 lb', intermediateWeight: '95/65 lb', scaledWeight: '65/45 lb', mastersWeight: '75/55 lb', scaledSub: 'Front Squat' },
    { name: 'Wall Ball', category: 'Weightlifting', pattern: 'Squat', rxWeight: '20/14 lb', intermediateWeight: '20/14 lb', scaledWeight: '14/10 lb', mastersWeight: '14/10 lb' },
    { name: 'Kettlebell Swing', category: 'Weightlifting', pattern: 'Hinge', rxWeight: '53/35 lb', intermediateWeight: '44/26 lb', scaledWeight: '35/18 lb', mastersWeight: '35/26 lb' },
    { name: 'Dumbbell Snatch', category: 'Weightlifting', pattern: 'Hinge', rxWeight: '50/35 lb', intermediateWeight: '35/25 lb', scaledWeight: '25/15 lb', mastersWeight: '35/20 lb' },

    // Gymnastics
    { name: 'Pull-up', category: 'Gymnastics', pattern: 'Pull', intermediateSub: 'Pull-up (bands ok)', scaledSub: 'Jumping Pull-up', mastersSub: 'Ring Row' },
    { name: 'Chest-to-Bar Pull-up', category: 'Gymnastics', pattern: 'Pull', intermediateSub: 'Chin-over-Bar Pull-up', scaledSub: 'Jumping Chest-to-Bar', mastersSub: 'Jumping Pull-up' },
    { name: 'Toes-to-Bar', category: 'Gymnastics', pattern: 'Core', intermediateSub: 'Knees-to-Elbows', scaledSub: 'Knee Raises', mastersSub: 'Knee Raises' },
    { name: 'Handstand Push-up', category: 'Gymnastics', pattern: 'Push', intermediateSub: 'HSPU to Abmat', scaledSub: 'Box Pike Push-up', mastersSub: 'Push Press' },
    { name: 'Ring Dip', category: 'Gymnastics', pattern: 'Push', intermediateSub: 'Band/Box Dip', scaledSub: 'Push-up', mastersSub: 'Box Dip' },
    { name: 'Burpee', category: 'Gymnastics', pattern: 'Push', scaledSub: 'No-Push-up Burpee' },
    { name: 'Box Jump', category: 'Gymnastics', pattern: 'Squat', rxWeight: '24/20"', intermediateWeight: '24/20"', scaledWeight: '20/16" (Step-up)', mastersWeight: '20/16" (Step-up)' },
    { name: 'Double Under', category: 'Gymnastics', pattern: 'Cardio', intermediateSub: 'Double Under attempts', scaledSub: 'Single Under', mastersSub: 'Single Under' },

    // Monostructural
    { name: 'Run', category: 'Monostructural', pattern: 'Cardio', scaledSub: 'Run/Walk' },
    { name: 'Row', category: 'Monostructural', pattern: 'Cardio' },
    { name: 'Assault Bike', category: 'Monostructural', pattern: 'Cardio' },
];

interface Scheme {
    name: string;
    type: 'Metcon' | 'Intervals';
    structure: (m1: string, m2: string, m3: string) => string;
    numMovements: 1 | 2 | 3;
    timeDomain: string;
    stimulus: string;
}

const schemes: Scheme[] = [
    { name: 'Classic Couplet', type: 'Metcon', numMovements: 2, timeDomain: 'Short-Medium', stimulus: 'High Intensity', structure: (m1, m2) => `21-15-9 Reps for Time:\n${m1}\n${m2}` },
    { name: 'Three Rounds', type: 'Metcon', numMovements: 3, timeDomain: 'Medium', stimulus: 'Aerobic Power', structure: (m1, m2, m3) => `3 Rounds for Time:\n400m Run\n21 ${m1}\n12 ${m2}` },
    { name: 'AMRAP 20', type: 'Metcon', numMovements: 3, timeDomain: 'Long', stimulus: 'Muscular Endurance', structure: (m1, m2, m3) => `AMRAP 20:\n5 ${m1}\n10 ${m2}\n15 ${m3}` },
    { name: 'Five Rounds', type: 'Metcon', numMovements: 2, timeDomain: 'Medium', stimulus: 'Stamina', structure: (m1, m2) => `5 Rounds for Time:\n15 ${m1}\n15 ${m2}` },
    { name: 'Chipper', type: 'Metcon', numMovements: 3, timeDomain: 'Long', stimulus: 'Mental Toughness', structure: (m1, m2, m3) => `For Time:\n50 ${m1}\n50 ${m2}\n50 ${m3}` },
    { name: 'EMOM 12', type: 'Intervals', numMovements: 2, timeDomain: 'Short', stimulus: 'Pacing & Recovery', structure: (m1, m2) => `EMOM 12:\nMin 1: 15 ${m1}\nMin 2: 12 ${m2}` },
];

// --- PRNG ---
// A simple pseudo-random number generator that is seeded by the date.
// This ensures that every user sees the same workout on the same day.
class SeededRandom {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    // Returns a number between 0 and 1
    next(): number {
        const x = Math.sin(this.seed++) * 10000;
        return x - Math.floor(x);
    }

    // Returns an integer between min (inclusive) and max (exclusive)
    range(min: number, max: number): number {
        return Math.floor(this.next() * (max - min)) + min;
    }

    // Pick a random element from an array
    pick<T>(array: T[]): T {
        return array[this.range(0, array.length)];
    }

    // Shuffle array (Fisher-Yates)
    shuffle<T>(array: T[]): T[] {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(this.next() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

// --- Generator Logic ---

export function getDailyProgram(dateOverride?: Date): DailyProgram {
    const today = dateOverride || new Date();
    // Seed formatted as YYYYMMDD to be unique per day
    const seedVal = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const rng = new SeededRandom(seedVal);

    // 1. Pick a scheme
    const scheme = rng.pick(schemes);

    // 2. Pick unique movements based on scheme requirement
    // Helper: try to pick movements that don't clash too much (e.g. not 3 pushes)
    // For simplicity V1: just shuffle and pick n
    const shuffledMovements = rng.shuffle(movements);
    const selectedMovements = shuffledMovements.slice(0, scheme.numMovements);

    // 3. Generate descriptions for each level
    const buildDescription = (level: 'rx' | 'intermediate' | 'scaled' | 'masters') => {
        const mStrings = selectedMovements.map(m => {
            let name = m.name;
            let weight = '';

            // Handle substitutions
            if (level === 'intermediate' && m.intermediateSub) name = m.intermediateSub;
            else if (level === 'scaled' && m.scaledSub) name = m.scaledSub;
            else if (level === 'masters' && m.mastersSub) name = m.mastersSub;

            // Handle weights
            if (m.category === 'Weightlifting' || m.name === 'Wall Ball') {
                if (level === 'rx') weight = m.rxWeight || '';
                if (level === 'intermediate') weight = m.intermediateWeight || m.rxWeight || '';
                if (level === 'scaled') weight = m.scaledWeight || m.rxWeight || '';
                if (level === 'masters') weight = m.mastersWeight || m.rxWeight || '';

                if (weight) name += ` (${weight})`;
            } else if (m.category === 'Gymnastics' && m.name === 'Box Jump') {
                if (level === 'rx') weight = m.rxWeight || '';
                if (level === 'intermediate') weight = m.intermediateWeight || '';
                if (level === 'scaled') weight = m.scaledWeight || '';
                if (level === 'masters') weight = m.mastersWeight || '';
                if (weight) name += ` (${weight})`;
            }

            return name;
        });

        // If scheme expects 3 args but we only have 2 (shouldn't happen if logic is correct), fill with empty
        while (mStrings.length < 3) mStrings.push('');

        return scheme.structure(mStrings[0], mStrings[1], mStrings[2]);
    };

    // 4. Construct the full object
    const id = `wod-${seedVal}`;
    const name = `Daily ${scheme.name}`; // Could be more creative like "Heavy Fran" etc.

    return {
        id,
        name,
        date: today.toISOString(),
        type: scheme.type,
        timeDomain: scheme.timeDomain,
        stimulus: scheme.stimulus,
        outcome: `General Physical Preparedness & ${selectedMovements[0].category} Capacity`,
        coachNotes: `Today's focus is on ${scheme.stimulus}. We are combining ${selectedMovements.map(m => m.name).join(' and ')} to test your ${scheme.timeDomain} capacity. Pacing is key.`,
        variations: {
            rx: {
                level: 'RX',
                description: buildDescription('rx'),
                movements: selectedMovements.map(m => m.name),
                notes: 'Perform as prescribed. Intensity is the priority.'
            },
            intermediate: {
                level: 'INTERMEDIATE',
                description: buildDescription('intermediate'),
                movements: selectedMovements.map(m => m.intermediateSub || m.name),
                notes: 'Scale load/reps to keep moving.'
            },
            scaled: {
                level: 'SCALED',
                description: buildDescription('scaled'),
                movements: selectedMovements.map(m => m.scaledSub || m.name),
                notes: 'Focus on mechanics and full range of motion.'
            },
            masters: {
                level: 'MASTERS',
                description: buildDescription('masters'),
                movements: selectedMovements.map(m => m.mastersSub || m.name),
                notes: 'Modifications to reduce joint impact.'
            }
        }
    };
}
