import clsx from 'clsx';
import './PokemonStatsData.css';
import type { PokemonStatsProps } from './PokemonStatsData.types';
import {
  getBackgroundColorPokemon,
  getTextColorPokemon,
} from '@/lib/getBackgroundColorPokemon';

export const PokemonStats = ({
  stats,
  maxValue = 150,
  pokemonType,
}: PokemonStatsProps) => {
  const statsLabel = stats.map((stat) => stat.label);
  const statsValues = stats.map((stat) => stat.value);

  return (
    <div className="stats-container">
      <div className="divider" />
      <div className="stat-label-wrapper">
        {statsLabel?.map((label) => (
          <span
            key={label}
            className={clsx('stat-label', getTextColorPokemon(pokemonType))}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="stat-label-wrapper">
        {statsValues.map((value, index) => (
          <span key={index} className="stat-value">
            {value?.toString()?.padStart(3, '0')}
          </span>
        ))}
      </div>

      <div className="stat-bar-container">
        {stats?.map((stat) => {
          const percentage = (stat?.value / maxValue) * 100;

          return (
            <div key={stat?.label} className="stat-row">
              <div className="stat-bar">
                <div
                  className={clsx(
                    'stat-bar-fill',
                    getBackgroundColorPokemon(pokemonType),
                  )}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
