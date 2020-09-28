import { graphql, useStaticQuery } from 'gatsby';

export const useContentful = () => {
  const data = useStaticQuery(graphql`
    query {
      sections: allContentfulSection(sort: { fields: [order], order: ASC }) {
        nodes {
          title
          description {
            json
          }
          subHeader {
            subHeader
          }
        }
      }
    }
  `);
  return data.sections.nodes;
};
