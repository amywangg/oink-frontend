import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import pink from "@material-ui/core/colors/pink";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 200;

// Color Palette
// Dark Pink: #FF3576
// Medium pink: #FF8FB3
// Lighter pink: #F9DAE4
// Sidebar pink: #FDF6F8
// Grey: #EEEEEE

// Circle: #FFAEC8
// Lighter circle: #F9DAE4

// Dark line: #AB4A78

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#fdf6f8",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#fdf6f8",
    color: "#b6b5b5",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#fdf6f8",
    color: "#b6b5b5",
    width: theme.spacing(8),
  },
  toolbar: {
    display: "relative",
    alignItems: "left",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    backgroundColor: "#fdf6f8",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  circle1: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    backgroundColor: "#EF6A6A",
  },
  circle2: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    backgroundColor: "#EF6A6A",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: pink[50],
      },
      secondary: {
        main: pink[100],
      },
    },
  });

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            {open ? (
              <div>
                <h1 style={{ color: "#fcaec7" }}>Oink</h1>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>
          <List>
            <ListItem button key="home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="home">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
          <div class="circle1"></div>
          <div class="circle2"></div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        ></main>
      </ThemeProvider>
    </div>
  );
}
