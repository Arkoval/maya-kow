module.exports = {
  pathPrefix: '/maya-kow',
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'magda-kowalska',
        accessToken:
          'MC5YNUdFMEJBQUFDSUFZbng1.77-9JSHvv73vv73vv71o77-9SDHvv71tSe-_ve-_ve-_ve-_ve-_ve-_vTfvv71Y77-977-9G--_ve-_ve-_ve-_ve-_ve-_ve-_vQ',
        schemas: {
          blog_post: require('./src/schemas/blog_post.json'),
          course: require('./src/schemas/course.json'),
          blog_categories: require('./src/schemas/blog_categories.json'),
          opinions: require('./src/schemas/opinions.json'),
        },
        lang: '*',
        prismicToolbar: false,
        shouldDownloadImage: ({ node, key, value }) => {
          return true;
        },
        typePathsFilenamePrefix: 'prismic-typepaths---magda-kowalska',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
