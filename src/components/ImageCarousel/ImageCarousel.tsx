import { Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import './style.css';

interface ImageCarouselProps {
  job: {
    images: string[];
  };
}

export default function ImageCarousel({ job }: ImageCarouselProps) {
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5,
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (

    <Box sx={{
      width: '80%', marginBottom: '20px',
    }}
    >
      <Carousel
        responsive={responsive}
        keyBoardControl
        containerClass="carousel-container"
        swipeable
        draggable={false}
        showDots
        removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
        customTransition="all .5"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {job.images.map((img, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={idx} sx={{ width: '100%' }}>
            <img src={img} alt="defe" style={{ width: '100%', objectFit: 'contain' }} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
