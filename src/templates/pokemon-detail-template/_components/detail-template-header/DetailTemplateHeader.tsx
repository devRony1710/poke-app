import ArrowBackIcon from '@assets/icons/arrow_back.svg';
import './DetailTemplateHeader.css';
import type { FC } from 'react';
import type { DetailTemplateHeaderProps } from './DetailTemplateHeader.types';
import { useNavigate } from 'react-router-dom';

export const DetailTemplateHeader: FC<DetailTemplateHeaderProps> = ({
  pokemonName,
  tagId,
}) => {
  const navigate = useNavigate();
  const goBackButtonTrigger = () => {
    navigate('/');
  };

  return (
    <div className="header-detail-page-wrapper">
      <div className="header-name-wrapper">
        <button onClick={goBackButtonTrigger} className="back-button" type="button">
          <img src={ArrowBackIcon} alt="arrow back" />
        </button>
        <span className="header-name">{pokemonName}</span>
      </div>

      <span className="header-id-tag">#{tagId.toString().padStart(3, '0')}</span>
    </div>
  );
};
