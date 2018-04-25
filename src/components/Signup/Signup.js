import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Header from "../Home/Header";

const styles = theme => ({
  root: {
  },
  form: {
    textAlign: "center",
  },
  paper: {
    display: "inline-block",
    margin: "auto",
    marginTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 8,
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
        <Header />
        <div
          className={classes.form}
        >
          <Paper
            elevation={4}
            className={classes.paper}
          >
            <Typography variant="headline" component="h3">
              Create an Account
          </Typography>
            <form>
              <div>
                <TextField
                  required
                  id="name"
                  label="Email"
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
                  type="submit"
                  variant="raised"
                  color="primary"
                  className={classes.button}
                >
                  Signup
              </Button>
              </div>
            </form>
          </Paper>
        </div>
      </div >
    );
  }
}

export default withStyles(styles)(Signup);