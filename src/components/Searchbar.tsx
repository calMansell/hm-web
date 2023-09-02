import {
  IconButton, Paper,
} from '@mui/material';
import React from 'react';
import { Search } from '@mui/icons-material';

function Searchbar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      placeholder="Search..."
      sx={{
        borderRadius: 20, border: '1px solid #3E8D4D', pl: 2, boxShadow: 'none', mr: { sm: 5 },
      }}
    >
      <input className="search-bar" value="" onChange={() => {}} style={{ border: 'none' }} />
      <IconButton type="submit" sx={{ p: '10px', color: '#3E8D4D' }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
