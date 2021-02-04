import React from 'react';
import { observer } from 'mobx-react';

import SearchResult from './SearchResult';
import Search from './Search';
import { SongsStore } from '../stores/songsStore';

const store = new SongsStore();

const SearchBlock = observer(() => {
  return (
    <>
      <Search store={store} />
      {store.filteredSongs &&
        store.filteredSongs.map((song) => (
          <SearchResult
            key={song.id}
            song={song}
          />
        ))}
    </>
  );
});

export default SearchBlock;
