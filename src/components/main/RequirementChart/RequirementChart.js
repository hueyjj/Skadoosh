import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {
  newStormEngine,
  addStormDiagramModel,
  newCMPSModel,
} from "../../../utils/stormModels";

import "../../../styles/StormDiagram.css";

import {
  DiagramWidget,
} from "storm-react-diagrams"

import SearchDialog from "../Search/SearchDialog";

const styles = theme => ({
  canvas: {
    height: "100%",
    minHeight: 300,
    backgroundColor: "#3c3c3c!important",
    backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)",
    backgroundSize: "50px 50px",
  },
  container: {
    height: "100%",
  },
  margin: {
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
});

class RequirementChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      engine: null,
      searchDialogOpen: false,
    };

    this.newEngine = this.newEngine.bind(this);
    this.handleOpenSelectedCourse = this.handleOpenSelectedCourse.bind(this);
    this.createSearchDialog = this.createSearchDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount() {
    this.setState({
      engine: this.newEngine(),
    });
  }

  newEngine() {
    const {
      setSelectedCmpsCourse,
    } = this.props;

    let cmpsModel = newCMPSModel();
    let cmpsModels = cmpsModel.getNodes();
    Object.keys(cmpsModels).forEach((key) => {
      let node = cmpsModels[key];
      node.addListener({
        selectionChanged: (e) => {
          // Toggle colors. This works for some reason.
          if (node.isSelected()) {
            if (node.color == "grey") {
              node.color = "green";
            } else {
              node.color = "grey";
            }
            setSelectedCmpsCourse(node.name);
          }
        },
      })
    });

    let engine = newStormEngine();
    engine = addStormDiagramModel(engine, cmpsModel);
    return engine;
  }

  handleOpenSelectedCourse(e) {
    // Toggle state
    this.setState({ searchDialogOpen: !this.state.searchDialogOpen });
  }

  createSearchDialog() {
    if (!this.state.searchDialogOpen) {
      return null;
    }
    return (
      <SearchDialog
        isOpen={this.state.searchDialogOpen}
        handleClose={this.handleCloseDialog}
      />
    );
  }

  handleCloseDialog() {
    this.setState({ searchDialogOpen: false });
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div
        className={classNames(
          classes.container,
        )}
      >
        <Button
          className={classes.margin}
          variant="raised"
          onClick={() => this.state.engine.zoomToFit()}
        >
          Zoom to fit
        </Button>
        <Button
          className={classes.margin}
          variant="raised"
          onClick={this.handleOpenSelectedCourse}
        >
          View selected course
        </Button>
        {this.createSearchDialog()}

        {!this.state.engine ? null : (
          <DiagramWidget
            className={classNames(
              classes.canvas,
            )}
            diagramEngine={this.state.engine}
            inverseZoom
          />
        )}
      </div>
    );
  }
}

RequirementChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequirementChart);