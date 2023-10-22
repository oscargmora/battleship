import Player from './factories/playerFactory';
import displayGameBoards from './UI';

function gameLoop() {
    const user = new Player(1);
    const AI = new Player(2);

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

    displayGameBoards(user);
    displayGameBoards(AI);
}

export default gameLoop;
