import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';

const PauseButton = ({ onPauseBtnClick }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={onPauseBtnClick}
    >
      <PauseIcon />
    </IconButton>
  );
};

export default PauseButton;
