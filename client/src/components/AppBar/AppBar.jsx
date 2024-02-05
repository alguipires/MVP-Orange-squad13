import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import NotificationBell from './NotificationBell';
import Logo from './Logo';
import AvatarIcon from '../AvatarIcon';
import './AppBar.css';
import { useNavigate } from 'react-router-dom';
import useStore from '../../zustand/store';



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [ updateDiscoveryPage ] = useStore((state) => [ state.updateDiscoveryPage ]); 

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleMyProjectsButton = () => {
    updateDiscoveryPage(false);
    navigate('/portifolio');
  };

  const discoveryButton = () => {
    updateDiscoveryPage(true)
    navigate('/discovery');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#113' }}>
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          {/* //buttons desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Logo />

            <Button
              onClick={handleMyProjectsButton}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Meus Projetos
            </Button>

            <Button
              onClick={discoveryButton}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Descobrir
            </Button>
          </Box>

          {/* //buttons mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Button
                onClick={handleMyProjectsButton}
                sx={{ my: 2, mx: 1, color: 'black', display: 'block' }}
              >
                Meus Projetos
              </Button>

              <Button
                onClick={discoveryButton}
                sx={{ my: 2, mx: 1, color: 'black', display: 'block' }}
              >
                Descobrir
              </Button>
            </Menu>
            <Logo />
          </Box>

          <Stack direction="row" spacing={1}>
            <AvatarIcon nameUser="Orange" uriImageUser="/assets/" />
            <NotificationBell value={0} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
