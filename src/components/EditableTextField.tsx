import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Tooltip, Typography } from '@mui/material';

interface EditableTextFieldProps {
  initialValue: string;
  label?: string;
  multiline?: boolean;
}

function EditableTextField({ initialValue, label, multiline }: EditableTextFieldProps) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isFieldVisible, setIsFieldVisible] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const toggleFieldVisibility = () => {
    setIsFieldVisible(!isFieldVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: 5 }}>

      {label
      && (
      <Typography variant="subtitle1" fontSize={21}>
        {label}
        :
      </Typography>
      )}
      { isEditing ? (
        <TextField
          sx={{ marginLeft: 2 }}
          variant="outlined"
          value={value}
          onChange={handleChange}
          multiline={multiline}
          fullWidth={multiline}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{ marginLeft: 1 }}
          fontSize={21}
        >
          {' '}
          {value}
          {' '}
        </Typography>
      )}
      <IconButton onClick={toggleEditing} sx={{ marginLeft: 2 }}>
        <EditIcon sx={{ width: 'auto', height: '18px' }} />
      </IconButton>
      {isFieldVisible ? (
        <Tooltip title="Hide from public (currently visible)">
          <IconButton onClick={toggleFieldVisibility} size="small">
            <VisibilityIcon sx={{ width: 'auto', height: '18px' }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Display to public (currently hidden)">
          <IconButton onClick={toggleFieldVisibility}>
            <VisibilityOffIcon sx={{ width: 'auto', height: '18px' }} />
          </IconButton>
        </Tooltip>

      )}
    </div>
  );
}

EditableTextField.defaultProps = {
  label: undefined,
  multiline: false,
};

export default EditableTextField;
