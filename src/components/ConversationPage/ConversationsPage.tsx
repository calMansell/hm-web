import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ChatEngine } from 'react-chat-engine';

import './style.css';

function ConversationsPage() {
  return (
    <Box className="conversations-page">
      <ChatEngine
        height="100vh"
        projectID="a839b12f-1eaf-4b11-8df7-ed7502cd59be"
        userName="Callam"
        userSecret="shearer99"
      />
    </Box>
  );
}

export default ConversationsPage;
