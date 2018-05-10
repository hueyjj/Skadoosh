import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
});

class Review extends Component {
  render() {
    return (
      <div>
        Reviews here
      </div>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);