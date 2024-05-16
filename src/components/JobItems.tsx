import { Stack, Box, useMediaQuery } from '@mui/material';
import React from 'react';
import JobCard from './JobCard';
import { Job } from '../types/Job';
import Loader from './Loader';

function JobItems({ jobs }: { jobs: Job[] }) {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // TODO: don't do this

  if (!jobs?.length) return <Loader />;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      {jobs.map((job) => (
        <Box
          key={job.id}
          sx={{
            height: '50vh',
            width: {
              xs: '100%', // 100% width for extra-small screens, one column
              md: 'calc(50% - 16px)', // 50% width for medium screens, two columns, adjusting for gap
              lg: 'calc(33.333% - 16px)', // ~33% width for medium screens, three columns, adjusting for gap
            },
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
