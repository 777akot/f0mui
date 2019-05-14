import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@material-ui/core/Grid';

import swipeSteps from './SwipeSteps';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//const backgroundFirst = require('../images/Subtle-Prism.svg');

const styles = theme => ({
  carouselOver: {
    display: 'block',
    position: 'relative',
    minHeight: 300,
    padding:  theme.spacing.unit * 3,

    backgroundSize: 'cover',
    backgroundColor: '#212121',
    backgroundPosition: 'center, center',
  },
  stepContainer: {
    overflow: 'hidden',
    height: '30vh' ,
    flexGrow: 1,
    color: "#aaaaaa",
  },
  img: {
    overflow: 'hidden',
    width: '100%',
    height: 'inherit'
  },
  container: {
    maxWidth: 600,
    height: '100%',
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bottomMargin: {
    marginBottom: theme.spacing.unit * 2
  },
  mobileStepper: {
    backgroundColor: 'transparent',
  },
  whitetext: {
    color: "#aaaaaa",
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundSize: 'contain',

    paddingBottom: 50
  },
  grid: {
    width: 1200,
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
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
  const maxSteps = swipeSteps.length;
  const { activeStep } = this.state;

/*<img className={classes.img} src={step.imgPath} alt={step.label} />*/

  return (
    <div>
    <div className={classes.carouselOver}>
    <Typography variant="h4" color='primary' gutterBottom>
      Man and Machine Contest
    </Typography>
    <AutoPlaySwipeableViews
      axis='x'
      index={activeStep}
      interval={10000}
      onChangeIndex={this.handleStepChange}
      enableMouseEvents
    >
      {swipeSteps.map((step, index) => (
        <div key={step.label} className={classes.stepContainer}>
          {Math.abs(activeStep - index) <= 2 ? (
            <div className={classes.root}>
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
            <Grid item xs={12} md={4}>
            <Typography variant="h4" className={classes.whitetext}>{step.label}</Typography>
            {step.description}
            </Grid>
            <Grid item xs={12} md={4}>
            <img height="200" width="auto" src={step.imgPath} alt=""/>
            </Grid>
            </Grid>
            </div>
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
        <Button className={classes.whitetext} size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
          Next
        </Button>
      }
      backButton={
        <Button className={classes.whitetext}  size="small" onClick={this.handleBack} disabled={activeStep === 0}>
          Back
        </Button>
      }
    />
    </div>
    </div>

  )
}
}

export default withRouter(withStyles(styles)(Carousel))
