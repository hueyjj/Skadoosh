import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Header from "../Home/Header";

const styles = theme => ({
  root: {
  },
  form: {
    textAlign: "center",
  },
  paper: {
    display: "inline-block",
    margin: "auto",
    marginTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 8,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  centerButton: {
    textAlign: "right",
  },
  paddingTop: {
    paddingTop: theme.spacing.unit * 3,
  }
});

/**
 * Creates a login form page
 * @class
 */
class Login extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   * Track the email everytime it changes
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  /**
   * Track the password everytime it changes
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  /**
   * Submits the login form to the server and redirects the users to main page
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
  handleSubmit(e) {
    e.preventDefault();

    const { fetchLogin } = this.props;

    fetchLogin({
      email: this.state.email,
      password: this.state.password,
    }, (error) => {
      if (error) {
        throw error;
      }

      // Redirect user to main page
      this.props.history.push("/main");
    });

    this.setState({
      email: null,
      password: null
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <div
          className={classes.form}
        >
          <Paper
            elevation={4}
            className={classes.paper}
          >
            <Typography variant="headline" component="h3">
              Login
            </Typography>
            <form
              onSubmit={this.handleSubmit}
            >
              <div>
                <TextField
                  required
                  id="name"
                  label="Email"
                  placeholder="AdamSmith@ucsc.edu"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div>
                <TextField
                  required
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div
                className={classNames(
                  classes.centerButton,
                  classes.paddingTop,
                )}
              >
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  className={classes.button}
                >
                  Login
              </Button>
              </div>
            </form>
          </Paper>
        </div>
      </div >
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default withStyles(styles)(Login);