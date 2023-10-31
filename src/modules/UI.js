/* eslint-disable no-plusplus */

let endGame = false;
let hitCounter = 17;

function gameLoop(player1, player2, current) {
    if (endGame) return;

    let currentPlayer = current;

    function switchPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        return currentPlayer;
    }

    if (currentPlayer === player2) {
        const AIShotIndex = player2.AIChooseAttack();
        const userGameBoardSpace = document.getElementById(AIShotIndex);
        if (userGameBoardSpace.classList.contains('ship-square')) {
            userGameBoardSpace.classList.add('hit');
            hitCounter--;
            if (hitCounter <= 0) {
                const userGameBoardSpaces = document.querySelectorAll('.one');
                userGameBoardSpaces.forEach((space) => {
                    space.classList.add('won');
                });
                endGame = true;
                for (let i = 0; i < player1.gameBoard.array.length; i++) {
                    const divs = document.querySelectorAll('.two');
                    divs.forEach((div) => div.classList.add('lost'));
                }
            }
        } else {
            userGameBoardSpace.classList.add('miss');
        }
        switchPlayer();
    }
}

function changeStatusOfSquare(player1, player2, square) {
    if (square.classList.contains('two')) {
        square.addEventListener('click', function clickHandler() {
            if (endGame) return;
            const index = square.getAttribute('id');
            const attackResult = player2.gameBoard.receiveAttack(index);
            if (attackResult === 'All Ships Sunk') {
                const allAISquares = document.querySelectorAll('.two');
                allAISquares.forEach((AISquare) => {
                    AISquare.classList.add('won');
                });
                endGame = true;
            } else if (attackResult[0] === 'hit') {
                square.classList.add('hit');
            } else {
                square.classList.add('miss');
            }
            square.removeEventListener('click', clickHandler);
            gameLoop(player1, player2, player2);
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

export { displayGameBoards, gameLoop };
