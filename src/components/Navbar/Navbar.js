import { Link } from 'gatsby';
import React, { useState} from 'react';
import styled, {css} from 'styled-components'
import {routes} from '../../routes/routes'

const StyledNav = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.light};
    position: fixed;
    top: 0;
    left: 0;
    ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')};
    transform: translateY(${({ isActive }) => (isActive ? '0' : '-100%')});
    transition: transform .3s .1s ease-out;
    z-index: 1;
`
const StyledNavList = styled.ul`
    list-style: none;
    margin-left: 4rem;

`
const StyledNavItem = styled.li`
    margin-bottom: 1.5rem;
    text-align: left;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.dark};
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: 4rem;
    
    `
const StyledNavButton = styled.button`
        padding: 1rem;
        position: fixed;
        top: 3rem;
        left: 3rem;
        display: inline-block;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        margin: 0;
        z-index: 100;

        &:focus{
            outline: 0;
        }
    `
const StyledNavButtonWrapper = styled.span`
        width: 3.5rem;
        height: 1.5rem;
        display: inline-block;
        position: relative;

    `
const StyledNavButtonInner = styled.span`

    &,
    &::before,
    &::after{
        width: 100%;
        height: .2rem;
        background-color: ${({theme}) => theme.colors.dark};
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        }


    &::before,
    &::after {
        display: block;
        content: '';
        transition: transform .3s .2s ease-in-out;
    }
    &{
        transition: background-color .3s .1s ease-in-out;
        ${({isActive}) => isActive && css`
        background-color: transparent;
        ` }  
    }

    &::before{
        top: -.8rem;
        ${({isActive}) => isActive && css`
        transform: translateY(.8rem) rotate(45deg)
        ` }
    }
    &::after{
        top: .8rem;
        ${({isActive}) => isActive && css`
        transform: translateY(-.8rem) rotate(-45deg)
        ` }
    }   

    `


const Navbar = () => {
    let [isActive, setIsActive] = useState(false)
    
    const handleActive = () => setIsActive(!isActive)

    
    const navLinks = routes.map(route => {
        return(
            <StyledNavItem key={route.name}>
                <StyledLink to={route.path}>{route.name}</StyledLink>
            </StyledNavItem>
        )
    })


    return (
        <div>
                <StyledNavButton onClick={handleActive}>
                    <StyledNavButtonWrapper>
                        <StyledNavButtonInner isActive={isActive}>
                        </StyledNavButtonInner>
                    </StyledNavButtonWrapper>
                </StyledNavButton>
                <StyledNav isActive={isActive}>
                    <StyledNavList>
                     {navLinks}
                    </StyledNavList>
                </StyledNav>
        </div>
    )
}

export default Navbar