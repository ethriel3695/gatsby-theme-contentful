import React from 'react';
import { graphql } from 'gatsby';
import HomeNoAuth from '../components/HomeNoAuth';

export default function PageTemplate({
  pageContext,
  data: {
    allMdx: { nodes: posts },
    sections: { nodes: sections },
  },
}) {
  return (
    <HomeNoAuth
      siteTitle={pageContext.siteTitle}
      siteDescription={pageContext.siteDescription}
      siteGreeting={pageContext.siteGreeting}
      copyright={pageContext.copyrightMessage}
      socialLinks={pageContext.socialLinks}
      brand={pageContext.brand}
      hero={pageContext.hero}
      newsletter={pageContext.newsletter}
      loginOption={pageContext.loginOption}
      isAuthApp={pageContext.isAuthApp}
      posts={posts}
      sections={sections}
      slugs={pageContext.slugs}
    />
  );
}

export const pageQuery = graphql`
  query IndexPosts {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: {} } }
      limit: 10
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          banner {
            sharp: childImageSharp {
              fluid(maxWidth: 1686) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt
      }
    }
    sections: allContentfulSection(sort: { fields: [order], order: ASC }) {
      nodes {
        title
        slug
        item {
          title
          link
          slug
        }
        description {
          json
        }
      }
    }
  }
`;
