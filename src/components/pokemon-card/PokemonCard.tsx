import './PokemonCard.css';
import type { FC } from 'react';
import type { PokemonCardProps } from './PokemonCard.types';

export const PokemonCard: FC<PokemonCardProps> = ({
  pokemonId,
  pokemonName,
  pokemonImg,
}) => {
  return (
    <div className="pokemon-card-container">
      <button className="pokemon-info-wrapper">
        <span className="pokemon-number">{pokemonId}</span>
        <img src={pokemonImg} alt="pokemon image" className="pokemon-image" />
        <span className="pokemon-name">{pokemonName}</span>
      </button>

      <div className="background-gray" />
    </div>
  );
};
