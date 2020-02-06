import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '90%',
  },
}));

const TextFieldInput = props => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      color="inherit"
      aria-haspopup="true"
      margin="normal"
      variant="outlined"
      className={classes.textField}
      style={props.style}
    >
      {props.children}
    </TextField>
  );
};

export default TextFieldInput;
