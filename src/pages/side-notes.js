import React from 'react';
import { StaticQuery, graphql, Link} from 'gatsby';
import Layout from '../components/layout';
// import GridItem from '../components/GridItem';

const BlogAllSidenotesQuery = graphql`
query BlogAllSidenotesQuery {
      allWordpressPost(filter: { tags: { elemMatch: {name: {eq: "blog"}}}} sort: { fields: [date], order:ASC }) {
        edges {
          node {
            date(formatString: "DD, MMM YYYY")
            title
            jetpack_featured_media_url
            slug
          }
        }
      }
    }
`;

const Blog = () => (
      <StaticQuery
        query={BlogAllSidenotesQuery}
        render={data => (
            <Layout>
              {data.allWordpressPost.edges.map(({ node }) => (
                <div key={node.slug} className="container">
                  <div className="row">
                    <h3>
                      <Link to={`/side-notes/${node.slug}`} dangerouslySetInnerHTML={{ __html: node.title }}/>
                    </h3>
                    <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                  </div>
                </div>
              ))}
            </Layout>
      )}/>
);

export default Blog;


    