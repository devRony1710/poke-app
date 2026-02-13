import type { Pokemon } from '@/api/get/get-list-of-pokemons/get-list-of-pokemons';

export interface ListOfPokemonsTemplateProps {
  data: Pokemon[];
  observerRef: React.RefObject<HTMLDivElement | null>;
  isFetchingNextPage: boolean;
  handleClickPokemonCard: (pokemonId: number) => void;
}
