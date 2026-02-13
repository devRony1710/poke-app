export interface InfoWrapperProps {
  value?: string;
  statsLabel: string;
  icon?: string;
  hasBorder?: 'right' | 'left' | 'none';
  customChildren?: React.ReactNode;
}

export interface PokemonDetailStatsProps {
  pokemonWeight: number;
  pokemonHeight: number;
}
