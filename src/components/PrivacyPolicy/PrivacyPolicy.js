import React, { Component } from 'react';

import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Header from "../Home/Header";

const styles = theme => ({
  root: {
  },
  centerText: {
    textAlign: "center",
  },
  paper: {
    display: "block",
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 5,
  },
  questionTitle: {
    display: "block",
    margin: "auto",
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4,
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

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography
            variant="headline"
            component="h3"
            className={classes.centerText}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
          >
            We, the company, etc.
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography
            variant="headline"
            component="h3"
            className={classes.centerText}
          >
            Account Policy
          </Typography>
          <Typography
            variant="body1"
          >
            We, the company, etc.
          </Typography>
        </Paper>
      </div >
    );
  }
}

export default withStyles(styles)(PrivacyPolicy);