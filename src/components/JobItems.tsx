import { Stack, Box, useMediaQuery } from '@mui/material';
import React from 'react';
import JobCard from './JobCard';
import { Job } from '../types/Job';
import Loader from './Loader';

function JobItems({ jobs }: { jobs: Job[] }) {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  if (!jobs?.length) return <Loader />;

  return (
    <Stack direction={isSmallScreen ? 'column' : 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
      {jobs.map((job) => (
        <Box
          key={job.id}
          sx={{
            height: '50vh',
            width: isSmallScreen ? '100%' : '45%', // Adjust width for smaller screens
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <JobCard job={job} />
        </Box>
      ))}
    </Stack>
  );
}

export default JobItems;
