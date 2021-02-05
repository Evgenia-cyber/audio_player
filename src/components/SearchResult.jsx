import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';

const style = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    cursor: 'pointer',
  },
  text: {
    fontSize: 20,
  },
};

const SearchResult = ({ song }) => {
  const onSongClick = () => {
    alert(1);
  };
  return (
    <Paper variant="outlined" style={style.root} onClick={onSongClick}>
      <Typography variant="subtitle1" gutterBottom style={style.text}>
        {song.author} - {song.songName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={style.text}>
        {song.durationForDisplay}
      </Typography>
    </Paper>
  );
};

export default observer(SearchResult);
