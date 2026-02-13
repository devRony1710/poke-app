import { createContext } from 'react';

interface AppContextType {
  selectedPokemon: number | null;
  setSelectedPokemon: (name: number | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
