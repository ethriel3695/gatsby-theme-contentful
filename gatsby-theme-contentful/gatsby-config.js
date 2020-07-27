const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = ({
  contentPath = 'content/post',
  basePath = '/',
  assetPath = 'content/assets',
  mdx = true,
  contentful = true,
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
      isContentful: contentful,
      newsletterTitle: '',
      social: {
        facebook: 'https://www.facebook.com/altcampus',
        instagram: 'https://www.instagram.com/altcampus',
        twitter: 'https://www.twitter.com/altcampus',
        github: 'https://www.github.com/ethriel3695',
        email: 'test@example.com',
      },
      externalLinks: [{ label: '', link: '' }],
      hasNotifications: false,
      categories: [
        'react',
        'gatsby',
        'gatsbyjs',
        'themes',
        'web development',
        'contentful',
        'production',
        'tailwindcss',
        'storybook',
      ],
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
      'gatsby-plugin-postcss',
      // {
      //   resolve: 'gatsby-plugin-purgecss',
      //   options: {
      //     printRejected: true,
      //     develop: false,
      //     tailwind: true,
      //   },
      // },
      // {
      //   resolve: `gatsby-plugin-feed`,
      //   options: {
      //     query: `
      //       {
      //       site {
      //         siteMetadata {
      //           title
      //           description
      //           siteUrl
      //           site_url: siteUrl
      //         }
      //       }
      //     }
      //   `,
      //     feeds: [
      //       {
      //         serialize: ({ query: { site, allMdx } }) => {
      //           return allMdx.edges.map(edge => {
      //             return Object.assign({}, edge.node.frontmatter, {
      //               description: edge.node.excerpt,
      //               date: edge.node.frontmatter.date,
      //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
      //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
      //               custom_elements: [{ 'content:encoded': edge.node.body }],
      //             });
      //           });
      //         },
      //         query: `
      //         {
      //          allMdx(
      //           limit: 1000,
      //           sort: { order: DESC, fields: [frontmatter___date] }
      //           filter: { frontmatter: {published: {ne: false }}}
      //         ) {
      //           edges {
      //             node {
      //               excerpt
      //               body
      //               frontmatter {
      //                 title
      //                 date
      //               }
      //             }
      //           }
      //         }
      //       }
      //       `,
      //         output: '/rss.xml',
      //         title: 'MuleJS RSS Feed',
      //         site_url: `https://mulejs.org/blog`,
      //         // optional configuration to insert feed reference in pages:
      //         // if `string` is used, it will be used to create RegExp and then test if pathname of
      //         // current page satisfied this regular expression;
      //         // if not provided or `undefined`, all pages will have feed reference inserted
      //         // match: '^/blog/',
      //       },
      //     ],
      //   },
      // },
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
        options: {
          analyzerPort: 8888,
          analyzerMode: 'server',
          defaultSizes: 'gzip',
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
      contentful && {
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
          defer: true,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Roboto Mono`,
              variants: [`400`, `700`],
            },
            {
              family: `Caveat`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `BYOBroom`,
          icon: `content/assets/img/faces/marc.png`,
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
