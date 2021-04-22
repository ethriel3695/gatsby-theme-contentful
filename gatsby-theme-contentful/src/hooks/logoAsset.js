// import { graphql, useStaticQuery } from 'gatsby';

// export const useLogoAsset = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulAsset(filter: { assetType: { eq: "logo" } }) {
//         nodes {
//           title
//           assetType
//           file {
//             description
//             fluid(maxWidth: 1904, quality: 100) {
//               ...GatsbyContentfulFluid_noBase64
//             }
//           }
//         }
//       }
//     }
//   `);
//   return data.allContentfulAsset.nodes;
// };
