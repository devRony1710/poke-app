import type { FC } from 'react';
import type { InputProps } from './Input.types';
import SearchIcon from '@assets/icons/search.svg';
import CloseIcon from '@assets/icons/close.svg';
import './Input.css';

export const Input: FC<InputProps> = ({ label, hasLeftIcon = true, value, ...props }) => {
  return (
    <div className="input-container">
      {label && <label htmlFor="">{label}</label>}

      {hasLeftIcon && (
        <img src={SearchIcon} alt="search icon" className="input-search-icon" />
      )}
      <input className="input" value={value} {...props} />

      {!!value && (
        <button type="button" className="input-button-clean-value">
          <img src={CloseIcon} alt="close button icon" />
        </button>
      )}
    </div>
  );
};
