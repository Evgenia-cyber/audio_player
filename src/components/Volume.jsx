import React from 'react';

import VolumeButton from './VolumeButton';
import VolumeSlider from './VolumeSlider';

const Volume = ({handleVolumeChange,volume}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibleOnClick = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <React.Fragment>
      <VolumeButton toggleVisibleOnClick={toggleVisibleOnClick} volume={volume}/>
      {isVisible && <VolumeSlider handleVolumeChange={handleVolumeChange} volume={volume}/>}
    </React.Fragment>
  );
};

export default Volume;
