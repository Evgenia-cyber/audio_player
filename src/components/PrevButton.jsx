import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { observer } from 'mobx-react';

const PrevButton = ({ onPrevBtnClick,  store }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      disabled={store.playerStore.isLoop}
      onClick={onPrevBtnClick}
    >
      <SkipPreviousIcon />
    </IconButton>
  );
};

export default observer(PrevButton);
