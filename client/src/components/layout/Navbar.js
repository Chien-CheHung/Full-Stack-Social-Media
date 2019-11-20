import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "#1A84F4"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  title: {
    flexGrow: 1,
    color: "inherit"
  }
}));

const Navbar = ({
  profile: { profile },
  auth: { isAuthenticated, loading },
  logout
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const authLinks = (
    <Fragment>
      <Button color='inherit' component={Link} to='/profiles'>
        發現
      </Button>
      <Button color='inherit' component={Link} to='/posts'>
        貼文
      </Button>
      <Button color='inherit' component={Link} to='/dashboard'>
        個人
      </Button>
      <Button color='inherit' onClick={logout} component={Link} to='/'>
        登出
      </Button>
    </Fragment>
  );

  const authDrawers = (
    <Fragment>
      <ListItem
        component={Link}
        to='/profiles'
        onClick={handleDrawerClose}
        style={{ color: "#818181" }}
      >
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary='發現' />
      </ListItem>
      <ListItem
        component={Link}
        to='/posts'
        onClick={handleDrawerClose}
        style={{ color: "#818181" }}
      >
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary='貼文' />
      </ListItem>
      <ListItem
        component={Link}
        to='/dashboard'
        onClick={handleDrawerClose}
        style={{ color: "#818181" }}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary='個人' />
      </ListItem>
      <ListItem
        component={Link}
        to='/'
        onClick={() => {
          handleDrawerClose();
          logout();
        }}
        style={{ color: "#7D7D7D" }}
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='登出' />
      </ListItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button color='inherit' component={Link} to='/register'>
        註冊
      </Button>
      <Button color='inherit' component={Link} to='/login'>
        登入
      </Button>
    </Fragment>
  );

  const guestDrawers = (
    <Fragment>
      <ListItem
        component={Link}
        to='/register'
        onClick={handleDrawerClose}
        style={{ color: "#818181" }}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary='註冊' />
      </ListItem>
      <ListItem
        component={Link}
        to='/login'
        onClick={() => {
          handleDrawerClose();
          logout();
        }}
        style={{ color: "#7D7D7D" }}
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='登入' />
      </ListItem>
    </Fragment>
  );

  const authNoProfileLinks = (
    <Fragment>
      <Button color='inherit' component={Link} to='/dashboard'>
        個人
      </Button>
      <Button color='inherit' onClick={logout} component={Link} to='/'>
        登出
      </Button>
    </Fragment>
  );

  const authNoProfileDrawers = (
    <Fragment>
      <ListItem
        component={Link}
        to='/dashboard'
        onClick={handleDrawerClose}
        style={{ color: "#818181" }}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary='個人' />
      </ListItem>
      <ListItem
        component={Link}
        to='/'
        onClick={() => {
          handleDrawerClose();
          logout();
        }}
        style={{ color: "#7D7D7D" }}
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='登出' />
      </ListItem>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
          >
            POPO文
          </Typography>

          {
            <Fragment>
              {isAuthenticated
                ? profile
                  ? authLinks
                  : authNoProfileLinks
                : guestLinks}
            </Fragment>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            <Fragment>
              {isAuthenticated
                ? profile
                  ? authDrawers
                  : authNoProfileDrawers
                : guestDrawers}
            </Fragment>
          }
        </List>
      </Drawer>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { logout })(Navbar);
