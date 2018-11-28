import React from 'react';
import $ from '../../node_modules/jquery/dist/jquery';
import PropType from 'prop-types';

const Buttons = (props) => {
  if (props.life === false)
    $('#buttons').hide();

  return (
      <div>
    <div id="buttons">
      <button onClick={props.onSleep} className="btn btn-success">Sleep</button>
      <button onClick={props.onPlay} className="btn btn-success">Play</button>
      <button onClick={props.onPoop} className="btn btn-success">Poop</button>
      <button onClick={props.onFood} className="btn btn-success">Food</button>
    </div>
        {(!props.life)? <h1>Mel is Ded</h1> : null}
    </div>
  );
};

Buttons.propTypes = {
  onSleep: PropType.func,
  onPlay: PropType.func,
  onPoop: PropType.func,
  onFood: PropType.func,
  life: PropType.bool
};
 
export default Buttons;