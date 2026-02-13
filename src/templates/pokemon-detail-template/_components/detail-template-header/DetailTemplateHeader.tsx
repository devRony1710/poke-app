import ArrowBackIcon from '@assets/icons/arrow_back.svg';
import './DetailTemplateHeader.css';

export const DetailTemplateHeader = () => {
  return (
    <div className="header-detail-page-wrapper">
      <div className="header-name-wrapper">
        <button className="back-button" type="button">
          <img src={ArrowBackIcon} alt="arrow back" />
        </button>
        <span className="header-name">Bulbasaur</span>
      </div>

      <span className="header-id-tag">#001</span>
    </div>
  );
};
