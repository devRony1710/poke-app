export interface Stat {
  label: string;
  value: number;
}

export interface PokemonStatsProps {
  stats: Stat[];
  maxValue?: number;
}
