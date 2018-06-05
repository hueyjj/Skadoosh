import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    flexGrow: 1,
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 2,
  }),
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  list: {
    margin: "auto",
  }
});

/**
 * Creates footer for homepage
 * @class
 */
class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper
          className={classes.root}
          elevation={4}
        >
          <List className={classes.row}>
            <List className={classes.list}>
              <ListItem
                button
                component={Link}
                to="/faq"
              >
                <ListItemText primary="FAQ" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/termsofservice"
              >
                <ListItemText primary="Terms of Service" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/privacypolicy"
              >
                <ListItemText primary="Privacy Policy" />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://github.com/hueyjj/Skadoosh/blob/master/LICENSE"
                target="_blank"
              >
                <ListItemText
                  primary="License"
                />
              </ListItem>
            </List>
            <List className={classes.list}>
              <ListItem
                button
                component="a"
                href="https://github.com/hueyjj/Skadoosh"
                target="_blank"
              >
                <ListItemText primary="Github" />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://github.com/hueyjj/Skadoosh/issues"
                target="_blank"
              >
                <ListItemText primary="Contact Us" />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://github.com/hueyjj/Skadoosh/blob/master/Information.md"
                target="_blank"
              >
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </List>
        </Paper>
      </ div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);