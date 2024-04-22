import React from 'react';
import {
  AppBar, Toolbar, IconButton,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { logo } from '../../assets/constants';
import Searchbar from '../Searchbar/Searchbar';

import './style.css';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Searchbar />
        {/* Add other navigation links or components here */}
        <Link to="/jobs/new" style={{ display: 'flex', alignItems: 'center' }}>
          <AddCircleOutlineIcon fontSize="large" style={{ color: 'white' }} />
          <Typography variant="subtitle1" className="new-job-text">Post new job</Typography>
        </Link>
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
