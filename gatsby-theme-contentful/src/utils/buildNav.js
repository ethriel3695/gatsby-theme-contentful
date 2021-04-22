export const buildNav = navList => {
  let navs = [];
  let navObject = null;
  navList.allMdx.nodes.map(node => {
    navObject = {
      route: node.frontmatter.slug,
      label: node.frontmatter.label,
    };
    navs.push(navObject);
    return true;
  });
  return navs;
};
