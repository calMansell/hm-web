import React, { useRef, useState } from 'react';
import {
  Avatar, Typography, Paper, Box, Button,
  Tooltip,
} from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import './style.css';
import EditableTextField from '../EditableTextField';
import SkillInput from '../SkillInput/SkillInput';

function UserProfile({ isEditable }: { isEditable: boolean }) {
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

  const [isEdited, setIsEdited] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
        setIsEdited(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleEditButtonClick = () => {
    setIsEdited(true);
  };

  const handleSaveButtonClick = () => {
    // Handle saving changes here
    setIsEdited(false);
  };

  return (
    <Box className="user-profile" sx={{ height: '85vh', margin: '20px' }}>
      {/* Section 1: Image, Headline, Location */}
      <Paper className="profile-section section">
        <Box sx={{ position: 'relative', cursor: isEditable ? 'pointer' : 'default' }} onClick={isEditable ? handleClick : undefined}>
          <Avatar
            alt="User Avatar"
            src={profilePic}
            imgProps={{ style: { objectFit: 'contain' } }}
            sx={{
              padding: 1, width: 150, height: 150, border: '2px solid black',
            }}
          />
          {isEditable && (
            <Box sx={{
              position: 'absolute', top: '12%', left: '12%',
            }}
            >
              <Tooltip title="Upload new profile picture">
                <Edit color="action" sx={{ fill: '#000100' }} onClick={handleEditButtonClick} />
              </Tooltip>
            </Box>
          )}
        </Box>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileUpload} />
        <Typography variant="h5">{userInfo.name}</Typography>
        <Typography variant="subtitle1">Experienced Joiner</Typography>
        <Typography variant="subtitle1">{userInfo.location}</Typography>
      </Paper>

      {/* Section 2: About */}
      <Paper className="about-section section">
        <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>

          <EditableTextField
            initialValue={userInfo.about}
            isEditable={isEditable}
            onChange={() => setIsEdited(true)}
            multiline
            label="About"
          />
        </div>
      </Paper>

      {/* Section 3: Personal Info */}
      <Paper className="personal-info-section section">
        <div style={{ paddingTop: '15px' }}>
          <EditableTextField initialValue={userInfo.realName} label="Full Name" isEditable={isEditable} onChange={() => setIsEdited(true)} />
        </div>
        <EditableTextField initialValue={userInfo.age as unknown as string} label="Age" isEditable={isEditable} onChange={() => setIsEdited(true)} />
        <EditableTextField initialValue={userInfo.email} label="Email" isEditable={isEditable} onChange={() => setIsEdited(true)} />
        <div style={{ paddingBottom: '15px' }}>
          <EditableTextField initialValue={userInfo.phone} label="Phone" isEditable={isEditable} onChange={() => setIsEdited(true)} />
        </div>
      </Paper>

      {/* Section 4: Skills */}
      <Paper className="skills-section section">
        <SkillInput isEditable={isEditable} />
        {isEditable && isEdited && (
          <Button variant="contained" onClick={handleSaveButtonClick} disabled={!isEdited}>
            Submit
          </Button>
        )}
      </Paper>
    </Box>
  );
}

export default UserProfile;
