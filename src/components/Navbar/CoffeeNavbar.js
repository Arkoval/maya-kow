import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo.inline.svg"

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flex("flex", "column", "center", "center")};
  width: 100%;
`
const StyledNavList = styled.ul`
  ${({ theme }) => theme.mixins.flex("flex", "row", "center", "space-evenly")};
  width: 80%;
  list-style: none;
  padding: 1.5rem;
`
const StyledNavItem = styled.li`
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 200;
`
const StyledLogo = styled(Logo)`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  fill: ${({ theme }) => theme.colors.light};
  height: 7rem;
`

const CoffeeNavbar = () => {
  return (
    <>
      <StyledNav>
        <StyledLogo />
        <StyledNavList>
          <StyledNavItem>
            <StyledLink to={"/"}>Strona główna</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to={"#"}>Do pobrania</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to={"#"}>Kontakt</StyledLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </>
  )
}

export default CoffeeNavbar
