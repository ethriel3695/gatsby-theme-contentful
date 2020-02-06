import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
  },
});

class ModelSelect extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl className={classes.formControl} fullWidth={true}>
          <InputLabel htmlFor="model-select">Model</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.props.model}
            // onChange={this.props.handleChange('model')}
            inputProps={{
              name: 'model',
              id: 'model-select',
            }}
          >
            <MenuItem value="">
              <em>Select a Model</em>
            </MenuItem>
            {this.props.currentModels.length > 0 &&
              this.props.currentModels.map(model => {
                return (
                  <MenuItem
                    key={model.id}
                    value={model.model}
                  >{`${model.model} - ${model.family_code}`}</MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

ModelSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModelSelect);
