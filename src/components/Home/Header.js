import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import IconButton from 'material-ui/IconButton';
import Home from '@material-ui/icons/Home';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 2,
  },
  title: {
    flex: 1,
    margin: theme.spacing.unit * 2,
    textDecoration: "none",
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[200],
      cursor: "pointer",
    },
  },
  button: {
    marginLeft: 20,
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color="default"
        >
          <Toolbar>
            <IconButton
              color="primary"
              className={classes.iconHover}
              component={Link}
              to="/"
            >
              <Home />
            </IconButton>
            <Typography
              className={classes.title}
              color="inherit"
              variant="title"
            >
              Skadoosh
            </Typography>
            <Button
              className={classes.button}
              component={Link}
              to="/login"
              color="inherit"
            >
              Login
            </Button>
            <Button
              className={classes.button}
              component={Link}
              to="/signup"
              color="inherit"
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </ div>
    );
  }
}

export default withStyles(styles)(Header);