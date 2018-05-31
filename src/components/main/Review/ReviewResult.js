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

class ReviewResult extends Component {
  constructor(props) {
    super(props);

    this.createReviewList = this.createReviewList.bind(this);
  }

  componentDidMount() {
  }

  createReviewList() {
    const {
      review,
      classes,
    } = this.props;
    const {
      reviewResults,
    } = review;

    return reviewResults.map((result, index) => (
      <div
        className={classes.container}
        key={`${result.courseTitle}-${index}`}
      >
        <Typography
          variant="headline"
          component="h6"
        >
          {result.courseTitle}
        </Typography>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <Typography
            variant="headline"
            component="h6"
          >
            Course Title
            <Typography component="p">
              {result.courseTitle}
            </Typography>
          </Typography>
          <Typography
            variant="headline"
            component="h6"
          >
            Author
          </Typography>
          <Typography component="p">
            {result.author}
          </Typography>
          <Typography
            variant="headline"
            component="h6"
          >
            Date Created 
          </Typography>
          <Typography component="p">
            {result.created}
          </Typography>
          <Typography
            variant="headline"
            component="h6"
          >
            Date Modified
          </Typography>
          <Typography component="p">
            {result.modified}
          </Typography>
          <Typography
            variant="headline"
            component="h6"
          >
            Comment
          </Typography>
          <Typography component="p">
            {result.comment}
          </Typography>
        </Paper>
      </div>
    ));
  }

  render() {
    const {
      classes,
      review,
    } = this.props;
    const {
      reviewResults,
    } = review;

    const result = reviewResults.length === 0 ? null : (
      <div>
        {this.createReviewList()}
      </div>
    );

    return result;
  }
}

ReviewResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewResult);