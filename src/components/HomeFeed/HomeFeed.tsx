import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import jobs from '../../assets/dummy/jobs.json';
import JobItems from '../JobItems';
import Sidebar from '../Sidebar';

import './style.css';

function HomeFeed() {
  return (

    <Box className="home-feed-page" p={2} sx={{ overflowY: 'auto' }}>
      <JobItems jobs={jobs} direction="row" />
    </Box>

  );
}

export default HomeFeed;
