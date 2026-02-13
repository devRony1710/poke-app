import { ChevronLeft, ChevronRight } from 'lucide-react';
import PikachuImg from '@assets/images/pikachu.png';
import './PokemonImageWithButton.css';
import { useAppContext } from '@/hooks/use-intersection-observer/use-app-context';

export const PokemonImageWithButtons = () => {
  const { selectedPokemon, setSelectedPokemon } = useAppContext();
  return (
    <div className="detail-pokemon-image-wrapper">
      <button className="chevron-button" type="button">
        <ChevronLeft className="chevron-styles" />
      </button>

      <img className="pokemon-image-with-button" src={PikachuImg} alt="pikachu" />

      <button
        className="chevron-button"
        type="button"
        onClick={() => setSelectedPokemon(selectedPokemon ? selectedPokemon + 1 : null)}
      >
        <ChevronRight className="chevron-styles" />
      </button>
    </div>
  );
};
