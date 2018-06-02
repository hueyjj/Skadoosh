import React from 'react';
import { connect } from 'react-redux';

import "storm-react-diagrams/dist/style.min.css";

import {
  newStormEngine,
} from "../utils/stormModels";

import {
  setSelectedCmpsCourse,
} from "../actions/DiagramActions";

import RequirementChart from '../components/main/RequirementChart';

const RequirementChartContainer = props => <RequirementChart {...props} />;

const mapStateToProps = (state) => {
  const { 
    diagram,
  } = state;

  let engine = newStormEngine();

  return {
    engine,
    diagram,
  }
};

const mapDispatchToProps = {
  setSelectedCmpsCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequirementChartContainer);