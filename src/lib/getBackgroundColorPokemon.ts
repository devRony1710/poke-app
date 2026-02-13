export const getBackgroundColorPokemon = (pokemonType: string) => {
  switch (pokemonType) {
    case 'grass':
      return 'background-color-grass';
    case 'water':
      return 'background-color-water';
    case 'ice':
      return 'background-color-water';
    case 'fire':
      return 'background-color-fire';
    case 'bug':
      return 'background-color-bug';
    case 'ghost':
      return 'background-color-ghost';
    case 'poison':
      return 'background-color-ghost';
    case 'psychic':
      return 'background-color-physic';
    case 'steel':
      return 'background-color-steel';
    case 'electric':
      return 'background-color-electric';

    default:
      return 'background-color-normal';
  }
};

export const getTextColorPokemon = (pokemonType: string) => {
  switch (pokemonType) {
    case 'grass':
      return 'text-color-grass';
    case 'water':
      return 'text-color-water';
    case 'ice':
      return 'text-color-water';
    case 'fire':
      return 'text-color-fire';
    case 'bug':
      return 'text-color-bug';
    case 'ghost':
      return 'text-color-ghost';
    case 'poison':
      return 'text-color-ghost';
    case 'psychic':
      return 'text-color-physic';
    case 'steel':
      return 'text-color-steel';
    case 'electric':
      return 'text-color-electric';

    default:
      return 'text-color-normal';
  }
};

export const getBackgroundColorPokemonLight = (pokemonType: string) => {
  switch (pokemonType) {
    case 'grass':
      return 'background-color-grass-light';
    case 'water':
      return 'background-color-water-light';
    case 'ice':
      return 'background-color-water-light';
    case 'fire':
      return 'background-color-fire-light';
    case 'bug':
      return 'background-color-bug-light';
    case 'ghost':
      return 'background-color-ghost-light';
    case 'poison':
      return 'background-color-ghost-light';
    case 'psychic':
      return 'background-color-physic-light';
    case 'steel':
      return 'background-color-steel-light';
    case 'electric':
      return 'background-color-electric-light';

    default:
      return 'background-color-normal-light';
  }
};
