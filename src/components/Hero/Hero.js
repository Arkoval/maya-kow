import React from "react"
import styled from "styled-components"
import HeroImage from "../../images/hero-img.jpg"
import HeroNavbar from '../Navbar/HeroNavbar'

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: url(${HeroImage}) no-repeat fixed center;
`
const StyledHeading = styled.h1`
  color: ${({theme}) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.paragraf};
  font-size: 3rem;
  font-weight: 300;
  text-align: right;
`
const StyledDiv = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`
const Hero = () => {
  return (
    <>
    <HeroNavbar/>
      <StyledWrapper>
        <StyledDiv>
          <StyledHeading>
            kobiece przywództwo na
            <br /> własnych warunkach
          </StyledHeading>
        </StyledDiv>
      </StyledWrapper>
    </>
  )
}

export default Hero
