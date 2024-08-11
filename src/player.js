import { gameBoard } from "./gameboard";
import { Ship } from "./ships";
class player {
  constructor() {
    this.board = new gameBoard();
  }

  getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  computerPlace() {
    let classic = [2, 3, 3, 4, 5];
    for (let i = 0; i < classic.length; i++) {
      let coords = [this.getRandomInteger(0, 10), this.getRandomInteger(0, 10)];
      let direction = Boolean(this.getRandomInteger(0, 2));
      if (!this.board.placeShip(coords, classic[i], direction)) i--;
    }
    return true;
  }
}

export { player };
