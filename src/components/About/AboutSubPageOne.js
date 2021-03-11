import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'flex-start')}
`;
const StyledWrapper = styled.div`
  flex-wrap: wrap;
  width: 90%;
  margin: 1rem auto;

  ${({ theme }) => theme.media.sm} {
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'flex-start', 'space-between')};
    width: 70%;
    margin-top: 2rem;
    flex-wrap: nowrap;
  }
  div:first-child {
    margin-right: 2rem;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ theme }) => theme.media.sm} {
    width: 50%;
    height: 50%;
  }
`;
const StyledTextWrapper = styled.div`
  text-align: left;
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 80%;
  }
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  margin-top: 1rem;
  position: relative;
  text-align: left;

  &::before {
    content: '';
    height: 0.8rem;
    width: 40%;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.green};
    z-index: -1;
    display: none;

    ${({ theme }) => theme.media.md} {
      display: inline;
      width: 60%;
      height: 1rem;
      top: 50%;
    }
  }

  ${({ theme }) => theme.media.lg} {
    font-size: 2rem;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
`;

const AboutSubPageOne = () => {
  return (
    <>
      <StyledSection>
        <StyledImage
          src={require('../../images/about_5.jpg')}
          alt="zdjęcie z perspektywy"
        />
        <StyledWrapper>
          <StyledTextWrapper>
            <StyledHeading>moją super-mocą jest rozciąganie</StyledHeading>
            <StyledParagraph>
              Na macie do jogi. Ale przede wszystkim w pracy z kobietami.
              Rozciąganie, czyli przekraczanie granic strefy komfortu. Czyli
              budowanie pewności siebie, poprzez robienie rzeczy, które
              początkowo przerażają lub wydają się niemożliwe.
            </StyledParagraph>
            <StyledParagraph>
              {' '}
              Tak więc uwielbiam rozciągać kobiety. O milimetr. O centymetr. A
              potem znowu. Uwielbiam patrzeć, jak rosną i rozwijają skrzydła.
              Jak sięgają po to, czego pragną: odważnie i ze spokojną pewnością.
            </StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading>zmiana i transformacja to mój żywioł</StyledHeading>
            <StyledParagraph>
              Nie potrafię usiedzieć w jednym miejscu. Przeprowadzaliśmy się
              częściej niż dziesięć razy. Uwielbiam chaos i nieznane tuż przed
              zmianą, a chwilę potem - porządek i spokój, jakie pojawiają się
              tuż po rozpakowaniu ostatniego pudła.{' '}
            </StyledParagraph>
            <StyledParagraph>
              {' '}
              Najbardziej naturalnie przychodzi mi podważanie tego, co oczywiste
              i nawykowe. <br /> A w następnym kroku jego transformacja.
              <br />
              Oglądałaś Spidermana? On miał pajęczy zmysł odczytujący
              niebezpieczeństwo, ja mam pajęczy zmysł reagujący na „prawdy
              oczywiste”. Zwłaszcza te, które paraliżują i tłumią potencjał.
            </StyledParagraph>
          </StyledTextWrapper>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

export default AboutSubPageOne;
