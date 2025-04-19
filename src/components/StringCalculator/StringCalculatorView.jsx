import React from 'react';
import { useStringCalculator } from '../../hook/useStringCalculator';
import { Container, Input, Button, Result, Error } from './style';

const StringCalculator = () => {
  const {
    input,
    result,
    error,
    handleInputChange,
    handleCalculate
  } = useStringCalculator();

  console.log(input,result,"res");
  
  return (
    <Container>
      <h2>String Calculator</h2>
      <Input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers (e.g., 1,2,3)"
      />
      <Button onClick={handleCalculate}>
        Calculate
      </Button>
      {error && <Error>{error}</Error>}
      <Result>
        Result: {result}
      </Result>
    </Container>
  );
};

export default StringCalculator; 