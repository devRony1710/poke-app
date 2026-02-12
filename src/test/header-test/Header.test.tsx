import { Header } from '@/components/header/Header';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('Header section component test suit', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('All elements in header component should be render correctly', () => {
    const brandContainer = screen.getByTestId('brand-container');
    const imagePokeballLogo = screen.getByTestId('brand-logo');
    const filters = screen.getByTestId('filters-wrapper');
    const inputElement = screen.getByTestId('input-element');
    const buttonIcon = screen.getByTestId('button-icon');
    const buttonIconElement = screen.getByTestId('button-icon-element');

    screen.debug();

    expect(brandContainer).toBeInTheDocument();
    expect(imagePokeballLogo).toBeInTheDocument();
    expect(brandContainer).toHaveTextContent('Pokédex');
    expect(filters).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
    expect(buttonIconElement).toBeInTheDocument();
  });

  it('The user can type in the input field', async () => {
    const inputElement = screen.getByTestId('input-element');

    userEvent.type(inputElement, 'Charmander');

    waitFor(() => {
      expect(inputElement).toHaveValue('Charmander');
    });
  });

  it('The user can press the filter button icon', async () => {
    const buttonIcon = screen.getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();

    const onClick = vi.fn();

    userEvent.click(buttonIcon);

    waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
