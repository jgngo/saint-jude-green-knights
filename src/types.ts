export interface Player {
  id: string;
  number: number;
  name: string;
  position: string;
  year: string;
  height: string;
  weight: string;
  imageUrl: string;
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
  isHome: boolean;
  result?: {
    us: number;
    them: number;
    outcome: 'W' | 'L' | 'D';
  };
}

export interface StatPoint {
  game: string;
  points: number;
  yards: number;
}

export enum Tab {
  HOME = 'HOME',
  ROSTER = 'ROSTER',
  SCHEDULE = 'SCHEDULE',
  STATS = 'STATS',
  PRESS_ROOM = 'PRESS_ROOM'
}