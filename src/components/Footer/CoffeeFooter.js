import React, { useRef } from 'react';
import styled from 'styled-components';
import Facebook from '../../images/facebook.inline.svg';
import LinkedIn from '../../images/linkedin.inline.svg';
import Email from '../../images/email.inline.svg';

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ color }) => color};
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  ${({ theme }) => theme.media.md} {
    padding: 3rem;
  }
`;
const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'row', 'flex-start', 'space-evenly')};
  flex-wrap: wrap;
`;
const StyledInnerWrapper = styled.span`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')}
  text-align: center;
  margin-top: 2rem;
  ${({ theme }) => theme.media.md} {
    margin-top: 1rem;
    min-width: 0;
    &:nth-child(2) {
      order: 3;
    }
    &:nth-child(3) {
      order: 2;
    }
  }
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ color }) => color};

    ${({ theme }) => theme.media.md} {
      width: 4rem;
      height: 4rem;
    }
  }
`;
const StyledLink = styled.a``;
const StyledHeading = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0.5rem;
`;
const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 100;

  strong {
    font-weight: 400;
  }
`;

const Footer = ({ color }) => {
  return (
    <>
      <StyledFooter color={color}>
        <StyledWrapper>
          <StyledInnerWrapper color={color}>
            <StyledLink
              href="https://www.facebook.com/Magdalena-Kowalska-111505280625139"
              target="_blank"
            >
              <Facebook />
            </StyledLink>
            <StyledHeading>Facebook</StyledHeading>
            <StyledParagraph>Zajrzyj do mnie</StyledParagraph>
          </StyledInnerWrapper>

          <StyledInnerWrapper color={color}>
            <StyledLink
              href="https://www.linkedin.com/in/makowalska/?fbclid=IwAR3m0rVr6HuW9moQbcAyzwc0rvSTz6-d_Vvzld2dP3zM1KP1WBSna6BIXxk"
              target="_blank"
            >
              <LinkedIn />
            </StyledLink>
            <StyledHeading>LinkedIn</StyledHeading>
            <StyledParagraph>Zapraszam Cię do sieci</StyledParagraph>
          </StyledInnerWrapper>
          <StyledInnerWrapper color={color}>
            <StyledLink href="mailto:hello@magdalena-kowalska.pl">
              <Email />
            </StyledLink>
            <StyledHeading>Email</StyledHeading>
            <StyledParagraph>
              Napisz do mnie
              <br /> <strong>hello@magdalena-kowalska.pl</strong>
            </StyledParagraph>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledFooter>
    </>
  );
};

export default Footer;
