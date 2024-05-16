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
import Minicard from './Minicard/Minicard';

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
          <SkillChip skill={skill.title} isEditable={false} />
        ))}
        <Divider />
        <Box sx={{ padding: '15px' }}>

          <NewChat />
        </Box>
      </Box>
      <Divider />
      <Box sx={{
        padding: '15px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column',
      }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>Posted By</Typography>
        <Minicard imageUrl="https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2016/12/shearer.jpg?fit=1600%2C1050&ssl=1" subject="Shearer" />
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>Posted: 2023-01-01</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
          Job ID:
          {' '}
          {job.id}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
          Views:
          {' '}
          {job.views}
        </Typography>
        <Box sx={{
          padding: '15px', display: 'flex', alignItems: 'flex-start', flexDirection: 'row',
        }}
        >
          <ReportButton />
          <FavouriteButton />

        </Box>
      </Box>
    </Box>
  );
}

export default JobDetailPanel;
