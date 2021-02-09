import React from 'react';
import { observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SearchResult from './SearchResult';
import Search from './Search';
import { useRootStore } from '../stores/rootStore';

const style = {
  text: {
    fontSize: 20,
  },
};

const SearchBlock = () => {
  const store = useRootStore();

  return (
    <>
      <Search
        updateFilter={store.songsStore.updateFilter}
        filter={store.songsStore.filter}
        setInitialPlayer={store.playerStore.setInitial}
      />
      {store.songsStore.filteredSongs.length !== 0 ? (
        store.songsStore.filteredSongs.map((song, index) => (
          <SearchResult
            key={song.id}
            song={song}
            setCurrentSong={store.playerStore.setCurrentSong}
            index={index}
          />
        ))
      ) : (
        <Paper variant="outlined">
          <Typography
            variant="subtitle1"
            gutterBottom
            align="center"
            style={style.text}
          >
            Unfortunately, your search returned no results...
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default observer(SearchBlock);
