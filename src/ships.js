class Ship {
  constructor(length, hits = 0, sunk = false) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    return this.length === this.hits ? (this.sunk = true) : false;
  }
}

export { Ship };
