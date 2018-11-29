import { v4 } from 'uuid';

class Tamagotchi {
  constructor(name) {
    this.ID = v4();
    this.name = name;
    this.food = 50;
    this.sleep = 50;
    this.play = 50;
    this.poop = 50;
    this.life = true;
  }
}

export default Tamagotchi;