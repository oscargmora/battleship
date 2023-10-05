/* eslint-disable no-undef */
import Player from '../../modules/factories/playerFactory';
import Ship from '../../modules/factories/shipFactory';

const AI = new Player(2);
const carrier = new Ship('carrier', 5);

test('random index', () => {
    expect(AI.AIChooseAttack()).toStrictEqual(['shot']);
});

test('AIChooseShipLocation', () => {
    expect(AI.AIChooseShipLocation(carrier.name, carrier.length)).toStrictEqual(
        [1, 1, 'carrier']
    );
});
