import React, { useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { routes } from '../../routes/routes';
import { animationScroll } from '../../utils/Animations';

const StyledNav = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(222, 222, 222, 0.3);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')};
  transform: translateY(${({ isActive }) => (isActive ? '0' : '-100%')});
  transition: transform 0.3s 0.1s ease-out;
  z-index: 2;
  overflow: hidden;
`;
const StyledNavList = styled.ul`
  list-style: none;
  width: 80%;
  margin: 0 auto;
`;
const StyledNavItem = styled.li`
  margin-bottom: 1rem;
  text-align: left;
`;

const StyledLink = styled.button`
  position: relative;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.paragraf};
  font-size: 2.5rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1rem;
    top: 50%;
    z-index: -1;
  }
  &::before {
    left: -0.1rem;
  }
  &::after {
    right: -0.1rem;
    background: ${({ theme }) => theme.colors.green};
    transition: width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:before {
    background: ${({ theme }) => theme.colors.green};
    width: 100%;
    transition: width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:after {
    background: transparent;
    width: 102%;
    transition: 0s;
  }
`;
const StyledNavButton = styled.button`
  padding: 1rem;
  position: fixed;
  top: 7%;
  left: 1%;
  display: inline-block;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  z-index: 100;

  &:focus {
    outline: 0;
  }
`;
const StyledNavButtonWrapper = styled.span`
  width: 2.5rem;
  height: 1rem;
  display: inline-block;
  position: relative;

  ${({ theme }) => theme.media.sm} {
    width: 3.5rem;
    height: 1.5rem;
  }
`;
const StyledNavButtonInner = styled.span`
  &,
  &::before,
  &::after {
    width: 100%;
    height: 0.15rem;
    background-color: ${({ theme }) => theme.colors.green};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    ${({ theme }) => theme.media.sm} {
      height: 0.2rem;
    }
  }

  &::before,
  &::after {
    display: block;
    content: '';
    transition: transform 0.3s 0.2s ease-in-out;
  }
  & {
    transition: background-color 0.3s 0.1s ease-in-out;
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: transparent;
      `}
  }

  &::before {
    top: -0.8rem;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(0.8rem) rotate(45deg);
      `}
  }
  &::after {
    top: 0.8rem;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(-0.8rem) rotate(-45deg);
      `}
  }
`;

const Navbar = () => {
  let [isActive, setIsActive] = useState(false);
  let [visible, setVisible] = useState(false);

  const handleActive = () => setIsActive(!isActive);

  const goToHandler = e => {
    handleActive();
    animationScroll(e.target.name);
  };

  function updateScroll() {
    if (window.innerWidth < 796) {
      setVisible(true);
    } else {
      window.scrollY > 900 && setVisible(true);
      window.scrollY < 900 && setVisible(false);
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navLinks = routes.map(route => {
    return (
      <StyledNavItem key={route.name}>
        <StyledLink name={route.subName}>{route.name}</StyledLink>
      </StyledNavItem>
    );
  });

  return (
    <div>
      <StyledNavButton visible={visible} onClick={handleActive}>
        <StyledNavButtonWrapper>
          <StyledNavButtonInner isActive={isActive}></StyledNavButtonInner>
        </StyledNavButtonWrapper>
      </StyledNavButton>
      <StyledNav isActive={isActive}>
        <StyledNavList onClick={goToHandler}>{navLinks}</StyledNavList>
      </StyledNav>
    </div>
  );
};

export default Navbar;
