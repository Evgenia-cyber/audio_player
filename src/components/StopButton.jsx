import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import StopIcon from '@material-ui/icons/Stop';

const StopButton = () => {
  return (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
         <StopIcon/>
        </IconButton>
  );
};

export default StopButton;
