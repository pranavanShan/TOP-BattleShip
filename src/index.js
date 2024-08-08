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
function createPlayerGrid(player) {
  const playerGrid = document.createElement("div");
  playerGrid.classList.add("gameboard");
  for (let i = 0; i < player.board.board.length; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < player.board.board[i].length; j++) {
      const part = document.createElement("div");
      part.classList.add("part");
      row.append(part);
      playerGrid.append(row);
    }
  }
  return playerGrid;
}

function receieveAttackDOM(player, playerGrid) {
  for (let i = 0; i < player.board.board.length; i++) {
    for (let j = 0; j < player.board.board[i].length; j++) {
      let currentNode = playerGrid.childNodes[i].childNodes[j];
      currentNode.addEventListener("click", () => {
        player.board.receiveAttack([j, i]);
        currentNode.classList.add("inactivePart");
        if (player.board.board[j][i] == -1)
          currentNode.style.backgroundColor = "grey";
        if (player.board.board[j][i] == -2)
          currentNode.style.backgroundColor = "red";
        if (player.board.lost) console.log("Lost!"); //Lose logic
      });
    }
  }
}


function robotAttackDOM(player, playerGrid) {
  let coords = [player.getRandomInteger(0,10), player.getRandomInteger(0,10)]
  let result = player.board.receiveAttack(coords)
  while(result === false) {
    coords = [player.getRandomInteger(0,10), player.getRandomInteger(0,10)]
    result = player.board.receiveAttack(coords)
  }
  let [y, x] = [...coords]
  if(player.board.board[y][x] == -1) {
    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = "grey"
  }
  if(player.board.board[y][x] == -2) {
    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = "red"
  }

  if(player.board.lost) console.log("lost!")

  return true
}



function turnController(player1Grid, player2Grid) {
  for (let i = 0; i < player1Grid.childNodes.length; i++) {
    for (let j = 0; j < player1Grid.childNodes[i].childNodes.length; j++) {
      player1Grid.childNodes[i].childNodes[j].addEventListener("click", () => {
        changeTurns(player1Grid, player2Grid);
        
      });
      player2Grid.childNodes[i].childNodes[j].addEventListener("click", () => {
        robotAttackDOM(player1, player1Grid)
        changeTurns(player1Grid, player2Grid)
        changeTurns(player1Grid, player2Grid);
      });
    }
  }
}

function changeTurns(playerGrid, player2Grid) {
  if (playerGrid.classList.contains("inactiveBoard")) {
    playerGrid.classList.remove("inactiveBoard");
    player2Grid.classList.add("inactiveBoard");
  } else if (player2Grid.classList.contains("inactiveBoard")) {
    player2Grid.classList.remove("inactiveBoard");
    playerGrid.classList.add("inactiveBoard");
  }
}

const player1Grid = createPlayerGrid(player1);
const player2Grid = createPlayerGrid(player2);
receieveAttackDOM(player1, player1Grid, player2, player2Grid);
receieveAttackDOM(player2, player2Grid, player1, player1Grid);
player1Grid.classList.add("inactiveBoard");
turnController(player1Grid, player2Grid);
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

/*
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


      */
