import React from 'react';
import Grid from '@material-ui/core/Grid';

import PrevButton from './PrevButton';
import PlayButton from './PlayButton';
import NextButton from './NextButton';
import PauseButton from './PauseButton';

const PlayerButtons = ({
  onPlayBtnClick,
  isCanPlay,
  onPauseBtnClick,
  isPlaying,
  onNextBtnClick,
  onPrevBtnClick,
  disabled
}) => {
  return (
    <Grid item>
      <PrevButton onPrevBtnClick={onPrevBtnClick} disabled={disabled}/>
      {isPlaying ? (
        <PauseButton onPauseBtnClick={onPauseBtnClick} />
      ) : (
        <PlayButton onPlayBtnClick={onPlayBtnClick} isCanPlay={isCanPlay} />
      )}
      <NextButton onNextBtnClick={onNextBtnClick} disabled={disabled}/>
    </Grid>
  );
};

export default PlayerButtons;
