import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import OutlinedFlag from '@material-ui/icons/OutlinedFlag';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
import ControlledOpenSelect from './ControlledOpenSelect';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    contestopen: true,
    filesopen: false,
  };

  handleClick = (value) => {
    this.setState(state => ({ [value]: !state[value] }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"

        className={classes.root}
      >
      <ListItem button>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>

        <ListItem button onClick={() => (this.handleClick('contestopen'))}>
          <ListItemIcon>
            <OutlinedFlag />
          </ListItemIcon>
          <ListItemText primary="My Contests"/>
          {this.state.contestopen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.contestopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={classes.nested}>
              <ListItemText  primary="Man & Machine"/>
            </ListItem>

          </List>
        </Collapse>

        <Divider />

        <ListItem>
        <ListItemIcon>

        </ListItemIcon>
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
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
