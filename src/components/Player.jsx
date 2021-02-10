import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

import PlayerButtons from './PlayerButtons';
import Volume from './Volume';
import PlayTime from './PlayTime';
import { useRootStore } from '../stores/rootStore';

const Player = () => {
  const store = useRootStore();

  const songRef = React.createRef();

  const [isCanPlay, setIsCanPlay] = React.useState(false);
  const [volume, setVolume] = React.useState(50);
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };
  const [value, setValue] = React.useState(30);

  React.useEffect(() => {
    songRef.current.volume = volume / 100;
    console.log(songRef.current.volume);
  });
  React.useEffect(() => {
    runInAction(() => {
      if (store.playerStore.isAnotherSong) {
        songRef.current.load();
        songRef.current.play();
        store.playerStore.setIsPlaying(true);
        store.playerStore.setIsAnotherSong(false);
      }
    });
  }, [store.playerStore, songRef]);
  React.useEffect(() => {
    runInAction(() => {
      if (store.playerStore.isAnotherSongsList) {
        songRef.current.load();
        store.playerStore.setIsAnotherSongsList(false);
      }
    });
  }, [store.playerStore, songRef]);

  const onPlayBtnClick = () => {
    songRef.current.play();
    store.playerStore.setIsPlaying(true);
  };
  const onPauseBtnClick = () => {
    songRef.current.pause();
    store.playerStore.setIsPlaying(false);
  };
  const onNextBtnClick = () => {
    runInAction(() => {
      store.playerStore.setNextSong();
    });
  };
  const onPrevBtnClick = () => {
    runInAction(() => {
      store.playerStore.setPrevSong();
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOnCanPlayThrough = () => {
    setIsCanPlay(true);
  };
  const handleOnLoadedMetadata = () => {
    console.log('handleOnLoadedMetadata');
  };
  const handleOnEnded = () => {
    store.playerStore.setNextSong();
  };
  const handleOnError = (e) => {
    console.log(e);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {store.playerStore.currentSong.author} -{' '}
        {store.playerStore.currentSong.songName}
      </Typography>
      <audio
        ref={songRef}
        loop={store.playerStore.isLoop}
        onCanPlayThrough={handleOnCanPlayThrough}
        onLoadedMetadata={handleOnLoadedMetadata}
        onError={handleOnError}
        onEnded={handleOnEnded}
      >
        <source src={store.playerStore.currentSong.src} type="audio/mpeg" />
        <p>Ваш браузер не может воспроизвести аудиозапись.</p>
      </audio>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
      <Grid container spacing={1} alignItems="center" alignContent="flex-start">
        <PlayerButtons
          onPlayBtnClick={onPlayBtnClick}
          isCanPlay={isCanPlay}
          onPauseBtnClick={onPauseBtnClick}
          isPlaying={store.playerStore.isPlaying}
          onNextBtnClick={onNextBtnClick}
          onPrevBtnClick={onPrevBtnClick}
          disabled={store.playerStore.isLoop}
        />
        <Volume handleVolumeChange={handleVolumeChange} volume={volume} />
        <PlayTime />
      </Grid>
    </>
  );
};

export default observer(Player);
