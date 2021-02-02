import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const style = {
  root: {
    height: 70,
    position: 'absolute',
    top: 50,
    left: 155,
  },
};

const VolumeSlider = () => {
  const [value2, setValue2] = React.useState(30);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const mediaQuery = useMediaQuery('(max-width:470px)');

  return (
    <Grid item xs={mediaQuery ? 1 : 3}>
      <Slider
        value={value2}
        onChange={handleChange2}
        aria-labelledby="continuous-slider"
        orientation={mediaQuery ? 'vertical' : 'horizontal'}
        style={mediaQuery ? style.root : {}}
      />
    </Grid>
  );
};

export default VolumeSlider;
