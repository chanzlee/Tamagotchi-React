import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Screen from './Screen';
import Status from './Status';
import Start from './Start';
import Tamagotchi from '../models/Tamagotchi';
import dead from '../image/dead.jpeg';
import play from '../image/play.png';
import defaultImg from '../image/default.png';
import food from '../image/food.png';
import poop from '../image/poop.png';
import sleep from '../image/sleep.png';
import tired from '../image/tired.png';
import title from '../image/title.jpeg';
import start from '../image/start.png';
import Buttons from  './Buttons';
import ipadFrame from '../image/ipadFrame.png';
import $ from '../../node_modules/jquery/dist/jquery';

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
      start: start,
    },

    this.state = {
      gutetama: new Tamagotchi('Meguru'),
      image: defaultImg,
      sleepTimeout: null,
      playTimeout: null, 
      poopTimeout: null, 
      foodTimeout: null,
      gamestarted: false,
    };
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePoop = this.handlePoop.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearAllTimeout = this.clearAllTimeout.bind(this);
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
        this.setState({gutetama: gutetamaCopy, image: this.state.image});
      }
    }, 1000);
  }

  handleSleep () {
    this.clearAllTimeout();
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.sleep <=95) {
      gutetamaCopy.sleep += 5;
    
    }
    this.setState({gutetama: gutetamaCopy, image: sleep});
    this.state.sleepTimeout = (() =>  setTimeout(() => {
      this.setState({gutetama: gutetamaCopy, image: defaultImg});
    }, 3000))();

  }

  handlePlay () {
    this.clearAllTimeout();
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.play <=95) {
      gutetamaCopy.play += 5;
    }
    this.setState({gutetama: gutetamaCopy, image: play});
    this.state.playTimeout = (() => setTimeout(() => {
      this.setState({gutetama: gutetamaCopy, image: defaultImg});
    }, 3000))();
  }

  handlePoop () {
    this.clearAllTimeout();
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.poop <=95) {
      gutetamaCopy.poop += 5;
    }
    this.setState({gutetama: gutetamaCopy, image: poop});
    this.state.poopTimeout = (() => setTimeout(() => {
      this.setState({gutetama: gutetamaCopy, image: defaultImg});
    }, 3000))();
  }

  handleFood () {
    this.clearAllTimeout();
    let gutetamaCopy = this.state.gutetama;
    if (gutetamaCopy.food <=95) {
      gutetamaCopy.food += 5;
    }
    this.setState({gutetama: gutetamaCopy, image: food});
    this.state.foodTimeout = (() => setTimeout(() => {
      this.setState({gutetama: gutetamaCopy, image: defaultImg});
    }, 3000))();
  }

  handleSubmit(event) {
    event.preventDefault();
    let gutetamaCopy = this.state.gutetama;
    gutetamaCopy.name = $('#newName').val();
    this.setState({gutetama: gutetamaCopy, image: this.state.image});
  }

  clearAllTimeout() {
    clearTimeout(this.state.sleepTimeout);
    clearTimeout(this.state.playTimeout);
    clearTimeout(this.state.poopTimeout);
    clearTimeout(this.state.foodTimeout);
  }

  render() {
    if (this.state.gutetama.life === false)
      $('#newNameForm').removeClass();
    $('#newNameForm').addClass('d-none');
    return (
      <div id="appDiv">
        <style jsx>{`
           #appDiv {
            height: 98vh;
            background-image: url(${ipadFrame});
            background-repeat: no-repeat;
            background-position: center;
          }
          #newName {
            width: 200px;
          }
        `}</style>
        <img src={title} className="mx-auto d-block" style={{ paddingTop: '90px', borderRadius: '30px',width: '630px', height:'300px'}} alt="title image"/>
        <Screen image={this.state.image}/>
        <Status tamago={this.state.gutetama} />
        <Buttons 
          onSleep={this.handleSleep}
          onPlay={this.handlePlay}
          onPoop={this.handlePoop}
          onFood={this.handleFood}
          life={this.state.gutetama.life}
          name={this.state.gutetama.name} />
        <form id="newNameForm" onSubmit={this.handleSubmit} className="mt-3 d-flex flex-row justify-content-center">
          <input id="newName" type="text" className="form-control mr-3" placeholder="New name"></input>
          <button type="submit" className="btn btn-light">Update name</button>
        </form>
      </div>
    );
  }
}

export default App;
