import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const VolumeButton = ({ toggleVisibleOnClick, volume }) => {
  return (
    <Grid item>
      <IconButton
        onClick={toggleVisibleOnClick}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        {volume === 0 ? <VolumeOffIcon /> : <VolumeDown />}
      </IconButton>
    </Grid>
  );
};
export default VolumeButton;
