import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';

import "react-big-calendar/lib/css/react-big-calendar.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import moment from 'moment';

import Button from 'material-ui/Button';

import Header from "./Main/Header";

moment.locale("en");
BigCalendar.momentLocalizer(moment)

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Root extends Component {
  render() {
    const events = [
      {
        title: 'Today',
        start: new Date(2018, 3, 26, 19, 30, 0),
        end: new Date(2018, 3, 27, 19, 30, 0),
      },
    ];

    return (
      <div>
        <Header />
        <BigCalendar
          style={{ minHeight: 500 }}
          events={events}
          views={allViews}
          step={30}
        />
      </div>
    );
  }
}

export default Root;