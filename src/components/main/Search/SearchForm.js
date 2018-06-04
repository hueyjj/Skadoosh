import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';

import { 
  termOpts,
  statusOpts,
  subjectOpts,
  geOpts,
  meetingDaysOpts,
  meetingTimesDaysOpts,
  courseCareerOpts,
} from "../../../utils/searchOptions";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
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
});

/**
 * Creates course search form
 * @class
 */
class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      status: "",
      subject: "",
      courseNumber: "",
      courseTitleKeyword: "",
      instructorLastName: "",
      generalEducation: "",
      courseUnits: "",
      meetingDays: "",
      meetingTimes: "",
      courseCareer: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  /**
   * Sets the form data
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  /**
   * Submits the course search form
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
  handleSubmit(e) {
    e.preventDefault();

    const { fetchCourse } = this.props;

    fetchCourse({
      term: this.state.term,
      status: this.state.status,
      subject: this.state.subject,
      courseNumber: this.state.courseNumber,
      courseTitleKeyword: this.state.courseTitleKeyword,
      instructorLastName: this.state.instructorLastName,
      generalEducation: this.state.generalEducation,
      courseUnits: this.state.courseUnits,
      meetingDays: this.state.meetingDays,
      meetingTimes: this.state.meetingTimes,
      courseCareer: this.state.courseCareer,
    }, (error) => {
      if (error) {
        throw error;
      }
    });

    // Persist form data after submit
  }

  render() {
    const { classes } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div
          className={classes.container}
        >
          <TextField
            id="select-term"
            select
            label="Term"
            className={classes.textField}
            margin="normal"
            value={this.state.term}
            onChange={this.handleChange("term")}
          >
            {termOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-status"
            select
            label="Status"
            className={classes.textField}
            margin="normal"
            value={this.state.status}
            onChange={this.handleChange("status")}
          >
            {statusOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-subject"
            select
            label="Subject"
            className={classes.textField}
            margin="normal"
            value={this.state.subject}
            onChange={this.handleChange("subject")}
          >
            {subjectOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-course-number"
            label="Course Number"
            type="number"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("courseNumber")}
          />
          <TextField
            id="select-course-title-keyword"
            label="Course Title Keyword"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("courseTitleKeyword")}
          />
          <TextField
            id="select-instructor-last-name"
            label="Instructor Last Name"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("instructorLastName")}
          />
          <TextField
            id="select-general-education"
            select
            label="General Education"
            className={classes.textField}
            margin="normal"
            value={this.state.generalEducation}
            onChange={this.handleChange("generalEducation")}
          >
            {geOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-course-units"
            label="Course Units"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("courseUnits")}
          />
          <TextField
            id="select-meeting-days"
            select
            label="Meeting Days"
            className={classes.textField}
            margin="normal"
            value={this.state.meetingDays}
            onChange={this.handleChange("meetingDays")}
          >
            {meetingDaysOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-meeting-times"
            select
            label="Meeting Times"
            className={classes.textField}
            margin="normal"
            value={this.state.meetingTimes}
            onChange={this.handleChange("meetingTimes")}
          >
            {meetingTimesDaysOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-course-career"
            select
            label="Course Career"
            className={classes.textField}
            margin="normal"
            value={this.state.courseCareer}
            onChange={this.handleChange("courseCareer")}
          >
            {courseCareerOpts.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            variant="raised"
            color="primary"
            className={classes.button}
          >
            Search
          </Button>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);