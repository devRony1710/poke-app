import { getPokemonIdFromUrl } from '@/lib/getPokemonIdFromUrl';
import { api } from '../axios-config/axios-config';
import type { Pokemon } from './get-list-of-pokemons.types';

export const getListOfPokemons = async (): Promise<Pokemon[]> => {
  const { data } = await api.get('/pokemon?limit=10');

  return data.results.map((pokemon: Pokemon) => {
    const id = Number(getPokemonIdFromUrl(pokemon.url));

    return {
      id,
      name: pokemon.name,
      url: pokemon.url,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });
};
