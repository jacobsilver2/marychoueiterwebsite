import React from 'react';
import { StaticQuery, graphql, } from 'gatsby';
import Layout from '../components/layout';
import GridItem from '../components/GridItem';
import { Spring } from 'react-spring/renderprops';

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
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {spring => 
          <div style={spring}>
            <Layout>
              {data.allWordpressPost.edges.map(({ node }) => (
                <GridItem key={node.slug} slug={node.slug} imageURL={node.jetpack_featured_media_url} title={node.title} />
              ))}
            </Layout>
          </div>
        }</Spring>
      )}/>
);

export default Blog;


    