import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';

import SearchForm from "./SearchForm";
import SearchResult from './SearchResult';

const termTest = [
  {
    value: "2017Fall",
    label: "2017 Fall"
  },
  {
    value: "2018Winter",
    label: "2018 Winter"
  },
  {
    value: "2018Spring",
    label: "2018 Spring"
  },
  {
    value: "2018Fall",
    label: "2018 Fall"
  },
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
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
    const { classes, course } = this.props;
    const { fetchCourse } = this.props;

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
          <SearchForm
            fetchCourse={fetchCourse}
          />
        </Paper>
        <Paper
          elevation={4}
          className={classes.paper}
        >
          <SearchResult
            course={course}
          />
        </Paper>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);