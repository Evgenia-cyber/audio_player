import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const PlayButton = () => {
  return (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PlayArrowIcon />
        </IconButton>
  );
};

export default PlayButton;
