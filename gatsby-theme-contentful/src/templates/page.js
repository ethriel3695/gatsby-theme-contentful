// import React, { Fragment } from 'react';
// import { graphql } from 'gatsby';
// import WidgetHandler from '../components/WidgetHandler';
// import AuthContainer from '../components/UI/AuthContainer';
// import NoAuthContainer from '../components/UI/NoAuthContainer';

// export default function PageTemplate({
//   pageContext,
//   data: { allContentfulPage: page },
// }) {
//   const pageData = page.nodes[0];
//   const { isAuthApp } = pageContext;
//   return (
//     <Fragment>
//       {isAuthApp ? (
//         <AuthContainer
//           siteTitle={pageContext.siteTitle}
//           brand={pageContext.brand}
//           copyright={pageContext.copyrightMessage}
//           loginOption={pageContext.loginOption}
//           isAuthApp={pageContext.isAuthApp}
//           title={pageData.title}
//           description={pageContext.siteDescription}
//         >
//           <WidgetHandler pageContext={pageContext} page={pageData} />
//         </AuthContainer>
//       ) : (
//         <NoAuthContainer
//           siteTitle={pageContext.siteTitle}
//           brand={pageContext.brand}
//           newsletter={pageContext.newsletter}
//           copyright={pageContext.copyrightMessage}
//           loginOption={pageContext.loginOption}
//           isAuthApp={pageContext.isAuthApp}
//           title={pageData.title}
//           description={pageContext.siteDescription}
//         >
//           <WidgetHandler pageContext={pageContext} page={pageData} />
//         </NoAuthContainer>
//       )}
//     </Fragment>
//   );
// }

// export const query = graphql`
//   query ThemeDefaultPageQuery($pageId: String) {
//     allContentfulPage(filter: { id: { eq: $pageId } }) {
//       nodes {
//         id
//         title
//         slug
//         pageType
//         sections {
//           ... on ContentfulSection {
//             title
//             description {
//               raw
//             }
//             subHeader {
//               subHeader
//             }
//             internal {
//               type
//             }
//           }
//           ... on ContentfulHero {
//             title
//             description {
//               raw
//             }
//             subHeader {
//               subHeader
//             }
//             file {
//               title
//               description
//               fluid(maxWidth: 1904, quality: 100) {
//                 ...GatsbyContentfulFluid_noBase64
//               }
//             }
//             internal {
//               type
//             }
//           }
//           ... on ContentfulGallery {
//             title
//             description {
//               raw
//             }
//             subHeader {
//               subHeader
//             }
//             caption
//             media {
//               title
//               caption
//               file {
//                 title
//                 description
//                 fluid(maxWidth: 400, quality: 100) {
//                   ...GatsbyContentfulFluid_noBase64
//                 }
//               }
//             }
//             internal {
//               type
//             }
//           }
//           ... on ContentfulProducts {
//             title
//             description {
//               raw
//             }
//             subHeader {
//               subHeader
//             }
//             product {
//               title
//               description {
//                 description
//               }
//               price
//               files {
//                 title
//                 description
//                 fluid(maxWidth: 400, quality: 100) {
//                   ...GatsbyContentfulFluid_noBase64
//                 }
//               }
//             }
//             internal {
//               type
//             }
//           }
//           ... on ContentfulMultipleCallToAction {
//             title
//             description {
//               raw
//             }
//             subHeader {
//               subHeader
//             }
//             callToAction {
//               title
//               text {
//                 text
//               }
//               buttonText
//               externalLink
//               slug
//             }
//             internal {
//               type
//             }
//           }
//         }
//       }
//     }
//   }
// `;
