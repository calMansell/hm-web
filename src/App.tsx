import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';
import { HomeFeed, Navbar } from './components';
import JobDetailPage from './components/JobDetailPage/JobDetail';
import ConversationsPage from './components/ConversationPage/ConversationsPage';
import UserProfile from './components/UserProfile/UserProfile';
import NewJobPage from './components/NewJobPage/NewJobPage';
import SearchFeed from './components/SearchFeed';
import MyUserReviewsPage from './components/MyUserReviewsPage';

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Box className="main-container">
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />
            <Route path="/my/messages" element={<ConversationsPage />} />
            <Route path="/my/profile" element={<UserProfile />} />
            <Route path="/jobs/new" element={<NewJobPage />} />
            <Route path="/jobs/seach" element={<SearchFeed />} />

            <Route path="/my/reviews" element={<MyUserReviewsPage />} />

            {/* //
        // <Route path="/jobs/:id/reviews" element={<JobReviewsPage />} />
        // <Route path="/jobs/:id/reviews/create" element={<JobReviewsCreatePage />} />
        // <Route path="/user/:id/profile" exact element={<UserProfile />} />
        // <Route path="/user/:id/reviews" exact element={<UserReviewsPage />} />
        // <Route path="/user/:id/reviews/create" exact element={<UserReviewsCreatePage />} />
        // <Route path="/my/profile/edit" element={<EditableUserProfile />} />
        // <Route path="/my/jobs" element={<MyJobsPage />} />
        // <Route path="/my/settings" element={<Settings />} />
        // <Route path="/about" element={<About />} />
        // <Route path="/contact" element={<Contact />} />  */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
