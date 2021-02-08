import { action, computed, configure, makeObservable, observable } from 'mobx';
import { SONGS } from './db';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});

export default class PlayerStore {
  // @observable
  songs = SONGS;
  currentSong = this.songs[0];

  // @computed

  constructor() {
    makeObservable(this, {
      songs: observable,
      currentSong: observable,
      setCurrentSong: action,
    });
  }

  //@action
  setCurrentSong = (song) => {
    this.currentSong = song;
  };
}
