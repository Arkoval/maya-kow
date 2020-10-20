import React from "react"
import styled from "styled-components";
import LinkedIn from '../../images/linkedin.inline.svg'

const StyledWrapper = styled.div`
${({theme}) => theme.mixins.flex('flex', 'column', 'center', 'center')};
/* height: 70vh; */
font-size: 1.5rem;

`

const StyledTextWrapper = styled.div`
${({theme}) => theme.mixins.flex('flex', 'column', 'center', 'center')};
width: 50%;
margin: 1rem;
`
const StyledOuterWrapper = styled.div`
  ${({theme}) => theme.mixins.flex('flex', 'row', 'center', 'center')};
  border-bottom: 1px solid ${({theme})=> theme.colors.dark};
  padding: 4rem;
  margin-bottom: 4rem;
  width: 70%;

`
const StyledHeading = styled.h1`
font-family: ${({theme}) => theme.fonts.heading};
font-size: 8rem;
color: ${({theme}) => theme.colors.green};
margin-right: 1rem;
`
const StyledInnerWrapper = styled.div`
${({theme}) => theme.mixins.flex('flex', 'row', 'flex-start', 'space-evenly')};
width: 90%;
/* flex-wrap: wrap; */
`
const StyledParagraph = styled.p``
const StyledSpan = styled.span`
align-self: flex-end;
margin-right: 8rem;
display: flex;
align-items: center;
width: 20%;
font-size: 1rem;
`
const StyledLink = styled.a`
text-decoration: none;
margin-right: 1rem;

`
const StyledSvg = styled(LinkedIn)`
width: 3rem;
height: 3rem;
fill: ${({theme}) => theme.colors.dark};

`

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
        <StyledLink href='https://www.linkedin.com'><StyledSvg/></StyledLink>
          Zajrzyj na mój profil na LinkedIn, jeśli chcesz zobaczyć
          pełen obraz moich ról i firm, w których pracowałam.
        </StyledSpan>
      </StyledWrapper>
    </>
  )
}

export default Numbers;
