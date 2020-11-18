import React, { useEffect } from 'react';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import Footer from '../components/Footer/Footer';
import AllTextFormatter from '../utils/TextFormatter';

const SubpageTemplate = ({ children }) => {
  useEffect(() => {
    AllTextFormatter();
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default SubpageTemplate;
