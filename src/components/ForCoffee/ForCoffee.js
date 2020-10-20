import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import CoffeeImage from "../../images/coffeeImg.jpg"

const StyledSection = styled.section`
  height: 100vh;
  background: url(${CoffeeImage}) no-repeat fixed -100%;
  background-size: 85%;
  ${({ theme }) => theme.mixins.flex("flex", "column", "flex-end", "flex-end")}
`
const StyledWrapper = styled.div`
  width: 30%;
  ${({ theme }) => theme.mixins.flex("flex", "column", "center", "flex-start")}
  height: 60%;
`
const StyledParagraph = styled.p`
  width: 80%;
  font-size: 1.2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};

`
const StyledLinksWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2rem;
  text-decoration: none;
`
const StyledSpan = styled.span`
  padding-top: 1rem;
  line-height: 1.2;
  display: block;
`
const ForCoffee = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledParagraph>
            Zatrzymaj się. Ciałem i umysłem.
            <StyledSpan>
              Znajdź ciche i komfortowe miejsce. Może masz w&nbsp;swoim zasięgu
              miękki, lekko zapadający się pod Twoim ciężarem fotel?
            </StyledSpan>
            <StyledSpan>
              Weź ulubioną filiżankę lub kubek, zaparz świeżą, aromatyczną kawę.
              A może wolisz herbatę, która&nbsp;powoli uwalnia zapach?
            </StyledSpan>
            <StyledSpan>
              Lubisz sięgać po coś do kawy? Czekoladę? Ciasto? Garść inspiracji?
            </StyledSpan>
            <StyledSpan>Częstuj się…</StyledSpan>
          </StyledParagraph>
          <hr />
          <StyledLinksWrapper>
            <StyledLink to="/blog">blog</StyledLink>
            <StyledLink to="/download">do pobrania</StyledLink>
          </StyledLinksWrapper>
        </StyledWrapper>
      </StyledSection>
    </>
  )
}

export default ForCoffee
