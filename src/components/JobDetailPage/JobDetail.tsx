import React from 'react';
import { Box } from '@mui/material';
import JobDetailPanel from '../JobDetailPanel';
import './style.css';

function JobDetailPage() {
  return (
    <Box className="job-detail-page">
      <JobDetailPanel />
    </Box>
  );
}

export default JobDetailPage;
