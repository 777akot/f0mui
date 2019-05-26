import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Topbar from '../Topbar';
import NestedList from '../NestedList';
import DashContest from './DashContest';
import Footer from './Footer';
import DashAccountProfile from './DashAccountProfile';
import projectContent from './content/projectContent';
import leaderboardContent from './content/leaderboardContent';
import graphContent from './content/graphContent';
import messagesArray from './content/messagesArray';
import accountInfo from './content/accountInfo';
import projectData from './content/projectData';

import numeral from 'numeral';
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

class Dashboard extends Component {

  state = {
    loading: true,
    subContent: 0,
    authorized: true,
    editing: false,
    selectedPart: 'account',
    accountRole: accountInfo.accountRole,
    projectContent: projectContent,
    leaderboardContent: leaderboardContent,
    graphContent: graphContent,
    messagesArray: messagesArray,
    accountInfo: accountInfo,
    projectData: projectData,
  };

  updateData = (value) => {
    this.setState({ subContent: value })
    this.setState({ editing: false })
  }

  editText = (item,editing) => {
    if(this.state.editing===false){
      this.setState({ editing: true });
    } else {
      this.setState({ editing: false });
      item = 0;
    }
  }

  partSelector = (value) => {
    this.setState({ selectedPart: value });
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;
    const leaderboardContent = this.state.leaderboardContent;
    const graphContent = this.state.graphContent;
    const projectData = this.state.projectData;
    const projectContent = this.state.projectContent;
    const accountInfo = this.state.accountInfo;

    return (
      <>
        <CssBaseline />
        <Topbar
          currentPath={currentPath}
          signdialogopen={this.signdialogopen}
          authorized={this.state.authorized}
          messagesArray={this.state.messagesArray}
          accountInfo={this.state.accountInfo}
        />
        <div className={classes.root}>
        <Grid direction="row" alignItems="stretch" justify="flex-start" wrap="nowrap" container style={{marginTop:90}} spacing={24}>
          <Grid item xs={2} style={{minWidth: 200}}>
              <NestedList
                selectedPart={this.partSelector}
                currentpart={this.state.selectedPart}
                accountRole={accountInfo.accountRole}
              />
          </Grid>
          <Grid item xs={10}>
            {this.state.selectedPart === 'account' ?
            <DashAccountProfile {...this.props}

              updateData={this.updateData}
              open={this.state.selectedPart==='account'}
              accountInfo={this.state.accountInfo}
            />
             :
            <DashContest {...this.props}

              updateData={this.updateData}
              open={this.state.selectedPart==='contest'}
              editing={this.state.editing}
              subContent={this.state.subContent}
              editText={this.editText}
              projectContent={projectContent}
              leaderboardContent={leaderboardContent}
              graphContent={graphContent}
              projectData={projectData}
              accountInfo={accountInfo}
            />
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
