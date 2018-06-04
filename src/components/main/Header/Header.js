import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';

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

/**
 * Creates a header for handling top bar actions such as 
 * manipulating the drawer, logging out, displaying profile name.
 * @class
 */
class Header extends Component {
  constructor(props) {
    super(props);

    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    const { fetchProfile } = this.props;

    fetchProfile((error) => {
      if (error) {
        throw error;
      }
    });
  }

  /**
   * Toggles the drawer
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
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

  /**
   * Logs the user out of current sessions and redirects to landind page.
   * @param {Event} e React SyntheticEvent (Default DOM event) object 
   */
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
    const {
      classes,
      profile,
      drawer,
    } = this.props;
    const { 
      isDrawerOpen 
    } = drawer;
    const {
      user,
    } = profile;

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
              {user.username}
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

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  drawer: PropTypes.shape({
    isDrawerOpen: PropTypes.bool.isRequired,
  }).isRequired,
  showDrawer: PropTypes.func.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  fetchLogout: PropTypes.func.isRequired,
  handleDrawer: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default withStyles(styles)(Header);