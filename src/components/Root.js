import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';

import "../styles/Root.css";

import Header from './main/Header';
import ClippedDrawer from "./main/ClippedDrawer";
import MainContainer from "../containers/MainContainer";
import CalendarContainer from "../containers/CalendarContainer";
import RequirementChartContainer from "../containers/RequirementChartContainer";
import ChatContainer from "../containers/ChatContainer";
import ReviewContainer from "../containers/ReviewContainer";
import SearchContainer from "../containers/SearchContainer";
import UserSettingsContainer from "../containers/UserSettingsContainer";
import ReportContainer from "../containers/ReportContainer";

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
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    marginTop: theme.spacing.unit * 7,
    marginBottom: theme.spacing.unit * 7,
    transition: "all 0.3s ease",
  },
  contentShift: {
    marginLeft: theme.spacing.unit * 9,
    transition: "all 0.3s ease",
  },
  fullHeight: {
    height: "100%",
  },
  toolbar: theme.mixins.toolbar,
});

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
      fetchLogout,
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
          fetchLogout={fetchLogout}
        />
        <div
          className={classNames(
            classes.main,
            classes.fullHeight
          )}
        >
          <ClippedDrawer
            drawer={drawer}
          />
          <div
            className={classNames(
              classes.content,
              isDrawerOpen ? classes.contentShift : null,
            )}
          >
            <Switch>
              <Route
                exact path={`${match.url}/`}
                component={MainContainer}
              />
              <Route
                path={`${match.url}/calendar`}
                component={CalendarContainer}
              />
              <Route
                path={`${match.url}/requirement`}
                component={RequirementChartContainer}
              />
              <Route
                path={`${match.url}/chat`}
                component={ChatContainer}
              />
              <Route
                path={`${match.url}/review`}
                component={ReviewContainer}
              />
              <Route
                path={`${match.url}/search`}
                component={SearchContainer}
              />
              <Route
                path={`${match.url}/settings`}
                component={UserSettingsContainer}
              />
              <Route
                path={`${match.url}/report`}
                component={ReportContainer}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Root);