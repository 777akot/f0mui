import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
//import RemoveRedEye from '@material-ui/icons/RemoveRedEye'

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
    minWidth: 150,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    age: 0,
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
      <form autoComplete="off">
        <FormControl className={classes.formControl}>

          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'publish',
              id: 'controlled-open-select',
            }}
          >
            <MenuItem value={0}>Draft</MenuItem>
            <MenuItem value={1}>Published</MenuItem>

          </Select>
          <Button variant="outlined" className={classes.button} onClick={this.handleChange} >
            Save
          </Button>
          <Button variant="outlined" className={classes.button} onClick={this.handleChange} >
          Preview
          </Button>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
