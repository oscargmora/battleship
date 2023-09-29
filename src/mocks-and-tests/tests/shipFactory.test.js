/* eslint-disable no-undef */
import Ship from '../../modules/factories/shipFactory';

test('ships hit', () => {
    const carrier = new Ship('carrier', 5);
    const destroyer = new Ship('destroyer', 2);

    carrier.hit();
    destroyer.hit();
    destroyer.hit();

    expect(carrier.hits).toBe(1);
    expect(destroyer.hits).toBe(2);
});

test('ship sunk', () => {
    const submarine = new Ship('submarine', 3);
    const battleship = new Ship('battleship', 4);

    submarine.hit();
    submarine.hit();
    submarine.hit();

    battleship.hit();

    expect(submarine.sunk).toBe(true);
    expect(battleship.sunk).toBe(false);
});
