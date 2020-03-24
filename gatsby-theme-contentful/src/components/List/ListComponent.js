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
        {items.map(({ feedback, name, curiousity }, index) => {
          return (
            <div key={`list-${index}`}>
              <ListItem key={index}>
                <ListItemText key={`name-${index}`} primary={`${name}`} />
                <ListItemText
                  key={`feedback-${index}`}
                  primary={`${feedback}`}
                />
                <ListItemText
                  key={`curiousity-${index}`}
                  primary={`${curiousity}`}
                />
              </ListItem>
            </div>
          );
        })}
      </List>
    </div>
  );
}
