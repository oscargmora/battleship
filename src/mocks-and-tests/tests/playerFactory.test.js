/* eslint-disable no-undef */
import Player from '../../modules/factories/playerFactory';

const AI = new Player(2);

test('random index', () => {
    expect(AI.AIChooseAttack()).toStrictEqual(['shot']);
});
