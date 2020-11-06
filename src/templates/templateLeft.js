import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import CoffeeTemplate from '../layout/CoffeeTemplate';
import styled from 'styled-components';

const StyledArticle = styled.article`
  width: 60%;
  /* background-color: lightgray; */
  margin: 0 auto;
  padding: 4rem;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')}
  box-shadow: 0px 0px 21px 1px rgba(0, 0, 0, 0.1);
`;
const StyledWrapper = styled.div`
  /* ${({ theme }) =>
    theme.mixins.flex('flex', 'row', 'center', 'space-between')} */
  /* width: 100%; */
`;
const StyledHeadingWrapper = styled.div`
  margin: 2rem;
  justify-self: flex-start;
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
`;
const StyledParagraph = styled.p`
  width: 60%;
  text-align: justify;
  margin: 1rem 0;
`;
const StyledImg = styled.img`
  width: 90%;
  height: 60vh;
  object-fit: cover;
`;
const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  justify-self: flex-end;
  align-self: flex-end;
`;
const LeftTemplate = ({ data }) => {
  const post = data.prismicBlogPost;

  useEffect(() => {
    console.log(post);
  });

  return (
    <CoffeeTemplate>
      <StyledArticle>
        <StyledHeadingWrapper>
          <StyledHeading>{post.data.title.text}</StyledHeading>
          <StyledParagraph>Post dodany: {post.data.date}</StyledParagraph>
        </StyledHeadingWrapper>
        <StyledImg src={post.data.image.url} alt={post.data.image.alt} />
        <StyledParagraph>{post.data.text.text}</StyledParagraph>
        <StyledParagraph>{post.data.text_2.text}</StyledParagraph>
        <StyledLink to={'/blog'}>powrót...</StyledLink>
      </StyledArticle>
    </CoffeeTemplate>
  );
};
export default LeftTemplate;

export const query = graphql`
  query($id: String!) {
    prismicBlogPost(id: { eq: $id }) {
      id
      tags
      data {
        title {
          text
        }
        date
        image {
          alt
          url
        }
        text {
          text
        }
        text_2 {
          text
        }
      }
    }
  }
`;
