import { getPokemonById } from '@/api/get/get-pokemon-by-id/get-pokemon-by-id';
import { useAppContext } from '@/hooks/use-intersection-observer/use-app-context';
import { formatPokemonName } from '@/lib/formatPokemonName';
import { PokemonDetailTemplate } from '@/templates/pokemon-detail-template/PokemonDetailTemplate';
import { useQuery } from '@tanstack/react-query';

export const PokemonDetailPage = () => {
  const { selectedPokemon } = useAppContext();

  const { data } = useQuery({
    queryKey: ['GET_POKEMON_BY_ID', selectedPokemon],
    queryFn: () => getPokemonById(selectedPokemon ?? 1),
    enabled: !!selectedPokemon,
  });

  console.log('🚀 ~ PokemonDetailPage ~ data:', data);
  return (
    <PokemonDetailTemplate
      pokemonName={formatPokemonName(data?.name ?? 'Pikachu')}
      pokemonImage={data?.pokemonImage ?? ''}
      pokemonTypes={data?.types ?? []}
      pokemonHeight={data?.height ?? 0}
      pokemonWeight={data?.weight ?? 0}
      pokemonLorem={data?.pokemonLorem ?? ''}
    />
  );
};
