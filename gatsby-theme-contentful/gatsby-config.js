const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = ({
  contentPath = 'content/post',
  basePath = '/',
  assetPath = 'content/assets',
  mdx = true,
}) => {
  return {
    siteMetadata: {
      title: `Gatsby Theme Contentful`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      greeting: `test`,
      copyright: `This is to insert a copyright message`,
      loginDesc: 'Login / Signup',
      isAuthApp: false,
      newsletterTitle: '',
      social: {
        facebook: 'altcampus',
        twitter: 'altcampus',
        github: 'ethriel3695',
        email: 'test@example.com',
      },
      externalLinks: [{ label: '', link: '' }],
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // should this be configurable by the end-user?
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
            { resolve: `gatsby-remark-copy-linked-files` },
            { resolve: `gatsby-remark-numbered-footnotes` },
            { resolve: `gatsby-remark-smartypants` },
          ],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
          name: contentPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: assetPath,
          name: assetPath,
        },
      },
      {
        resolve: 'gatsby-transformer-json',
        options: {
          typeName: 'Navigation',
        },
      },
      {
        resolve: 'gatsby-plugin-sharp',
        options: {
          useMozJpeg: false,
          stripMetadata: false,
          defaultQuality: 75,
        },
      },
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
          accessToken: process.env.GATSBY_CONTENTFUL_API,
        },
      },
      {
        resolve: `gatsby-plugin-gtag`,
        options: {
          // your google analytics tracking id
          trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
          // Puts tracking script in the head instead of the body
          head: false,
          // enable ip anonymization
          anonymize: true,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-emotion',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-material-ui',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `BYOBroom`,
          icons: [
            {
              src: `content/assets/img/faces/marc.jpg`,
              type: `image/png`,
              sizes: `144x144`,
            },
          ],
          short_name: `BYOBroom`,
          start_url: `/`,
          background_color: `#325DA7`,
          theme_color: `#325DA7`,
          display: `standalone`,
          scope: '/',
          crossOrigin: `use-credentials`,
          // theme_color_in_head: false
        },
      },
      {
        resolve: 'gatsby-plugin-offline',
        options: {
          workboxConfig: {
            globPatterns: ['**/*'],
          },
        },
      },
    ].filter(Boolean),
  };
};
