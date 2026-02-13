import { ChevronLeft, ChevronRight } from 'lucide-react';
import PikachuImg from '@assets/images/pikachu.png';
import './PokemonImageWithButton.css';

export const PokemonImageWithButtons = () => {
  return (
    <div className="detail-pokemon-image-wrapper">
      <button className="chevron-button" type="button">
        <ChevronLeft className="chevron-styles" />
      </button>

      <img className="pokemon-image-with-button" src={PikachuImg} alt="pikachu" />

      <button className="chevron-button" type="button">
        <ChevronRight className="chevron-styles" />
      </button>
    </div>
  );
};
