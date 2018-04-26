import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import classNames from 'classnames';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles, spacing } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import DraftsIcon from '@material-ui/icons/Drafts';
import CalendarIcon from '@material-ui/icons/DateRange';
import ChartIcon from '@material-ui/icons/InsertChart';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

const drawerWidth = 72;

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    transition: "all 0.3s ease",
  },
  hide: {
    // display: "none",
    marginLeft: -drawerWidth,
    transition: "all 0.3s ease",
  },
  toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends Component {
  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.props.drawer;

    return (
      <Drawer
        variant="persistent"
        open={true}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            isDrawerOpen ? null : classes.hide,
          ),
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
              to="/main/calendar"
            >
              <ListItemIcon>
                <CalendarIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/main/requirement"
            >
              <ListItemIcon>
                <ChartIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/main/search"
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
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