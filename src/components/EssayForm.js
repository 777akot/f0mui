import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Savealt from '@material-ui/icons/SaveAlt';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  textarea: {
    width: '100%',
    height: '100%',
    padding: '12, 20',
    boxsizing: 'border-box',
    border: '0px solid #ccc',
    borderradius: 0,
    backgroundcolor: '#f8f8f8',
    fontsize: '16px',
    resize: 'none',
  }
  });

class EssayForm extends React.Component {

  constructor(props) {
    super(props);
    const textValue = this.props.textValue;
    this.state = {
      value: textValue,
      editing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editing();
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          <TextField
          multiline
          rows="5" value={this.state.value} onChange={this.handleChange} className={classes.textarea}/>
        </label>
        <Button variant="outlined" type="submit"><Savealt />Save</Button>
      </form>
    );
  }
}

export default (withStyles(styles)(EssayForm));
