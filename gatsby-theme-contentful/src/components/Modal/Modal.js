import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
// import { blue } from '@material-ui/core/colors';
import share from '../../../assets/img/share-icon.png';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle className={classes.root} id="simple-dialog-title">
        Install BYOBroom
      </DialogTitle>
      <Typography className={classes.root} variant="subtitle1">
        Install this application on your homescreen for a better experience.
      </Typography>
      <Typography className={classes.root} variant="body1">
        Tap
        <img
          src={share}
          style={{ margin: 'auto 4px -4px' }}
          className="uk-display-inline-block"
          alt="Add to homescreen"
          height="20"
          width="20"
        />
        then "Add to Home Screen"
      </Typography>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
