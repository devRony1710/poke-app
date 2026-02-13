import type { PokemonDetailTemplateProps } from '../../PokemonDetailTemplate.types';

export interface DeatilInfoSectionProps {
  pokemonInfo: Pick<
    PokemonDetailTemplateProps,
    | 'pokemonHeight'
    | 'pokemonImage'
    | 'pokemonLorem'
    | 'pokemonName'
    | 'pokemonTypes'
    | 'pokemonWeight'
  >;
  // pokemonImage: string;
  // pokemonsType: PokemonTypes[];
  // pokemonWeight: number;
  // pokemonHeight: number;
  // pokemonLorem: string;
}
