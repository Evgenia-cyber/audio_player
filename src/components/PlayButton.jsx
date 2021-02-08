import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const PlayButton = ({onPlayBtnClick}) => {
  // const onPlayBtnClick = () => {
  //   console.log(audioEl);
  //   audioEl.current.play();
  // };

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={onPlayBtnClick}
    >
      <PlayArrowIcon />
    </IconButton>
  );
};

export default PlayButton;
