import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import SearchResult from "./SearchResult";

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    width: 500,
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
    display: "block",
    margin: "auto",
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2,
    minWidth: 350,
  },
  scroll: {
    overflow: "scroll",
  },
});

class SearchDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  componentDidMount() {
  }

  render() {
    const {
      classes,
      isOpen,
      handleClose,
    } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
        >
          New Review
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please specify the subject, course title, and term. Then add your comment.

            Example: CMPS, Software Engineering, and Spring 2018.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SearchDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchDialog);