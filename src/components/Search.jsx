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

const Search = ({ updateFilter, filter,setInitialPlayer }) => {
  const inputOnChange = (event) => {
    const inputValue = event.target.value;
    updateFilter(inputValue);
    setInitialPlayer()
  };
  return (
    <form noValidate autoComplete="off" style={style.root}>
      <InputBase
        style={style.input}
        placeholder="Search..."
        autoFocus
        value={filter}
        onChange={inputOnChange}
      />
      <IconButton type="submit" style={style.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default Search;
