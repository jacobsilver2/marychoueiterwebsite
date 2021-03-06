const path = require('path');
const slash = require('slash');

function createProjectPages(result, createPage) {
  const projectPostTemplate = path.join(__dirname, `../src/templates/project.js`);
  const projectPosts = result.data.projects.edges;
  projectPosts.forEach((edge, index) => {
    // const previous = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node;
    // const next = index === 0 ? null : projectPosts[index - 1].node;
    createPage({
      path: `/work/${edge.node.slug}`,
      component: slash(projectPostTemplate),
      context: {
        id: edge.node.id,
        // slug: node.slug,
        // previous,
        // next,
      },
    });
  });
}

function graphqlForProjects(graphql, createPage) {
  return graphql(`
  {
    projects: allWordpressPost (filter: { tags: { elemMatch: {name: {eq: "project"}}}}) {
      edges {
        node {
          id
          title
          jetpack_featured_media_url
          content
          slug
          tags {
            name
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    createProjectPages(result, createPage)
  });
}

exports.graphqlForProjects = graphqlForProjects;