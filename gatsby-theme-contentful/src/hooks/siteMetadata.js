import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
          description
          greeting
          copyright
          author
          loginDesc
          isAuthApp
          newsletterTitle
          hasNotifications
          hasCTA
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
