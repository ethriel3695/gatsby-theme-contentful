import { graphql, useStaticQuery } from 'gatsby';

export const useSlugList = () => {
  const data = useStaticQuery(graphql`
    query SlugList {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
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
