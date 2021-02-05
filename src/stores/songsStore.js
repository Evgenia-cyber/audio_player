import React from 'react';
import { action, computed, configure, makeObservable, observable } from 'mobx';
import { SONGS } from './db';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});

export default class SongsStore {
  // @observable
  songs = SONGS;
  filter = '';
  currentSong = this.songs[0];

  // @computed
  get songsWithDurationForDisplay() {
    return this.songs.map((song) => {
      const duration = song.duration;
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      song.durationForDisplay = minutes + ':' + seconds;
      return song;
    });
  }

  get filteredSongs() {
    const findMatch = (string, filter) => {
      const match = string.toLocaleLowerCase().indexOf(filter);
      return match === -1 ? false : true;
    };

    return this.songsWithDurationForDisplay.filter(
      (song) =>
        findMatch(song.author, this.filter) ||
        findMatch(song.songName, this.filter),
    );
  }

  constructor() {
    makeObservable(this, {
      songs: observable,
      filter: observable,
      currentSong: observable,
      songsWithDurationForDisplay: computed,
      filteredSongs: computed,
      updateFilter: action,
      setCurrentSong: action,
    });
  }

  //@action
  updateFilter = (inputText) => {
    this.filter = inputText;
  };
  setCurrentSong = (song) => {
    this.currentSong = song;
  };
}

/* Store helpers */
const SongsContext = React.createContext();

export const SongsStoreProvider = ({ children, store }) => {
  return (
    <SongsContext.Provider value={store}>{children}</SongsContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useSongsStore = () => React.useContext(SongsContext);

/* HOC to inject store to any functional or class component */
export const withSongsStore = (Component) => (props) => {
  return <Component {...props} store={useSongsStore()} />;
};
