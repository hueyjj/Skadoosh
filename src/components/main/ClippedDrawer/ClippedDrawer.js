import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import CalendarIcon from '@material-ui/icons/DateRange';
import ChartIcon from '@material-ui/icons/InsertChart';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/ChatBubbleOutline';
import ReviewIcon from "@material-ui/icons/RateReview";
import SettingsIcon from '@material-ui/icons/Settings';
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
  iconRotate: {
    '&:hover': {
      color: blue[200],
      transform: "rotate(90deg)",
      transition: "all 0.3s ease",
    },
  },
  iconHoverRed: {
    "&:hover": {
      color: red[200],
    }
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
              to="/main/chat"
            >
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/main/review"
            >
              <ListItemIcon>
                <ReviewIcon />
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
            <ListItem
              button
              color="primary"
              component={Link}
              to="/main/settings"
            >
              <ListItemIcon
                className={classNames(classes.iconRotate)}
              >
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/main/report"
            >
              <ListItemIcon
                className={classNames(classes.iconHoverRed)}
              >
                <ReportIcon />
              </ListItemIcon>
            </ListItem>
          </div>
        </List>
      </Drawer >
    );
  }
}
export default withStyles(styles)(ClippedDrawer);