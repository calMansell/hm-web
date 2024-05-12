import Chip from '@mui/material/Chip';
import React from 'react';

interface SkillChipProps {
  skill: string;
  // eslint-disable-next-line react/require-default-props
  handleDeleteSkill?: (skill: string) => void;
  isEditable: boolean;
}

export default function SkillChip({ skill, handleDeleteSkill, isEditable }: SkillChipProps) {
  if (isEditable) {
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
          minWidth: '160px',
          height: '32px',

          '&:hover': {
            backgroundColor: '#d9cece', /* Change background color on hover */
            cursor: 'pointer', /* Change cursor to pointer on hover */
          },
        }}
      />
    );
  }
  return (
    <Chip
      key={skill}
      label={skill}
      sx={{
        margin: '4px',
        backgroundColor: '#e0e0e0', // Muted background color
        color: '#424242', // Dark gray text color
        fontWeight: 'bold', // Bold text
        minWidth: '160px',
        height: '32px',
      }}
    />
  );
}
