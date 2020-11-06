import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import BlogCategory from './BlogCategory';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
`;
const StyledCategoriesWrapper = styled.ul`
  ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-evenly')}
  flex-wrap: wrap;
  max-width: 100%;
  margin: 2rem 0;
`;
const StyledCardsWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-between')}
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
`;
const BlogMain = () => {
  const { allPrismicBlogPost, prismicBlogCategories } = useStaticQuery(query);
  const blogPosts = allPrismicBlogPost.nodes;
  const blogCategories = prismicBlogCategories.data.categories;
  // const [dup,setDup] = useState([])
  const [isChecked, setIsChecked] = useState({
    tipsy: false,
    przywództwo: false,
    awans: false,
    osobistyCase: false,
    perfekcjonizm: false,
    wewnętrznaTransformacja: false,
    rozwój: false,
    zmiany: false,
    pewnośćSiebie: false,
    strefaWpływu: false,
    marzenia: false,
    stres: false,
    mądreKsiążki: false,
    narzędzia: false,
    uskrzydloneZespoły: false,
    hr: false,
    kariera: false,
    wewnętrznySpokój: false,
  });

  const handleChange = event => {
    setIsChecked({ ...isChecked, [event.target.name]: event.target.checked });
    // setDup([...dup, event.target.name])
  };

  // useEffect(() => {
  //   let dupa = blogPosts.filter(post => {
  //     return post.tags.some(e => dup.includes(e))
  //   })
  //   console.log(dupa)
  // }, [isChecked])

  const blogCard = blogPosts.map((post, i) => {
    return (
      <BlogCard
        key={i}
        img={post.data.image.url}
        title={post.data.title.text}
        link={post.uid}
      />
    );
  });

  const blogCategory = blogCategories.map((el, i) => {
    return (
      <BlogCategory
        key={i}
        category={el.category}
        checked={isChecked[el.category]}
        handleChange={handleChange}
      />
    );
  });

  return (
    <StyledWrapper>
      <StyledCategoriesWrapper>{blogCategory}</StyledCategoriesWrapper>
      <StyledCardsWrapper>{blogCard}</StyledCardsWrapper>
    </StyledWrapper>
  );
};

export default BlogMain;

export const query = graphql`
  query {
    prismicBlogCategories {
      data {
        categories {
          category
        }
      }
    }
    allPrismicBlogPost {
      nodes {
        data {
          date
          image {
            thumbnails
            url
            alt
          }
          text {
            text
          }
          title {
            text
          }
          text_2 {
            text
          }
          tags {
            tag
          }
        }
        uid
        tags
      }
    }
  }
`;
