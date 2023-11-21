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
      style={{ margin: '4px', width: '150px' }}
    />
  );
}
