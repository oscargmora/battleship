/* eslint-disable no-undef */
import Player from '../../modules/factories/playerFactory';
import Ship from '../../modules/factories/shipFactory';

const AI = new Player(2);
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
        [5, 5, carrier],
        [5, 4, carrier],
        [5, 3, carrier],
        [5, 6, carrier],
        [5, 7, carrier]
    ]);

    Math.random = originalRandom;
});

test('AIChooseShipLocationBattleship', () => {
    const originalRandom = Math.random;
    Math.random = () => 0.2;
    const result = AI.AIChooseShipLocation(battleship.name, battleship.length);

    expect(result).toStrictEqual([
        [2, 2, battleship],
        [1, 2, battleship],
        [0, 2, battleship],
        [3, 2, battleship]
    ]);

    Math.random = originalRandom;
});
