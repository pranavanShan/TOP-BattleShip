const {Ship, gameBoard} = require ('./index')

describe('Ship Tests' ,  () => {
    const newShip = new Ship(3)
    test('Tests default params of a new ship. Only required param is length.', () => {
        expect(newShip.length).toBe(3)
        expect(newShip.hits).toBe(0)
        expect(newShip.sunk).toBeFalsy();
     })
     
     test('Tests hit fn for ship class', () => {
         expect(newShip.hits).toBe(0)
         newShip.hit()
         expect(newShip.hits).toBe(1)
         
     })

     test('Tests sunk(), and check if it actually modified Object.sunk()' , () => {
        expect(newShip.isSunk()).toBeFalsy()
        newShip.hit()
        newShip.hit()
        expect(newShip.isSunk()).toBeTruthy()
        expect(newShip.sunk).toBeTruthy()
    })


    test('Tests board creation', () => {
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
    })


})


