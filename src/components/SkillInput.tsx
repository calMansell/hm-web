/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import SkillChip from './SkillChip/SkillChip';

export default function SkillInput() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]); // TODO: why does this work???
  const [selectedSkills2, setSelectedSkills2] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // Your list of skills in memory
  const skillsList: string[] = ['React', 'JavaScript', 'CSS', 'HTML', 'Python', 'Node.js'];

  const handleInputChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setInputValue(newValue);
  };

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills2.includes(skill)) {
      setSelectedSkills2([...selectedSkills2, skill]);
    }
    setInputValue('');
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSelectedSkills2((skills) => skills.filter((skill) => skill !== skillToDelete));
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >

      <Autocomplete
        multiple
        id="skills-input"
        options={skillsList}
        value={selectedSkills}
        onChange={(_, newValue) => handleAddSkill(newValue[0])}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Skills"
            placeholder="Add or select skills"
            style={{ width: '300px', marginBottom: '12px', marginTop: '18px' }}
          />
        )}
      />
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', minHeight: '50px',
      }}
      >
        {selectedSkills2.map((skill) => (
          <SkillChip
            key={skill}
            skill={skill}
            handleDeleteSkill={handleDeleteSkill}
          />
        ))}
      </div>
    </div>
  );
}
