import { getListOfPokemons } from '@/api/get-list-of-pokemons/get-list-of-pokemons';
import { useIntersection } from '@/hooks/use-intersection-observer/use-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useListOfPokemons = () => {
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

  return {
    data,
    observerRef,
    isFetchingNextPage,
    navigate,
  };
};
