import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import SkillChip from './SkillChip/SkillChip';

export default function SkillInput() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // Your list of skills in memory
  const skillsList: string[] = ['React', 'JavaScript', 'CSS', 'HTML', 'Python', 'Node.js'];

  const handleInputChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setInputValue(newValue);
    console.log(selectedSkills);
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSelectedSkills((skills) => skills.filter((skill) => skill !== skillToDelete));
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="skills-input"
        options={skillsList}
        value={selectedSkills.length > 0 ? [selectedSkills[selectedSkills.length - 1]] : []}
        // eslint-disable-next-line max-len
        onChange={(_, newValue) => setSelectedSkills([...new Set([...selectedSkills, ...newValue])])}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            variant="outlined"
            label="Skills"
            placeholder="Add or select skills"
          />
        )}
      />
      {/* <Button onClick={handleAddSkill}>Add Skill</Button> */}
      <div>
        {selectedSkills.map((skill) => (
          <SkillChip
            skill={skill}
            handleDeleteSkill={handleDeleteSkill}
          />
        ))}
      </div>
    </div>
  );
}
