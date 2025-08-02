export interface Team {
  name: string;
  logoUrl: string;
  stats: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  date: string;
  time: string;
  venue: string;
  homeAdvantage: string;
}
