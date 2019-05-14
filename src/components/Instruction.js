import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const backgroundShape = require('../images/shape.svg');

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary['A100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing.unit * 2}px`
  },
  smallContainer: {
    width: '60%'
  },
  bigContainer: {
    width: '80%'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  stepGrid: {
    width: '80%'
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  stepper: {
    backgroundColor: 'transparent'
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    paddingBottom: 24,
    marginBottom: 24
  },
  flexBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center'
  }
})

const getSteps = () => {
    return [
      'Sign Up',
      'Explore',
      'Read Schema',
      'Install Client',
      'Confirm',
      'Done'
    ];
  }

class Instruction extends Component {

  state = {
    activeStep: 0,
    receivingAccount: 'Home Account',
    repaimentAccount: 'Saving Account',
    termsChecked: false,
    labelWidth: 0
  }

  componentDidMount() {

  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
  };

  stepActions() {
    if(this.state.activeStep === 3) {
      return 'Accept';
    }
    if(this.state.activeStep === 4) {
      return 'Send';
    }
    if(this.state.activeStep === 5) {
      return 'Done';
    }
    return 'Next';
  }

  goToDashboard = event => {
    const queryString = this.props.location.search

    this.props.history.push({
      pathname: '/dashboard',
      search: queryString
    })
  }

render() {

  const { classes } = this.props;
  const steps = getSteps();
  const { activeStep } = this.state;

  return (
    <React.Fragment>
<div className={classes.stepContainer}>
  <div className={classes.bigContainer}>
    <Stepper classes={{root: classes.stepper}} activeStep={activeStep} alternativeLabel>
      {steps.map(label => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  </div>
</div>

{ activeStep === 0 && (

  <div className={classes.bigContainer}>

      <div className={classes.topInfo}>
        <div>
        <Grid item xs={12}>
          <Typography variant="h4" style={{fontWeight: 'bold'}} gutterBottom>
            Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            General information about the service
          </Typography>
        </Grid>
        </div>
      </div>

    </div>

)}

<div className={classes.flexBar}>
  { activeStep !== 5 && (
    <Button
    disabled={activeStep === 0}
    onClick={this.handleBack}
    className={classes.backButton}
    size='large'
    >
      Back
    </Button>
  )}
  <Button
    variant="contained"
    color="primary"
    onClick={activeStep !== 5 ? this.handleNext : this.goToDashboard}
    size='large'
    disabled={this.state.activeStep === 3 && !this.state.termsChecked}
  >
    {this.stepActions()}
  </Button>
</div>

    </React.Fragment>
)};
}

export default withRouter(withStyles(styles)(Instruction))
