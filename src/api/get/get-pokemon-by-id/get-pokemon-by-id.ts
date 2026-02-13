import { api } from '@/api/axios-config/axios-config';
import { isAxiosError } from 'axios';

export type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type EnglishEntryType = {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
};

export type MovesTypes = {
  move: {
    name: string;
    url: string;
  };
};

export interface PokemonByIdResponse {
  name: string;
  pokemonImage: string;
  types: PokemonTypes[];
  height: number;
  weight: number;
  pokemonLorem: string;
  moves: MovesTypes[];
}

export const getPokemonById = async (pokemonId: number): Promise<PokemonByIdResponse> => {
  try {
    const { data } = await api.get(`/pokemon/${pokemonId}`);

    const { data: species } = await api.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
    );

    const englishEntry = species.flavor_text_entries.find(
      (entry: EnglishEntryType) => entry.language.name === 'en',
    );

    return {
      pokemonLorem: englishEntry.flavor_text,
      pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      ...data,
    };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(`Error Fetching Data: ${error.message}`);
    }
    throw new Error('Error fetching pokemon data');
  }
};
