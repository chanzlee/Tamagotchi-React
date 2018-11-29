import React from 'react';
import PropType from 'prop-types';

const Screen = (props) => {
  return (
    <div>
      <img className="mx-auto d-block" style={{ marginTop: '30px', width: '400px', height: '340px'}} src={props.image}></img>
    </div>
  );
};

Screen.propTypes = {
  image: PropType.string,
};

export default Screen;