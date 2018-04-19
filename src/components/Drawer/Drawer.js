import React, { Component } from 'react'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChartIcon from '@material-ui/icons/Assessment'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'

export default class DrawerImpl extends Component {
  render() {
    const { classes, toggleDrawer, open } = this.props
    return (
      <Drawer
        variant="permanent"
        classes={{ paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose) }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ChartIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
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
        </List>
        <Divider />
        <List />
      </Drawer>
    )
  }
}
