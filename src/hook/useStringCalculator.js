import { useState } from 'react';
import { add } from '../utils/stringCalculator.js';

export const useStringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError('');
  };

  const handleCalculate = () => {
    try {
      setError('');
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    input,
    result,
    error,
    handleInputChange,
    handleCalculate
  };
}; 