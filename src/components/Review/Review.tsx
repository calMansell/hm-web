/* eslint-disable no-nested-ternary */
import {
  Typography, Rating, Box, Avatar, Paper, Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import React from 'react';

import TextField from '@mui/material/TextField';

import './style.css';

import ReportButton from '../ReportButton/ReportButton';
import Minicard from '../Minicard/Minicard';

interface ReviewProps {
  isEditable: boolean;
  isNew: boolean;
  title: string;
  content: string;
  defaultRating: number;
}

export default function Review({
  isEditable = false, isNew = true, title, content, defaultRating,
}: ReviewProps) {
  const [rating, setRating] = React.useState<number | null>(defaultRating); // TODO: default??
  const [review, setReview] = React.useState<string>(content);

  const navigate = useNavigate();

  const updateReview = () => {
    console.log('Review updated');
  };

  return (
    <Box className="review-component" style={{ display: 'flex', flexDirection: 'column' }}>
      <Box style={{
        display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%',
      }}
      >
        <div style={{ padding: '15px' }}>

          <Tooltip title="Go Back">
            <IconButton
              onClick={() => navigate(-1)}
            >
              <ArrowBackIcon style={{ color: 'grey' }} />
            </IconButton>
          </Tooltip>
        </div>

        <Typography variant="h6" component="legend" style={{ padding: '3px', textAlign: 'center', flexGrow: 1 }}>{title}</Typography>
        {!isEditable && (
          <div style={{ padding: '15px' }}>
            <ReportButton />
          </div>
        )}
      </Box>
      <Box style={{ width: '85%' }}>
        <Box style={{
          display: 'flex', justifyContent: 'space-between', width: '85%', padding: '10px',
        }}
        >
          <Typography variant="h6" component="legend">
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
          <Typography variant="body1">{content}</Typography>
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
              setRating(newValue);
            }}
            readOnly={!isEditable}
          />
        </Box>
        <Minicard />
      </Box>
    </Box>
  );
}
