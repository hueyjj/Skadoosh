import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Header from "./Header";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header>
        </Header>
        <Paper className={this.props.classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Home);