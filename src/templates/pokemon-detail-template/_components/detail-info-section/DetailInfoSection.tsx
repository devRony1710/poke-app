import './DetailInfoSection.css';
import { PokemonImageWithButtons } from '../pokemon-image-with-buttons/PokemonImageWithButtons';
import { PokemonTypeTag } from '@/components/pokemon-type-tag/PokemonTypeTag';
import { PokemonDetailStats } from '@/components/pokemon-detail-stats/PokemonDetailStats';
import { PokemonStats } from '@/components/pokemon-stats-data/PokemonStatsData';
import type { FC } from 'react';
import type { DeatilInfoSectionProps } from './DetailInfoSection.types';
import clsx from 'clsx';
import { getTextColorPokemon } from '@/lib/getBackgroundColorPokemon';

export const DetailInfoSection: FC<DeatilInfoSectionProps> = ({ pokemonInfo }) => {
  const pokemonType = pokemonInfo?.pokemonTypes[0]?.type?.name;
  return (
    <section className="detail-info-wrapper">
      <PokemonImageWithButtons pokemonImage={pokemonInfo.pokemonImage} />

      <div className="info-section-tags-wrapper">
        {pokemonInfo?.pokemonTypes?.map((type) => (
          <PokemonTypeTag
            key={type?.type?.name}
            label={type.type.name ?? ''}
            pokemonType={type.type.name}
          />
        ))}
      </div>

      <div className="about-wrapper">
        <span className={clsx('about-text', getTextColorPokemon(pokemonType))}>
          About
        </span>
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
        <span className={clsx('base-stats-text', getTextColorPokemon(pokemonType))}>
          Base Stats
        </span>
      </div>

      <PokemonStats stats={pokemonInfo.stats ?? []} pokemonType={pokemonType} />
    </section>
  );
};
