import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Start from './Start';
import Tamagotchi from '../models/Tamagotchi';
import $ from '../../node_modules/jquery/dist/jquery';
import { Switch, Route } from 'react-router-dom';
import Index from './Index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gutetamaList: [
        new Tamagotchi('Meguru'), new Tamagotchi('Chris'), new Tamagotchi('Kenneth')
      ],
      currentGutetama: null,
    };
    this.handleSelectGutetama = this.handleSelectGutetama.bind(this);
  }

  handleSelectGutetama(gutetamaID) {
    this.setState({gutetamaList: this.state.gutetamaList, currentGutetama: this.state.gutetamaList.find(gutetama => gutetama.ID === gutetamaID)});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <Start {...props} 
            gutetamaList = {this.state.gutetamaList}
            selectGutetama={this.handleSelectGutetama} />} />
          <Route exact path='/tamagotchi' render={(props) => <Index {...props} currentGutetama={this.state.currentGutetama} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
