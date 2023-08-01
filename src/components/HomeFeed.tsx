import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import jobs from '../assets/dummy/jobs.json';
import JobItems from './JobItems';
import Sidebar from './Sidebar';

function HomeFeed() {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}> Copyright 2023 Calzilla</Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Carpentry
          <span style={{ color: '#F31503', paddingLeft: 5 }}>Jobs</span>
        </Typography>
        <JobItems jobs={jobs} direction="row" />
      </Box>
    </Stack>
  );
}

export default HomeFeed;
