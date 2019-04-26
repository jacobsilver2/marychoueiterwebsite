const path = require('path');
const slash = require('slash');

function createSideNotesPages(result, createPage) {
  const sideNotesPostTemplate = path.join(__dirname, `./src/templates/blog.js`);
  const sideNotesPosts = result.data.sidenotes.edges;
  sideNotesPosts.forEach((node, index) => {
    const previous = index === sideNotesPosts.length - 1 ? null : sideNotesPosts[index + 1].node;
    const next = index === 0 ? null : sideNotesPosts[index - 1].node;
    createPage({
      path: `/side-notes/${node.slug}`,
      component: slash(sideNotesPostTemplate),
      context: {
        id: node.id,
        slug: node.slug,
        previous,
        next,
      },
    });
  });
}

function graphqlForSideNotes(graphql, createPage) {
  return graphql(`
  {
    sidenotes: allWordpressPost (filter: { tags: { elemMatch: {name: {eq: "blog"}}}}) {
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
    createSideNotesPages(result, createPage)
  });
}

exports.graphqlForSideNotes = graphqlForSideNotes;