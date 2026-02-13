import type { PokemonDetailTemplateProps } from '@/templates/pokemon-detail-template/PokemonDetailTemplate.types';

export interface InfoWrapperProps {
  value?: string;
  statsLabel: string;
  icon?: string;
  hasBorder?: 'right' | 'left' | 'none';
  customChildren?: React.ReactNode;
}

export interface PokemonDetailStatsProps {
  pokemonInfoStats: Pick<
    PokemonDetailTemplateProps,
    'pokemonHeight' | 'pokemonWeight' | 'moves'
  >;
}
