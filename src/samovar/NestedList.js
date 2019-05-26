import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import OutlinedFlag from '@material-ui/icons/OutlinedFlag';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import ControlledOpenSelect from './ControlledOpenSelect';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,

  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ContestSubMenu extends React.Component {
  state = {
    contestopen: false,
    filesopen: false,
    currentcontestopen: false,
    label: 'contest',
  };
  handleClick = (value) => {
    if (value==='currentcontestopen') {
       this.props.selectedPart(this.state.label);
       this.setState(state => ({ [value]: true }));
    } else {
     this.setState(state => ({ [value]: !state[value] }))};
  };
  render() {
    const { classes } = this.props;

    return(
      <>
      <ListItem button onClick={() => (this.handleClick('contestopen'))}>
        <ListItemIcon>
          <OutlinedFlag />
        </ListItemIcon>
        <ListItemText primary="My Contests"/>
        {this.state.contestopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={this.state.contestopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={() => (this.handleClick('currentcontestopen'))}>
            <ListItemText className={classes.nested} align='right' style={{border: '0px solid'}} primary="Man & Machine"/>
          </ListItem>
        </List>
      </Collapse>



      {this.state.currentcontestopen && this.props.currentpart === 'contest' && this.props.accountType!==2 ?
      <><Divider />
      <ListItem>
         <ControlledOpenSelect />
      </ListItem>

      <Divider />

      <ListItem button onClick={() => (this.handleClick('filesopen'))}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText inset primary="Files" />
        {this.state.filesopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={this.state.filesopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>Datasets</ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText  primary="Train" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText inset primary="Test" />
          </ListItem>

          <Divider />

          <ListItem>Docs</ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText inset primary="Guide" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText inset primary="Reference" />
          </ListItem>
        </List>
      </Collapse>

      </>
      : ''}
      </>
    );
  }

}

class NestedList extends React.Component {
  state = {

    currentpart: '',
  }

  handleClick = (value) => {

       this.props.selectedPart(value);
       this.setState({currentpart: value})
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"

        className={classes.root}
      >
      <ListItem button onClick={() => {this.handleClick('account')}}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>

      <ContestSubMenu {...this.props}/>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
