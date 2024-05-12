import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Menu, MenuItem,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { logo } from '../../assets/constants';
import Searchbar from '../Searchbar/Searchbar';

import './style.css';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Searchbar />
        <Link to="/jobs/new" style={{ display: 'flex', alignItems: 'center' }}>
          <AddCircleOutlineIcon fontSize="large" style={{ color: 'white' }} />
          <Typography variant="subtitle1" className="new-job-text">Post new job</Typography>
        </Link>
        <Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            style={{
              borderRadius: '50%', // Ensure the button is circular
              padding: '5px', // Adjust padding to increase clickable area
              cursor: 'pointer', // Apply hand cursor
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem component={Link} to="/jobs/search" onClick={handleMenuClose}>Search Jobs</MenuItem>
            <MenuItem component={Link} to="/users/search" onClick={handleMenuClose}>Search Users</MenuItem>
            <MenuItem component={Link} to="/jobs/new" onClick={handleMenuClose}>Post Job</MenuItem>
            <MenuItem component={Link} to="/my/profile" onClick={handleMenuClose}>My Profile</MenuItem>
            <MenuItem component={Link} to="/my/messages" onClick={handleMenuClose}>Chats</MenuItem>
            <MenuItem component={Link} to="/my/jobs" onClick={handleMenuClose}>My Jobs</MenuItem>
            <MenuItem component={Link} to="/my/reviews" onClick={handleMenuClose}>My Reviews</MenuItem>
            <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem component={Link} to="/signout" onClick={handleMenuClose}>Sign Out</MenuItem>

            {/* Add more menu items as needed */}
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
