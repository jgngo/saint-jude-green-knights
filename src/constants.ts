import { Match, Player, StatPoint } from './types';

export const ROSTER: Player[] = [
  { id: '1', number: 12, name: 'Marcus Sterling', position: 'QB', year: 'Senior', height: '6\'2"', weight: '205 lbs', imageUrl: 'https://picsum.photos/400/500?random=1' },
  { id: '2', number: 4, name: 'Elijah Wood', position: 'WR', year: 'Junior', height: '6\'0"', weight: '185 lbs', imageUrl: 'https://picsum.photos/400/500?random=2' },
  { id: '3', number: 22, name: 'Derrick Henry Jr.', position: 'RB', year: 'Senior', height: '5\'11"', weight: '215 lbs', imageUrl: 'https://picsum.photos/400/500?random=3' },
  { id: '4', number: 52, name: 'Big Mike', position: 'LB', year: 'Sophomore', height: '6\'3"', weight: '240 lbs', imageUrl: 'https://picsum.photos/400/500?random=4' },
  { id: '5', number: 15, name: 'Chase Claypool', position: 'TE', year: 'Senior', height: '6\'4"', weight: '230 lbs', imageUrl: 'https://picsum.photos/400/500?random=5' },
  { id: '6', number: 23, name: 'Jalen Ramsey', position: 'CB', year: 'Junior', height: '6\'1"', weight: '195 lbs', imageUrl: 'https://picsum.photos/400/500?random=6' },
];

export const SCHEDULE: Match[] = [
  { id: '1', opponent: 'Sacred Heart', date: 'Aug 25', time: '7:00 PM', location: 'Home', isHome: true, result: { us: 24, them: 17, outcome: 'W' } },
  { id: '2', opponent: 'Bishop Gorman', date: 'Sep 01', time: '7:30 PM', location: 'Away', isHome: false, result: { us: 14, them: 28, outcome: 'L' } },
  { id: '3', opponent: 'Mater Dei', date: 'Sep 08', time: '7:00 PM', location: 'Home', isHome: true, result: { us: 35, them: 31, outcome: 'W' } },
  { id: '4', opponent: 'St. John Bosco', date: 'Sep 15', time: '8:00 PM', location: 'Away', isHome: false },
  { id: '5', opponent: 'De La Salle', date: 'Sep 22', time: '7:00 PM', location: 'Home', isHome: true },
];

export const SEASON_STATS: StatPoint[] = [
  { game: 'Sacred Heart', points: 24, yards: 320 },
  { game: 'Bishop Gorman', points: 14, yards: 210 },
  { game: 'Mater Dei', points: 35, yards: 405 },
];