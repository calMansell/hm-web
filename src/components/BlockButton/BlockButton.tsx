import React from 'react';
import BlockIcon from '@mui/icons-material/Block';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

import './style.css';

export default function BlockButton() {
  return (
    <Tooltip title="Block">
      <IconButton
        sx={{
          '&:hover': {
            color: 'red', // This applies to the IconButton, affecting its child (BlockIcon) on hover
          },
          padding: '3px',
        }}
        onClick={() => console.log('Block clicked')}
      >
        <BlockIcon className="block-button" />
      </IconButton>
    </Tooltip>
  );
}
