import React from "react"
import styled from "styled-components";
import Powder from "../../images/powder.inline.svg";

const StyledSection = styled.section`
  height: 110vh;
  position: relative;
`
const StyledBackgroundHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18vw;
  text-align: center;
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.3;
`
const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex("flex", "row", "center", "space-evenly")}
  flex-wrap: wrap;
`
const StyledCard = styled.div`
  width: 20%;
  margin-top: 4rem;
  box-shadow: 0px 0px 21px 1px rgba(0, 0, 0, 0.2);
  background: white;
  ${({ theme }) => theme.mixins.flex("flex", "column", "center", "center")};
`
const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const StyledParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem;
  text-align: center;
`
const StyledButton = styled.button`
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  align-self: flex-end;
  margin: 1rem;
  cursor: pointer;
`
const StyledPowderSvg = styled(Powder)`
position: absolute;
right: -10%;
bottom: -10%;
width: 60%;
z-index: -2;
`
const Cooperation = () => {
  return (
    <>
      <StyledSection>
        <StyledBackgroundHeading>współpraca</StyledBackgroundHeading>
        <StyledWrapper>
          <StyledCard>
            <StyledImage src={require("../../images/cooperation_1.jpg")} />
            <StyledParagraph>mentoring<br/>indywidualny</StyledParagraph>
            <StyledButton>czytaj dalej...</StyledButton>
          </StyledCard>
          <StyledCard>
            <StyledImage src={require("../../images/cooperation_2.jpg")} />
            <StyledParagraph>grupowe programy mentorignowe</StyledParagraph>
            <StyledButton>czytaj dalej...</StyledButton>
          </StyledCard>
          <StyledCard>
            <StyledImage src={require("../../images/cooperation_3.jpg")} />
            <StyledParagraph>szkolenia<br/> wyjazdowe</StyledParagraph>
            <StyledButton>czytaj dalej...</StyledButton>
          </StyledCard>
          <StyledCard>
            <StyledImage src={require("../../images/cooperation_4.jpg")} />
            <StyledParagraph>kursy<br/> online</StyledParagraph>
            <StyledButton>czytaj dalej...</StyledButton>
          </StyledCard>
        </StyledWrapper>
        <StyledPowderSvg/>
      </StyledSection>
    </>
  )
}

export default Cooperation
