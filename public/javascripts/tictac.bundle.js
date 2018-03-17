webpackJsonp([2],[
/* 0 */
/*!************************!*\
  !*** ./jsx/tictac.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var calculateWinner = function calculateWinner(squares) {
	    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	    for (var i = 0; i < lines.length; i++) {
	        var _lines$i = _slicedToArray(lines[i], 3),
	            a = _lines$i[0],
	            b = _lines$i[1],
	            c = _lines$i[2];
	
	        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	            return squares[a];
	        }
	    }
	    return null;
	};
	
	var Square = function Square(_ref) {
	    var value = _ref.value,
	        _onClick = _ref.onClick;
	
	    return _react2.default.createElement(
	        'button',
	        { className: 'square', onClick: function onClick() {
	                return _onClick();
	            } },
	        value
	    );
	};
	
	var Board = function (_React$Component) {
	    _inherits(Board, _React$Component);
	
	    function Board() {
	        _classCallCheck(this, Board);
	
	        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
	    }
	
	    _createClass(Board, [{
	        key: 'renderSquare',
	        value: function renderSquare(i) {
	            var _this2 = this;
	
	            return _react2.default.createElement(Square, { value: this.props.squares[i], onClick: function onClick() {
	                    return _this2.props.onClick(i);
	                } });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'board-row' },
	                    this.renderSquare(0),
	                    this.renderSquare(1),
	                    this.renderSquare(2)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'board-row' },
	                    this.renderSquare(3),
	                    this.renderSquare(4),
	                    this.renderSquare(5)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'board-row' },
	                    this.renderSquare(6),
	                    this.renderSquare(7),
	                    this.renderSquare(8)
	                )
	            );
	        }
	    }]);
	
	    return Board;
	}(_react2.default.Component);
	
	var Game = function (_React$Component2) {
	    _inherits(Game, _React$Component2);
	
	    function Game() {
	        _classCallCheck(this, Game);
	
	        var _this3 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
	
	        _this3.state = {
	            history: [{
	                squares: Array(9).fill(null)
	            }],
	            xIsNext: true,
	            stepNumber: 0
	        };
	        return _this3;
	    }
	
	    _createClass(Game, [{
	        key: 'handleClick',
	        value: function handleClick(i) {
	            var history = this.state.history.slice(0, this.state.stepNumber + 1);
	            var current = history[history.length - 1];
	            var squares = current.squares.slice();
	            if (calculateWinner(squares) || squares[i]) {
	                return;
	            }
	            squares[i] = this.state.xIsNext ? 'X' : 'O';
	            this.setState({
	                history: history.concat([{
	                    squares: squares
	                }]),
	                xIsNext: !this.state.xIsNext,
	                stepNumber: history.length
	            });
	        }
	    }, {
	        key: 'jumpTo',
	        value: function jumpTo(step) {
	            this.setState({
	                stepNumber: step,
	                xIsNext: !(step % 2)
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            var history = this.state.history;
	            var current = history[this.state.stepNumber];
	            var winner = calculateWinner(current.squares);
	
	            var status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
	            if (winner) {
	                status = 'Winner: ' + winner + '!!!';
	            }
	            var moves = history.map(function (board, step) {
	                var desc = step ? 'Move #' + step : 'Game start';
	                return _react2.default.createElement(
	                    'li',
	                    { key: step },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'step', onClick: function onClick() {
	                                return _this4.jumpTo(step);
	                            } },
	                        desc
	                    )
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'game' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'status' },
	                    status
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'game-board' },
	                    _react2.default.createElement(Board, {
	                        squares: current.squares,
	                        onClick: function onClick(i) {
	                            return _this4.handleClick(i);
	                        }
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'moves' },
	                    _react2.default.createElement(
	                        'ol',
	                        null,
	                        moves
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Game;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(Game, null), document.getElementById('root'));

/***/ }
]);
//# sourceMappingURL=tictac.bundle.js.map