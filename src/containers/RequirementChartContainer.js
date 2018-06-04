import React from 'react';
import { connect } from 'react-redux';

import "storm-react-diagrams/dist/style.min.css";

import {
  setSelectedCourse,
} from "../actions/DiagramActions";

import RequirementChart from '../components/main/RequirementChart';

import {
  fetchCourse,
} from "../actions/ApiActions";

const RequirementChartContainer = props => <RequirementChart {...props} />;

const mapStateToProps = (state) => {
  const { 
    course,
    diagram,
  } = state;

  return {
    course,
    diagram,
  }
};

const mapDispatchToProps = {
  setSelectedCourse,
  fetchCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequirementChartContainer);