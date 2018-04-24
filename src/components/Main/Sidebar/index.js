import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      </ div>
    );
  }
}

export default withStyles(styles)(Sidebar);