import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../assets/constants';
import Searchbar from './Searchbar/Searchbar';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Searchbar />
        {/* Add other navigation links or components here */}
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
