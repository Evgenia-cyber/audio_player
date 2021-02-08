import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { observer } from 'mobx-react';

import PlayerButtons from './PlayerButtons';
import Volume from './Volume';
import PlayTime from './PlayTime';
import { useRootStore } from '../stores/rootStore';

// import url from '../assets/audio/LOBODA.mp3';

const Player = () => {
  const store = useRootStore();
  const [value, setValue] = React.useState(30);
  const songRef = React.createRef();
  // React.useEffect(() => {
  //   const audio = songRef.current;
  //   audio.muted = true;
  //   audio.play();
  //   audio.muted = false;
  // }, [store.currentSong.src]);
  const onPlayBtnClick = () => {
    console.log(songRef);
    songRef.current.play();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOnLoadedMetadata = () => {
    console.log('handleOnLoadedMetadata');
  };
  const handleOnError = (e) => {
    console.log(e);
  };
  // debugger;
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {store.playerStore.currentSong.author} - {store.playerStore.currentSong.songName}
      </Typography>
      <audio
        ref={songRef}
        onLoadedMetadata={handleOnLoadedMetadata}
        onError={handleOnError}
      >
        <source
          src={store.playerStore.currentSong.src}
          // src='../assets/audio/LOBODA.mp3'
          // src="https://mp3uks.ru/mp3/files/loboda-moloko-mp3.mp3"
          // src={url}
          type="audio/mpeg"
        />
        <p>Ваш браузер не может воспроизвести аудиозапись.</p>
      </audio>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
      <Grid container spacing={1} alignItems="center" alignContent="flex-start">
        <PlayerButtons onPlayBtnClick={onPlayBtnClick} />
        <Volume />
        <PlayTime />
      </Grid>
    </>
  );
};

export default observer(Player);
