import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Roles from './content/Roles.js';

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
    backgroundColor: '#aaa',
    objectFit: 'cover',
    maxwidth: 20,
    height: 'auto',
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

class DashAccountProfile extends Component {
  state = {
    accountInfo: this.props.accountInfo,
    accountName : this.props.accountInfo.accountName,
    accountAvatar : this.props.accountInfo.accountAvatar,
    accountMail : this.props.accountInfo.accountMail,
    accountRole : this.props.accountInfo.accountRole,
    accountToken: this.props.accountInfo.accountToken,
    accountFirstname: this.props.accountInfo.accountFirstname,
    accountSecondname: this.props.accountInfo.accountSecondname,
    accountPassword: this.props.accountInfo.accountPassword,
    accountStatus: this.props.accountInfo.accountStatus,
  };
  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
  render() {

    const { classes } = this.props;


    //const subContent = this.props.subContent;
    const roles = Roles;
    const accountInfo = this.state.accountInfo;
    return (
      <>{this.props.open ?
      <>
      <Grid justify='flex-start' direction='row' alignItems='stretch' spacing={24} container>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Profile</Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            container
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            <Grid md={2} item style={{maxWidth:150,minWidth:60}}>
              <Avatar alt="Mr Sharp" src={accountInfo.accountAvatar} className={classes.bigAvatar}/>
            </Grid>
            <Grid md={5} item>
            <List style={{margin:0,padding:0}}>
              <ListItem>
                <TextField
                  id="name"
                  label="Name"
                  className={classes.textField}
                  value={accountInfo.accountFirstname}
                  onChange={this.handleChange('accountFirstname')}
                  margin="normal"
                />
                <TextField
                  id="surname"
                  label="Last name"
                  className={classes.textField}
                  value={accountInfo.accountSecondname}
                  onChange={this.handleChange('accountSecondname')}
                  //helperText="Some important text"
                  margin="normal"
                />
              </ListItem>
              <ListItem>
                <TextField
                  id="displayname"
                  label="Display Name"
                  className={classes.textField}
                  value={accountInfo.accountName}
                  onChange={this.handleChange('accountName')}
                  //helperText="Some important text"
                  margin="normal"
                />
                <TextField
                  id="role"
                  select
                  label="Role"
                  className={classes.textField}
                  value={roles[accountInfo.accountRole].label}
                  onChange={this.handleChange('accountRole')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  {roles.map(option => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </ListItem>
              <ListItem>
                <TextField
                  id="mail"
                  label="E-mail"
                  className={classes.textField}
                  value={accountInfo.accountMail}
                  onChange={this.handleChange('accountMail')}
                  //helperText="Some important text"
                  margin="normal"
                />
                <Button variant="outlined" className={classes.outlinedButton}>Set Password</Button>
              </ListItem>
              <ListItem>
              <TextField
                error
                id="standard-read-only-input"
                label="Profile status"
                defaultValue={accountInfo.accountStatus}
                className={classes.textField}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              </ListItem>
              <ListItem>
              <Button variant="outlined" className={classes.textField}>Save</Button>
              </ListItem>
            </List>
            </Grid>
          </Grid>
          </Paper>
        </Grid>
        <Grid style={{marginBottom: 200}}></Grid>
      </Grid>
      </>
      : ''}
      </>
    )
  }
}

export default withStyles(styles)(DashAccountProfile)
