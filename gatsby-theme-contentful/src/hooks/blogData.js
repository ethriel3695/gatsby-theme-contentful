import { graphql, useStaticQuery } from 'gatsby';

export const useBlogData = () => {
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
            date(formatString: "dddd MMMM Do, YYYY")
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
          createdAt(formatString: "dddd MMMM Do, YYYY")
          categories
        }
      }
    }
  `);
  return data;
};
