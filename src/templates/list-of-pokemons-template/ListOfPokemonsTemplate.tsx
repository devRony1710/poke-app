import { PokemonCard } from '@/components/pokemon-card/PokemonCard';
import './ListOfPokemons.css';
import { formatPokemonId } from '@/lib/formatPokemonId';
import { Loader } from 'lucide-react';
import { useListOfPokemons } from './_logic/useListOfPokemons';

export const ListOfPokemonsTemplate = () => {
  const { data, observerRef, isFetchingNextPage, navigate } = useListOfPokemons();

  return (
    <section className="list-pokemons-main-wrapper">
      {data?.pages.flatMap((page) =>
        page.results.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemonId={formatPokemonId(pokemon.id)}
            pokemonName={pokemon.name}
            pokemonImg={pokemon.image}
            onClickCard={() => navigate(`/pokemon-detail/${pokemon.id}`)}
          />
        )),
      )}

      <div ref={observerRef} />

      {isFetchingNextPage && (
        <div className="spinner-container">
          <Loader className="spinner-icon" />
        </div>
      )}
    </section>
  );
};
