/* eslint-disable no-plusplus */

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

        square.setAttribute('id', i);

        if (square.classList.contains('two')) {
            square.addEventListener('click', function clickHandler() {
                const index = square.getAttribute('id');
                const attackResult = player.gameBoard.receiveAttack(index);
                console.log(attackResult);
                square.removeEventListener('click', clickHandler);
            });
        }

        gameContainer.append(square);
    }
}

export default displayGameBoards;
