import React from 'react';
import { connect } from 'react-redux';

import "storm-react-diagrams/dist/style.min.css";

import RequirementChart from '../components/main/RequirementChart';
import {
  newStormEngine,
  addStormDiagramModel,
  newCMPSModel,
} from "../utils/stormModels";

const RequirementChartContainer = props => <RequirementChart {...props} />;

const mapStateToProps = (state) => {
  //   const { } = state;
  let engine = newStormEngine();
  addStormDiagramModel(engine, newCMPSModel());

  return {
    engine: engine,
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RequirementChartContainer);