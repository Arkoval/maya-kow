import React from 'react';
import styled from 'styled-components';
import LinkedIn from '../../images/linkedin.inline.svg';

const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  min-height: 80vh;
  width: 90%;
  margin: 1rem auto;
`;

const StyledTextWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  margin: 1rem auto;
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.media.md} {
    width: 20%;
  }
`;
const StyledOuterWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  margin: 1rem auto;
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.media.md} {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.green};
    ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'center')};
    padding: 4rem;
    margin: 4rem auto;
    width: 70%;
  }
`;
const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};

  ${({ theme }) => theme.media.md} {
    font-size: 4rem;
    margin-right: 1rem;
  }
  ${({ theme }) => theme.media.xl} {
    font-size: 7rem;
    margin-right: 1rem;
  }
`;

const StyledInnerWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flex('flex', 'row', 'flex-start', 'space-evenly')};
  flex-wrap: wrap;
`;
const StyledParagraph = styled.p`
  ${({ theme }) => theme.media.md} {
    font-size: 1.2rem;
  }
`;
const StyledSpan = styled.span`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.green};
  padding-top: 1rem;

  ${({ theme }) => theme.media.md} {
    border: none;
    padding: 0;
    font-size: 1.2rem;
    align-self: flex-end;
    width: 30%;
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  margin-right: 1rem;
`;
const StyledSvg = styled(LinkedIn)`
  width: 3rem;
  height: 3rem;
  fill: ${({ theme }) => theme.colors.blue};
`;

const Numbers = () => {
  return (
    <>
      <StyledWrapper>
        <StyledOuterWrapper>
          <StyledHeading>20</StyledHeading>
          <StyledParagraph>
            lat pracy na 9 stanowiskach: od stażystki w firmie rekrutacyjnej,
            przez kilka stanowisk menadżerskich, do dyrektora odpowiedzialnego
            za strategię HR dla biznesu na poziomie Europy.
          </StyledParagraph>
        </StyledOuterWrapper>
        <StyledInnerWrapper>
          <StyledTextWrapper>
            <StyledHeading>12+</StyledHeading>
            <StyledParagraph>
              lat spędzonych w szkołach. Skończyłam socjologię i psychologię
              biznesu, szkoły coachingu: indywidualnego i grupowego, szkołę
              trenerów NVC (Porozumienia bez Przemocy) oraz facylitacji.
            </StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading>100+</StyledHeading>
            <StyledParagraph>szkoleń, w których uczestniczyłam</StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading>4.500+</StyledHeading>
            <StyledParagraph>
              godzin przeprowadzonych warsztatów, szkoleń, facylitacji procesów
              grupowych.
            </StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading>3.000+</StyledHeading>
            <StyledParagraph>
              godzin przeprowadzonych procesów coachingowych i mentoringowych.
            </StyledParagraph>
          </StyledTextWrapper>
        </StyledInnerWrapper>
        <StyledSpan>
          <StyledLink href="https://www.linkedin.com">
            <StyledSvg />
          </StyledLink>
          Zajrzyj na mój profil na LinkedIn, jeśli chcesz zobaczyć pełen obraz
          moich ról i firm, w których pracowałam.
        </StyledSpan>
      </StyledWrapper>
    </>
  );
};

export default Numbers;
