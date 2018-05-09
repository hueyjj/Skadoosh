import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui/List';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

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
              <ListItem button>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="License" />
              </ListItem>
            </List>
            <List className={classes.list}>
              <ListItem button>
                <ListItemText primary="Github" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact Us" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </List>
        </Paper>
      </ div>
    );
  }
}

export default withStyles(styles)(Footer);