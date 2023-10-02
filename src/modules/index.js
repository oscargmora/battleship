import GameBoard from './factories/gameBoardFactory';

const gameBoard = new GameBoard();

gameBoard.placeShip('carrier', 5, 9, 9, 'horizontal');
