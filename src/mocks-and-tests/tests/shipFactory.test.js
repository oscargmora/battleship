/* eslint-disable no-undef */
import Ship from '../../modules/factories/shipFactory';

test('carrier ship', () => {
    const carrier = new Ship('carrier', 5);

    carrier.hit();

    expect(carrier.hits).toBe(1);
});
