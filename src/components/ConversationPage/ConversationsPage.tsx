import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ChatEngine } from 'react-chat-engine';

import './style.css';

function ConversationsPage() {
  return (
    <Box className="conversations-page">
      <ChatEngine
        height="100vh"
        projectID="2df0a500-fb5f-4a8f-a8ce-c397c7b0bf25"
        userName="Callam"
        userSecret="shearer99"
      />
    </Box>
  );
}

export default ConversationsPage;
