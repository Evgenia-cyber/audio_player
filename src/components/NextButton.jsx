import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { observer } from 'mobx-react';

const NextButton = ({ onNextBtnClick, store}) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      disabled={store.playerStore.isLoop}
      onClick={onNextBtnClick}
    >
      <SkipNextIcon />
    </IconButton>
  );
};

export default observer(NextButton);
