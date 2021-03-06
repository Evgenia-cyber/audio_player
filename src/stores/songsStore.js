import {
  action,
  computed,
  configure,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
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

  secondsToTimeDisplay = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };

  // @computed
  get songsWithDurationForDisplay() {
    return this.songs.map((song) => {
      runInAction(() => {
        song.durationForDisplay = this.secondsToTimeDisplay(song.duration);
      });
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

  constructor(rootStore) {
    makeObservable(this, {
      songs: observable,
      filter: observable,
      songsWithDurationForDisplay: computed,
      filteredSongs: computed,
      updateFilter: action,
    });
    this.rootStore = rootStore;
  }

  //@action
  updateFilter = (inputText) => {
    this.filter = inputText;
  };
}
