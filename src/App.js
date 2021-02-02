import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SearchBlock from './components/SearchBlock';
import Player from './components/Player';

const style = {
  container: {
    marginTop: 50,
  }
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" style={style.container}>
        <Player />
        <SearchBlock />
      </Container>
    </React.Fragment>
  );
}

export default App;
