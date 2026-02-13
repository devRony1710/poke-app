import { getListOfPokemons } from '@/api/get/get-list-of-pokemons/get-list-of-pokemons';
import { useIntersection } from '@/hooks/use-intersection-observer/use-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { UseListOfPokemonsReturnType } from './useListOfPokemons.types';

export const useListOfPokemons = (): UseListOfPokemonsReturnType => {
  const [search, setSearch] = useState<string | null>(null);
  const [openFilterType, setOpenFilterType] = useState(false);
  const navigate = useNavigate();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['GET_LIST_OF_POKEMONS'],
    queryFn: getListOfPokemons,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
  });

  const { ref: observerRef } = useIntersection({
    onIntersect: () => {
      if (!isFetchingNextPage) {
        fetchNextPage();
      }
    },
    enabled: hasNextPage,
    rootMargin: '200px',
  });

  const pokemons = data?.pages.flatMap((page) => page.results) ?? [];

  const filteredPokemons = useMemo(() => {
    if (!search) return pokemons;

    return pokemons.filter(
      (pokemon) =>
        pokemon.name.includes(search.toLowerCase()) || pokemon.id.toString() === search,
    );
  }, [pokemons, search]);

  return {
    data,
    observerRef,
    isFetchingNextPage,
    navigate,
    filteredPokemons,
    setSearch,
    setOpenFilterType,
    openFilterType,
  };
};
