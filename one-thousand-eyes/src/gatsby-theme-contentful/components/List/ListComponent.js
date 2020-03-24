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

function ListItemLink(props) {
  return <ListItem component="a" {...props} />;
}

const officers = [
  {
    email: 'archery.marshal@baronyof1000eyes.org',
    position: 'Archery Marshal',
  },
  {
    email: 'deputy.archery.marshal@baronyof1000eyes.org',
    position: 'Deputy Archery Marshal',
  },
  {
    email: 'baron@baronyof1000eyes.org',
    position: 'Baron',
  },
  {
    email: 'baroness@baronyof1000eyes.org',
    position: 'Baroness',
  },
  {
    email: 'chatelaine@baronyof1000eyes.org',
    position: 'Chatelaine',
  },
  {
    email: 'chronicler@baronyof1000eyes.org',
    position: 'Chronicler',
  },
  {
    email: 'exchequer@baronyof1000eyes.org',
    position: 'Exchequer',
  },
  {
    email: 'deputy.exchequer@baronyof1000eyes.org',
    position: 'Deputy Exchequer',
  },
  {
    email: 'herald@baronyof1000eyes.org',
    position: 'Herald',
  },
  {
    email: 'knight.marshal@baronyof1000eyes.org',
    position: 'Knight Marshal',
  },
  {
    email: 'deputy.knight.marshal@baronyof1000eyes.org',
    position: 'Deputy Knight Marshal',
  },
  {
    email: 'list.mistress@baronyof1000eyes.org',
    position: 'List Mistress',
  },
  {
    email: 'moas@baronyof1000eyes.org',
    position: 'Minister of Arts and Sciences',
  },
  {
    email: 'deputy.moas@baronyof1000eyes.org',
    position: 'Deputy Minister of Arts and Sciences',
  },
  {
    email: 'quartermaster@baronyof1000eyes.org',
    position: 'Quartermaster',
  },
  {
    email: 'deputy.quartermaster@baronyof1000eyes.org',
    position: 'Deputy Quartermaster',
  },
  {
    email: 'rapier.marshal@baronyof1000eyes.org',
    position: 'Rapier Marshal',
  },
  {
    email: 'deputy.rapier.marshal@baronyof1000eyes.org',
    position: 'Deputy Rapier Marshal',
  },
  {
    email: 'seneschal@baronyof1000eyes.org',
    position: 'Seneschal',
  },
  {
    email: 'deputy.seneschal@baronyof1000eyes.org',
    position: 'Deputy Seneschal',
  },
  {
    email: 'thrown.weapons.marshal@baronyof1000eyes.org',
    position: 'Thrown Weapons Marshal',
  },
  {
    email: 'deputy.thrown.weapons@baronyof1000eyes.org',
    position: 'Deputy Thrown Weapons Marshal',
  },
  {
    email: 'web.minister@baronyof1000eyes.org',
    position: 'Web Minister',
  },
  {
    email: 'deputy.web.minister@baronyof1000eyes.org',
    position: 'Deputy Web Minister',
  },
  {
    email: 'youth.marshal@baronyof1000eyes.org',
    position: 'Youth Marshal',
  },
  {
    email: 'youth.minister@baronyof1000eyes.org',
    position: 'Youth Minister',
  },
];

export default function ListComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List aria-label="main mailbox folders">
        {officers.map(({ email, position }, index) => {
          return (
            <ListItem key={index}>
              <ListItemLink
                button
                disableGutters={true}
                href={`mailto:${email}`}
              >
                <ListItemText
                  className="externalLink"
                  primary={`${position}`}
                  secondary={`${email}`}
                />
              </ListItemLink>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
