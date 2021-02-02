import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

function VolumeButton() {
  return (
      <Grid item>
      <IconButton color="primary" aria-label="upload picture" component="span">
        <VolumeDown />
        {/* <VolumeOff/> */}
      </IconButton>
      </Grid>
  );
}

export default VolumeButton;
