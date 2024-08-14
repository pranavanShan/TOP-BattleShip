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
      if (direction && y < 9) y++;
      else if (!direction && x < 9) x++;
      position = this.board[y][x];
    }
    return true;
  }

  placeShip(coordinates, length, direction) {
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

export { gameBoard };
