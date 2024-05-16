import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface MinicardProps {
  imageUrl: string;
  subject: string;
  url: string; // Prop for navigation
}

export default function Minicard({ imageUrl, subject = 'placeholder', url }: MinicardProps) {
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Avatar
          className="avatar"
          alt="User Avatar"
          variant="circular"
          src={imageUrl ?? 'https://ichef.bbci.co.uk/news/976/cpsprodpb/7525/production/_133198992_2786b37c-cb35-4dc9-b603-bba0286572f3.jpg.webp'}
          style={{ width: '60px', height: '60px', marginBottom: '8px' }}
        />
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary' }}
        >
          {subject}
        </Typography>
      </Box>
    </Link>
  );
}
