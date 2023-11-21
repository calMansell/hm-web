import { Typography, Rating, Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import React from 'react';
import TextField from '@mui/material/TextField';
import SkillInput from '../SkillInput';

import './style.css';

export default function Review() {
  const [value, setValue] = React.useState<number | null>(2);
  const [review, setReview] = React.useState<string>('');

  return (
    <Box className="review-page">
      <Box>

        <Typography variant="h3" component="legend">Review</Typography>

        <TextField
          style={{ width: '95%', marginTop: '40px' }}
          fullWidth
          multiline
          rows={10}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Endorse Skills</Typography>
        <SkillInput />

      </Box>
    </Box>
  );
}
