import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import BigCalendar from 'react-big-calendar';

import "react-big-calendar/lib/css/react-big-calendar.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import moment from 'moment';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import HomeContainer from "../containers/HomeContainer";
import SignupContainer from "../containers/SignupContainer";
import Header from "./Main/Header";
import ClipDrawer from "./Main/ClipDrawer";

moment.locale("en");
BigCalendar.momentLocalizer(moment)

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const styles = theme => ({
  main: {
    flexGrow: 1,
    height: 430,
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
    const events = [
      {
        title: 'Today',
        start: new Date(2018, 3, 26, 7, 0, 0),
        end: new Date(2018, 3, 26, 10, 30, 0),
      },
    ];

    const { classes, match } = this.props;

    return (
      <div>
        <Header />
        <div class={classes.main}>
          <ClipDrawer />
          <BigCalendar
            style={noStyles.calendar}
            events={events}
            views={allViews}
            step={60}
          />
        </div>
        <Switch>
          <Route path={`${match.url}/foo`} component={HomeContainer} />
          <Route path="/boo" component={SignupContainer} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Root);