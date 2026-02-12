import PokeballLogo from '@assets/icons/pokeball.svg';
import './Header.css';
import { Input } from '@components/input/Input';
import TagIcon from '@assets/icons/tag.svg';

export const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="brand-container">
        <img src={PokeballLogo} alt="Pokeball logo" />
        <span className="brand-title">Pokédex</span>
      </div>

      <div className="filters-wrapper">
        <Input placeholder="Search" />

        <button type="button" className="button-icon">
          <img className="button-icon-image" src={TagIcon} alt="button icon" />
        </button>
      </div>
    </header>
  );
};
