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
import { buildNav } from '../../utils/buildNav';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const NavigationList = () => {
  const navList = useSlugList();
  let navs = [];
  if (navList) {
    navs = buildNav(navList);
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
