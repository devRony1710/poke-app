import type { FC } from 'react';
import './PokemonDetailStats.css';
import WeightIcon from '@assets/icons/weight.svg';
import RuleIcon from '@assets/icons/rule.svg';
import type { InfoWrapperProps } from './PokemonDetailStats.types';
import clsx from 'clsx';

const InfoWrapper: FC<InfoWrapperProps> = ({
  statsLabel,
  value,
  icon,
  hasBorder = 'none',
  customChildren,
}) => {
  return (
    <div
      className={clsx(
        'info-main-wrapper',
        hasBorder === 'left' && 'border-left',
        hasBorder === 'right' && 'border-right',
        hasBorder === 'none' && 'border-none',
      )}
    >
      {customChildren ? (
        customChildren
      ) : (
        <div className="info-with-icon-wrapper">
          <img src={icon} />
          <span className="info-stats-value ">{value}</span>
        </div>
      )}
      <span className="info-stats-label">{statsLabel}</span>
    </div>
  );
};

const Abilities = () => {
  return (
    <div className="abilities-wrapper">
      <span className="abilities-text">Mega-Punch</span>
      <span className="abilities-text">Pay-Day</span>
    </div>
  );
};

export const PokemonDetailStats = () => {
  return (
    <section className="detail-stats-wrapper ">
      <InfoWrapper
        statsLabel="Weight"
        value="6,0 kg"
        icon={WeightIcon}
        hasBorder="right"
      />
      <InfoWrapper statsLabel="Height" value="0,4 m" icon={RuleIcon} hasBorder="right" />
      <InfoWrapper statsLabel="Moves" hasBorder="none" customChildren={<Abilities />} />
    </section>
  );
};
