// import React from 'react';
// import { graphql } from 'gatsby';
// import CoffeeTemplate from '../../layout/CoffeeTemplate';
// import Course from '../Courses/Courses';
// import { theme } from '../../theme/theme';

// const TravelOfferPage = ({ data }) => {
//   const courses = data.allPrismicCourse.nodes;
//   return (
//     <CoffeeTemplate color={theme.colors.red} offer={'travel'}>
//       <Course courses={courses} heading={'wyjazdy rozwojowe'} />
//     </CoffeeTemplate>
//   );
// };

// export default TravelOfferPage;

// export const query = graphql`
//   query {
//     allPrismicCourse(filter: { tags: { eq: "travel" } }) {
//       nodes {
//         tags
//         data {
//           date
//           text {
//             text
//             html
//           }
//           link {
//             url
//           }
//           image {
//             url
//             alt
//           }
//           title {
//             text
//             html
//           }
//           subtitle {
//             text
//             html
//           }
//           place
//         }
//       }
//     }
//   }
// `;
