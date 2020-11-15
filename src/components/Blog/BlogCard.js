import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 23rem;
  box-shadow: -5px 6px 13px 0px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.light};
  margin: 1rem auto;
  position: relative;

  ${({ theme }) => theme.media.sm} {
    width: 26.5rem;
    height: 23rem;
  }
`;
const StyledHeadingContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.paragraf};
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  min-height: 5rem;
  text-align: center;

  ${({ theme }) => theme.media.sm} {
    min-height: 7rem;
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;
const StyledHeading = styled.h2``;

const BlogCard = ({ img, title, title2, link }) => {
  return (
    <StyledWrapper>
      <Link to={link}>
        <StyledImg src={img}></StyledImg>
        <StyledHeadingContainer>
          <StyledHeading>{title}</StyledHeading>
          {title2 ? <StyledHeading>{title2}</StyledHeading> : null}
        </StyledHeadingContainer>
      </Link>
    </StyledWrapper>
  );
};

export default BlogCard;
