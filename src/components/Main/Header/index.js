import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from '@material-ui/icons/Menu';
import blue from 'material-ui/colors/blue';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Home from '@material-ui/icons/Home';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    textDecoration: "none",
  },
  icon: {
  },
  iconHover: {
    '&:hover': {
      color: blue[200],
      cursor: "pointer",
    },
  },
  button: {
    marginLeft: 20,
  },
  toolbar: {
    minHeight: theme.spacing.unit * 7,
  }
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
          <Toolbar
            className={classes.toolbar}
          >
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
              color="inherit"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ div>
    );
  }
}

export default withStyles(styles)(Header);