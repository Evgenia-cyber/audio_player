import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

const SearchResult = () => {
  return (
    <Paper variant="outlined" style={style.root}>
      <Typography variant="subtitle1" gutterBottom style={style.text}>
        Loboda - Moloko
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={style.text}>
        03:02
      </Typography>
    </Paper>
  );
};

export default SearchResult;
