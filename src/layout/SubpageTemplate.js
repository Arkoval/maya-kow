import React from 'react';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import Footer from "../components/Footer/Footer"

const SubpageTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Footer/>
    </ThemeProvider>
  );
};

export default SubpageTemplate;
