import { getListOfPokemons } from '@/api/get/get-list-of-pokemons/get-list-of-pokemons';
import { useIntersection } from '@/hooks/use-intersection-observer/use-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useListOfPokemons = () => {
  const [search, setSearch] = useState<string | null>(null);
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
  };
};
