import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import './style.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { locations } from '../../assets/locations';

function Searchbar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [location, setLocation] = useState<string | null>('');

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        borderRadius: 20,
        border: '1px solid #3E8D4D',
        pl: 2,
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
      }}
    >
      <input
        placeholder="Search..."
        value={searchValue}
        // onChange={(event, value) => setSearchValue(value)}
        style={{ width: '100%' }}
        className="search-bar"
      />
      <div className="divider" />
      <Autocomplete
        disablePortal
        options={locations}
        sx={{ width: '100%' }}
        onChange={(event, value) => setLocation(value)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
      <IconButton type="submit" sx={{ p: '10px', color: '#3E8D4D' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
