import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import CoffeeTemplate from '../layout/CoffeeTemplate';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';
import Powder from '../images/powder.inline.svg';
import { theme } from '../theme/theme';

const StyledArticle = styled.article`
  position: relative;
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;

  ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')}
  box-shadow: 0px 0px 21px 1px rgba(0, 0, 0, 0.1);
  text-align: center;

  ${({ theme }) => theme.media.sm} {
    padding: 4rem;
    width: 70%;
  }
`;

const StyledPowderSvg = styled(Powder)`
  position: absolute;
  left: -20%;
  top: 70%;
  width: 50%;
  z-index: -1;
`;

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  width: 90%;
  margin: 0 auto;
  font-size: 1.2rem;
  color: ${({ theme, color }) =>
    color === 'blue' ? theme.colors.blue : '#B3D158'};

  ${({ theme }) => theme.media.sm} {
    font-size: 3rem;
  }
`;
const StyledList = styled.ul`
  text-align: left;
  width: 90%;
  margin: 0 auto;
  line-height: 1.2rem;
  list-style-type: disc;
  list-style-position: inside;
  text-indent: -1.4rem;
  padding-left: 1.5rem;

  ${({ theme }) => theme.media.sm} {
    line-height: 1.5rem;
    width: 80%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 60%;
  }
`;
const StyledSubHeading = styled.h3`
  font-weight: 600;
  width: 90%;
  margin: 1rem auto;
  text-align: left;
  ${({ theme }) => theme.media.sm} {
    line-height: 1.5rem;
    width: 80%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 60%;
  }
`;
const StyledDate = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.blue};
  margin: 1rem auto;
  width: 90%;
  text-align: left;
  ${({ theme }) => theme.media.sm} {
    font-size: 1rem;
    width: 80%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 60%;
  }
`;
const StyledStrong = styled.strong`
  font-weight: 600;
`;
const StyledParagraph = styled.p`
  text-align: left;
  width: 90%;
  margin: 0 auto;
  line-height: 1.2rem;
  ${({ theme }) => theme.media.sm} {
    line-height: 1.5rem;
    width: 80%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 60%;
  }
`;
const StyledImg = styled.img`
  width: 90%;
  height: 60vh;
  margin: 1rem auto;
  object-fit: cover;
  ${({ theme }) => theme.media.sm} {
    margin: 4rem auto;
  }
`;
const StyledLink = styled.a``;
const StyledLinkBack = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  justify-self: flex-end;
  align-self: flex-end;
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.media.sm} {
    font-size: 1.2rem;
    margin: 1rem;
  }
`;

const LeftTemplate = ({ data }) => {
  const post = data.prismicBlogPost;

  return (
    <CoffeeTemplate color={theme.colors.green}>
      <StyledArticle>
        <StyledHeading>{post.data.title.text}</StyledHeading>
        {post.data.title2 ? (
          <StyledHeading>{post.data.title2.text}</StyledHeading>
        ) : null}
        <StyledImg src={post.data.image.url} alt={post.data.image.alt} />
        <HTMLRenderer
          html={post.data.text.html}
          components={{
            strong: props => <StyledStrong {...props} />,
            p: props => <StyledParagraph {...props} />,
            a: props => <StyledLink {...props} />,
            ul: props => <StyledList {...props} />,
            h3: props => <StyledSubHeading {...props} />,
          }}
        />
        <HTMLRenderer
          html={post.data.text_2.html}
          components={{
            strong: props => <StyledStrong {...props} />,
            p: props => <StyledParagraph {...props} />,
            a: props => <StyledLink {...props} />,
            ul: props => <StyledList {...props} />,
            h3: props => <StyledSubHeading {...props} />,
          }}
        />
        <StyledDate>{post.data.date}</StyledDate>
        <StyledLinkBack to={'/blog'}>powrót...</StyledLinkBack>
      </StyledArticle>
      <StyledPowderSvg />
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
          html
        }
        title2 {
          text
        }
        date
        image {
          alt
          url
        }
        text {
          html
        }
        text_2 {
          html
          text
        }
      }
    }
  }
`;
