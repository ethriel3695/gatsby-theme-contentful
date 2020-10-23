import React from 'react';
import { graphql } from 'gatsby';
import AuthContainer from '../components/UI/AuthContainer';
import NoAuthContainer from '../components/UI/NoAuthContainer';
import PostContainer from '../components/Post/PostContainer';

export default function Post({ pageContext, data: { mdx: post } }) {
  const { isAuthApp } = pageContext;
  return (
    <div>
      {isAuthApp ? (
        <AuthContainer
          siteTitle={pageContext.siteTitle}
          brand={pageContext.brand}
          copyright={pageContext.copyrightMessage}
          loginOption={pageContext.loginOption}
          isAuthApp={pageContext.isAuthApp}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          categories={post.frontmatter.categories}
        >
          <PostContainer data={post.body} frontmatter={post.frontmatter} />
        </AuthContainer>
      ) : (
        <NoAuthContainer
          siteTitle={pageContext.siteTitle}
          brand={pageContext.brand}
          newsletter={pageContext.newsletter}
          copyright={pageContext.copyrightMessage}
          loginOption={pageContext.loginOption}
          isAuthApp={pageContext.isAuthApp}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          categories={post.frontmatter.categories}
        >
          <PostContainer data={post.body} frontmatter={post.frontmatter} />
        </NoAuthContainer>
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        categories
        date(formatString: "dddd MMMM Do, YYYY")
      }
      body
    }
  }
`;
