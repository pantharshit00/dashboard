import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Appbar from '../Appbar'
import Drawer from '../Drawer'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    'font-family': 'Roboto, sans-serif'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: `${drawerWidth}px !important`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    marginLeft: '80px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
})

class Layout extends Component {
  state = {
    open: false
  }

  toggleDrawer = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Appbar classes={classes} toggleDrawer={this.toggleDrawer} open={this.state.open} />
        <Drawer classes={classes} toggleDrawer={this.toggleDrawer} open={this.state.open} />
        <main className={classNames(classes.content, this.state.open && classes.appBarShift)}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
