import type {
  Pokemon,
  PokemonListResponse,
} from '@/api/get/get-list-of-pokemons/get-list-of-pokemons';
import type { InfiniteData } from '@tanstack/react-query';
import type { RefObject } from 'react';
import type { NavigateFunction } from 'react-router-dom';

export type ModalFilterRefType = RefObject<HTMLDivElement | null>;

export interface UseListOfPokemonsReturnType {
  data: InfiniteData<PokemonListResponse, unknown> | undefined;
  observerRef: React.RefObject<HTMLDivElement | null>;
  isFetchingNextPage: boolean;
  navigate: NavigateFunction;
  filteredPokemons: Pokemon[];
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenFilterType: React.Dispatch<React.SetStateAction<boolean>>;
  openFilterType: boolean;
  modalFilterRef: ModalFilterRefType;
}
