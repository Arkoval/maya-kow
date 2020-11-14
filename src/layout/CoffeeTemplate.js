import React from 'react';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import CoffeeFooter from '../components/Footer/CoffeeFooter';
import CoffeeNavbar from '../components/Navbar/CoffeeNavbar';

const CoffeeTemplate = ({ children, color, offer }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CoffeeNavbar color={color} offer={offer} />
      {children}
      <CoffeeFooter color={color} />
    </ThemeProvider>
  );
};

export default CoffeeTemplate;
