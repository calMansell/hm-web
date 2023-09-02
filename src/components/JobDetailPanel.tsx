import { CheckCircle } from '@mui/icons-material';
import {
  Box, Typography, Stack, Divider, Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import { Job } from '../types/Job';
import Loader from './Loader';

import jobs from '../assets/dummy/jobs.json';
// import ImageCarousel from './ImageCarousel';
import ImageCarousel from './ImageCarousel/ImageCarousel';

function JobDetailPanel() {
  const { id } = useParams();

  const [job, setJob] = useState<Job | undefined>(jobs.find((item) => item.id === id));
  // const [job, setJob] = useState<Job>();

  useEffect(() => {
    const fetchJob = jobs.find((item) => item.id === id);
    setJob(fetchJob);
  }, [id]);

  if (!job) return <Loader />;

  return (

    <Box sx={{
      width: '100%', height: '100%', position: 'sticky', top: '86px', backgroundColor: 'white', p: 2,
    }}
    >
      <Typography variant="h4" align="left">
        {job.title}
      </Typography>
      <Typography variant="h5" color="grey" align="left" p={1}>
        {job.region}
        {' '}
        -
        {' '}
        {job.subRegion}
      </Typography>
      <Box sx={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <ImageCarousel job={job} />
      </Box>
      <Divider />

      <Typography variant="body1" sx={{ padding: '15px' }}>{job?.description}</Typography>
      <Divider />

      <Box sx={{ padding: '15px' }}>
        <Button variant="contained" color="primary" sx={{ marginRight: '10px' }} onClick={}>
          <Typography variant="body2" fontWeight="bold">
            Message
          </Typography>
        </Button>
      </Box>

      <Divider />

      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '15px',
      }}
      >
        <Typography variant="body2" fontWeight="bold">
          Skills Required:
        </Typography>
        { job.skillsRequiredForJob.map((skill, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Typography key={index} variant="body2" sx={{ opacity: 0.7, padding: '2px' }}>
            {/* <BuildIcon /> */}
            {' '}
            {skill.title}
          </Typography>
        ))}
      </Box>
      <Divider />
      <Box sx={{ padding: '15px' }}>
        <Typography variant="body2">
          {/* TODO: add date */}
          Posted: 2023-01-01
        </Typography>
        <Typography variant="body2">
          Job ID:
          {' '}
          { job.id }
        </Typography>
        <Typography variant="body2">
          Views:
          {' '}
          {job.views}
        </Typography>
        <Link to={`/user/${job.poster}`}>
          <Typography variant="body2" sx={{ sm: 'subtitle1', md: 'h6' }} color="#000">
            Poster:
            {' '}
            {job.poster}
            <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </Box>

    </Box>

  );
}

export default JobDetailPanel;
