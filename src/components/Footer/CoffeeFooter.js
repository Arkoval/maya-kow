import React from 'react';
import styled from 'styled-components';
import Facebook from "../../images/facebook.inline.svg"
import LinkedIn from "../../images/linkedin.inline.svg"
import Email from "../../images/email.inline.svg"

const StyledFooter = styled.footer`
margin: 0 auto;
margin-top: 2rem;
width: 90%;
border-top: 2px solid ${({theme}) => theme.colors.green};


`
const StyledWrapper = styled.span`
${({theme}) => theme.mixins.flex('flex', 'row', 'center', 'flex-end')};
padding: 2rem;
  svg {
    width: 3rem;
    height: 3rem;
    margin-left: 2rem;
    fill: ${({ theme }) => theme.colors.dark};
  }
`
const StyledLink = styled.a``

const StyledParagraph = styled.p`
color: ${({theme}) => theme.colors.dark};
font-weight: 500;
font-size: 1.2rem;
`
const Footer = () => {

    return <>
        <StyledFooter>
            <StyledWrapper>
            <StyledParagraph>
                Odwiedź moje sociale
            </StyledParagraph>
        <StyledLink href="https://www.facebook.pl/">
            <Facebook />
          </StyledLink>
          <StyledLink href="https://www.linkedin.pl/">
            <LinkedIn />
          </StyledLink>
          <StyledLink href="https://www.facebook.pl/">
            <Email />
          </StyledLink>
        </StyledWrapper>
        </StyledFooter>
    </>

}

export default Footer;