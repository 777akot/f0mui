import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SimpleLineChart from './SimpleLineChart';
import Months from './common/Months';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Loading from './common/Loading';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import ContestMenu from './ContestMenu';
import DashContents from './DashContents';
import Topbar from './Topbar';
import ResponsiveDrawer from './ResponsiveDrawer';
import NestedList from './NestedList';
import HStepper from './HStepper';
import FolderOpen from '@material-ui/icons/FolderOpen';
import EditIcon from '@material-ui/icons/Edit';
import ReactVirtualizedTable from './ReactVirtualizedTable';
import VerticalLinearStepper from './VerticalLinearStepper'

const numeral = require('numeral');
numeral.defaultFormat('0,000');


const styles = theme => ({
  root: {

    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200,
    display: 'flex',
  },
  grid: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    marginTop: 60,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
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

const monthRange = Months;

class Dashboard extends Component {

  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: [],
    subContent: 0,
  };

  updateValues() {
    const { amount, period, start } = this.state;
    const monthlyInterest = (amount)*(Math.pow(0.01*(1.01), period))/(Math.pow(0.01, period - 1))
    const totalInterest = monthlyInterest * (period + start);
    const totalPayment = amount + totalInterest;
    const monthlyPayment = period > start ? totalPayment/(period - start) : totalPayment/(period)

    const data = Array.from({length: period + start}, (value, i) => {
      const delayed = i < start;
      return {
        name: monthRange[i],
        'Type': delayed ? 0 : Math.ceil(monthlyPayment).toFixed(0),
        'OtherType': Math.ceil(monthlyInterest).toFixed(0)
      }
    })

    this.setState({monthlyInterest, totalInterest, totalPayment, monthlyPayment, data})
  }

  componentDidMount() {
    this.updateValues();
  }

  handleChangeAmount = (event, value) => {
    this.setState({amount: value, loading: false});
    this.updateValues();
  }

  handleChangePeriod = (event, value) => {
    this.setState({period: value, loading: false});
    this.updateValues();
  }

  handleChangeStart = (event, value) => {
    this.setState({start: value, loading: false});
    this.updateValues();
  }
  updateData = (value) => {
    this.setState({ subContent: value })
  }


  render() {
    const { classes } = this.props;
    const { amount, period, start, monthlyPayment,
      monthlyInterest, data, loading } = this.state;
    const currentPath = this.props.location.pathname
    const subContent = this.state.subContent;
    const dashContent = DashContents;
    const thisStyle = {
      position: 'fixed',
      backgroundColor: '#eee',
      top: 68,
      zIndex: 10000,
      boxShadow: 'none',
      width: '100%',

    };
    return (
      <React.Fragment>

        <CssBaseline />
        <Topbar currentPath={currentPath} />


        <div className={classes.root}>

            <Grid spacing={24} justify="center" container>
              <Grid item xs={12} className={classes.topBar}>


              </Grid>


              <Grid item xs={2}>

                  <NestedList />

              </Grid>



              <Grid item xs={10} container spacing={24}>

                <Grid item xs={12} alignItems="center" container justify="left">
                  <FolderOpen style={{marginRight: 12}}/>
                  <Typography variant="h6" gutterBottom>My Contests/Man & Machine</Typography>

                </Grid>

                <Grid item xs={12} md={5} container>

                  <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                    Stage
                    </Typography>
                    <VerticalLinearStepper />
                  </Paper>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={7}>
                  <Paper className={classes.paper}>
                    <div>
                      <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                        LeaderBoard
                      </Typography>
                      <ReactVirtualizedTable />
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      Content
                    </Typography>
                    <ContestMenu updateData={this.updateData} content={dashContent} />
                    {dashContent.slice(subContent,subContent + 1).map((item, index) => (

                      <Grid className={classes.grid}>
                        <Typography style={{marginBottom: 40}}>
                        {item.content}
                        </Typography>
                        <Button variant="outlined"><EditIcon /></Button>
                      </Grid>

                    ))}
                  </Paper>
                </Grid>


              </Grid>






            </Grid>


        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Dashboard));
