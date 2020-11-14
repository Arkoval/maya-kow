import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Dog from '../../images/about_6.jpg';

const StyledSection = styled.section`
  margin: 2rem 0;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-end', 'center')}
  ${({ theme }) => theme.media.sm} {
    background: url(${Dog}) no-repeat left;
    background-size: 60%;
    min-height: 100vh;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: scale-down;
  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  ${({ theme }) => theme.media.sm} {
    width: 35%;
    margin: 0;
  }
`;
const StyledTextWrapper = styled.div`
  /* text-align: justify; */

  ${({ theme }) => theme.media.sm} {
    width: 70%;
    ${({ theme }) =>
      theme.mixins.flex('flex', 'column', 'flex-start', 'center')}
  }
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  position: relative;
  margin-top: 1rem;

  &::before {
    content: '';
    height: 0.8rem;
    width: 40%;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.green};
    z-index: -1;

    ${({ theme }) => theme.media.xs} {
      display: none;
    }
    ${({ theme }) => theme.media.md} {
      display: inline;
      width: 85%;
      height: 1rem;
      top: 30%;
    }
  }
  ${({ theme }) => theme.media.sm} {
    font-size: 2rem;
  }
`;

const StyledParagraph = styled.p`
  margin: 2rem 0;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  align-self: flex-end;
  outline: none;
  ${({ theme }) => theme.media.sm} {
    font-size: 1.2rem;
  }
`;

const AboutSubPageTwo = () => {
  return (
    <>
      <StyledSection>
        <StyledImage src={Dog} />
        <StyledWrapper>
          <StyledTextWrapper>
            <StyledHeading>ja to nie tylko moja praca</StyledHeading>
            <StyledParagraph>
              Moja rodzina wpisuje się w definicję włoskiej rodziny – jesteśmy
              głośni i intensywni, co potwierdzi każdy nasz sąsiad. Mam męża,
              który wytrzymuje ze mną od 30 lat, dwóch synów: dorosłego i
              nastolatka. I psa – Lolkę, która większość czasu w domu, spędza
              czuwając przy lodówce. Jestem nauczycielką jogi kundalini,
              wegetarianką i ekologiczną terrorystką (jak mówi mój mąż). Kocham
              czerwone włoskie wino, maliny, słońce, morze i listopad. Gdy
              wchodzę do księgarni – przejawiam wszelkie znamiona uzależnienia.
            </StyledParagraph>
            <StyledLink to="/#o-mnie">wróć...</StyledLink>
          </StyledTextWrapper>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

export default AboutSubPageTwo;
