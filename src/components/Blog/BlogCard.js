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
const StyledHeading = styled.h2`
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

const BlogCard = ({ img, title, link }) => {
  return (
    <StyledWrapper>
      <Link to={link}>
        <StyledImg src={img}></StyledImg>
        <StyledHeading>{title}</StyledHeading>
      </Link>
    </StyledWrapper>
  );
};

export default BlogCard;
