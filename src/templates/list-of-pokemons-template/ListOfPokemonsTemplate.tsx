import { PokemonCard } from '@/components/pokemon-card/PokemonCard';
import './ListOfPokemons.css';
import { formatPokemonId } from '@/lib/formatPokemonId';
import { Loader } from 'lucide-react';
import type { FC } from 'react';
import type { ListOfPokemonsTemplateProps } from './ListOfPokemonsTemplate.types';

export const ListOfPokemonsTemplate: FC<ListOfPokemonsTemplateProps> = ({
  data,
  handleClickPokemonCard,
  isFetchingNextPage,
  observerRef,
}) => {
  return (
    <section className="list-pokemons-main-wrapper">
      {data.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemonId={formatPokemonId(pokemon.id)}
          pokemonName={pokemon.name}
          pokemonImg={pokemon.image}
          onClickCard={() => handleClickPokemonCard(pokemon.id)}
        />
      ))}

      <div ref={observerRef} />

      {isFetchingNextPage && (
        <div className="spinner-container">
          <Loader className="spinner-icon" />
        </div>
      )}
    </section>
  );
};
