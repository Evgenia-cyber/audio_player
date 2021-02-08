import React from 'react';

import SongsStore from './songsStore';
import PlayerStore from './playerStore';

export default class RootStore {
  constructor() {
    this.songsStore = new SongsStore(this);
    this.playerStore = new PlayerStore(this);
  }
}

/* Store helpers */
const RootStoreContext = React.createContext();

export const RootStoreProvider = ({ children, store }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useRootStore = () => React.useContext(RootStoreContext);

/* HOC to inject store to any functional or class component */
export const withRootStore = (Component) => (props) => {
  return <Component {...props} store={useRootStore()} />;
};
