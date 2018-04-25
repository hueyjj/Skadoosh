import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import classNames from 'classnames';

import "../styles/Root.css";

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Header from "./Main/Header";
import ClippedDrawer from "./Main/ClippedDrawer";
import HomeContainer from "../containers/HomeContainer";
import SignupContainer from "../containers/SignupContainer";
import CalendarContainer from "../containers/CalendarContainer";
import RequirementChartContainer from "../containers/RequirementChartContainer";
import SearchContainer from "../containers/SearchContainer";

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
    marginTop: theme.spacing.unit * 7,
    marginBottom: theme.spacing.unit * 7,
  },
  contentShift: {
    marginLeft: theme.spacing.unit * 9,
  },
  fullHeight: {
    height: "100%",
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
    const {
      classes,
      match,
    } = this.props;
    const {
      drawer,
      showDrawer,
      hideDrawer,
    } = this.props;
    const {
      isDrawerOpen,
    } = drawer;

    return (
      <div className={classes.fullHeight}>
        <Header
          drawer={drawer}
          showDrawer={showDrawer}
          hideDrawer={hideDrawer}
        />
        <div className={classNames(classes.main, classes.fullHeight)}>
          <ClippedDrawer
            drawer={drawer}
          />
          <div
            className={classNames(
              classes.content,
              isDrawerOpen ? classes.contentShift : null
            )}
          >
            <Switch>
              <Route path={`${match.url}/calendar`} component={CalendarContainer} />
              <Route path={`${match.url}/requirement`} component={RequirementChartContainer} />
              <Route path={`${match.url}/search`} component={SearchContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Root);