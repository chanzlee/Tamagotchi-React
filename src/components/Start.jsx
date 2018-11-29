import React from 'react';

const Start = (props) => {
  return (
    <div>
      <img className="mx-auto d-block" style={{ marginTop: '50px', width: '400px', height: '340px'}} src={props.image} alt="" />
      <button onClick={props.onStart} className="btn btn-warning mx-auto d-block">Start</button>
    </div>
  );
};

export default Start;