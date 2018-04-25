import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  paper: {
    display: "inline-block",
    margin: "auto",
    marginTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 8,
    minWidth: 500,
    minHeight: 500,
  }
});

class Search extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper
          elevation={4}
          className={classes.paper}
        >
        </Paper>
        <Paper
          elevation={4}
          className={classes.paper}
        >
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Search);