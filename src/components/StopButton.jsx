import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import StopIcon from '@material-ui/icons/Stop';

const StopButton = ({ onPauseBtnClick }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={onPauseBtnClick}
    >
      <StopIcon />
    </IconButton>
  );
};

export default StopButton;
