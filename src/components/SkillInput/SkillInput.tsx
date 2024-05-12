import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SkillChip from '../SkillChip/SkillChip';

import './style.css';

type PropType = {
  // eslint-disable-next-line react/require-default-props
  isEditable: boolean;
  // eslint-disable-next-line react/require-default-props
  skills?: string[];
};

export default function SkillInput({ isEditable, skills = [] }: PropType) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSkills2, setSelectedSkills2] = useState<string[]>(skills);
  const [inputValue, setInputValue] = useState<string>('');

  const skillsList: string[] = ['React', 'JavaScript', 'CSS', 'HTML', 'Python', 'Node.js'];

  const handleInputChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setInputValue(newValue);
  };

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills2.includes(skill)) {
      setSelectedSkills2([skill, ...selectedSkills2]);
    }
    setInputValue('');
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSelectedSkills2((sklz) => sklz.filter((skill) => skill !== skillToDelete));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {isEditable && (
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
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              variant="outlined"
              label="Skills"
              placeholder="Add or select skills"
              style={{ marginBottom: '1px', marginTop: '18px', width: '400px' }}
            />
          )}
        />
      )}
      <div
        className="scrollable-div"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          minHeight: '50px',
          height: '100px',
          overflowY: 'scroll',
          margin: '20px',
          border: '1px solid grey',
          width: '400px',
          borderRadius: '4px', /* Add border radius for rounded corners */
          backgroundColor: '#F9F3F3F7', /* Set background color */
          padding: '8px', /* Add padding to the div */

        }}
      >
        {selectedSkills2.map((skill) => (
          <SkillChip
            skill={skill}
            handleDeleteSkill={handleDeleteSkill}
            isEditable={isEditable}
          />
        ))}
      </div>
    </div>
  );
}
