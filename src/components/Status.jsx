import React from 'react';

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
        <div className="container">
            <p>{props.tamago.name}</p>

            <p>{props.tamago.sleep}</p>
            <div className="progress">
                <div className="progress-bar" role="progressbar"  style={sleep} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>{props.tamago.play}</p>
            <div className="progress">
                <div className="progress-bar" role="progressbar"  style={play} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>{props.tamago.poop}</p>
            <div className="progress">
                <div className="progress-bar" role="progressbar"  style={poop} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>{props.tamago.food}</p>
            <div className="progress">
                <div className="progress-bar" role="progressbar"  style={food} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

      );
}

export default Status;