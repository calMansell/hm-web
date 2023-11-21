import { Stack, Box } from '@mui/material';
import React from 'react';
import JobCard from './JobCard';
import { Job } from '../types/Job';
import Loader from './Loader';

function JobItems({ jobs, direction }: { jobs: Job[], direction: 'row' | 'column' | undefined }) {
  if (!jobs?.length) return <Loader />;
  return (
  // eslint-disable-next-line react/no-array-index-key
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
      {jobs.map((job) => (
        <Box
          key={job.id}
          sx={{
            height: '50vh', width: '45%', overflow: 'hidden', textOverflow: 'ellipsis',
          }}
        >
          <JobCard job={job} />
        </Box>
      ))}
    </Stack>
  );
}

export default JobItems;
