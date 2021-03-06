import React, { useEffect } from 'react';
import AboutMain from '../components/About/About';
import Numbers from '../components/Numbers/Numbers';
import Hero from '../components/Hero/Hero';
import Offer from '../components/Offer/Offer';
import SEO from '../components/seo';
import MainTemplate from '../layout/MainTemplate';
import Cooperation from '../components/Cooperation/Cooperation';
import ForCoffee from '../components/ForCoffee/ForCoffee';
import Contact from '../components/Contact/Contact';
import Opinions from '../components/opinions/Opinions';
import { Mailerlite } from '../utils/Mailerlite';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  useEffect(() => {
    Mailerlite();
  });

  return (
    <MainTemplate>
      <SEO title="Home" />
      <Hero />
      <AboutMain />
      <Numbers />
      <Offer />
      <Cooperation />
      <Opinions />
      <ForCoffee />
      <Contact />
    </MainTemplate>
  );
};

export default IndexPage;
