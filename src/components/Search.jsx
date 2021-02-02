import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const style = {
  root: {
    margin: '20px 0',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottom: '1px solid #000',
  },
  iconButton: {
    padding: 10,
  },
};

const Search = () => {
  return (
    <form noValidate autoComplete="off" style={style.root}>
      <InputBase style={style.input} placeholder="Search..." autoFocus />
      <IconButton type="submit" style={style.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default Search;
