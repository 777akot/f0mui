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
const textColor = "#ffffff";



const styles = theme => ({

  ContestBar: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: '000',
    padding: 0


  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  },
})


class ContestMenu extends Component {
  state = {
    value: 0,
    menuDrawer: false,

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

render() {

  const { classes } = this.props;



  return (

    <Toolbar className={classes.ContestBar}>
    <Grid xs={12} alignItems="baseline">
    <React.Fragment>
    <SwipeableDrawer anchor="right" open={this.state.menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
      <AppBar/>
      <List>
        {ContestMenuContent.map((item, index) => (
          <ListItem component={Link} to={{pathname: item.pathname, search: this.props.location.search}} button key={item.label}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
    <Tabs
      value={this.current() || this.state.value}
      indicatorColor="primary"
      textColor="secondary"
      onChange={this.handleChange}
    >
      {ContestMenuContent.map((item, index) => (

        <Tab key={index} component={Link} to={`/roster/`} classes={{root: classes.tabItem}} label={item.label} />
      ))}
    </Tabs>
    </React.Fragment>
    </Grid>
    </Toolbar>





  );
}
}


export default withRouter(withStyles(styles)(ContestMenu))
