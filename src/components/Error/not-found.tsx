import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

function NotFoundPage() {
  return (
    <div style={{
      textAlign: 'center', marginTop: '50px', backgroundColor: 'white', margin: '30px 30px', padding: '20px', borderRadius: '10px',
    }}
    >
      <Typography variant="h4" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>
      <Button variant="contained" component={Link} to="/" style={{ marginTop: '20px' }}>
        Go to Home Page
      </Button>
    </div>
  );
}

export default NotFoundPage;
