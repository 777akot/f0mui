import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

{/* Footer */}
const styles = theme => ({

footer: {

  /* borderTop: `1px solid ${theme.palette.divider}`, */
  padding: `${theme.spacing.unit * 5}px 0`,
  backgroundColor: theme.palette.grey['200'],
  overflow: "hidden"

}

});

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

class Footer extends Component {

render() {

  const { classes } = this.props;

  return (
<footer className={classNames(classes.footer, classes.layout)}>
  <Grid container spacing={32} justify="space-evenly">
    {footers.map(footer => (
      <Grid item key={footer.title}>

        <Typography variant="h6" color="textPrimary" gutterBottom>
          {footer.title}
        </Typography>
        {footer.description.map(item => (
          <Typography key={item} variant="subtitle1" color="textSecondary">
            {item}
          </Typography>
        ))}

      </Grid>
    ))}
  </Grid>
</footer>
)};

}

export default withRouter(withStyles(styles)(Footer))
