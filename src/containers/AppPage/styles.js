import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 200;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    paddingTop: 2,
    paddingLeft: 8,
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
  sideBarButton: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "left",
    height: "60px",
    borderLeft: "2px solid transparent",
  },
  activeSideBarButton: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "left",
    transition: "background-color 3s ease",
    backgroundColor: "#fcecf2",
    borderLeft: "3px solid #FFAEC8",
    height: "60px",
  },
  toolbar: {
    display: "relative",
    alignItems: "left",
    padding: theme.spacing(2, 2, 2, 2),
    ...theme.mixins.toolbar,
    backgroundColor: "#fdf6f8",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  circle1: {
    position: "absolute",
    left: -40,
    bottom: 120,
    height: 170,
    width: 170,
    borderRadius: "50%",
    backgroundColor: "#FFAEC8",
    zIndex: -100,
  },
  circle2: {
    position: "absolute",
    left: 30,
    bottom: 10,
    height: 170,
    width: 170,
    borderRadius: "50%",
    backgroundColor: "#F9DAE4",
    zIndex: -80,
  },
  logoutOpen: {
    position: "absolute",
    bottom: 65,
    left: 40,
    zIndex: -0,
  },
  logout: {
    position: "absolute",
    bottom: 65,
    left: 8,
    zIndex: -0,
  },
  footer: {
    position: "absolute",
    bottom: 10,
  },
  title: {
    fontSize: "15",
  },
}));
