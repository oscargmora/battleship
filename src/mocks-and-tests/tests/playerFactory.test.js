/* eslint-disable no-undef */
import Player from '../../modules/factories/playerFactory';
import Ship from '../../modules/factories/shipFactory';

const AI = new Player('two');
const carrier = new Ship('carrier', 5);
const battleship = new Ship('battleship', 4);

test('random index 1', () => {
    const originalRandom = Math.random;
    Math.random = () => 0.5;

    const result = AI.AIChooseAttack();
    expect(result).toBe(50);

    Math.random = originalRandom;
});

test('random index 2', () => {
    const originalRandom = Math.random;
    Math.random = () => 0.81;

    const result = AI.AIChooseAttack();
    expect(result).toBe(81);

    Math.random = originalRandom;
});

test('AIChooseShipLocationCarrier', () => {
    const originalRandom = Math.random;
    Math.random = () => 0.5;
    const result = AI.AIChooseShipLocation(carrier.name, carrier.length);

    expect(result).toStrictEqual([
        [5, 5, carrier.name],
        [4, 5, carrier.name],
        [3, 5, carrier.name],
        [6, 5, carrier.name],
        [7, 5, carrier.name]
    ]);

    Math.random = originalRandom;
});

test('AIChooseShipLocationBattleship', () => {
    const originalRandom = Math.random;
    Math.random = () => 0.2;
    const result = AI.AIChooseShipLocation(battleship.name, battleship.length);

    expect(result).toStrictEqual([
        [2, 2, battleship.name],
        [1, 2, battleship.name],
        [0, 2, battleship.name],
        [3, 2, battleship.name]
    ]);

    Math.random = originalRandom;
});
