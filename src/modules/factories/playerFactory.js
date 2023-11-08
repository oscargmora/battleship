/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import GameBoard from './gameBoardFactory';

class Player {
    constructor(playerNumber) {
        this.playerNumber = playerNumber;
        this.AIShotArray = this.createAIArray();
        this.gameBoard = new GameBoard(playerNumber);
    }

    chooseShipLocation(shipName, shipLength, x, y, orientation) {
        const placement = this.gameBoard.placeShip(
            shipName,
            shipLength,
            x,
            y,
            orientation
        );
        return placement;
    }

    chooseAttack(x, y) {
        this.gameBoard.receiveAttack(x, y);
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

    AIChooseShipLocation(shipName, shipLength) {
        const randomX = Math.floor(Math.random() * 9) + 1;
        const randomY = Math.floor(Math.random() * 9) + 1;
        const orientations = ['horizontal', 'vertical'];
        const randomOrientation =
            orientations[Math.floor(Math.random() * orientations.length)];

        const shipPlacement = this.gameBoard.placeShip(
            shipName,
            shipLength,
            randomX,
            randomY,
            randomOrientation
        );

        if (Array.isArray(shipPlacement)) {
            return shipPlacement;
        }

        this.gameBoard.removeShip(shipName);

        return this.AIChooseShipLocation(shipName, shipLength);
    }

    AIChooseAttack() {
        const randomIndex = Math.floor(Math.random() * this.AIShotArray.length);

        if (this.AIShotArray[randomIndex].length === 0) {
            this.AIShotArray[randomIndex].push('shot');
            return randomIndex;
        }

        return this.AIChooseAttack();
    }
}

export default Player;
