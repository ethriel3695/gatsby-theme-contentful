import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import HeaderButton from './headerButton';

const pageStyles = {
  foregroundColor: {
    color: '#7b1bb3',
  },
};

const UserMenu = props => (
  <div>
    <HeaderButton
      aria-owns={props.open ? 'menu-appbar' : undefined}
      aria-haspopup="true"
      onClick={props.handleMenu}
    >
      <FontAwesomeIcon icon={faUserCircle} style={pageStyles.foregroundColor} />
    </HeaderButton>
    <Menu
      id="menu-appbar"
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.open}
      onClose={props.handleClose}
    >
      <MenuItem onClick={props.handleClose}>Profile</MenuItem>
      <MenuItem onClick={props.handleClose}>My account</MenuItem>
    </Menu>
  </div>
);

export default UserMenu;
