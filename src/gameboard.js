import { Ship } from "./ships.js";
class gameBoard {
  constructor() {
    this.board = (function createBoard() {
      let array = [];
      for (let i = 0; i < 10; i++) {
        let subArray = new Array(10).fill(0);
        array.push(subArray);
      }
      return array;
    })();
    this.totalShots = 0;
    this.shotsHit = 0;
    this.lostShips = 0;
    this.totalShips = 0;
    this.ships = {};
    this.lost = false;
  }

  pathAvailable(coordinates, length, direction) {
    let [y, x] = [...coordinates];
    if (
      this.board[y] === undefined ||
      this.board[y][x] === undefined ||
      this.board[y][x] !== 0
    )
      return false;
    if (y + (length - 1) > 9 && direction) return false;
    if (x + (length - 1) > 9 && direction == false) return false;
    let position = this.board[y][x];
    for (let i = 0; i < length; i++) {
      if (position !== 0) {
        return false;
      }
      if(direction) y++
      else if(!direction) x++
      position = this.board[y][x]
    }
    return true;
  }

  placeShip(coordinates, length, direction) {
    //true = vertical , false = horizontal
    let [y, x] = [...coordinates];
    if (!this.pathAvailable(coordinates, length, direction)) return false;
    this.totalShips++;
    this.ships[this.totalShips] = new Ship(length);
    for (let i = 0; i < length; i++) {
      this.board[y][x] = this.totalShips;
      direction ? y++ : x++;
    }
    return true;
  }

  // -1 = miss, -2 = hit
  receiveAttack(coordinates) {
    let [y, x] = [...coordinates];
    if (this.board[y] === undefined || this.board[y][x] === undefined)
      return false;
    this.totalShots++;
    if (this.board[y][x] < 0) {
      return false;
    }
    if (this.board[y][x] === 0) {
      this.board[y][x] = -1;
      return true;
    }
    if (this.board[y][x] > 0) {
      this.shotsHit++;
      this.ships[this.board[y][x]].hit();
      this.ships[this.board[y][x]].isSunk();
      if (this.ships[this.board[y][x]].isSunk()) this.lostShips++;
      this.board[y][x] = -2;
      if (this.totalShips === this.lostShips) this.lost = true;
      return true;
    }
  }
}

//A potential thought for constructing AI for this game.
// Probably use that algorithm you just made (potential kngiht chess moves). Somewhat similar logic.
// Would maybe need to quantify 'stupid' and 'smart' moves the bot can choose at random so the bot isnt just op
export { gameBoard };

/* 
      0 1 2 3 4 5 6 7 8 9  X
 0   [0,0,0,0,0,0,0,0,0,0]
 1   [0,0,0,0,0,0,0,0,0,0]
 2   [0,0,0,0,0,0,0,0,0,0]
 3   [0,0,0,0,0,0,0,0,0,0]
 4   [0,0,0,0,0,0,0,0,0,0]
 5   [0,0,0,0,0,0,0,0,0,0]
 6   [0,0,0,0,0,0,0,0,0,0]
 7   [0,0,0,0,0,0,0,0,0,0]
 8   [0,0,0,0,0,0,0,0,0,0]
 9   [0,0,0,0,0,0,0,0,0,0]
 Y
board [y][x]
*/
