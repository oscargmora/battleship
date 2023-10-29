/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import Ship from './shipFactory';

class GameBoard {
    constructor(playerNumber) {
        this.playerNumber = playerNumber;
        this.array = this.createBoard();
        this.hitArray = this.createHitArray();
        this.hitLog = 0;
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

    createHitArray() {
        const hitArray = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                hitArray.push([]);
            }
        }

        return hitArray;
    }

    findIndex(x, y) {
        for (let i = 0; i < this.array.length; i++) {
            if (x === this.array[i][0] && y === this.array[i][1]) {
                return i;
            }
        }
    }

    checkIfIndexDoesNotExist(
        x,
        y,
        decreasedX,
        decreasedY,
        increasedX,
        increasedY,
        orientation,
        leftShipLength,
        rightShipLength
    ) {
        const array = [];
        if (orientation === 'horizontal') {
            for (let i = 0; i < leftShipLength; i++) {
                decreasedX -= 1;
                const newIndex = this.findIndex(decreasedX, y);
                array.push(newIndex);
            }
            for (let i = 0; i < rightShipLength; i++) {
                increasedX += 1;
                const newIndex = this.findIndex(increasedX, y);
                array.push(newIndex);
            }
        } else {
            for (let i = 0; i < leftShipLength; i++) {
                decreasedY -= 1;
                const newIndex = this.findIndex(x, decreasedY);
                array.push(newIndex);
            }
            for (let i = 0; i < rightShipLength; i++) {
                increasedY += 1;
                const newIndex = this.findIndex(x, increasedY);
                array.push(newIndex);
            }
        }

        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) {
                return true;
            }
        }
    }

    placeRestOfShip(
        ship,
        x,
        y,
        leftShipLength,
        rightShipLength,
        orientation,
        array,
        shipArray
    ) {
        let decreasedX = x;
        let decreasedY = y;
        let increasedX = x;
        let increasedY = y;

        if (
            this.checkIfIndexDoesNotExist(
                x,
                y,
                decreasedX,
                decreasedY,
                increasedX,
                increasedY,
                orientation,
                leftShipLength,
                rightShipLength
            )
        ) {
            return 'Please Choose A New Space';
        }

        if (orientation === 'horizontal') {
            for (let i = 0; i < leftShipLength; i++) {
                decreasedX -= 1;
                const newIndex = this.findIndex(decreasedX, y);
                if (this.array[newIndex].length !== 3) {
                    array[newIndex].push(ship.name);
                    shipArray.push([decreasedX, y, ship.name]);
                } else return `Invalid Space: (${decreasedX}, ${y})`;
            }
            for (let i = 0; i < rightShipLength; i++) {
                increasedX += 1;
                const newIndex = this.findIndex(increasedX, y);
                if (this.array[newIndex].length !== 3) {
                    array[newIndex].push(ship.name);
                    shipArray.push([increasedX, y, ship.name]);
                } else return `Invalid Space: (${decreasedX}, ${y})`;
            }
        } else {
            for (let i = 0; i < leftShipLength; i++) {
                decreasedY -= 1;
                const newIndex = this.findIndex(x, decreasedY);
                if (this.array[newIndex].length !== 3) {
                    array[newIndex].push(ship.name);
                    shipArray.push([x, decreasedY, ship.name]);
                } else return `Invalid Space: (${x}, ${decreasedY})`;
            }
            for (let i = 0; i < rightShipLength; i++) {
                increasedY += 1;
                const newIndex = this.findIndex(x, increasedY);
                if (this.array[newIndex].length !== 3) {
                    array[newIndex].push(ship.name);
                    shipArray.push([x, increasedY, ship.name]);
                } else return `Invalid Space: (${x}, ${decreasedY})`;
            }
        }

        return shipArray;
    }

    placeShip(shipName, shipLength, x, y, orientation) {
        const ship = new Ship(shipName, shipLength);

        const newShipLength = shipLength - 1;
        const leftShipLength = Math.round(newShipLength / 2);
        const rightShipLength = newShipLength - leftShipLength;

        const initialIndex = this.findIndex(x, y);

        if (initialIndex === undefined) return 'Please Choose A New Space';

        const shipArray = [];

        if (this.array[initialIndex].length !== 3) {
            this.array[initialIndex].push(shipName);
            shipArray.push([x, y, shipName]);

            const result = this.placeRestOfShip(
                ship,
                x,
                y,
                leftShipLength,
                rightShipLength,
                orientation,
                this.array,
                shipArray
            );

            if (typeof result === 'string') {
                return result;
            }

            return shipArray;
        }

        return 'Space Already Taken';
    }

    receiveAttack(index) {
        if (this.hitArray[index].length === 0) {
            if (this.array[index].length === 2) {
                this.hitArray[index].push('miss');
                return this.hitArray[index];
            }

            this.hitArray[index].push('hit');

            if (typeof this.updateHitLog() !== 'undefined') {
                return 'All Ships Sunk';
            }

            return this.hitArray[index];
        }

        return 'Space Already Shot At';
    }

    removeShip(shipName) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i][2] === shipName) {
                this.array[i].pop();
            }
        }
    }

    updateHitLog() {
        this.hitLog += 1;
        if (this.hitLog === 17) {
            return 'All Ships Sunk';
        }
    }
}

export default GameBoard;
