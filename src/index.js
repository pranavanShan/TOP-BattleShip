import "./style.css";
import { Ship } from "./ships.js";
import { gameBoard } from "./gameboard.js";
import { player } from "./player.js";
//use ESLint! (Right click should show reformat doc, make sure to have VS code install ESLint)
//If you get an error saying ./src/src couldn't be found, you've used npx webpack in the wrong directory, needs to be in the project folder, not src.
//Need to implement Jest
// TDD boils down to:
// Red: Make a test, make it fail
// Yellow: Make a solution that passes the test, no matter how ugly or wrong the code is
// Green: Refactor the code to make it functional
// Repeat until program is done

let player1 = new player();
let player2 = new player();

player1.board.placeShip([0, 0], 2, true);
player1.board.placeShip([2, 0], 3, false);
player1.board.placeShip([9, 5], 3, false);
player1.board.placeShip([0, 5], 3, false);
player1.board.placeShip([0, 9], 5, true);
player2.computerPlace();

//jest doesnt work cus of style.css
//dosnt rly matter cus told not to test css anyway so
// need to find out how to make robot to moves and have it rejister
//cant rly do in create player grid cus its being made in the function n shit
//which was probabl rly dumb, might need to sepreate create grid and attackplayer logic even if it is DOM related.
function createPlayerGrid(player) {
  const playerGrid = document.createElement("div");
  playerGrid.classList.add("gameboard");
  for (let i = 0; i < player.board.board.length; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < player.board.board[i].length; j++) {
      const part = document.createElement("div");
      part.classList.add("part");
      part.addEventListener("click", () => {
        player.board.receiveAttack([j, i]);
        if (player.board.board[j][i] === -2) {
          part.style.backgroundColor = "red";
          part.classList.add("inactivePart");
        }
        if (player.board.board[j][i] === -1) {
          part.style.backgroundColor = "grey";
          part.classList.add("inactivePart");
        }
        document
          .querySelectorAll(".inactiveBoard")[0]
          .classList.remove("inactiveBoard");
        playerGrid.classList.add("inactiveBoard");
        if (player.board.lost) {
          //lose logic here
        }
      });
      row.append(part);
      playerGrid.append(row);
    }
  }
  return playerGrid;
}

const player1Grid = createPlayerGrid(player1);
const player2Grid = createPlayerGrid(player2);
player1Grid.classList.add("inactiveBoard");
document.body.append(player1Grid);
document.body.append(player2Grid);

export { Ship, gameBoard, player };

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
