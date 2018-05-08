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

class Faq extends Component {
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
            Frequently Asked Questions (Faq)
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Table of Content
          </Typography>
          <Typography
            variant="body1"
            color="primary"
          >
            Question 1
            Question 2
            Question 3
            ...
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            How do I create an account?
          </Typography>
          <Typography
            variant="body1"
          >
            Go to https://EXAMPLE.URL, click on sign up in the upper right corner
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            What is the meaning of life?
          </Typography>
          <Typography
            variant="body1"
          >
           42
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            How are you today?
          </Typography>
          <Typography
            variant="body1"
          >
            Good, how are you?
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Do you believe in a future?
          </Typography>
          <Typography
            variant="body1"
          >
            I do! But I believe the future depends on the person believing.
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Where is the world located?
          </Typography>
          <Typography
            variant="body1"
          >
            In the center.
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            How did you live to such a healthy age?
          </Typography>
          <Typography
            variant="body1"
          >
            Exercise. And good commitment.
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Who do you trust?
          </Typography>
          <Typography
            variant="body1"
          >
            Family.
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Where do you want to be in the next five years?
          </Typography>
          <Typography
            variant="body1"
          >
            Anywhere making lots of money!
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            What is our favorite food?
          </Typography>
          <Typography
            variant="body1"
          >
            Mangos of course!
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Good weather today, huh?
          </Typography>
          <Typography
            variant="body1"
          >
            Yes! Very good weather today.
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          className={classes.questionTitle}
        >
          <Typography
            variant="title"
            component="h3"
            gutterBottom
          >
            Do you have to be anywhere today?
          </Typography>
          <Typography
            variant="body1"
          >
            Nope. I am free today.
          </Typography>
        </Paper>
      </div >
    );
  }
}

export default withStyles(styles)(Faq);