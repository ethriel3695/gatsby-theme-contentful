import { graphql, useStaticQuery } from 'gatsby';

export const usePageData = () => {
  const data = useStaticQuery(graphql`
    query PageData {
      allContentfulPage {
        nodes {
          title
          pageType
          section {
            id
            order
            slug
            title
          }
        }
      }
    }
  `);
  return data.allContentfulPage.nodes;
};

// TODO: Need to find a way to dynamically insert this so I can get Images
// image {
//             description
//             fluid(maxWidth: 1903) {
//               ...GatsbyContentfulFluid
//             }
//           }
