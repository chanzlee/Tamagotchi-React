import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Screen from './Screen';
import Status from './Status';
import Tamagotchi from '../models/Tamagotchi';
import dead from '../image/dead.jpeg';
import play from '../image/play.png';
import defaultImg from '../image/default.png';
import food from '../image/food.png';
import poop from '../image/poop.png';
import sleep from '../image/sleep.png';
import tired from '../image/tired.png';
import Buttons from  './Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.images = {
      tired: tired,
      dead: dead,
      play: play,
      defaultImg: defaultImg,
      food: food,
      poop: poop,
      sleep: sleep,
    },

    this.state = {
      gutetama: new Tamagotchi('Meguru'),
      image: defaultImg,
    };
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePoop = this.handlePoop.bind(this);
    this.handleFood = this.handleFood.bind(this);
  }

  componentDidMount() {
    let interval = setInterval(() => {
      let gutetamaCopy = this.state.gutetama;
      gutetamaCopy.sleep = (gutetamaCopy.sleep >= 1) ? gutetamaCopy.sleep-1:gutetamaCopy.sleep;
      gutetamaCopy.play = (gutetamaCopy.play >= 1) ? gutetamaCopy.play-1:gutetamaCopy.play;
      gutetamaCopy.poop = (gutetamaCopy.poop >= 1) ? gutetamaCopy.poop-1:gutetamaCopy.poop;
      gutetamaCopy.food = (gutetamaCopy.food >= 1) ? gutetamaCopy.food-1:gutetamaCopy.food;
      if (gutetamaCopy.sleep === 0 || gutetamaCopy.play === 0 || gutetamaCopy.poop === 0 || gutetamaCopy.food === 0) {
        gutetamaCopy.life = false;
        this.setState({gutetama: gutetamaCopy, image: dead});
        clearInterval(interval);
      } else if (gutetamaCopy.sleep <= 20 || gutetamaCopy.play <= 20 || gutetamaCopy.poop <= 20 || gutetamaCopy.food <= 20 ) {
        this.setState({gutetama: gutetamaCopy, image: tired});

      }
      else {
        this.setState({gutetama: gutetamaCopy, image: defaultImg});
      }
    }, 100);
  }

  handleSleep () {
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.sleep <=95) {
      gutetamaCopy.sleep += 5;
    
    }
    this.setState({gutetama: gutetamaCopy, image: sleep});
  }

  handlePlay () {
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.play <=95) {
      gutetamaCopy.play += 5;
    }
    this.setState({gutetama: gutetamaCopy, image: play});
  }

  handlePoop () {
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.poop <=95) {
      gutetamaCopy.poop += 5;
    }
    this.setState({gutetama: gutetamaCopy, image: poop});
  }

  handleFood () {
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.food <=95) {
      gutetamaCopy.food += 5;
    }
    this.setState({gutetama: gutetamaCopy, image: food});
  }

  render() {
    return (
      <div>
        <h2>Welcome to Tamagotchi world!</h2>
        <Screen image={this.state.image}/>
        <Status tamago={this.state.gutetama} />
        <Buttons 
          onSleep={this.handleSleep}
          onPlay={this.handlePlay}
          onPoop={this.handlePoop}
          onFood={this.handleFood}
          life={this.state.gutetama.life} />
      </div>
    );
  }
}

export default App;
