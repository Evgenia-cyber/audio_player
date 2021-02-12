import React from 'react';
import Grid from '@material-ui/core/Grid';

import PrevButton from './PrevButton';
import PlayButton from './PlayButton';
import NextButton from './NextButton';
import PauseButton from './PauseButton';
import { observer } from 'mobx-react';

  const PlayerButtons = ({
    onPlayBtnClick,
    isCanPlay,
    onPauseBtnClick,
    onNextBtnClick,
    onPrevBtnClick,
    store
  }) => {
  return (
    <Grid item>
      <PrevButton onPrevBtnClick={onPrevBtnClick} store={store}/>
      {store.playerStore.isPlaying ? (
        <PauseButton onPauseBtnClick={onPauseBtnClick} />
      ) : (
        <PlayButton onPlayBtnClick={onPlayBtnClick} isCanPlay={isCanPlay} />
      )}
      <NextButton onNextBtnClick={onNextBtnClick} store={store}/>
    </Grid>
  );
};

export default observer(PlayerButtons);
