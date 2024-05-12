import {
  Typography, Rating, Box, Avatar, Paper, Button,
} from '@mui/material';

import React from 'react';
import TextField from '@mui/material/TextField';

import './style.css';

interface ReviewProps {
  isEditable: boolean;
  isNew: boolean;
}

export default function Review({ isEditable = false, isNew = true }: ReviewProps) {
  const [rating, setValue] = React.useState<number | null>(2);
  const [review, setReview] = React.useState<string>('');

  const updateReview = () => {
    console.log('Review updated');
  };

  return (
    <Box className="review-component">
      <Typography variant="h6" component="legend" style={{ padding: '3px', textAlign: 'left' }}>Title</Typography>
      <Box style={{ width: '85%' }}>
        <Box style={{
          display: 'flex', justifyContent: 'space-between', width: '85%', padding: '10px',
        }}
        >
          <Typography variant="h6" component="legend" style={{ padding: '3px' }}>
            {isEditable ? (isNew ? 'Write review' : 'Update review') : ''}
          </Typography>
          {isEditable && <Button variant="contained" color="primary" onClick={updateReview}>Send</Button>}
        </Box>

        <TextField
          className="review-body"
          fullWidth
          multiline
          rows={6}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          disabled={!isEditable}
        />
      </Box>

      <Box style={{
        width: '85%', display: 'flex', alignItems: 'center', paddingTop: '6px', justifyContent: 'space-between',
      }}
      >
        <Paper className="profile-section-review">
          <Box>
            <Avatar alt="User Avatar" src="https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2016/5/8/70c74753-1784-4910-adf9-1b888dc27d1c.jpg" imgProps={{ style: { objectFit: 'contain' } }} />
          </Box>
          <Typography variant="body1">Callam</Typography>
        </Paper>
        <Box style={{
          flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '6px',
        }}
        >
          <Typography component="legend" style={{ paddingTop: '6px' }}>Rating</Typography>
          <Rating
            name="simple-controlled"
            style={{ paddingTop: '6px', marginBottom: '6px' }}
            value={rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            readOnly={!isEditable}
          />
        </Box>
        <Paper className="profile-section-review">
          <Box>
            <Avatar alt="User Avatar" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7525/production/_133198992_2786b37c-cb35-4dc9-b603-bba0286572f3.jpg.webp" imgProps={{ style: { objectFit: 'contain' } }} />
          </Box>
          <Typography variant="body1">Subject</Typography>
        </Paper>
      </Box>
    </Box>
  );
}
