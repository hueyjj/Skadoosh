import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Dashboard from "../../../material-dashboard-react/material-dashboard-react-html-v1.2.0/src/views/Dashboard/Dashboard";

const styles = theme => ({
});

/**
 * Creates dashboard page
 * @class
 */
class Main extends Component {
  render() {
    return (
      <div>
        {/* FIXME This will output some error to console.log because we are mixing two different major version of material-ui (old and next) */}
        <Dashboard />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);