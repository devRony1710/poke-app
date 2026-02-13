import { getListOfPokemons } from '@/api/get/get-list-of-pokemons/get-list-of-pokemons';
import { useIntersection } from '@/hooks/use-intersection-observer/use-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo, useRef, useState, type RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import type { UseListOfPokemonsReturnType } from './useListOfPokemons.types';
import { useClickOutside } from '@/hooks/use-intersection-observer/use-click-outside';

type FilterSelected = {
  byName: boolean;
  byNumber: boolean;
};

export const useListOfPokemons = (): UseListOfPokemonsReturnType => {
  const [search, setSearch] = useState<string | null>(null);
  const [openFilterType, setOpenFilterType] = useState(false);
  const [filterSelected, setFilterSelected] = useState<FilterSelected>({
    byName: false,
    byNumber: true,
  });

  const modalFilterRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalFilterRef as RefObject<HTMLElement>, () =>
    setOpenFilterType(false),
  );

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
    let result = pokemons;

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (pokemon) =>
          pokemon.name.includes(searchLower) || pokemon.id.toString() === search,
      );
    }

    if (filterSelected.byName) {
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (filterSelected.byNumber) {
      return [...result].sort((a, b) => a.id - b.id);
    }

    return result;
  }, [pokemons, search, filterSelected]);

  const activateFilterByName = () => {
    setFilterSelected({
      byName: true,
      byNumber: false,
    });
  };

  const activateFilterByNumber = () => {
    setFilterSelected({
      byName: false,
      byNumber: true,
    });
  };

  return {
    data,
    observerRef,
    isFetchingNextPage,
    navigate,
    filteredPokemons,
    setSearch,
    setOpenFilterType,
    openFilterType,
    modalFilterRef,
    filterSelected,
    activateFilterByName,
    activateFilterByNumber,
    setFilterSelected,
  };
};
