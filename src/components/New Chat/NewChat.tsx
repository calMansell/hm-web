import {
  Typography, Box, Avatar, Paper, Button,
} from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';

import './style.css';
import { useNavigate } from 'react-router-dom';

export default function NewChat() {
  const [review, setReview] = React.useState<string>('');
  const navigate = useNavigate();

  const handleSendClick = () => {
    // Logic to handle sending the message
    // call https://rest.chatengine.io/#4a596036-fd7c-4539-b913-52990c7847f9
    // redirect to to conversation page
    navigate('/my/messages');
  };

  return (
    <Box className="new-chat-component">

      <Box style={{
        display: 'flex', justifyContent: 'space-between', width: '85%', padding: '10px',
      }}
      >
        <Typography variant="h6" component="legend" style={{ padding: '3px' }}>Message User</Typography>
        <Button variant="contained" color="primary" onClick={handleSendClick}>Send</Button>
      </Box>

      <Box style={{ width: '85%' }}>
        <TextField
          className="review-body"
          fullWidth
          multiline
          rows={6}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </Box>

      <Box style={{
        width: '85%', display: 'flex', alignItems: 'center', paddingTop: '6px', justifyContent: 'space-between',
      }}
      >
        {/* User icon */}
        <Paper className="profile-section-chat">
          <Box>
            <Avatar alt="User Avatar" src="https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2016/5/8/70c74753-1784-4910-adf9-1b888dc27d1c.jpg" imgProps={{ style: { objectFit: 'contain' } }} />
          </Box>
          <Typography variant="body1">Callam</Typography>
        </Paper>

        {/* Subject */}
        <Paper className="profile-section-chat">
          <Box>
            <Avatar alt="User Avatar" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7525/production/_133198992_2786b37c-cb35-4dc9-b603-bba0286572f3.jpg.webp" imgProps={{ style: { objectFit: 'contain' } }} />
          </Box>
          <Typography variant="body1">Subject</Typography>
        </Paper>

      </Box>
    </Box>
  );
}
