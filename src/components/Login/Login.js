import React, { Component } from 'react';

import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

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

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

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

export default withStyles(styles)(Login);