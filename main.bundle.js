"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./src/modules/factories/gameBoardFactory.js":
/*!***************************************************!*\
  !*** ./src/modules/factories/gameBoardFactory.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/modules/factories/shipFactory.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */

var GameBoard = /*#__PURE__*/function () {
  function GameBoard(playerNumber) {
    _classCallCheck(this, GameBoard);
    this.playerNumber = playerNumber;
    this.array = this.createBoard();
    this.hitArray = this.createHitArray();
    this.hitLog = 0;
  }
  _createClass(GameBoard, [{
    key: "createBoard",
    value: function createBoard() {
      var array = [];
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          array.push([i, j]);
        }
      }
      return array;
    }

    // This creates an array that keeps track of whether a space was a hit or a miss
  }, {
    key: "createHitArray",
    value: function createHitArray() {
      var hitArray = [];
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          hitArray.push([]);
        }
      }
      return hitArray;
    }

    // This function finds the index of the array based on its x and y coordinates
  }, {
    key: "findIndex",
    value: function findIndex(x, y) {
      for (var i = 0; i < this.array.length; i++) {
        if (x === this.array[i][0] && y === this.array[i][1]) {
          return i;
        }
      }
    }

    // Check if space has already been taken or if space is already off the grid
  }, {
    key: "checkIfIndexDoesNotExist",
    value: function checkIfIndexDoesNotExist(x, y, decreasedX, decreasedY, increasedX, increasedY, orientation, leftShipLength, rightShipLength) {
      var array = [];
      if (orientation !== 'Horizontal') {
        for (var i = 0; i < leftShipLength; i++) {
          decreasedX -= 1;
          var newIndex = this.findIndex(decreasedX, y);
          array.push(newIndex);
        }
        for (var _i = 0; _i < rightShipLength; _i++) {
          increasedX += 1;
          var _newIndex = this.findIndex(increasedX, y);
          array.push(_newIndex);
        }
      } else {
        for (var _i2 = 0; _i2 < leftShipLength; _i2++) {
          decreasedY -= 1;
          var _newIndex2 = this.findIndex(x, decreasedY);
          array.push(_newIndex2);
        }
        for (var _i3 = 0; _i3 < rightShipLength; _i3++) {
          increasedY += 1;
          var _newIndex3 = this.findIndex(x, increasedY);
          array.push(_newIndex3);
        }
      }
      for (var _i4 = 0; _i4 < array.length; _i4++) {
        if (array[_i4] === undefined) {
          return true;
        }
      }
    }
  }, {
    key: "placeRestOfShip",
    value: function placeRestOfShip(ship, x, y, leftShipLength, rightShipLength, orientation, array, shipArray) {
      var decreasedX = x;
      var decreasedY = y;
      var increasedX = x;
      var increasedY = y;
      if (this.checkIfIndexDoesNotExist(x, y, decreasedX, decreasedY, increasedX, increasedY, orientation, leftShipLength, rightShipLength)) {
        return 'Please Choose A New Space';
      }
      if (orientation !== 'Horizontal') {
        for (var i = 0; i < leftShipLength; i++) {
          decreasedX -= 1;
          var newIndex = this.findIndex(decreasedX, y);
          if (this.array[newIndex].length !== 3) {
            array[newIndex].push(ship.name);
            shipArray.push([decreasedX, y, ship.name]);
          } else return "Invalid Space: (".concat(decreasedX, ", ").concat(y, ")");
        }
        for (var _i5 = 0; _i5 < rightShipLength; _i5++) {
          increasedX += 1;
          var _newIndex4 = this.findIndex(increasedX, y);
          if (this.array[_newIndex4].length !== 3) {
            array[_newIndex4].push(ship.name);
            shipArray.push([increasedX, y, ship.name]);
          } else return "Invalid Space: (".concat(decreasedX, ", ").concat(y, ")");
        }
      } else {
        for (var _i6 = 0; _i6 < leftShipLength; _i6++) {
          decreasedY -= 1;
          var _newIndex5 = this.findIndex(x, decreasedY);
          if (this.array[_newIndex5].length !== 3) {
            array[_newIndex5].push(ship.name);
            shipArray.push([x, decreasedY, ship.name]);
          } else return "Invalid Space: (".concat(x, ", ").concat(decreasedY, ")");
        }
        for (var _i7 = 0; _i7 < rightShipLength; _i7++) {
          increasedY += 1;
          var _newIndex6 = this.findIndex(x, increasedY);
          if (this.array[_newIndex6].length !== 3) {
            array[_newIndex6].push(ship.name);
            shipArray.push([x, increasedY, ship.name]);
          } else return "Invalid Space: (".concat(x, ", ").concat(decreasedY, ")");
        }
      }
      return shipArray;
    }
  }, {
    key: "placeShip",
    value: function placeShip(shipName, shipLength, x, y, orientation) {
      var ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](shipName, shipLength);
      var newShipLength = shipLength - 1;
      var leftShipLength = Math.round(newShipLength / 2);
      var rightShipLength = newShipLength - leftShipLength;
      var initialIndex = this.findIndex(x, y);
      if (initialIndex === undefined) return 'Please Choose A New Space';
      var shipArray = [];
      if (this.array[initialIndex].length !== 3) {
        this.array[initialIndex].push(shipName);
        shipArray.push([x, y, shipName]);
        var result = this.placeRestOfShip(ship, x, y, leftShipLength, rightShipLength, orientation, this.array, shipArray);
        if (typeof result === 'string') {
          return result;
        }
        return shipArray;
      }
      return 'Space Already Taken';
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(index) {
      if (this.hitArray[index].length === 0) {
        if (this.array[index].length === 2) {
          this.hitArray[index].push('miss');
          return this.hitArray[index];
        }
        this.hitArray[index].push('hit');
        if (typeof this.updateHitLog() !== 'undefined') {
          return 'All Ships Sunk';
        }
        return this.hitArray[index];
      }
      return 'Space Already Shot At';
    }
  }, {
    key: "removeShip",
    value: function removeShip(shipName) {
      for (var i = 0; i < this.array.length; i++) {
        if (this.array[i][2] === shipName) {
          this.array[i].pop();
        }
      }
    }

    // Keep track of how many times the AI has been hit
  }, {
    key: "updateHitLog",
    value: function updateHitLog() {
      this.hitLog += 1;
      if (this.hitLog === 17) {
        return 'All Ships Sunk';
      }
    }
  }]);
  return GameBoard;
}();
/* harmony default export */ __webpack_exports__["default"] = (GameBoard);

/***/ }),

/***/ "./src/modules/factories/playerFactory.js":
/*!************************************************!*\
  !*** ./src/modules/factories/playerFactory.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/modules/factories/gameBoardFactory.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */

