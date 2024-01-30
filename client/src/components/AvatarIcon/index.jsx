import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AuthGoogleContext } from '../../contexts/authGoogle';

// const settings = ['Perfil', 'Sair'];

// porops nameUser e uriImageUser
function AvatarIcon(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { signOutGoogle } = useContext(AuthGoogleContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    signOutGoogle();
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={props.nameUser} src="https://avatars.githubusercontent.com/u/91149014?v=4"/>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={logout} textAlign="center">
            Sair
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Perfil</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default AvatarIcon;
