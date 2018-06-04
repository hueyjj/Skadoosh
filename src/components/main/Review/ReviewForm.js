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

/**
 * Creates review form page
 * @class
 */
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

  /**
   * Sets the form data
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  /**
   * Submits the reviews search form
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
  handleSubmit(e) {
    e.preventDefault();

    const { fetchReviews } = this.props;

    fetchReviews(this.state.searchTerm, (error) => {
      if (error) {
        throw error;
      }
    })

    // Persist form data after submit
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
          )}
            fullWidth
          >
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