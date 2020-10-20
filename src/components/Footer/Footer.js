import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
height: 6rem;
background-color: ${({theme}) => theme.colors.dark};
${({theme}) => theme.mixins.flex('flex', 'column', 'center', 'center')}

`
const StyledParagraph = styled.p`
color: ${({theme}) => theme.colors.light};
`
const Footer = () => {

    return <>
        <StyledFooter>
            <StyledParagraph>
                Magda Kowalska © 2020
            </StyledParagraph>
        </StyledFooter>
    </>

}

export default Footer;