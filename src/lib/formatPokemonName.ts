export const formatPokemonName = (name: string): string => {
  const formatFirstLetter = name.charAt(0).toUpperCase();
  const formatName = `${formatFirstLetter}${name.slice(1)}`;

  return formatName;
};
