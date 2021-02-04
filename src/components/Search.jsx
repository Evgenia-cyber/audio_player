import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { observer } from 'mobx-react';

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

const Search = observer(({ store }) => {
  const inputOnChange = (event) => {
    const inputValue = event.target.value;
    store.updateFilter(inputValue);
  };
  return (
    <form noValidate autoComplete="off" style={style.root}>
      <InputBase
        style={style.input}
        placeholder="Search..."
        autoFocus
        value={store.filter}
        onChange={inputOnChange}
      />
      <IconButton type="submit" style={style.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
});

export default Search;
