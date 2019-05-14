import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';


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
    contentOutside: 0,
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
    <Grid style={this.props.thisStyle}>
    <Toolbar className={classes.ContestBar}>
    <Grid>

    <Tabs
      value={this.current() || this.state.value}
      indicatorColor="primary"
      textColor="primary"
      onChange={this.handleChange}
    >
      {contentArr.map((item, index) => (
                <Tab key={index} label={item.label} className={classes.tabItem} onClick={() => this.handleSubmenu(index)}></Tab>
      ))}
    </Tabs>

    </Grid>
    </Toolbar>
    </Grid>




  );
}
}


export default withRouter(withStyles(styles)(ContestMenu))
