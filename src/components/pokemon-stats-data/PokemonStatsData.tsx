import './PokemonStatsData.css';
import type { PokemonStatsProps } from './PokemonStatsData.types';

export const PokemonStats = ({ stats, maxValue = 150 }: PokemonStatsProps) => {
  const statsLabel = stats.map((stat) => stat.label);
  const statsValues = stats.map((stat) => stat.value);
  console.log('🚀 ~ PokemonStats ~ statsLabel:', statsLabel);
  return (
    <div className="stats-container">
      <div className="divider" />
      <div className="stat-label-wrapper">
        {statsLabel.map((label) => (
          <span className="stat-label">{label}</span>
        ))}
      </div>

      <div className="stat-label-wrapper">
        {statsValues.map((value) => (
          <span className="stat-value">{value?.toString()?.padStart(3, '0')}</span>
        ))}
      </div>

      <div className="stat-bar-container">
        {stats?.map((stat) => {
          const percentage = (stat?.value / maxValue) * 100;

          return (
            <div key={stat?.label} className="stat-row">
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: `${percentage}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
