import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Card, CardContent, CardMedia,
} from '@mui/material';

import { Job } from '../types/Job';

function JobCard({ job }: { job: Job }) {
  const demoImageUrl = '/path/to/demo-image.jpg';

  const { title, description, images } = job;
  return (
    <Card sx={{
      width: '100%', height: '50vh', boxShadow: 'none', borderRadius: 0,
    }}
    >
      <Link to={`/jobs/${job.id}`}>
        <CardMedia
          image={images.length > 0 ? images[0] : demoImageUrl}
          title={title}
          sx={{ width: '100%', height: 180 }}
        />
      </Link>
      <CardContent>
        <Link to={`/jobs/${job.id}`}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
        </Link>
        <Typography
          variant="body1"
          sx={{
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingBottom: '20px',
          }}
        >
          {description}
        </Typography>
        <Typography variant="body2">
          Region:
          {' '}
          {job.region}
        </Typography>
        <Typography variant="body2">
          Subregion:
          {' '}
          {job.subRegion}
        </Typography>
        <Typography variant="body2">
          Views:
          {' '}
          {job.views}
        </Typography>
        {/* Add more job details to display as needed */}
      </CardContent>
    </Card>
  );
}

export default JobCard;
