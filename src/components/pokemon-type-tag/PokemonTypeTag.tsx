import type { FC } from 'react';
import './PokemonTypeTag.css';
import type { PokemonTypeTagsProps } from './PokemonTypeTag.types';
import clsx from 'clsx';
import { getBackgroundColorPokemon } from '@/lib/getBackgroundColorPokemon';

export const PokemonTypeTag: FC<PokemonTypeTagsProps> = ({ label, pokemonType }) => {
  return (
    <div
      className={clsx('pokemon-type-tag-wrapper', getBackgroundColorPokemon(pokemonType))}
    >
      <span className="pokemon-type-tag-text">{label}</span>
    </div>
  );
};
