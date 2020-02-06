import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default function Post({ data: { mdx: post } }) {
  const { banner, title, date, showBanner } = post.frontmatter;
  return (
    <Layout>
      <div className="post-single-container">
        <article className="post-single">
          <header>
            {banner && showBanner ? (
              <Img
                fluid={banner.sharp.fluid}
                alt={title}
                style={{ height: '70vh', textAlign: 'center' }}
              />
            ) : null}
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <div style={{ textAlign: 'center' }}>
              <span>{date}</span>
            </div>
          </header>
          <div style={{ textAlign: 'justify', padding: 20 }}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        banner {
          sharp: childImageSharp {
            fluid(maxWidth: 1686) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        showBanner
      }
      body
    }
  }
`;

// banner {
//     sharp: childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
// }
