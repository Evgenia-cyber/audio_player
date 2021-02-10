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
  const [songSliderCurrentTime, setSongSliderCurrentTime] = React.useState(0);

  React.useEffect(() => {
    songRef.current.volume = volume / 100;
  }, [songRef, volume]);
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

  const handleSongSliderCurrentTimeChange = (event, newValue) => {
    setSongSliderCurrentTime(newValue);
    store.playerStore.setCurrentSongCurrentTime(newValue);
    songRef.current.currentTime = newValue;
  };
  const handleOnCanPlayThrough = () => {
    setIsCanPlay(true);
  };
  const handleOnLoadedMetadata = () => {
    store.playerStore.setCurrentSongDuration(songRef.current.duration);
  };
  const handleOnTimeUpdate = () => {
    store.playerStore.setCurrentSongCurrentTime(songRef.current.currentTime);
    setSongSliderCurrentTime(songRef.current.currentTime);
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
        onTimeUpdate={handleOnTimeUpdate}
        onError={handleOnError}
        onEnded={handleOnEnded}
      >
        <source src={store.playerStore.currentSong.src} type="audio/mpeg" />
        <p>Ваш браузер не может воспроизвести аудиозапись.</p>
      </audio>
      <Slider
        value={songSliderCurrentTime}
        onChange={handleSongSliderCurrentTimeChange}
        aria-labelledby="continuous-slider"
        min={0}
        max={store.playerStore.currentSongDuration}
        step={0.01}
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
        <PlayTime
          duration={store.playerStore.currentSongDurationForDisplay}
          currentTime={store.playerStore.currentSongCurrentTimeForDisplay}
        />
      </Grid>
    </>
  );
};

export default observer(Player);
