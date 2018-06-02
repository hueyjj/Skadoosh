import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
} from "storm-react-diagrams";

export const newStormEngine = () => {
  let engine = new DiagramEngine();
  engine.installDefaultFactories();

  return engine;
};

export const addStormDiagramModel = (engine, model) => {
  engine.setDiagramModel(model);
  return engine;
};

export const newCMPSModel = () => {
  let model = new DiagramModel();

  let nodeCmps5j = new DefaultNodeModel("CMPS 5J", "grey");
  let portCmps5j = nodeCmps5j.addOutPort("Intro to Prog: Java");
  nodeCmps5j.setPosition(300, 100);

  let nodeCmps11 = new DefaultNodeModel("CMPS 11", "grey");
  let portCmps11 = nodeCmps11.addInPort("Intermediate Programming");
  nodeCmps11.setPosition(300, 200);

  let nodeCmps12a = new DefaultNodeModel("CMPS 12A/L", "grey");
  let portCmps12a = nodeCmps12a.addInPort("Intro to Prog. (Accelerated)");
  nodeCmps12a.setPosition(100, 150);

  let nodeCmpe13 = new DefaultNodeModel("CMPE 13/L", "grey");
  let portCmpe13 = nodeCmpe13.addInPort("Computer Systems and C Programming");
  nodeCmpe13.setPosition(500, 150);

  let nodeCmps12b = new DefaultNodeModel("CMPS 12B/M", "grey");
  let portCmps12b = nodeCmps12b.addInPort("Data Structures");
  nodeCmps12b.setPosition(800, 150);

  let nodeCmps13h = new DefaultNodeModel("CMPS 13H/L", "grey");
  let portCmps13h = nodeCmps13h.addInPort("Intro to Prog. & Data Structures (Honors)");
  nodeCmps13h.setPosition(950, 150);

  let nodeMath19a = new DefaultNodeModel("MATH 19A or 20A", "grey");
  let portMath19a = nodeMath19a.addInPort("Calculus");
  nodeMath19a.setPosition(50, 300);

  let nodeMath19b = new DefaultNodeModel("MATH 19B or 20B", "grey");
  let portMath19b = nodeMath19b.addInPort("Calculus");
  nodeMath19b.setPosition(200, 300);

  let nodeMath23a = new DefaultNodeModel("MATH 23A", "grey");
  let portMath23a = nodeMath23a.addInPort("Multivariable Calculus");
  nodeMath23a.setPosition(350, 300);

  let nodeCmpe16 = new DefaultNodeModel("CMPE 16", "grey");
  let portCmpe16 = nodeCmpe16.addInPort("Discrete Math");
  nodeCmpe16.setPosition(50, 400);

  let nodeAms10 = new DefaultNodeModel("AMS 10 or Math 21", "grey");
  let portAms10 = nodeAms10.addInPort("Engr Math Methods I or Linear Algebra");
  nodeAms10.setPosition(280, 400);

  let nodeCmpe12 = new DefaultNodeModel("CMPE 12/L", "grey");
  let portCmpe12 = nodeCmpe12.addInPort("Computer Systems & Assembly Language");
  nodeCmpe12.setPosition(50, 500);

  let nodeCmpe110 = new DefaultNodeModel("CMPE 110", "grey");
  let portCmpe110 = nodeCmpe110.addInPort("Computer Architecture");
  nodeCmpe110.setPosition(50, 600);

  let nodeCmps101 = new DefaultNodeModel("CMPS 101", "grey");
  let portCmps101 = nodeCmps101.addInPort("Abstract Data Types");
  nodeCmps101.setPosition(300, 600);

  let nodeCmps111 = new DefaultNodeModel("CMPS 111", "grey");
  let portCmps111 = nodeCmps111.addInPort("Operating Systems");
  nodeCmps111.setPosition(50, 800);

  let nodeCmps102 = new DefaultNodeModel("CMPS 102", "grey");
  let portCmps102 = nodeCmps102.addInPort("Analysis of Algorithms");
  nodeCmps102.setPosition(250, 800);

  let nodeCmps112 = new DefaultNodeModel("CMPS 112", "grey");
  let portCmps112 = nodeCmps112.addInPort("Comparative Prog. Languages");
  nodeCmps112.setPosition(450, 800);

  let nodeCmps130 = new DefaultNodeModel("CMPS 130", "grey");
  let portCmps130 = nodeCmps130.addInPort("Computational Models (recommended) or Upper Division (CMPS Elective)");
  nodeCmps130.setPosition(700, 800);

  let nodeCmpe107 = new DefaultNodeModel("CMPE 107 or AMS 131", "grey");
  let portCmpe107 = nodeCmpe107.addInPort("Probability and Statistics or Intro to Probability Theory");
  nodeCmpe107.setPosition(1000, 800);

  let nodeElectiveDc = new DefaultNodeModel("Upper Division ELECTIVE (DC)", "grey");
  let portElectiveDc = nodeElectiveDc.addInPort("CMPS 115, 132W, 180W, 185, 195 or CMPE 185.");
  nodeElectiveDc.setPosition(50, 1000);

  let nodeElectiveCapstone = new DefaultNodeModel("Upper Division ELECTIVE (Capstone)", "grey");
  let portElectiveCapstone = nodeElectiveCapstone.addInPort("CMPS 104B, 117, 161/L, 162/L, 165, 181, 183, 184, or CMPM 172");
  nodeElectiveCapstone.setPosition(300, 1000);

  let nodeElectiveCmps = new DefaultNodeModel("Upper Division ELECTIVE (CMPS ELECTIVE)", "grey");
  let portElectiveCmps = nodeElectiveCmps.addInPort("Any CMPS course with number 100 and above");
  nodeElectiveCmps.setPosition(550, 1000);

  let nodeElectiveAdditional1 = new DefaultNodeModel("Upper Division ADDITIONAL ELECTIVE)", "grey");
  let portElectiveAdditional1 = nodeElectiveAdditional1.addInPort("...");
  nodeElectiveAdditional1.setPosition(800, 1000);

  let nodeElectiveAdditional2 = new DefaultNodeModel("Upper Division ADDITIONAL ELECTIVE)", "grey");
  let portElectiveAdditional2 = nodeElectiveAdditional2.addInPort("...");
  nodeElectiveAdditional2.setPosition(1050, 1000);

  let link1 = portCmps5j.link(portCmps11);
  let link2 = portMath19a.link(portMath19b);
  let link3 = portMath19a.link(portCmpe16);
  let link4 = portMath19b.link(portMath23a);
  let link5 = portMath19b.link(portCmps101);
  let link6 = portCmpe16.link(portCmps101);
  let link7 = portAms10.link(portCmps101);
  let link8 = portCmpe12.link(portCmpe110);
  let link9 = portCmpe110.link(portCmps111);
  let link10 = portCmps101.link(portCmps111);
  let link11 = portCmps101.link(portCmps102);
  let link12 = portCmps101.link(portCmps112);

  let models = model.addAll(
    nodeCmps5j,
    nodeCmps11,
    nodeCmps12a,
    nodeCmpe13,
    nodeCmps12b,
    nodeCmps13h,
    nodeMath19a,
    nodeMath19b,
    nodeMath23a,
    nodeCmpe16,
    nodeAms10,
    nodeCmpe12,
    nodeCmpe110,
    nodeCmps101,
    nodeCmps111,
    nodeCmps102,
    nodeCmps112,
    nodeCmps130,
    nodeCmpe107,
    nodeElectiveDc,
    nodeElectiveCapstone,
    nodeElectiveCmps,
    nodeElectiveAdditional1,
    nodeElectiveAdditional2,
    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    link7,
    link8,
    link9,
    link10,
    link11,
    link12,
  );

  model.setLocked(true);

  return model;
};
