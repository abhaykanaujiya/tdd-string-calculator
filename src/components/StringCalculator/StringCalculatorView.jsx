import React from 'react';
import { Container, Input, Button, Result, Error } from './style';

const StringCalculatorView = () => {
 
  return (
    <Container>
      <h2>String Calculator</h2>
      <Input
        type="text"
        value={""}
        onChange={""}
        placeholder="Enter numbers separated by commas"
      />
      <Button >
        Calculate
      </Button>
      <Result>
        <strong>Result:</strong> 
      </Result>
    </Container>
  );
};

export default StringCalculatorView; 