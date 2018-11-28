import React from 'react';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Screen from './Screen';
import Status from './Status';
import Tamagotchi from '../models/Tamagotchi';
import dead from '../image/dead.jpeg';
import play from '../image/play.png';
import defaultImg from '../image/default.png';
import food from '../image/food.png';
import poop from '../image/poop.png';
import sleep from '../image/sleep.png';


function App(){
  let gutetama = new Tamagotchi("Meguru");
  let images = {
    dead: dead,
    play: play,
    defaultImg: defaultImg,
    food: food,
    poop: poop,
    sleep: sleep,
  }

  return (
    <div>
      <h2>Welcome to Tamagotchi world!</h2>
      <Screen />
      <Status tamago = {gutetama}/>
    </div>
  );
}

export default App;
