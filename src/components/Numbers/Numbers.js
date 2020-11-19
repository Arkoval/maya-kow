import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import LinkedIn from '../../images/linkedin.inline.svg';
import { animationNumbers } from '../../utils/Animations';

const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  width: 90%;
  margin: 2rem auto;
`;

const StyledTextWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')};
  margin: 1rem auto;
  width: 100%;
  text-align: left;
  ${({ theme }) => theme.media.md} {
    width: 20%;
  }
`;
const StyledHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  margin: 2rem 0;
  position: relative;

  ${({ theme }) => theme.media.lg} {
    font-size: 2rem;
  }

  &::before {
    content: '';
    height: 0.8rem;
    width: 20%;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.green};
    z-index: -1;
    display: none;

    ${({ theme }) => theme.media.md} {
      display: inline;
      width: 15%;
      height: 1rem;
      top: 50%;
    }
  }
`;
const StyledOuterWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')};
  margin: 1rem auto;
  width: 100%;
  text-align: left;
  ${({ theme }) => theme.media.md} {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.green};
    ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'center')};
    padding-bottom: 4rem;
    margin-bottom: 4rem auto;
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
const StyledParagraph = styled.p``;
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
  let first = useRef(null);
  let second = useRef(null);
  let third = useRef(null);
  let fourth = useRef(null);
  let fifth = useRef(null);
  let [start, setStart] = useState(false);

  const handleStart = () => {
    if (window.innerWidth < 796) {
      return;
    } else window.scrollY > 1800 && setStart(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStart);
    handleStart();
    if (start) {
      animationNumbers(first, 0, 20, 1, 3000, '');
      animationNumbers(second, 0, 12, 1, 3000, '+');
      animationNumbers(third, 0, 100, 1, 3000, '+');
      animationNumbers(fourth, 0, 4500, 5, 8000, '+');
      animationNumbers(fifth, 0, 3000, 5, 8000, '+');
    }
    return () => {
      window.removeEventListener('scroll', handleStart);
    };
  });

  return (
    <>
      <StyledWrapper>
        <StyledHeader>
          Lubisz liczby? Gdyby liczby miały opisać moje życie zawodowe,
          wyglądałoby to tak:
        </StyledHeader>
        <StyledOuterWrapper>
          <StyledHeading ref={e => (first = e)}>20</StyledHeading>
          <StyledParagraph>
            lat pracy na 9 stanowiskach: od stażystki w firmie rekrutacyjnej,
            przez kilka stanowisk menadżerskich, do dyrektora odpowiedzialnego
            za strategię HR dla biznesu na poziomie Europy
          </StyledParagraph>
        </StyledOuterWrapper>
        <StyledInnerWrapper>
          <StyledTextWrapper>
            <StyledHeading ref={e => (second = e)}>12+</StyledHeading>
            <StyledParagraph>
              lat spędzonych w szkołach.
              <br /> Skończyłam socjologię i psychologię, szkoły coachingu:
              indywidualnego i grupowego, facylitacji oraz szkołę
              trenerów&nbsp;NVC (Porozumienia bez Przemocy)
            </StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading ref={e => (third = e)}>100+</StyledHeading>
            <StyledParagraph>szkoleń, w których uczestniczyłam</StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading ref={e => (fourth = e)}>4.500+</StyledHeading>
            <StyledParagraph>
              godzin przeprowadzonych warsztatów, szkoleń, facylitacji procesów
              grupowych
            </StyledParagraph>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledHeading ref={e => (fifth = e)}>3.000+</StyledHeading>
            <StyledParagraph>
              godzin przeprowadzonych procesów coachingowych i mentoringowych
            </StyledParagraph>
          </StyledTextWrapper>
        </StyledInnerWrapper>
        <StyledSpan>
          <StyledLink
            href="https://www.linkedin.com/in/makowalska/?fbclid=IwAR3m0rVr6HuW9moQbcAyzwc0rvSTz6-d_Vvzld2dP3zM1KP1WBSna6BIXxk"
            target="_blank"
          >
            <StyledSvg />
          </StyledLink>
          Zajrzyj na mój profil na LinkedIn, jeśli chcesz zobaczyć pełen obraz
          moich ról i firm, w&nbsp;których pracowałam.
        </StyledSpan>
      </StyledWrapper>
    </>
  );
};

export default Numbers;
