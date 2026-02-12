import { Header } from '@/components/header/Header';
import './Home.css';
import { ListOfPokemonsTemplate } from '@/templates/list-of-pokemons-template/ListOfPokemonsTemplate';

export const HomePage = () => {
  return (
    <section className="home-container">
      <Header />

      <ListOfPokemonsTemplate />
    </section>
  );
};
