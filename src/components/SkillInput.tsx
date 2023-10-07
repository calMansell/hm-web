import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';

function SkillInput() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // Your list of skills in memory
  const skillsList: string[] = ['React', 'JavaScript', 'CSS', 'HTML', 'Python', 'Node.js'];

  const handleInputChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setInputValue(newValue);
  };

  const handleAddSkill = () => {
    if (inputValue.trim() !== '' && !selectedSkills.includes(inputValue)) {
      setSelectedSkills([...selectedSkills, inputValue]);
      setInputValue('');
    }
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
        value={selectedSkills}
        onChange={(_, newValue) => setSelectedSkills(newValue)}
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
      <Button onClick={handleAddSkill}>Add Skill</Button>
      <div>
        {selectedSkills.map((skill, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={skill}
            onDelete={() => handleDeleteSkill(skill)}
            style={{ margin: '4px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillInput;
