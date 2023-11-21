import { Stack } from '@mui/material';

import React from 'react';

import { Link } from 'react-router-dom';
import { logo } from '../assets/constants';
import Searchbar from './Searchbar/Searchbar';

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="centre"
      p={2}
      sx={{
        position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', zIndex: 1000,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Searchbar />
    </Stack>
  );
}

export default Navbar;
