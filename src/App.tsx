import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

function App =  () => (
  <Router>
    <Box sx={{backgroundColor: '#000'}}>
      NavBar
      <Routes>
        <Route  path="/" exact element={<Feed />} />
        // <Route  path="/job/:id" element={<JobDetail />} />
        // <Route  path="/job/new" element={<NewJob />} />
        // <Route  path="/job/:id/reviews" element={<JobReviewsList />} />
        // <Route  path="/user/:id/profile"  exact element={<UserProfile />} />
        // <Route  path="/user/:id/reviews"  exact element={<UserReviewsList />} />
        // <Route  path="/my/profile" element={<UserProfile />} />
        // <Route  path="/my/profile/edit" element={<EditableUserProfile />} />
        // <Route  path="/my/jobs" element={<JobList />} />
        // <Route  path="/my/messages" element={<ConversationList />} /> // use Q param to pass specific chat
        // <Route  path="/about" element={<About />} />
        // <Route  path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  </Router>
)

export default App;
