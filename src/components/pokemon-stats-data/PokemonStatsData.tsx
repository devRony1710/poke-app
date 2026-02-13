import './PokemonStatsData.css';
import type { PokemonStatsProps } from './PokemonStatsData.types';

export const PokemonStats = ({ stats, maxValue = 150 }: PokemonStatsProps) => {
  return (
    <div className="stats-container">
      <div className="divider" />
      {stats?.map((stat) => {
        const percentage = (stat?.value / maxValue) * 100;

        return (
          <div key={stat?.label} className="stat-row">
            <span className="stat-label">{stat?.label}</span>

            <span className="stat-value">
              {stat?.value?.toString()?.padStart(3, '0')}
            </span>

            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${percentage}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