var Player = /*#__PURE__*/function () {
  function Player(playerNumber) {
    _classCallCheck(this, Player);
    this.playerNumber = playerNumber;
    this.AIShotArray = this.createAIArray();
    this.gameBoard = new _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"](playerNumber);
  }
  _createClass(Player, [{
    key: "chooseShipLocation",
    value: function chooseShipLocation(shipName, shipLength, x, y, orientation) {
      var placement = this.gameBoard.placeShip(shipName, shipLength, x, y, orientation);
      return placement;
    }
  }, {
    key: "chooseAttack",
    value: function chooseAttack(x, y) {
      this.gameBoard.receiveAttack(x, y);
    }
  }, {
    key: "createAIArray",
    value: function createAIArray() {
      var array = [];
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          array.push([]);
        }
      }
      return array;
    }
  }, {
    key: "AIChooseShipLocation",
    value: function AIChooseShipLocation(shipName, shipLength) {
      var randomX = Math.floor(Math.random() * 9) + 1;
      var randomY = Math.floor(Math.random() * 9) + 1;
      var orientations = ['Horizontal', 'Vertical'];
      var randomOrientation = orientations[Math.floor(Math.random() * orientations.length)];
      var shipPlacement = this.gameBoard.placeShip(shipName, shipLength, randomX, randomY, randomOrientation);
      if (Array.isArray(shipPlacement)) {
        return shipPlacement;
      }
      this.gameBoard.removeShip(shipName);
      return this.AIChooseShipLocation(shipName, shipLength);
    }
  }, {
    key: "AIChooseAttack",
    value: function AIChooseAttack() {
      var randomIndex = Math.floor(Math.random() * this.AIShotArray.length);
      if (this.AIShotArray[randomIndex].length === 0) {
        this.AIShotArray[randomIndex].push('shot');
        return randomIndex;
      }
      return this.AIChooseAttack();
    }
  }]);
  return Player;
}();
/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/modules/factories/shipFactory.js":
/*!**********************************************!*\
  !*** ./src/modules/factories/shipFactory.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    _classCallCheck(this, Ship);
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits += 1;
      this.isSunk();
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
  }]);
  return Ship;
}();
/* harmony default export */ __webpack_exports__["default"] = (Ship);

/***/ }),

/***/ "./src/modules/gamePlay.js":
/*!*********************************!*\
  !*** ./src/modules/gamePlay.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayGameBoards: function() { return /* binding */ displayGameBoards; },
/* harmony export */   gameLoop: function() { return /* binding */ gameLoop; }
/* harmony export */ });
/* eslint-disable no-plusplus */

var subtitle = document.querySelector('subtitle');
var endGame = false;
var hitCounter = 16;
function gameLoop(player1, player2, current) {
  if (endGame) return;
  var currentPlayer = current;
  function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    return currentPlayer;
  }

  // AI Functionality
  if (currentPlayer === player2) {
    var AIShotIndex = player2.AIChooseAttack();
    var userGameBoardSpace = document.getElementById(AIShotIndex);
    if (userGameBoardSpace.classList.contains('ship-square')) {
      userGameBoardSpace.classList.add('hit');
      hitCounter--;
      // Check AI Win Conditions
      if (hitCounter <= 0) {
        var userGameBoardSpaces = document.querySelectorAll('.one');
        userGameBoardSpaces.forEach(function (space) {
          subtitle.innerText = 'YOU LOST';
          space.classList.add('won');
        });
        endGame = true;
        var playerOneSquares = document.querySelectorAll('.one');
        playerOneSquares.forEach(function (sq) {
          if (!sq.classList.contains('hit')) {
            sq.classList.add('miss');
          }
        });
        var playAgainButtonContainer = document.querySelector('play-again-button-container');
        var playAgainButton = document.createElement('button');
        playAgainButton.innerText = 'Play Again?';
        playAgainButton.addEventListener('click', function () {
          window.location.reload();
        });
        playAgainButtonContainer.append(playAgainButton);
        for (var i = 0; i < player1.gameBoard.array.length; i++) {
          var divs = document.querySelectorAll('.two');
          divs.forEach(function (div) {
            return div.classList.add('lost');
          });
        }
      }
    } else {
      userGameBoardSpace.classList.add('miss');
    }
    switchPlayer();
  }
}
function changeStatusOfSquare(player1, player2, square) {
  if (square.classList.contains('two')) {
    square.addEventListener('click', function clickHandler() {
      if (endGame) return;
      var index = square.getAttribute('id');
      var attackResult = player2.gameBoard.receiveAttack(index);
      // Check User Win Conditions
      if (attackResult[0] === 'hit' || attackResult === 'All Ships Sunk') {
        subtitle.innerText = 'HIT';
        square.classList.add('hit');
        console.log(player2.gameBoard.array[square.id][2]);
      } else {
        subtitle.innerText = 'MISS';
        square.classList.add('miss');
      }
      if (attackResult === 'All Ships Sunk') {
        var allAISquares = document.querySelectorAll('.two');
        allAISquares.forEach(function (AISquare) {
          subtitle.innerText = 'YOU WON!';
          AISquare.classList.add('won');
        });
        var playerTwoSquares = document.querySelectorAll('.two');
        playerTwoSquares.forEach(function (sq) {
          if (!sq.classList.contains('hit')) {
            sq.classList.add('miss');
          }
        });
        endGame = true;
        var playAgainButtonContainer = document.querySelector('play-again-button-container');
        var playAgainButton = document.createElement('button');
        playAgainButton.innerText = 'Play Again?';
        playAgainButton.addEventListener('click', function () {
          window.location.reload();
        });
        playAgainButtonContainer.append(playAgainButton);
      }
      square.removeEventListener('click', clickHandler);
      gameLoop(player1, player2, player2);
    });
  }
}

// Create Game Boards and Display
function displayGameBoards(player1, player2) {
  for (var i = 0; i < player1.gameBoard.array.length; i++) {
    var gameContainer = document.querySelector("#player-".concat(player1.playerNumber));
    var square = document.createElement('div');
    square.classList.add(player1.playerNumber);
    if (player1.gameBoard.array[i].length > 2) {
      square.classList.add('ship-square');
    }
    square.setAttribute('id', i);
    gameContainer.append(square);
  }
  for (var _i = 0; _i < player2.gameBoard.array.length; _i++) {
    var _gameContainer = document.querySelector("#player-".concat(player2.playerNumber));
    var _square = document.createElement('div');
    _square.classList.add(player2.playerNumber);
    changeStatusOfSquare(player1, player2, _square);
    _square.setAttribute('id', _i);
    _gameContainer.append(_square);
    _gameContainer.classList.add('invisible');
  }
}


/***/ }),

/***/ "./src/modules/gameSetup.js":
/*!**********************************!*\
  !*** ./src/modules/gameSetup.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSetupGrid: function() { return /* binding */ createSetupGrid; },
/* harmony export */   getShipPlacement: function() { return /* binding */ getShipPlacement; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* eslint-disable no-plusplus */

// Create the grid that allows the user to select where they place their ships
function createSetupGrid() {
  var setupContainer = document.querySelector('setup-container');
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var div = document.createElement('setup-div');
      div.classList.add(i);
      div.id = j;
      setupContainer.append(div);
    }
  }
}

