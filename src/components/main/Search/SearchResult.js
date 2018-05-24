import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    width: 500,
  },
  column: {
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
  paper: {
    display: "block",
    margin: "auto",
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2,
    minWidth: 350,
  }
});

class SearchResult extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    const { classes, course } = this.props;
    const { courseResult } = course;

    const searchResult = courseResult.title === "" ? null : (
      <div
        className={classes.container}
      >
        <Typography
          variant="headline"
          component="h4"
        >
          Course title
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.title}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Instructor
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.instructor}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Description
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.description}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Status
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.status}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Room
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.room}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Enrolled
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.enrolled}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Class notes
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.classNotes}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Meeting dates
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.meetingDates}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Enrollment
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.enrolled + "/" + courseResult.enrollmentCapacity}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Course number 
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.classNum}
          </Typography>
        </Paper>
        <Typography
          variant="headline"
          component="h4"
        >
          Credits
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography component="p">
            {courseResult.credits}
          </Typography>
        </Paper>
      </div>
    );

    return searchResult;
  }
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);