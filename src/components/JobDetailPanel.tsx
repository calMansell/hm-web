import { CheckCircle } from '@mui/icons-material';
import {
  Card, Box, CardContent, Typography, Stack,
} from '@mui/material';
import React, { useState, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useParams, Link } from 'react-router-dom';
import { Job } from '../types/Job';
import Loader from './Loader';

function JobDetailPanel() {
  // Demo image URL to be used if actual data is missing
  const demoImageUrl = '/path/to/demo-image.jpg';
  const { id } = useParams();
  console.log({ id, jobs });

  const [job, setJob] = useState<Job | undefined>(jobs.find((item) => item.id === id));
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  // const [job, setJob] = useState<Job>();

  // useEffect(() => {
  //   const fetchJob = jobs.find((item) => item.id === id);
  //   setJob(fetchJob);
  // }, [id]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  if (!job) return <Loader />;

  return (
    <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
      <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots
          responsive={responsive}
          ssr // means to render carousel on server-side.
          infinite
          autoPlay={false}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {job.images.length > 0 ? (
            job.images.map((image, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={index}>
                <img src={image} alt={`Main ${index + 1}`} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
              </Box>
            ))
          ) : (
            <Box>
              <img src={demoImageUrl} alt="Demo " style={{ width: '100%', height: 300, objectFit: 'cover' }} />
            </Box>
          )}
        </Carousel>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="body1">{job?.description}</Typography>
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
          <Stack direction="row" justifyContent="space-between" sx={{ color: '#000' }} py={1} px={2}>
            <Link to={`/user/${job.poster}`}>
              <Typography variant="body2" sx={{ sm: 'subtitle1', md: 'h6' }} color="#000">
                Poster:
                {' '}
                {job.poster}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
          </Stack>
          <Stack direction="row" gap="20px" alignItems="center">
            { job.skillsRequiredForJob.map((skill, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Typography key={index} variant="body2" sx={{ opacity: 0.7 }}>
                <BuildIcon />
                {' '}
                {skill.title}
              </Typography>
            ))}
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}

export default JobDetailPanel;
