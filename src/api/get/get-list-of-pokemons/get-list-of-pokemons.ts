import { api } from '@/api/axios-config/axios-config';
import { isAxiosError } from 'axios';

const LIMIT = 10;

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
  nextOffset?: number;
}

export const getListOfPokemons = async ({
  pageParam = 0,
}): Promise<PokemonListResponse> => {
  try {
    const { data } = await api.get(`/pokemon?limit=${LIMIT}&offset=${pageParam}`);

    const formatted = data.results.map((pokemon: Pokemon) => {
      const id = Number(pokemon.url.split('/').filter(Boolean).at(-1));

      return {
        id,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      };
    });

    return {
      results: formatted,
      nextOffset: pageParam + LIMIT,
    };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(`Failed to fetch pokemons: ${error.message}`);
    }

    throw new Error('Unknown error fetching pokemons');
  }
};