// Find Each Ship Placement in Order
function getShipPlacement() {
  return _getShipPlacement.apply(this, arguments);
}
function _getShipPlacement() {
  _getShipPlacement = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var divs;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          divs = document.querySelectorAll('setup-div');
          return _context.abrupt("return", new Promise(function (resolve) {
            divs.forEach(function (div) {
              div.addEventListener('click', function (e) {
                var x = e.target.className;
                var y = e.target.id;
                var orientation = document.querySelector('button');
                var orientationText = orientation.innerText;
                resolve({
                  x: x,
                  y: y,
                  orientationText: orientationText
                });
              });
            });
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getShipPlacement.apply(this, arguments);
}


/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_meyer_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/meyer-reset.css */ "./src/styles/meyer-reset.css");
/* harmony import */ var _styles_boards_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/boards-style.css */ "./src/styles/boards-style.css");
/* harmony import */ var _styles_divs_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/divs.css */ "./src/styles/divs.css");
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/page.css */ "./src/styles/page.css");
/* harmony import */ var _styles_ships_legend_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ships-legend.css */ "./src/styles/ships-legend.css");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startGame */ "./src/modules/startGame.js");






(0,_startGame__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./src/modules/startGame.js":
/*!**********************************!*\
  !*** ./src/modules/startGame.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/playerFactory */ "./src/modules/factories/playerFactory.js");
/* harmony import */ var _gameSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSetup */ "./src/modules/gameSetup.js");
/* harmony import */ var _gamePlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePlay */ "./src/modules/gamePlay.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */



