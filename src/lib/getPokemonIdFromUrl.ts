export const getPokemonIdFromUrl = (url: string) => {
  const id = url.split('/')?.filter(Boolean).at(-1);

  return id;
};
