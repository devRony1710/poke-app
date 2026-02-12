import PokeballLogo from '@assets/icons/pokeball.svg';
import './Header.css';
import { Input } from '@components/input/Input';

export const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="brand-container">
        <img src={PokeballLogo} alt="Pokeball logo" />
        <span className="brand-title">Pokédex</span>
      </div>

      <div className="filters-wrapper">
        <Input placeholder="Search" />

        <div
          style={{
            backgroundColor: 'white',
            height: 10,
            width: 10,
            borderRadius: 100,
          }}
        ></div>
      </div>
    </header>
  );
};
