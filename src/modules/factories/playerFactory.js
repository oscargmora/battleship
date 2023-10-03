/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import GameBoard from './gameBoardFactory';

class Player {
    constructor(playerNumber) {
        this.playerNumber = playerNumber;
        this.AIArray = this.createAIArray();
    }

    chooseShipLocation(shipName, shipLength, x, y, orientation) {
        GameBoard.placeShip(shipName, shipLength, x, y, orientation);
    }

    chooseAttack(x, y) {
        GameBoard.receiveAttack(x, y);
    }

    createAIArray() {
        const array = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                array.push([]);
            }
        }

        return array;
    }

    AIChooseAttack() {
        const randomIndex = Math.floor(Math.random() * this.AIArray.length);
        return randomIndex;
    }
}

export default Player;
