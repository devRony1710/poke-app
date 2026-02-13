import { createContext } from 'react';

interface AppContextType {
  selectedPokemon: string | null;
  setSelectedPokemon: (name: string | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
