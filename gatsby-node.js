/* eslint-disable */

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions;

  const pageTemplate = require.resolve('./src/components/templates/Page/index.tsx');

  const result = await graphql(
    `
      query {
        allNotionPageBlog {
          edges {
            node {
              pageId
              slug
            }
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panic('error loading events', result.errors);
    return;
  }

  result.data.allNotionPageBlog.edges.forEach(({ node }) => {
    const path = `/article/${node.slug}`;
    createPage({
      path,
      component: pageTemplate,
      context: {
        pathSlug: path,
        pageId: node.pageId,
      },
    });
  });
};
