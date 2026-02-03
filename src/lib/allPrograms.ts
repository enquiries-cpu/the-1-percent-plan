import { programsData } from './programData';
import { gymnasticsData } from './gymnasticsData';
import { metabolicData } from './metabolicData';

export const allPrograms = [
    ...programsData.map(p => ({ ...p, track: 'A' })),
    ...gymnasticsData.map(p => ({ ...p, track: 'B' })),
    ...metabolicData.map(p => ({ ...p, track: 'C' }))
];

export const getProgramByTrackAndId = (track: string, id: number) => {
    switch (track.toUpperCase()) {
        case 'A': return programsData.find(p => p.id === id);
        case 'B': return gymnasticsData.find(p => p.id === id);
        case 'C': return metabolicData.find(p => p.id === id);
        default: return null;
    }
};
