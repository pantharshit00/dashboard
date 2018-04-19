import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from 'material-ui/IconButton'
import classNames from 'classnames'

export default class Appbar extends Component {
  render() {
    const { classes, toggleDrawer, open } = this.props
    return (
      <AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
