import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';
import { HomeFeed, Navbar } from './components';
import JobDetail from './components/JobDetail';

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          {/*   <Route path="/jobs/new" element={<NewJobPage />} />
        <Route path="/jobs/seach" element={<SearchFeed />} />
        <Route path="/jobs/:id/reviews" element={<JobReviewsPage />} />
        <Route path="/jobs/:id/reviews/create" element={<JobReviewsCreatePage />} />
        <Route path="/user/:id/profile" exact element={<UserProfile />} />
        <Route path="/user/:id/reviews" exact element={<UserReviewsPage />} />
        <Route path="/user/:id/reviews/create" exact element={<UserReviewsCreatePage />} />
        <Route path="/my/profile" element={<UserProfile />} />
        <Route path="/my/profile/edit" element={<EditableUserProfile />} />
        <Route path="/my/jobs" element={<MyJobsPage />} />
        <Route path="/my/messages/:id" element={<ConversationsPage />} />
        <Route path="/my/settings" element={<Settings />} />
        <Route path="/my/reviews" element={<MyUserReviewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
