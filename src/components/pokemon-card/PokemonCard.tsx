import Pikachu from '@assets/images/pikachu.png';
import './PokemonCard.css';

export const PokemonCard = () => {
  return (
    <div className="pokemon-card-container">
      <button className="pokemon-info-wrapper">
        <span className="pokemon-number">#001</span>
        <img src={Pikachu} alt="pokemon image" className="pokemon-image" />
        <span className="pokemon-name">Pikachu</span>
      </button>

      <div className="background-gray" />
    </div>
  );
};
