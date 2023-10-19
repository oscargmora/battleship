import Player from './factories/playerFactory';

function gameLoop() {
    const user = new Player(1);
    const AI = new Player(2);

    user.chooseShipLocation('carrier', 5, 9, 9, 'horizontal');
    user.chooseShipLocation('cruiser', 3, 0, 0, 'vertical');
    user.chooseShipLocation('battleship', 4, 0, 9, 'horizontal');
    user.chooseShipLocation('destroyer', 2, 9, 0, 'horizontal');
    user.chooseShipLocation('submarine', 3, 5, 5, 'vertical');

    AI.AIChooseShipLocation('carrier', 5, 9, 9, 'horizontal');
    AI.AIChooseShipLocation('cruiser', 3, 0, 9, 'horizontal');
    AI.AIChooseShipLocation('battleship', 4, 9, 0, 'horizontal');
    AI.AIChooseShipLocation('destroyer', 2, 4, 4, 'vertical');
    AI.AIChooseShipLocation('submarine', 3, 0, 0, 'vertical');
}

export default gameLoop;
