import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';

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
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              color="inherit"
              variant="title"
            >
              Skadoosh
            </Typography>
            <IconButton
              color="primary"
              className={classes.iconHover}
              component={Link}
              to="/profile"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              color="primary"
              className={classes.iconHover}
              component={Link}
              to="/settings"
            >
              <Settings />
            </IconButton>
            <Button
              className={classes.button}
              color="inherit"
              component={Link}
              to="/logout"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ div >
    );
  }
}

export default withStyles(styles)(Header);