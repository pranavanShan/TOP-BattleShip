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

//think this class only exists to make a computer player?

/* 
How classes are used:
Ships is used to create ships in gameboard class, and has relevant information attatched (hits, length, issunk)
gameBoard is used to create a gameboard and can place ships down (which is done at the start of every game) and receieve attacks to itself
gameBoard records its ships via a object, using a 2D array representing its 10x10 grid. Each ship has a unique ID which is related to the
totalShip counter (e.g. first placed ship, no matter length, will have a object key of '1', and all of its markers on the 2D array will be 1,
when all 1s are shot, you will lose access to that object key but you shouldnt need to access it again as all hits have been registered via -2,
the totalships sunk will go up, and the object ship will constantly use the issunK() fn, which would be the only reasons to go back i think)
gameBoard records its sunken ships, and reports if there are no ships left via lost (t = you have lost, f = game keeps going)

so wtf is the point of player?
you could just use two gameboards to operate a game


let player1 = new gameboard
let player 2 =  new gameboard

for(let i = 0; i < 5; i++) {
    use i as a length, if its 3 then do twice, uhh ask user if they want to place vertical or horiz and obvs coords
   input player1.placeShip
   input(player2.placeShip) <-- pretend js has an input command like python 
}

would probably cause an inf loop irl btw cus i think this would translate to an AND loop, and the game should terminate after 
someone loses
let player1Sunk = player1.sunk
let player2Sunk = player2.sunk
while(player 1 or player 2 is not sunk ) 
    player2.receieveattack(userinput with coords) <-- player 1 goes first (opposites cus receieve attack n that)
    player1.receieveattack(userinput with coords) <-- player 2 goes second (opposites cus receieve attack n that)
    update player1sunk and 2 with most recent t/f value on both board classes


once finished
player1Sunk  : "player1 has won" 
player2Sunk  : "player2 has won" //then print relev stats like shots missed, maybe where shipos were but dunno if that rly matters 

*/

export { player };
