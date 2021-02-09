import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const NextButton = ({ onNextBtnClick,disabled}) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      disabled={disabled}
      onClick={onNextBtnClick}
    >
      <SkipNextIcon />
    </IconButton>
  );
};

export default NextButton;
