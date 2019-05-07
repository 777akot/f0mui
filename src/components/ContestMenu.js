import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import ContestMenuContent from './ContestMenuContent';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const styles = theme => ({

  ContestBar: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: '000',
    padding: 0,
    zindex: -1,

  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto',
    zindex: -1,
  },
})


class ContestMenu extends Component {
  state = {
    pos: 'relative',
    value: 0,
    menuDrawer: false,
    subContent: 0,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if(this.props.currentPath === '#') {
      return 0
    }
    if(this.props.currentPath === '#') {
      return 1
    }
    if(this.props.currentPath === '#') {
      return 2
    }
    if(this.props.currentPath === '#') {
      return 3
    }
    if(this.props.currentPath === '#') {
      return 4
    }

  }


  handleSubmenu = (index) => {

    this.setState({subContent: index});
    this.setState({value: index});
    const subContent = index;
    this.props.updateData(subContent);
    return {
      subContent
    }
  }
render() {

  const { classes } = this.props;

  const subContent = this.state.subContent;

  return (
    <Grid style={this.props.thisStyle}>
    <Toolbar className={classes.ContestBar}>
    <Grid alignItems="baseline">

    <Tabs
      value={this.current() || this.state.value}
      indicatorColor="primary"
      textColor="primary"
      onChange={this.handleChange}
    >
      {this.props.content.map((item, index) => (
                <Tab label={item.label} className={classes.tabItem} onClick={() => this.handleSubmenu(index)}></Tab>
      ))}
    </Tabs>

    </Grid>
    </Toolbar>
    </Grid>




  );
}
}


export default withRouter(withStyles(styles)(ContestMenu))
