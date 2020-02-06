import { graphql, useStaticQuery } from 'gatsby';

export const useContentful = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `);
  return data.sections.nodes;
};
