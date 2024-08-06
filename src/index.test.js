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

    })


})


