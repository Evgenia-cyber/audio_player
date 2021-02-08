import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import RootStore, { RootStoreProvider } from './stores/rootStore';

const store = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider store={store}>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
