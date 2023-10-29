/* eslint-disable no-plusplus */

function changeStatusOfSquare(player, square) {
    if (square.classList.contains('two')) {
        square.addEventListener('click', function clickHandler() {
            if (square.classList.contains('complete')) return;
            const index = square.getAttribute('id');
            const attackResult = player.gameBoard.receiveAttack(index);
            console.log(attackResult);
            if (attackResult === 'All Ships Sunk') {
                const allAISquares = document.querySelectorAll('.two');
                allAISquares.forEach((AISquare) => {
                    AISquare.classList.add('complete');
                });
            } else if (attackResult[0] === 'hit') {
                square.classList.add('hit');
            } else {
                square.classList.add('miss');
            }
            square.removeEventListener('click', clickHandler);
        });
    }
}

function displayGameBoards(player) {
    for (let i = 0; i < player.gameBoard.array.length; i++) {
        const gameContainer = document.querySelector(
            `#player-${player.playerNumber}`
        );
        const square = document.createElement('div');
        square.classList.add(player.playerNumber);

        if (player.gameBoard.array[i].length > 2) {
            square.classList.add('ship-square');
        }

        changeStatusOfSquare(player, square);

        square.setAttribute('id', i);

        gameContainer.append(square);
    }
}

export default displayGameBoards;
