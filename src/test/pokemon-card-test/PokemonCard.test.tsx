import { PokemonCard } from '@/components/pokemon-card/PokemonCard';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Pokemon Card test suite', () => {
  const onClickMock = vi.fn((id: number) => console.log(id));

  beforeEach(() => {
    render(
      <PokemonCard
        onClickCard={() => onClickMock(1)}
        pokemonId="#001"
        pokemonImg="img.png"
        pokemonName="Pikachu"
      />,
    );
  });

  it('All elements should be render in the card', () => {
    const pokemonCardWrapper = screen.getByTestId('pokemon-card-container');
    const pokemonCardButton = screen.getByTestId('pokemon-card-button');
    const pokemonCardIdNumber = screen.getByTestId('pokemon-card-id');
    const pokemonCardImage = screen.getByTestId('pokemon-card-image');
    const pokemonCardName = screen.getByTestId('pokemon-card-name');
    const pokemonCardBg = screen.getByTestId('pokemon-card-bg');

    expect(pokemonCardWrapper).toBeInTheDocument();
    expect(pokemonCardButton).toBeInTheDocument();
    expect(pokemonCardIdNumber).toBeInTheDocument();
    expect(pokemonCardImage).toBeInTheDocument();
    expect(pokemonCardName).toBeInTheDocument();
    expect(pokemonCardBg).toBeInTheDocument();
  });

  it('The user can press the pokemon card', async () => {
    const pokemonCardButton = screen.getByTestId('pokemon-card-button');
    expect(pokemonCardButton).toBeInTheDocument();

    userEvent.click(pokemonCardButton);

    waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
