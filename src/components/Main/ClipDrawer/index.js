import React, { Component } from 'react';

import classNames from 'classnames';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  hide: {
    display: "none",
  },
  toolbar: theme.mixins.toolbar,
});

class ClipDrawer extends Component {
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
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
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
              <ListItemText primary="All mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    );
  }
}
export default withStyles(styles)(ClipDrawer);