
export interface MobilityExercise {
    name: string;
    duration: string;
    instructions: string;
}

export interface MobilityFlow {
    id: string;
    slug: string;
    title: string;
    focus: string;
    description: string;
    science: string;
    protocol: string;
    duration: string;
    exercises: MobilityExercise[];
    color: string;
}

export const mobilityData: MobilityFlow[] = [
    {
        id: '1',
        slug: 'hip-lab',
        title: 'The Hip Lab',
        focus: 'Posterior & Anterior Chain Internal/External Rotation',
        description: 'Elite weightlifting and sprinting require deep, powerful hip signatures. The Hip Lab focuses on decompressing the joint capsule and loading the end-range.',
        science: 'Based on **Joint Capsule Loading**. 80% of hip restriction is capsular, not muscular. We utilize **PAILs/RAILs** (Progressive/Regressive Angular Isometric Loading) to expand the neural window of control at the joint\'s end range.',
        protocol: '2 Minutes Static Hold + 3 Sets of 10s Max Effort Isometrics.',
        duration: '15-20 Minutes',
        exercises: [
            { name: '90/90 Internal Rotation', duration: '2 min/side', instructions: 'Focus on keeping the back hip down and rotating the pelvis toward the trailing leg.' },
            { name: 'PAILs/RAILs (Hip External)', duration: '3 sets', instructions: 'From a pigeon position, push your foot into the floor for 10s (PAILs), then try to lift your foot for 10s (RAILs).' },
            { name: 'Frog Stretch', duration: '3 min', instructions: 'Wide knees, feet turned out. Rock back into the hips to hit the adductors.' },
            { name: 'Couch Stretch', duration: '2 min/side', instructions: 'Standard quad/hip flexor opener. Keep the glute squeezed and core tight.' }
        ],
        color: '#9c27b0' // Purple
    },
    {
        id: '2',
        slug: 'shoulder-lab',
        title: 'The Shoulder Lab',
        focus: 'Scapular Upward Rotation & Overhead Stability',
        description: 'Overhead performance in gymnastics and weightlifting is often limited by thoracic extension and scapular slide. This lab "un-glues" the shoulder blades.',
        science: 'Focuses on **Scapulohumeral Rhythm**. For every 2 degrees of arm elevation, the scapula must rotate 1 degree. We target the **Serratus Anterior** and **Lower Traps** to ensure the humerus has space to move without impingement.',
        protocol: 'Controlled Articular Rotations (CARs) + End-Range Liftoffs.',
        duration: '12-15 Minutes',
        exercises: [
            { name: 'Prone Y-Liftoffs', duration: '3 sets of 10', instructions: 'Face down, arms in Y. Lift arms only using back muscles. Hold 2s at top.' },
            { name: 'Puppy Pose', duration: '2 min', instructions: 'Chest to floor, arms extended. Focus on "melting" the upper back towards the ground.' },
            { name: 'Shoulder CARs', duration: '5 reps/side', instructions: 'Slow, full-circle rotations. Imagine moving through thick mud. No torso twisting.' },
            { name: 'Butcher\'s Block', duration: '2 min', instructions: 'Elbows on bench, hands behind neck. Deep stretch for the lats and triceps.' }
        ],
        color: '#00bcd4' // Teal/Cyan
    },
    {
        id: '3',
        slug: 'ankle-lab',
        title: 'The Ankle Lab',
        focus: 'Dorsiflexion & Lateral Stability',
        description: 'Squat depth is often an ankle problem in disguise. The Ankle Lab aggressive targets the talus bone and the calf complex to unlock the bottom position.',
        science: 'Targets **Talocural Joint Mobilization**. We use **Banded Distractions** to create space in the joint, allowing the talus to slide posteriorly during dorsiflexion. This removes the "pinch" at the front of the ankle.',
        protocol: 'Weighted Stretch + Loaded Eccentrics.',
        duration: '10 Minutes',
        exercises: [
            { name: 'Banded Ankle Distraction', duration: '2 min/side', instructions: 'Band low on the ankle, pulling back. Drive knee forward over toes.' },
            { name: 'Weighted Soleus Stretch', duration: '90 sec/side', instructions: 'Knee bent, weight on top of the knee. Push into the stretch.' },
            { name: 'Tibialis Raises', duration: '2 sets of 20', instructions: 'Back against wall, heels out. Pull toes toward shins. Hold the pump.' },
            { name: 'Wall Calf Stretch', duration: '1 min/side', instructions: 'Straight leg for gastrocnemius. Keep heel down and hips forward.' }
        ],
        color: '#ff5722' // Orange/Deep Orange
    }
];
