import { graphql, useStaticQuery } from 'gatsby';

export const useSlugList = () => {
  const data = useStaticQuery(graphql`
    query SlugList {
      allContentfulPage(
        filter: { slug: { ne: "/placeholder-content" } }
        sort: { order: ASC, fields: [slug] }
      ) {
        nodes {
          title
          slug
        }
      }
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { published: { eq: true }, categories: { nin: "blog" } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            label
          }
        }
      }
    }
  `);
  return data;
};
