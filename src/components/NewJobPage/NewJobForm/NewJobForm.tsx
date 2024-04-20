import React, { useState } from 'react';
import {
  TextField, Button, Grid, Typography,
} from '@mui/material';
import SkillInput from '../../SkillInput';
import './style.css';

interface Coords {
  latitude: number | null;
  longitude: number | null;
}

function NewJobForm({ onNext }: { onNext: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [subRegion, setSubRegion] = useState('');
  const [postcode, setPostcode] = useState('');
  const [currentLocation,
    setCurrentLocation] = useState<Coords>({ latitude: null, longitude: null });

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          fetch(`https://api.postcodes.io/postcodes?lon=${longitude}&lat=${latitude}`)
            .then((res) => res.json())
            .then((data) => {
              setPostcode(data.result[0].postcode);
            });
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
      );
    }
  };

  return (
    <form className="form-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Region"
            variant="outlined"
            fullWidth
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sub Region"
            variant="outlined"
            fullWidth
            value={subRegion}
            onChange={(e) => setSubRegion(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleLocationPermission}>
            Find Current Location
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="left">
            Skills:
          </Typography>
          <SkillInput />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#246632',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
            onClick={onNext}
          >
            Upload Images
          </Button>

        </Grid>
      </Grid>
    </form>
  );
}

export default NewJobForm;
