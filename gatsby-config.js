module.exports = {
  siteMetadata: {
    title: `Magdalena Kowalska Mentoring`,
    description: `kobiece przywództwo na własnych warunkach`,
    author: `Magdalena Kowalska`,
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
        name: `Magdalena-Kowalska`,
        short_name: `magda`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-YQPDLBVP1N'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`mulish\:200,300, 300i,400, 400i,500,600,700,800`, `rozha one`],
      },
      display: 'swap',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
