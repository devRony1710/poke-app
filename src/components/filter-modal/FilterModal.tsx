import type { FC } from 'react';
import './FilterModal.css';
import type { FilterModalProps } from './FilterModal.types';

export const FilterModal: FC<FilterModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="filter-open-state-bg" />

      <div className="filter-modal-container">
        <span className="sortby-text">Sort By</span>

        <div className="filters-inputs-wrapper">
          <div className="filter-input-option">
            <input className="input-radio" type="radio" id="number" name="sort" />
            <label className="filter-option-label" htmlFor="number">
              Number
            </label>
          </div>

          <div className="filter-input-option">
            <input className="input-radio" type="radio" id="name" name="sort" />
            <label className="filter-option-label" htmlFor="name">
              Name
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
