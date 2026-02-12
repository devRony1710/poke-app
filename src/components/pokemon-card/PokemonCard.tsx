import './PokemonCard.css';
import type { FC } from 'react';
import type { PokemonCardProps } from './PokemonCard.types';

export const PokemonCard: FC<PokemonCardProps> = ({
  pokemonId,
  pokemonName,
  pokemonImg,
  onClickCard,
}) => {
  return (
    <div data-testid="pokemon-card-container" className="pokemon-card-container">
      <button
        data-testid="pokemon-card-button"
        className="pokemon-info-wrapper"
        onClick={onClickCard}
      >
        <span data-testid="pokemon-card-id" className="pokemon-number">
          {pokemonId}
        </span>
        <img
          data-testid="pokemon-card-image"
          src={pokemonImg}
          alt="pokemon image"
          className="pokemon-image"
        />
        <span data-testid="pokemon-card-name" className="pokemon-name">
          {pokemonName}
        </span>
      </button>

      <div className="background-gray" data-testid="pokemon-card-bg" />
    </div>
  );
};
