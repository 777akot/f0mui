import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import SignDialog from './dialogs/SignDialog';

import Topbar from './Topbar';
import Footer from './Footer';
import Carousel from './Carousel';
import Instruction from './Instruction';
import ContestMenu from './ContestMenu';
import MainContent from './Contents';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import r1 from '../images/r1.svg';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  paperMain: {
    minHeight: 300,
    backgroundSize: 'cover'
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 50
  },
  grid: {
    width: 1200,
    marginTop: 90,
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
  },
  inverted: {
    color: "#999999",
  },
  Carousel: {
    height: 400
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
    backgroundColor: '#aaa',
  },
  card: {
  maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false,
    subContent: 0,
    authorized: false,
    signDialog: false,
  };

  componentDidMount() {}

  openGetStartedDialog = (event) => {
    this.setState({getStartedDialog: true});
  }

  closeSignDialog = (event) => {
    this.setState({signDialog: false});
  }

  handleSubmenu = (event) => {
    this.setState({subContent: 3});
  }

  updateData = (value) => {
    this.setState({ subContent: value })
  }

  signdialogopen = (signDialog) => {
    this.setState({ signDialog: signDialog })
  }

  signAuthorized = (value) => {
    this.setState({authorized: value })
  }

  render() {
    const { classes } = this.props;
    const subContent = this.state.subContent;
    const mainContent = MainContent;
    return (
      <React.Fragment>
        <CssBaseline />

        <Topbar signdialogopen={this.signdialogopen} authorized={this.state.authorized}/>

        <div>

          <Grid container justify="center">

            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>

            <Grid item xs={12}>

                  <Paper className={classes.paperMain}>
                    <div>
                      <div>

                      <Carousel className={classes.Carousel}/>

                      </div>
                    </div>

                  </Paper>

            </Grid>


            <Grid container item xs={12}>

                <Grid item xs={12}>
                  <Paper>
                  <ContestMenu updateData={this.updateData} content={mainContent}/>
                    <div>
                      <div className={classes.paper}>

                        <Typography variant="h4" color='primary' gutterBottom>
                        {mainContent.slice(subContent,subContent + 1).map((item, index) => (

                            <div key={index}>
                            {item.label}
                            </div>

                        ))}
                        </Typography>

                        {mainContent.slice(subContent,subContent + 1).map((item, index) => (

                            <div key={index}>
                            <Typography>
                            {item.content}
                            </Typography>
                            </div>

                        ))}


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
                      </div>
                      <Grid spacing={16} alignItems="center" justify="center" container>
                      <Grid item xs={12} md={2}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={r1}
                            title="Contemplative Reptile"
                            style={{backgroundPosition: 'top,center',backgroundColor: '#aaa'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Cool Fellow
                            </Typography>
                            <Typography component="p">
                              A widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                      </Card>
                      </Grid>
                      <Grid item xs={12} md={2}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={r1}
                            title="Contemplative Reptile"
                            style={{backgroundPosition: 'top,center',backgroundColor: '#aaa'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Super Man
                            </Typography>
                            <Typography component="p">
                              A widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                      </Card>
                      </Grid>
                      <Grid item xs={12} md={2}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={r1}
                            title="Contemplative Reptile"
                            style={{backgroundPosition: 'top,center',backgroundColor: '#aaa'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Awesome
                            </Typography>
                            <Typography component="p">
                              A widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                      </Card>
                      </Grid>
                      <Grid item xs={12} md={2}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={r1}
                            title="Contemplative Reptile"
                            style={{backgroundPosition: 'top,center',backgroundColor: '#aaa'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Big Brain
                            </Typography>
                            <Typography component="p">
                              A widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                      </Card>
                      </Grid>
                      <Grid item xs={12} md={2}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={r1}
                            title="Contemplative Reptile"
                            style={{backgroundPosition: 'top,center',backgroundColor: '#aaa'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Big Brain
                            </Typography>
                            <Typography component="p">
                              A widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                      </Card>
                      </Grid>
                      <Grid item xs={12} md={2}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={r1}
                            title="Contemplative Reptile"
                            style={{backgroundPosition: 'top,center',backgroundColor: '#aaa'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Big Brain
                            </Typography>
                            <Typography component="p">
                              A widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                      </Card>
                      </Grid>

                      <Divider />

                        <Grid item xs={12}>
                          <Typography variant="h4" color='secondary' gutterBottom className={classes.grid}>
                            A BUNCH OF GREAT SPONSORS
                          </Typography>
                        </Grid>
                        <Grid item xs={12} alignItems="center" justify="center" container>
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                          <Avatar alt="Remy Sharp" src={r1} className={classes.bigAvatar} />
                        </Grid>

                      </Grid>
                    </div>
                  </Paper>
              </Grid>
            </Grid>




            </Grid>
          </Grid>

          <SignDialog
            authorized={this.signAuthorized}
            open={this.state.signDialog}
            onClose={this.closeSignDialog}
          />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main));
