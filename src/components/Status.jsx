import React from 'react';
import PropType from 'prop-types';
import Tamagotchi from '../models/Tamagotchi';
import { Link } from 'react-router-dom';

const Status = (props) => {
  let sleep = {
    width: `${props.tamago.sleep}%`,
  };
  let play = {
    width: `${props.tamago.play}%`,
  };
  let poop = {
    width: `${props.tamago.poop}%`,
  };
  let food = {
    width: `${props.tamago.food}%`,
  };

  return (
    <div id="progressBars" className="mx-auto">
      <style jsx>{`
        #progressBars {
            width: 600px;
        }
      `}</style>
      <div className='text-center'><Link to="/" className="btn btn-secondary btn-sm">Back to main</Link></div>
      <div className="text-center mt-1">
        <h3 className="font-weight-bold">{props.tamago.name}</h3>
      </div>
      <div className="mb-2">Sleep: {props.tamago.sleep}</div>
      <div className="progress mb-2">
        <div className="progress-bar" role="progressbar"  style={sleep} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="mb-2">Play: {props.tamago.play}</div>
      <div className="progress mb-2">
        <div className="progress-bar" role="progressbar"  style={play} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="mb-2">Poop: {props.tamago.poop}</div>
      <div className="progress mb-2">
        <div className="progress-bar" role="progressbar"  style={poop} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="mb-2">Food: {props.tamago.food}</div>
      <div className="progress mb-2">
        <div className="progress-bar" role="progressbar"  style={food} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

  );
};

Status.propTypes = {
  tamago: PropType.instanceOf(Tamagotchi),
};

export default Status;