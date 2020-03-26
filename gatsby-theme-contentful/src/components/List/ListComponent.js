import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 380,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListComponent({ items }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List aria-label="Form Demo Records">
        {items.map(({ feedback, name }, index) => {
          return (
            <div key={`list-${index}`}>
              <ListItem key={`test-${index}`}>
                <ListItemText
                  key={`name-${index}`}
                  primary={`${name}`}
                  secondary={`${feedback}`}
                />
              </ListItem>
            </div>
          );
        })}
      </List>
    </div>
  );
}
