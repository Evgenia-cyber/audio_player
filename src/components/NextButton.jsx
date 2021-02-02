import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const NextButton = () => {
  return (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <SkipNextIcon />
        </IconButton>
  );
};

export default NextButton;
