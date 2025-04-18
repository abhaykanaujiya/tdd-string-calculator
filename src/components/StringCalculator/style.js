import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Result = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

export const Error = styled.div`
  color: #dc3545;
  margin-bottom: 10px;
  padding: 8px;
  background-color: #f8d7da;
  border-radius: 4px;
`; 