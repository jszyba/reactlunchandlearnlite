webpackJsonp([0],[
/* 0 */
/*!**********************!*\
  !*** ./jsx/demo.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var places = ['Dominica', 'Grenada', 'Bahamas', 'Barbados', 'Antigua and Barbuda', 'St. John', 'Antigua', 'Montserrat'];
	
	var Test = function (_React$Component) {
	    _inherits(Test, _React$Component);
	
	    function Test(props) {
	        _classCallCheck(this, Test);
	
	        var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
	
	        _this.state = {
	            names: props.names
	        };
	        return _this;
	    }
	
	    _createClass(Test, [{
	        key: 'reverseName',
	        value: function reverseName() {
	            this.setState({
	                names: this.state.names.reverse()
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var names = this.state.names.map(function (name, i) {
	                return _react2.default.createElement(
	                    'div',
	                    { key: i, className: 'name' },
	                    name
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'shopping-list', onClick: function onClick() {
	                        return _this2.reverseName();
	                    } },
	                names
	            );
	        }
	    }]);
	
	    return Test;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(Test, { names: places }), document.getElementById('root'));

/***/ }
]);
//# sourceMappingURL=demo.bundle.js.map