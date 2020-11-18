import React, { useEffect } from 'react';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AllTextFormatter from '../utils/TextFormatter';

const MainTemplate = ({ children }) => {
  useEffect(() => {
    AllTextFormatter();
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default MainTemplate;
