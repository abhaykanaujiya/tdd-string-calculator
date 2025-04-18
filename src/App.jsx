import React from "react";
import styled from "styled-components";
import StringCalculator from "./components/StringCalculator";
import { theme } from "./constants/theme";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.background.main}, ${theme.colors.primary.light}20);
  padding: ${theme.spacing.xl};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  
  h1 {
    color: ${theme.colors.primary.main};
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing.sm};
    font-weight: 700;
  }
  
  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <h1>🔢 String Calculator</h1>
        <p>Welcome to the Incubyte TDD Kata! Enter numbers separated by commas to calculate their sum.</p>
      </Header>
      <StringCalculator />
    </AppContainer>
  );
};

export default App;