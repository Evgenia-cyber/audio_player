import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const PrevButton = ({ onPrevBtnClick, disabled }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      disabled={disabled}
      onClick={onPrevBtnClick}
    >
      <SkipPreviousIcon />
    </IconButton>
  );
};

export default PrevButton;
