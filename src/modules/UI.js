/* eslint-disable no-plusplus */
function displayGameBoards(player) {
    console.log(player);
    for (let i = 0; i < player.gameBoard.array.length; i++) {
        const gameContainer = document.querySelector(
            `#player-${player.playerNumber}`
        );
        const square = document.createElement('div');
        square.classList.add(player.playerNumber);
        gameContainer.append(square);
    }
}

export default displayGameBoards;
