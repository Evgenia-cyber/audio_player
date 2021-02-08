import React from 'react';
import Grid from '@material-ui/core/Grid';

import PrevButton from './PrevButton';
import PlayButton from './PlayButton';
import NextButton from './NextButton';

const PlayerButtons = ({onPlayBtnClick}) => {
  return (
    <Grid item>
      <PrevButton />
      <PlayButton onPlayBtnClick={onPlayBtnClick}/>
      <NextButton />
    </Grid>
  );
};

export default PlayerButtons;
