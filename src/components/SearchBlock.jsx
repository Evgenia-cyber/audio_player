import React from 'react';
import { observer } from 'mobx-react';

import SearchResult from './SearchResult';
import Search from './Search';
import { useRootStore } from '../stores/rootStore';

const SearchBlock = () => {
  const store = useRootStore();
  
  return (
    <>
      <Search updateFilter={store.songsStore.updateFilter} filter={store.songsStore.filter} />
      {store.songsStore.filteredSongs &&
        store.songsStore.filteredSongs.map((song) => (
          <SearchResult
            key={song.id}
            song={song}
            setCurrentSong={store.playerStore.setCurrentSong}
          />
        ))}
    </>
  );
};

export default observer(SearchBlock);
