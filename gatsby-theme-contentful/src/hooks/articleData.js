import { graphql, useStaticQuery } from 'gatsby';

export const useArticleData = () => {
  const data = useStaticQuery(graphql`
    query DefaultBlogQuery {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { published: { eq: true }, slug: { regex: "/blog/" } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            description
            date(formatString: "MMMM Do, YYYY")
            author
            categories
          }
        }
      }
      allContentfulPage(
        filter: { slug: { regex: "/blog//" } }
        sort: { order: ASC, fields: [slug] }
      ) {
        nodes {
          title
          slug
          description {
            description
          }
          createdAt(formatString: "MMMM Do, YYYY")
          author
          categories
        }
      }
    }
  `);
  return data;
};
