export const getBackgroundColorPokemon = (pokemonType: string) => {
  switch (pokemonType) {
    case 'grass':
      return 'background-color-grass';
    case 'water':
      return 'background-color-water';
    case 'fire':
      return 'background-color-fire';
    case 'bug':
      return 'background-color-bug';
    case 'ghost':
      return 'background-color-ghost';
    case 'poison':
      return 'background-color-ghost';
    case 'physic':
      return 'background-color-physic';
    case 'steel':
      return 'background-color-steel';
    case 'electric':
      return 'background-color-electric';

    default:
      return 'background-color-normal';
  }
};
