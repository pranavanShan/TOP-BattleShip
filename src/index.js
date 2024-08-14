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
      currentNode.classList.add("attackPart");
      currentNode.addEventListener("click", () => {
        player.board.receiveAttack([j, i]);
        currentNode.classList.add("inactivePart");
        if (player.board.board[j][i] == -1)
          currentNode.style.backgroundColor = "black";

        if (player.board.board[j][i] == -2)
          currentNode.style.backgroundColor = "red";
        if (player.board.lost) {
          const gameOverDOM = gameOver("Won");
          player1Grid.style.pointerEvents = "none";
          player2Grid.style.pointerEvents = "none";
          player1Grid.classList.add("blur");
          player2Grid.classList.add("blur");
          navbar.classList.add("blur");
          document.body.append(gameOverDOM);
        }
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
    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = "black";
  }
  if (player.board.board[y][x] == -2) {
    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = "red";
  }

  if (player.board.lost) {
    const gameOverDOM = gameOver("Lost");
    player1Grid.style.pointerEvents = "none";
    player2Grid.style.pointerEvents = "none";
    player1Grid.classList.add("blur");
    player2Grid.classList.add("blur");
    navbar.classList.add("blur");
    document.body.append(gameOverDOM);
  }
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

function placerDOM(index, formation, direction) {
  let ship = document.createElement("div");
  for (let j = 0; j < formation[index]; j++) {
    const part = document.createElement("div");
    part.classList.add("placerpart");
    ship.append(part);
  }
  if (!direction) ship.style.display = "flex";
  ship.draggable = "true";
  ship.classList.add("ship");
  ship.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.childNodes.length);
  });
  ship.addEventListener("dragend", () => {});
  return ship;
}

function gameBoardplacerDOM(player, playerGrid) {
  for (let i = 0; i < playerGrid.childNodes.length; i++) {
    for (let j = 0; j < playerGrid.childNodes[i].childNodes.length; j++) {
      let current = playerGrid.childNodes[i].childNodes[j];
      current.addEventListener("dragover", (event) => {
        event.preventDefault();
        return false;
      });
      current.addEventListener("dragenter", (event) => {
        let ships = document.getElementsByClassName("ship");
        let direction = ships[0].style.display === "flex" ? false : true;
        let length = ships[0].childNodes.length;
        if (player.board.pathAvailable([j, i], length, direction)) {
          current.classList.add("highlight");
        } else {
          current.classList.add("unplacable");
        }
      });

      current.addEventListener("dragleave", (event) => {
        current.classList.remove("highlight");
        current.classList.remove("unplacable");
      });

      current.addEventListener("drop", (event) => {
        event.preventDefault();
        current.classList.remove("highlight");
        current.classList.remove("unplacable");
        let length = parseInt(event.dataTransfer.getData("text"));
        let ships = document.getElementsByClassName("ship");
        let direction = ships[0].style.display === "flex" ? false : true;
        if (player.board.placeShip([j, i], length, direction)) {
          let iC = i;
          let jC = j;
          let currentC = current;
          for (let a = 0; a < length; a++) {
            currentC.classList.add("placedShip");
            if (direction && jC < 9) jC++;
            if (!direction && iC < 9) iC++;
            currentC = playerGrid.childNodes[iC].childNodes[jC];
          }
          ships[0].remove();
        } else {
          return false;
        }
        if (ships.length > 0) ships[0].style.display = "block";
        else if (ships.length === 0) {
          startGame(gameStartBTN, changeDirectionBTN);
        }
      });
    }
  }
}

function gameOver(winorLost) {
  const box = document.createElement("div");
  const text = document.createElement("h1");
  const button = document.createElement("button");
  button.classList.add("BTN");
  box.classList.add("playAgainBox");
  button.textContent = "Play again";
  button.onclick = () => {
    location.reload();
  };
  text.textContent = `You ${winorLost}`;

  box.append(text);
  box.append(button);
  return box;
}

function randomPosition(player1, playerGrid1) {
  const ships = document.getElementsByClassName("ship");
  for (let i = 0; i < ships.length; i++) {
    ships[i].remove();
  }
  player1Grid.childNodes.forEach((i) => {
    i.childNodes.forEach((j) => {
      if (j.classList.contains("placedShip")) j.classList.remove("placedShip");
    });
  });
  if (player1.board.totalShips > 0) player1 = new player();
  player1.computerPlace();
  for (let i = 0; i < playerGrid1.childNodes.length; i++) {
    for (let j = 0; j < playerGrid1.childNodes[i].childNodes.length; j++) {
      let current = playerGrid1.childNodes[i].childNodes[j];
      if (player1.board.board[j][i] !== 0) current.classList.add("placedShip");
    }
  }

  return player1;
}

function startGame(gameStartBTN, changeDirectionBTN) {
  changeDirectionBTN.style.display = "none";
  gameStartBTN.style.display = "block";
}

const playField = document.createElement("div");
let player1 = new player();
let player2 = new player();
const player1Grid = createPlayerGrid();
const player2Grid = createPlayerGrid();
const gameStartContainer = document.createElement("div");
gameStartContainer.classList.add("gameStartContainer");
const gameStartBTN = document.createElement("button");

gameStartBTN.classList.add("BTN");
gameStartBTN.style.display = "none";
gameStartBTN.textContent = "Play.";
gameStartBTN.onclick = () => {
  player2.computerPlace();
  receieveAttackDOM(player2, player2Grid);
  turnController(player1Grid, player2Grid);
  randomBTN.style.display = "none";
  player1Grid.classList.add("inactiveBoard");
  gameStartBTN.style.display = "none";
};
gameStartContainer.append(gameStartBTN);

gameBoardplacerDOM(player1, player1Grid);

playField.append(player1Grid);
playField.append(gameStartContainer);
playField.append(player2Grid);

const changeDirectionBTN = document.createElement("button");
changeDirectionBTN.textContent = "Direction";
changeDirectionBTN.classList.add("BTN");
changeDirectionBTN.onclick = () => {
  if (ships[0].style.display == "block") ships[0].style.display = "flex";
  else ships[0].style.display = "block";
};
gameStartContainer.append(changeDirectionBTN);

const resetBTN = document.createElement("div");
resetBTN.textContent = "reset";
resetBTN.classList.add("BTN");
resetBTN.onclick = () => {
  location.reload();
};

gameStartContainer.append(resetBTN);

const randomBTN = document.createElement("button");
randomBTN.classList.add("BTN");
randomBTN.textContent = "Random";
randomBTN.onclick = () => {
  player1 = randomPosition(player1, player1Grid);
  startGame(gameStartBTN, changeDirectionBTN);
};
gameStartContainer.append(randomBTN);
let formation = [2, 3, 3, 4, 5];
for (let i = 0; i < formation.length; i++) {
  const ship = placerDOM(i, formation, true);
  ship.style.display = "none";
  gameStartContainer.append(ship);
}
const ships = gameStartContainer.getElementsByClassName("ship");
ships[0].style.display = "block";

playField.classList.add("playField");

document.body.append(playField);

export { Ship, gameBoard, player };
