import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  column: {
    flexDirection: "column",
  },
  paper: {
    display: "inline-block",
    margin: "auto",
    marginTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 8,
    minWidth: 500,
    minHeight: 500,
  }
});

class Search extends Component {
  constructor(props) {
    super(props);

    // this._handleFlex = this._handleFlex.bind(this);
  }

  componentDidMount() {
  }

  // _handleFlex() {
  //   const { classes } = this.props;
  //   console.log("called");
  //   if (this.container && this.container.offsetWidth < 900) {
  //     console.log("less than 900");
  //     return classes.column;
  //   } 
  // }

  render() {
    const { classes } = this.props;

    return (
      <div
        className={classNames(
          classes.root,
          // this._handleFlex(),
        )}
        ref={input => { this.container = input }}
      >
        <Paper
          elevation={4}
          className={classes.paper}
        >
        </Paper>
        <Paper
          elevation={4}
          className={classes.paper}
        >
        </Paper>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);