import type { PokemonTypes } from '@/api/get/get-pokemon-by-id/get-pokemon-by-id';

export interface DeatilInfoSectionProps {
  pokemonImage: string;
  pokemonsType: PokemonTypes[];
  pokemonWeight: number;
  pokemonHeight: number;
  pokemonLorem: string;
}
