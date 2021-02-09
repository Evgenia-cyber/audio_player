import {
  action,
  computed,
  configure,
  makeObservable,
  observable,
  toJS,
} from 'mobx';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});

export default class PlayerStore {
  // @observable
  songs = [];
  currentSong = {};
  isAnotherSong = false;
  isAnotherSongsList = false;
  isPlaying = false;

  // @computed
  get isLoop() {
    return this.songs.length === 1 ? true : false;
  }

  constructor(rootStore) {
    makeObservable(this, {
      songs: observable,
      currentSong: observable,
      isAnotherSong: observable,
      isAnotherSongsList: observable,
      isPlaying: observable,
      isLoop: computed,
      setInitial: action,
      setCurrentSong: action,
      setIsAnotherSong: action,
      setIsAnotherSongsList: action,
      setIsPlaying: action,
      setNextSong: action,
      setPrevSong: action,
    });
    this.rootStore = rootStore;
    this.setInitial();
  }

  //@action
  setInitial = () => {
    this.songs = this.rootStore.songsStore.filteredSongs;
    this.songs.forEach((song, index) => {
      song.index = index;
    });
    this.currentSong = this.songs[0];
    this.isAnotherSongsList = true;
    this.isPlaying = false;
    console.log(toJS(this.songs));
    console.log(toJS(this.currentSong));
  };
  setCurrentSong = (song) => {
    this.currentSong = song;
    this.isAnotherSong = true;
  };
  setIsAnotherSong = (boolean) => {
    this.isAnotherSong = boolean;
  };
  setIsAnotherSongsList = (boolean) => {
    this.isAnotherSongsList = boolean;
  };
  setIsPlaying = (boolean) => {
    this.isPlaying = boolean;
    console.log('action setIsPlaying =', boolean);
  };
  setNextSong = () => {
    console.log(toJS(this.currentSong));
    if (this.currentSong.index === this.songs.length - 1) {
      this.currentSong = this.songs[0];
    } else {
      this.currentSong = this.songs.find(
        (song, index) => index === this.currentSong.index + 1,
      );
    }
    console.log(toJS(this.songs));
    this.isAnotherSong = true;
    console.log('action setNextSong');
  };
  setPrevSong = () => {
    if (this.currentSong.index === 0) {
      const songsLength = this.songs.length;
      this.currentSong = this.songs[songsLength - 1];
    } else {
      this.currentSong = this.songs.find(
        (song, index) => index === this.currentSong.index - 1,
      );
    }
    this.isAnotherSong = true;
  };
}
