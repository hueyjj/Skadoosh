import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class Report extends Component {
  render() {
    return (
      <div>
        Report here
      </div>
    );
  }
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Report);