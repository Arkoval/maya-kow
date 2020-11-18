import React, { useEffect } from 'react';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AllTextFormatter from '../utils/TextFormatter';
import { Helmet } from 'react-helmet';

const MainTemplate = ({ children }) => {
  useEffect(() => {
    AllTextFormatter();
  });

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default MainTemplate;
