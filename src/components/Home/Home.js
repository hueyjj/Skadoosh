import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Header from "./Header";
import Footer from "./Footer";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 2,
  }),
});

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Paper
          className={this.props.classes.root}
          elevation={4}
        >
          <Typography
            variant="headline"
            component="h3"
          >
            What is Skadoosh?
          </Typography>
          <Typography component="p">
            Skadoosh is a web application built on top of the UCSC's class searching API with support for tracking major and GE requirements, scheduling classes, login system, class and professor rating system with user reviews.

            Skadoosh's foremost purpose is to help the user build their schedule faster and view it visually better than the current way in UCSC's portal.
          </Typography>
        </Paper>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);