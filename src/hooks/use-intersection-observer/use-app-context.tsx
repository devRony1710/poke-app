import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }

  return context;
};
