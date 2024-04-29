import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Menu, MenuItem,
  Typography,
  Avatar,
  Box,
  Paper,
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
          {/* <IconButton onClick={handleMenuOpen} style={{ padding: '0px', border: '2px solid lightgray' }}>
            <Avatar alt="User Avatar" src="https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2016/5/8/70c74753-1784-4910-adf9-1b888dc27d1c.jpg" style={{ width: '50px', height: 'auto' }} imgProps={{ style: { objectFit: 'contain' } }} />
          </IconButton> */}
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
