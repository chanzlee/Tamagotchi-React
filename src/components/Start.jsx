import React from 'react';
import start from '../image/start.png';
import { Link } from 'react-router-dom';

const selectBtnStyle = {
  fontSize: '14px',
  paddingTop: '3px',
  paddingBottom: '3px',
};

const Start = (props) => {
  return (
    <div className="d-flex flex-column">
      <style jsx>
        {`
        .selectBtn {
          font-size: 14px;
          padding-top: 3px;
          padding-bottom: 3px;
        }
      `}
      </style>

      <img className="mx-auto d-block" style={{ marginTop: '50px', width: '400px', height: '340px' }} src={start} alt="" />
      <ul className="mx-auto list-group">
        {props.gutetamaList.map((gutetama, index) => (
          <li
            className="list-group-item" 
            key= {index}>
            <span>{gutetama.name}</span>
            <Link to="/tamagotchi" style={selectBtnStyle} className="ml-3 btn btn-warning float-right" onClick={() => props.selectGutetama(gutetama.ID)}>Select</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Start;
