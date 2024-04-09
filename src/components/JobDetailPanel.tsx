import { CheckCircle } from '@mui/icons-material';
import {
  Box, Typography, Divider, Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
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

  useEffect(() => {
    const fetchJob = jobs.find((item) => item.id === id);
    setJob(fetchJob);
  }, [id]);

  if (!job) return <Loader />;

  return (
    <Box className="job-detail-page" sx={{ backgroundColor: 'white', paddingTop: 3, paddingLeft: '30px' }}>
      <Box sx={{ paddingLeft: '30px' }}>
        <Typography variant="h4" align="left">
          {job.title}
        </Typography>
        <Typography variant="h5" color="grey" align="left" p={1} paddingBottom={3}>
          {job.region}
          {' '}
          -
          {' '}
          {job.subRegion}
        </Typography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ImageCarousel images={job.images} />
      </Box>
      <Divider />
      <Typography variant="body1" sx={{ padding: '30px 25px 25px 25px', lineHeight: 2 }}>{job.description}</Typography>
      <Divider />
      <Box sx={{ padding: '15px' }}>
        <Button variant="contained" color="primary" startIcon={<SendIcon />}>
          <Typography variant="body1" fontWeight="bold">Message</Typography>
        </Button>
      </Box>
      <Divider />
      <Box sx={{ padding: '15px' }}>
        <Typography variant="body2" fontWeight="bold">Skills Required:</Typography>
        {job.skillsRequiredForJob.map((skill) => (
          <SkillChip skill={skill.title} />
        ))}
      </Box>
      <Divider />
      <Box sx={{ padding: '15px' }}>
        <Typography variant="body2">Posted: 2023-01-01</Typography>
        <Typography variant="body2">
          Job ID:
          {job.id}
        </Typography>
        <Typography variant="body2">
          Views:
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
