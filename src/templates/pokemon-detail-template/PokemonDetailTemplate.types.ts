import type {
  MovesTypes,
  PokemonTypes,
} from '@/api/get/get-pokemon-by-id/get-pokemon-by-id';

export interface PokemonDetailTemplateProps {
  pokemonName: string;
  pokemonImage: string;
  pokemonTypes: PokemonTypes[];
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonLorem: string;
  moves: MovesTypes[];
}
