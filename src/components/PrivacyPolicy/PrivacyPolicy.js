import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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

/**
 * Creates privacy policy page
 * @class
 */
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

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyPolicy);