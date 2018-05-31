import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import red from "@material-ui/core/colors/red";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  fullWidth: {
    width: "100%",
  },
  cssLabel: {
    '&$cssFocused': {
      color: red[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: red[500],
    },
  },
});

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div
          className={classes.container}
        >
          <FormControl className={classNames(
            classes.margin,
            classes.fullWidth,
          )}>
            <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Search (e.g cmps 115, Richard Jullig, software engineering)
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              id="custom-css-input"
              onChange={this.handleChange("searchTerm")}
            />
          </FormControl>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewForm);