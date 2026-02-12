import PokeballLogo from '@assets/icons/pokeball.svg';

export const Header = () => {
  return (
    <header>
      <div>
        <img src={PokeballLogo} alt="Pokeball logo" />
        <span>Pokédex</span>
      </div>
    </header>
  );
};
