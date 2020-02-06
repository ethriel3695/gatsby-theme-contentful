import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldInput from '../Form/TextFieldInput';

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

export default function IssueForm() {
  const classes = useStyles();
  const [issue, setIssue] = useState('');
  function handleChange(event) {
    setIssue(event.target.value);
  }
  return (
    <div className={classes.root}>
      <TextFieldInput
        id="issue"
        label="What is Your Issue?"
        value={issue}
        onChange={event => handleChange(event)}
      />
      <div>
        <strong>Thanks for Typing your Issue: </strong>
        {issue}
      </div>
      <input
        id="file-upload"
        type="file"
        capture="camera"
        accept="file/*"
        multiple="multiple"
        className={classes.p4}
      />
    </div>
  );
}
