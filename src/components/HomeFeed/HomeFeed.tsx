import React from 'react';

import { Box } from '@mui/material';

import jobs from '../../assets/dummy/jobs.json';
import JobItems from '../JobItems';

import './style.css';

function HomeFeed() {
  return (
    <Box className="home-feed-page" p={2} sx={{ overflowY: 'auto' }}>
      <JobItems jobs={jobs} />
    </Box>
  );
}

export default HomeFeed;
