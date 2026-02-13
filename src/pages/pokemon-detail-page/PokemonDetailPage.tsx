import { getPokemonById } from '@/api/get/get-pokemon-by-id/get-pokemon-by-id';
import { useAppContext } from '@/hooks/use-intersection-observer/use-app-context';
import { formatPokemonName } from '@/lib/formatPokemonName';
import { PokemonDetailTemplate } from '@/templates/pokemon-detail-template/PokemonDetailTemplate';
import { useQuery } from '@tanstack/react-query';
import PikachuImg from '@assets/images/pikachu.png';

export const PokemonDetailPage = () => {
  const { selectedPokemon } = useAppContext();

  const { data, isLoading } = useQuery({
    queryKey: ['GET_POKEMON_BY_ID', selectedPokemon],
    queryFn: () => getPokemonById(selectedPokemon ?? 1),
    enabled: !!selectedPokemon,
  });

  return (
    <PokemonDetailTemplate
      pokemonName={formatPokemonName(data?.name ?? 'Pikachu')}
      pokemonImage={data?.pokemonImage ?? PikachuImg}
      pokemonTypes={data?.types ?? []}
      pokemonHeight={data?.height ?? 0}
      pokemonWeight={data?.weight ?? 0}
      pokemonLorem={data?.pokemonLorem ?? ''}
      moves={data?.moves ?? []}
      stats={data?.pokemonStats ?? []}
      pokemonId={data?.id ?? 0}
      isLoadingData={isLoading}
    />
  );
};
