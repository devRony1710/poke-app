import './DetailInfoSection.css';
import { PokemonImageWithButtons } from '../pokemon-image-with-buttons/PokemonImageWithButtons';
import { PokemonTypeTag } from '@/components/pokemon-type-tag/PokemonTypeTag';
import { PokemonDetailStats } from '@/components/pokemon-detail-stats/PokemonDetailStats';

export const DetailInfoSection = () => {
  return (
    <section className="detail-info-wrapper">
      <PokemonImageWithButtons />

      <div className="info-section-wrapper">
        <PokemonTypeTag />
      </div>

      <div className="about-wrapper">
        <span className="about-text">About</span>
      </div>

      <PokemonDetailStats />
    </section>
  );
};
