import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import PlayerButtons from './PlayerButtons';
import Volume from './Volume';
import PlayTime from './PlayTime';

const style = {
  grid: {
    position: 'relative',
  },
};

const Player = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Loboda - Moloko
      </Typography>
      <audio>
        <source src="assets/audio/1.mp3" type="audio/mpeg" />
        <source src="assets/audio/1.ogg" type="audio/ogg" />
      </audio>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
      <Grid
        container
        spacing={1}
        alignItems="center"
        alignContent="flex-start"
        style={style.grid}
      >
        <PlayerButtons />
        <Volume />
        <PlayTime />
      </Grid>
    </>
  );
};

export default Player;
