import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import BigCalendar from 'react-big-calendar';

import "react-big-calendar/lib/css/react-big-calendar.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import moment from 'moment';

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import HomeContainer from "../containers/HomeContainer";
import SignupContainer from "../containers/SignupContainer";
import Header from "./Main/Header";

moment.locale("en");
BigCalendar.momentLocalizer(moment)

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const styles = {
  calendar: {
    minHeight: 500,
    margin: 16,
  },
};

class Root extends Component {
  render() {
    const events = [
      {
        title: 'Today',
        start: new Date(2018, 3, 26, 7, 0, 0),
        end: new Date(2018, 3, 26, 10, 30, 0),
      },
    ];

    const { match } = this.props;

    return (
      <div>
        <Header />
        <br />
        <BigCalendar
          style={styles.calendar}
          events={events}
          views={allViews}
          step={60}
        />
        <Switch>
          <Route path={`${match.url}/foo`} component={HomeContainer} />
          <Route path="/boo" component={SignupContainer} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Root);