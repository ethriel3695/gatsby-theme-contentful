import { graphql, useStaticQuery } from 'gatsby';

export const useSocialInfo = () => {
  const data = useStaticQuery(graphql`
    query SocialInfo {
      site {
        siteMetadata {
          social {
            email
            twitter
            facebook
            github
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.social;
};
