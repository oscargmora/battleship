/* eslint-disable no-plusplus */

import gameLoop from './gameLoop';

let endGame = false;

function changeStatusOfSquare(player1, player2, square) {
    if (square.classList.contains('two')) {
        square.addEventListener('click', function clickHandler() {
            if (square.classList.contains('complete')) return;
            const index = square.getAttribute('id');
            const attackResult = player2.gameBoard.receiveAttack(index);
            if (attackResult === 'All Ships Sunk') {
                const allAISquares = document.querySelectorAll('.two');
                allAISquares.forEach((AISquare) => {
                    AISquare.classList.add('complete');
                });
                endGame = true;
            } else if (attackResult[0] === 'hit') {
                square.classList.add('hit');
            } else {
                square.classList.add('miss');
            }
            square.removeEventListener('click', clickHandler);
            gameLoop(player1, player2, player2, endGame);
        });
    }
}

function displayGameBoards(player1, player2) {
    for (let i = 0; i < player1.gameBoard.array.length; i++) {
        const gameContainer = document.querySelector(
            `#player-${player1.playerNumber}`
        );
        const square = document.createElement('div');
        square.classList.add(player1.playerNumber);

        if (player1.gameBoard.array[i].length > 2) {
            square.classList.add('ship-square');
        }

        square.setAttribute('id', i);

        gameContainer.append(square);
    }

    for (let i = 0; i < player2.gameBoard.array.length; i++) {
        const gameContainer = document.querySelector(
            `#player-${player2.playerNumber}`
        );
        const square = document.createElement('div');
        square.classList.add(player2.playerNumber);

        if (player2.gameBoard.array[i].length > 2) {
            square.classList.add('ship-square');
        }

        changeStatusOfSquare(player1, player2, square);

        square.setAttribute('id', i);

        gameContainer.append(square);
    }
}

export default displayGameBoards;
