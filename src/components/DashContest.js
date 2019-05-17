import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import EssayForm from './EssayForm';
import DashContents from './DashContents';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Graph from './GraphChart';
import VerticalLinearStepper from './VerticalLinearStepper';
import ReactVirtualizedTable from './ReactVirtualizedTable';
import ProjectDetails from './ProjectDetails';
import ContestMenu from './ContestMenu';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    display: 'flex',
    paddingRight: 28,
    paddingBottom: 32,
  },
  grid: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    marginTop: 60,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    }
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
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
    zIndex: theme.zIndex.drawer + 1,
    marginTop: 100
  },
  outlinedButton: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  bigAvatar: {
    margin: 10,
    width: 'inherit',
    height: 'inherit',
    backgroundColor: '#aaa',
    objectFit: 'cover',
    maxwidth: 20,
    opacity: 0.7,
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  mainBadge: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    flexShrink: 0,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class DashContest extends Component {
  state = {
    open: false,
    editing: this.props.editing,

  };


  render() {

    const { classes } = this.props;
    const subContent = this.props.subContent;
    const dashContent = DashContents;
    const updateData = this.props.updateData;
  

    return (
      <>{this.props.open ?
      <Grid justify='flex-start' direction='row' alignItems='stretch' spacing={24} container>

          <Grid item xs={12} container>
            <Typography variant="h6" gutterBottom>My Contests / Man & Machine</Typography>
          </Grid>

          <Grid item xs={12} md={7} style={{minWidth: 550}}>

            <Paper className={classes.paper}>
              <Graph width="inherit" />
            </Paper>

          </Grid>

          <Grid item xs={12} md={5} container>

            <Paper className={classes.paper}>
              <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
              Stage
              </Typography>
              <VerticalLinearStepper />
            </Paper>

          </Grid>

          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>
                <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                  LeaderBoard
                </Typography>
                <ReactVirtualizedTable />
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>

            <Paper className={classes.paper}>
              <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
              General Details
              </Typography>
              <ProjectDetails />
            </Paper>

          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
              Contest content
              </Typography>
              <ContestMenu updateData={updateData} content={dashContent} />
              <Grid className={classes.grid}>
              {!this.props.editing ?
                <>



                  <Typography style={{marginBottom: 40}}>
                  {dashContent[subContent].content}
                  </Typography>

                  <Button variant="outlined" onClick={() => {this.props.editText(subContent)}}><EditIcon /></Button>



                </>
                :

                <EssayForm textValue={dashContent[subContent].content} editing={this.props.editText}/>
              }
              </Grid>

            </Paper>
          </Grid>

      </Grid>
      : ''}
      </>
    )
  }
}

export default withStyles(styles)(DashContest);
