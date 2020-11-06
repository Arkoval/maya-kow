import React from 'react';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import CoffeeFooter from "../components/Footer/CoffeeFooter"
import CoffeeNavbar from '../components/Navbar/CoffeeNavbar'

const CoffeeTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CoffeeNavbar/>
      {children}
      <CoffeeFooter/>
    </ThemeProvider>
  );
};

export default CoffeeTemplate;
