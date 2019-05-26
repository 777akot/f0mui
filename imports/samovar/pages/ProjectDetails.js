import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

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

const challengeOnOff = [
  {
    label: "Открыто для попыток",
  },
  {
    label: "Закрыто",
  },

];

const statusSwitch =
{
  isOk: "Подтвержден",
  isNot: "На модерации"
};

class ProjectDetails extends React.Component {

  state = {

    projectTitle : this.props.projectData.projectTitle,
    projectId : this.props.projectData.projectId,
    projectApiDeveloper: this.props.projectData.projectApiDeveloper,
    projectApiCustomer: this.props.projectData.projectApiCustomer,
    projectApiIsOn: this.props.projectData.projectApiIsOn,
    projectStage: this.props.projectData.projectStage,
    projectStatus: this.props.projectData.projectStatus,

    open: false,
    challengeOnOff: challengeOnOff[0],
  };

  handleChange = (x) => event => {
      this.setState({ [x] : event.target.value} );
    };

componentDidMount() {
  alert(this.props.projectData.projectTitle);
  for (var i; i<this.props.projectData.length;i++) {
  this.setState({ [this.props.projectData[i]] : this.props.projectData[i]} );
  }
}

render() {
  const { classes } = this.props;
  const projectData = this.state.projectData;

  return(

<List style={{margin:0,padding:0}}>
  <ListItem>
    <TextField
      id="title"
      label="Title"
      value={this.state.projectTitle}
      onChange={this.handleChange('projectTitle')}
      margin="normal"
      fullWidth
    />
  </ListItem>
  <ListItem>
  <TextField
    id="onoff"
    select
    label="Доступ"
    fullWidth
    value={this.state.projectApiIsOn ? challengeOnOff[0].label : challengeOnOff[1].label }
    onChange={this.handleChange('projectApiIsOn')}
    SelectProps={{
      MenuProps: {
        className: classes.menu,
      },
    }}
    margin="normal"
  >
    {challengeOnOff.map(option => (
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
    id="standard-read-only-input"
    label="API Разработчика"
    defaultValue={this.state.projectApiDeveloper}
    fullWidth
    margin="normal"
    InputProps={{
      readOnly: true,
    }}
  />
  </ListItem>
  <ListItem>
  <TextField
    id="standard-read-only-input"
    label="API Заказчика"
    defaultValue={this.state.projectApiCustomer}
    fullWidth
    margin="normal"
    InputProps={{
      readOnly: true,
    }}
  />
  </ListItem>
  <ListItem>
  <TextField
    error={!this.state.projectStatus}
    id="standard-read-only-input"
    label="Project status"
    defaultValue={this.state.projectStatus ? statusSwitch.isOk : statusSwitch.isNot}
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
