import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import red from "@material-ui/core/colors/red";
import { withStyles } from '@material-ui/core/styles';

import ReviewForm from "./ReviewForm";
import ReviewResult from "./ReviewResult";

const styles = theme => ({
});

class Review extends Component {
  render() {
    const {
      classes,
      review,
    } = this.props;

    return (
      <div>
        <ReviewForm />
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