import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MyMenu from './MyMenu';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/PersonOutline';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';

import PopMenu from './PopMenu';

const MainTitle = "F-0";
function logotype(props) {
  return (
    <div><Typography variant="h4">{MainTitle}</Typography></div>
  );
};

const styles = theme => ({
  appBar: {
    position: 'fixed',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',
    zIndex: 10000,

  },
  inline: {
    display: 'inline'
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey['A100']}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.5em'
    }
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    [theme.breakpoints.up('md')]: {
      paddingTop: '0.8em'
    }
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  iconButton: {
    float: 'right'
  },
  tabContainer: {
    float: 'right',
    left: 0,
    marginLeft: 32,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  },
  grow: {
    flexGrow: 1,
  },
  Menu: {
    zIndex: 99999,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
})

const messagesArray = [
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
];

const accountMenuArray = [
  'Profile',
  'Sign out',
];

class AccountCard extends Component {
  state = {
    open: false,
  };
  accountName = "Admin";
  accountAvatar = <AccountCircle/>;
  accountMail = "admin@f-0.io";
  changeState = () => {
  this.setState(() => ({ open: this.props.open }))
  return (
    this.state.open
  );
}
  render() {

    if(this.props.open==true) {
    this.result =
    <Grid container alignItems="baseline" spacing={24}>
    <Grid item xs={12}>
    {this.accountAvatar}
    {this.accountName}
    </Grid>
    <Grid item xs={12}>
    {this.accountMail}
    </Grid>
    </Grid>

    } else {this.result = ''}
    return (
      this.result
    );
  }
}


class Topbar extends Component {

  state = {
    value: 0,
    menuDrawer: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  };

  handleSignin = () => {
    this.props.signdialogopen('true');
    this.handleMenuClose();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  current = () => {
    if(this.props.currentPath === '/home') {
      return 0
    }
    if(this.props.currentPath === '/dashboard') {
      return 1
    }

  }

  render() {

    const { classes } = this.props;
    const authorized = this.props.authorized;

    function renderAccountMenu(handleProfileMenuOpen) {
    if(authorized===true){
    return <div className={classes.sectionDesktop}>
      <PopMenu contents={messagesArray}>
        <Badge badgeContent={17} color="primary">
        <NotificationsIcon />
        </Badge>
        <></>
        <div>Messages</div>

      </PopMenu>
      <PopMenu contents={accountMenuArray}>
        <AccountCircle />
        <></>
        <AccountCard open={true}/>
        
      </PopMenu>
    </div>
    }}

    return (

      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
            <Grid container spacing={24} alignItems="baseline">
              <Grid item xs={12} className={classes.flex}>
                  <div className={classes.inline}>
                    <Typography variant="h6" color="inherit" noWrap>
                      <Link to='/' className={classes.link}>

                        <span className={classes.tagline}>{logotype()}</span>
                      </Link>
                    </Typography>
                  </div>
                  { !this.props.noTabs && (
                    <React.Fragment>
                      <div className={classes.productLogo}>
                        <Typography>
                          Machine Learning Competition
                        </Typography>
                      </div>
                      <div className={classes.iconContainer}>
                        <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton} color="inherit" aria-label="Menu">
                          <MenuIcon />
                        </IconButton>
                      </div>
                      <div className={classes.grow} />
                      <div className={classes.tabContainer}>
                        <SwipeableDrawer anchor="right" open={this.state.menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
                          <AppBar title="Menu" />
                          <List>
                            {MyMenu.map((item, index) => (
                              <ListItem component={Link} to={{pathname: item.pathname, search: this.props.location.search}} button key={item.label}>
                                <ListItemText primary={item.label} />
                              </ListItem>
                            ))}
                          </List>
                        </SwipeableDrawer>



                        <Tabs
                          value={this.current() || this.state.value}
                          indicatorColor="primary"
                          textColor="primary"
                          onChange={this.handleChange}
                        >
                          {MyMenu
                            .filter(item => item.authorized===this.props.authorized)
                            .map((item, index) =>
                              <Tab
                                key={index}
                                component={Link}
                                to={{pathname: item.pathname}}
                                onClick={this.handleSignin}
                                classes={{root: classes.tabItem}}
                                label={item.label}
                                />

                          )}
                        </Tabs>
                      </div>


                    </React.Fragment>

                  )}

              </Grid>

            </Grid>
            {renderAccountMenu(this.handleProfileMenuOpen)}
        </Toolbar>

      </AppBar>


    );
  }
}


export default withRouter(withStyles(styles)(Topbar))
