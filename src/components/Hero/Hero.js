import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../images/hero-img.jpg';
import { theme } from '../../theme/theme';
import HeroNavbar from '../Navbar/HeroNavbar';

const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  min-height: 100vh;
  background: url(${HeroImage}) no-repeat 65%;
  background-size: cover;

  ${({ theme }) => theme.media.lg} {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: url(${HeroImage}) no-repeat fixed center;
  }
`;
const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.paragraf};
  margin-top: 10rem;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  ${({ theme }) => theme.media.sm} {
    font-size: 3rem;
    text-align: right;
  }
  ${({ theme }) => theme.media.lg} {
    margin-top: 60rem;
    margin-right: 30rem;
  }
`;
const StyledDiv = styled.div`
  ${({ theme }) => theme.media.lg} {
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;
const Hero = () => {
  return (
    <>
      <HeroNavbar />
      <StyledWrapper>
        <StyledDiv>
          <StyledHeading>
            kobiece przywództwo na
            <br /> własnych warunkach
          </StyledHeading>
        </StyledDiv>
      </StyledWrapper>
    </>
  );
};

export default Hero;
