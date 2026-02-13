import PokeballLogo from '@assets/icons/pokeball.svg';
import './Header.css';
import { Input } from '@components/input/Input';
import TagIcon from '@assets/icons/tag.svg';
import type { FC } from 'react';
import type { HeaderProps } from './Header.types';
import { FilterModal } from '@components/filter-modal/FilterModal';

export const Header: FC<HeaderProps> = ({ headerConfig }) => {
  return (
    <header className="header-wrapper">
      <div data-testid="brand-container" className="brand-container">
        <img data-testid="brand-logo" src={PokeballLogo} alt="Pokeball logo" />
        <span className="brand-title">Pokédex</span>
      </div>

      <div className="filters-wrapper" data-testid="filters-wrapper">
        <Input
          placeholder="Search"
          onChange={(event) => headerConfig.setSearch(event.target.value)}
        />

        <button
          type="button"
          className="button-icon"
          data-testid="button-icon"
          onClick={() => headerConfig.setOpenFilterType(!headerConfig.openFilterType)}
        >
          <img
            className="button-icon-image"
            src={TagIcon}
            alt="button icon"
            data-testid="button-icon-element"
          />
        </button>

        {headerConfig.openFilterType && (
          <FilterModal isOpen={headerConfig.openFilterType} />
        )}
      </div>
    </header>
  );
};
