import React from 'react';
import PropType from 'prop-types';

const Screen = (props) => {
  return (
    <div>
      <img src={props.image}></img>
    </div>
  );
};

Screen.propTypes = {
  image: PropType.string,
};

export default Screen;