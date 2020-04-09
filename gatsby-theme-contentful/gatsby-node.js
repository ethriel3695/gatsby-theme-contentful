const fs = require('fs');
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);

const debug = Debug(`gatsby-theme-contentful`);

// These are customizable theme options we only need to check once
let basePath;
let contentPath;
let assetPath;

// These templates are simply data-fetching wrappers that import components
const HomeTemplate = require.resolve(`./src/templates/index`);
const PostTemplate = require.resolve(`./src/templates/post`);
const PageTemplate = require.resolve(`./src/templates/page.js`);

// Verify the data directory exists
exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState();
  basePath = options.basePath || `/`;
  contentPath = options.contentPath || `content/post`;
  assetPath = options.assetPath || `content/assets`;
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
  if (!fs.existsSync(assetPath)) {
    reporter.info(`creating the ${assetPath} directory`);
    fs.mkdirSync(assetPath);
  }

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateNode = ({ node, getNode }, settings) => {
  // Not a markdown file, skip...
  if (node.internal.type !== 'MarkdownRemark') return;
  console.log('PLUGIN', node.fields.slug);
};

// TODO: Make is so images in contentful can be optional

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   createTypes(`
//     type ContentfulSection implements Node {
//       image: File @fileByRelativePath
//     }
//   `);
// };

// exports.createResolvers = ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions;
//   createResolvers({
//     ContentfulSection: {
//       imageFile: {
//         type: `File`,
//         resolve(source, args, context, info) {
//           return createRemoteFileNode({
//             url: source.url,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           });
//         },
//       },
//     },
//   });
// };

// Query for nav and create pages
exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
          description
          greeting
          copyright
          author
          loginDesc
          isAuthApp
        }
      }
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
            categories
          }
        }
      }
      brandLogo: file(
        relativePath: { regex: "/(jpg)|(jpeg)|(png)|(svg)/" }
        relativeDirectory: { eq: "logo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
        extension
        publicURL
      }
      newsletter: file(
        relativePath: { regex: "/(pdf)/" }
        relativeDirectory: { eq: "newsletter" }
      ) {
        extension
        publicURL
      }
      allContentfulPage {
        nodes {
          title
          pageType
          slug
          section {
            id
            order
            title
            image {
              description
              fluid(maxWidth: 1904) {
                src
                srcSet
                srcSetWebp
                sizes
              }
            }
            description {
              json
            }
            item {
              title
              subHeader
              link
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading nav', reporter.errors);
    return;
  }

  // Create Posts and Post pages.
  const {
    site: { siteMetadata },
    brandLogo,
    hero,
    newsletter,
  } = result.data;
  const posts = result.data.allMdx.nodes;
  const pages = result.data.allContentfulPage.nodes;

  const {
    title: siteTitle,
    description: siteDescription,
    social: socialLinks,
    loginDesc: loginOption,
    isAuthApp: isAuthApp,
    copyright: copyrightMessage,
    greeting: siteGreeting,
  } = siteMetadata;
  const brand = brandLogo;

  // Generate a page from each Contentful "Page" Content Model
  pages.forEach(page => {
    const slug = page.slug;
    createPage({
      path: slug,
      component: require.resolve(PageTemplate),
      context: {
        siteTitle,
        siteDescription,
        siteGreeting,
        copyrightMessage,
        loginOption,
        socialLinks,
        brand,
        newsletter,
        isAuthApp,
        slug,
        page,
      },
    });
  });

  // Create a page for each Article from "mdx"
  posts.forEach(post => {
    const slug = post.frontmatter.slug;
    const showBanner = post.frontmatter.showBanner;
    createPage({
      path: slug,
      component: require.resolve(PostTemplate),
      context: {
        siteTitle,
        siteDescription,
        siteGreeting,
        copyrightMessage,
        loginOption,
        socialLinks,
        brand,
        newsletter,
        isAuthApp,
        slug,
      },
    });
  });
};

// Account for Auth0 in the gatsby build process
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
          {
            test: /\.js$/,
            include: path.dirname(require.resolve('gatsby-theme-contentful')),
            use: [loaders.js()],
          },
        ],
      },
    });
  }
};
