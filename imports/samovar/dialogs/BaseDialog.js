import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


const styles = theme => ({
  avatar: {
    backgroundColor: "rgba(0,0,0,0)",
    height: 48,
    width: 48,

  },
  form: {
    width: '100%', // Fix IE 11 issue.

  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
  },
  bottomMargin: {
    marginBottom: theme.spacing.unit * 2
  }
});

class BaseDialog extends Component {
  render() {
    const { classes } = this.props;
    const onClose = this.props.onClose;
    const open = Boolean(this.props.open);
    return (
      <Dialog style={{zIndex: 99999999}}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll='body'
      >
        <DialogContent className={classes.container}>
              {this.props.children}
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(BaseDialog);
