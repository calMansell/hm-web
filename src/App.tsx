import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';
import { HomeFeed, Navbar } from './components';
import JobDetailPage from './components/JobDetailPage/JobDetail';
import ConversationsPage from './components/ConversationPage/ConversationsPage';
import UserProfile from './components/UserProfile/UserProfile';
import NewJobPage from './components/NewJobPage/NewJobPage';
import SearchFeed from './components/SearchFeed';
import JobReviewCreatePage from './components/JobReviewCreatePage';
import JobReviewsPage from './components/JobReviewsPage';

import SpecificJobReviewPage from './components/SpecificJobReviewPage';
import SpecificUserReviewPage from './components/SpecificUserReviewPage';
import UserReviewCreatePage from './components/UserReviewCreatePage';
import UserReviewsPage from './components/UserReviewsPage';

import NotFoundPage from './components/Error/not-found';
import MyJobsPage from './components/MyJobsPage';
import MyReviewsPage from './components/MyReviewsPage';
import UserDetailPage from './components/UserDetailPage/UserDetailPage';

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Box className="main-container">
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
            <Route path="/my/messages" element={<ConversationsPage />} />
            <Route path="/my/profile" element={<UserProfile isEditable isOwnProfile />} />
            <Route path="/jobs/new" element={<NewJobPage />} />
            <Route path="/jobs/search" element={<SearchFeed />} />

            <Route path="/my/jobs" element={<MyJobsPage />} />
            <Route path="/my/reviews" element={<MyReviewsPage />} />

            <Route path="/jobs/:id/reviews" element={<JobReviewsPage />} />
            <Route path="/user/:id/reviews" element={<UserReviewsPage />} />

            <Route path="/jobs/:id/reviews/:id" element={<SpecificJobReviewPage />} />
            <Route path="/user/:id/reviews/:id" element={<SpecificUserReviewPage />} />

            <Route path="/jobs/:id/reviews/create" element={<JobReviewCreatePage />} />
            <Route path="/user/:id/reviews/create" element={<UserReviewCreatePage />} />

            <Route path="/user/:id/profile" element={<UserProfile isEditable={false} />} />

            <Route path="*" element={<NotFoundPage />} />
            {/* //
        // <Route path="/my/settings" element={<Settings />} />
        // <Route path="/about" element={<About />} />
        // <Route path="/contact" element={<Contact />} />
       */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
