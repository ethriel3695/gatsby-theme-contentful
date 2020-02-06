import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import Divider from '@material-ui/core/Divider';
import { useSlugList } from '../../hooks/slugList';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const NavigationList = () => {
  const navList = useSlugList();
  let navs = [];
  let navObject = null;
  if (navList) {
    navList.allMdx.nodes.map(node => {
      navObject = {
        route: node.frontmatter.slug,
        label: node.frontmatter.label,
      };
      navs.push(navObject);
      return true;
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        {navs.map((nav, index) => {
          return (
            <ListItem button key={index}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faInbox} />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none' }} to={`${nav.route}`}>
                {`${nav.label}`}
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );
};

export default NavigationList;
