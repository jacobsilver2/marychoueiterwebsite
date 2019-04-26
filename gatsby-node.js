// const Promise = require('bluebird');

const { graphqlForProjects } = require("./create-pages-projects");
const { graphqlForSideNotes }  = require("./create-pages-sidenotes");
// const { createFilePath } = require(`gatsby-source-filesystem`);

function createIndividualPages(actions, graphql) {
  const { createPage } = actions;
  return Promise.all([
    graphqlForProjects(graphql, createPage),
    graphqlForSideNotes(graphql, createPage),
  ]);
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `allWordpressPost`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value
//     })
//   }
// }