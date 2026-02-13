import './DetailInfoSection.css';
import { PokemonImageWithButtons } from '../pokemon-image-with-buttons/PokemonImageWithButtons';
import { PokemonTypeTag } from '@/components/pokemon-type-tag/PokemonTypeTag';
import { PokemonDetailStats } from '@/components/pokemon-detail-stats/PokemonDetailStats';
import { PokemonStats } from '@/components/pokemon-stats-data/PokemonStatsData';
import type { FC } from 'react';
import type { DeatilInfoSectionProps } from './DetailInfoSection.types';

export const DetailInfoSection: FC<DeatilInfoSectionProps> = ({ pokemonInfo }) => {
  return (
    <section className="detail-info-wrapper">
      <PokemonImageWithButtons pokemonImage={pokemonInfo.pokemonImage} />

      <div className="info-section-tags-wrapper">
        {pokemonInfo.pokemonTypes.map((type) => (
          <PokemonTypeTag label={type.type.name ?? ''} />
        ))}
      </div>

      <div className="about-wrapper">
        <span className="about-text">About</span>
      </div>

      <PokemonDetailStats
        pokemonInfoStats={{
          pokemonHeight: pokemonInfo.pokemonHeight,
          pokemonWeight: pokemonInfo.pokemonWeight,
          moves: pokemonInfo.moves,
        }}
      />

      <p className="pokemon-description">{pokemonInfo.pokemonLorem}</p>

      <div className="base-stats-text-wrapper">
        <span className="base-stats-text">Base Stats</span>
      </div>

      <PokemonStats stats={pokemonInfo.stats ?? []} />
    </section>
  );
};
