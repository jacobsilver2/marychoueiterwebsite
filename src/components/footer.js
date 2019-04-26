import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import GridItem from './GridItem';

const StyledFooter = styled.footer`
  background: white;
  margin-bottom: 1.45rem;
  `;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  margin: 0 auto;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
`;

const BlogAllPostQueryFooter = graphql`
query BlogAllPostQueryFooter {
      allWordpressPost(sort: { fields: [date], order:ASC } ) {
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



const removeItems = (items, i) => items.slice(0, i-1).concat(items.slice(Math.floor(Math.random()*items.length), items.length));


const Footer = () => (
  <StaticQuery 
    query={BlogAllPostQueryFooter}
    render={data => {
      const fourItems = removeItems(data.allWordpressPost.edges, 8);
      return (
        <StyledFooter>
          <p>More Work</p>
          <Container>
            {fourItems.map(({ node }) => (
              <GridItem key={node.slug} slug={node.slug} imageURL={node.jetpack_featured_media_url} title={node.title} />
            ))}
          </Container>
        </StyledFooter>
      )
    }}
  />

)

export default Footer;