import React from 'react';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

import './style.css';

export default function ReportButton() {
  return (
    <Tooltip title="Report">
      <IconButton style={{ padding: '3px' }} onClick={() => console.log('Report clicked')}>
        <ReportProblemOutlinedIcon className="report-button" />
      </IconButton>
    </Tooltip>
  );
}
