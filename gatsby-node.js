const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          uid
          data {
            date
          }
        }
      }
    }
  `);

  const pageTemplates = {
    Main: path.resolve(__dirname, 'src/templates/mainTemplate.js'),
  };

  console.log(pages.allPrismicBlogPost);
  pages.data.allPrismicBlogPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.uid}`,
      component: pageTemplates.Main,
      context: {
        id: node.id,
      },
    });
  });
};
