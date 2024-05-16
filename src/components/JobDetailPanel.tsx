import React, { useEffect, useState } from 'react';
import { CheckCircle } from '@mui/icons-material';
import {
  Box, Typography, Divider,
} from '@mui/material';

import { useParams, Link } from 'react-router-dom';

import { Job } from '../types/Job';
import Loader from './Loader';

import jobs from '../assets/dummy/jobs.json';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import SkillChip from './SkillChip/SkillChip';
import NewChat from './New Chat/NewChat';
import ReportButton from './ReportButton/ReportButton';
import FavouriteButton from './FavouriteButton/FavouriteButton';

function JobDetailPanel() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | undefined>(jobs.find((item) => item.id === id));

  useEffect(() => {
    const fetchJob = jobs.find((item) => item.id === id);
    setJob(fetchJob);
  }, [id]);

  if (!job) return <Loader />;

  return (
    <Box className="job-detail-page" sx={{ backgroundColor: 'white', padding: '3%' }}>
      <Box>
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
        <Typography variant="body2" fontWeight="bold">Skills Required:</Typography>
        {job.skillsRequiredForJob.map((skill) => (
          <SkillChip skill={skill.title} />
        ))}
        <Divider />
        <Box sx={{ padding: '15px' }}>

          <NewChat />
        </Box>
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
        <ReportButton />
        <FavouriteButton />
      </Box>
    </Box>
  );
}

export default JobDetailPanel;
