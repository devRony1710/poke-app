import { PokemonCard } from '@/components/pokemon-card/PokemonCard';
import './ListOfPokemons.css';

export const ListOfPokemonsTemplate = () => {
  return (
    <section className="list-pokemons-main-wrapper">
      <PokemonCard />
    </section>
  );
};
