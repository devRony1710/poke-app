import { ChevronLeft, ChevronRight } from 'lucide-react';
import PikachuImg from '@assets/images/pikachu.png';
import './PokemonImageWithButton.css';
import { useAppContext } from '@/hooks/use-intersection-observer/use-app-context';
import type { FC } from 'react';
import type { PokemonImageWithButtonsProps } from './PokemonImageWithButtons.types';

export const PokemonImageWithButtons: FC<PokemonImageWithButtonsProps> = ({
  pokemonImage,
}) => {
  const { selectedPokemon, setSelectedPokemon } = useAppContext();

  const handleChevronLeft = () => {
    if (selectedPokemon === 1) {
      return null;
    }
    setSelectedPokemon(selectedPokemon ? selectedPokemon - 1 : null);
  };

  const handleChevronRight = () => {
    setSelectedPokemon(selectedPokemon ? selectedPokemon + 1 : null);
  };

  return (
    <div className="detail-pokemon-image-wrapper">
      <button
        className="chevron-button"
        type="button"
        onClick={handleChevronLeft}
        disabled={selectedPokemon === 1}
      >
        <ChevronLeft className="chevron-styles" />
      </button>

      <img
        className="pokemon-image-with-button"
        src={pokemonImage ?? PikachuImg}
        alt="pikachu"
      />

      <button className="chevron-button" type="button" onClick={handleChevronRight}>
        <ChevronRight className="chevron-styles" />
      </button>
    </div>
  );
};
