import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';
import { HomeFeed, Navbar } from './components';
import JobDetailPage from './components/JobDetailPage/JobDetail';
import ConversationsPage from './components/ConversationPage/ConversationsPage';
import UserProfile from './components/UserProfile/UserProfile';
import NewJobPage from './components/NewJobPage/NewJobPage';
import SearchFeed from './components/SearchFeed';
import MyUserReviewsPage from './components/MyJobReviewsGivenPage';
import JobReviewCreatePage from './components/JobReviewCreatePage';
import JobReviewsPage from './components/JobReviewsPage';
import MyJobReviewsGivenPage from './components/MyJobReviewsGivenPage';
import MyJobReviewsReceivedPage from './components/MyJobReviewsReceivedPage';
import MyUserReviewsGivenPage from './components/MyUserReviewsGivenPage';
import MyUserReviewsReceivedPage from './components/MyUserReviewsReceivedPage';
import SpecificJobReviewPage from './components/SpecificJobReviewPage';
import SpecificUserReviewPage from './components/SpecificUserReviewPage';
import UserReviewCreatePage from './components/UserReviewCreatePage';
import UserReviewsPage from './components/UserReviewsPage';
import MyCreatedJobsPage from './components/MyCreatedJobsPage';
import MyFavouritedJobsPage from './components/MyFavouritedJobsPage';
import MyEngagedJobsPage from './components/MyEngagedJobsPage';

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

            <Route path="/my/user-reviews/given" element={<MyUserReviewsGivenPage />} />
            <Route path="/my/job-reviews/given" element={<MyJobReviewsGivenPage />} />
            <Route path="/my/user-reviews/received" element={<MyUserReviewsReceivedPage />} />
            <Route path="/my/job-reviews/received" element={<MyJobReviewsReceivedPage />} />

            <Route path="/jobs/:id/reviews" element={<JobReviewsPage />} />
            <Route path="/jobs/:id/reviews" element={<UserReviewsPage />} />

            <Route path="/jobs/:id/reviews/:id" element={<SpecificJobReviewPage />} />
            <Route path="/jobs/:id/reviews/:id" element={<SpecificUserReviewPage />} />

            <Route path="/jobs/:id/reviews/create" element={<JobReviewCreatePage />} />
            <Route path="/user/:id/reviews/create" element={<UserReviewCreatePage />} />

            <Route path="/my/jobs/created" element={<MyCreatedJobsPage />} />
            <Route path="/my/jobs/favourites" element={<MyFavouritedJobsPage />} />
            <Route path="/my/jobs/engaged" element={<MyEngagedJobsPage />} />

            <Route path="/user/:id/profile" element={<UserProfile />} />

            {/* //
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
