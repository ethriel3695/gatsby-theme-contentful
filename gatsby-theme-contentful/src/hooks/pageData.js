import { graphql, useStaticQuery } from 'gatsby';

export const usePageData = () => {
  // const data = useStaticQuery(graphql`
  //   query PageData {
  //     allContentfulPage {
  //       nodes {
  //         title
  //         pageType
  //         sections {
  //           ... on ContentfulSection {
  //             title
  //             description {
  //               json
  //             }
  //             image {
  //               description
  //               fluid(maxWidth: 1904, quality: 100) {
  //                 ...GatsbyContentfulFluid_noBase64
  //               }
  //             }
  //             item {
  //               title
  //               subHeader
  //               link
  //               slug
  //             }
  //             order
  //             slug
  //           }
  //           ... on ContentfulCallToAction {
  //             title
  //             text {
  //               text
  //             }
  //             slug
  //             externalLink
  //             buttonText
  //           }
  //           ... on ContentfulGallery
  //         }
  //       }
  //     }
  //   }
  // `);
  return false;
};
