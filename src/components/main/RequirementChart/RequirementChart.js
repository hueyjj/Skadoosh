import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import * as SRD from "storm-react-diagrams"

const styles = theme => ({
  canvas: {
    height: "100%",
    minHeight: 300,
    backgroundColor: "#3c3c3c!important",
    backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)",
    backgroundSize: "50px 50px",
  },
});

class RequirementChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      engine,
    } = this.props;

    return (
      <SRD.DiagramWidget
        className={classNames(
          classes.canvas,
        )}
        diagramEngine={engine}
      />
    );
  }
}

RequirementChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequirementChart);