import React from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from '../styles';

const SideBarButton = withRouter(
  ({ icon, name, route, isActive, handleRoute }) => {
    const classes = useStyles();

    return (
      <ListItem
        button
        key={name}
        color="primary"
        className={
          isActive ? classes.activeSideBarButton : classes.sideBarButton
        }
        onClick={() => handleRoute(`${route}`)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    );
  },
);

SideBarButton.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
  icon: PropTypes.any,
  isActive: PropTypes.bool,
};

export default SideBarButton;
