import './DetailInfoSection.css';
import { PokemonImageWithButtons } from '../pokemon-image-with-buttons/PokemonImageWithButtons';
import { PokemonTypeTag } from '@/components/pokemon-type-tag/PokemonTypeTag';
import { PokemonDetailStats } from '@/components/pokemon-detail-stats/PokemonDetailStats';
import { PokemonStats } from '@/components/pokemon-stats-data/PokemonStatsData';
import type { FC } from 'react';
import type { DeatilInfoSectionProps } from './DetailInfoSection.types';

export const DetailInfoSection: FC<DeatilInfoSectionProps> = ({
  pokemonImage,
  pokemonsType,
}) => {
  return (
    <section className="detail-info-wrapper">
      <PokemonImageWithButtons pokemonImage={pokemonImage} />

      <div className="info-section-tags-wrapper">
        {pokemonsType.map((type) => (
          <PokemonTypeTag label={type.type.name ?? ''} />
        ))}
      </div>

      <div className="about-wrapper">
        <span className="about-text">About</span>
      </div>

      <PokemonDetailStats />

      <p className="pokemon-description">
        Pikachu that can generate powerful electricity have cheek sacs that are extra soft
        and super stretchy.
      </p>

      <div className="base-stats-text-wrapper">
        <span className="base-stats-text">Base Stats</span>
      </div>

      <PokemonStats
        stats={[
          { label: 'HP', value: 35 },
          { label: 'ATK', value: 55 },
          { label: 'DEF', value: 40 },
          { label: 'SATK', value: 50 },
          { label: 'SDEF', value: 50 },
          { label: 'SPD', value: 90 },
        ]}
      />
    </section>
  );
};
