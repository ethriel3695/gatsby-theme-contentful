import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  p4: {
    padding: '24px',
  },
}));

export default function GoogleCalendar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        src={process.env.GATSBY_GOOGLE_CALENDAR_URL}
        style={{ border: 0, frameborder: 0, scrolling: 'no' }}
        width="100%"
        height="600"
        title={'calendar'}
      ></iframe>
    </div>
  );
}
