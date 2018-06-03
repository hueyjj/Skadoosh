import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import PropTypes from "prop-types";
import classNames from 'classnames';

// Hack to load old jss from material-ui first for dashboard
// Then, actual jss from new material-ui overwrites the old jss.
import Dashboard from "../material-dashboard-react/material-dashboard-react-html-v1.2.0/src/views/Dashboard/Dashboard";

import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

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

// Part of hack
let dashboard = <Dashboard />;

const styles = theme => ({
  main: {
    flexGrow: 1,
    zIndex: 1,
    // overflow: 'hidden',
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
      settings,
      match,
    } = this.props;
    const {
      history,
      drawer,
      showDrawer,
      hideDrawer,
      fetchLogout,
    } = this.props;
    const {
      isDrawerOpen,
    } = drawer;

    return (
      <MuiThemeProvider
        theme={settings.theme}
      >
        <div className={classes.fullHeight}>
          <Header
            history={history}
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
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  drawer: PropTypes.shape({
    isDrawerOpen: PropTypes.bool.isRequired,
  }).isRequired,
  showDrawer: PropTypes.func.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  fetchLogout: PropTypes.func.isRequired,
}

export default withStyles(styles)(Root);