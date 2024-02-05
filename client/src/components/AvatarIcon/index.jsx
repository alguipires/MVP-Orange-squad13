import React, { useContext } from "react";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useStore from "../../zustand/store";
import { AuthGoogleContext } from "../../contexts/authGoogle";

// porops nameUser e uriImageUser
function AvatarIcon(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [ currentUser ] = useStore((state) => [state.currentUser]);
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

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={props.nameUser} src= {currentUser.avatar ? currentUser.avatar : currentUser.photoURL }/>
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