import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Header from "./Main/Header";
import ClippedDrawer from "./Main/ClippedDrawer";
import HomeContainer from "../containers/HomeContainer";
import SignupContainer from "../containers/SignupContainer";
import CalendarContainer from "../containers/CalendarContainer";

const styles = theme => ({
  main: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  contentShift: {
    marginTop: theme.spacing.unit * 7,
    marginLeft: 64,
  },
  toolbar: theme.mixins.toolbar,
});

const noStyles = {
  calendar: {
    minHeight: 500,
    margin: 16,
  },
}

class Root extends Component {
  render() {
    const { classes, match } = this.props;

    return (
      <div>
        <Header />
        <div class={classes.main}>
          <ClippedDrawer />
          <div class={classes.contentShift}>
            <Switch>
              <Route path={`${match.url}/foo`} component={CalendarContainer} />
              <Route path="/boo" component={SignupContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Root);