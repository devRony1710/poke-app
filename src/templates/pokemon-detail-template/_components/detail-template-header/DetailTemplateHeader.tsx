import ArrowBackIcon from '@assets/icons/arrow_back.svg';
import './DetailTemplateHeader.css';
import type { FC } from 'react';
import type { DetailTemplateHeaderProps } from './DetailTemplateHeader.types';

export const DetailTemplateHeader: FC<DetailTemplateHeaderProps> = ({
  pokemonName,
  tagId,
}) => {
  return (
    <div className="header-detail-page-wrapper">
      <div className="header-name-wrapper">
        <button className="back-button" type="button">
          <img src={ArrowBackIcon} alt="arrow back" />
        </button>
        <span className="header-name">{pokemonName}</span>
      </div>

      <span className="header-id-tag">#{tagId.toString().padStart(3, '0')}</span>
    </div>
  );
};
