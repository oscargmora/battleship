/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import Ship from './shipFactory';

class GameBoard {
    constructor() {
        this.array = this.createBoard();
    }

    createBoard() {
        const array = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                array.push([i, j]);
            }
        }

        return array;
    }

    findIndex(x, y) {
        const { array } = this;

        for (let i = 0; i < this.array.length; i++) {
            if (x === array[i][0] && y === array[i][1]) {
                return i;
            }
        }
    }

    placeShip(shipName, shipLength, x, y) {
        const ship = new Ship(shipName, shipLength);
        const index = this.findIndex(x, y);

        this.array[index].push(ship.name);

        return this.array[index];
    }
}

export default GameBoard;
