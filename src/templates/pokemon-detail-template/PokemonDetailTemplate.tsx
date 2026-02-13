import { DetailTemplateHeader } from './_components/detail-template-header/DetailTemplateHeader';
import PokeballBackground from '@assets/icons/pokeball-bg.svg';
import './PokemonDetailTemplate.css';
import { DetailInfoSection } from './_components/detail-info-section/DetailInfoSection';
import type { FC } from 'react';
import type { PokemonDetailTemplateProps } from './PokemonDetailTemplate.types';
import { getBackgroundColorPokemon } from '@/lib/getBackgroundColorPokemon';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

export const PokemonDetailTemplate: FC<PokemonDetailTemplateProps> = ({
  pokemonName,
  pokemonImage,
  pokemonTypes,
  pokemonHeight,
  pokemonWeight,
  pokemonLorem,
  moves,
  stats,
  pokemonId,
  isLoadingData,
}) => {
  return (
    <section
      className={clsx(
        'detail-page-main-wrapper',
        getBackgroundColorPokemon(pokemonTypes[0]?.type?.name ?? ''),
      )}
    >
      {isLoadingData ? (
        <section className="loading-container">
          <Loader2 className="spinner-icon" />
        </section>
      ) : (
        <>
          <DetailTemplateHeader pokemonName={pokemonName} tagId={pokemonId} />

          <img
            className="pokeball-background"
            src={PokeballBackground}
            alt="pokeball background"
          />

          <DetailInfoSection
            pokemonInfo={{
              pokemonHeight,
              pokemonImage,
              pokemonTypes,
              pokemonWeight,
              pokemonLorem,
              pokemonName,
              moves,
              stats,
            }}
          />
        </>
      )}
    </section>
  );
};
