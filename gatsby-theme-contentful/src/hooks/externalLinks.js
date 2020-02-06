import { graphql, useStaticQuery } from 'gatsby';

export const useExternalLinks = () => {
  const data = useStaticQuery(graphql`
    query ExternalInfo {
      site {
        siteMetadata {
          externalLinks {
            label
            link
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.externalLinks;
};
