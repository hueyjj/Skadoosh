import React from 'react';
import { connect } from 'react-redux';

import * as SRD from "storm-react-diagrams"
import "storm-react-diagrams/dist/style.min.css";

import RequirementChart from '../components/main/RequirementChart';

const RequirementChartContainer = props => <RequirementChart {...props} />;

const createEngine = () => {
  let engine = new SRD.DiagramEngine();
  engine.installDefaultFactories();

  let model = new SRD.DiagramModel();

  let node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
  let port1 = node1.addOutPort("Out");
  node1.setPosition(100, 100);

  let node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
  let port2 = node2.addInPort("In");
  node2.setPosition(400, 100);

  let link1 = port1.link(port2);
  model.addAll(node1, node2, link1);

  engine.setDiagramModel(model);

  return engine;
}

const mapStateToProps = (state) => {
  //   const { } = state;
  let engine = createEngine();

  return {
    engine: engine,
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RequirementChartContainer);