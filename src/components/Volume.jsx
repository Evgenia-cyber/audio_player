import React from 'react';

import VolumeButton from './VolumeButton';
import VolumeSlider from './VolumeSlider';

const Volume = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibleOnClick = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <React.Fragment>
      <VolumeButton toggleVisibleOnClick={toggleVisibleOnClick} />
      {isVisible && <VolumeSlider />}
    </React.Fragment>
  );
};

export default Volume;
