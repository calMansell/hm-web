import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavouriteButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip title="Favourite">
      <IconButton
        style={{ padding: '3px' }}
        onClick={() => console.log('Favourite clicked')}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      >
        {isHovered ? (
          <FavoriteIcon style={{ color: 'red' }} /> // Show filled icon on hover
        ) : (
          <FavoriteBorder style={{ color: 'red' }} /> // Show border icon by default
        )}
      </IconButton>
    </Tooltip>
  );
}
