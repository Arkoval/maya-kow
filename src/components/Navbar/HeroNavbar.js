import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { routes } from '../../routes/routes';
import Logo from '../../images/logoHero.inline.svg';

const StyledNav = styled.nav`
  position: absolute;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  z-index: 1;
  ${({ theme }) => theme.media.xs} {
    position: absolute;
    width: 90vw;
    left: 50%;
    top: 2%;
    transform: translateX(-50%);
    text-align: right;
    z-index: 1;
  }
`;
const StyledNavList = styled.ul`
  display: none;
  ${({ theme }) => theme.media.md} {
    border-top: 1px solid ${({ theme }) => theme.colors.light};
    ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'flex-start')};
    list-style: none;
    padding: 1.5rem;
  }
`;
const StyledNavItem = styled.li`
  margin-right: 1rem;
  text-align: left;
  ${({ theme }) => theme.media.lg} {
    margin-right: 3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  font-weight: 200;
  ${({ theme }) => theme.media.lg} {
    font-size: 1.5rem;
  }
`;
const StyledLogo = styled(Logo)`
  fill: ${({ theme }) => theme.colors.light};
  height: 4rem;
  ${({ theme }) => theme.media.lg} {
    height: 7rem;
  }
`;

const Navbar = () => {
  const navLinks = routes.map(route => {
    return (
      <StyledNavItem key={route.name}>
        <StyledLink to={route.path}>{route.name}</StyledLink>
      </StyledNavItem>
    );
  });

  return (
    <>
      <StyledNav>
        <StyledLogo />
        <StyledNavList>{navLinks}</StyledNavList>
      </StyledNav>
    </>
  );
};

export default Navbar;
