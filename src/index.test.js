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


})


