import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const style = {
  root: {
    flexBasis: '100%',
  },
};

const PlayTime = ({ duration, currentTime }) => {
  const mediaQuery = useMediaQuery('(max-width:470px)');
  return (
    <Grid item style={mediaQuery ? style.root : {}}>
      <span>{currentTime}</span>
      <span>/</span>
      <span>{duration}</span>
    </Grid>
  );
};

export default PlayTime;
