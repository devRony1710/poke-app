import { Input } from '@/components/input/Input';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input component test suite', () => {
  beforeEach(() => {
    render(<Input />);
  });

  it('The input element should be render in the dom', () => {
    const inputElement = screen.getByTestId('input-element');

    expect(inputElement).toBeInTheDocument();
  });

  it('The user can type in the input', async () => {
    const inputElement = screen.getByTestId('input-element');
    const onChangeFn = vi.fn();
    const charmanderText = 'Charmander';
    const charmanderTextLength = charmanderText.length;

    expect(inputElement).toBeInTheDocument();

    userEvent.type(inputElement, charmanderText);

    waitFor(() => {
      expect(onChangeFn).toHaveBeenCalledTimes(charmanderTextLength);
      expect(inputElement).toHaveValue(charmanderText);
    });
  });
});
