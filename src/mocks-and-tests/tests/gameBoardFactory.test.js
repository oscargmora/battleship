/* eslint-disable no-undef */
import GameBoard from '../../modules/factories/gameBoardFactory';

const gameBoard = new GameBoard();

test('board creation', () => {
    expect(gameBoard.array.length).toBe(100);
});

test('find index', () => {
    expect(gameBoard.findIndex(0, 0)).toBe(0);
    expect(gameBoard.findIndex(0, 1)).toBe(1);
    expect(gameBoard.findIndex(1, 0)).toBe(10);
    expect(gameBoard.findIndex(9, 9)).toBe(99);
});

test('place ship', () => {
    expect(gameBoard.placeShip('cruiser', 3, 5, 5)).toStrictEqual([
        5,
        5,
        'cruiser'
    ]);
});
