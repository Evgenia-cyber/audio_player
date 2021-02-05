import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import SongsStore, { SongsStoreProvider } from './stores/songsStore';

const store = new SongsStore();

ReactDOM.render(
  <React.StrictMode>
    <SongsStoreProvider store={store}>
      <App />
    </SongsStoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
