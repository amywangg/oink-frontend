import React from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import {
  Grid,
  CssBaseline,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import oinkIcon2 from "../../assets/oink-icon-2.png";
import oinkIcon from "../../assets/oink-icon.png";

import usePersistedState from "../../utils/PersistedState";
import { useStyles } from "./styles";
import Logout from "../Auth/Logout";

const AppPage = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = usePersistedState("drawer", false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <div className={classes.root}>
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
            <Grid container>
              <Grid item xs={4}>
                <img width={40} height={40} alt="oinkicon" src={oinkIcon}></img>
              </Grid>
              <Grid item xs={7}>
                {" "}
                <Typography variant="h4" style={{ color: "#fcaec7" }}>
                  <strong>Oink</strong>
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  style={{ marginTop: 7 }}
                  size="small"
                  onClick={handleDrawerClose}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </Grid>
            </Grid>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
              disableRipple
            >
              <img width={40} height={40} alt="oinkicon" src={oinkIcon2}></img>
            </IconButton>
          )}
        </div>
        <List>
          <ListItem
            className={
              location.pathname === "/"
                ? classes.activeSideBarButton
                : classes.sideBarButton
            }
            onClick={() => history.push("/")}
            button
            key="home"
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => history.push("/settings")}
            button
            key="settings"
            className={
              location.pathname === "/settings"
                ? classes.activeSideBarButton
                : classes.sideBarButton
            }
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>

        <div className={classes.footer}>
          <div className={open?classes.logoutOpen:classes.logout}>
            <Logout drawerOpen={open} />
          </div>
          {open?<div className={classes.circle1}></div>:null}
          {open?<div className={classes.circle2}></div>:null}
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  );
};

AppPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppPage;
