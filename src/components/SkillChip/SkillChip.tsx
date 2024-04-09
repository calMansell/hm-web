import Chip from '@mui/material/Chip';
import React from 'react';

interface SkillChipProps {
  skill: string;
  // eslint-disable-next-line react/require-default-props
  handleDeleteSkill?: (skill: string) => void;
}

export default function SkillChip({ skill, handleDeleteSkill }: SkillChipProps) {
  return (
    <Chip
      key={skill}
      label={skill}
      onDelete={handleDeleteSkill ? () => handleDeleteSkill(skill) : undefined}
      sx={{
        margin: '4px',
        backgroundColor: '#e0e0e0', // Muted background color
        color: '#424242', // Dark gray text color
        fontWeight: 'bold', // Bold text
        width: 150,
        // '&:hover': {
        //   backgroundColor: '#388e3c', // Darker green on hover
        // },
      }}
    />
  );
}
