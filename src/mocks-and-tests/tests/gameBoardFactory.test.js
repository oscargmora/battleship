/* eslint-disable no-undef */
import GameBoard from '../../modules/factories/gameBoardFactory';
import Ship from '../../modules/factories/shipFactory';

const gameBoard = new GameBoard();
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);
const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3);

test('board creation', () => {
    expect(gameBoard.array.length).toBe(100);
});

test('find index', () => {
    expect(gameBoard.findIndex(0, 0)).toBe(0);
    expect(gameBoard.findIndex(0, 1)).toBe(1);
    expect(gameBoard.findIndex(1, 0)).toBe(10);
    expect(gameBoard.findIndex(9, 9)).toBe(99);
});

test('place cruiser', () => {
    expect(gameBoard.placeShip('cruiser', 3, 1, 0, 'horizontal')).toStrictEqual(
        [
            [1, 0, cruiser.name],
            [0, 0, cruiser.name],
            [2, 0, cruiser.name]
        ]
    );
});

test('place battleship', () => {
    expect(
        gameBoard.placeShip('battleship', 4, 5, 5, 'vertical')
    ).toStrictEqual([
        [5, 5, battleship.name],
        [5, 4, battleship.name],
        [5, 3, battleship.name],
        [5, 6, battleship.name]
    ]);
});

test('place carrier too far on array 1', () => {
    expect(gameBoard.placeShip('carrier', 5, 9, 9, 'horizontal')).toStrictEqual(
        'Please Choose A New Space'
    );
});

test('place carrier too far on array 2', () => {
    expect(
        gameBoard.placeShip('carrier', 5, 10, 10, 'horizontal')
    ).toStrictEqual('Please Choose A New Space');
});

test('place carrier', () => {
    expect(gameBoard.placeShip('carrier', 5, 6, 9, 'horizontal')).toStrictEqual(
        [
            [6, 9, carrier.name],
            [5, 9, carrier.name],
            [4, 9, carrier.name],
            [7, 9, carrier.name],
            [8, 9, carrier.name]
        ]
    );
});

test('place destroyer', () => {
    expect(
        gameBoard.placeShip('destroyer', 2, 2, 8, 'horizontal')
    ).toStrictEqual([
        [2, 8, destroyer.name],
        [1, 8, destroyer.name]
    ]);
});

test('place submarine', () => {
    expect(gameBoard.placeShip('submarine', 3, 0, 8, 'vertical')).toStrictEqual(
        [
            [0, 8, submarine.name],
            [0, 7, submarine.name],
            [0, 9, submarine.name]
        ]
    );
});

test('place ship on a space where a ship already exists', () => {
    expect(gameBoard.placeShip('destroyer', 2, 5, 5)).toStrictEqual(
        'Space Already Taken'
    );
});

test('miss', () => {
    expect(gameBoard.receiveAttack(6, 6)).toStrictEqual(['miss']);
});

test('hit', () => {
    expect(gameBoard.receiveAttack(0, 0)).toStrictEqual(['hit']);
});

test('space already shot at 1', () => {
    expect(gameBoard.receiveAttack(6, 6)).toStrictEqual(
        'Space Already Shot At'
    );
});

test('space already shot at 2', () => {
    expect(gameBoard.receiveAttack(0, 0)).toStrictEqual(
        'Space Already Shot At'
    );
});

test('all ships sunk', () => {
    // cruiser
    gameBoard.receiveAttack(1, 0);
    gameBoard.receiveAttack(2, 0);
    // battleship
    gameBoard.receiveAttack(5, 3);
    gameBoard.receiveAttack(5, 4);
    gameBoard.receiveAttack(5, 5);
    gameBoard.receiveAttack(5, 6);
    // carrier
    gameBoard.receiveAttack(6, 9);
    gameBoard.receiveAttack(5, 9);
    gameBoard.receiveAttack(4, 9);
    gameBoard.receiveAttack(7, 9);
    gameBoard.receiveAttack(8, 9);
    // destroyer
    gameBoard.receiveAttack(2, 8);
    gameBoard.receiveAttack(1, 8);
    // submarine
    gameBoard.receiveAttack(0, 8);
    gameBoard.receiveAttack(0, 7);
    expect(gameBoard.receiveAttack(0, 9)).toBe('All Ships Sunk');
});
