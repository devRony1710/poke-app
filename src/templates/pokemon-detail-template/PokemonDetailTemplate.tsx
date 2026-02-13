import { DetailTemplateHeader } from './_components/detail-template-header/DetailTemplateHeader';
import PokeballBackground from '@assets/icons/pokeball-bg.svg';
import './PokemonDetailTemplate.css';
import { DetailInfoSection } from './_components/detail-info-section/DetailInfoSection';

export const PokemonDetailTemplate = () => {
  return (
    <section className="detail-page-main-wrapper">
      <DetailTemplateHeader />

      <img
        className="pokeball-background"
        src={PokeballBackground}
        alt="pokeball background"
      />

      <DetailInfoSection />
    </section>
  );
};
