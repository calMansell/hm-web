import React, { useRef, useState } from 'react';
import {
  Avatar, Typography, Paper, Box,
} from '@mui/material';
import Edit from '@mui/icons-material/Edit';

import './style.css';
import EditableTextField from '../EditableTextField';
import SkillInput from '../SkillInput';

function UserProfile() {
  const [profilePic, setProfilePic] = useState('https://upload.wikimedia.org/wikipedia/en/c/c5/Bob_the_builder.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 89',
    about: 'A passionate developer.',
    realName: 'John Doe',
    age: 30,
    location: 'New York, USA',
    skills: ['React', 'JavaScript', 'CSS'],
    publicInfo: {
      realName: true,
      age: false,
      location: true,
      skills: true,
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box className="user-profile" sx={{ height: '85vh', margin: '20px' }}>
      {/* Section 1: Image, Headline, Location */}
      <Paper className="profile-section section">
        <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={handleClick}>
          <Avatar alt="User Avatar" src={profilePic} imgProps={{ style: { objectFit: 'contain' } }} sx={{ width: 150, height: 150, border: '1px solid green' }} />
          <Box sx={{
            position: 'absolute', top: '10%', left: '10%',
          }}
          >
            <Edit color="action" sx={{ fill: '#125B2F' }} />
          </Box>
        </Box>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileUpload} />
        <Typography variant="h5">{userInfo.name}</Typography>
        <Typography variant="subtitle1">Experienced Joiner</Typography>
        <Typography variant="subtitle1">{userInfo.location}</Typography>
      </Paper>

      {/* Section 2: About */}
      <Paper className="about-section section">
        <EditableTextField initialValue={userInfo.about} multiline />

      </Paper>

      {/* Section 3: Personal Info */}
      <Paper className="personal-info-section section">
        <EditableTextField initialValue={userInfo.realName} label="Full Name" />
        <EditableTextField initialValue={userInfo.age as unknown as string} label="Age" />
        <EditableTextField initialValue={userInfo.email} label="Email" />
        <EditableTextField initialValue={userInfo.phone} label="Phone" />
      </Paper>

      {/* Section 4: Skills */}
      <Paper className="skills-section section">
        <SkillInput />
      </Paper>
    </Box>
  );
}

export default UserProfile;
