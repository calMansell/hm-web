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
  isEditable: boolean;
  label: string;
  onChange?: (value: string) => void;
}

function EditableTextField({
  initialValue, label = 'label: ', multiline, isEditable = false, onChange,
}: EditableTextFieldProps) {
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
    <div style={{
      display: 'flex', alignItems: 'center', margin: 5,
    }}
    >
      {isEditable ? (
        <TextField
          label={label}
          sx={{ fontSize: 21, minWidth: '350px' }}
          variant="outlined"
          value={value}
          onChange={handleChange}
          multiline={multiline}
          fullWidth={multiline}
          rows={multiline ? 10 : 1}
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', minWidth: '350px' }}>
          <Typography sx={{ fontSize: 24, fontWeight: 'bold', marginRight: '8px' }}>
            {label}
            :
          </Typography>
          <Typography sx={{ fontSize: 24, whiteSpace: multiline ? 'pre-wrap' : 'normal' }}>
            {value}
          </Typography>
        </div>
      )}

      {isEditable && (
      <div>
        {isFieldVisible ? (
          <Tooltip title="Hide from public (currently visible)">
            <IconButton onClick={toggleFieldVisibility}>
              <VisibilityIcon sx={{ width: 'auto', height: '18px', color: '#2aad30' }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Display to public (currently hidden)">
            <IconButton onClick={toggleFieldVisibility}>
              <VisibilityOffIcon sx={{ width: 'auto', height: '18px', color: '#B7322F' }} />
            </IconButton>
          </Tooltip>
        )}
      </div>
      )}
    </div>
  );
}

EditableTextField.defaultProps = {
  label: undefined,
  multiline: false,
};

export default EditableTextField;
