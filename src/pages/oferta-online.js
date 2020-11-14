import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import CoffeeTemplate from '../layout/CoffeeTemplate';
import Courses from '../components/Courses/Courses';
import { theme } from '../theme/theme';

const OnlineOfferPage = ({ data }) => {
  const courses = data.allPrismicCourse.nodes;

  return (
    <CoffeeTemplate color={theme.colors.red} offer={'online'}>
      <Courses courses={courses} heading={'oferta online'} />
    </CoffeeTemplate>
  );
};

export default OnlineOfferPage;

export const query = graphql`
  query {
    allPrismicCourse(filter: { tags: { eq: "online" } }) {
      nodes {
        tags
        data {
          date
          text {
            text
            html
          }
          link {
            url
          }
          image {
            url
            alt
          }
          title {
            text
            html
          }
          subtitle {
            text
            html
          }
        }
      }
    }
  }
`;
