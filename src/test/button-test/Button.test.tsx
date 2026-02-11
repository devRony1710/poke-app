import { Button } from '@/components/button/Button';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

describe('Test Suite for Button Component', () => {
  it('Should render the Button component in the document', () => {
    const { getByRole } = render(<Button label="Click" />);

    const buttonElement = getByRole('button', { name: 'Click' });

    expect(buttonElement).toBeInTheDocument();
  });
});
