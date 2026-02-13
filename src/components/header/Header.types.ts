import type { UseListOfPokemonsReturnType } from '@/pages/home/_logic/useListOfPokemons.types';

export interface HeaderProps {
  headerConfig: Pick<
    UseListOfPokemonsReturnType,
    'setSearch' | 'setOpenFilterType' | 'openFilterType' | 'modalFilterRef'
  >;
}
