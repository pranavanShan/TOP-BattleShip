import "./style.css";
import { Ship } from "./ships.js";
import { gameBoard } from "./gameboard.js";
import { player } from "./player.js";
const navbar = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "Battleship";
navbar.classList.add("navbar");
navbar.append(title);
document.body.append(navbar);

function createPlayerGrid() {
  const playerGrid = document.createElement("div");
  playerGrid.classList.add("gameboard");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < 10; j++) {
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
  let coords = [player.getRandomInteger(0, 10), player.getRandomInteger(0, 10)];
  let result = player.board.receiveAttack(coords);
  while (result === false) {
    coords = [player.getRandomInteger(0, 10), player.getRandomInteger(0, 10)];
    result = player.board.receiveAttack(coords);
  }
  let [y, x] = [...coords];
  if (player.board.board[y][x] == -1) {
    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = "grey";
  }
  if (player.board.board[y][x] == -2) {
    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = "red";
  }

  if (player.board.lost) console.log("lost!"); //lose logic

  return true;
}

function turnController(player1Grid, player2Grid) {
  for (let i = 0; i < player1Grid.childNodes.length; i++) {
    for (let j = 0; j < player1Grid.childNodes[i].childNodes.length; j++) {
      player1Grid.childNodes[i].childNodes[j].addEventListener("click", () => {
        changeTurns(player1Grid, player2Grid);
      });
      player2Grid.childNodes[i].childNodes[j].addEventListener("click", () => {
        robotAttackDOM(player1, player1Grid);
        changeTurns(player1Grid, player2Grid);
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

function placerDOM() {
  //changes div to and amount of times placeable
  //so we're gonnna do it like https://seb-graf.github.io/battleship/ for placing logic
  //use part class btw
  //play btn should disapear when clicked obs and replaced with showcasing whos turn it is
}

const playField = document.createElement("div");
const player1Grid = createPlayerGrid();
const player2Grid = createPlayerGrid();
const gameStartContainer = document.createElement("div");
const gameStartBTN = document.createElement("button");
const placer = document.createElement("div");
gameStartBTN.classList.add("gameStartBTN");
gameStartBTN.textContent = "Play.";
gameStartContainer.append(gameStartBTN);
let player1 = new player();
let player2 = new player();
receieveAttackDOM(player1, player1Grid, player2, player2Grid);
receieveAttackDOM(player2, player2Grid, player1, player1Grid);
player1Grid.classList.add("inactiveBoard");
turnController(player1Grid, player2Grid);
playField.append(player1Grid);
playField.append(gameStartContainer);
playField.append(player2Grid);
playField.classList.add("playField");

document.body.append(playField);

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