function createOrientationButton() {
  var buttonContainer = document.querySelector('button-container');
  var orientationButton = document.createElement('button');
  orientationButton.innerText = 'Horizontal';
  buttonContainer.append(orientationButton);
  orientationButton.onclick = function orientationChange() {
    if (orientationButton.innerText === 'Horizontal') {
      orientationButton.innerText = 'Vertical';
    } else {
      orientationButton.innerText = 'Horizontal';
    }
  };
}
function gameStartUp() {
  return _gameStartUp.apply(this, arguments);
}
function _gameStartUp() {
  _gameStartUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var user, AI, orientationButtonContainer, setupContainer, playerOneGameContainer, playerTwoGameContainer, subtitle, shipsToPlace, i, shipInfo, shipName, shipLength, shipPlaced, shipInformation, x, y, orientationText, result, shipsLegend;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]('one');
          AI = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]('two');
          (0,_gameSetup__WEBPACK_IMPORTED_MODULE_1__.createSetupGrid)();
          createOrientationButton();
          orientationButtonContainer = document.querySelector('button-container');
          setupContainer = document.querySelector('setup-container');
          playerOneGameContainer = document.querySelector('#player-one');
          playerTwoGameContainer = document.querySelector('#player-two');
          subtitle = document.querySelector('subtitle');
          (0,_gamePlay__WEBPACK_IMPORTED_MODULE_2__.displayGameBoards)(user, AI);
          shipsToPlace = [{
            name: 'carrier',
            length: 5
          }, {
            name: 'battleship',
            length: 4
          }, {
            name: 'cruiser',
            length: 3
          }, {
            name: 'submarine',
            length: 3
          }, {
            name: 'destroyer',
            length: 2
          }];
          i = 0;
        case 12:
          if (!(i < shipsToPlace.length)) {
            _context.next = 35;
            break;
          }
          shipInfo = shipsToPlace[i];
          shipName = shipInfo.name;
          shipLength = shipInfo.length;
          subtitle.innerText = "Place your ".concat(shipName, "! (").concat(shipLength, " spaces)");
          shipPlaced = false;
        case 18:
          if (shipPlaced) {
            _context.next = 32;
            break;
          }
          _context.next = 21;
          return (0,_gameSetup__WEBPACK_IMPORTED_MODULE_1__.getShipPlacement)();
        case 21:
          shipInformation = _context.sent;
          x = Number(shipInformation.x);
          y = Number(shipInformation.y);
          orientationText = shipInformation.orientationText; // Attempt to place the ship in the selected location
          result = user.chooseShipLocation(shipName, shipLength, x, y, orientationText);
          if (typeof result === 'string') {
            // Remove the ship from the board before attempting placement again
            user.gameBoard.removeShip(shipName);
          } else {
            shipPlaced = true;
          }

          // Clear the game board containers for the next placement attempt
          playerOneGameContainer.innerHTML = '';
          playerTwoGameContainer.innerHTML = '';
          (0,_gamePlay__WEBPACK_IMPORTED_MODULE_2__.displayGameBoards)(user, AI);
          _context.next = 18;
          break;
        case 32:
          i++;
          _context.next = 12;
          break;
        case 35:
          orientationButtonContainer.remove();
          setupContainer.remove();
          subtitle.innerText = 'FIGHT';

          // Continue with AI ship placements and the game loop
          AI.AIChooseShipLocation('carrier', 5);
          AI.AIChooseShipLocation('battleship', 4);
          AI.AIChooseShipLocation('cruiser', 3);
          AI.AIChooseShipLocation('submarine', 3);
          AI.AIChooseShipLocation('destroyer', 2);
          playerOneGameContainer.innerHTML = '';
          playerTwoGameContainer.innerHTML = '';
          (0,_gamePlay__WEBPACK_IMPORTED_MODULE_2__.displayGameBoards)(user, AI);
          playerTwoGameContainer.classList.remove('invisible');
          shipsLegend = document.querySelector('ships-legend');
          shipsLegend.remove();
          (0,_gamePlay__WEBPACK_IMPORTED_MODULE_2__.gameLoop)(user, AI, user, false);
        case 50:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _gameStartUp.apply(this, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (gameStartUp);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/boards-style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/boards-style.css ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "container {\n    display: flex;\n    flex-direction: row;\n    gap: 5em;\n}\n\nsetup-container,\ngame-container {\n    display: grid;\n    grid-template-columns: repeat(10, 1.5em);\n    grid-template-rows: repeat(10, 1.5em);\n}\n\n.invisible {\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/boards-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;;IAEI,aAAa;IACb,wCAAwC;IACxC,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["container {\n    display: flex;\n    flex-direction: row;\n    gap: 5em;\n}\n\nsetup-container,\ngame-container {\n    display: grid;\n    grid-template-columns: repeat(10, 1.5em);\n    grid-template-rows: repeat(10, 1.5em);\n}\n\n.invisible {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/divs.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/divs.css ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "setup-div,\ndiv {\n    border: #9b9b9b 1px solid;\n}\n\nsetup-div:hover {\n    background-color: rgb(77, 139, 231);\n    cursor: pointer;\n}\n\ndiv.hit {\n    background-color: red;\n    pointer-events: none;\n}\n\ndiv.miss {\n    background-color: #0064ff;\n    pointer-events: none;\n}\n\ndiv.won {\n    pointer-events: none;\n}\n\ndiv.lost {\n    pointer-events: none;\n}\n\n.ship-square {\n    background-color: rgb(237, 237, 237);\n}\n\n.two {\n    cursor: crosshair;\n}\n\n.two:hover {\n    background-color: rgb(156, 204, 246);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/divs.css"],"names":[],"mappings":"AAAA;;IAEI,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["setup-div,\ndiv {\n    border: #9b9b9b 1px solid;\n}\n\nsetup-div:hover {\n    background-color: rgb(77, 139, 231);\n    cursor: pointer;\n}\n\ndiv.hit {\n    background-color: red;\n    pointer-events: none;\n}\n\ndiv.miss {\n    background-color: #0064ff;\n    pointer-events: none;\n}\n\ndiv.won {\n    pointer-events: none;\n}\n\ndiv.lost {\n    pointer-events: none;\n}\n\n.ship-square {\n    background-color: rgb(237, 237, 237);\n}\n\n.two {\n    cursor: crosshair;\n}\n\n.two:hover {\n    background-color: rgb(156, 204, 246);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/meyer-reset.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/meyer-reset.css ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n/*CSS RESET*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/meyer-reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED,YAAY;;AAEZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,YAAY;AAChB;AACA;;;;IAII,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n/*CSS RESET*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/page.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/page.css ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Orbitron/Orbitron-VariableFont_wght.ttf */ "./src/fonts/Orbitron/Orbitron-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: orbitron;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    background-color: #1a2b33;\n    color: #cddfdd;\n}\n\nbody,\nbutton {\n    font-family: orbitron;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader,\nmain,\nfooter {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nheader {\n    margin-top: 3em;\n}\n\nmain {\n    flex: 0.9 0 auto;\n}\n\nfooter {\n    margin-top: 10em;\n    flex-shrink: 0;\n}\n\nmain-title {\n    margin: 1em;\n    font-size: 2em;\n}\n\nbutton {\n    margin: 2em;\n    color: #cddfdd;\n    border-radius: 4px;\n    border: #9b9b9b 2px solid;\n    background-color: #1a2b33;\n}\n\nbutton:hover {\n    cursor: pointer;\n    color: #cccccc;\n    border: #8b8b8b 2px solid;\n}\n\ncontainer {\n    position: relative;\n}\n\nsetup-container {\n    position: absolute;\n}\n\na {\n    color: #cddfdd;\n    text-decoration: none;\n}\n\na:hover {\n    color: grey;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/page.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA0D;AAC9D;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,cAAc;AAClB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: orbitron;\n    src: url(../fonts/Orbitron/Orbitron-VariableFont_wght.ttf);\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    background-color: #1a2b33;\n    color: #cddfdd;\n}\n\nbody,\nbutton {\n    font-family: orbitron;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader,\nmain,\nfooter {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nheader {\n    margin-top: 3em;\n}\n\nmain {\n    flex: 0.9 0 auto;\n}\n\nfooter {\n    margin-top: 10em;\n    flex-shrink: 0;\n}\n\nmain-title {\n    margin: 1em;\n    font-size: 2em;\n}\n\nbutton {\n    margin: 2em;\n    color: #cddfdd;\n    border-radius: 4px;\n    border: #9b9b9b 2px solid;\n    background-color: #1a2b33;\n}\n\nbutton:hover {\n    cursor: pointer;\n    color: #cccccc;\n    border: #8b8b8b 2px solid;\n}\n\ncontainer {\n    position: relative;\n}\n\nsetup-container {\n    position: absolute;\n}\n\na {\n    color: #cddfdd;\n    text-decoration: none;\n}\n\na:hover {\n    color: grey;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/ships-legend.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/ships-legend.css ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "block-container {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 1em;\n}\n\np {\n    margin-right: 2em;\n}\n\nblock {\n    display: block;\n    height: 1em;\n    width: 1em;\n    background-color: white;\n    border: 1px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships-legend.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,UAAU;IACV,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":["block-container {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 1em;\n}\n\np {\n    margin-right: 2em;\n}\n\nblock {\n    display: block;\n    height: 1em;\n    width: 1em;\n    background-color: white;\n    border: 1px solid black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/boards-style.css":
/*!*************************************!*\
  !*** ./src/styles/boards-style.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_boards_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./boards-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/boards-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_boards_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_boards_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_boards_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_boards_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/divs.css":
/*!*****************************!*\
  !*** ./src/styles/divs.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_divs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./divs.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/divs.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_divs_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_divs_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_divs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_divs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/meyer-reset.css":
/*!************************************!*\
  !*** ./src/styles/meyer-reset.css ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./meyer-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/meyer-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/page.css":
/*!*****************************!*\
  !*** ./src/styles/page.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/ships-legend.css":
/*!*************************************!*\
  !*** ./src/styles/ships-legend.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ships_legend_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ships-legend.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/ships-legend.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ships_legend_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ships_legend_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ships_legend_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ships_legend_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Orbitron/Orbitron-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/fonts/Orbitron/Orbitron-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7228a1c750b75b23bdb4.ttf";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZmFjdG9yaWVzL2dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9mYWN0b3JpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVQbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lU2V0dXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYm9hcmRzLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9kaXZzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tZXllci1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMtbGVnZW5kLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYm9hcmRzLXN0eWxlLmNzcz84NTg4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2RpdnMuY3NzP2JkMzEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWV5ZXItcmVzZXQuY3NzPzFjMGYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcGFnZS5jc3M/NTg2NSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwcy1sZWdlbmQuY3NzPzJhZjgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5JztcblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW1iZXIgPSBwbGF5ZXJOdW1iZXI7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuaGl0QXJyYXkgPSB0aGlzLmNyZWF0ZUhpdEFycmF5KCk7XG4gICAgICAgIHRoaXMuaGl0TG9nID0gMDtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGNyZWF0ZXMgYW4gYXJyYXkgdGhhdCBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIGEgc3BhY2Ugd2FzIGEgaGl0IG9yIGEgbWlzc1xuICAgIGNyZWF0ZUhpdEFycmF5KCkge1xuICAgICAgICBjb25zdCBoaXRBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaGl0QXJyYXkucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGl0QXJyYXk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBmaW5kcyB0aGUgaW5kZXggb2YgdGhlIGFycmF5IGJhc2VkIG9uIGl0cyB4IGFuZCB5IGNvb3JkaW5hdGVzXG4gICAgZmluZEluZGV4KHgsIHkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy5hcnJheVtpXVswXSAmJiB5ID09PSB0aGlzLmFycmF5W2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBzcGFjZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuIG9yIGlmIHNwYWNlIGlzIGFscmVhZHkgb2ZmIHRoZSBncmlkXG4gICAgY2hlY2tJZkluZGV4RG9lc05vdEV4aXN0KFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBkZWNyZWFzZWRYLFxuICAgICAgICBkZWNyZWFzZWRZLFxuICAgICAgICBpbmNyZWFzZWRYLFxuICAgICAgICBpbmNyZWFzZWRZLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgbGVmdFNoaXBMZW5ndGgsXG4gICAgICAgIHJpZ2h0U2hpcExlbmd0aFxuICAgICkge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gIT09ICdIb3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVhc2VkWCAtPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoZGVjcmVhc2VkWCwgeSk7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXdJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoaW5jcmVhc2VkWCwgeSk7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXdJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZnRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkZWNyZWFzZWRZIC09IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRJbmRleCh4LCBkZWNyZWFzZWRZKTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ld0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbmNyZWFzZWRZICs9IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRJbmRleCh4LCBpbmNyZWFzZWRZKTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ld0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZVJlc3RPZlNoaXAoXG4gICAgICAgIHNoaXAsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGxlZnRTaGlwTGVuZ3RoLFxuICAgICAgICByaWdodFNoaXBMZW5ndGgsXG4gICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICBhcnJheSxcbiAgICAgICAgc2hpcEFycmF5XG4gICAgKSB7XG4gICAgICAgIGxldCBkZWNyZWFzZWRYID0geDtcbiAgICAgICAgbGV0IGRlY3JlYXNlZFkgPSB5O1xuICAgICAgICBsZXQgaW5jcmVhc2VkWCA9IHg7XG4gICAgICAgIGxldCBpbmNyZWFzZWRZID0geTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZJbmRleERvZXNOb3RFeGlzdChcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgZGVjcmVhc2VkWCxcbiAgICAgICAgICAgICAgICBkZWNyZWFzZWRZLFxuICAgICAgICAgICAgICAgIGluY3JlYXNlZFgsXG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWSxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICBsZWZ0U2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgICByaWdodFNoaXBMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1BsZWFzZSBDaG9vc2UgQSBOZXcgU3BhY2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uICE9PSAnSG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRlY3JlYXNlZFggLT0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZEluZGV4KGRlY3JlYXNlZFgsIHkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFycmF5W25ld0luZGV4XS5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbbmV3SW5kZXhdLnB1c2goc2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goW2RlY3JlYXNlZFgsIHksIHNoaXAubmFtZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gYEludmFsaWQgU3BhY2U6ICgke2RlY3JlYXNlZFh9LCAke3l9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoaW5jcmVhc2VkWCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlbbmV3SW5kZXhdLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtuZXdJbmRleF0ucHVzaChzaGlwLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQXJyYXkucHVzaChbaW5jcmVhc2VkWCwgeSwgc2hpcC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBgSW52YWxpZCBTcGFjZTogKCR7ZGVjcmVhc2VkWH0sICR7eX0pYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRlY3JlYXNlZFkgLT0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZEluZGV4KHgsIGRlY3JlYXNlZFkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFycmF5W25ld0luZGV4XS5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbbmV3SW5kZXhdLnB1c2goc2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goW3gsIGRlY3JlYXNlZFksIHNoaXAubmFtZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gYEludmFsaWQgU3BhY2U6ICgke3h9LCAke2RlY3JlYXNlZFl9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWSArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoeCwgaW5jcmVhc2VkWSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlbbmV3SW5kZXhdLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtuZXdJbmRleF0ucHVzaChzaGlwLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQXJyYXkucHVzaChbeCwgaW5jcmVhc2VkWSwgc2hpcC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBgSW52YWxpZCBTcGFjZTogKCR7eH0sICR7ZGVjcmVhc2VkWX0pYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaGlwQXJyYXk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1NoaXBMZW5ndGggPSBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbGVmdFNoaXBMZW5ndGggPSBNYXRoLnJvdW5kKG5ld1NoaXBMZW5ndGggLyAyKTtcbiAgICAgICAgY29uc3QgcmlnaHRTaGlwTGVuZ3RoID0gbmV3U2hpcExlbmd0aCAtIGxlZnRTaGlwTGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IGluaXRpYWxJbmRleCA9IHRoaXMuZmluZEluZGV4KHgsIHkpO1xuXG4gICAgICAgIGlmIChpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCkgcmV0dXJuICdQbGVhc2UgQ2hvb3NlIEEgTmV3IFNwYWNlJztcblxuICAgICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5hcnJheVtpbml0aWFsSW5kZXhdLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgdGhpcy5hcnJheVtpbml0aWFsSW5kZXhdLnB1c2goc2hpcE5hbWUpO1xuICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goW3gsIHksIHNoaXBOYW1lXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxhY2VSZXN0T2ZTaGlwKFxuICAgICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgIGxlZnRTaGlwTGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJpZ2h0U2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHNoaXBBcnJheVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnU3BhY2UgQWxyZWFkeSBUYWtlbic7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5oaXRBcnJheVtpbmRleF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJheVtpbmRleF0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRBcnJheVtpbmRleF0ucHVzaCgnbWlzcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdEFycmF5W2luZGV4XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oaXRBcnJheVtpbmRleF0ucHVzaCgnaGl0Jyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy51cGRhdGVIaXRMb2coKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FsbCBTaGlwcyBTdW5rJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0QXJyYXlbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdTcGFjZSBBbHJlYWR5IFNob3QgQXQnO1xuICAgIH1cblxuICAgIHJlbW92ZVNoaXAoc2hpcE5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJheVtpXVsyXSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5W2ldLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBob3cgbWFueSB0aW1lcyB0aGUgQUkgaGFzIGJlZW4gaGl0XG4gICAgdXBkYXRlSGl0TG9nKCkge1xuICAgICAgICB0aGlzLmhpdExvZyArPSAxO1xuICAgICAgICBpZiAodGhpcy5oaXRMb2cgPT09IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ0FsbCBTaGlwcyBTdW5rJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmRGYWN0b3J5JztcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW1iZXIgPSBwbGF5ZXJOdW1iZXI7XG4gICAgICAgIHRoaXMuQUlTaG90QXJyYXkgPSB0aGlzLmNyZWF0ZUFJQXJyYXkoKTtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKHBsYXllck51bWJlcik7XG4gICAgfVxuXG4gICAgY2hvb3NlU2hpcExvY2F0aW9uKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgY2hvb3NlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG5cbiAgICBjcmVhdGVBSUFycmF5KCkge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgQUlDaG9vc2VTaGlwTG9jYXRpb24oc2hpcE5hbWUsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb25zID0gWydIb3Jpem9udGFsJywgJ1ZlcnRpY2FsJ107XG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID1cbiAgICAgICAgICAgIG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcmllbnRhdGlvbnMubGVuZ3RoKV07XG5cbiAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IHRoaXMuZ2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgIHNoaXBOYW1lLFxuICAgICAgICAgICAgc2hpcExlbmd0aCxcbiAgICAgICAgICAgIHJhbmRvbVgsXG4gICAgICAgICAgICByYW5kb21ZLFxuICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGlwUGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBQbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5yZW1vdmVTaGlwKHNoaXBOYW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5BSUNob29zZVNoaXBMb2NhdGlvbihzaGlwTmFtZSwgc2hpcExlbmd0aCk7XG4gICAgfVxuXG4gICAgQUlDaG9vc2VBdHRhY2soKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5BSVNob3RBcnJheS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLkFJU2hvdEFycmF5W3JhbmRvbUluZGV4XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuQUlTaG90QXJyYXlbcmFuZG9tSW5kZXhdLnB1c2goJ3Nob3QnKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21JbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLkFJQ2hvb3NlQXR0YWNrKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5cbmNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3VidGl0bGUnKTtcblxubGV0IGVuZEdhbWUgPSBmYWxzZTtcbmxldCBoaXRDb3VudGVyID0gMTY7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHBsYXllcjEsIHBsYXllcjIsIGN1cnJlbnQpIHtcbiAgICBpZiAoZW5kR2FtZSkgcmV0dXJuO1xuXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50O1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xuICAgICAgICByZXR1cm4gY3VycmVudFBsYXllcjtcbiAgICB9XG5cbiAgICAvLyBBSSBGdW5jdGlvbmFsaXR5XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICAgICAgY29uc3QgQUlTaG90SW5kZXggPSBwbGF5ZXIyLkFJQ2hvb3NlQXR0YWNrKCk7XG4gICAgICAgIGNvbnN0IHVzZXJHYW1lQm9hcmRTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFJU2hvdEluZGV4KTtcbiAgICAgICAgaWYgKHVzZXJHYW1lQm9hcmRTcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtc3F1YXJlJykpIHtcbiAgICAgICAgICAgIHVzZXJHYW1lQm9hcmRTcGFjZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIGhpdENvdW50ZXItLTtcbiAgICAgICAgICAgIC8vIENoZWNrIEFJIFdpbiBDb25kaXRpb25zXG4gICAgICAgICAgICBpZiAoaGl0Q291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckdhbWVCb2FyZFNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vbmUnKTtcbiAgICAgICAgICAgICAgICB1c2VyR2FtZUJvYXJkU3BhY2VzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlLmlubmVyVGV4dCA9ICdZT1UgTE9TVCc7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3dvbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVuZEdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJyk7XG4gICAgICAgICAgICAgICAgcGxheWVyT25lU3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNxLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdwbGF5LWFnYWluLWJ1dHRvbi1jb250YWluZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW5CdXR0b24uaW5uZXJUZXh0ID0gJ1BsYXkgQWdhaW4/JztcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW5CdXR0b25Db250YWluZXIuYXBwZW5kKHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmdhbWVCb2FyZC5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR3bycpO1xuICAgICAgICAgICAgICAgICAgICBkaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoJ2xvc3QnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXNlckdhbWVCb2FyZFNwYWNlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN0YXR1c09mU3F1YXJlKHBsYXllcjEsIHBsYXllcjIsIHNxdWFyZSkge1xuICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0d28nKSkge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoZW5kR2FtZSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcGxheWVyMi5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCk7XG4gICAgICAgICAgICAvLyBDaGVjayBVc2VyIFdpbiBDb25kaXRpb25zXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXR0YWNrUmVzdWx0WzBdID09PSAnaGl0JyB8fFxuICAgICAgICAgICAgICAgIGF0dGFja1Jlc3VsdCA9PT0gJ0FsbCBTaGlwcyBTdW5rJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3VidGl0bGUuaW5uZXJUZXh0ID0gJ0hJVCc7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjIuZ2FtZUJvYXJkLmFycmF5W3NxdWFyZS5pZF1bMl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZS5pbm5lclRleHQgPSAnTUlTUyc7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdBbGwgU2hpcHMgU3VuaycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxBSVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gICAgICAgICAgICAgICAgYWxsQUlTcXVhcmVzLmZvckVhY2goKEFJU3F1YXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlLmlubmVyVGV4dCA9ICdZT1UgV09OISc7XG4gICAgICAgICAgICAgICAgICAgIEFJU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3dvbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b1NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gICAgICAgICAgICAgICAgcGxheWVyVHdvU3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNxLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVuZEdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdwbGF5LWFnYWluLWJ1dHRvbi1jb250YWluZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW5CdXR0b24uaW5uZXJUZXh0ID0gJ1BsYXkgQWdhaW4/JztcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW5CdXR0b25Db250YWluZXIuYXBwZW5kKHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgZ2FtZUxvb3AocGxheWVyMSwgcGxheWVyMiwgcGxheWVyMik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIEdhbWUgQm9hcmRzIGFuZCBEaXNwbGF5XG5mdW5jdGlvbiBkaXNwbGF5R2FtZUJvYXJkcyhwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmdhbWVCb2FyZC5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAjcGxheWVyLSR7cGxheWVyMS5wbGF5ZXJOdW1iZXJ9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQocGxheWVyMS5wbGF5ZXJOdW1iZXIpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIxLmdhbWVCb2FyZC5hcnJheVtpXS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1zcXVhcmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG5cbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoc3F1YXJlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjIuZ2FtZUJvYXJkLmFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCNwbGF5ZXItJHtwbGF5ZXIyLnBsYXllck51bWJlcn1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChwbGF5ZXIyLnBsYXllck51bWJlcik7XG5cbiAgICAgICAgY2hhbmdlU3RhdHVzT2ZTcXVhcmUocGxheWVyMSwgcGxheWVyMiwgc3F1YXJlKTtcblxuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xuXG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kKHNxdWFyZSk7XG5cbiAgICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlHYW1lQm9hcmRzLCBnYW1lTG9vcCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuLy8gQ3JlYXRlIHRoZSBncmlkIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCB3aGVyZSB0aGV5IHBsYWNlIHRoZWlyIHNoaXBzXG5mdW5jdGlvbiBjcmVhdGVTZXR1cEdyaWQoKSB7XG4gICAgY29uc3Qgc2V0dXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZXR1cC1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZXR1cC1kaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgICAgICAgZGl2LmlkID0gajtcbiAgICAgICAgICAgIHNldHVwQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBGaW5kIEVhY2ggU2hpcCBQbGFjZW1lbnQgaW4gT3JkZXJcbmFzeW5jIGZ1bmN0aW9uIGdldFNoaXBQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NldHVwLWRpdicpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBkaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uVGV4dCA9IG9yaWVudGF0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgeCwgeSwgb3JpZW50YXRpb25UZXh0IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTZXR1cEdyaWQsIGdldFNoaXBQbGFjZW1lbnQgfTtcbiIsImltcG9ydCAnLi4vc3R5bGVzL21leWVyLXJlc2V0LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9ib2FyZHMtc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2RpdnMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3BhZ2UuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NoaXBzLWxlZ2VuZC5jc3MnO1xuaW1wb3J0IGdhbWVTdGFydFVwIGZyb20gJy4vc3RhcnRHYW1lJztcblxuZ2FtZVN0YXJ0VXAoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL3BsYXllckZhY3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlU2V0dXBHcmlkLCBnZXRTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9nYW1lU2V0dXAnO1xuaW1wb3J0IHsgZGlzcGxheUdhbWVCb2FyZHMsIGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lUGxheSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi1jb250YWluZXInKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsJztcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKG9yaWVudGF0aW9uQnV0dG9uKTtcbiAgICBvcmllbnRhdGlvbkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gb3JpZW50YXRpb25DaGFuZ2UoKSB7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbkJ1dHRvbi5pbm5lclRleHQgPT09ICdIb3Jpem9udGFsJykge1xuICAgICAgICAgICAgb3JpZW50YXRpb25CdXR0b24uaW5uZXJUZXh0ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVTdGFydFVwKCkge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgUGxheWVyKCdvbmUnKTtcbiAgICBjb25zdCBBSSA9IG5ldyBQbGF5ZXIoJ3R3bycpO1xuXG4gICAgY3JlYXRlU2V0dXBHcmlkKCk7XG4gICAgY3JlYXRlT3JpZW50YXRpb25CdXR0b24oKTtcblxuICAgIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNldHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2V0dXAtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGxheWVyT25lR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItb25lJyk7XG4gICAgY29uc3QgcGxheWVyVHdvR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItdHdvJyk7XG4gICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdWJ0aXRsZScpO1xuXG4gICAgZGlzcGxheUdhbWVCb2FyZHModXNlciwgQUkpO1xuXG4gICAgY29uc3Qgc2hpcHNUb1BsYWNlID0gW1xuICAgICAgICB7IG5hbWU6ICdjYXJyaWVyJywgbGVuZ3RoOiA1IH0sXG4gICAgICAgIHsgbmFtZTogJ2JhdHRsZXNoaXAnLCBsZW5ndGg6IDQgfSxcbiAgICAgICAgeyBuYW1lOiAnY3J1aXNlcicsIGxlbmd0aDogMyB9LFxuICAgICAgICB7IG5hbWU6ICdzdWJtYXJpbmUnLCBsZW5ndGg6IDMgfSxcbiAgICAgICAgeyBuYW1lOiAnZGVzdHJveWVyJywgbGVuZ3RoOiAyIH1cbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1RvUGxhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcEluZm8gPSBzaGlwc1RvUGxhY2VbaV07XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcEluZm8ubmFtZTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBJbmZvLmxlbmd0aDtcblxuICAgICAgICBzdWJ0aXRsZS5pbm5lclRleHQgPSBgUGxhY2UgeW91ciAke3NoaXBOYW1lfSEgKCR7c2hpcExlbmd0aH0gc3BhY2VzKWA7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcblxuICAgICAgICB3aGlsZSAoIXNoaXBQbGFjZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJbmZvcm1hdGlvbiA9IGF3YWl0IGdldFNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBOdW1iZXIoc2hpcEluZm9ybWF0aW9uLngpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE51bWJlcihzaGlwSW5mb3JtYXRpb24ueSk7XG4gICAgICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uVGV4dCB9ID0gc2hpcEluZm9ybWF0aW9uO1xuXG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRvIHBsYWNlIHRoZSBzaGlwIGluIHRoZSBzZWxlY3RlZCBsb2NhdGlvblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdXNlci5jaG9vc2VTaGlwTG9jYXRpb24oXG4gICAgICAgICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb25UZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNoaXAgZnJvbSB0aGUgYm9hcmQgYmVmb3JlIGF0dGVtcHRpbmcgcGxhY2VtZW50IGFnYWluXG4gICAgICAgICAgICAgICAgdXNlci5nYW1lQm9hcmQucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgZ2FtZSBib2FyZCBjb250YWluZXJzIGZvciB0aGUgbmV4dCBwbGFjZW1lbnQgYXR0ZW1wdFxuICAgICAgICAgICAgcGxheWVyT25lR2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHBsYXllclR3b0dhbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBkaXNwbGF5R2FtZUJvYXJkcyh1c2VyLCBBSSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBzZXR1cENvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIHN1YnRpdGxlLmlubmVyVGV4dCA9ICdGSUdIVCc7XG5cbiAgICAvLyBDb250aW51ZSB3aXRoIEFJIHNoaXAgcGxhY2VtZW50cyBhbmQgdGhlIGdhbWUgbG9vcFxuICAgIEFJLkFJQ2hvb3NlU2hpcExvY2F0aW9uKCdjYXJyaWVyJywgNSk7XG4gICAgQUkuQUlDaG9vc2VTaGlwTG9jYXRpb24oJ2JhdHRsZXNoaXAnLCA0KTtcbiAgICBBSS5BSUNob29zZVNoaXBMb2NhdGlvbignY3J1aXNlcicsIDMpO1xuICAgIEFJLkFJQ2hvb3NlU2hpcExvY2F0aW9uKCdzdWJtYXJpbmUnLCAzKTtcbiAgICBBSS5BSUNob29zZVNoaXBMb2NhdGlvbignZGVzdHJveWVyJywgMik7XG5cbiAgICBwbGF5ZXJPbmVHYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBsYXllclR3b0dhbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheUdhbWVCb2FyZHModXNlciwgQUkpO1xuXG4gICAgcGxheWVyVHdvR2FtZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcblxuICAgIGNvbnN0IHNoaXBzTGVnZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2hpcHMtbGVnZW5kJyk7XG4gICAgc2hpcHNMZWdlbmQucmVtb3ZlKCk7XG5cbiAgICBnYW1lTG9vcCh1c2VyLCBBSSwgdXNlciwgZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lU3RhcnRVcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1ZW07XFxufVxcblxcbnNldHVwLWNvbnRhaW5lcixcXG5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxLjVlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxLjVlbSk7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JvYXJkcy1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1ZW07XFxufVxcblxcbnNldHVwLWNvbnRhaW5lcixcXG5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxLjVlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxLjVlbSk7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJzZXR1cC1kaXYsXFxuZGl2IHtcXG4gICAgYm9yZGVyOiAjOWI5YjliIDFweCBzb2xpZDtcXG59XFxuXFxuc2V0dXAtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCAxMzksIDIzMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmRpdi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjRmZjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmRpdi53b24ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuZGl2Lmxvc3Qge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjM3LCAyMzcpO1xcbn1cXG5cXG4udHdvIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi50d286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAyMDQsIDI0Nik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGl2cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJzZXR1cC1kaXYsXFxuZGl2IHtcXG4gICAgYm9yZGVyOiAjOWI5YjliIDFweCBzb2xpZDtcXG59XFxuXFxuc2V0dXAtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCAxMzksIDIzMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmRpdi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjRmZjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmRpdi53b24ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuZGl2Lmxvc3Qge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjM3LCAyMzcpO1xcbn1cXG5cXG4udHdvIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi50d286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAyMDQsIDI0Nik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG4vKkNTUyBSRVNFVCovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tZXllci1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVELFlBQVk7O0FBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOzs7O0lBSUksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbi8qQ1NTIFJFU0VUKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL09yYml0cm9uL09yYml0cm9uLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogb3JiaXRyb247XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMmIzMztcXG4gICAgY29sb3I6ICNjZGRmZGQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IG9yYml0cm9uO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyLFxcbm1haW4sXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDNlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDAuOSAwIGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG5tYWluLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW46IDJlbTtcXG4gICAgY29sb3I6ICNjZGRmZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAjOWI5YjliIDJweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMmIzMztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2NjY2NjYztcXG4gICAgYm9yZGVyOiAjOGI4YjhiIDJweCBzb2xpZDtcXG59XFxuXFxuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zZXR1cC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogI2NkZGZkZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQTBEO0FBQzlEOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogb3JiaXRyb247XFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL09yYml0cm9uL09yYml0cm9uLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTJiMzM7XFxuICAgIGNvbG9yOiAjY2RkZmRkO1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBvcmJpdHJvbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAwLjkgMCBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxubWFpbi10aXRsZSB7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyZW07XFxuICAgIGNvbG9yOiAjY2RkZmRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogIzliOWI5YiAycHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTJiMzM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNjY2NjY2M7XFxuICAgIGJvcmRlcjogIzhiOGI4YiAycHggc29saWQ7XFxufVxcblxcbmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc2V0dXAtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6ICNjZGRmZGQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJibG9jay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcXG59XFxuXFxuYmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwcy1sZWdlbmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJsb2NrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xcbn1cXG5cXG5ibG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmRzLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmRzLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXZzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGl2cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWV5ZXItcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllci1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLWxlZ2VuZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLWxlZ2VuZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJTaGlwIiwiR2FtZUJvYXJkIiwicGxheWVyTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXJyYXkiLCJjcmVhdGVCb2FyZCIsImhpdEFycmF5IiwiY3JlYXRlSGl0QXJyYXkiLCJoaXRMb2ciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImkiLCJqIiwicHVzaCIsImZpbmRJbmRleCIsIngiLCJ5IiwibGVuZ3RoIiwiY2hlY2tJZkluZGV4RG9lc05vdEV4aXN0IiwiZGVjcmVhc2VkWCIsImRlY3JlYXNlZFkiLCJpbmNyZWFzZWRYIiwiaW5jcmVhc2VkWSIsIm9yaWVudGF0aW9uIiwibGVmdFNoaXBMZW5ndGgiLCJyaWdodFNoaXBMZW5ndGgiLCJuZXdJbmRleCIsInVuZGVmaW5lZCIsInBsYWNlUmVzdE9mU2hpcCIsInNoaXAiLCJzaGlwQXJyYXkiLCJuYW1lIiwiY29uY2F0IiwicGxhY2VTaGlwIiwic2hpcE5hbWUiLCJzaGlwTGVuZ3RoIiwibmV3U2hpcExlbmd0aCIsIk1hdGgiLCJyb3VuZCIsImluaXRpYWxJbmRleCIsInJlc3VsdCIsInJlY2VpdmVBdHRhY2siLCJpbmRleCIsInVwZGF0ZUhpdExvZyIsInJlbW92ZVNoaXAiLCJwb3AiLCJQbGF5ZXIiLCJBSVNob3RBcnJheSIsImNyZWF0ZUFJQXJyYXkiLCJnYW1lQm9hcmQiLCJjaG9vc2VTaGlwTG9jYXRpb24iLCJwbGFjZW1lbnQiLCJjaG9vc2VBdHRhY2siLCJBSUNob29zZVNoaXBMb2NhdGlvbiIsInJhbmRvbVgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVkiLCJvcmllbnRhdGlvbnMiLCJyYW5kb21PcmllbnRhdGlvbiIsInNoaXBQbGFjZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJBSUNob29zZUF0dGFjayIsInJhbmRvbUluZGV4IiwiaGl0cyIsInN1bmsiLCJoaXQiLCJpc1N1bmsiLCJzdWJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVuZEdhbWUiLCJoaXRDb3VudGVyIiwiZ2FtZUxvb3AiLCJwbGF5ZXIxIiwicGxheWVyMiIsImN1cnJlbnQiLCJjdXJyZW50UGxheWVyIiwic3dpdGNoUGxheWVyIiwiQUlTaG90SW5kZXgiLCJ1c2VyR2FtZUJvYXJkU3BhY2UiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwidXNlckdhbWVCb2FyZFNwYWNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3BhY2UiLCJpbm5lclRleHQiLCJwbGF5ZXJPbmVTcXVhcmVzIiwic3EiLCJwbGF5QWdhaW5CdXR0b25Db250YWluZXIiLCJwbGF5QWdhaW5CdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXBwZW5kIiwiZGl2cyIsImRpdiIsImNoYW5nZVN0YXR1c09mU3F1YXJlIiwic3F1YXJlIiwiY2xpY2tIYW5kbGVyIiwiZ2V0QXR0cmlidXRlIiwiYXR0YWNrUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwiYWxsQUlTcXVhcmVzIiwiQUlTcXVhcmUiLCJwbGF5ZXJUd29TcXVhcmVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlHYW1lQm9hcmRzIiwiZ2FtZUNvbnRhaW5lciIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZVNldHVwR3JpZCIsInNldHVwQ29udGFpbmVyIiwiZ2V0U2hpcFBsYWNlbWVudCIsIl9nZXRTaGlwUGxhY2VtZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhYnJ1cHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJvcmllbnRhdGlvblRleHQiLCJzdG9wIiwiZ2FtZVN0YXJ0VXAiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwia2V5cyIsInJldmVyc2UiLCJjaGFyQXQiLCJzbGljZSIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsImNhdGNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImVyciIsImNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uIiwiYnV0dG9uQ29udGFpbmVyIiwib3JpZW50YXRpb25CdXR0b24iLCJvbmNsaWNrIiwib3JpZW50YXRpb25DaGFuZ2UiLCJfZ2FtZVN0YXJ0VXAiLCJ1c2VyIiwiQUkiLCJvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lciIsInBsYXllck9uZUdhbWVDb250YWluZXIiLCJwbGF5ZXJUd29HYW1lQ29udGFpbmVyIiwic2hpcHNUb1BsYWNlIiwic2hpcEluZm8iLCJzaGlwUGxhY2VkIiwic2hpcEluZm9ybWF0aW9uIiwic2hpcHNMZWdlbmQiLCJOdW1iZXIiLCJpbm5lckhUTUwiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9