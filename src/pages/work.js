import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql, } from 'gatsby';
import Layout from '../components/layout';
import GridItem from '../components/GridItem';

const BlogAllPostQuery = graphql`
query BlogAllPostQuery {
      allWordpressPost(sort: { fields: [date], order:ASC }) {
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
        query={BlogAllPostQuery}
        render={data => (
        <Layout>
          {data.allWordpressPost.edges.map(({ node }) => (
             <GridItem key={node.slug} slug={node.slug} imageURL={node.jetpack_featured_media_url} title={node.title} />
          ))}
      </Layout>
      )}/>
);

export default Blog;


    