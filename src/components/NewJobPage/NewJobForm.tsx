import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

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
  // eslint-disable-next-line max-len
  const [currentLocation, setCurrentLocation] = useState<Coords>({ latitude: null, longitude: null });

  const handleLocationPermission = () => {
    // eslint-disable-next-line max-len
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setCurrentLocation({ latitude, longitude });
          console.log(latitude);
          console.log(currentLocation);
          fetch(`https://api.postcodes.io/postcodes?lon=${longitude}&lat=${latitude}`).then((res) => res.json()).then((data) => {
            setPostcode(data.result[0].postcode);
            console.log(data);
          });
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        },
      );
    }
  };

  return (
    <form>
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Region"
            variant="outlined"
            fullWidth
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
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
          {/* <p>{currentLocation}</p> */}
        </Grid>
      </Grid>
      <button type="button" onClick={onNext}>Next</button>
    </form>

  );
}

export default NewJobForm;
