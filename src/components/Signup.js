import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: "flex",
  },
  form: {
    display: "inline-block",
    margin: "auto",
    marginTop: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  centerButton: {
    textAlign: "right",
  },
  paddingTop: {
    paddingTop: theme.spacing.unit * 3,
  }
});

class Signup extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper
          className={classes.form}
          elevation={4}
        >
          <form>
            <div>
              <TextField
                required
                id="required"
                label="Username"
                placeholder="AdamSmith@ucsc.edu"
                className={classes.textField}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </div>
            <div>
              <TextField
                id="password-input"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </div>
            <div className={`${classes.centerButton} ${classes.paddingTop}`}>
              <Button
                variant="raised"
                color="primary"
                className={classes.button}
              >
                Login
            </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);