import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const style = {
  root: {
    flexBasis: '100%',
  },
};

const PlayTime = () => {
  const mediaQuery = useMediaQuery('(max-width:470px)');
  return (
    <Grid item style={mediaQuery ? style.root : {}}>
      <span>03:30</span>
      <span>/</span>
      <span>03:30</span>
    </Grid>
  );
};

export default PlayTime;
