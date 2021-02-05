import React from 'react';
import { observer } from 'mobx-react';

import SearchResult from './SearchResult';
import Search from './Search';
import { useSongsStore } from '../stores/songsStore';

  const SearchBlock = () => {
  const store = useSongsStore();
  
  return (
    <>
      <Search updateFilter={store.updateFilter} filter={store.filter} />
      {store.filteredSongs &&
        store.filteredSongs.map((song) => (
          <SearchResult key={song.id} song={song} />
        ))}
    </>
  );
};

export default observer(SearchBlock);
