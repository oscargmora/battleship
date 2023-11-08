/* eslint-disable no-plusplus */
import Player from './factories/playerFactory';
import { createSetupGrid, getShipPlacement } from './gameSetup';
import { displayGameBoards, gameLoop } from './gamePlay';

function createOrientationButton() {
    const buttonContainer = document.querySelector('button-container');
    const orientationButton = document.createElement('button');
    orientationButton.innerText = 'Horizontal';
    buttonContainer.append(orientationButton);
    orientationButton.onclick = function orientationChange() {
        if (orientationButton.innerText === 'Horizontal') {
            orientationButton.innerText = 'Vertical';
        } else {
            orientationButton.innerText = 'Horizontal';
        }
    };
}

async function gameStartUp() {
    const user = new Player('one');
    const AI = new Player('two');

    createSetupGrid();
    createOrientationButton();

    const orientationButton = document.querySelector('button');
    const setupContainer = document.querySelector('setup-container');
    const playerOneGameContainer = document.querySelector('#player-one');
    const playerTwoGameContainer = document.querySelector('#player-two');

    displayGameBoards(user, AI);

    const shipsToPlace = [
        { name: 'carrier', length: 5 },
        { name: 'battleship', length: 4 },
        { name: 'cruiser', length: 3 },
        { name: 'submarine', length: 3 },
        { name: 'destroyer', length: 1 }
    ];

    for (const shipInfo of shipsToPlace) {
        const shipName = shipInfo.name;
        const shipLength = shipInfo.length;

        let shipPlaced = false;

        while (!shipPlaced) {
            const shipInformation = await getShipPlacement();
            const x = Number(shipInformation.x);
            const y = Number(shipInformation.y);
            const { orientationText } = shipInformation;

            // Attempt to place the ship in the selected location
            const result = user.chooseShipLocation(
                shipName,
                shipLength,
                x,
                y,
                orientationText
            );

            if (typeof result === 'string') {
                console.log('Error:', result);
                // Remove the ship from the board before attempting placement again
                user.gameBoard.removeShip(shipName);
            } else {
                shipPlaced = true;
            }

            // Clear the game board containers for the next placement attempt
            playerOneGameContainer.innerHTML = '';
            playerTwoGameContainer.innerHTML = '';
            displayGameBoards(user, AI);
        }
    }

    setupContainer.remove();
    orientationButton.remove();

    // Continue with AI ship placements and the game loop
    AI.AIChooseShipLocation('carrier', 5);
    AI.AIChooseShipLocation('cruiser', 3);
    AI.AIChooseShipLocation('battleship', 4);
    AI.AIChooseShipLocation('destroyer', 2);
    AI.AIChooseShipLocation('submarine', 3);

    playerOneGameContainer.innerHTML = '';
    playerTwoGameContainer.innerHTML = '';
    displayGameBoards(user, AI);

    gameLoop(user, AI, user, false);
}

export default gameStartUp;