import { DetailTemplateHeader } from './_components/detail-template-header/DetailTemplateHeader';
import PokeballBackground from '@assets/icons/pokeball-bg.svg';
import './PokemonDetailTemplate.css';
import { DetailInfoSection } from './_components/detail-info-section/DetailInfoSection';
import type { FC } from 'react';
import type { PokemonDetailTemplateProps } from './PokemonDetailTemplate.types';

export const PokemonDetailTemplate: FC<PokemonDetailTemplateProps> = ({
  pokemonName,
  pokemonImage,
  pokemonTypes,
  pokemonHeight,
  pokemonWeight,
  pokemonLorem,
}) => {
  return (
    <section className="detail-page-main-wrapper">
      <DetailTemplateHeader pokemonName={pokemonName} />

      <img
        className="pokeball-background"
        src={PokeballBackground}
        alt="pokeball background"
      />

      <DetailInfoSection
        pokemonImage={pokemonImage}
        pokemonsType={pokemonTypes}
        pokemonHeight={pokemonHeight}
        pokemonWeight={pokemonWeight}
        pokemonLorem={pokemonLorem}
      />
    </section>
  );
};
