import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Savealt from '@material-ui/icons/SaveAlt';

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
      value: textValue
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Enter text:
          <TextField
          multiline
          rows="5" value={this.state.value} onChange={this.handleChange} className={classes.textarea}/>
        </label>
        <Button variant="outlined" type="submit" value="Submit"><Savealt /></Button>
      </form>
    );
  }
}

export default (withStyles(styles)(EssayForm));
