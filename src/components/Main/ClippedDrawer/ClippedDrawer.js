import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import classNames from 'classnames';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import DraftsIcon from '@material-ui/icons/Drafts';
import CalendarIcon from '@material-ui/icons/DateRange';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    width: 64,
  },
  hide: {
    display: "none",
  },
  toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends Component {
  //TODO classes.hide should depend on Drawer's open property, handled by redux
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="persistent"
        open={true}
        classes={{
          paper: classNames(classes.drawerPaper),
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <div>
            <ListItem
              button
              component={Link}
              to="/main"
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/main/foo"
            >
              <ListItemIcon>
                <CalendarIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
            </ListItem>
          </div>
        </List>
      </Drawer>
    );
  }
}
export default withStyles(styles)(ClippedDrawer);