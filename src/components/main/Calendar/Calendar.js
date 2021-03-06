import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';

import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';

import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";
//import 'bootstrap/dist/css/bootstrap.min.css'

moment.locale("en");
BigCalendar.momentLocalizer(moment)

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const styles = theme => ({
});

const noStyles = {
  calendar: {
    minHeight: 500,
    margin: 16,
  },
}

/**
 * Creates calendar page
 * @class
 */
class Calendar extends Component {
  render() {
    const events = [
      {
        title: 'Today',
        start: new Date(2018, 3, 26, 7, 0, 0),
        end: new Date(2018, 3, 26, 10, 30, 0),
      },
    ];

    return (
      <BigCalendar
        style={noStyles.calendar}
        events={events}
        views={allViews}
        step={60}
      />
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);