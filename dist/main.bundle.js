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
  function GameBoard() {
    _classCallCheck(this, GameBoard);
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
  }, {
    key: "findIndex",
    value: function findIndex(x, y) {
      for (var i = 0; i < this.array.length; i++) {
        if (x === this.array[i][0] && y === this.array[i][1]) {
          return i;
        }
      }
    }
  }, {
    key: "checkIfIndexDoesNotExist",
    value: function checkIfIndexDoesNotExist(x, y, decreasedX, decreasedY, increasedX, increasedY, orientation, leftShipLength, rightShipLength) {
      var array = [];
      if (orientation === 'horizontal') {
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
      if (orientation === 'horizontal') {
        for (var i = 0; i < leftShipLength; i++) {
          decreasedX -= 1;
          var newIndex = this.findIndex(decreasedX, y);
          array[newIndex].push(ship);
          shipArray.push([decreasedX, y, ship]);
        }
        for (var _i5 = 0; _i5 < rightShipLength; _i5++) {
          increasedX += 1;
          var _newIndex4 = this.findIndex(increasedX, y);
          array[_newIndex4].push(ship);
          shipArray.push([increasedX, y, ship]);
        }
      } else {
        for (var _i6 = 0; _i6 < leftShipLength; _i6++) {
          decreasedY -= 1;
          var _newIndex5 = this.findIndex(x, decreasedY);
          array[_newIndex5].push(ship);
          shipArray.push([x, decreasedY, ship]);
        }
        for (var _i7 = 0; _i7 < rightShipLength; _i7++) {
          increasedY += 1;
          var _newIndex6 = this.findIndex(x, increasedY);
          array[_newIndex6].push(ship);
          shipArray.push([x, increasedY, ship]);
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
        this.array[initialIndex].push(ship);
        shipArray.push([x, y, ship]);
        var result = this.placeRestOfShip(ship, x, y, leftShipLength, rightShipLength, orientation, this.array, shipArray);
        if (typeof result === 'string') {
          return result;
        }

        // Possibly change to return an array of index's?
        return shipArray;
      }
      return 'Space Already Taken';
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      var index = this.findIndex(x, y);
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
    this.AIShipsArray = this.createAIArray();
    this.gameBoard = new _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  _createClass(Player, [{
    key: "chooseShipLocation",
    value: function chooseShipLocation(shipName, shipLength, x, y, orientation) {
      _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"].placeShip(shipName, shipLength, x, y, orientation);
    }
  }, {
    key: "chooseAttack",
    value: function chooseAttack(x, y) {
      _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"].receiveAttack(x, y);
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
      var orientations = ['horizontal', 'vertical'];
      var randomOrientation = orientations[Math.floor(Math.random() * orientations.length)];
      var shipPlacement = this.gameBoard.placeShip(shipName, shipLength, randomX, randomY, randomOrientation);
      if (Array.isArray(shipPlacement)) {
        return shipPlacement;
      }
      return this.AIChooseShipLocation();
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

/***/ "./src/modules/gameLoop.js":
/*!*********************************!*\
  !*** ./src/modules/gameLoop.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/playerFactory */ "./src/modules/factories/playerFactory.js");

function gameLoop() {
  var user = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"](1);
  var AI = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"](2);
  user.chooseShipLocation('carrier', 5, 9, 9, 'horizontal');
  user.chooseShipLocation('cruiser', 3, 0, 0, 'vertical');
  user.chooseShipLocation('battleship', 4, 0, 9, 'horizontal');
  user.chooseShipLocation('destroyer', 2, 9, 0, 'horizontal');
  user.chooseShipLocation('submarine', 3, 5, 5, 'vertical');
  AI.AIChooseShipLocation('carrier', 5, 9, 9, 'horizontal');
  AI.AIChooseShipLocation('cruiser', 3, 0, 9, 'horizontal');
  AI.AIChooseShipLocation('battleship', 4, 9, 0, 'horizontal');
  AI.AIChooseShipLocation('destroyer', 2, 4, 4, 'vertical');
  AI.AIChooseShipLocation('submarine', 3, 0, 0, 'vertical');
}
/* harmony default export */ __webpack_exports__["default"] = (gameLoop);

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/modules/gameLoop.js");

(0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQztFQUN6RG1CLEVBQUUsQ0FBQ25CLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUM7RUFDekRtQixFQUFFLENBQUNuQixvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQzVEbUIsRUFBRSxDQUFDbkIsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztFQUN6RG1CLEVBQUUsQ0FBQ25CLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUM7QUFDN0Q7QUFFQSwrREFBZWlCLFFBQVE7Ozs7Ozs7Ozs7OztBQ25CVztBQUVsQ0EscURBQVEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuaGl0QXJyYXkgPSB0aGlzLmNyZWF0ZUhpdEFycmF5KCk7XG4gICAgICAgIHRoaXMuaGl0TG9nID0gMDtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBjcmVhdGVIaXRBcnJheSgpIHtcbiAgICAgICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGhpdEFycmF5LnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhpdEFycmF5O1xuICAgIH1cblxuICAgIGZpbmRJbmRleCh4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHggPT09IHRoaXMuYXJyYXlbaV1bMF0gJiYgeSA9PT0gdGhpcy5hcnJheVtpXVsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJZkluZGV4RG9lc05vdEV4aXN0KFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBkZWNyZWFzZWRYLFxuICAgICAgICBkZWNyZWFzZWRZLFxuICAgICAgICBpbmNyZWFzZWRYLFxuICAgICAgICBpbmNyZWFzZWRZLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgbGVmdFNoaXBMZW5ndGgsXG4gICAgICAgIHJpZ2h0U2hpcExlbmd0aFxuICAgICkge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVhc2VkWCAtPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoZGVjcmVhc2VkWCwgeSk7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXdJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoaW5jcmVhc2VkWCwgeSk7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXdJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZnRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkZWNyZWFzZWRZIC09IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRJbmRleCh4LCBkZWNyZWFzZWRZKTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ld0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbmNyZWFzZWRZICs9IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRJbmRleCh4LCBpbmNyZWFzZWRZKTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ld0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZVJlc3RPZlNoaXAoXG4gICAgICAgIHNoaXAsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGxlZnRTaGlwTGVuZ3RoLFxuICAgICAgICByaWdodFNoaXBMZW5ndGgsXG4gICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICBhcnJheSxcbiAgICAgICAgc2hpcEFycmF5XG4gICAgKSB7XG4gICAgICAgIGxldCBkZWNyZWFzZWRYID0geDtcbiAgICAgICAgbGV0IGRlY3JlYXNlZFkgPSB5O1xuICAgICAgICBsZXQgaW5jcmVhc2VkWCA9IHg7XG4gICAgICAgIGxldCBpbmNyZWFzZWRZID0geTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZJbmRleERvZXNOb3RFeGlzdChcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgZGVjcmVhc2VkWCxcbiAgICAgICAgICAgICAgICBkZWNyZWFzZWRZLFxuICAgICAgICAgICAgICAgIGluY3JlYXNlZFgsXG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWSxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICBsZWZ0U2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgICByaWdodFNoaXBMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1BsZWFzZSBDaG9vc2UgQSBOZXcgU3BhY2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRlY3JlYXNlZFggLT0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZEluZGV4KGRlY3JlYXNlZFgsIHkpO1xuICAgICAgICAgICAgICAgIGFycmF5W25ld0luZGV4XS5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgIHNoaXBBcnJheS5wdXNoKFtkZWNyZWFzZWRYLCB5LCBzaGlwXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoaW5jcmVhc2VkWCwgeSk7XG4gICAgICAgICAgICAgICAgYXJyYXlbbmV3SW5kZXhdLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goW2luY3JlYXNlZFgsIHksIHNoaXBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRlY3JlYXNlZFkgLT0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZEluZGV4KHgsIGRlY3JlYXNlZFkpO1xuICAgICAgICAgICAgICAgIGFycmF5W25ld0luZGV4XS5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgIHNoaXBBcnJheS5wdXNoKFt4LCBkZWNyZWFzZWRZLCBzaGlwXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VkWSArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kSW5kZXgoeCwgaW5jcmVhc2VkWSk7XG4gICAgICAgICAgICAgICAgYXJyYXlbbmV3SW5kZXhdLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goW3gsIGluY3JlYXNlZFksIHNoaXBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaGlwQXJyYXk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1NoaXBMZW5ndGggPSBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbGVmdFNoaXBMZW5ndGggPSBNYXRoLnJvdW5kKG5ld1NoaXBMZW5ndGggLyAyKTtcbiAgICAgICAgY29uc3QgcmlnaHRTaGlwTGVuZ3RoID0gbmV3U2hpcExlbmd0aCAtIGxlZnRTaGlwTGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IGluaXRpYWxJbmRleCA9IHRoaXMuZmluZEluZGV4KHgsIHkpO1xuXG4gICAgICAgIGlmIChpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCkgcmV0dXJuICdQbGVhc2UgQ2hvb3NlIEEgTmV3IFNwYWNlJztcblxuICAgICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5hcnJheVtpbml0aWFsSW5kZXhdLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgdGhpcy5hcnJheVtpbml0aWFsSW5kZXhdLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBzaGlwQXJyYXkucHVzaChbeCwgeSwgc2hpcF0pO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYWNlUmVzdE9mU2hpcChcbiAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICBsZWZ0U2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgICByaWdodFNoaXBMZW5ndGgsXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheSxcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBvc3NpYmx5IGNoYW5nZSB0byByZXR1cm4gYW4gYXJyYXkgb2YgaW5kZXgncz9cbiAgICAgICAgICAgIHJldHVybiBzaGlwQXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ1NwYWNlIEFscmVhZHkgVGFrZW4nO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4KHgsIHkpO1xuXG4gICAgICAgIGlmICh0aGlzLmhpdEFycmF5W2luZGV4XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFycmF5W2luZGV4XS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdEFycmF5W2luZGV4XS5wdXNoKCdtaXNzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0QXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhpdEFycmF5W2luZGV4XS5wdXNoKCdoaXQnKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVwZGF0ZUhpdExvZygpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQWxsIFNoaXBzIFN1bmsnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRBcnJheVtpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ1NwYWNlIEFscmVhZHkgU2hvdCBBdCc7XG4gICAgfVxuXG4gICAgdXBkYXRlSGl0TG9nKCkge1xuICAgICAgICB0aGlzLmhpdExvZyArPSAxO1xuICAgICAgICBpZiAodGhpcy5oaXRMb2cgPT09IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ0FsbCBTaGlwcyBTdW5rJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmRGYWN0b3J5JztcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW1iZXIgPSBwbGF5ZXJOdW1iZXI7XG4gICAgICAgIHRoaXMuQUlTaG90QXJyYXkgPSB0aGlzLmNyZWF0ZUFJQXJyYXkoKTtcbiAgICAgICAgdGhpcy5BSVNoaXBzQXJyYXkgPSB0aGlzLmNyZWF0ZUFJQXJyYXkoKTtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgY2hvb3NlU2hpcExvY2F0aW9uKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgICAgICBHYW1lQm9hcmQucGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gICAgfVxuXG4gICAgY2hvb3NlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQUlBcnJheSgpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIEFJQ2hvb3NlU2hpcExvY2F0aW9uKHNoaXBOYW1lLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9XG4gICAgICAgICAgICBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3JpZW50YXRpb25zLmxlbmd0aCldO1xuXG4gICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgICAgICByYW5kb21YLFxuICAgICAgICAgICAgcmFuZG9tWSxcbiAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hpcFBsYWNlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwUGxhY2VtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuQUlDaG9vc2VTaGlwTG9jYXRpb24oKTtcbiAgICB9XG5cbiAgICBBSUNob29zZUF0dGFjaygpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLkFJU2hvdEFycmF5Lmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHRoaXMuQUlTaG90QXJyYXlbcmFuZG9tSW5kZXhdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5BSVNob3RBcnJheVtyYW5kb21JbmRleF0ucHVzaCgnc2hvdCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuQUlDaG9vc2VBdHRhY2soKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5JztcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBQbGF5ZXIoMSk7XG4gICAgY29uc3QgQUkgPSBuZXcgUGxheWVyKDIpO1xuXG4gICAgdXNlci5jaG9vc2VTaGlwTG9jYXRpb24oJ2NhcnJpZXInLCA1LCA5LCA5LCAnaG9yaXpvbnRhbCcpO1xuICAgIHVzZXIuY2hvb3NlU2hpcExvY2F0aW9uKCdjcnVpc2VyJywgMywgMCwgMCwgJ3ZlcnRpY2FsJyk7XG4gICAgdXNlci5jaG9vc2VTaGlwTG9jYXRpb24oJ2JhdHRsZXNoaXAnLCA0LCAwLCA5LCAnaG9yaXpvbnRhbCcpO1xuICAgIHVzZXIuY2hvb3NlU2hpcExvY2F0aW9uKCdkZXN0cm95ZXInLCAyLCA5LCAwLCAnaG9yaXpvbnRhbCcpO1xuICAgIHVzZXIuY2hvb3NlU2hpcExvY2F0aW9uKCdzdWJtYXJpbmUnLCAzLCA1LCA1LCAndmVydGljYWwnKTtcblxuICAgIEFJLkFJQ2hvb3NlU2hpcExvY2F0aW9uKCdjYXJyaWVyJywgNSwgOSwgOSwgJ2hvcml6b250YWwnKTtcbiAgICBBSS5BSUNob29zZVNoaXBMb2NhdGlvbignY3J1aXNlcicsIDMsIDAsIDksICdob3Jpem9udGFsJyk7XG4gICAgQUkuQUlDaG9vc2VTaGlwTG9jYXRpb24oJ2JhdHRsZXNoaXAnLCA0LCA5LCAwLCAnaG9yaXpvbnRhbCcpO1xuICAgIEFJLkFJQ2hvb3NlU2hpcExvY2F0aW9uKCdkZXN0cm95ZXInLCAyLCA0LCA0LCAndmVydGljYWwnKTtcbiAgICBBSS5BSUNob29zZVNoaXBMb2NhdGlvbignc3VibWFyaW5lJywgMywgMCwgMCwgJ3ZlcnRpY2FsJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuIiwiaW1wb3J0IGdhbWVMb29wIGZyb20gJy4vZ2FtZUxvb3AnO1xuXG5nYW1lTG9vcCgpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJHYW1lQm9hcmQiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcnJheSIsImNyZWF0ZUJvYXJkIiwiaGl0QXJyYXkiLCJjcmVhdGVIaXRBcnJheSIsImhpdExvZyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaSIsImoiLCJwdXNoIiwiZmluZEluZGV4IiwieCIsInkiLCJsZW5ndGgiLCJjaGVja0lmSW5kZXhEb2VzTm90RXhpc3QiLCJkZWNyZWFzZWRYIiwiZGVjcmVhc2VkWSIsImluY3JlYXNlZFgiLCJpbmNyZWFzZWRZIiwib3JpZW50YXRpb24iLCJsZWZ0U2hpcExlbmd0aCIsInJpZ2h0U2hpcExlbmd0aCIsIm5ld0luZGV4IiwidW5kZWZpbmVkIiwicGxhY2VSZXN0T2ZTaGlwIiwic2hpcCIsInNoaXBBcnJheSIsInBsYWNlU2hpcCIsInNoaXBOYW1lIiwic2hpcExlbmd0aCIsIm5ld1NoaXBMZW5ndGgiLCJNYXRoIiwicm91bmQiLCJpbml0aWFsSW5kZXgiLCJyZXN1bHQiLCJyZWNlaXZlQXR0YWNrIiwiaW5kZXgiLCJ1cGRhdGVIaXRMb2ciLCJQbGF5ZXIiLCJwbGF5ZXJOdW1iZXIiLCJBSVNob3RBcnJheSIsImNyZWF0ZUFJQXJyYXkiLCJBSVNoaXBzQXJyYXkiLCJnYW1lQm9hcmQiLCJjaG9vc2VTaGlwTG9jYXRpb24iLCJjaG9vc2VBdHRhY2siLCJBSUNob29zZVNoaXBMb2NhdGlvbiIsInJhbmRvbVgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVkiLCJvcmllbnRhdGlvbnMiLCJyYW5kb21PcmllbnRhdGlvbiIsInNoaXBQbGFjZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJBSUNob29zZUF0dGFjayIsInJhbmRvbUluZGV4IiwibmFtZSIsImhpdHMiLCJzdW5rIiwiaGl0IiwiaXNTdW5rIiwiZ2FtZUxvb3AiLCJ1c2VyIiwiQUkiXSwic291cmNlUm9vdCI6IiJ9