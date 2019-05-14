import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ContestMenu from './ContestMenu';
import DashContents from './DashContents';
import Topbar from './Topbar';
import NestedList from './NestedList';
import FolderOpen from '@material-ui/icons/FolderOpen';
import EditIcon from '@material-ui/icons/Edit';
import ReactVirtualizedTable from './ReactVirtualizedTable';
import VerticalLinearStepper from './VerticalLinearStepper';
import EssayForm from './EssayForm';
import Footer from './Footer';

const numeral = require('numeral');
numeral.defaultFormat('0,000');


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
    boxShadow: false,
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
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
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
  loanAvatar: {
    display: 'inline-block',
    verticalAlign: 'center',
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  interestAvatar: {
    display: 'inline-block',
    verticalAlign: 'center',
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light
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
});

class DashAccountProfile extends Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;
    const updateData = this.props.updateData;
    const dashContent = DashContents;
    const subContent = this.props.subContent;

    return (
      <>{this.props.open ?
      <>
      <Grid item xs={12} alignItems="center" container>

        <Typography variant="h6" gutterBottom>Profile</Typography>

      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
            Content
          </Typography>
          <ContestMenu updateData={updateData} content={dashContent} />
          {dashContent.slice(subContent,subContent + 1).map((item, index) => (

            <Grid className={classes.grid} key={index}>
              <Typography style={{marginBottom: 40}}>
              {item.content}
              </Typography>

              <Button variant="outlined" onClick={() => {this.props.editText(item)}}><EditIcon /></Button>
            </Grid>

          ))}
        </Paper>
      </Grid>
      <Grid style={{marginBottom: 200}}></Grid>
      </>
      : ''}
      </>
    )
  }
}


class DashContest extends Component {
  state = {
    open: false,

  };
  textEditor = () => {
    alert("TEXT");
    return <EssayForm open={this.state.editing} textValue={DashContents[this.state.subContent].content} />};

  render() {

    const { classes } = this.props;
    const subContent = this.props.subContent;
    const dashContent = DashContents;
    const updateData = this.props.updateData;
    const textEditor = this.props.textEditor;

    return (
      <>{this.props.open ?
      <Grid justify='flex-start' direction='row' alignItems='stretch' spacing={24} container>
          <Grid item xs={12} container>
            <FolderOpen style={{marginRight: 12}}/>
            <Typography variant="h6" gutterBottom>My Contests/Man & Machine</Typography>

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

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                Content
              </Typography>
              <ContestMenu updateData={updateData} content={dashContent} />
              {dashContent.slice(subContent,subContent + 1).map((item, index) => (

                <Grid className={classes.grid} key={index}>
                  <Typography style={{marginBottom: 40}}>
                  {item.content}
                  </Typography>

                  <Button variant="outlined" onClick={() => {this.props.editText(item)}}><EditIcon /></Button>
                </Grid>

              ))}
            </Paper>
          </Grid>

      </Grid>
      : ''}
      </>
    )
  }
}




class Dashboard extends Component {


  state = {
    loading: true,
    totalPayment: 0,
    subContent: 0,
    authorized: true,
    editing: false,
    selectedPart: 'account',
  };


  updateData = (value) => {
    this.setState({ subContent: value })
    this.setState({ editing: false })
  }

  editText = (item) => {

    if(this.state.editing===false){
      this.setState({ editing: true });
      alert(this.state.subContent + ' . ' + item + ' . ' + this.textEditor);

    } else {
      this.setState({ editing: false });
      item = 0;

    }

  }

  partSelector = (value) => {
    //alert(value);
    this.setState({ selectedPart: value });
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname
    const editing = this.state.editing;

    return (
      <>

        <CssBaseline />
        <Topbar currentPath={currentPath}  signdialogopen={this.signdialogopen} authorized={this.state.authorized}/>
        <div className={classes.root}>
        <Grid direction="row" alignItems="stretch" justify="space-evenly" container style={{marginTop:70}} spacing={24}>
          <Grid item xs={12}></Grid>

          <Grid item xs={2}>

              <NestedList selectedPart={this.partSelector} currentpart={this.state.selectedPart} />

          </Grid>
          <Grid item xs={10}>
            {this.state.selectedPart === 'account' ?

            <DashAccountProfile {...this.props} updateData={this.updateData} open={this.state.selectedPart==='account'}/>
             :
            <DashContest {...this.props} updateData={this.updateData} open={this.state.selectedPart==='contest'} subContent={this.state.subContent} editText={this.editText} />

            }
          </Grid>
        </Grid>
        </div>
        <Footer />
      </>
    )
  }
}

export default withRouter(withStyles(styles)(Dashboard));
