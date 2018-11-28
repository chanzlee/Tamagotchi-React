import React from 'react';
import defaultImg from '../image/default.png';
import PropType from 'prop-types';

const Screen = () => {
  return (
    <div>
      <img src={defaultImg}></img>
    </div>
  );
};

Screen.propTypes = {
  images: PropType.object,
};

export default Screen;