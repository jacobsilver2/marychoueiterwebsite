import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

// const stripHtml = (html) => {
//   if (typeof window !== 'undefined') {
//     const doc = new DOMParser().parseFromString(html, 'text/html');
//     return doc.body.textContent || '';
//   }
//   return html;
// };
const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  return (
    <Layout>

      <Helmet
        title={post.title}
        meta={[
          { name: 'description', content: post.excerpt },
        ]}
      />

      <article>
        <header>
          <div className="background-bar">
            { post.featured_media && (
              <img src={post.jetpack_featured_media_url} className="img-fluid" alt={post.title} />
            )}
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          </div>
        </header>
        <section className="container-fluid main-body">
          <section className="row">
            <div className="hidden-xs col-sm-1 col-md-2" />
            <div className="col-xs-12 col-sm-10 col-md-8">
              <div className="content-holder">
                <div className="content-description">
                  <div className="row blog-info">
                    <div className="col-xs-12 col-sm-6">
                      <span className="lead text-muted">
                        <i className="fa fa-clock-o" />
                        {' '}
Published:
                        {' '}
                        {post.date}
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <span className="lead text-muted">
                        <i className="fa fa-tags" />
                        {post.categories && post.categories.map(category => category.name)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content-body">
                  <p dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>
            <div className="hidden-xs col-sm-1 col-md-2" />
          </section>
        </section>
      </article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "DD, MMM YYYY")
        categories {
            id
            name
        }
        tags {
            id
            name     
        }
        jetpack_featured_media_url
        slug
    }
  }
`;