import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';

const logo = require('../images/logo.svg');

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'A first label',
    description: 'This is the first item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'A second label',
    description: 'This is the second item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'A third label',
    description: 'This is the third item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'A fifth label',
    description: 'This is the fifth item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Other label',
    description: 'This is other label',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const styles = theme => ({
  imgContainer: {
    overflow: 'hidden',
    height: '400px',
  },
  img: {
    overflow: 'hidden',
    width: '100%'
  },
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  stepsContainer: {
    marginLeft: 72,
    textAlign: 'left',
    marginTop: 20,
    height: 65
  },
  bottomMargin: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Carousel extends Component {
  state = {
    activeStep: 0
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

render() {
  const { classes } = this.props;
  const maxSteps = tutorialSteps.length;
  const { activeStep } = this.state;

  return (
    <div>
    <AutoPlaySwipeableViews
      axis='x'
      index={activeStep}
      onChangeIndex={this.handleStepChange}
      enableMouseEvents
    >
      {tutorialSteps.map((step, index) => (
        <div key={step.label} className={classes.imgContainer}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img className={classes.img} src={step.imgPath} alt={step.label} />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      className={classes.mobileStepper}
      nextButton={
        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
          Next
        </Button>
      }
      backButton={
        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
          Back
        </Button>
      }
    />
    </div>

  )
}
}

export default withRouter(withStyles(styles)(Carousel))
