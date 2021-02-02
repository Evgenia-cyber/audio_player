import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const VolumeSlider = () => {
  const [value2, setValue2] = React.useState(30);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <Grid item xs={3}>
      <Slider
        value={value2}
        onChange={handleChange2}
        aria-labelledby="continuous-slider"
      />
    </Grid>
  );
};

export default VolumeSlider;
