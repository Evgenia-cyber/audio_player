import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const VolumeSlider = ({handleVolumeChange,volume}) => {

  return (
    <Grid item xs={3}>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        aria-labelledby="continuous-slider"
        min={0}
        max={100}
        step={1}
      />
    </Grid>
  );
};

export default VolumeSlider;
