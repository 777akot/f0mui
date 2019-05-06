import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';

import Topbar from './Topbar';
import Wizard from './Wizard';
import Footer from './Footer';
import Carousel from './Carousel';
import Instruction from './Instruction';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import ContestMenu from './ContestMenu';
import Contents from './Contents';

const backgroundShape = require('../images/shape.svg');
const backgroundFirst = require('../images/header_home_characters.png');

const styles = theme => ({

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    /* background: `url(${backgroundShape}) no-repeat`, */
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 50
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  paperMain: {
    backgroundColor: '#212121',
    background: `url(${backgroundFirst}) no-repeat`,
    padding:  theme.spacing.unit * 3,
    backgroundSize: 'cover'
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }

});



class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  openDialog = (event) => {
    this.setState({learnMoredialog: true});
  }

  dialogClose = (event) => {
    this.setState({learnMoredialog: false});
  }

  openGetStartedDialog = (event) => {
    this.setState({getStartedDialog: true});
  }

  closeGetStartedDialog = (event) => {
    this.setState({getStartedDialog: false});
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <Topbar />
        <PrimarySearchAppBar />
        <div className={classes.root}>

          <Grid container justify="center">

            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>

            <Grid item xs={12}>

                  <Paper className={classes.paperMain}>
                    <div>
                      <div>
                      <Typography variant="h4" color='primary' gutterBottom>
                        Man and Machine Contest
                      </Typography>
                      <Typography gutterBottom>
                        тема<br/>
                        технологии<br/>
                        вводная вода<br/>
                        сроки проведения<br/>
                        организаторы, жюри, спонсоры, клиенты<br/>
                        условия участия<br/>
                        статус - прогресс<br/>
                        Лидерборд<br/>
                        Компонент для участников<br/>
                      </Typography>
                      <Typography variant="body1" color='primary' gutterBottom>
                        INSTRUCTIONS
                      </Typography>

                      </div>
                    </div>

                  </Paper>

            </Grid>


            <Grid container item xs={12}>

                <Grid item xs={12}>
                  <Paper>
                  <ContestMenu />
                    <div>
                      <div className={classes.paper}>

                        <Typography variant="h4" color='primary' gutterBottom>
                          Overview
                        </Typography>
                        <Typography gutterBottom>
                          INSTRUCTIONS
                        </Typography>
                        <Typography>
                        {Contents.slice(0,1).map((item, index) => (

                            <Link to={`/roster/${item.number}`}>{item.label}</Link>

                        ))}
                        </Typography>

                      </div>
                    </div>
                  </Paper>
              </Grid>
            </Grid>



            <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className={classes.box}>
                        <Typography variant="h4" color='primary' gutterBottom>
                          EASY PARTICIPATE
                        </Typography>
                        <Typography variant="body1" color='primary' gutterBottom>
                          INSTRUCTIONS
                        </Typography>


                      </div>
                      <Instruction />
                      <div className={classes.alignRight}>
                        <Button color='primary' variant="contained" className={classes.actionButtom}>
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
              </Grid>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className={classes.box}>
                        <Typography variant="h4" color='secondary' gutterBottom>
                          PERSONALITIES
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          SPONSORS | PARTICIPANTS
                        </Typography>
                      </div>

                    </div>
                  </Paper>
              </Grid>
            </Grid>



              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      First title
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      A first title style <br/> with two lines
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color='primary' variant="contained" className={classes.actionButtom}>
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      Another box
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      A default box
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color='primary' variant="contained" className={classes.actionButtom}>
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      A box with a carousel
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      If you click in Getting Started, you will see a nice carousel
                    </Typography>
                  </div>
                  <div className={classes.alignRight}>
                    <Button onClick={this.openDialog}  variant="outlined" className={classes.actionButtom}>
                      Learn more
                    </Button>
                    <Button onClick={this.openGetStartedDialog} color='primary' variant="contained" className={classes.actionButtom}>
                      Dashboard
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12}>

              </Grid>
            </Grid>
          </Grid>

          <SwipeDialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose} />
          <InstructionDialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
          />

        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main));
