import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
});

class Chat extends Component {
  render() {
    return (
      <div>
        Chat here
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);