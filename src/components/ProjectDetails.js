import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Savealt from '@material-ui/icons/SaveAlt';
//import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Roles from './Roles.js';
import AccountData from './AccountData';

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
  },
});

class ProjectDetails extends React.Component {

  state = {
    name: AccountData[0].name,
    surname: AccountData[0].surname,
    displayname: AccountData[0].displayname,
    role: AccountData[0].role,
    mail: AccountData[0].mail,
    open: false,
  };
  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
render() {
  const { classes } = this.props;
  const roles = Roles;
  return(

<List style={{margin:0,padding:0}}>
  <ListItem>
    <TextField
      id="title"
      label="Title"
      value={this.state.name}
      onChange={this.handleChange('name')}
      margin="normal"
      fullWidth
    />
  </ListItem>
  <ListItem>
  <TextField
    id="role"
    select
    label="Role"
    fullWidth
    value={this.state.role}
    onChange={this.handleChange('role')}
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
  <Button variant="outlined" className={classes.textField}>Save</Button>
  </ListItem>
  <ListItem>
  <TextField
    error
    id="standard-read-only-input"
    label="Profile status"
    defaultValue={AccountData[0].status}
    fullWidth
    margin="normal"
    InputProps={{
      readOnly: true,
    }}
  />
  </ListItem>

  </List>


)
}
}


export default withStyles(styles)(ProjectDetails);
