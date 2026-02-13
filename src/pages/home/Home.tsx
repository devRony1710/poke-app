import { Header } from '@/components/header/Header';
import './Home.css';
import { ListOfPokemonsTemplate } from '@/templates/list-of-pokemons-template/ListOfPokemonsTemplate';
import { useListOfPokemons } from '@/pages/home/_logic/useListOfPokemons';
import { useAppContext } from '@/hooks/use-intersection-observer/use-app-context';

export const HomePage = () => {
  const {
    observerRef,
    isFetchingNextPage,
    navigate,
    filteredPokemons,
    setSearch,
    openFilterType,
    setOpenFilterType,
    modalFilterRef,
    activateFilterByName,
    activateFilterByNumber,
    filterSelected,
  } = useListOfPokemons();
  const { setSelectedPokemon } = useAppContext();

  const handleClickPokemonCard = (pokemonId: number) => {
    navigate(`/pokemon-detail`);
    setSelectedPokemon(pokemonId);
  };

  return (
    <section className="home-container">
      <Header
        headerConfig={{
          openFilterType,
          setOpenFilterType,
          setSearch,
          modalFilterRef,
          activateFilterByName,
          activateFilterByNumber,
          filterSelected,
        }}
      />

      <ListOfPokemonsTemplate
        data={filteredPokemons}
        handleClickPokemonCard={handleClickPokemonCard}
        isFetchingNextPage={isFetchingNextPage}
        observerRef={observerRef}
      />
    </section>
  );
};
