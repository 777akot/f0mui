import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});


const ITEM_HEIGHT = 48;

class PopMenu extends React.Component {
  state = {
    open: false,
    selected: '',
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClick = (value,target) => {
    this.setState(value => ({ selected: value }));
    this.handleClose(target);
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const childrens = this.props.children;
    const contents = this.props.contents;
    return (
      <div className={classes.root}>
        <div>

          <IconButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            {this.props.children
              .filter((child,index) => (index===0))
              .map((childrens) => (childrens))}
          </IconButton>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="long-menu"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              ><ClickAwayListener onClickAway={this.handleClose}>
                <Paper
                style={{
                    marginTop: 10,
                    maxHeight: ITEM_HEIGHT * 7,
                    width: 200,
                    overflow: 'auto',

                }}>

                    <List>
                    {childrens
                      .filter((child,index) => (index>1))
                      .map((child,index) => (<ListItem key={index}>{child}</ListItem>))}
                    </List>
                    <Divider/>
                    <MenuList>
                    {contents.map(content => (
                      <MenuItem
                        key={content.label}
                        component={Link}
                        to={content.to}
                        onClick={() => {this.handleClick(content.to,this)}}>
                        {content.label}
                      </MenuItem>
                    ))}
                    </MenuList>


                </Paper></ClickAwayListener>
              </Grow>
            )}
          </Popper>

        </div>
      </div>
    );
  }
}

PopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PopMenu));
