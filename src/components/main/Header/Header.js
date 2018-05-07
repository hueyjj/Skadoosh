import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    textDecoration: "none",
  },
  iconHover: {
    '&:hover': {
      color: blue[200],
      transform: "rotate(90deg)",
      transition: "all 0.3s ease",
    },
  },
  button: {
    marginLeft: 20,
  },
  toolbar: {
    minHeight: theme.spacing.unit,
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleDrawer(e) {
    const { isDrawerOpen } = this.props.drawer;
    const {
      showDrawer,
      hideDrawer,
    } = this.props;

    if (isDrawerOpen) {
      hideDrawer();
    } else {
      showDrawer();
    }
  }

  handleLogout(e) {
    const { fetchLogout } = this.props;

    fetchLogout((error) => {
      if (error) {
        throw error;
      }

      this.props.history.push("/");
    })
  }

  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.props.drawer;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="default"
        >
          <Toolbar
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawer}
            >
              {isDrawerOpen ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              className={classes.title}
              color="inherit"
              variant="title"
            >
              Skadoosh
            </Typography>
            <Typography
              variant="button"
            >
              Email or real name or cruz id here?
            </Typography>
            <IconButton
              color="primary"
              component={Link}
              to="/profile"
            >
              <AccountCircleIcon />
            </IconButton>
            <Button
              color="inherit"
              onClick={this.handleLogout}
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