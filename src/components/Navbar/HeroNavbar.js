import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { routes } from '../../routes/routes';
import Logo from '../../images/logoHero.inline.svg';
import { animationScroll } from '../../utils/Animations';

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
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'flex-start', 'flex-start')};
    list-style: none;
    padding: 1.5rem;

    li:last-child {
      order: 1;
    }
    li:nth-child(6) {
      order: 3;
    }
  }
`;
const StyledNavItem = styled.li`
  margin-right: 1rem;
  text-align: left;
  ${({ theme }) => theme.media.lg} {
    margin-right: 3rem;
    a {
      line-height: 1.1;
    }
  }
`;

const StyledLink = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  font-weight: 400;
  transition: 0.2s;
  ${({ theme }) => theme.media.lg} {
    font-size: 1.5rem;
  }
  &:hover {
    transform: scale(1.15);
    color: ${({ theme }) => theme.colors.green};
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
  const goToHandler = e => {
    e.target.name && animationScroll(e.target.name);
  };

  const navLinks = routes.map(route => {
    return (
      <StyledNavItem key={route.name}>
        <StyledLink name={route.subName}>{route.name}</StyledLink>
      </StyledNavItem>
    );
  });

  return (
    <>
      <StyledNav>
        <StyledLogo />
        <StyledNavList onClick={goToHandler}>
          {navLinks}
          <StyledNavItem>
            <StyledLink
              as={Link}
              to="https://www.sklep.magdalena-kowalska.pl"
              target="_blank"
            >
              sklep
            </StyledLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </>
  );
};

export default Navbar;
