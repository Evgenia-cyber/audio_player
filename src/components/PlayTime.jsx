import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { observer } from 'mobx-react';

const style = {
  root: {
    flexBasis: '100%',
  },
};

const PlayTime = ({ store }) => {
  const mediaQuery = useMediaQuery('(max-width:470px)');
  return (
    <Grid item style={mediaQuery ? style.root : {}}>
      <span>{store.playerStore.currentSongCurrentTimeForDisplay}</span>
      <span>/</span>
      <span>{store.playerStore.currentSongDurationForDisplay}</span>
    </Grid>
  );
};

export default observer(PlayTime);
