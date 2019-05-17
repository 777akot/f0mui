import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({

  ContestBar: {
    boxShadow: 'none',
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
  tabContainer: {
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
})


class ContestMenu extends Component {
  state = {
    pos: 'relative',
    value: 0,
    menuDrawer: false,
    contentOutside: 0,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }


  handleSubmenu = (index) => {

    this.setState({contentOutside: index});
    this.setState({value: index});

    this.props.updateData(index);
    return {
      index
    }
  }
render() {

  const { classes } = this.props;
  const contentArr = this.props.content;

  return (
    <Toolbar className={classes.ContestBar}>

    <div className={classes.iconContainer}>
      <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
    </div>

    <div className={classes.tabContainer}>
    <Tabs
      value={this.state.value}
      indicatorColor="primary"
      textColor="primary"
      onChange={this.handleChange}
    >
      {contentArr.map((item, index) => (
        <Tab key={index} label={item.label} className={classes.tabItem} onClick={() => this.handleSubmenu(index)}></Tab>
      ))}
    </Tabs>
    </div>

    </Toolbar>

  );
}
}


export default withRouter(withStyles(styles)(ContestMenu))
