import type { FC } from 'react';
import './PokemonTypeTag.css';
import type { PokemonTypeTagsProps } from './PokemonTypeTag.types';

export const PokemonTypeTag: FC<PokemonTypeTagsProps> = ({ label }) => {
  return (
    <div className="pokemon-type-tag-wrapper">
      <span className="pokemon-type-tag-text">{label}</span>
    </div>
  );
};
