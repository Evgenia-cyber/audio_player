import React from 'react';
import Grid from '@material-ui/core/Grid';

import PrevButton from './PrevButton';
import PlayButton from './PlayButton';
import NextButton from './NextButton';
import StopButton from './StopButton';

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
        <StopButton onPauseBtnClick={onPauseBtnClick} />
      ) : (
        <PlayButton onPlayBtnClick={onPlayBtnClick} isCanPlay={isCanPlay} />
      )}
      <NextButton onNextBtnClick={onNextBtnClick} disabled={disabled}/>
    </Grid>
  );
};

export default PlayerButtons;
