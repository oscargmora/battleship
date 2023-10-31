import Player from './factories/playerFactory';
import { displayGameBoards, gameLoop } from './UI';

function gameStartUp() {
    const user = new Player('one');
    const AI = new Player('two');

    user.chooseShipLocation('carrier', 5, 3, 0, 'horizontal');
    user.chooseShipLocation('cruiser', 3, 2, 2, 'vertical');
    user.chooseShipLocation('battleship', 4, 4, 9, 'horizontal');
    user.chooseShipLocation('destroyer', 2, 8, 0, 'horizontal');
    user.chooseShipLocation('submarine', 3, 5, 5, 'vertical');

    AI.AIChooseShipLocation('carrier', 5);
    AI.AIChooseShipLocation('cruiser', 3);
    AI.AIChooseShipLocation('battleship', 4);
    AI.AIChooseShipLocation('destroyer', 2);
    AI.AIChooseShipLocation('submarine', 3);

    displayGameBoards(user, AI);

    gameLoop(user, AI, user, false);
}

export default gameStartUp;
