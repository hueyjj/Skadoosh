import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import red from "@material-ui/core/colors/red";
import { withStyles } from '@material-ui/core/styles';


import ReviewForm from "./ReviewForm";
import ReviewResult from "./ReviewResult";

const styles = theme => ({
});

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      subject: "",
      term: "",
      courseTitle: "",
      rating: "",
      comment: "",
    };

    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleOpenForm(e) {
    this.setState({ open: true });
  }

  handleCloseForm(e) {
    this.setState({ open: false });
  }

  handleSubmit(e) {
    const { fetchCreateReview } = this.props;

    fetchCreateReview({
      subject: this.state.subject,
      term: this.state.term,
      courseTitle: this.state.courseTitle,
      rating: this.state.rating,
      comment: this.state.comment,
    }, (error) => {
      if (error) {
        throw error;
      }
    });

    // Reset state
    this.setState({ 
      open: false,
      subject: "",
      term: "",
      courseTitle: "",
      rating: "",
      comment: "",
    });
  }

  render() {
    const {
      classes,
      review,
    } = this.props;
    const {
      fetchReviews,
    } = this.props;

    return (
      <div>
        <Button
          onClick={this.handleOpenForm}
        >
          Add a review
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleCloseForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please specify the subject, course title, and term. Then add your comment.

              Example: CMPS, Software Engineering, and Spring 2018.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Subject"
              type="text"
              placeholder="CMPS"
              fullWidth
              onChange={this.handleChange("subject")}
            />
            <TextField
              margin="dense"
              id="name"
              label="Term"
              type="text"
              placeholder="Spring 2018"
              fullWidth
              onChange={this.handleChange("term")}
            />
            <TextField
              margin="dense"
              id="name"
              label="Course Title"
              type="text"
              placeholder="Software Engineering"
              fullWidth
              onChange={this.handleChange("courseTitle")}
            />
            <Input
              id="adornment-rating"
              value={this.state.rating}
              onChange={this.handleChange('rating')}
              endAdornment={<InputAdornment position="end">out of 10 ★</InputAdornment>}
              inputProps={{
                'aria-label': 'Rating',
              }}
            />
            <TextField
              id="multiline-static"
              label="Review"
              multiline
              rows="10"
              placeholder="Type your review here"
              className={classes.textFieldParagraph}
              margin="normal"
              fullWidth
              onChange={this.handleChange("comment")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>

        <ReviewForm
          fetchReviews={fetchReviews}
        />
        <ReviewResult
          review={review}
        />
      </div>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);