import { PokemonCard } from '@/components/pokemon-card/PokemonCard';
import './ListOfPokemons.css';
import { useQuery } from '@tanstack/react-query';
import { getListOfPokemons } from '@/api/get-list-of-pokemons/get-list-of-pokemons';
import { formatPokemonId } from '@/lib/formatPokemonId';

export const ListOfPokemonsTemplate = () => {
  const { data } = useQuery({
    queryKey: ['GET_LIST_OF_POKEMONS'],
    queryFn: () => getListOfPokemons(),
  });

  return (
    <section className="list-pokemons-main-wrapper">
      {data?.flatMap((pokemon) => (
        <PokemonCard
          pokemonId={formatPokemonId(pokemon.id)}
          pokemonName={pokemon.name}
          pokemonImg={pokemon.image}
        />
      ))}
    </section>
  );
};
