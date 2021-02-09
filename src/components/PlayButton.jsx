import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const PlayButton = ({ onPlayBtnClick, isCanPlay }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={onPlayBtnClick}
      disabled={!isCanPlay}
    >
      <PlayArrowIcon />
    </IconButton>
  );
};

export default PlayButton;
