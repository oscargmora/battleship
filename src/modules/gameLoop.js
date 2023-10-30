/* eslint-disable no-plusplus */
let hitCounter = 17;

function gameLoop(player1, player2, current, endGame) {
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
                    space.classList.add('complete');
                });
            }
        } else {
            userGameBoardSpace.classList.add('miss');
        }
        switchPlayer();
    }
}

export default gameLoop;
