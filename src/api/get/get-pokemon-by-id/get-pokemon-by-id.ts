import { api } from '@/api/axios-config/axios-config';
import { isAxiosError } from 'axios';

export interface PokemonByIdResponse {
  name: string;
  pokemonImage: string;
}

export const getPokemonById = async (pokemonId: number): Promise<PokemonByIdResponse> => {
  try {
    const { data } = await api.get(`/pokemon/${pokemonId}`);
    return {
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
