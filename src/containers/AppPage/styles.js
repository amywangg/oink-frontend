import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 200;
export const useStyles = makeStyles((theme) => ({
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
