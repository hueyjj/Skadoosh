import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {
  darkTheme,
  defaultTheme,
} from "../../../utils/themeUtils";

const styles = theme => ({
});

class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkTheme: false,
    };

    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme(e) {
    const {
      setTheme,
    } = this.props;

    if (this.state.isDarkTheme) {
      setTheme(defaultTheme());
    } else {
      setTheme(darkTheme());
    }
    console.log(this.state.isDarkTheme);

    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleTheme}
          color="primary"
        >
          {this.state.isDarkTheme
            ? "Change to white theme"
            : "Change to dark theme"}
        </Button>
      </div>
    );
  }
}

UserSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSettings);