import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { observer } from 'mobx-react';

import SearchBlock from './components/SearchBlock';
import Player from './components/Player';
import { useRootStore } from './stores/rootStore';


const style = {
  container: {
    marginTop: 50,
  },
};

function App() {
  const store = useRootStore();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" style={style.container}>
        {store.playerStore.songs.length !== 0 && <Player />}
        <SearchBlock />
      </Container>
    </React.Fragment>
  );
}

export default observer(App);
