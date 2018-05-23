import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';

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
  column: {
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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
          <form
            onSubmit={this.handleSubmit}
          >
            <div>
              <TextField
                id="select-term"
                select
                label="Term"
                className={classes.textField}
                margin="normal"
                onChange={this.handleTermChange}
              >
                {termTest.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange={this.handlePasswordChange}
              />
            </div>
            <div>
              <TextField
                id="confirm-password-input"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange={this.handleConfirmPasswordChange}
              />
            </div>
            <div
              className={classNames(
                classes.centerButton,
                classes.paddingTop
              )}
            >
              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.button}
              >
                Search
              </Button>
            </div>
          </form>
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