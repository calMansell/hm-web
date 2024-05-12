import React from 'react';
import { Box } from '@mui/material';
import JobItems from './JobItems';

import jobs from '../assets/dummy/jobs.json';

function SearchFeed() {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const locationParam = searchParams.get('location');
  // const keywordParam = searchParams.get('keyword');
  return (
    <Box className="home-feed-page" p={2} sx={{ overflowY: 'auto' }}>
      <JobItems jobs={jobs} />
    </Box>
  );
}

export default SearchFeed;
