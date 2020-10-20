import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby';
import Dog from '../../images/about_6.jpg'



const StyledSection = styled.section`
  height: 100vh;
  background: url(${Dog}) no-repeat left;
  background-size: 60%;
  ${({ theme }) => theme.mixins.flex("flex", "column", "flex-end", "center")}
  
`
const StyledWrapper = styled.div`
width: 30%;

`
const StyledTextWrapper = styled.div`
  text-align: justify;
  width: 70%;
   ${({ theme }) => theme.mixins.flex("flex", "column", "flex-start", "center")}
`
const StyledHeading = styled.h1`
font-family: ${({theme}) => theme.fonts.heading};
font-size: 2rem;
position: relative;

 &::before{
   content: '';
   height: 1rem;
   width: 85%;
   position: absolute;
   top: 50%;
   left: 0;
   background-color: ${({theme}) => theme.colors.green};
   z-index: -1;
 }

`

const StyledParagraph = styled.p`
margin: 2rem 0;
`

const StyledLink = styled(Link)`
cursor: pointer;
text-decoration: none;
font-size: 1.2rem;
font-family: ${({theme}) => theme.fonts.heading };
align-self: flex-end;
`


const AboutSubPageTwo = () => {
  return (
    <>
      <StyledSection>
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
            czerwone włoskie wino, maliny, słońce, morze i listopad. Gdy wchodzę
            do księgarni – przejawiam wszelkie znamiona uzależnienia.
          </StyledParagraph>
          <StyledLink to="/#o-mnie">wróć...</StyledLink>
        </StyledTextWrapper>
        </StyledWrapper>
      </StyledSection>
    </>
  )
}

export default AboutSubPageTwo
