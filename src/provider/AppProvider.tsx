import { AppContext } from '@/context/AppContext';
import { useState, type ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </AppContext.Provider>
  );
};
