import { CheckCircle } from '@mui/icons-material';
import {
  Box, Typography, Divider, Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import { Job } from '../types/Job';
import Loader from './Loader';

import jobs from '../assets/dummy/jobs.json';
// import ImageCarousel from './ImageCarousel';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import SkillChip from './SkillChip/SkillChip';

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
        <ImageCarousel images={job.images} />
      </Box>
      <Divider />

      <Typography variant="body1" sx={{ padding: '15px' }}>{job?.description}</Typography>
      <Divider />

      <Box sx={{ padding: '15px' }}>
        <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
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
        { job.skillsRequiredForJob.map((skill) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkillChip
            skill={skill.title}
          />
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
