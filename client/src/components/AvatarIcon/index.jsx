import React, { useContext, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {getSavedUser} from '../../utils/sessionStorageLogin'
import useStore from "../../zustand/store";
import { AuthGoogleContext } from "../../contexts/authGoogle";

// porops nameUser e uriImageUser
function AvatarIcon(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [ user, updateUser ] = useStore((state) => [state.user, state.updateUser]);
  const { signOutGoogle } = useContext(AuthGoogleContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = () => {
    signOutGoogle();
  };

    useEffect(() => {
      const userSession = getSavedUser("@AuthFirebase:user")

      if (userSession) {
        updateUser(userSession)
      }
    }, [])

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={props.nameUser} src= {user.photoURL}/>
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
      
          <MenuItem onClick={logOut}>
            <Typography textAlign="center">Sair</Typography>
          </MenuItem>
      </Menu>
    </>
  );
}

export default AvatarIcon;