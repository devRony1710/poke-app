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
    | 'moves'
  >;
}
