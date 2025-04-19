import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculatorView from '../StringCalculator/index';

describe('StringCalculatorView', () => {
  it('renders the calculator component', () => {
    render(<StringCalculatorView />);
    expect(screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)')).toBeInTheDocument();
  });

  it('calculates sum of numbers', () => {
    render(<StringCalculatorView />);
    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(screen.getByText(/calculate/i));
    expect(screen.getByText(/result:\s*6/i)).toBeInTheDocument();
  });

  it('handles empty input', () => {
    render(<StringCalculatorView />);
    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(screen.getByText(/calculate/i));
    expect(screen.getByText(/result:\s*0/i)).toBeInTheDocument();
  });

  it('handles invalid input', () => {
    render(<StringCalculatorView />);
    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    fireEvent.change(input, { target: { value: '1,a,3' } });
    fireEvent.click(screen.getByText(/calculate/i));
    expect(screen.getByText('Error: Invalid number in input')).toBeInTheDocument();
  });
});