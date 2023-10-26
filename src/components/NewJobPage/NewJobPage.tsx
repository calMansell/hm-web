import React, { useState } from 'react';
import './style.css';
import { Box } from '@mui/material';
import NewJobForm from './NewJobForm';
import ImageUploadPage from './ImageUploadPage';

function NewJobPage() {
  const [currentStage, setCurrentStage] = useState<'location' | 'image'>('location');

  return (
    <Box
      className="new-job-page"
      sx={{
        width: '100%', height: '100vh', position: 'sticky', top: '86px', backgroundColor: 'white', p: 2,
      }}
    >
      {currentStage === 'location' && (
      <NewJobForm
        onNext={() => setCurrentStage('image')} // Function to switch to the next stage
      />
      )}
      {currentStage === 'image' && (
      <ImageUploadPage
        onBack={() => setCurrentStage('location')} // Function to go back to the location stage
      />
      )}
    </Box>

  );
}

export default NewJobPage;
