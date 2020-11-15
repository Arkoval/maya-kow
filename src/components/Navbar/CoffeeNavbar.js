import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.inline.svg';
import { theme } from '../../theme/theme';

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  width: 100%;
`;
const StyledWrapper = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 7rem;
  display: grid;
  place-items: center;
  box-shadow: -5px 6px 13px 0px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.media.sm} {
    height: 9rem;
  }
`;
const StyledNavList = styled.ul`
  ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-evenly')};
  width: 100%;
  list-style: none;
  padding: 1rem;

  ${({ theme }) => theme.media.sm} {
    width: 60%;
    padding: 2rem;
  }
`;
const StyledNavItem = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  cursor: pointer;

  ${({ theme }) => theme.media.md} {
    font-size: 1.7rem;
  }

  &:hover {
    color: ${({ color }) => color};
  }
`;
const StyledLogo = styled(Logo)`
  fill: ${({ color, theme }) =>
    color === theme.colors.green ? theme.colors.darkGreen : theme.colors.light};
  height: 4rem;
  ${({ theme }) => theme.media.sm} {
    height: 6rem;
  }
`;

const CoffeeNavbar = ({ color, offer }) => {
  const link = (color, theme, offer) => {
    if (color === theme.colors.green) {
      return (
        <StyledLink color={color} to={'/download'}>
          do pobrania
        </StyledLink>
      );
    } else if (color === theme.colors.blue) {
      return (
        <StyledLink color={color} to={'/blog'}>
          blog
        </StyledLink>
      );
    } else if (offer === 'online') {
      return (
        <StyledLink color={color} to={'/oferta-wyjazdowa'}>
          wyjazdy rozwojowe
        </StyledLink>
      );
    } else if (offer === 'travel') {
      return (
        <StyledLink color={color} to={'/oferta-online'}>
          oferta online
        </StyledLink>
      );
    }
  };

  return (
    <>
      <StyledNav>
        <StyledWrapper color={color}>
          <StyledLogo color={color} />
        </StyledWrapper>
        <StyledNavList>
          <StyledNavItem>
            <StyledLink color={color} to={'/'}>
              home
            </StyledLink>
          </StyledNavItem>
          <StyledNavItem>{link(color, theme, offer)}</StyledNavItem>
          <StyledNavItem>
            {color === theme.colors.red ? (
              <StyledLink color={color} to={'/opinie'}>
                opinie
              </StyledLink>
            ) : (
              <StyledLink color={color} to={'/#kontakt'}>
                kontakt
              </StyledLink>
            )}
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </>
  );
};

export default CoffeeNavbar;
