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

  React.useEffect(() => {
    songRef.current.volume = volume / 100;
  }, [songRef, volume]);

  React.useEffect(() => {
    runInAction(() => {
      if (store.playerStore.isAnotherSong) {
        songRef.current.load();
        songRef.current.play().catch((e) => {
          console.log(e); /* error handler (for firefox)*/
        });
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
    songRef.current.play().catch((e) => {
      console.log(e); /* error handler (for firefox)*/
    });
    runInAction(() => {
      store.playerStore.setIsPlaying(true);
    });
  };
  const onPauseBtnClick = () => {
    songRef.current.pause();
    runInAction(() => {
      store.playerStore.setIsPlaying(false);
    });
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
  };
  const handleOnEnded = () => {
    store.playerStore.setNextSong();
  };
  const handleOnError = (e) => {
    console.error('handleOnError in <audio/> in Player.jsx');
    console.log(e);
    alert('This song is not available! Select another song.');
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
        value={store.playerStore.currentSongCurrentTime}
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
          onNextBtnClick={onNextBtnClick}
          onPrevBtnClick={onPrevBtnClick}
          store={store}
        />
        <Volume handleVolumeChange={handleVolumeChange} volume={volume} />
        <PlayTime store={store} />
      </Grid>
    </>
  );
};

export default observer(Player);
