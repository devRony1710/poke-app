import { api } from '@/api/axios-config/axios-config';
import { isAxiosError } from 'axios';

export const getPokemonById = async (pokemonId: number) => {
  try {
    const { data } = await api.get(`/pokemon/${pokemonId}`);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(`Error Fetching Data: ${error.message}`);
    }
    throw new Error('Error fetching pokemon data');
  }
};
