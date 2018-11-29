import React from 'react';
import $ from '../../node_modules/jquery/dist/jquery';
import PropType from 'prop-types';

const Buttons = (props) => {
  if (props.life === false) {
    $('#buttons').hide();
  }

  return (
    <div className="row justify-content-center mt-4">
      <div id="buttons">
        <button onClick={props.onSleep} className="btn btn-light mr-3">Sleep</button>
        <button onClick={props.onPlay} className="btn btn-light mr-3">Play</button>
        <button onClick={props.onPoop} className="btn btn-light mr-3">Poop</button>
        <button onClick={props.onFood} className="btn btn-light mr-3">Food</button>
      </div>
      {(!props.life) ? <div className="bg-warning text-white mt-2"><h1>: {props.name} is Dead :</h1></div> : null}
    </div>
  );
};

Buttons.propTypes = {
  onSleep: PropType.func,
  onPlay: PropType.func,
  onPoop: PropType.func,
  onFood: PropType.func,
  life: PropType.bool,
  name: PropType.string,
};

export default Buttons;