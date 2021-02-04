import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

const style = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
  },
  text: {
    fontSize: 20,
  },
};

const SearchResult = observer(({ song }) => {
  return (
    <Paper variant="outlined" style={style.root}>
      <audio src={'../assets/audio/' + song.src} />
      <Typography variant="subtitle1" gutterBottom style={style.text}>
        {song.author} - {song.songName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={style.text}>
        {song.durationForDisplay}
      </Typography>
    </Paper>
  );
});

export default SearchResult;
