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
  },
  scroll: {
    overflow: "scroll",
  },
});

/**
 * Creates course search results
 * @class
 */
class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.createResultList = this.createResultList.bind(this);
    this.handleSelectedCourse = this.handleSelectedCourse.bind(this);
  }

  componentDidMount() {
  }

  handleSelectedCourse(course) {
    const {
      addSelectedCourse,
    } = this.props;

    addSelectedCourse(course);
  }

  /**
   * Creates an array of jsx review results
   * @returns {Array} Array of jsx elements representing course results
   */
  createResultList() {
    const {
      classes,
      course,
    } = this.props;
    const {
      courseResults,
    } = course;

    return courseResults.map((result, index) => (
      <div
        className={classes.container}
        key={`${result.title}-${index}`}
      >
        <Button
          type="submit"
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={() => this.handleSelectedCourse(result)}
        >
          Add {result.title} to selected courses
        </Button>
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
            {result.title}
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
            {result.instructor}
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
            {result.description}
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
            {result.status}
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
            {result.room}
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
            {result.enrolled}
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
            {result.classNotes}
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
            {result.meetingDates}
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
            {result.enrolled + "/" + result.enrollmentCapacity}
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
            {result.classNum}
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
            {result.credits}
          </Typography>
        </Paper>
      </div>
    ));
  }

  render() {
    const { classes, course } = this.props;
    const { courseResults } = course;

    const searchResult = courseResults.length === 0 ? null : (
      <div>
        {this.createResultList()}
      </div>
    );

    return searchResult;
  }
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);