import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculatorView from '../StringCalculator/index';

describe('StringCalculatorView', () => {
  it('renders the calculator component', () => {
    render(<StringCalculatorView />);
    expect(screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)')).toBeInTheDocument();
  });
});