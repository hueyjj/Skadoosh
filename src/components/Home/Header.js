import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import blue from 'material-ui/colors/blue';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    margin: theme.spacing.unit * 2,
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
            <Icon
              className={classes.iconHover}
              color="action"
              style={{ fontSize: 36 }}
            >
              home
            </Icon>
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
              Login
            </Button>
            <Button
              className={classes.button}
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