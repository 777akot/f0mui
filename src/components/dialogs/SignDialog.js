import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

import GitIcon from '../../images/social/github.svg';
import GooglePlusIcon from '../../images/social/googleplus.svg';
import FacebookIcon from '../../images/social/facebook.svg';



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
});




class SignDialog extends Component {
  socialSignIn = (value) => {
    this.props.authorized(true)
    this.props.onClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <BaseDialog {...this.props}>
        <Grid container justify="center"  >
        <Grid item xs={12}>
          <Typography variant="h6" color='primary' gutterBottom>Sign with your account on</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color='primary' onClick={this.socialSignIn} variant="contained" style={{margin: 10,paddingLeft: 7}}>
            <Avatar className={classes.avatar}>
            <img src={GitIcon} alt=""/>
            </Avatar>
            Github
          </Button>

          <Button color='primary' variant="contained" style={{margin: 10,paddingLeft: 7}}>
            <Avatar className={classes.avatar}>
            <img src={GooglePlusIcon} alt=""/>
            </Avatar>
            Google
          </Button>

          <Button color='primary' variant="contained" style={{margin: 10,paddingLeft: 7}}>
            <Avatar className={classes.avatar}>
            <img src={FacebookIcon} alt=""/>
            </Avatar>
            Facebook
          </Button>
        </Grid>
        </Grid>
        <Divider />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>

      </BaseDialog>
    )
  }
}

export default withRouter(withStyles(styles)(SignDialog));
