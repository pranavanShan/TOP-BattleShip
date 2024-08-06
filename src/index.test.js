const { Ship, gameBoard } = require("./index");

describe("Ship Tests", () => {
  const newShip = new Ship(3);
  test("Tests default params of a new ship. Only required param is length.", () => {
    expect(newShip.length).toBe(3);
    expect(newShip.hits).toBe(0);
    expect(newShip.sunk).toBeFalsy();
  });

  test("Tests hit fn for ship class", () => {
    expect(newShip.hits).toBe(0);
    newShip.hit();
    expect(newShip.hits).toBe(1);
  });

  test("Tests sunk(), and check if it actually modified Object.sunk()", () => {
    expect(newShip.isSunk()).toBeFalsy();
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBeTruthy();
    expect(newShip.sunk).toBeTruthy();
  });
});

describe("gameBoard Tests", () => {
  const board = new gameBoard();
  test("constructor produces 10 x 10 grid", () => {
    expect(board.board.length).toBe(10);
    for (let i = 0; i < board.board.length; i++) {
      expect(board.board[i].length).toBe(10);
    }
  });
  test("gameBoard.placeShip() rejects out of bound coordinates", () => {
    expect(board.placeShip([-1, -1], 2, true)).toBeFalsy();
    expect(board.placeShip([10, 10], 10, true)).toBeFalsy();
    expect(board.placeShip([0, 10], 10, true)).toBeFalsy();
    expect(board.placeShip([10, 0], 10, true)).toBeFalsy();
  });

  test("gameBoard.placeShip() rejects coordinates with a marker or markers already present", () => {
    board.board[0][0] = "placeholder";
    expect(board.placeShip([0, 0], 3, false)).toBeFalsy();
    board.board[0][0] = 0;
    board.board[5][0] = 1;
    expect(board.placeShip([4, 0], 3, true)).toBeFalsy();
    board.board[5][0] = 0;
  });
  test("gameBoard.placeShip() rejects if a ship goes out of bounds when placed", () => {
    expect(board.placeShip([9, 9], 2, false)).toBeFalsy();
    expect(board.placeShip([9, 9], 2, true)).toBeFalsy();
    expect(board.placeShip([1, 6], 5, false)).toBeFalsy();
  });
  test("gameBoard.placeShip() is.. actually able to place ships.", () => {
    expect(board.placeShip([0,0], 5, false)).toBeTruthy()
    expect(board.placeShip([1,0], 4, true)).toBeTruthy()
    expect(board.placeShip([1,1], 3, true)).toBeTruthy()
    expect(board.placeShip([1,2], 3, true)).toBeTruthy()
    expect(board.placeShip([4,2], 2, false)).toBeTruthy() 
  })
  test("gameBoard.receiveAttack() rejects out of bounds coordinates", () => {
    expect(board.receiveAttack([10,10])).toBeFalsy()
    expect(board.receiveAttack([-1, 5])).toBeFalsy()
  })
  test("gameBoard.receieveAttack() records misses, and doesn't allow further attempts on the same coordinates", () => {
    board.receiveAttack([9,9])
    expect(board.board[9][9]).toBe(-1)
    expect(board.receiveAttack([9,9])).toBeFalsy()
  })

  test("gameBoard.recieveAttack() records hits and updates the relevant object", () => {
    expect(board.receiveAttack([0,0])).toBeTruthy()
    expect(board.ships[board.board[0][1]].hits).toBe(1)
    expect(board.ships[board.board[0][1]].sunk).toBeFalsy()
    expect(board.receiveAttack([0,1])).toBeTruthy()
    expect(board.receiveAttack([0,2])).toBeTruthy()
    expect(board.receiveAttack([0,3])).toBeTruthy()
    expect(board.receiveAttack([0,4])).toBeTruthy()
    expect(board.ships[1].sunk).toBeTruthy()
    expect(board.lost).toBeFalsy()
    expect(board.lostShips).toBe(1)
    expect(board.receiveAttack([0,4])).toBeFalsy()
    expect(board.receiveAttack([1,0])).toBeTruthy()
    expect(board.receiveAttack([2,0])).toBeTruthy()
    expect(board.receiveAttack([3,0])).toBeTruthy()
    expect(board.receiveAttack([4,0])).toBeTruthy()
    expect(board.ships[2].sunk).toBeTruthy()
    expect(board.lostShips).toBe(2)
  })
  test("gameBoard is able to report if all ships have sunk", () => {
    const sunkBoard = new gameBoard
    sunkBoard.placeShip([0,0], 1, false)
    sunkBoard.placeShip([1,0], 1, false)
    sunkBoard.placeShip([2,0], 1, false)
    expect(sunkBoard.receiveAttack([0,0])).toBeTruthy()
    expect(sunkBoard.receiveAttack([1,0])).toBeTruthy()
    expect(sunkBoard.receiveAttack([2,0])).toBeTruthy()
    expect(sunkBoard.lost).toBeTruthy()
  })

  
});

/*
let newBoard = new gameBoard()
        expect(newBoard.board.length).toBe(10)
        expect(newBoard.board[0].length).toBe(10)
        expect(newBoard.placeShip([0,6], 4, false)).toBeTruthy()
        expect(newBoard.placeShip([0,6], 4, false)).toBeFalsy()
        expect(newBoard.board[0][6]).toBe(1)
        expect(newBoard.ships[newBoard.board[0][6]]).toEqual(newBoard.ships[newBoard.board[0][7]])
        expect(newBoard.placeShip([1,6], 4, true)).toBeTruthy()
        expect(newBoard.board[1][6]).toBe(2)
        expect(newBoard.board[2][6]).toBe(2)
        expect(newBoard.board[3][6]).toBe(2)
        expect(newBoard.board[4][6]).toBe(2)
        expect(newBoard.ships[newBoard.board[1][6]]).toStrictEqual(newBoard.ships[newBoard.board[4][6]])
        expect(newBoard.ships[newBoard.board[1][6]].isSunk()).toBeFalsy()
        expect(newBoard.receiveAttack([1,6])).toBeTruthy()
        expect(newBoard.receiveAttack([2,6])).toBeTruthy()
        expect(newBoard.receiveAttack([3,6])).toBeTruthy()
        expect(newBoard.receiveAttack([4,6])).toBeTruthy()
        expect(newBoard.lostShips).toEqual(1)
        expect(newBoard.board[4][6]).toEqual(-2)
        expect(newBoard.board[9][0]).toEqual(0)
        expect(newBoard.receiveAttack([9,0])).toBeTruthy()
        expect(newBoard.board[9][0]).toEqual(-1)
        expect(newBoard.receiveAttack([9,0])).toBeFalsy()
        expect(newBoard.lost).toBeFalsy()
        expect(newBoard.receiveAttack([0,6])).toBeTruthy()
        expect(newBoard.receiveAttack([0,7])).toBeTruthy()
        expect(newBoard.receiveAttack([0,8])).toBeTruthy()
        expect(newBoard.receiveAttack([0,9])).toBeTruthy()
        expect(newBoard.lostShips).toEqual(newBoard.totalShips)
        expect(newBoard.lost).toBeTruthy()

    */
