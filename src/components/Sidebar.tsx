import React from 'react';

import { Stack } from '@mui/material';
import { skillsWithIcons } from '../assets/constants';

const selectedCategory = skillsWithIcons[0].id;

function Sidebar() {
  return (
    <Stack direction="row" sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {
        skillsWithIcons.map((skill) => (
          <button type="button" className="category-btn" style={{ background: skill.id === selectedCategory && '#FC1503', color: 'white' }} key={skill.id}>
            <span style={{ color: skill.id === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{skill.icon}</span>
            <span style={{ opacity: skill.id === selectedCategory ? '1' : '0.8' }}>{skill.name}</span>
          </button>
        ))
}
    </Stack>
  );
}

export default Sidebar;
