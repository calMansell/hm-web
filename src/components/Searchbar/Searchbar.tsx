import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { InputAdornment } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { locations } from '../../assets/locations';

function Searchbar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [location, setLocation] = useState<string | null>('');
  const navigate = useNavigate();

  const handleOnSearch = () => {
    let url = 'jobs/search';

    if (searchValue && location) {
      url = url.concat(`?keyword=${searchValue}`).replace(' ', '+').concat(`&location=${location}`).trim();
    } else {
      if (searchValue) {
        url = url.concat(`?keyword=${searchValue}`).replace(' ', '+').trim();
      }
      if (location) {
        url = url.concat(`?location=${location}`).trim();
      }
    }

    setSearchValue('');
    navigate(url);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleOnSearch();
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        borderRadius: 20,
        margin: '10px 0px',
        pl: 3,
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%', // Adjusted width for responsiveness
      }}
    >
      <SearchIcon sx={{ paddingTop: '6px', paddingBottom: '6px' }} />
      {' '}
      {/* Adjusted padding */}
      <input
        placeholder="Search..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%', // Adjusted width for responsiveness
          height: '40px', // Adjusted height for better alignment
          fontSize: '1.2rem',
          padding: '8px', // Added padding for better spacing
          marginRight: '8px', // Added margin for spacing
        }}
        className="search-bar"
      />

      <Autocomplete
        disablePortal
        options={locations}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
              borderLeft: '3px solid black',
              borderRadius: 0,
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
              borderLeft: '3px solid black',
              borderRadius: 0,
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
              borderLeft: '3px solid black',
              borderRadius: 0,
            },
          },
        }}
        onChange={(event, value) => setLocation(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Where?"
            InputProps={{
              ...params.InputProps,
              style: { fontSize: '1.2rem' },
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <IconButton type="submit" sx={{ p: '10px', color: '#000201' }} onClick={handleOnSearch}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
