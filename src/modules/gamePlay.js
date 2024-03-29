/* eslint-disable no-plusplus */

const subtitle = document.querySelector('subtitle');

let endGame = false;
let hitCounter = 16;

function gameLoop(player1, player2, current) {
    if (endGame) return;

    let currentPlayer = current;

    function switchPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        return currentPlayer;
    }

    // AI Functionality
    if (currentPlayer === player2) {
        const AIShotIndex = player2.AIChooseAttack();
        const userGameBoardSpace = document.getElementById(AIShotIndex);
        if (userGameBoardSpace.classList.contains('ship-square')) {
            userGameBoardSpace.classList.add('hit');
            hitCounter--;
            // Check AI Win Conditions
            if (hitCounter <= 0) {
                const userGameBoardSpaces = document.querySelectorAll('.one');
                userGameBoardSpaces.forEach((space) => {
                    subtitle.innerText = 'YOU LOST';
                    space.classList.add('won');
                });
                endGame = true;
                const playerOneSquares = document.querySelectorAll('.one');
                playerOneSquares.forEach((sq) => {
                    if (!sq.classList.contains('hit')) {
                        sq.classList.add('miss');
                    }
                });
                const playAgainButtonContainer = document.querySelector(
                    'play-again-button-container'
                );
                const playAgainButton = document.createElement('button');
                playAgainButton.innerText = 'Play Again?';
                playAgainButton.addEventListener('click', () => {
                    window.location.reload();
                });
                playAgainButtonContainer.append(playAgainButton);
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
            // Check User Win Conditions
            if (
                attackResult[0] === 'hit' ||
                attackResult === 'All Ships Sunk'
            ) {
                subtitle.innerText = 'HIT';
                square.classList.add('hit');
                console.log(player2.gameBoard.array[square.id][2]);
            } else {
                subtitle.innerText = 'MISS';
                square.classList.add('miss');
            }
            if (attackResult === 'All Ships Sunk') {
                const allAISquares = document.querySelectorAll('.two');
                allAISquares.forEach((AISquare) => {
                    subtitle.innerText = 'YOU WON!';
                    AISquare.classList.add('won');
                });
                const playerTwoSquares = document.querySelectorAll('.two');
                playerTwoSquares.forEach((sq) => {
                    if (!sq.classList.contains('hit')) {
                        sq.classList.add('miss');
                    }
                });
                endGame = true;
                const playAgainButtonContainer = document.querySelector(
                    'play-again-button-container'
                );
                const playAgainButton = document.createElement('button');
                playAgainButton.innerText = 'Play Again?';
                playAgainButton.addEventListener('click', () => {
                    window.location.reload();
                });
                playAgainButtonContainer.append(playAgainButton);
            }
            square.removeEventListener('click', clickHandler);
            gameLoop(player1, player2, player2);
        });
    }
}

// Create Game Boards and Display
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

        changeStatusOfSquare(player1, player2, square);

        square.setAttribute('id', i);

        gameContainer.append(square);

        gameContainer.classList.add('invisible');
    }
}

export { displayGameBoards, gameLoop };
