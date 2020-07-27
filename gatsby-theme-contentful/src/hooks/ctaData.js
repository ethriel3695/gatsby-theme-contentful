import { graphql, useStaticQuery } from 'gatsby';

export const useCTAData = () => {
  const data = useStaticQuery(graphql`
    query {
      sections: allContentfulCallToAction(limit: 1) {
        nodes {
          title
          text {
            text
          }
          slug
          externalLink
          buttonText
        }
      }
    }
  `);
  return data.sections.nodes;
};
