import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
    marginLeft: -drawerWidth, // Shift the drawer to the left when hidden
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
            <Tooltip id="tooltip-top" title="Home" placement="top">
              <ListItem
                button
                component={Link}
                to="/main"
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
            <Tooltip id="tooltip-top" title="Calendar" placement="top">
              <ListItem
                button
                component={Link}
                to="/main/calendar"
              >
                <ListItemIcon>
                  <CalendarIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
            <Tooltip id="tooltip-top" title="Chart" placement="top">
              <ListItem
                button
                component={Link}
                to="/main/requirement"
              >
                <ListItemIcon>
                  <ChartIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
            <Tooltip id="tooltip-top" title="Chat" placement="top">
              <ListItem
                button
                component={Link}
                to="/main/chat"
              >
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
            <Tooltip id="tooltip-top" title="Review" placement="top">
              <ListItem
                button
                component={Link}
                to="/main/review"
              >
                <ListItemIcon>
                  <ReviewIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
            <Tooltip id="tooltip-top" title="Search" placement="top">
              <ListItem
                button
                component={Link}
                to="/main/search"
              >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <Tooltip id="tooltip-top" title="Settings" placement="top">
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
            </Tooltip>
            <Tooltip id="tooltip-top" title="Report" placement="top">
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
            </Tooltip>
          </div>
        </List>
      </Drawer >
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  drawer: PropTypes.shape({
    isDrawerOpen: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ClippedDrawer);