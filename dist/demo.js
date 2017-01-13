/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _beeLayout = __webpack_require__(1);

	var _beePanel = __webpack_require__(7);

	var _beeButton = __webpack_require__(60);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(62);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var CARET = _react2['default'].createElement('i', { className: 'uf uf-chevronarrowdown' });

	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-chevronarrowup' });

	/**
	 * @title Icon
	 * @description 在iuap字符库，`type`参数值均以-分隔。
	 */

	var Demo1 = function (_Component) {
					_inherits(Demo1, _Component);

					function Demo1() {
									_classCallCheck(this, Demo1);

									return _possibleConstructorReturn(this, _Component.apply(this, arguments));
					}

					Demo1.prototype.render = function render() {
									return _react2['default'].createElement(
													'div',
													{ className: 'tinper-icon-demo' },
													_react2['default'].createElement(
																	'ul',
																	{ className: 'icon_lists' },
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-wechat' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5FAE\u4FE1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-wechat'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-add-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u52A0'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-add-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-search' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u641C\u7D22'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-search'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-histogram-arrow-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u56FE\u8868 \u6298\u7EBF\u56FE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-histogram-arrow-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-close-bold' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5173\u95ED'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-close-bold'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-umbrella' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u96E8\u4F1E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-umbrella'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-qq' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'QQ'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-qq'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-4square-3' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5206\u7C7B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-4square-3'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-send' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u53D1\u9001'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-send'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-map' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5730\u56FE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-map'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-9square-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6807\u5B9A'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-9square-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-navmenu' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6C49\u5821\u5305'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-navmenu'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pc-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u663E\u793A\u5668'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pc-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-search-light-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'zoom'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-search-light-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-check-s-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4EFB\u52A1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-check-s-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pencil' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7F16\u8F91'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pencil'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-repeat' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u64A4\u9500'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-repeat'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-security-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5B89\u5168'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-security-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-lexi' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5973'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-lexi'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pencil-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7F16\u8F91'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pencil-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-del' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5220\u9664'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-del'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bi-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6BD4\u4EF7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bi-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pencil-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7F16\u8F91'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pencil-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-qrcode' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E8C\u7EF4\u7801'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-qrcode'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u514D\u8D39\u62A5\u4EF7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rmb-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-search-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u641C\u7D22'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-search-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bell' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u94C3\u94DB'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bell'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pass-3' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u673A\u68C0\u901A\u8FC7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pass-3'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-treearrow-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6811\u5F62\u7EBF'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-treearrow-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-training' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u57F9\u8BAD'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-training'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-group-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7EC4\u7EC7\u67B6\u6784'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-group-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-zoom-in' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'zoom-in'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-zoom-in'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-security-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5B89\u5168'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-security-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-baojia-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u62A5\u4EF7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-baojia-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rulerpen' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5B9A\u5236'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rulerpen'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-erpsearch' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'erp'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-erpsearch'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-group-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7EC4\u7EC7\u673A\u6784'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-group-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o-updown' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u540C\u6B65\u4E2D2-\u540C\u6B65'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud-o-updown'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-close-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5173\u95ED'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-close-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-add-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u52A0'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-add-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pc' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5DE5\u4F5C\u53F0'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pc'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rain' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7A7A\u6C14_\u96E8\u5929'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rain'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-nodata' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u65E0\u6570\u636E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-nodata'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-close-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5173\u95ED'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-close-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bohui-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5BA1\u6279-\u9A73\u56DE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bohui-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bag-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5546\u54C1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bag-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-table-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'made'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-table-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-anglearrowpointingtoright' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-anglearrowpointingtoright'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-exc-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u53F9\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-exc-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-group' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7EC4\u7EC7\u673A\u6784'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-group'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-personin-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8BA4\u8BC1\u6FC0\u6D3B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-personin-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-calendar' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'gm_\u65E5\u5386'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-calendar'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-add-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u52A0'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-add-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sync-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u540C\u6B65'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sync-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-grid' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'grid'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-grid'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-anglepointingtoleft' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-anglepointingtoleft'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-activate-3' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6FC0\u6D3B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-activate-3'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-caven' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7537'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-caven'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-back' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8FD4\u56DE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-back'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pass-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6388\u6743'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pass-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u663E\u793A\u6811'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-reduce-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-area' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u56FE\u8868\u56FE\u6807-\u9762\u79EF\u56FE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-area'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-flag' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u65D7\u5E1C'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-flag'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-box-o-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8D2D\u4E70\u76D2\u5B50'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-box-o-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-s-o-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E0B\u67B6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-s-o-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-s-o-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E0A\u67B6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-s-o-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-building' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4F01\u4E1A\u4FE1\u606F'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-building'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tapp' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tapp'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-treefolder' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u641C\u7D22'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-treefolder'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-advice' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u54A8\u8BE2'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-advice'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-2collayout' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5E8F\u5217\u5E03\u5C40'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-2collayout'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-check-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5BA1\u6279'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-check-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sign' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u91C7\u8D2D\u5408\u540C'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sign'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-listsearch' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u67E5\u770B\u8BE6\u60C5'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-listsearch'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-gridcaretarrowup' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5FC5\u586B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-gridcaretarrowup'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-eye-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u67E5\u770B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-eye-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-check-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8BB8\u53EF'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-check-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-seal' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5BA1\u6279'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-seal'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-erpbox' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'erp'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-erpbox'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rulerpen-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5B9A\u5236'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rulerpen-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-role' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u89D2\u8272'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-role'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-exc-c-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u63D0\u793A\u53F9\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-exc-c-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pad' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'pad'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pad'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-treefolder-closed' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'tree-new-sbling-node'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-treefolder-closed'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u51CF\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-reduce-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pass-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u901A\u8FC7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pass-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-setting' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7EF4\u62A4'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-setting'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-close-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'ZSX\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-close-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-map-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5730\u56FE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-map-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-move' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u79FB\u52A8'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-move'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-2arrow-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-right' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-2arrow-right'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-left' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-c-o-left'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-plus' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'plus'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-plus'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-right' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-c-o-right'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-c-o-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-list-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6682\u65E0\u6570\u636E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-list-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E91\u4E0B\u8F7D'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud-o-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-nodata-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u65E0\u6548\u6570\u636E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-nodata-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-file-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6587\u6863\u6587\u4EF6-01'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-file-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-2arrow-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-notification' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6D88\u606F\u5587\u53ED'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-notification'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-piechart' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u56FE\u8868_\u997C'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-piechart'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E91_\u4E0A\u4F20'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud-o-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-close' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u53D6\u6D88'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-close'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-correct' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5BF9\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-correct'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-histogram-s-o-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u56FE\u8868\u5207\u6362'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-histogram-s-o-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-4square-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5E94\u7528\u4E2D\u5FC3'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-4square-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sunny' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14 '
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sunny'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-link' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u590D\u5236\u94FE\u63A5'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-link'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-eye' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u67E5\u770B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-eye'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-eye-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u67E5\u770B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-eye-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-qian' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7B7E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-qian'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-widgetab' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5C0F\u90E8\u4EF6\u6388\u6743'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-widgetab'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u62A5\u4EF7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rmb-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-link-off' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u65AD\u5F00\u94FE\u63A5'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-link-off'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-shang-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E0A\u67B6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-shang-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-xia-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E0B\u67B6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-xia-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-box-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u76D2\u5B50full'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-box-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pass-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6388\u6743'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pass-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'angle-arrow-down'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-right' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'angle-arrow-pointing-to-right'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-right'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-left' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'angle-pointing-to-left'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-left'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-box' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'archive-black-box'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-box'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-right' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'arrowhead-pointing-to-the-right'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-triangle-right'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-histogram-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'bar-graph-on-a-rectangle'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-histogram-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-book' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'book'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-book'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bookmark-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'bookmark-white'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bookmark-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-leaf' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'branch-with-leaves-black-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-leaf'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bullseye' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'bullseye'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bullseye'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-gridcaretdown' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'camera-retro'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-gridcaretdown'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'caret-arrow-up'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-triangle-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'caret-down'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-triangle-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-down' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'cloud-storage-download'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud-down'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'cloud-storage-uploading-option'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bubble' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'comment-black-oval-bubble-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bubble'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bubble-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'comment-white-oval-bubble'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bubble-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-copy' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'copy-document'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-copy'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-correct-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'correct-symbol'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-correct-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-left' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'double-left-chevron'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-2arrow-left'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-down-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'down-arrow'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-down-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-download' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'download-to-storage-drive'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-download'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-earth' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'earth-globe'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-earth'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mail-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'envelope-of-white-paper'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mail-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mail' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'envelope'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mail'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-exc' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'exclamation'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-exc'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-externallink' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'external-link-symbol'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-externallink'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-video' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'facetime-button'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-video'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-films' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'film-strip-with-two-photograms'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-films'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-folder' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'folder-closed-black-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-folder'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-folder-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'folder-white-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-folder-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-4square' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'four-black-squares'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-4square'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-gift' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'gift-box'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-gift'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-github-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'github-logo'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-github-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-github-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'github-sign'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-github-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-heart-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'heart-shape-outline'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-heart-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-heart' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'heart-shape-silhouette'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-heart'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-home' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'home'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-home'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-i-c-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'information-button'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-i-c-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-i' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'information-symbol'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-i'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-left' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'left-arrow'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-triangle-left'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-symlist' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'listing-option'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-symlist'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-left-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'long-arrow-pointing-to-left'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-left-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-right-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'long-arrow-pointing-to-the-right'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-right-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-up-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'long-arrow-pointing-up'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-up-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'minus-sign-inside-a-black-circle'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-reduce-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'minus-sign-inside-a-black-rounded-square-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-reduce-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-minus' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'minus-symbol'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-minus'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mobile' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'mobile-phone'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mobile'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bell-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'musical-bell-outline'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bell-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-9square' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'nine-black-tiles'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-9square'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-numlist' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'numbered-list'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-numlist'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-folderopen-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'open-folder-outline'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-folderopen-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-treefolderopen' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'open-folder'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-treefolderopen'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mac' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'open-laptop-computer'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mac'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-camera' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'photo-camera'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-camera'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-picture' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'picture'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-picture'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-play' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'play-sign'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-play'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-play-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'play-video-button'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-play-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-qm-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'question-mark-on-a-circular-black-background'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-qm-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-qm' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'question-sign'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-qm'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-navmenu-light' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'reorder-option'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-navmenu-light'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-settings' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'settings'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-settings'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cart' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'shopping-cart-black-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cart'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-histogram' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'signal-bars'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-histogram'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-finetune' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sort-arrows-couple-pointing-up-and-down'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-finetune'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sortup' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sort-by-attributes-interface-button-option'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sortup'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sortdown' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sort-by-attributes'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sortdown'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sort19' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sort-by-numeric-order'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sort19'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sort91' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sort-by-order'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sort91'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-za' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sort-reverse-alphabetical-order'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-za'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-star-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'star-1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-star-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-star-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'star-half-empty'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-star-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-star' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'star'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-star'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-luggage' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'suitcase-with-white-details'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-luggage'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-table' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'table-grid'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-table'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tel' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'telephone-handle-silhouette'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tel'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tel-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'telephone-symbol-button'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tel-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-terminal' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'terminal'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-terminal'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-file' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'text-file-1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-file'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-file-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'text-file'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-file-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-3dot-h' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'three-small-square-shapes'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-3dot-h'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-time-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'time'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-time-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-upload' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'upload'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-upload'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-3dot-v' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'vertical-ellipsis'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-3dot-v'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rmb' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'yen-symbol'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rmb'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-c-o-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-reject-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u9A73\u56DE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-reject-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-barcode' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'barcode-1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-barcode'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-zoom-out' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'zoom-out'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-zoom-out'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-exc-t-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E09\u89D2\u53F9\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-exc-t-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-pass' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u901A\u8FC7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-pass'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-flow' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5173\u7CFB\u7F51\u7EDC'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-flow'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-add-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u52A0'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-add-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-right-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-c-o-right-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-shelf-on' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E0A\u67B6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-shelf-on'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-shelf-off' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E0B\u67B6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-shelf-off'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-file-o-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6587\u4EF6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-file-o-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-truck-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5230\u8D27\u786E\u8BA4'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-truck-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-super' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u529F\u80FD\u5F3A\u5927'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-super'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-equipment' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8BBE\u5907'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-equipment'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-left-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BAD\u5934'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-c-o-left-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-files-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8D44\u6E90\u6587\u4EF6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-files-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4E91'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cloud-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-s-o-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5BF9\u8D26'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rmb-s-o-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-3dot-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BA1\u7406\u4E2D\u5FC3'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-3dot-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-dafeng' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u5927\u98CE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-dafeng'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-baoxue' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u66B4\u96EA'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-baoxue'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bingbao' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u51B0\u96F9'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bingbao'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-fengbao' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u98CE\u66B4'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-fengbao'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-xiaoyu' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u5C0F\u96E8'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-xiaoyu'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-zhenxue' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u9635\u96EA'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-zhenxue'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-zhongyu' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5929\u6C14_\u4E2D\u96E8'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-zhongyu'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-es' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'ES'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-es'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-flow-o-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6D41\u7A0B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-flow-o-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-activate-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6FC0\u6D3B-01'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-activate-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-flow-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6D41\u7A0B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-flow-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bulb-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6280\u672F\u652F\u6301'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bulb-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mi-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5FC5\u586B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mi-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-top-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8FD4\u56DE\u9876\u90E8'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-top-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-creditcard' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'credit-card'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-creditcard'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-align-center' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'align-center'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-align-center'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-align-justify' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'align-justify'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-align-justify'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-align-left' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'align-left'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-align-left'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-align-right' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'align-right'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-align-right'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-ju-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u62D2'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-ju-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-truck' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8D27\u5230\u4ED8\u6B3E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-truck'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-setting-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6D41\u7A0B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-setting-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-users-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u697C\u5B87\u56FE\u6807_\u7528\u6237\u7EC4'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-users-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bag-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5546\u54C1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bag-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cai-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u91C7\u8D2D'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cai-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-listcheck' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5B9A\u6807'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-listcheck'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-users' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7FA4'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-users'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-i-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u67E5\u770B\u8BE6\u60C5'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-i-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-building-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4F01\u4E1A\u4FE1\u606F'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-building-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u62A5\u4EF7\u7BA1\u7406'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rmb-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-reject' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5DF2\u9A73\u56DE'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-reject'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-9dot' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u83DC\u5355'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-9dot'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-loadingstate' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'loading'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-loadingstate'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-gateway' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7F51\u5173'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-gateway'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-ticket-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u53D1\u7968'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-ticket-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-userset' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7BA1\u7406\u4E2D\u5FC3'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-userset'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-puzzle-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7EC4\u4EF6'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-puzzle-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-box-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7269\u6599\u7BA1\u7406'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-box-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bulb' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u6FC0\u6D3B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bulb'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-exc-t' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u611F\u53F9\u53F7_icon'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-exc-t'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u62A5\u4EF7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-rmb-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-table-s-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u53D1\u7968'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-table-s-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-umbrella-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4F1E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-umbrella-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-dropbox' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'dropbox'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-dropbox'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-search-light' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u641C\u7D22-\u641C\u7D22'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-search-light'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-cart-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'shopping-cart-black-shape'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-cart-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-kero-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'kero'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-kero-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-uba-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'uba'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-uba-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tinperzc-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'tinperzc'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tinperzc-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tinperzch-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'tinperzch'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tinperzch-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-iuap-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'iuap'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-iuap-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-iuapdesign-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'iuapdesignz'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-iuapdesign-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-bee-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'bee'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-bee-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-neoui-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'neoui'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-neoui-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-sparrow-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'sparrow'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-sparrow-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tinpercn-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'tinpercn'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tinpercn-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-tinperen-col' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'tinperen'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-tinperen-col'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-up' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'angle-arrow-down'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-arrow-up'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mailsym' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'webmail'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mailsym'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-print' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u529E\u516C\u7528\u54C1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-print'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-ticket-3' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u62A5\u9500'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-ticket-3'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-loan' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u501F\u6B3E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-loan'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-ticket-2' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u51ED\u8BC1\u4E2D\u5FC3'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-ticket-2'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-offwork' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u8BF7\u5047'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-offwork'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-todolist' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5F85\u529E'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-todolist'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-personin' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5458\u5DE5\u5165\u804C'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-personin'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-ticket' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u7968\u52A1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-ticket'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-linechart' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5C0Ficon-\u56FE\u8868'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-linechart'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-4leaf' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5E94\u7528\u4E2D\u5FC3'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-4leaf'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-listset' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4FE1\u606F\u7EF4\u62A4'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-listset'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-qi-c-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u4F01\u4E1A\u8BA4\u8BC1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-qi-c-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-exc-c' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u53F9\u53F7'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-exc-c'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-code' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u96C6\u6210\u5F00\u53D1'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-code'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-plug-o' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u70ED\u62D4\u63D2'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-plug-o'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-search-s' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u641C\u7D22'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-search-s'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-treeadd' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'tree-new-sbling-node'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-treeadd'
																					)
																	),
																	_react2['default'].createElement(
																					'li',
																					null,
																					_react2['default'].createElement(_src2['default'], { type: 'uf-mi' }),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'name' },
																									'\u5FC5\u586B'
																					),
																					_react2['default'].createElement(
																									'div',
																									{ 'class': 'fontclass' },
																									'.uf-mi'
																					)
																	)
													)
									);
					};

					return Demo1;
	}(_react.Component);

	var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " Icon", "code": "/**\n * @title Icon\n * @description 在iuap字符库，`type`参数值均以-分隔。\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"tinper-icon-demo\">\n\t\t\t\t<ul className=\"icon_lists\">\n            \n\t                <li>\n\t                <Icon type=\"uf-wechat\"></Icon>\n\t                    <div class=\"name\">微信</div>\n\t                    <div class=\"fontclass\">.uf-wechat</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-c-o\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-arrow-up\"></Icon>\n\t                    <div class=\"name\">图表 折线图</div>\n\t                    <div class=\"fontclass\">.uf-histogram-arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-bold\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-bold</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-umbrella\"></Icon>\n\t                    <div class=\"name\">雨伞</div>\n\t                    <div class=\"fontclass\">.uf-umbrella</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qq\"></Icon>\n\t                    <div class=\"name\">QQ</div>\n\t                    <div class=\"fontclass\">.uf-qq</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square-3\"></Icon>\n\t                    <div class=\"name\">分类</div>\n\t                    <div class=\"fontclass\">.uf-4square-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-send\"></Icon>\n\t                    <div class=\"name\">发送</div>\n\t                    <div class=\"fontclass\">.uf-send</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-map\"></Icon>\n\t                    <div class=\"name\">地图</div>\n\t                    <div class=\"fontclass\">.uf-map</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9square-2\"></Icon>\n\t                    <div class=\"name\">标定</div>\n\t                    <div class=\"fontclass\">.uf-9square-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-navmenu\"></Icon>\n\t                    <div class=\"name\">汉堡包</div>\n\t                    <div class=\"fontclass\">.uf-navmenu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pc-2\"></Icon>\n\t                    <div class=\"name\">显示器</div>\n\t                    <div class=\"fontclass\">.uf-pc-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-light-2\"></Icon>\n\t                    <div class=\"name\">zoom</div>\n\t                    <div class=\"fontclass\">.uf-search-light-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-s-2\"></Icon>\n\t                    <div class=\"name\">任务</div>\n\t                    <div class=\"fontclass\">.uf-check-s-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-repeat\"></Icon>\n\t                    <div class=\"name\">撤销</div>\n\t                    <div class=\"fontclass\">.uf-repeat</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-security-2\"></Icon>\n\t                    <div class=\"name\">安全</div>\n\t                    <div class=\"fontclass\">.uf-security-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-lexi\"></Icon>\n\t                    <div class=\"name\">女</div>\n\t                    <div class=\"fontclass\">.uf-lexi</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil-s\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-del\"></Icon>\n\t                    <div class=\"name\">删除</div>\n\t                    <div class=\"fontclass\">.uf-del</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bi-o\"></Icon>\n\t                    <div class=\"name\">比价</div>\n\t                    <div class=\"fontclass\">.uf-bi-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil-c\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qrcode\"></Icon>\n\t                    <div class=\"name\">二维码</div>\n\t                    <div class=\"fontclass\">.uf-qrcode</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-c-o\"></Icon>\n\t                    <div class=\"name\">免费报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-c-o\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bell\"></Icon>\n\t                    <div class=\"name\">铃铛</div>\n\t                    <div class=\"fontclass\">.uf-bell</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-3\"></Icon>\n\t                    <div class=\"name\">机检通过</div>\n\t                    <div class=\"fontclass\">.uf-pass-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treearrow-down\"></Icon>\n\t                    <div class=\"name\">树形线</div>\n\t                    <div class=\"fontclass\">.uf-treearrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-training\"></Icon>\n\t                    <div class=\"name\">培训</div>\n\t                    <div class=\"fontclass\">.uf-training</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group-2\"></Icon>\n\t                    <div class=\"name\">组织架构</div>\n\t                    <div class=\"fontclass\">.uf-group-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zoom-in\"></Icon>\n\t                    <div class=\"name\">zoom-in</div>\n\t                    <div class=\"fontclass\">.uf-zoom-in</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-security-o\"></Icon>\n\t                    <div class=\"name\">安全</div>\n\t                    <div class=\"fontclass\">.uf-security-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-baojia-c\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-baojia-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rulerpen\"></Icon>\n\t                    <div class=\"name\">定制</div>\n\t                    <div class=\"fontclass\">.uf-rulerpen</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-erpsearch\"></Icon>\n\t                    <div class=\"name\">erp</div>\n\t                    <div class=\"fontclass\">.uf-erpsearch</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group-o\"></Icon>\n\t                    <div class=\"name\">组织机构</div>\n\t                    <div class=\"fontclass\">.uf-group-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-updown\"></Icon>\n\t                    <div class=\"name\">同步中2-同步</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-updown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-c-o\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-s\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pc\"></Icon>\n\t                    <div class=\"name\">工作台</div>\n\t                    <div class=\"fontclass\">.uf-pc</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rain\"></Icon>\n\t                    <div class=\"name\">空气_雨天</div>\n\t                    <div class=\"fontclass\">.uf-rain</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-nodata\"></Icon>\n\t                    <div class=\"name\">无数据</div>\n\t                    <div class=\"fontclass\">.uf-nodata</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-c\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bohui-s-o\"></Icon>\n\t                    <div class=\"name\">审批-驳回</div>\n\t                    <div class=\"fontclass\">.uf-bohui-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud\"></Icon>\n\t                    <div class=\"name\">天气</div>\n\t                    <div class=\"fontclass\">.uf-cloud</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bag-s\"></Icon>\n\t                    <div class=\"name\">商品</div>\n\t                    <div class=\"fontclass\">.uf-bag-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table-2\"></Icon>\n\t                    <div class=\"name\">made</div>\n\t                    <div class=\"fontclass\">.uf-table-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-anglearrowpointingtoright\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-anglearrowpointingtoright</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c-o\"></Icon>\n\t                    <div class=\"name\">叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group\"></Icon>\n\t                    <div class=\"name\">组织机构</div>\n\t                    <div class=\"fontclass\">.uf-group</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-personin-o\"></Icon>\n\t                    <div class=\"name\">认证激活</div>\n\t                    <div class=\"fontclass\">.uf-personin-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-calendar\"></Icon>\n\t                    <div class=\"name\">gm_日历</div>\n\t                    <div class=\"fontclass\">.uf-calendar</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-s-o\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sync-c-o\"></Icon>\n\t                    <div class=\"name\">同步</div>\n\t                    <div class=\"fontclass\">.uf-sync-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-grid\"></Icon>\n\t                    <div class=\"name\">grid</div>\n\t                    <div class=\"fontclass\">.uf-grid</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-anglepointingtoleft\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-anglepointingtoleft</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-activate-3\"></Icon>\n\t                    <div class=\"name\">激活</div>\n\t                    <div class=\"fontclass\">.uf-activate-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-caven\"></Icon>\n\t                    <div class=\"name\">男</div>\n\t                    <div class=\"fontclass\">.uf-caven</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-back\"></Icon>\n\t                    <div class=\"name\">返回</div>\n\t                    <div class=\"fontclass\">.uf-back</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-2\"></Icon>\n\t                    <div class=\"name\">授权</div>\n\t                    <div class=\"fontclass\">.uf-pass-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-s-o\"></Icon>\n\t                    <div class=\"name\">显示树</div>\n\t                    <div class=\"fontclass\">.uf-reduce-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-area\"></Icon>\n\t                    <div class=\"name\">图表图标-面积图</div>\n\t                    <div class=\"fontclass\">.uf-area</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flag\"></Icon>\n\t                    <div class=\"name\">旗帜</div>\n\t                    <div class=\"fontclass\">.uf-flag</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-o-2\"></Icon>\n\t                    <div class=\"name\">购买盒子</div>\n\t                    <div class=\"fontclass\">.uf-box-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-s-o-down\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-arrow-s-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-s-o-up\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-arrow-s-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-building\"></Icon>\n\t                    <div class=\"name\">企业信息</div>\n\t                    <div class=\"fontclass\">.uf-building</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tapp\"></Icon>\n\t                    <div class=\"name\">天气</div>\n\t                    <div class=\"fontclass\">.uf-tapp</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolder\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-treefolder</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-advice\"></Icon>\n\t                    <div class=\"name\">咨询</div>\n\t                    <div class=\"fontclass\">.uf-advice</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2collayout\"></Icon>\n\t                    <div class=\"name\">序列布局</div>\n\t                    <div class=\"fontclass\">.uf-2collayout</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-s\"></Icon>\n\t                    <div class=\"name\">审批</div>\n\t                    <div class=\"fontclass\">.uf-check-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sign\"></Icon>\n\t                    <div class=\"name\">采购合同</div>\n\t                    <div class=\"fontclass\">.uf-sign</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listsearch\"></Icon>\n\t                    <div class=\"name\">查看详情</div>\n\t                    <div class=\"fontclass\">.uf-listsearch</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gridcaretarrowup\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-gridcaretarrowup</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye-c-o\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-c-o\"></Icon>\n\t                    <div class=\"name\">许可</div>\n\t                    <div class=\"fontclass\">.uf-check-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-seal\"></Icon>\n\t                    <div class=\"name\">审批</div>\n\t                    <div class=\"fontclass\">.uf-seal</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-erpbox\"></Icon>\n\t                    <div class=\"name\">erp</div>\n\t                    <div class=\"fontclass\">.uf-erpbox</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rulerpen-o\"></Icon>\n\t                    <div class=\"name\">定制</div>\n\t                    <div class=\"fontclass\">.uf-rulerpen-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-role\"></Icon>\n\t                    <div class=\"name\">角色</div>\n\t                    <div class=\"fontclass\">.uf-role</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c-2\"></Icon>\n\t                    <div class=\"name\">提示叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pad\"></Icon>\n\t                    <div class=\"name\">pad</div>\n\t                    <div class=\"fontclass\">.uf-pad</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolder-closed\"></Icon>\n\t                    <div class=\"name\">tree-new-sbling-node</div>\n\t                    <div class=\"fontclass\">.uf-treefolder-closed</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-c-o\"></Icon>\n\t                    <div class=\"name\">减号</div>\n\t                    <div class=\"fontclass\">.uf-reduce-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-s-o\"></Icon>\n\t                    <div class=\"name\">通过</div>\n\t                    <div class=\"fontclass\">.uf-pass-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-setting\"></Icon>\n\t                    <div class=\"name\">维护</div>\n\t                    <div class=\"fontclass\">.uf-setting</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-s\"></Icon>\n\t                    <div class=\"name\">ZSX号</div>\n\t                    <div class=\"fontclass\">.uf-close-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-map-o\"></Icon>\n\t                    <div class=\"name\">地图</div>\n\t                    <div class=\"fontclass\">.uf-map-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-move\"></Icon>\n\t                    <div class=\"name\">移动</div>\n\t                    <div class=\"fontclass\">.uf-move</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-down\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-right\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-left\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-plus\"></Icon>\n\t                    <div class=\"name\">plus</div>\n\t                    <div class=\"fontclass\">.uf-plus</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-right\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-down\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-list-s-o\"></Icon>\n\t                    <div class=\"name\">暂无数据</div>\n\t                    <div class=\"fontclass\">.uf-list-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-down\"></Icon>\n\t                    <div class=\"name\">云下载</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-nodata-2\"></Icon>\n\t                    <div class=\"name\">无效数据</div>\n\t                    <div class=\"fontclass\">.uf-nodata-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-s\"></Icon>\n\t                    <div class=\"name\">文档文件-01</div>\n\t                    <div class=\"fontclass\">.uf-file-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-up\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-notification\"></Icon>\n\t                    <div class=\"name\">消息喇叭</div>\n\t                    <div class=\"fontclass\">.uf-notification</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-piechart\"></Icon>\n\t                    <div class=\"name\">图表_饼</div>\n\t                    <div class=\"fontclass\">.uf-piechart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-up\"></Icon>\n\t                    <div class=\"name\">云_上传</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close\"></Icon>\n\t                    <div class=\"name\">取消</div>\n\t                    <div class=\"fontclass\">.uf-close</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-correct\"></Icon>\n\t                    <div class=\"name\">对号</div>\n\t                    <div class=\"fontclass\">.uf-correct</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-s-o-2\"></Icon>\n\t                    <div class=\"name\">图表切换</div>\n\t                    <div class=\"fontclass\">.uf-histogram-s-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square-2\"></Icon>\n\t                    <div class=\"name\">应用中心</div>\n\t                    <div class=\"fontclass\">.uf-4square-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sunny\"></Icon>\n\t                    <div class=\"name\">天气 </div>\n\t                    <div class=\"fontclass\">.uf-sunny</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-link\"></Icon>\n\t                    <div class=\"name\">复制链接</div>\n\t                    <div class=\"fontclass\">.uf-link</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye-o\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qian\"></Icon>\n\t                    <div class=\"name\">签</div>\n\t                    <div class=\"fontclass\">.uf-qian</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-widgetab\"></Icon>\n\t                    <div class=\"name\">小部件授权</div>\n\t                    <div class=\"fontclass\">.uf-widgetab</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-link-off\"></Icon>\n\t                    <div class=\"name\">断开链接</div>\n\t                    <div class=\"fontclass\">.uf-link-off</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shang-s\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-shang-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-xia-s\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-xia-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-2\"></Icon>\n\t                    <div class=\"name\">盒子full</div>\n\t                    <div class=\"fontclass\">.uf-box-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-o\"></Icon>\n\t                    <div class=\"name\">授权</div>\n\t                    <div class=\"fontclass\">.uf-pass-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-down\"></Icon>\n\t                    <div class=\"name\">angle-arrow-down</div>\n\t                    <div class=\"fontclass\">.uf-arrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-right\"></Icon>\n\t                    <div class=\"name\">angle-arrow-pointing-to-right</div>\n\t                    <div class=\"fontclass\">.uf-arrow-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-left\"></Icon>\n\t                    <div class=\"name\">angle-pointing-to-left</div>\n\t                    <div class=\"fontclass\">.uf-arrow-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box\"></Icon>\n\t                    <div class=\"name\">archive-black-box</div>\n\t                    <div class=\"fontclass\">.uf-box</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-right\"></Icon>\n\t                    <div class=\"name\">arrowhead-pointing-to-the-right</div>\n\t                    <div class=\"fontclass\">.uf-triangle-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-s-o\"></Icon>\n\t                    <div class=\"name\">bar-graph-on-a-rectangle</div>\n\t                    <div class=\"fontclass\">.uf-histogram-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-book\"></Icon>\n\t                    <div class=\"name\">book</div>\n\t                    <div class=\"fontclass\">.uf-book</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bookmark-o\"></Icon>\n\t                    <div class=\"name\">bookmark-white</div>\n\t                    <div class=\"fontclass\">.uf-bookmark-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-leaf\"></Icon>\n\t                    <div class=\"name\">branch-with-leaves-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-leaf</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bullseye\"></Icon>\n\t                    <div class=\"name\">bullseye</div>\n\t                    <div class=\"fontclass\">.uf-bullseye</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gridcaretdown\"></Icon>\n\t                    <div class=\"name\">camera-retro</div>\n\t                    <div class=\"fontclass\">.uf-gridcaretdown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-up\"></Icon>\n\t                    <div class=\"name\">caret-arrow-up</div>\n\t                    <div class=\"fontclass\">.uf-triangle-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-down\"></Icon>\n\t                    <div class=\"name\">caret-down</div>\n\t                    <div class=\"fontclass\">.uf-triangle-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-down\"></Icon>\n\t                    <div class=\"name\">cloud-storage-download</div>\n\t                    <div class=\"fontclass\">.uf-cloud-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-up\"></Icon>\n\t                    <div class=\"name\">cloud-storage-uploading-option</div>\n\t                    <div class=\"fontclass\">.uf-cloud-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bubble\"></Icon>\n\t                    <div class=\"name\">comment-black-oval-bubble-shape</div>\n\t                    <div class=\"fontclass\">.uf-bubble</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bubble-o\"></Icon>\n\t                    <div class=\"name\">comment-white-oval-bubble</div>\n\t                    <div class=\"fontclass\">.uf-bubble-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-copy\"></Icon>\n\t                    <div class=\"name\">copy-document</div>\n\t                    <div class=\"fontclass\">.uf-copy</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-correct-2\"></Icon>\n\t                    <div class=\"name\">correct-symbol</div>\n\t                    <div class=\"fontclass\">.uf-correct-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-left\"></Icon>\n\t                    <div class=\"name\">double-left-chevron</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-down-2\"></Icon>\n\t                    <div class=\"name\">down-arrow</div>\n\t                    <div class=\"fontclass\">.uf-arrow-down-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-download\"></Icon>\n\t                    <div class=\"name\">download-to-storage-drive</div>\n\t                    <div class=\"fontclass\">.uf-download</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-earth\"></Icon>\n\t                    <div class=\"name\">earth-globe</div>\n\t                    <div class=\"fontclass\">.uf-earth</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mail-o\"></Icon>\n\t                    <div class=\"name\">envelope-of-white-paper</div>\n\t                    <div class=\"fontclass\">.uf-mail-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mail\"></Icon>\n\t                    <div class=\"name\">envelope</div>\n\t                    <div class=\"fontclass\">.uf-mail</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc\"></Icon>\n\t                    <div class=\"name\">exclamation</div>\n\t                    <div class=\"fontclass\">.uf-exc</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-externallink\"></Icon>\n\t                    <div class=\"name\">external-link-symbol</div>\n\t                    <div class=\"fontclass\">.uf-externallink</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-video\"></Icon>\n\t                    <div class=\"name\">facetime-button</div>\n\t                    <div class=\"fontclass\">.uf-video</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-films\"></Icon>\n\t                    <div class=\"name\">film-strip-with-two-photograms</div>\n\t                    <div class=\"fontclass\">.uf-films</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folder\"></Icon>\n\t                    <div class=\"name\">folder-closed-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-folder</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folder-o\"></Icon>\n\t                    <div class=\"name\">folder-white-shape</div>\n\t                    <div class=\"fontclass\">.uf-folder-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square\"></Icon>\n\t                    <div class=\"name\">four-black-squares</div>\n\t                    <div class=\"fontclass\">.uf-4square</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gift\"></Icon>\n\t                    <div class=\"name\">gift-box</div>\n\t                    <div class=\"fontclass\">.uf-gift</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-github-c\"></Icon>\n\t                    <div class=\"name\">github-logo</div>\n\t                    <div class=\"fontclass\">.uf-github-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-github-s\"></Icon>\n\t                    <div class=\"name\">github-sign</div>\n\t                    <div class=\"fontclass\">.uf-github-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-heart-o\"></Icon>\n\t                    <div class=\"name\">heart-shape-outline</div>\n\t                    <div class=\"fontclass\">.uf-heart-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-heart\"></Icon>\n\t                    <div class=\"name\">heart-shape-silhouette</div>\n\t                    <div class=\"fontclass\">.uf-heart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-home\"></Icon>\n\t                    <div class=\"name\">home</div>\n\t                    <div class=\"fontclass\">.uf-home</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i-c-2\"></Icon>\n\t                    <div class=\"name\">information-button</div>\n\t                    <div class=\"fontclass\">.uf-i-c-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i\"></Icon>\n\t                    <div class=\"name\">information-symbol</div>\n\t                    <div class=\"fontclass\">.uf-i</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-left\"></Icon>\n\t                    <div class=\"name\">left-arrow</div>\n\t                    <div class=\"fontclass\">.uf-triangle-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-symlist\"></Icon>\n\t                    <div class=\"name\">listing-option</div>\n\t                    <div class=\"fontclass\">.uf-symlist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-left-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-to-left</div>\n\t                    <div class=\"fontclass\">.uf-arrow-left-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-right-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-to-the-right</div>\n\t                    <div class=\"fontclass\">.uf-arrow-right-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-up-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-up</div>\n\t                    <div class=\"fontclass\">.uf-arrow-up-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-c\"></Icon>\n\t                    <div class=\"name\">minus-sign-inside-a-black-circle</div>\n\t                    <div class=\"fontclass\">.uf-reduce-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-s\"></Icon>\n\t                    <div class=\"name\">minus-sign-inside-a-black-rounded-square-shape</div>\n\t                    <div class=\"fontclass\">.uf-reduce-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-minus\"></Icon>\n\t                    <div class=\"name\">minus-symbol</div>\n\t                    <div class=\"fontclass\">.uf-minus</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mobile\"></Icon>\n\t                    <div class=\"name\">mobile-phone</div>\n\t                    <div class=\"fontclass\">.uf-mobile</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bell-o\"></Icon>\n\t                    <div class=\"name\">musical-bell-outline</div>\n\t                    <div class=\"fontclass\">.uf-bell-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9square\"></Icon>\n\t                    <div class=\"name\">nine-black-tiles</div>\n\t                    <div class=\"fontclass\">.uf-9square</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-numlist\"></Icon>\n\t                    <div class=\"name\">numbered-list</div>\n\t                    <div class=\"fontclass\">.uf-numlist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folderopen-o\"></Icon>\n\t                    <div class=\"name\">open-folder-outline</div>\n\t                    <div class=\"fontclass\">.uf-folderopen-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolderopen\"></Icon>\n\t                    <div class=\"name\">open-folder</div>\n\t                    <div class=\"fontclass\">.uf-treefolderopen</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mac\"></Icon>\n\t                    <div class=\"name\">open-laptop-computer</div>\n\t                    <div class=\"fontclass\">.uf-mac</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-camera\"></Icon>\n\t                    <div class=\"name\">photo-camera</div>\n\t                    <div class=\"fontclass\">.uf-camera</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-picture\"></Icon>\n\t                    <div class=\"name\">picture</div>\n\t                    <div class=\"fontclass\">.uf-picture</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-play\"></Icon>\n\t                    <div class=\"name\">play-sign</div>\n\t                    <div class=\"fontclass\">.uf-play</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-play-o\"></Icon>\n\t                    <div class=\"name\">play-video-button</div>\n\t                    <div class=\"fontclass\">.uf-play-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qm-c\"></Icon>\n\t                    <div class=\"name\">question-mark-on-a-circular-black-background</div>\n\t                    <div class=\"fontclass\">.uf-qm-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qm\"></Icon>\n\t                    <div class=\"name\">question-sign</div>\n\t                    <div class=\"fontclass\">.uf-qm</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-navmenu-light\"></Icon>\n\t                    <div class=\"name\">reorder-option</div>\n\t                    <div class=\"fontclass\">.uf-navmenu-light</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-settings\"></Icon>\n\t                    <div class=\"name\">settings</div>\n\t                    <div class=\"fontclass\">.uf-settings</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cart\"></Icon>\n\t                    <div class=\"name\">shopping-cart-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-cart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram\"></Icon>\n\t                    <div class=\"name\">signal-bars</div>\n\t                    <div class=\"fontclass\">.uf-histogram</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-finetune\"></Icon>\n\t                    <div class=\"name\">sort-arrows-couple-pointing-up-and-down</div>\n\t                    <div class=\"fontclass\">.uf-finetune</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sortup\"></Icon>\n\t                    <div class=\"name\">sort-by-attributes-interface-button-option</div>\n\t                    <div class=\"fontclass\">.uf-sortup</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sortdown\"></Icon>\n\t                    <div class=\"name\">sort-by-attributes</div>\n\t                    <div class=\"fontclass\">.uf-sortdown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sort19\"></Icon>\n\t                    <div class=\"name\">sort-by-numeric-order</div>\n\t                    <div class=\"fontclass\">.uf-sort19</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sort91\"></Icon>\n\t                    <div class=\"name\">sort-by-order</div>\n\t                    <div class=\"fontclass\">.uf-sort91</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-za\"></Icon>\n\t                    <div class=\"name\">sort-reverse-alphabetical-order</div>\n\t                    <div class=\"fontclass\">.uf-za</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star-o\"></Icon>\n\t                    <div class=\"name\">star-1</div>\n\t                    <div class=\"fontclass\">.uf-star-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star-2\"></Icon>\n\t                    <div class=\"name\">star-half-empty</div>\n\t                    <div class=\"fontclass\">.uf-star-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star\"></Icon>\n\t                    <div class=\"name\">star</div>\n\t                    <div class=\"fontclass\">.uf-star</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-luggage\"></Icon>\n\t                    <div class=\"name\">suitcase-with-white-details</div>\n\t                    <div class=\"fontclass\">.uf-luggage</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table\"></Icon>\n\t                    <div class=\"name\">table-grid</div>\n\t                    <div class=\"fontclass\">.uf-table</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tel\"></Icon>\n\t                    <div class=\"name\">telephone-handle-silhouette</div>\n\t                    <div class=\"fontclass\">.uf-tel</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tel-s\"></Icon>\n\t                    <div class=\"name\">telephone-symbol-button</div>\n\t                    <div class=\"fontclass\">.uf-tel-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-terminal\"></Icon>\n\t                    <div class=\"name\">terminal</div>\n\t                    <div class=\"fontclass\">.uf-terminal</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file\"></Icon>\n\t                    <div class=\"name\">text-file-1</div>\n\t                    <div class=\"fontclass\">.uf-file</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-o\"></Icon>\n\t                    <div class=\"name\">text-file</div>\n\t                    <div class=\"fontclass\">.uf-file-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-h\"></Icon>\n\t                    <div class=\"name\">three-small-square-shapes</div>\n\t                    <div class=\"fontclass\">.uf-3dot-h</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-time-c-o\"></Icon>\n\t                    <div class=\"name\">time</div>\n\t                    <div class=\"fontclass\">.uf-time-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-upload\"></Icon>\n\t                    <div class=\"name\">upload</div>\n\t                    <div class=\"fontclass\">.uf-upload</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-v\"></Icon>\n\t                    <div class=\"name\">vertical-ellipsis</div>\n\t                    <div class=\"fontclass\">.uf-3dot-v</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb\"></Icon>\n\t                    <div class=\"name\">yen-symbol</div>\n\t                    <div class=\"fontclass\">.uf-rmb</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-up\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reject-2\"></Icon>\n\t                    <div class=\"name\">驳回</div>\n\t                    <div class=\"fontclass\">.uf-reject-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-barcode\"></Icon>\n\t                    <div class=\"name\">barcode-1</div>\n\t                    <div class=\"fontclass\">.uf-barcode</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zoom-out\"></Icon>\n\t                    <div class=\"name\">zoom-out</div>\n\t                    <div class=\"fontclass\">.uf-zoom-out</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-t-o\"></Icon>\n\t                    <div class=\"name\">三角叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-t-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass\"></Icon>\n\t                    <div class=\"name\">通过</div>\n\t                    <div class=\"fontclass\">.uf-pass</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow\"></Icon>\n\t                    <div class=\"name\">关系网络</div>\n\t                    <div class=\"fontclass\">.uf-flow</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-c\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-right-2\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-right-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shelf-on\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-shelf-on</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shelf-off\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-shelf-off</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-o-2\"></Icon>\n\t                    <div class=\"name\">文件</div>\n\t                    <div class=\"fontclass\">.uf-file-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-truck-o\"></Icon>\n\t                    <div class=\"name\">到货确认</div>\n\t                    <div class=\"fontclass\">.uf-truck-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-super\"></Icon>\n\t                    <div class=\"name\">功能强大</div>\n\t                    <div class=\"fontclass\">.uf-super</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-equipment\"></Icon>\n\t                    <div class=\"name\">设备</div>\n\t                    <div class=\"fontclass\">.uf-equipment</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-left-2\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-left-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-files-o\"></Icon>\n\t                    <div class=\"name\">资源文件</div>\n\t                    <div class=\"fontclass\">.uf-files-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o\"></Icon>\n\t                    <div class=\"name\">云</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s-o-2\"></Icon>\n\t                    <div class=\"name\">对账</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-c-o\"></Icon>\n\t                    <div class=\"name\">管理中心</div>\n\t                    <div class=\"fontclass\">.uf-3dot-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-dafeng\"></Icon>\n\t                    <div class=\"name\">天气_大风</div>\n\t                    <div class=\"fontclass\">.uf-dafeng</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-baoxue\"></Icon>\n\t                    <div class=\"name\">天气_暴雪</div>\n\t                    <div class=\"fontclass\">.uf-baoxue</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bingbao\"></Icon>\n\t                    <div class=\"name\">天气_冰雹</div>\n\t                    <div class=\"fontclass\">.uf-bingbao</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-fengbao\"></Icon>\n\t                    <div class=\"name\">天气_风暴</div>\n\t                    <div class=\"fontclass\">.uf-fengbao</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-xiaoyu\"></Icon>\n\t                    <div class=\"name\">天气_小雨</div>\n\t                    <div class=\"fontclass\">.uf-xiaoyu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zhenxue\"></Icon>\n\t                    <div class=\"name\">天气_阵雪</div>\n\t                    <div class=\"fontclass\">.uf-zhenxue</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zhongyu\"></Icon>\n\t                    <div class=\"name\">天气_中雨</div>\n\t                    <div class=\"fontclass\">.uf-zhongyu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-es\"></Icon>\n\t                    <div class=\"name\">ES</div>\n\t                    <div class=\"fontclass\">.uf-es</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow-o-2\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-flow-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-activate-2\"></Icon>\n\t                    <div class=\"name\">激活-01</div>\n\t                    <div class=\"fontclass\">.uf-activate-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow-o\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-flow-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bulb-2\"></Icon>\n\t                    <div class=\"name\">技术支持</div>\n\t                    <div class=\"fontclass\">.uf-bulb-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mi-c\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-mi-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-top-up\"></Icon>\n\t                    <div class=\"name\">返回顶部</div>\n\t                    <div class=\"fontclass\">.uf-top-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-creditcard\"></Icon>\n\t                    <div class=\"name\">credit-card</div>\n\t                    <div class=\"fontclass\">.uf-creditcard</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-center\"></Icon>\n\t                    <div class=\"name\">align-center</div>\n\t                    <div class=\"fontclass\">.uf-align-center</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-justify\"></Icon>\n\t                    <div class=\"name\">align-justify</div>\n\t                    <div class=\"fontclass\">.uf-align-justify</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-left\"></Icon>\n\t                    <div class=\"name\">align-left</div>\n\t                    <div class=\"fontclass\">.uf-align-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-right\"></Icon>\n\t                    <div class=\"name\">align-right</div>\n\t                    <div class=\"fontclass\">.uf-align-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ju-c-o\"></Icon>\n\t                    <div class=\"name\">拒</div>\n\t                    <div class=\"fontclass\">.uf-ju-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-truck\"></Icon>\n\t                    <div class=\"name\">货到付款</div>\n\t                    <div class=\"fontclass\">.uf-truck</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-setting-c-o\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-setting-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-users-o\"></Icon>\n\t                    <div class=\"name\">楼宇图标_用户组</div>\n\t                    <div class=\"fontclass\">.uf-users-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bag-s-o\"></Icon>\n\t                    <div class=\"name\">商品</div>\n\t                    <div class=\"fontclass\">.uf-bag-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cai-s\"></Icon>\n\t                    <div class=\"name\">采购</div>\n\t                    <div class=\"fontclass\">.uf-cai-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listcheck\"></Icon>\n\t                    <div class=\"name\">定标</div>\n\t                    <div class=\"fontclass\">.uf-listcheck</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-users\"></Icon>\n\t                    <div class=\"name\">群</div>\n\t                    <div class=\"fontclass\">.uf-users</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i-c\"></Icon>\n\t                    <div class=\"name\">查看详情</div>\n\t                    <div class=\"fontclass\">.uf-i-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-building-o\"></Icon>\n\t                    <div class=\"name\">企业信息</div>\n\t                    <div class=\"fontclass\">.uf-building-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s-o\"></Icon>\n\t                    <div class=\"name\">报价管理</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reject\"></Icon>\n\t                    <div class=\"name\">已驳回</div>\n\t                    <div class=\"fontclass\">.uf-reject</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9dot\"></Icon>\n\t                    <div class=\"name\">菜单</div>\n\t                    <div class=\"fontclass\">.uf-9dot</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-loadingstate\"></Icon>\n\t                    <div class=\"name\">loading</div>\n\t                    <div class=\"fontclass\">.uf-loadingstate</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gateway\"></Icon>\n\t                    <div class=\"name\">网关</div>\n\t                    <div class=\"fontclass\">.uf-gateway</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-s-o\"></Icon>\n\t                    <div class=\"name\">发票</div>\n\t                    <div class=\"fontclass\">.uf-ticket-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-userset\"></Icon>\n\t                    <div class=\"name\">管理中心</div>\n\t                    <div class=\"fontclass\">.uf-userset</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-puzzle-o\"></Icon>\n\t                    <div class=\"name\">组件</div>\n\t                    <div class=\"fontclass\">.uf-puzzle-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-o\"></Icon>\n\t                    <div class=\"name\">物料管理</div>\n\t                    <div class=\"fontclass\">.uf-box-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bulb\"></Icon>\n\t                    <div class=\"name\">激活</div>\n\t                    <div class=\"fontclass\">.uf-bulb</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-t\"></Icon>\n\t                    <div class=\"name\">感叹号_icon</div>\n\t                    <div class=\"fontclass\">.uf-exc-t</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-c\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table-s-o\"></Icon>\n\t                    <div class=\"name\">发票</div>\n\t                    <div class=\"fontclass\">.uf-table-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-umbrella-o\"></Icon>\n\t                    <div class=\"name\">伞</div>\n\t                    <div class=\"fontclass\">.uf-umbrella-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-dropbox\"></Icon>\n\t                    <div class=\"name\">dropbox</div>\n\t                    <div class=\"fontclass\">.uf-dropbox</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-light\"></Icon>\n\t                    <div class=\"name\">搜索-搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-light</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cart-o\"></Icon>\n\t                    <div class=\"name\">shopping-cart-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-cart-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-kero-col\"></Icon>\n\t                    <div class=\"name\">kero</div>\n\t                    <div class=\"fontclass\">.uf-kero-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-uba-col\"></Icon>\n\t                    <div class=\"name\">uba</div>\n\t                    <div class=\"fontclass\">.uf-uba-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperzc-col\"></Icon>\n\t                    <div class=\"name\">tinperzc</div>\n\t                    <div class=\"fontclass\">.uf-tinperzc-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperzch-col\"></Icon>\n\t                    <div class=\"name\">tinperzch</div>\n\t                    <div class=\"fontclass\">.uf-tinperzch-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-iuap-col\"></Icon>\n\t                    <div class=\"name\">iuap</div>\n\t                    <div class=\"fontclass\">.uf-iuap-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-iuapdesign-col\"></Icon>\n\t                    <div class=\"name\">iuapdesignz</div>\n\t                    <div class=\"fontclass\">.uf-iuapdesign-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bee-col\"></Icon>\n\t                    <div class=\"name\">bee</div>\n\t                    <div class=\"fontclass\">.uf-bee-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-neoui-col\"></Icon>\n\t                    <div class=\"name\">neoui</div>\n\t                    <div class=\"fontclass\">.uf-neoui-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sparrow-col\"></Icon>\n\t                    <div class=\"name\">sparrow</div>\n\t                    <div class=\"fontclass\">.uf-sparrow-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinpercn-col\"></Icon>\n\t                    <div class=\"name\">tinpercn</div>\n\t                    <div class=\"fontclass\">.uf-tinpercn-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperen-col\"></Icon>\n\t                    <div class=\"name\">tinperen</div>\n\t                    <div class=\"fontclass\">.uf-tinperen-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-up\"></Icon>\n\t                    <div class=\"name\">angle-arrow-down</div>\n\t                    <div class=\"fontclass\">.uf-arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mailsym\"></Icon>\n\t                    <div class=\"name\">webmail</div>\n\t                    <div class=\"fontclass\">.uf-mailsym</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-print\"></Icon>\n\t                    <div class=\"name\">办公用品</div>\n\t                    <div class=\"fontclass\">.uf-print</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-3\"></Icon>\n\t                    <div class=\"name\">报销</div>\n\t                    <div class=\"fontclass\">.uf-ticket-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-loan\"></Icon>\n\t                    <div class=\"name\">借款</div>\n\t                    <div class=\"fontclass\">.uf-loan</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-2\"></Icon>\n\t                    <div class=\"name\">凭证中心</div>\n\t                    <div class=\"fontclass\">.uf-ticket-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-offwork\"></Icon>\n\t                    <div class=\"name\">请假</div>\n\t                    <div class=\"fontclass\">.uf-offwork</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-todolist\"></Icon>\n\t                    <div class=\"name\">待办</div>\n\t                    <div class=\"fontclass\">.uf-todolist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-personin\"></Icon>\n\t                    <div class=\"name\">员工入职</div>\n\t                    <div class=\"fontclass\">.uf-personin</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket\"></Icon>\n\t                    <div class=\"name\">票务</div>\n\t                    <div class=\"fontclass\">.uf-ticket</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-linechart\"></Icon>\n\t                    <div class=\"name\">小icon-图表</div>\n\t                    <div class=\"fontclass\">.uf-linechart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4leaf\"></Icon>\n\t                    <div class=\"name\">应用中心</div>\n\t                    <div class=\"fontclass\">.uf-4leaf</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listset\"></Icon>\n\t                    <div class=\"name\">信息维护</div>\n\t                    <div class=\"fontclass\">.uf-listset</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qi-c-o\"></Icon>\n\t                    <div class=\"name\">企业认证</div>\n\t                    <div class=\"fontclass\">.uf-qi-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c\"></Icon>\n\t                    <div class=\"name\">叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-code\"></Icon>\n\t                    <div class=\"name\">集成开发</div>\n\t                    <div class=\"fontclass\">.uf-code</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-plug-o\"></Icon>\n\t                    <div class=\"name\">热拔插</div>\n\t                    <div class=\"fontclass\">.uf-plug-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-s\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treeadd\"></Icon>\n\t                    <div class=\"name\">tree-new-sbling-node</div>\n\t                    <div class=\"fontclass\">.uf-treeadd</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mi\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-mi</div>\n\t                </li>\n\t       \t\t</ul>\n\t\t\t</div>\n\t\t)\n\t}\n}", "desc": " 在iuap字符库，`type`参数值均以-分隔。" }];

	var Demo = function (_Component2) {
					_inherits(Demo, _Component2);

					function Demo(props) {
									_classCallCheck(this, Demo);

									var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

									_this2.state = {
													open: false
									};
									_this2.handleClick = _this2.handleClick.bind(_this2);
									return _this2;
					}

					Demo.prototype.handleClick = function handleClick() {
									this.setState({ open: !this.state.open });
					};

					Demo.prototype.render = function render() {
									var _props = this.props,
									    title = _props.title,
									    example = _props.example,
									    code = _props.code,
									    desc = _props.desc;

									var caret = this.state.open ? CARETUP : CARET;
									var text = this.state.open ? "隐藏代码" : "查看代码";

									var footer = _react2['default'].createElement(
													_beeButton2['default'],
													{ shape: 'block', onClick: this.handleClick },
													caret,
													text
									);
									return _react2['default'].createElement(
													_beeLayout.Col,
													{ md: 12 },
													_react2['default'].createElement(
																	'h3',
																	null,
																	title
													),
													_react2['default'].createElement(
																	'p',
																	null,
																	desc
													),
													_react2['default'].createElement(
																	_beePanel.Panel,
																	{ collapsible: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0, borderColor: "transparent" } },
																	_react2['default'].createElement(
																					'pre',
																					null,
																					_react2['default'].createElement(
																									'code',
																									{ className: 'hljs javascript' },
																									code
																					)
																	)
													)
									);
					};

					return Demo;
	}(_react.Component);

	var DemoGroup = function (_Component3) {
					_inherits(DemoGroup, _Component3);

					function DemoGroup(props) {
									_classCallCheck(this, DemoGroup);

									return _possibleConstructorReturn(this, _Component3.call(this, props));
					}

					DemoGroup.prototype.render = function render() {
									return _react2['default'].createElement(
													_beeLayout.Row,
													null,
													DemoArray.map(function (child, index) {

																	return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
													})
									);
					};

					return DemoGroup;
	}(_react.Component);

		_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;

	var _Col2 = __webpack_require__(2);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Row2 = __webpack_require__(5);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),

	  /**
	   * xs显示列数
	   */
	  xs: _react.PropTypes.number,
	  /**
	   * sm显示列数
	   */
	  sm: _react.PropTypes.number,
	  /**
	   * md显示列数
	   */
	  md: _react.PropTypes.number,
	  /**
	   * lg显示列数
	   */
	  lg: _react.PropTypes.number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _react.PropTypes.number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _react.PropTypes.number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _react.PropTypes.number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _react.PropTypes.number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _react.PropTypes.number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _react.PropTypes.number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _react.PropTypes.number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _react.PropTypes.number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _react.PropTypes.number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _react.PropTypes.number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _react.PropTypes.number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _react.PropTypes.number
	};

	var defaultProps = {
	  componentClass: 'div'
	};

	var clsPrefix = 'u-col';

	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

	var Col = function (_Component) {
	  _inherits(Col, _Component);

	  function Col() {
	    _classCallCheck(this, Col);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Col.prototype.render = function render() {
	    var _props = this.props;
	    var Component = _props.componentClass;
	    var classes = _props.classes;

	    var others = _objectWithoutProperties(_props, ['componentClass', 'classes']);

	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];

	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }

	        delete others[propName];
	      }

	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });

	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, classes)
	      }, others),
	      this.props.children
	    );
	  };

	  return Col;
	}(_react.Component);

	Col.propTypes = propTypes;
	Col.defaultProps = defaultProps;

	exports["default"] = Col;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div'
	};

	var clsPrefix = 'u-row';

	var Row = function (_Component) {
	  _inherits(Row, _Component);

	  function Row() {
	    _classCallCheck(this, Row);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Row.prototype.render = function render() {
	    var _props = this.props;
	    var Component = _props.componentClass;
	    var classes = _props.classes;

	    var others = _objectWithoutProperties(_props, ['componentClass', 'classes']);

	    var bsclass = '' + clsPrefix;

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, classes)
	      }),
	      this.props.children
	    );
	  };

	  return Row;
	}(_react.Component);

	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;

	exports["default"] = Row;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _react.PropTypes.bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div',
	  fluid: false
	};

	var clsPrefix = 'u-container';

	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);

	  function Con() {
	    _classCallCheck(this, Con);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Con.prototype.render = function render() {
	    var _tbclass;

	    var _props = this.props;
	    var fluid = _props.fluid;
	    var Component = _props.componentClass;
	    var classes = _props.classes;

	    var others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'classes']);

	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, classes)
	      }),
	      this.props.children
	    );
	  };

	  return Con;
	}(_react2["default"].Component);

	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;

	exports["default"] = Con;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;

	var _Panel2 = __webpack_require__(8);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelGroup2 = __webpack_require__(59);

	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeTransition = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否添加折叠
	  collapsible: _react2["default"].PropTypes.bool,
	  onSelect: _react2["default"].PropTypes.func,
	  //头部组件
	  header: _react2["default"].PropTypes.node,
	  headerStyle: _react2["default"].PropTypes.object,
	  id: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
	  headerContent: _react2["default"].PropTypes.bool,
	  //footer组件
	  footer: _react2["default"].PropTypes.node,
	  footerStyle: _react2["default"].PropTypes.object,
	  //默认是否打开
	  defaultExpanded: _react2["default"].PropTypes.bool,
	  //是否打开
	  expanded: _react2["default"].PropTypes.bool,
	  //每个panel的标记
	  eventKey: _react2["default"].PropTypes.any,
	  headerRole: _react2["default"].PropTypes.string,
	  panelRole: _react2["default"].PropTypes.string,
	  //颜色
	  colors: _react2["default"].PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),

	  // From Collapse.的扩展动画
	  onEnter: _react2["default"].PropTypes.func,
	  onEntering: _react2["default"].PropTypes.func,
	  onEntered: _react2["default"].PropTypes.func,
	  onExit: _react2["default"].PropTypes.func,
	  onExiting: _react2["default"].PropTypes.func,
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel(props, context) {
	    _classCallCheck(this, Panel);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);

	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }

	  //头部点击事件


	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };

	  //渲染panelheader


	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';

	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }

	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };

	  //如果使用链接，渲染为a标签


	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        onClick: this.handleClickTitle,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };

	  //如果有折叠动画，渲染折叠动画


	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix)
	      )
	    );
	  };

	  //渲染panelbody


	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix) {
	    var children = [];
	    var bodyChildren = [];

	    var bodyClassName = clsPrefix + '-body';

	    //添加到body的children中
	    function maybeAddBody() {
	      if (!bodyChildren.length) {
	        return;
	      }

	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren
	      ));

	      bodyChildren = [];
	    }

	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody();

	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));

	        return;
	      }

	      bodyChildren.push(child);
	    });

	    maybeAddBody();

	    return children;
	  };

	  Panel.prototype.render = function render() {
	    var _props = this.props;
	    var collapsible = _props.collapsible;
	    var header = _props.header;
	    var id = _props.id;
	    var footer = _props.footer;
	    var propsExpanded = _props.expanded;
	    var footerStyle = _props.footerStyle;
	    var headerStyle = _props.headerStyle;
	    var headerRole = _props.headerRole;
	    var panelRole = _props.panelRole;
	    var className = _props.className;
	    var colors = _props.colors;
	    var children = _props.children;
	    var onEnter = _props.onEnter;
	    var onEntering = _props.onEntering;
	    var onEntered = _props.onEntered;
	    var clsPrefix = _props.clsPrefix;
	    var onExit = _props.onExit;
	    var onExiting = _props.onExiting;
	    var onExited = _props.onExited;
	    var defaultExpanded = _props.defaultExpanded;
	    var eventKey = _props.eventKey;
	    var onSelect = _props.onSelect;

	    var props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);

	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;

	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-heading', style: headerStyle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };

	  return Panel;
	}(_react2["default"].Component);

	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;

	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;

	var _Transition2 = __webpack_require__(10);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _Collapse2 = __webpack_require__(15);

	var _Collapse3 = _interopRequireDefault(_Collapse2);

	var _Fade2 = __webpack_require__(58);

	var _Fade3 = _interopRequireDefault(_Fade2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(12);

	var _properties2 = _interopRequireDefault(_properties);

	var _on = __webpack_require__(14);

	var _on2 = _interopRequireDefault(_on);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var transitionEndEvent = _properties2["default"].end;

	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _react.PropTypes.bool,

	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _react.PropTypes.bool,

	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _react.PropTypes.bool,

	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _react.PropTypes.number,

	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _react.PropTypes.string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _react.PropTypes.string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _react.PropTypes.string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _react.PropTypes.string,

	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _react.PropTypes.func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _react.PropTypes.func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _react.PropTypes.func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _react.PropTypes.func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _react.PropTypes.func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _react.PropTypes.func
	};

	function noop() {}

	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	/**
	 * 动画组件
	 */

	var Transition = function (_Component) {
	  _inherits(Transition, _Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };

	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };

	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;

	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }

	      return;
	    }

	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;

	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };

	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    // 这里接收新props
	    props.onEnter(node);

	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);

	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    props.onExit(node);

	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);

	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };

	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;

	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);

	    if (node) {
	      (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };

	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;

	    var childProps = _objectWithoutProperties(_props, ['children', 'className']);

	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });

	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }

	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };

	  return Transition;
	}(_react.Component);

	Transition.propTypes = propTypes;

	Transition.defaultProps = defaultProps;

	exports["default"] = Transition;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var style = document.createElement('div').style;

	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return 'moz' + e;
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };

	  var vendors = Object.keys(vendorMap);

	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';

	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];

	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }

	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

	  if (!animationEnd && 'animationName' in style) transitionEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}

	exports.default = on;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(16);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _capitalize = __webpack_require__(24);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};

	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}

	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];

	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}

	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _react2["default"].PropTypes.func,

	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(['height', 'width']), _react2["default"].PropTypes.func]),

	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _react2["default"].PropTypes.func,

	  /**
	   * ARIA role of collapsible element
	   */
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,

	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};

	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);

	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }

	  /* -- Expanding -- */


	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };

	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };

	  /* -- Collapsing -- */


	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };

	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };

	  // for testing


	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };

	  Collapse.prototype.render = function render() {
	    var _props = this.props;
	    var onEnter = _props.onEnter;
	    var onEntering = _props.onEntering;
	    var onEntered = _props.onEntered;
	    var onExit = _props.onExit;
	    var onExiting = _props.onExiting;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);

	    delete props.dimension;
	    delete props.getDimensionValue;

	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);

	    var classes = {
	      width: this._dimension() === 'width'
	    };

	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };

	  return Collapse;
	}(_react2["default"].Component);

	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;

	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	var _hyphenateStyle = __webpack_require__(19);

	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

	var _getComputedStyle2 = __webpack_require__(21);

	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

	var _removeStyle = __webpack_require__(22);

	var _removeStyle2 = _interopRequireDefault(_removeStyle);

	var _properties = __webpack_require__(12);

	var _isTransform = __webpack_require__(23);

	var _isTransform2 = _interopRequireDefault(_isTransform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;

	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }

	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });

	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }

	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;

	var _camelize = __webpack_require__(18);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;

	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;

	var _hyphenate = __webpack_require__(20);

	var _hyphenate2 = _interopRequireDefault(_hyphenate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */

	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;

	var rUpper = /([A-Z])/g;

	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _camelizeStyle2.default)(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;

	var _all2 = __webpack_require__(26);

	var _all3 = _interopRequireDefault(_all2);

	var _componentOrElement2 = __webpack_require__(28);

	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);

	var _deprecated2 = __webpack_require__(29);

	var _deprecated3 = _interopRequireDefault(_deprecated2);

	var _elementType2 = __webpack_require__(32);

	var _elementType3 = _interopRequireDefault(_elementType2);

	var _isRequiredForA11y2 = __webpack_require__(33);

	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);

	var _splitComponent2 = __webpack_require__(34);

	var _splitComponent3 = _interopRequireDefault(_splitComponent2);

	var _createChainedFunction2 = __webpack_require__(35);

	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

	var _keyCode = __webpack_require__(36);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _contains2 = __webpack_require__(37);

	var _contains3 = _interopRequireDefault(_contains2);

	var _addEventListener2 = __webpack_require__(38);

	var _addEventListener3 = _interopRequireDefault(_addEventListener2);

	var _cssAnimation2 = __webpack_require__(43);

	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);

	var _toArray2 = __webpack_require__(47);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _Align2 = __webpack_require__(48);

	var _Align3 = _interopRequireDefault(_Align2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';

	exports.Align = _Align3.default;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = all;

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }

	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var error = null;

	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }

	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });

	    return error;
	  }

	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Mostly taken from ReactPropTypes.

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }

	      return null;
	    }

	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }

	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }

	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = deprecated;

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;

	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

	      warned[messageKey] = true;
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}

	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;

	  var parentProps = {};
	  var childProps = {};

	  Object.entries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];

	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });

	  return [parentProps, childProps];
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(39);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventObject = __webpack_require__(40);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventBaseObject = __webpack_require__(41);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(42);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(44);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(45);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports.default = cssAnimation;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports.default = TransitionEvents;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(46);
	} catch (err) {
	  var index = __webpack_require__(46);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = toArray;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(49);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(38);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import isWindow from './isWindow';

	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	var Align = _react2.default.createClass({
	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},

	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2.default)(window, 'resize', this.bufferMonitor);
	    }
	  },
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	  forceAlign: function forceAlign() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;

	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports.default = Align;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(53);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(54);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(55);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(56);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// http://yiminghe.iteye.com/blog/1124720

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2["default"].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2["default"])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2["default"])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2["default"].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2["default"].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2["default"];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

	exports["default"] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _propertyUtils = __webpack_require__(51);

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	function force(x, y) {
	  return x + y;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports["default"] = utils;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2["default"].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2["default"].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports["default"] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2["default"])(element);
	  var scrollX = void 0;
	  var scrollY = void 0;
	  var winSize = void 0;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2["default"].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2["default"])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2["default"].getWindowScrollLeft(win);
	  scrollY = _utils2["default"].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2["default"].viewportWidth(win),
	    height: _utils2["default"].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports["default"] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2["default"].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2["default"].mix(pos, size);
	}

	exports["default"] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2["default"].offset(node);
	    w = _utils2["default"].outerWidth(node);
	    h = _utils2["default"].outerHeight(node);
	  } else {
	    var win = _utils2["default"].getWindow(node);
	    offset = {
	      left: _utils2["default"].getWindowScrollLeft(win),
	      top: _utils2["default"].getWindowScrollTop(win)
	    };
	    w = _utils2["default"].viewportWidth(win);
	    h = _utils2["default"].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports["default"] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(57);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = void 0;
	  var diff = void 0;
	  var p1 = void 0;
	  var p2 = void 0;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports["default"] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = void 0;
	  var y = void 0;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports["default"] = getAlignOffset;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};

	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);

	  function Fade() {
	    _classCallCheck(this, Fade);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };

	  return Fade;
	}(_react2["default"].Component);

	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;

	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否是手风琴效果
	  accordion: _react2["default"].PropTypes.bool,
	  //激活的项
	  activeKey: _react2["default"].PropTypes.any,
	  //默认的激活的项
	  defaultActiveKey: _react2["default"].PropTypes.any,
	  //选中函数
	  onSelect: _react2["default"].PropTypes.func,
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};

	// TODO: Use uncontrollable.

	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);

	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleSelect = _this.handleSelect.bind(_this);

	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }

	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();

	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({ activeKey: key });
	  };

	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props;
	    var accordion = _props.accordion;
	    var propsActiveKey = _props.activeKey;
	    var className = _props.className;
	    var children = _props.children;
	    var defaultActiveKey = _props.defaultActiveKey;
	    var onSelect = _props.onSelect;
	    var style = _props.style;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);

	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }

	    var classes = {};
	    classes['' + clsPrefix] = true;

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };

	        if (accordion) {
	          Object.assign(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }

	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };

	  return PanelGroup;
	}(_react2["default"].Component);

	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;

	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'border', 'icon']),
	    /**
	    * @title 类型
	    */
	    colors: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,

	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button'

	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react.Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(63);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Icon2['default'];
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		type: _react.PropTypes.string

	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};

	var Icon = function (_Component) {
		_inherits(Icon, _Component);

		function Icon(props) {
			_classCallCheck(this, Icon);

			return _possibleConstructorReturn(this, _Component.call(this, props));
		}

		Icon.prototype.render = function render() {
			var _props = this.props,
			    type = _props.type,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);

			var clsObj = {};

			var classNames = (0, _classnames2['default'])(clsPrefix, type);

			return _react2['default'].createElement('i', _extends({}, others, { className: (0, _classnames2['default'])(classNames, className) }));
		};

		return Icon;
	}(_react.Component);

	Icon.defaultProps = defaultProps;
	Icon.PropTypes = _react.PropTypes;

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwM2E0NGQ0ZTM2YTM1MDE5N2U2YSIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvUm93LmpzIiwid2VicGFjazovLy8uL34vYmVlLWxheW91dC9idWlsZC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9zdHlsZS9yZW1vdmVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2RlcHJlY2F0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy91c3IvbG9jYWwvbGliL34vYmVlLXRvb2xzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaXNSZXF1aXJlZEZvckExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3NwbGl0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9BbGlnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9wcm9wZXJ0eVV0aWxzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvYWRqdXN0Rm9yVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvZ2V0RWxGdXR1cmVQb3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldEFsaWduT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvRmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzIiwid2VicGFjazovLy8uL34vYmVlLWJ1dHRvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1idXR0b24vYnVpbGQvQnV0dG9uLmpzIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9JY29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzYTQ0ZDRlMzZhMzUwMTk3ZTZhIiwiXG5pbXBvcnQgeyBDb24sIFJvdywgQ29sIH0gZnJvbSAnYmVlLWxheW91dCc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ2JlZS1wYW5lbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2JlZS1idXR0b24nO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjJztcblxuXG5jb25zdCBDQVJFVCA9IDxpIGNsYXNzTmFtZT1cInVmIHVmLWNoZXZyb25hcnJvd2Rvd25cIj48L2k+O1xuXG5jb25zdCBDQVJFVFVQID0gPGkgY2xhc3NOYW1lPVwidWYgdWYtY2hldnJvbmFycm93dXBcIj48L2k+O1xuXG5cbi8qKlxuICogQHRpdGxlIEljb25cbiAqIEBkZXNjcmlwdGlvbiDlnKhpdWFw5a2X56ym5bqT77yMYHR5cGVg5Y+C5pWw5YC85Z2H5LulLeWIhumalOOAglxuICovXG5jbGFzcyBEZW1vMSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGlucGVyLWljb24tZGVtb1wiPlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaWNvbl9saXN0c1wiPlxuICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtd2VjaGF0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5b6u5L+hPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi13ZWNoYXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFkZC1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7liqA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFkZC1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlYXJjaFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaQnOe0ojwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2VhcmNoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1oaXN0b2dyYW0tYXJyb3ctdXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lm77ooagg5oqY57q/5Zu+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1oaXN0b2dyYW0tYXJyb3ctdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3NlLWJvbGRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lhbPpl608L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3NlLWJvbGQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXVtYnJlbGxhXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6Zuo5LyePC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi11bWJyZWxsYTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcXFcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5RUTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcXE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTRzcXVhcmUtM1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWIhuexuzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtNHNxdWFyZS0zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zZW5kXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Y+R6YCBPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZW5kPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1tYXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lnLDlm748L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1hcDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtOXNxdWFyZS0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5qCH5a6aPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi05c3F1YXJlLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW5hdm1lbnVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7msYnloKHljIU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW5hdm1lbnU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBjLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mmL7npLrlmag8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBjLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlYXJjaC1saWdodC0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+em9vbTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2VhcmNoLWxpZ2h0LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNoZWNrLXMtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS7u+WKoTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2hlY2stcy0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wZW5jaWxcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nvJbovpE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBlbmNpbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmVwZWF0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5pKk6ZSAPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1yZXBlYXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlY3VyaXR5LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lronlhag8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNlY3VyaXR5LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxleGlcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpbM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxleGk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBlbmNpbC1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+57yW6L6RPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wZW5jaWwtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZGVsXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Yig6ZmkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1kZWw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJpLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mr5Tku7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJpLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBlbmNpbC1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+57yW6L6RPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wZW5jaWwtYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcXJjb2RlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LqM57u056CBPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1xcmNvZGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJtYi1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lhY3otLnmiqXku7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJtYi1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlYXJjaC1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mkJzntKI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNlYXJjaC1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJlbGxcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7pk4Ppk5s8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJlbGw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBhc3MtM1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuacuuajgOmAmui/hzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGFzcy0zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmVlYXJyb3ctZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuagkeW9oue6vzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJlZWFycm93LWRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyYWluaW5nXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Z+56K6tPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmFpbmluZzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ3JvdXAtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPue7hOe7h+aetuaehDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZ3JvdXAtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtem9vbS1pblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnpvb20taW48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXpvb20taW48L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlY3VyaXR5LW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lronlhag8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNlY3VyaXR5LW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJhb2ppYS1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5oql5Lu3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iYW9qaWEtYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcnVsZXJwZW5cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lrprliLY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJ1bGVycGVuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1lcnBzZWFyY2hcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5lcnA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWVycHNlYXJjaDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ3JvdXAtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPue7hOe7h+acuuaehDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZ3JvdXAtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvdWQtby11cGRvd25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lkIzmraXkuK0yLeWQjOatpTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvdWQtby11cGRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3NlLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWFs+mXrTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvc2UtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hZGQtc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWKoDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWRkLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBjXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5bel5L2c5Y+wPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmFpblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuepuuawlF/pm6jlpKk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJhaW48L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW5vZGF0YVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaXoOaVsOaNrjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbm9kYXRhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG9zZS1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YWz6ZetPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG9zZS1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ib2h1aS1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lrqHmibkt6amz5ZuePC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib2h1aS1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3VkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG91ZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmFnLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7llYblk4E8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJhZy1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10YWJsZS0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bWFkZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGFibGUtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYW5nbGVhcnJvd3BvaW50aW5ndG9yaWdodFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYW5nbGVhcnJvd3BvaW50aW5ndG9yaWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXhjLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWPueWPtzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXhjLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ3JvdXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nu4Tnu4fmnLrmnoQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWdyb3VwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wZXJzb25pbi1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6K6k6K+B5r+A5rS7PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wZXJzb25pbi1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jYWxlbmRhclwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmdtX+aXpeWOhjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2FsZW5kYXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFkZC1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7liqA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFkZC1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXN5bmMtYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5ZCM5q2lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zeW5jLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ3JpZFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmdyaWQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWdyaWQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFuZ2xlcG9pbnRpbmd0b2xlZnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFuZ2xlcG9pbnRpbmd0b2xlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFjdGl2YXRlLTNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mv4DmtLs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFjdGl2YXRlLTM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNhdmVuXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+55S3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jYXZlbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmFja1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPui/lOWbnjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmFjazwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGFzcy0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5o6I5p2DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wYXNzLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJlZHVjZS1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mmL7npLrmoJE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJlZHVjZS1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFyZWFcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lm77ooajlm77moIct6Z2i56ev5Zu+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcmVhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1mbGFnXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5peX5bicPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1mbGFnPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ib3gtby0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6LSt5Lmw55uS5a2QPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib3gtby0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1zLW8tZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS4i+aetjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctcy1vLWRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LXMtby11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS4iuaetjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctcy1vLXVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1idWlsZGluZ1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS8geS4muS/oeaBrzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYnVpbGRpbmc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRhcHBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpKnmsJQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRhcHA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyZWVmb2xkZXJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mkJzntKI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyZWVmb2xkZXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFkdmljZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWSqOivojwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWR2aWNlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi0yY29sbGF5b3V0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5bqP5YiX5biD5bGAPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi0yY29sbGF5b3V0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jaGVjay1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5a6h5om5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jaGVjay1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zaWduXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6YeH6LSt5ZCI5ZCMPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zaWduPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1saXN0c2VhcmNoXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5p+l55yL6K+m5oOFPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1saXN0c2VhcmNoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ncmlkY2FyZXRhcnJvd3VwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5b+F5aGrPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ncmlkY2FyZXRhcnJvd3VwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1leWUtYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5p+l55yLPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1leWUtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jaGVjay1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7orrjlj688L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNoZWNrLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VhbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWuoeaJuTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2VhbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXJwYm94XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZXJwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1lcnBib3g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJ1bGVycGVuLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lrprliLY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJ1bGVycGVuLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJvbGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7op5LoibI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJvbGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV4Yy1jLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mj5DnpLrlj7nlj7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV4Yy1jLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBhZFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnBhZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGFkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmVlZm9sZGVyLWNsb3NlZFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRyZWUtbmV3LXNibGluZy1ub2RlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmVlZm9sZGVyLWNsb3NlZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmVkdWNlLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWHj+WPtzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcmVkdWNlLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGFzcy1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7pgJrov4c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBhc3Mtcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zZXR0aW5nXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+57u05oqkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZXR0aW5nPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG9zZS1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+WlNY5Y+3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG9zZS1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1tYXAtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWcsOWbvjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWFwLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1vdmVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7np7vliqg8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1vdmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTJhcnJvdy1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi0yYXJyb3ctZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtMmFycm93LXJpZ2h0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi0yYXJyb3ctcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWMtby1sZWZ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1jLW8tbGVmdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGx1c1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnBsdXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBsdXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWMtby1yaWdodFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctYy1vLXJpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1jLW8tZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctYy1vLWRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxpc3Qtcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5pqC5peg5pWw5o2uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1saXN0LXMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvdWQtby1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LqR5LiL6L29PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG91ZC1vLWRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW5vZGF0YS0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5peg5pWI5pWw5o2uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ub2RhdGEtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmlsZS1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5paH5qGj5paH5Lu2LTAxPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1maWxlLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTJhcnJvdy11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtMmFycm93LXVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ub3RpZmljYXRpb25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mtojmga/lloflj608L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW5vdGlmaWNhdGlvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGllY2hhcnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lm77ooahf6aW8PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1waWVjaGFydDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvdWQtby11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS6kV/kuIrkvKA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3VkLW8tdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3NlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Y+W5raIPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG9zZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY29ycmVjdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWvueWPtzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY29ycmVjdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtaGlzdG9ncmFtLXMtby0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Zu+6KGo5YiH5o2iPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1oaXN0b2dyYW0tcy1vLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTRzcXVhcmUtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuW6lOeUqOS4reW/gzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtNHNxdWFyZS0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zdW5ueVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlCA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXN1bm55PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1saW5rXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSN5Yi26ZO+5o6lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1saW5rPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1leWVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mn6XnnIs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV5ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXllLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mn6XnnIs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV5ZS1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1xaWFuXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+562+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1xaWFuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi13aWRnZXRhYlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWwj+mDqOS7tuaOiOadgzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtd2lkZ2V0YWI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJtYi1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5oql5Lu3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ybWItczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbGluay1vZmZcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mlq3lvIDpk77mjqU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxpbmstb2ZmPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zaGFuZy1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LiK5p62PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zaGFuZy1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi14aWEtc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS4i+aetjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYteGlhLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJveC0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+55uS5a2QZnVsbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYm94LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBhc3Mtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaOiOadgzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGFzcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YW5nbGUtYXJyb3ctZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctcmlnaHRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hbmdsZS1hcnJvdy1wb2ludGluZy10by1yaWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWxlZnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hbmdsZS1wb2ludGluZy10by1sZWZ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1sZWZ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ib3hcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hcmNoaXZlLWJsYWNrLWJveDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYm94PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmlhbmdsZS1yaWdodFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmFycm93aGVhZC1wb2ludGluZy10by10aGUtcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyaWFuZ2xlLXJpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1oaXN0b2dyYW0tcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YmFyLWdyYXBoLW9uLWEtcmVjdGFuZ2xlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1oaXN0b2dyYW0tcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ib29rXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Ym9vazwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYm9vazwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYm9va21hcmstb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmJvb2ttYXJrLXdoaXRlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib29rbWFyay1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1sZWFmXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YnJhbmNoLXdpdGgtbGVhdmVzLWJsYWNrLXNoYXBlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1sZWFmPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1idWxsc2V5ZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmJ1bGxzZXllPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWxsc2V5ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ3JpZGNhcmV0ZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNhbWVyYS1yZXRybzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZ3JpZGNhcmV0ZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJpYW5nbGUtdXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jYXJldC1hcnJvdy11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJpYW5nbGUtdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyaWFuZ2xlLWRvd25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jYXJldC1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmlhbmdsZS1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG91ZC1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Y2xvdWQtc3RvcmFnZS1kb3dubG9hZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvdWQtZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvdWQtdXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jbG91ZC1zdG9yYWdlLXVwbG9hZGluZy1vcHRpb248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3VkLXVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1idWJibGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jb21tZW50LWJsYWNrLW92YWwtYnViYmxlLXNoYXBlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWJibGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJ1YmJsZS1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Y29tbWVudC13aGl0ZS1vdmFsLWJ1YmJsZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYnViYmxlLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNvcHlcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jb3B5LWRvY3VtZW50PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jb3B5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jb3JyZWN0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jb3JyZWN0LXN5bWJvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY29ycmVjdC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi0yYXJyb3ctbGVmdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmRvdWJsZS1sZWZ0LWNoZXZyb248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTJhcnJvdy1sZWZ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1kb3duLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5kb3duLWFycm93PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1kb3duLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWRvd25sb2FkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZG93bmxvYWQtdG8tc3RvcmFnZS1kcml2ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZG93bmxvYWQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWVhcnRoXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZWFydGgtZ2xvYmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWVhcnRoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1tYWlsLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5lbnZlbG9wZS1vZi13aGl0ZS1wYXBlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWFpbC1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1tYWlsXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZW52ZWxvcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1haWw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV4Y1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmV4Y2xhbWF0aW9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1leGM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV4dGVybmFsbGlua1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmV4dGVybmFsLWxpbmstc3ltYm9sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1leHRlcm5hbGxpbms8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXZpZGVvXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZmFjZXRpbWUtYnV0dG9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi12aWRlbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmlsbXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5maWxtLXN0cmlwLXdpdGgtdHdvLXBob3RvZ3JhbXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZpbG1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1mb2xkZXJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5mb2xkZXItY2xvc2VkLWJsYWNrLXNoYXBlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1mb2xkZXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZvbGRlci1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Zm9sZGVyLXdoaXRlLXNoYXBlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1mb2xkZXItbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtNHNxdWFyZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmZvdXItYmxhY2stc3F1YXJlczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtNHNxdWFyZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ2lmdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmdpZnQtYm94PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1naWZ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1naXRodWItY1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmdpdGh1Yi1sb2dvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1naXRodWItYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZ2l0aHViLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5naXRodWItc2lnbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZ2l0aHViLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWhlYXJ0LW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5oZWFydC1zaGFwZS1vdXRsaW5lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1oZWFydC1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1oZWFydFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmhlYXJ0LXNoYXBlLXNpbGhvdWV0dGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWhlYXJ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ob21lXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+aG9tZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtaG9tZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtaS1jLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5pbmZvcm1hdGlvbi1idXR0b248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWktYy0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1pXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+aW5mb3JtYXRpb24tc3ltYm9sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1pPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmlhbmdsZS1sZWZ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bGVmdC1hcnJvdzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJpYW5nbGUtbGVmdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc3ltbGlzdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmxpc3Rpbmctb3B0aW9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zeW1saXN0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1sZWZ0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5sb25nLWFycm93LXBvaW50aW5nLXRvLWxlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWxlZnQtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctcmlnaHQtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmxvbmctYXJyb3ctcG9pbnRpbmctdG8tdGhlLXJpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1yaWdodC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy11cC0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bG9uZy1hcnJvdy1wb2ludGluZy11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctdXAtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmVkdWNlLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5taW51cy1zaWduLWluc2lkZS1hLWJsYWNrLWNpcmNsZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcmVkdWNlLWM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJlZHVjZS1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bWludXMtc2lnbi1pbnNpZGUtYS1ibGFjay1yb3VuZGVkLXNxdWFyZS1zaGFwZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcmVkdWNlLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1pbnVzXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bWludXMtc3ltYm9sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1taW51czwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbW9iaWxlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bW9iaWxlLXBob25lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1tb2JpbGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJlbGwtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPm11c2ljYWwtYmVsbC1vdXRsaW5lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iZWxsLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTlzcXVhcmVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5uaW5lLWJsYWNrLXRpbGVzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi05c3F1YXJlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1udW1saXN0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bnVtYmVyZWQtbGlzdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbnVtbGlzdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZm9sZGVyb3Blbi1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+b3Blbi1mb2xkZXItb3V0bGluZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZm9sZGVyb3Blbi1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmVlZm9sZGVyb3BlblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPm9wZW4tZm9sZGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmVlZm9sZGVyb3BlbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbWFjXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+b3Blbi1sYXB0b3AtY29tcHV0ZXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1hYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2FtZXJhXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+cGhvdG8tY2FtZXJhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jYW1lcmE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBpY3R1cmVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5waWN0dXJlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1waWN0dXJlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wbGF5XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+cGxheS1zaWduPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wbGF5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wbGF5LW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5wbGF5LXZpZGVvLWJ1dHRvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGxheS1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1xbS1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+cXVlc3Rpb24tbWFyay1vbi1hLWNpcmN1bGFyLWJsYWNrLWJhY2tncm91bmQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXFtLWM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXFtXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+cXVlc3Rpb24tc2lnbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcW08L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW5hdm1lbnUtbGlnaHRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5yZW9yZGVyLW9wdGlvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbmF2bWVudS1saWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2V0dGluZ3NcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zZXR0aW5nczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2V0dGluZ3M8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNhcnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zaG9wcGluZy1jYXJ0LWJsYWNrLXNoYXBlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jYXJ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1oaXN0b2dyYW1cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zaWduYWwtYmFyczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtaGlzdG9ncmFtPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1maW5ldHVuZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNvcnQtYXJyb3dzLWNvdXBsZS1wb2ludGluZy11cC1hbmQtZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmluZXR1bmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNvcnR1cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNvcnQtYnktYXR0cmlidXRlcy1pbnRlcmZhY2UtYnV0dG9uLW9wdGlvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc29ydHVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zb3J0ZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNvcnQtYnktYXR0cmlidXRlczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc29ydGRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNvcnQxOVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNvcnQtYnktbnVtZXJpYy1vcmRlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc29ydDE5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zb3J0OTFcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zb3J0LWJ5LW9yZGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zb3J0OTE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXphXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c29ydC1yZXZlcnNlLWFscGhhYmV0aWNhbC1vcmRlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtemE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXN0YXItb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnN0YXItMTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc3Rhci1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zdGFyLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zdGFyLWhhbGYtZW1wdHk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXN0YXItMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc3RhclwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnN0YXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXN0YXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWx1Z2dhZ2VcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zdWl0Y2FzZS13aXRoLXdoaXRlLWRldGFpbHM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWx1Z2dhZ2U8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRhYmxlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGFibGUtZ3JpZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGFibGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRlbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRlbGVwaG9uZS1oYW5kbGUtc2lsaG91ZXR0ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGVsPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10ZWwtc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRlbGVwaG9uZS1zeW1ib2wtYnV0dG9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10ZWwtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGVybWluYWxcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj50ZXJtaW5hbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGVybWluYWw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZpbGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj50ZXh0LWZpbGUtMTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmlsZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmlsZS1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGV4dC1maWxlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1maWxlLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTNkb3QtaFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRocmVlLXNtYWxsLXNxdWFyZS1zaGFwZXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTNkb3QtaDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGltZS1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj50aW1lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aW1lLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdXBsb2FkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dXBsb2FkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi11cGxvYWQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTNkb3QtdlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnZlcnRpY2FsLWVsbGlwc2lzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi0zZG90LXY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJtYlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnllbi1zeW1ib2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJtYjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctYy1vLXVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1jLW8tdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJlamVjdC0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6amz5ZuePC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1yZWplY3QtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmFyY29kZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmJhcmNvZGUtMTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmFyY29kZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtem9vbS1vdXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj56b29tLW91dDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtem9vbS1vdXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV4Yy10LW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kuInop5Llj7nlj7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV4Yy10LW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBhc3NcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7pgJrov4c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBhc3M8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZsb3dcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lhbPns7vnvZHnu5w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZsb3c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFkZC1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YqgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hZGQtYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctYy1vLXJpZ2h0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWMtby1yaWdodC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zaGVsZi1vblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS4iuaetjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2hlbGYtb248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNoZWxmLW9mZlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS4i+aetjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2hlbGYtb2ZmPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1maWxlLW8tMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaWh+S7tjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmlsZS1vLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRydWNrLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7liLDotKfnoa7orqQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRydWNrLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXN1cGVyXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Yqf6IO95by65aSnPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zdXBlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXF1aXBtZW50XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6K6+5aSHPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1lcXVpcG1lbnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWMtby1sZWZ0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWMtby1sZWZ0LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZpbGVzLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7otYTmupDmlofku7Y8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZpbGVzLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3VkLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kupE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3VkLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJtYi1zLW8tMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWvuei0pjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcm1iLXMtby0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi0zZG90LWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueuoeeQhuS4reW/gzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtM2RvdC1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWRhZmVuZ1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlF/lpKfpo448L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWRhZmVuZzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmFveHVlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUX+aatOmbqjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmFveHVlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1iaW5nYmFvXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUX+WGsOmbuTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmluZ2JhbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmVuZ2Jhb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlF/po47mmrQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZlbmdiYW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXhpYW95dVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlF/lsI/pm6g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXhpYW95dTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtemhlbnh1ZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlF/pmLXpm6o8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXpoZW54dWU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXpob25neXVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpKnmsJRf5Lit6ZuoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi16aG9uZ3l1PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1lc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPkVTPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1lczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmxvdy1vLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mtYHnqIs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZsb3ctby0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hY3RpdmF0ZS0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5r+A5rS7LTAxPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hY3RpdmF0ZS0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1mbG93LW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mtYHnqIs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZsb3ctbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYnVsYi0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5oqA5pyv5pSv5oyBPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWxiLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1pLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lv4Xloas8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1pLWM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRvcC11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPui/lOWbnumhtumDqDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdG9wLXVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jcmVkaXRjYXJkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Y3JlZGl0LWNhcmQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNyZWRpdGNhcmQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFsaWduLWNlbnRlclwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmFsaWduLWNlbnRlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWxpZ24tY2VudGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hbGlnbi1qdXN0aWZ5XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YWxpZ24tanVzdGlmeTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWxpZ24tanVzdGlmeTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWxpZ24tbGVmdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmFsaWduLWxlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFsaWduLWxlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFsaWduLXJpZ2h0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YWxpZ24tcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFsaWduLXJpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1qdS1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mi5I8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWp1LWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJ1Y2tcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7otKfliLDku5jmrL48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRydWNrPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zZXR0aW5nLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua1geeoizwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2V0dGluZy1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXVzZXJzLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mpbzlroflm77moIdf55So5oi357uEPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi11c2Vycy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1iYWctcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5ZWG5ZOBPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iYWctcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jYWktc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPumHh+i0rTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2FpLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxpc3RjaGVja1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWumuaghzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbGlzdGNoZWNrPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi11c2Vyc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPue+pDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdXNlcnM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWktY1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuafpeeci+ivpuaDhTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtaS1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1idWlsZGluZy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LyB5Lia5L+h5oGvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWlsZGluZy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ybWItcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5oql5Lu3566h55CGPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ybWItcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1yZWplY3RcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lt7LpqbPlm548L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJlamVjdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtOWRvdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuiPnOWNlTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtOWRvdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbG9hZGluZ3N0YXRlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bG9hZGluZzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbG9hZGluZ3N0YXRlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1nYXRld2F5XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+572R5YWzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1nYXRld2F5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10aWNrZXQtcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Y+R56WoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aWNrZXQtcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi11c2Vyc2V0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566h55CG5Lit5b+DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi11c2Vyc2V0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wdXp6bGUtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPue7hOS7tjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcHV6emxlLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJveC1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+54mp5paZ566h55CGPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib3gtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYnVsYlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua/gOa0uzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYnVsYjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXhjLXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mhJ/lj7nlj7dfaWNvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXhjLXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJtYi1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5oql5Lu3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ybWItYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGFibGUtcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Y+R56WoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10YWJsZS1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXVtYnJlbGxhLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kvJ48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXVtYnJlbGxhLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWRyb3Bib3hcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5kcm9wYm94PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1kcm9wYm94PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zZWFyY2gtbGlnaHRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mkJzntKIt5pCc57SiPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZWFyY2gtbGlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNhcnQtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNob3BwaW5nLWNhcnQtYmxhY2stc2hhcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNhcnQtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYta2Vyby1jb2xcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5rZXJvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1rZXJvLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdWJhLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnViYTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdWJhLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlucGVyemMtY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGlucGVyemM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpbnBlcnpjLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlucGVyemNoLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRpbnBlcnpjaDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGlucGVyemNoLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtaXVhcC1jb2xcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5pdWFwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1pdWFwLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtaXVhcGRlc2lnbi1jb2xcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5pdWFwZGVzaWduejwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtaXVhcGRlc2lnbi1jb2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJlZS1jb2xcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5iZWU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJlZS1jb2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW5lb3VpLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPm5lb3VpPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1uZW91aS1jb2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNwYXJyb3ctY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c3BhcnJvdzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc3BhcnJvdy1jb2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRpbnBlcmNuLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRpbnBlcmNuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aW5wZXJjbi1jb2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRpbnBlcmVuLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRpbnBlcmVuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aW5wZXJlbi1jb2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LXVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YW5nbGUtYXJyb3ctZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1haWxzeW1cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj53ZWJtYWlsPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1tYWlsc3ltPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wcmludFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWKnuWFrOeUqOWTgTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcHJpbnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRpY2tldC0zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5oql6ZSAPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aWNrZXQtMzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbG9hblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWAn+asvjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbG9hbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlja2V0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lh63or4HkuK3lv4M8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpY2tldC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1vZmZ3b3JrXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6K+35YGHPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1vZmZ3b3JrPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10b2RvbGlzdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuW+heWKnjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdG9kb2xpc3Q8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBlcnNvbmluXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5ZGY5bel5YWl6IGMPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wZXJzb25pbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlja2V0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+56Wo5YqhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aWNrZXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxpbmVjaGFydFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWwj2ljb24t5Zu+6KGoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1saW5lY2hhcnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTRsZWFmXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5bqU55So5Lit5b+DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi00bGVhZjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbGlzdHNldFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS/oeaBr+e7tOaKpDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbGlzdHNldDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcWktYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LyB5Lia6K6k6K+BPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1xaS1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV4Yy1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Y+55Y+3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1leGMtYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY29kZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPumbhuaIkOW8gOWPkTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY29kZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGx1Zy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+54Ot5ouU5o+SPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wbHVnLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlYXJjaC1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5pCc57SiPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZWFyY2gtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJlZWFkZFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRyZWUtbmV3LXNibGluZy1ub2RlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmVlYWRkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1taVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuW/heWhqzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICBcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufXZhciBEZW1vQXJyYXkgPSBbe1wiZXhhbXBsZVwiOjxEZW1vMSAvPixcInRpdGxlXCI6XCIgSWNvblwiLFwiY29kZVwiOlwiLyoqXFxuICogQHRpdGxlIEljb25cXG4gKiBAZGVzY3JpcHRpb24g5ZyoaXVhcOWtl+espuW6k++8jGB0eXBlYOWPguaVsOWAvOWdh+S7pS3liIbpmpTjgIJcXG4gKi9cXG5jbGFzcyBEZW1vMSBleHRlbmRzIENvbXBvbmVudCB7XFxuXFx0cmVuZGVyICgpIHtcXG5cXHRcXHRyZXR1cm4gKFxcblxcdFxcdFxcdDxkaXYgY2xhc3NOYW1lPVxcXCJ0aW5wZXItaWNvbi1kZW1vXFxcIj5cXG5cXHRcXHRcXHRcXHQ8dWwgY2xhc3NOYW1lPVxcXCJpY29uX2xpc3RzXFxcIj5cXG4gICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi13ZWNoYXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW+ruS/oTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtd2VjaGF0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWRkLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YqgPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hZGQtYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mkJzntKI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNlYXJjaDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhpc3RvZ3JhbS1hcnJvdy11cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zu+6KGoIOaKmOe6v+WbvjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGlzdG9ncmFtLWFycm93LXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvc2UtYm9sZFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YWz6ZetPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG9zZS1ib2xkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdW1icmVsbGFcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPumbqOS8njwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdW1icmVsbGE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1xcVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+UVE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXFxPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtNHNxdWFyZS0zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7liIbnsbs8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTRzcXVhcmUtMzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNlbmRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPkemAgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2VuZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1hcFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zyw5Zu+PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tYXA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi05c3F1YXJlLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuagh+WumjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtOXNxdWFyZS0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbmF2bWVudVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5rGJ5aCh5YyFPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1uYXZtZW51PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGMtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pi+56S65ZmoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wYy0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoLWxpZ2h0LTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnpvb208L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNlYXJjaC1saWdodC0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2hlY2stcy0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ku7vliqE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNoZWNrLXMtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBlbmNpbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+57yW6L6RPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wZW5jaWw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yZXBlYXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaSpOmUgDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcmVwZWF0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VjdXJpdHktMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6J5YWoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zZWN1cml0eS0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGV4aVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5aWzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1sZXhpPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGVuY2lsLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue8lui+kTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVuY2lsLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1kZWxcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWIoOmZpDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZGVsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmktb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5q+U5Lu3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iaS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGVuY2lsLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue8lui+kTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVuY2lsLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1xcmNvZGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS6jOe7tOeggTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcXJjb2RlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YWN6LS55oql5Lu3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ybWItYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pCc57SiPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zZWFyY2gtYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmVsbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6ZOD6ZObPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iZWxsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFzcy0zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mnLrmo4DpgJrov4c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBhc3MtMzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyZWVhcnJvdy1kb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7moJHlvaLnur88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRyZWVhcnJvdy1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJhaW5pbmdcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWfueiurTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJhaW5pbmc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncm91cC0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nu4Tnu4fmnrbmnoQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdyb3VwLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi16b29tLWluXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj56b29tLWluPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi16b29tLWluPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VjdXJpdHktb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6J5YWoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zZWN1cml0eS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmFvamlhLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7tzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYmFvamlhLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ydWxlcnBlblxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6a5Yi2PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ydWxlcnBlbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWVycHNlYXJjaFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZXJwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1lcnBzZWFyY2g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncm91cC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nu4Tnu4fmnLrmnoQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdyb3VwLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC1vLXVwZG93blxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5ZCM5q2l5LitMi3lkIzmraU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNsb3VkLW8tdXBkb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvc2UtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lhbPpl608L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNsb3NlLWMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFkZC1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7liqA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFkZC1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW3peS9nOWPsDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yYWluXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nqbrmsJRf6Zuo5aSpPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yYWluPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbm9kYXRhXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ml6DmlbDmja48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW5vZGF0YTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNsb3NlLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWFs+mXrTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvc2UtYzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJvaHVpLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6h5om5Lemps+WbnjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm9odWktcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvdWRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkqeawlDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvdWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYWctc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5ZWG5ZOBPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iYWctczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRhYmxlLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1hZGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRhYmxlLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hbmdsZWFycm93cG9pbnRpbmd0b3JpZ2h0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFuZ2xlYXJyb3dwb2ludGluZ3RvcmlnaHQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1leGMtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lj7nlj7c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWV4Yy1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncm91cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+57uE57uH5py65p6EPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ncm91cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBlcnNvbmluLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuiupOivgea/gOa0uzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVyc29uaW4tbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNhbGVuZGFyXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5nbV/ml6XljoY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNhbGVuZGFyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWRkLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YqgPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hZGQtcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3luYy1jLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWQjOatpTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc3luYy1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncmlkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5ncmlkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ncmlkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYW5nbGVwb2ludGluZ3RvbGVmdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+566t5aS0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hbmdsZXBvaW50aW5ndG9sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWN0aXZhdGUtM1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5r+A5rS7PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hY3RpdmF0ZS0zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2F2ZW5cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueUtzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2F2ZW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYWNrXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ov5Tlm548L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJhY2s8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wYXNzLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaOiOadgzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGFzcy0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcmVkdWNlLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pi+56S65qCRPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yZWR1Y2Utcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJlYVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zu+6KGo5Zu+5qCHLemdouenr+WbvjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJlYTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZsYWdcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaXl+W4nDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZmxhZzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJveC1vLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPui0reS5sOebkuWtkDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm94LW8tMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LXMtby1kb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIvmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXMtby1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctcy1vLXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIrmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXMtby11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1aWxkaW5nXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kvIHkuJrkv6Hmga88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJ1aWxkaW5nPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGFwcFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5aSp5rCUPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10YXBwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJlZWZvbGRlclxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pCc57SiPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cmVlZm9sZGVyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWR2aWNlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lkqjor6I8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFkdmljZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLTJjb2xsYXlvdXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW6j+WIl+W4g+WxgDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtMmNvbGxheW91dDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNoZWNrLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWuoeaJuTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2hlY2stczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNpZ25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPumHh+i0reWQiOWQjDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2lnbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWxpc3RzZWFyY2hcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuafpeeci+ivpuaDhTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGlzdHNlYXJjaDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWdyaWRjYXJldGFycm93dXBcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW/heWhqzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ3JpZGNhcmV0YXJyb3d1cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWV5ZS1jLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuafpeecizwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXllLWMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNoZWNrLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6K645Y+vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jaGVjay1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zZWFsXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lrqHmibk8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNlYWw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1lcnBib3hcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmVycDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXJwYm94PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcnVsZXJwZW4tb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6a5Yi2PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ydWxlcnBlbi1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm9sZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6KeS6ImyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yb2xlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjLWMtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5o+Q56S65Y+55Y+3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leGMtYy0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5wYWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBhZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyZWVmb2xkZXItY2xvc2VkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50cmVlLW5ldy1zYmxpbmctbm9kZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJlZWZvbGRlci1jbG9zZWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yZWR1Y2UtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lh4/lj7c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJlZHVjZS1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wYXNzLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6YCa6L+HPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wYXNzLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNldHRpbmdcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue7tOaKpDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2V0dGluZzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNsb3NlLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPlpTWOWPtzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvc2UtczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1hcC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lnLDlm748L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW1hcC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbW92ZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+56e75YqoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tb3ZlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtMmFycm93LWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtMmFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi0yYXJyb3ctcmlnaHRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtMmFycm93LXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctYy1vLWxlZnRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctYy1vLWxlZnQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wbHVzXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5wbHVzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wbHVzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctYy1vLXJpZ2h0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LWMtby1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWMtby1kb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LWMtby1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGlzdC1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaaguaXoOaVsOaNrjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGlzdC1zLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC1vLWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS6keS4i+i9vTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvdWQtby1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbm9kYXRhLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaXoOaViOaVsOaNrjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbm9kYXRhLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1maWxlLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaWh+aho+aWh+S7ti0wMTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZmlsZS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtMmFycm93LXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTJhcnJvdy11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW5vdGlmaWNhdGlvblxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5raI5oGv5ZaH5Y+tPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ub3RpZmljYXRpb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1waWVjaGFydFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zu+6KGoX+mlvDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGllY2hhcnQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC1vLXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kupFf5LiK5LygPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG91ZC1vLXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvc2VcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPlua2iDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvc2U8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jb3JyZWN0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lr7nlj7c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNvcnJlY3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1oaXN0b2dyYW0tcy1vLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWbvuihqOWIh+aNojwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGlzdG9ncmFtLXMtby0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtNHNxdWFyZS0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lupTnlKjkuK3lv4M8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTRzcXVhcmUtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXN1bm55XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJQgPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zdW5ueTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWxpbmtcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkjeWItumTvuaOpTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGluazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWV5ZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5p+l55yLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1leWUtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5p+l55yLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leWUtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXFpYW5cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuetvjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcWlhbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXdpZGdldGFiXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lsI/pg6jku7bmjojmnYM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXdpZGdldGFiPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7tzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcm1iLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1saW5rLW9mZlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pat5byA6ZO+5o6lPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1saW5rLW9mZjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNoYW5nLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS4iuaetjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2hhbmctczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXhpYS1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIvmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXhpYS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYm94LTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuebkuWtkGZ1bGw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJveC0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFzcy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mjojmnYM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBhc3MtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFuZ2xlLWFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1yaWdodFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YW5nbGUtYXJyb3ctcG9pbnRpbmctdG8tcmlnaHQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctbGVmdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YW5nbGUtcG9pbnRpbmctdG8tbGVmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctbGVmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJveFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YXJjaGl2ZS1ibGFjay1ib3g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyaWFuZ2xlLXJpZ2h0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5hcnJvd2hlYWQtcG9pbnRpbmctdG8tdGhlLXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cmlhbmdsZS1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhpc3RvZ3JhbS1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmJhci1ncmFwaC1vbi1hLXJlY3RhbmdsZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGlzdG9ncmFtLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJvb2tcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmJvb2s8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJvb2s8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ib29rbWFyay1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5ib29rbWFyay13aGl0ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm9va21hcmstbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWxlYWZcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmJyYW5jaC13aXRoLWxlYXZlcy1ibGFjay1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGVhZjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1bGxzZXllXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5idWxsc2V5ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnVsbHNleWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncmlkY2FyZXRkb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5jYW1lcmEtcmV0cm88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdyaWRjYXJldGRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10cmlhbmdsZS11cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y2FyZXQtYXJyb3ctdXA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRyaWFuZ2xlLXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJpYW5nbGUtZG93blxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y2FyZXQtZG93bjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJpYW5nbGUtZG93bjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNsb3VkLWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmNsb3VkLXN0b3JhZ2UtZG93bmxvYWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNsb3VkLWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC11cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y2xvdWQtc3RvcmFnZS11cGxvYWRpbmctb3B0aW9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG91ZC11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1YmJsZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y29tbWVudC1ibGFjay1vdmFsLWJ1YmJsZS1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnViYmxlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYnViYmxlLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmNvbW1lbnQtd2hpdGUtb3ZhbC1idWJibGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJ1YmJsZS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY29weVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y29weS1kb2N1bWVudDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY29weTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNvcnJlY3QtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y29ycmVjdC1zeW1ib2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNvcnJlY3QtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLTJhcnJvdy1sZWZ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5kb3VibGUtbGVmdC1jaGV2cm9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi0yYXJyb3ctbGVmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWRvd24tMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZG93bi1hcnJvdzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctZG93bi0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZG93bmxvYWRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmRvd25sb2FkLXRvLXN0b3JhZ2UtZHJpdmU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWRvd25sb2FkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZWFydGhcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmVhcnRoLWdsb2JlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1lYXJ0aDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1haWwtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZW52ZWxvcGUtb2Ytd2hpdGUtcGFwZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW1haWwtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1haWxcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmVudmVsb3BlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tYWlsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5leGNsYW1hdGlvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXhjPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXh0ZXJuYWxsaW5rXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5leHRlcm5hbC1saW5rLXN5bWJvbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXh0ZXJuYWxsaW5rPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdmlkZW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmZhY2V0aW1lLWJ1dHRvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdmlkZW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1maWxtc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZmlsbS1zdHJpcC13aXRoLXR3by1waG90b2dyYW1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1maWxtczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZvbGRlclxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Zm9sZGVyLWNsb3NlZC1ibGFjay1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZm9sZGVyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZm9sZGVyLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmZvbGRlci13aGl0ZS1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZm9sZGVyLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi00c3F1YXJlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5mb3VyLWJsYWNrLXNxdWFyZXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTRzcXVhcmU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1naWZ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5naWZ0LWJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ2lmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWdpdGh1Yi1jXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5naXRodWItbG9nbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ2l0aHViLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1naXRodWItc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Z2l0aHViLXNpZ248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdpdGh1Yi1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtaGVhcnQtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aGVhcnQtc2hhcGUtb3V0bGluZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGVhcnQtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhlYXJ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5oZWFydC1zaGFwZS1zaWxob3VldHRlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1oZWFydDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhvbWVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmhvbWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWhvbWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1pLWMtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aW5mb3JtYXRpb24tYnV0dG9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1pLWMtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmluZm9ybWF0aW9uLXN5bWJvbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyaWFuZ2xlLWxlZnRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmxlZnQtYXJyb3c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRyaWFuZ2xlLWxlZnQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zeW1saXN0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5saXN0aW5nLW9wdGlvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc3ltbGlzdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWxlZnQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+bG9uZy1hcnJvdy1wb2ludGluZy10by1sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hcnJvdy1sZWZ0LTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1yaWdodC0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5sb25nLWFycm93LXBvaW50aW5nLXRvLXRoZS1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctcmlnaHQtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LXVwLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmxvbmctYXJyb3ctcG9pbnRpbmctdXA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXVwLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yZWR1Y2UtY1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+bWludXMtc2lnbi1pbnNpZGUtYS1ibGFjay1jaXJjbGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJlZHVjZS1jPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcmVkdWNlLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1pbnVzLXNpZ24taW5zaWRlLWEtYmxhY2stcm91bmRlZC1zcXVhcmUtc2hhcGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJlZHVjZS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbWludXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1pbnVzLXN5bWJvbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbWludXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1tb2JpbGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1vYmlsZS1waG9uZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbW9iaWxlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmVsbC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5tdXNpY2FsLWJlbGwtb3V0bGluZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYmVsbC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtOXNxdWFyZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+bmluZS1ibGFjay10aWxlczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtOXNxdWFyZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW51bWxpc3RcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm51bWJlcmVkLWxpc3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW51bWxpc3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1mb2xkZXJvcGVuLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm9wZW4tZm9sZGVyLW91dGxpbmU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZvbGRlcm9wZW4tbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyZWVmb2xkZXJvcGVuXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5vcGVuLWZvbGRlcjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJlZWZvbGRlcm9wZW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1tYWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm9wZW4tbGFwdG9wLWNvbXB1dGVyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tYWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jYW1lcmFcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnBob3RvLWNhbWVyYTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2FtZXJhPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGljdHVyZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+cGljdHVyZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGljdHVyZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBsYXlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnBsYXktc2lnbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGxheTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBsYXktb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+cGxheS12aWRlby1idXR0b248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBsYXktbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXFtLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnF1ZXN0aW9uLW1hcmstb24tYS1jaXJjdWxhci1ibGFjay1iYWNrZ3JvdW5kPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1xbS1jPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcW1cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnF1ZXN0aW9uLXNpZ248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXFtPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbmF2bWVudS1saWdodFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+cmVvcmRlci1vcHRpb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW5hdm1lbnUtbGlnaHQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zZXR0aW5nc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c2V0dGluZ3M8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNldHRpbmdzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2FydFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c2hvcHBpbmctY2FydC1ibGFjay1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2FydDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhpc3RvZ3JhbVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c2lnbmFsLWJhcnM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWhpc3RvZ3JhbTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZpbmV0dW5lXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWFycm93cy1jb3VwbGUtcG9pbnRpbmctdXAtYW5kLWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZpbmV0dW5lPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc29ydHVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWJ5LWF0dHJpYnV0ZXMtaW50ZXJmYWNlLWJ1dHRvbi1vcHRpb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNvcnR1cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNvcnRkb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWJ5LWF0dHJpYnV0ZXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNvcnRkb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc29ydDE5XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWJ5LW51bWVyaWMtb3JkZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNvcnQxOTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNvcnQ5MVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c29ydC1ieS1vcmRlcjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc29ydDkxPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtemFcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnNvcnQtcmV2ZXJzZS1hbHBoYWJldGljYWwtb3JkZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXphPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3Rhci1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zdGFyLTE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXN0YXItbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXN0YXItMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c3Rhci1oYWxmLWVtcHR5PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zdGFyLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zdGFyXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zdGFyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zdGFyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbHVnZ2FnZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c3VpdGNhc2Utd2l0aC13aGl0ZS1kZXRhaWxzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1sdWdnYWdlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGFibGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnRhYmxlLWdyaWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRhYmxlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGVsXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50ZWxlcGhvbmUtaGFuZGxlLXNpbGhvdWV0dGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRlbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRlbC1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50ZWxlcGhvbmUtc3ltYm9sLWJ1dHRvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGVsLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10ZXJtaW5hbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+dGVybWluYWw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRlcm1pbmFsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZmlsZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+dGV4dC1maWxlLTE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZpbGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1maWxlLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnRleHQtZmlsZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZmlsZS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtM2RvdC1oXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aHJlZS1zbWFsbC1zcXVhcmUtc2hhcGVzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi0zZG90LWg8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aW1lLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+dGltZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGltZS1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi11cGxvYWRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnVwbG9hZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdXBsb2FkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtM2RvdC12XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj52ZXJ0aWNhbC1lbGxpcHNpczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtM2RvdC12PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj55ZW4tc3ltYm9sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ybWI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1jLW8tdXBcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctYy1vLXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcmVqZWN0LTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPumps+WbnjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcmVqZWN0LTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYXJjb2RlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5iYXJjb2RlLTE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJhcmNvZGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi16b29tLW91dFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+em9vbS1vdXQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXpvb20tb3V0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjLXQtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5LiJ6KeS5Y+55Y+3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leGMtdC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFzc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6YCa6L+HPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wYXNzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZmxvd1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YWz57O7572R57ucPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mbG93PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWRkLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWKoDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYWRkLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1jLW8tcmlnaHQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+566t5aS0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hcnJvdy1jLW8tcmlnaHQtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNoZWxmLW9uXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIrmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNoZWxmLW9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2hlbGYtb2ZmXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIvmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNoZWxmLW9mZjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZpbGUtby0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mlofku7Y8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZpbGUtby0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJ1Y2stb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Yiw6LSn56Gu6K6kPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cnVjay1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3VwZXJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWKn+iDveW8uuWkpzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc3VwZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1lcXVpcG1lbnRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuiuvuWkhzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXF1aXBtZW50PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctYy1vLWxlZnQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+566t5aS0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hcnJvdy1jLW8tbGVmdC0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZmlsZXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6LWE5rqQ5paH5Lu2PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1maWxlcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvdWQtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5LqRPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG91ZC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLXMtby0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lr7notKY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJtYi1zLW8tMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLTNkb3QtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrqHnkIbkuK3lv4M8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTNkb3QtYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZGFmZW5nXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf5aSn6aOOPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1kYWZlbmc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYW94dWVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkqeawlF/mmrTpm6o8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJhb3h1ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJpbmdiYW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkqeawlF/lhrDpm7k8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJpbmdiYW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1mZW5nYmFvXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf6aOO5pq0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mZW5nYmFvPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYteGlhb3l1XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf5bCP6ZuoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi14aWFveXU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi16aGVueHVlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf6Zi16ZuqPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi16aGVueHVlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtemhvbmd5dVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5aSp5rCUX+S4rembqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtemhvbmd5dTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWVzXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5FUzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1mbG93LW8tMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5rWB56iLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mbG93LW8tMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFjdGl2YXRlLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPua/gOa0uy0wMTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYWN0aXZhdGUtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZsb3ctb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5rWB56iLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mbG93LW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1idWxiLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKgOacr+aUr+aMgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnVsYi0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbWktY1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5b+F5aGrPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1taS1jPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdG9wLXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ov5Tlm57pobbpg6g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRvcC11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNyZWRpdGNhcmRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmNyZWRpdC1jYXJkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jcmVkaXRjYXJkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWxpZ24tY2VudGVyXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5hbGlnbi1jZW50ZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFsaWduLWNlbnRlcjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFsaWduLWp1c3RpZnlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFsaWduLWp1c3RpZnk8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFsaWduLWp1c3RpZnk8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hbGlnbi1sZWZ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5hbGlnbi1sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hbGlnbi1sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWxpZ24tcmlnaHRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFsaWduLXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hbGlnbi1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWp1LWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5ouSPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1qdS1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10cnVja1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6LSn5Yiw5LuY5qy+PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cnVjazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNldHRpbmctYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mtYHnqIs8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNldHRpbmctYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdXNlcnMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5qW85a6H5Zu+5qCHX+eUqOaIt+e7hDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdXNlcnMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJhZy1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWVhuWTgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYmFnLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNhaS1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ph4fotK08L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNhaS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGlzdGNoZWNrXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lrprmoIc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxpc3RjaGVjazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXVzZXJzXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nvqQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXVzZXJzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtaS1jXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mn6XnnIvor6bmg4U8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWktYzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1aWxkaW5nLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS8geS4muS/oeaBrzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnVpbGRpbmctbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXJtYi1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7t+euoeeQhjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcm1iLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXJlamVjdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5bey6amz5ZuePC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yZWplY3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi05ZG90XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7oj5zljZU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTlkb3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1sb2FkaW5nc3RhdGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmxvYWRpbmc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxvYWRpbmdzdGF0ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWdhdGV3YXlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue9keWFszwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ2F0ZXdheTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRpY2tldC1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPkeelqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlja2V0LXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXVzZXJzZXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueuoeeQhuS4reW/gzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdXNlcnNldDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXB1enpsZS1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nu4Tku7Y8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXB1enpsZS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYm94LW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueJqeaWmeeuoeeQhjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm94LW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1idWxiXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mv4DmtLs8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJ1bGI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1leGMtdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5oSf5Y+55Y+3X2ljb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWV4Yy10PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7tzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcm1iLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10YWJsZS1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPkeelqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGFibGUtcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdW1icmVsbGEtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5LyePC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi11bWJyZWxsYS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZHJvcGJveFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZHJvcGJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZHJvcGJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNlYXJjaC1saWdodFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pCc57SiLeaQnOe0ojwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2VhcmNoLWxpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2FydC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zaG9wcGluZy1jYXJ0LWJsYWNrLXNoYXBlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jYXJ0LW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1rZXJvLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+a2VybzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYta2Vyby1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi11YmEtY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj51YmE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXViYS1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aW5wZXJ6Yy1jb2xcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnRpbnBlcnpjPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10aW5wZXJ6Yy1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aW5wZXJ6Y2gtY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aW5wZXJ6Y2g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRpbnBlcnpjaC1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1pdWFwLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aXVhcDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaXVhcC1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1pdWFwZGVzaWduLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aXVhcGRlc2lnbno8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWl1YXBkZXNpZ24tY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmVlLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YmVlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iZWUtY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbmVvdWktY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5uZW91aTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbmVvdWktY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3BhcnJvdy1jb2xcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnNwYXJyb3c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNwYXJyb3ctY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGlucGVyY24tY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aW5wZXJjbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlucGVyY24tY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGlucGVyZW4tY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aW5wZXJlbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlucGVyZW4tY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctdXBcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFuZ2xlLWFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbWFpbHN5bVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+d2VibWFpbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbWFpbHN5bTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXByaW50XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lip7lhaznlKjlk4E8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXByaW50PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGlja2V0LTNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpemUgDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlja2V0LTM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1sb2FuXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lgJ/mrL48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxvYW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aWNrZXQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Yet6K+B5Lit5b+DPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10aWNrZXQtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW9mZndvcmtcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuivt+WBhzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtb2Zmd29yazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRvZG9saXN0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lvoXlip48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRvZG9saXN0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGVyc29uaW5cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWRmOW3peWFpeiBjDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVyc29uaW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aWNrZXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuelqOWKoTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlja2V0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGluZWNoYXJ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lsI9pY29uLeWbvuihqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGluZWNoYXJ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtNGxlYWZcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW6lOeUqOS4reW/gzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtNGxlYWY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1saXN0c2V0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kv6Hmga/nu7TmiqQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxpc3RzZXQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1xaS1jLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS8geS4muiupOivgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcWktYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPueWPtzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXhjLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jb2RlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7pm4bmiJDlvIDlj5E8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNvZGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wbHVnLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueDreaLlOaPkjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGx1Zy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaQnOe0ojwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2VhcmNoLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10cmVlYWRkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50cmVlLW5ldy1zYmxpbmctbm9kZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJlZWFkZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1pXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lv4Xloas8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW1pPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgIFxcdFxcdDwvdWw+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0KVxcblxcdH1cXG59XCIsXCJkZXNjXCI6XCIg5ZyoaXVhcOWtl+espuW6k++8jGB0eXBlYOWPguaVsOWAvOWdh+S7pS3liIbpmpTjgIJcIn1dXG5cblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGV4YW1wbGUsIGNvZGUsIGRlc2MgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY2FyZXQgPSB0aGlzLnN0YXRlLm9wZW4gPyBDQVJFVFVQIDogQ0FSRVQ7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdGF0ZS5vcGVuID8gXCLpmpDol4/ku6PnoIFcIiA6IFwi5p+l55yL5Luj56CBXCI7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gKFxuICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cImJsb2NrXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgICAgICAgICB7IGNhcmV0IH1cbiAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPGgzPnsgdGl0bGUgfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+eyBkZXNjIH08L3A+XG4gICAgICAgICAgICAgICAgPFBhbmVsIGNvbGxhcHNpYmxlIGV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuIH0gY29sb3JzPSdib3JkZXJlZCcgaGVhZGVyPXsgZXhhbXBsZSB9IGZvb3Rlcj17Zm9vdGVyfSBmb290ZXJTdHlsZSA9IHt7cGFkZGluZzogMCxib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwifX0gPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlIGNsYXNzTmFtZT1cImhsanMgamF2YXNjcmlwdFwiPnsgY29kZSB9PC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgRGVtb0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtEZW1vQXJyYXkubWFwKChjaGlsZCxpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vIGV4YW1wbGU9IHtjaGlsZC5leGFtcGxlfSB0aXRsZT0ge2NoaWxkLnRpdGxlfSBjb2RlPSB7Y2hpbGQuY29kZX0gZGVzYz0ge2NoaWxkLmRlc2N9IGtleT0ge2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8RGVtb0dyb3VwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW5wZXJCZWVEZW1vJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRlbW8vaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNvbiA9IGV4cG9ydHMuUm93ID0gZXhwb3J0cy5Db2wgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sMiA9IHJlcXVpcmUoJy4vQ29sJyk7XG5cbnZhciBfQ29sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbDIpO1xuXG52YXIgX1JvdzIgPSByZXF1aXJlKCcuL1JvdycpO1xuXG52YXIgX1JvdzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cyKTtcblxudmFyIF9MYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xuXG52YXIgX0xheW91dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MYXlvdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0cy5Db2wgPSBfQ29sM1tcImRlZmF1bHRcIl07XG5leHBvcnRzLlJvdyA9IF9Sb3czW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuQ29uID0gX0xheW91dDJbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtbGF5b3V0L2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogeHPmmL7npLrliJfmlbBcbiAgICovXG4gIHhzOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5pi+56S65YiX5pWwXG4gICAqL1xuICBzbTogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOaYvuekuuWIl+aVsFxuICAgKi9cbiAgbWQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGfmmL7npLrliJfmlbBcbiAgICovXG4gIGxnOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHhz5YGP56e75YiX5pWwXG4gICAqL1xuICB4c09mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeWBj+enu+WIl+aVsFxuICAgKi9cbiAgc21PZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTlgY/np7vliJfmlbBcbiAgICovXG4gIG1kT2Zmc2V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5YGP56e75YiX5pWwXG4gICAqL1xuICBsZ09mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB4c+WPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgeHNQdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICBzbVB1c2g6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTlj7PlgY/np7vliJfmlbBcbiAgICovXG4gIG1kUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+WPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgbGdQdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHhz5bem5YGP56e75YiX5pWwXG4gICAqL1xuICB4c1B1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc23lt6blgY/np7vliJfmlbBcbiAgICovXG4gIHNtUHVsbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOW3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgbWRQdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5bem5YGP56e75YiX5pWwXG4gICAqL1xuICBsZ1B1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2Rpdidcbn07XG5cbnZhciBjbHNQcmVmaXggPSAndS1jb2wnO1xuXG52YXIgREVWSUNFX1NJWkVTID0gWydsZycsICdtZCcsICdzbScsICd4cyddO1xuXG52YXIgQ29sID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2wpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgQ29tcG9uZW50ID0gX3Byb3BzLmNvbXBvbmVudENsYXNzO1xuICAgIHZhciBjbGFzc2VzID0gX3Byb3BzLmNsYXNzZXM7XG5cbiAgICB2YXIgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnRDbGFzcycsICdjbGFzc2VzJ10pO1xuXG4gICAgdmFyIHRiQ2xhc3MgPSBbXTtcbiAgICAvKipcbiAgICAgKiDlr7nkvKDlhaVwcm9wc+WBmuagt+W8j+i9rOWMllxuICAgICAqIEB0eXBlIHtbdHlwZV19XG4gICAgICovXG4gICAgREVWSUNFX1NJWkVTLmZvckVhY2goZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgIGZ1bmN0aW9uIHBvcFByb3AocHJvcFN1ZmZpeCwgbW9kaWZpZXIpIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gJycgKyBzaXplICsgcHJvcFN1ZmZpeDtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IG90aGVyc1twcm9wTmFtZV07XG5cbiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSB1bmRlZmluZWQgJiYgcHJvcFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0YkNsYXNzLnB1c2goY2xzUHJlZml4ICsgJy0nICsgc2l6ZSArIG1vZGlmaWVyICsgJy0nICsgcHJvcFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBvdGhlcnNbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgICBwb3BQcm9wKCcnLCAnJyk7XG4gICAgICBwb3BQcm9wKCdPZmZzZXQnLCAnLW9mZnNldCcpO1xuICAgICAgcG9wUHJvcCgnUHVzaCcsICctcHVzaCcpO1xuICAgICAgcG9wUHJvcCgnUHVsbCcsICctcHVsbCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRiQ2xhc3MsIGNsYXNzZXMpXG4gICAgICB9LCBvdGhlcnMpLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG59O1xuXG52YXIgY2xzUHJlZml4ID0gJ3Utcm93JztcblxudmFyIFJvdyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm93KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUm93LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnRDbGFzcztcbiAgICB2YXIgY2xhc3NlcyA9IF9wcm9wcy5jbGFzc2VzO1xuXG4gICAgdmFyIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50Q2xhc3MnLCAnY2xhc3NlcyddKTtcblxuICAgIHZhciBic2NsYXNzID0gJycgKyBjbHNQcmVmaXg7XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCBvdGhlcnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoYnNjbGFzcywgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFJvdztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJvdy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Sb3cuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJvdztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtbGF5b3V0L2J1aWxkL1Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcclxuICAgKiBBZGRzIGBjb250YWluZXItZmx1aWRgIGNsYXNzLlxyXG4gICAqL1xuICBmbHVpZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAvKipcclxuICAgKiBZb3UgY2FuIHVzZSBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudFxyXG4gICAqL1xuICBjb21wb25lbnRDbGFzczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5lbGVtZW50LCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXSlcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiAnZGl2JyxcbiAgZmx1aWQ6IGZhbHNlXG59O1xuXG52YXIgY2xzUHJlZml4ID0gJ3UtY29udGFpbmVyJztcblxudmFyIENvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90YmNsYXNzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZsdWlkID0gX3Byb3BzLmZsdWlkO1xuICAgIHZhciBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSBfcHJvcHMuY2xhc3NlcztcblxuICAgIHZhciBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2ZsdWlkJywgJ2NvbXBvbmVudENsYXNzJywgJ2NsYXNzZXMnXSk7XG5cbiAgICB2YXIgdGJjbGFzcyA9IChfdGJjbGFzcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3RiY2xhc3MsICcnICsgY2xzUHJlZml4LCAhZmx1aWQpLCBfZGVmaW5lUHJvcGVydHkoX3RiY2xhc3MsIGNsc1ByZWZpeCArICctZmx1aWQnLCBmbHVpZCksIF90YmNsYXNzKTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSh0YmNsYXNzLCBjbGFzc2VzKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ29uO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Db24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ29uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWxheW91dC9idWlsZC9MYXlvdXQuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QYW5lbEdyb3VwID0gZXhwb3J0cy5QYW5lbCA9IHVuZGVmaW5lZDtcblxudmFyIF9QYW5lbDIgPSByZXF1aXJlKCcuL1BhbmVsJyk7XG5cbnZhciBfUGFuZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWwyKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IHJlcXVpcmUoJy4vUGFuZWxHcm91cCcpO1xuXG52YXIgX1BhbmVsR3JvdXAzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWxHcm91cDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0cy5QYW5lbCA9IF9QYW5lbDNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5QYW5lbEdyb3VwID0gX1BhbmVsR3JvdXAzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXBhbmVsL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9iZWVUcmFuc2l0aW9uID0gcmVxdWlyZSgnYmVlLXRyYW5zaXRpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8v5piv5ZCm5re75Yqg5oqY5Y+gXG4gIGNvbGxhcHNpYmxlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcbiAgb25TZWxlY3Q6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvL+WktOmDqOe7hOS7tlxuICBoZWFkZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ub2RlLFxuICBoZWFkZXJTdHlsZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9iamVjdCxcbiAgaWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVhZGVyQ29udGVudDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8vZm9vdGVy57uE5Lu2XG4gIGZvb3RlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm5vZGUsXG4gIGZvb3RlclN0eWxlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub2JqZWN0LFxuICAvL+m7mOiupOaYr+WQpuaJk+W8gFxuICBkZWZhdWx0RXhwYW5kZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+aYr+WQpuaJk+W8gFxuICBleHBhbmRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8v5q+P5LiqcGFuZWznmoTmoIforrBcbiAgZXZlbnRLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIGhlYWRlclJvbGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gIHBhbmVsUm9sZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgLy/popzoibJcbiAgY29sb3JzOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ2FjY2VudCcsICdzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInLCAnZGVmYXVsdCcsICdib3JkZXJlZCddKSxcblxuICAvLyBGcm9tIENvbGxhcHNlLueahOaJqeWxleWKqOeUu1xuICBvbkVudGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25FbnRlcmluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW50ZXJlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdGluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdEV4cGFuZGVkOiBmYWxzZSxcbiAgY2xzUHJlZml4OiBcInUtcGFuZWxcIixcbiAgY29sb3JzOiBcImRlZmF1bHRcIlxufTtcblxudmFyIFBhbmVsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhbmVsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lbChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrVGl0bGUgPSBfdGhpcy5oYW5kbGVDbGlja1RpdGxlLmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogX3RoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvL+WktOmDqOeCueWHu+S6i+S7tlxuXG5cbiAgUGFuZWwucHJvdG90eXBlLmhhbmRsZUNsaWNrVGl0bGUgPSBmdW5jdGlvbiBoYW5kbGVDbGlja1RpdGxlKGUpIHtcbiAgICAvLyDkuI3orqnkuovku7bov5vlhaXkuovku7bmsaBcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8v5riy5p+TcGFuZWxoZWFkZXJcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiByZW5kZXJIZWFkZXIoY29sbGFwc2libGUsIGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkLCBjbHNQcmVmaXgpIHtcbiAgICB2YXIgdGl0bGVDbGFzc05hbWUgPSBjbHNQcmVmaXggKyAnLXRpdGxlJztcblxuICAgIGlmICghY29sbGFwc2libGUpIHtcbiAgICAgIGlmICghX3JlYWN0MltcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQoaGVhZGVyKSkge1xuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXIucHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNsYXNzTmFtZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghX3JlYWN0MltcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQoaGVhZGVyKSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgIHsgcm9sZTogJ3ByZXNlbnRhdGlvbicsIGNsYXNzTmFtZTogdGl0bGVDbGFzc05hbWUgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLCBpZCwgcm9sZSwgZXhwYW5kZWQpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oZWFkZXJDb250ZW50KSB7XG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXIucHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNsYXNzTmFtZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXIucHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNsYXNzTmFtZSksXG4gICAgICBjaGlsZHJlbjogdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLnByb3BzLmNoaWxkcmVuLCBpZCwgcm9sZSwgZXhwYW5kZWQpXG4gICAgfSk7XG4gIH07XG5cbiAgLy/lpoLmnpzkvb/nlKjpk77mjqXvvIzmuLLmn5PkuLph5qCH562+XG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVyQW5jaG9yID0gZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIGhyZWY6IGlkICYmICcjJyArIGlkLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrVGl0bGUsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogaWQsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogZXhwYW5kZWQsXG4gICAgICAgICdhcmlhLXNlbGVjdGVkJzogZXhwYW5kZWQsXG4gICAgICAgIGNsYXNzTmFtZTogZXhwYW5kZWQgPyBudWxsIDogJ2NvbGxhcHNlZCdcbiAgICAgIH0sXG4gICAgICBoZWFkZXJcbiAgICApO1xuICB9O1xuXG4gIC8v5aaC5p6c5pyJ5oqY5Y+g5Yqo55S777yM5riy5p+T5oqY5Y+g5Yqo55S7XG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVyQ29sbGFwc2libGVCb2R5ID0gZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVCb2R5KGlkLCBleHBhbmRlZCwgcm9sZSwgY2hpbGRyZW4sIGNsc1ByZWZpeCwgYW5pbWF0aW9uSG9va3MpIHtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIF9iZWVUcmFuc2l0aW9uLkNvbGxhcHNlLFxuICAgICAgX2V4dGVuZHMoeyAnaW4nOiBleHBhbmRlZCB9LCBhbmltYXRpb25Ib29rcyksXG4gICAgICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xzUHJlZml4ICsgJy1jb2xsYXBzZScsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogIWV4cGFuZGVkXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucmVuZGVyQm9keShjaGlsZHJlbiwgY2xzUHJlZml4KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgLy/muLLmn5NwYW5lbGJvZHlcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJCb2R5ID0gZnVuY3Rpb24gcmVuZGVyQm9keShyYXdDaGlsZHJlbiwgY2xzUHJlZml4KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgdmFyIGJvZHlDaGlsZHJlbiA9IFtdO1xuXG4gICAgdmFyIGJvZHlDbGFzc05hbWUgPSBjbHNQcmVmaXggKyAnLWJvZHknO1xuXG4gICAgLy/mt7vliqDliLBib2R555qEY2hpbGRyZW7kuK1cbiAgICBmdW5jdGlvbiBtYXliZUFkZEJvZHkoKSB7XG4gICAgICBpZiAoIWJvZHlDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyDnu5nlrZDnu4Tku7bmt7vliqBrZXnvvIzkuLrkuobkuYvlkI7op6blj5Hkuovku7bml7bkvb/nlKhcbiAgICAgIGNoaWxkcmVuLnB1c2goX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsga2V5OiBjaGlsZHJlbi5sZW5ndGgsIGNsYXNzTmFtZTogYm9keUNsYXNzTmFtZSB9LFxuICAgICAgICBib2R5Q2hpbGRyZW5cbiAgICAgICkpO1xuXG4gICAgICBib2R5Q2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvL+i9rOaNouS4uuaVsOe7hO+8jOaWueS+v+WkjeeUqFxuICAgIF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLnRvQXJyYXkocmF3Q2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoX3JlYWN0MltcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnByb3BzLmZpbGwpIHtcbiAgICAgICAgbWF5YmVBZGRCb2R5KCk7XG5cbiAgICAgICAgLy/lsIbmoIfnpLpmaWxs6K6+572u5Li6dW5kZWZpbmVkXG4gICAgICAgIGNoaWxkcmVuLnB1c2goKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7IGZpbGw6IHVuZGVmaW5lZCB9KSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBib2R5Q2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfSk7XG5cbiAgICBtYXliZUFkZEJvZHkoKTtcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfTtcblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjb2xsYXBzaWJsZSA9IF9wcm9wcy5jb2xsYXBzaWJsZTtcbiAgICB2YXIgaGVhZGVyID0gX3Byb3BzLmhlYWRlcjtcbiAgICB2YXIgaWQgPSBfcHJvcHMuaWQ7XG4gICAgdmFyIGZvb3RlciA9IF9wcm9wcy5mb290ZXI7XG4gICAgdmFyIHByb3BzRXhwYW5kZWQgPSBfcHJvcHMuZXhwYW5kZWQ7XG4gICAgdmFyIGZvb3RlclN0eWxlID0gX3Byb3BzLmZvb3RlclN0eWxlO1xuICAgIHZhciBoZWFkZXJTdHlsZSA9IF9wcm9wcy5oZWFkZXJTdHlsZTtcbiAgICB2YXIgaGVhZGVyUm9sZSA9IF9wcm9wcy5oZWFkZXJSb2xlO1xuICAgIHZhciBwYW5lbFJvbGUgPSBfcHJvcHMucGFuZWxSb2xlO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjb2xvcnMgPSBfcHJvcHMuY29sb3JzO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgb25FbnRlciA9IF9wcm9wcy5vbkVudGVyO1xuICAgIHZhciBvbkVudGVyaW5nID0gX3Byb3BzLm9uRW50ZXJpbmc7XG4gICAgdmFyIG9uRW50ZXJlZCA9IF9wcm9wcy5vbkVudGVyZWQ7XG4gICAgdmFyIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXg7XG4gICAgdmFyIG9uRXhpdCA9IF9wcm9wcy5vbkV4aXQ7XG4gICAgdmFyIG9uRXhpdGluZyA9IF9wcm9wcy5vbkV4aXRpbmc7XG4gICAgdmFyIG9uRXhpdGVkID0gX3Byb3BzLm9uRXhpdGVkO1xuICAgIHZhciBkZWZhdWx0RXhwYW5kZWQgPSBfcHJvcHMuZGVmYXVsdEV4cGFuZGVkO1xuICAgIHZhciBldmVudEtleSA9IF9wcm9wcy5ldmVudEtleTtcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3Q7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbGxhcHNpYmxlJywgJ2hlYWRlcicsICdpZCcsICdmb290ZXInLCAnZXhwYW5kZWQnLCAnZm9vdGVyU3R5bGUnLCAnaGVhZGVyU3R5bGUnLCAnaGVhZGVyUm9sZScsICdwYW5lbFJvbGUnLCAnY2xhc3NOYW1lJywgJ2NvbG9ycycsICdjaGlsZHJlbicsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ2Nsc1ByZWZpeCcsICdvbkV4aXQnLCAnb25FeGl0aW5nJywgJ29uRXhpdGVkJywgJ2RlZmF1bHRFeHBhbmRlZCcsICdldmVudEtleScsICdvblNlbGVjdCddKTtcblxuICAgIHZhciBleHBhbmRlZCA9IHByb3BzRXhwYW5kZWQgIT0gbnVsbCA/IHByb3BzRXhwYW5kZWQgOiB0aGlzLnN0YXRlLmV4cGFuZGVkO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzWycnICsgY2xzUHJlZml4XSA9IHRydWU7XG4gICAgY2xhc3Nlc1tjbHNQcmVmaXggKyAnLScgKyBjb2xvcnNdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgaWQ6IGNvbGxhcHNpYmxlID8gbnVsbCA6IGlkXG4gICAgICB9KSxcbiAgICAgIGhlYWRlciAmJiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsc1ByZWZpeCArICctaGVhZGluZycsIHN0eWxlOiBoZWFkZXJTdHlsZSB9LFxuICAgICAgICB0aGlzLnJlbmRlckhlYWRlcihjb2xsYXBzaWJsZSwgaGVhZGVyLCBpZCwgaGVhZGVyUm9sZSwgZXhwYW5kZWQsIGNsc1ByZWZpeClcbiAgICAgICksXG4gICAgICBjb2xsYXBzaWJsZSA/IHRoaXMucmVuZGVyQ29sbGFwc2libGVCb2R5KGlkLCBleHBhbmRlZCwgcGFuZWxSb2xlLCBjaGlsZHJlbiwgY2xzUHJlZml4LCB7IG9uRW50ZXI6IG9uRW50ZXIsIG9uRW50ZXJpbmc6IG9uRW50ZXJpbmcsIG9uRW50ZXJlZDogb25FbnRlcmVkLCBvbkV4aXQ6IG9uRXhpdCwgb25FeGl0aW5nOiBvbkV4aXRpbmcsIG9uRXhpdGVkOiBvbkV4aXRlZCB9KSA6IHRoaXMucmVuZGVyQm9keShjaGlsZHJlbiwgY2xzUHJlZml4KSxcbiAgICAgIGZvb3RlciAmJiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsc1ByZWZpeCArICctZm9vdGVyJywgc3R5bGU6IGZvb3RlclN0eWxlIH0sXG4gICAgICAgIGZvb3RlclxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBhbmVsO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5QYW5lbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5QYW5lbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGFuZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXBhbmVsL2J1aWxkL1BhbmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRmFkZSA9IGV4cG9ydHMuQ29sbGFwc2UgPSBleHBvcnRzLlRyYW5zaXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24yKTtcblxudmFyIF9Db2xsYXBzZTIgPSByZXF1aXJlKCcuL0NvbGxhcHNlJyk7XG5cbnZhciBfQ29sbGFwc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2UyKTtcblxudmFyIF9GYWRlMiA9IHJlcXVpcmUoJy4vRmFkZScpO1xuXG52YXIgX0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFkZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0cy5UcmFuc2l0aW9uID0gX1RyYW5zaXRpb24zW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuQ29sbGFwc2UgPSBfQ29sbGFwc2UzW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuRmFkZSA9IF9GYWRlM1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRVhJVElORyA9IGV4cG9ydHMuRU5URVJFRCA9IGV4cG9ydHMuRU5URVJJTkcgPSBleHBvcnRzLkVYSVRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcGVydGllcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcycpO1xuXG52YXIgX3Byb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcGVydGllcyk7XG5cbnZhciBfb24gPSByZXF1aXJlKCdkb20taGVscGVycy9ldmVudHMvb24nKTtcblxudmFyIF9vbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9IF9wcm9wZXJ0aWVzMltcImRlZmF1bHRcIl0uZW5kO1xuXG4vL+iuvue9rueKtuaAgeeggVxudmFyIFVOTU9VTlRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gMDtcbnZhciBFWElURUQgPSBleHBvcnRzLkVYSVRFRCA9IDE7XG52YXIgRU5URVJJTkcgPSBleHBvcnRzLkVOVEVSSU5HID0gMjtcbnZhciBFTlRFUkVEID0gZXhwb3J0cy5FTlRFUkVEID0gMztcbnZhciBFWElUSU5HID0gZXhwb3J0cy5FWElUSU5HID0gNDtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpuinpuWPkeWKqOeUu1xuICAgKi9cbiAgXCJpblwiOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIOS4jeaYvuekuueahOaXtuWAmeaYr+WQpuenu+mZpOe7hOS7tlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiDlpoLmnpzorr7nva7kuLrpu5jorqTmmL7npLrvvIzmjILovb3ml7bmmL7npLrliqjnlLtcbiAgICovXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICog6K6+572u6LaF5pe25pe26Ze077yM6Ziy5q2i5Ye6546w6Zeu6aKY77yM5Y+v6K6+572u5Li6Pj3liqjnlLvml7bpl7RcbiAgICovXG4gIHRpbWVvdXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiDpgIDlh7rnu4Tku7bml7bmt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZXhpdGVkQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOmAgOWHuue7hOS7tuS4rea3u+WKoOeahGNsYXNzXG4gICAqL1xuICBleGl0aW5nQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+WQjua3u+WKoOeahGNsYXNzXG4gICAqL1xuICBlbnRlcmVkQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+aXtua3u+WKoOeahGNsYXNzXG4gICAqL1xuICBlbnRlcmluZ0NsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+W8gOWni+aXtueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FbnRlcjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75Lit55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvlkI7nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75byA5aeL5pe255qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmAgOWHuuWKqOeUu+S4reeahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FeGl0aW5nOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpgIDlh7rliqjnlLvlkI7nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRXhpdGVkOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBcImluXCI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIHRpbWVvdXQ6IDUwMDAsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuXG4vKipcbiAqIOWKqOeUu+e7hOS7tlxuICovXG5cbnZhciBUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyYW5zaXRpb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIHZhciBpbml0aWFsU3RhdHVzID0gdm9pZCAwO1xuICAgIGlmIChwcm9wc1tcImluXCJdKSB7XG4gICAgICAvLyDlnKhjb21wb25lbnRkaWRtb3VudOaXtuW8gOWni+aJp+ihjOWKqOeUu1xuICAgICAgaW5pdGlhbFN0YXR1cyA9IHByb3BzLnRyYW5zaXRpb25BcHBlYXIgPyBFWElURUQgOiBFTlRFUkVEO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0aWFsU3RhdHVzID0gcHJvcHMudW5tb3VudE9uRXhpdCA/IFVOTU9VTlRFRCA6IEVYSVRFRDtcbiAgICB9XG4gICAgX3RoaXMuc3RhdGUgPSB7IHN0YXR1czogaW5pdGlhbFN0YXR1cyB9O1xuXG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyYW5zaXRpb25BcHBlYXIgJiYgdGhpcy5wcm9wc1tcImluXCJdKSB7XG4gICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wc1tcImluXCJdICYmIHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgICAgLy8g5ZyoY29tcG9uZW50RGlkVXBkYXRl5omn6KGM5Yqo55S7LlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIC8vIOW9k+S9v+eUqHVubW91bnRPbkV4aXTml7bvvIxleGl0ZWTkuLpleGl0aW5n5ZKMdW5tb25055qE6L+H5rih54q25oCBXG4gICAgICBpZiAodGhpcy5wcm9wc1tcImluXCJdKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogVU5NT1VOVEVEIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g56Gu5L+d5Y+q5ZON5bqUcHJvcOWPmOWMllxuICAgIGlmICh0aGlzLl9uZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5fbmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMucHJvcHNbXCJpblwiXSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFWElUSU5HKSB7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlhbbku5bvvIzlvZPmiJHku6zlt7Lnu4/ovpPlhaXmiJbovpPlh7pcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUV4aXQodGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5oiR5Lus5bey57uP6L6T5YWl5oiW6L6T5Ye65a6M5oiQXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIC8vIOi/memHjOaOpeaUtuaWsHByb3BzXG4gICAgcHJvcHMub25FbnRlcihub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUklORyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlKTtcblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSRUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChwcm9wcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTJbXCJkZWZhdWx0XCJdLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgcHJvcHMub25FeGl0KG5vZGUpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIOehruS/neWcqOe7hOS7tumUgOavgeWQjuaMgui1t+eahHNldFN0YXRl6KKr5raI6ZmkXG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICAoMCwgX29uMltcImRlZmF1bHRcIl0pKG5vZGUsIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGhpcy5wcm9wcy50aW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgT2JqZWN0LmtleXMoVHJhbnNpdGlvbi5wcm9wVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGRlbGV0ZSBjaGlsZFByb3BzW2tleV07XG4gICAgfSk7XG5cbiAgICB2YXIgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHZvaWQgMDtcbiAgICBpZiAoc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4aXRlZENsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmVudGVyaW5nQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5lbnRlcmVkQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFWElUSU5HKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leGl0aW5nQ2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoY2hpbGQsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSwgdHJhbnNpdGlvbkNsYXNzTmFtZSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xudmFyIHByZWZpeCA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkVuZCA9IHZvaWQgMDtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdm9pZCAwO1xudmFyIGFuaW1hdGlvbk5hbWUgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uVGltaW5nID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkRlbGF5ID0gdm9pZCAwO1xuXG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIHZhciBfZ2V0VHJhbnNpdGlvblByb3BlcnQgPSBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpO1xuXG4gIHByZWZpeCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5wcmVmaXg7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQudHJhbnNpdGlvbkVuZDtcbiAgZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQuYW5pbWF0aW9uRW5kO1xuXG5cbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyAnLScgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJztcblxuICBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lID0gcHJlZml4ICsgJy1hbmltYXRpb24tbmFtZSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbiA9IHByZWZpeCArICctYW5pbWF0aW9uLWR1cmF0aW9uJztcbiAgZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSA9IHByZWZpeCArICctYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbic7XG59XG5cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uVGltaW5nO1xuZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXk7XG5leHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG5leHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lO1xuZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmc7XG5leHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbkVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCkge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcblxuICB2YXIgdmVuZG9yTWFwID0ge1xuICAgIE86IGZ1bmN0aW9uIE8oZSkge1xuICAgICAgcmV0dXJuICdvJyArIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIE1vejogZnVuY3Rpb24gTW96KGUpIHtcbiAgICAgIHJldHVybiAnbW96JyArIGU7XG4gICAgfSxcbiAgICBXZWJraXQ6IGZ1bmN0aW9uIFdlYmtpdChlKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdCcgKyBlO1xuICAgIH0sXG4gICAgbXM6IGZ1bmN0aW9uIG1zKGUpIHtcbiAgICAgIHJldHVybiAnTVMnICsgZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlbmRvcnMgPSBPYmplY3Qua2V5cyh2ZW5kb3JNYXApO1xuXG4gIHZhciB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgICAgYW5pbWF0aW9uRW5kID0gdm9pZCAwO1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZlbmRvciA9IHZlbmRvcnNbaV07XG5cbiAgICBpZiAodmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHtcbiAgICAgIHByZWZpeCA9ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNpdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBhbmltYXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnQW5pbWF0aW9uRW5kJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIXRyYW5zaXRpb25FbmQgJiYgJ3RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgaWYgKCFhbmltYXRpb25FbmQgJiYgJ2FuaW1hdGlvbk5hbWUnIGluIHN0eWxlKSB0cmFuc2l0aW9uRW5kID0gJ2FuaW1hdGlvbmVuZCc7XG5cbiAgc3R5bGUgPSBudWxsO1xuXG4gIHJldHVybiB7IGFuaW1hdGlvbkVuZDogYW5pbWF0aW9uRW5kLCB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLCBwcmVmaXg6IHByZWZpeCB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG9uID0gZnVuY3Rpb24gb24oKSB7fTtcbmlmIChfaW5ET00yLmRlZmF1bHQpIHtcbiAgb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9O2Vsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgcmV0dXJuIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0ID0gbm9kZTtcbiAgICAgICAgaGFuZGxlci5jYWxsKG5vZGUsIGUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9ldmVudHMvb24uanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfc3R5bGUgPSByZXF1aXJlKCdkb20taGVscGVycy9zdHlsZScpO1xuXG52YXIgX3N0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgX2NhcGl0YWxpemUgPSByZXF1aXJlKCcuL3V0aWwvY2FwaXRhbGl6ZScpO1xuXG52YXIgX2NhcGl0YWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZSk7XG5cbnZhciBfdGlucGVyQmVlQ29yZSA9IHJlcXVpcmUoJ3RpbnBlci1iZWUtY29yZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIE1BUkdJTlMgPSB7XG4gIGhlaWdodDogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHdpZHRoOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXVxufTtcblxuLy8gcmVhZGluZyBhIGRpbWVuc2lvbiBwcm9wIHdpbGwgY2F1c2UgdGhlIGJyb3dzZXIgdG8gcmVjYWxjdWxhdGUsXG4vLyB3aGljaCB3aWxsIGxldCBvdXIgYW5pbWF0aW9ucyB3b3JrXG5mdW5jdGlvbiB0cmlnZ2VyQnJvd3NlclJlZmxvdyhub2RlKSB7XG4gIG5vZGUub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25WYWx1ZShkaW1lbnNpb24sIGVsZW0pIHtcbiAgdmFyIHZhbHVlID0gZWxlbVsnb2Zmc2V0JyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXTtcbiAgdmFyIG1hcmdpbnMgPSBNQVJHSU5TW2RpbWVuc2lvbl07XG5cbiAgcmV0dXJuIHZhbHVlICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzBdKSwgMTApICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzFdKSwgMTApO1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcclxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBleHBhbmQgb3IgY29sbGFwc2UgYW5pbWF0aW9uXHJcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGNvbGxhcHNlZFxyXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBSdW4gdGhlIGV4cGFuZCBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XHJcbiAgICogc2hvd25cclxuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogRHVyYXRpb24gb2YgdGhlIGNvbGxhcHNlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsIHRvIGVuc3VyZSB0aGF0XHJcbiAgICogZmluaXNoaW5nIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZFxyXG4gICAqIGV2ZW50cyBhcmUgY2FuY2VsZWRcclxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBleHBhbmRzXHJcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBleHBhbmRcclxuICAgKi9cbiAgb25FbnRlcmluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGV4cGFuZGVkXHJcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGNvbGxhcHNlc1xyXG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBjb2xsYXBzZVxyXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBjb2xsYXBzZWRcclxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBkaW1lbnNpb24gdXNlZCB3aGVuIGNvbGxhcHNpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxyXG4gICAqIGRpbWVuc2lvblxyXG4gICAqXHJcbiAgICogX05vdGU6IEJvb3RzdHJhcCBvbmx5IHBhcnRpYWxseSBzdXBwb3J0cyAnd2lkdGgnIVxyXG4gICAqIFlvdSB3aWxsIG5lZWQgdG8gc3VwcGx5IHlvdXIgb3duIENTUyBhbmltYXRpb24gZm9yIHRoZSBgLndpZHRoYCBDU1MgY2xhc3MuX1xyXG4gICAqL1xuICBkaW1lbnNpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZihbJ2hlaWdodCcsICd3aWR0aCddKSwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGhlaWdodCBvciB3aWR0aCBvZiB0aGUgYW5pbWF0aW5nIERPTSBub2RlXHJcbiAgICpcclxuICAgKiBBbGxvd3MgZm9yIHByb3ZpZGluZyBzb21lIGN1c3RvbSBsb2dpYyBmb3IgaG93IG11Y2ggdGhlIENvbGxhcHNlIGNvbXBvbmVudFxyXG4gICAqIHNob3VsZCBhbmltYXRlIGluIGl0cyBzcGVjaWZpZWQgZGltZW5zaW9uLiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudFxyXG4gICAqIGRpbWVuc2lvbiBwcm9wIHZhbHVlIGFuZCB0aGUgRE9NIG5vZGUuXHJcbiAgICovXG4gIGdldERpbWVuc2lvblZhbHVlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcclxuICAgKiBBUklBIHJvbGUgb2YgY29sbGFwc2libGUgZWxlbWVudFxyXG4gICAqL1xuICByb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBcImluXCI6IGZhbHNlLFxuICB0aW1lb3V0OiAzMDAsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcblxuICBkaW1lbnNpb246ICdoZWlnaHQnLFxuICBnZXREaW1lbnNpb25WYWx1ZTogZ2V0RGltZW5zaW9uVmFsdWVcbn07XG5cbnZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2xsYXBzZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sbGFwc2UocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGFwc2UpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlciA9IF90aGlzLmhhbmRsZUVudGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gX3RoaXMuaGFuZGxlRW50ZXJpbmcuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IF90aGlzLmhhbmRsZUVudGVyZWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRXhpdCA9IF90aGlzLmhhbmRsZUV4aXQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IF90aGlzLmhhbmRsZUV4aXRpbmcuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyogLS0gRXhwYW5kaW5nIC0tICovXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2dldFNjcm9sbERpbWVuc2lvblZhbHVlKGVsZW0sIGRpbWVuc2lvbik7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmVkKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gbnVsbDtcbiAgfTtcblxuICAvKiAtLSBDb2xsYXBzaW5nIC0tICovXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRXhpdCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLnByb3BzLmdldERpbWVuc2lvblZhbHVlKGRpbWVuc2lvbiwgZWxlbSkgKyAncHgnO1xuICAgIHRyaWdnZXJCcm93c2VyUmVmbG93KGVsZW0pO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gaGFuZGxlRXhpdGluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuX2RpbWVuc2lvbiA9IGZ1bmN0aW9uIF9kaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLmRpbWVuc2lvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuZGltZW5zaW9uKCkgOiB0aGlzLnByb3BzLmRpbWVuc2lvbjtcbiAgfTtcblxuICAvLyBmb3IgdGVzdGluZ1xuXG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLl9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZSA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZShlbGVtLCBkaW1lbnNpb24pIHtcbiAgICByZXR1cm4gZWxlbVsnc2Nyb2xsJyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXSArICdweCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25FbnRlciA9IF9wcm9wcy5vbkVudGVyO1xuICAgIHZhciBvbkVudGVyaW5nID0gX3Byb3BzLm9uRW50ZXJpbmc7XG4gICAgdmFyIG9uRW50ZXJlZCA9IF9wcm9wcy5vbkVudGVyZWQ7XG4gICAgdmFyIG9uRXhpdCA9IF9wcm9wcy5vbkV4aXQ7XG4gICAgdmFyIG9uRXhpdGluZyA9IF9wcm9wcy5vbkV4aXRpbmc7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ29uRW50ZXInLCAnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdjbGFzc05hbWUnXSk7XG5cbiAgICBkZWxldGUgcHJvcHMuZGltZW5zaW9uO1xuICAgIGRlbGV0ZSBwcm9wcy5nZXREaW1lbnNpb25WYWx1ZTtcblxuICAgIHZhciBoYW5kbGVFbnRlciA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRW50ZXIsIG9uRW50ZXIpO1xuICAgIHZhciBoYW5kbGVFbnRlcmluZyA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRW50ZXJpbmcsIG9uRW50ZXJpbmcpO1xuICAgIHZhciBoYW5kbGVFbnRlcmVkID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlcmVkLCBvbkVudGVyZWQpO1xuICAgIHZhciBoYW5kbGVFeGl0ID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFeGl0LCBvbkV4aXQpO1xuICAgIHZhciBoYW5kbGVFeGl0aW5nID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFeGl0aW5nLCBvbkV4aXRpbmcpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5fZGltZW5zaW9uKCkgPT09ICd3aWR0aCdcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAnYXJpYS1leHBhbmRlZCc6IHByb3BzLnJvbGUgPyBwcm9wc1tcImluXCJdIDogbnVsbCxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICBleGl0ZWRDbGFzc05hbWU6ICdjb2xsYXBzZScsXG4gICAgICBleGl0aW5nQ2xhc3NOYW1lOiAnY29sbGFwc2luZycsXG4gICAgICBlbnRlcmVkQ2xhc3NOYW1lOiAnY29sbGFwc2UgaW4nLFxuICAgICAgZW50ZXJpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgICBvbkV4aXQ6IGhhbmRsZUV4aXQsXG4gICAgICBvbkV4aXRpbmc6IGhhbmRsZUV4aXRpbmdcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Db2xsYXBzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29sbGFwc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvQ29sbGFwc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0eWxlO1xuXG52YXIgX2NhbWVsaXplU3R5bGUgPSByZXF1aXJlKCcuLi91dGlsL2NhbWVsaXplU3R5bGUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGUpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbC9oeXBoZW5hdGVTdHlsZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlKTtcblxudmFyIF9nZXRDb21wdXRlZFN0eWxlMiA9IHJlcXVpcmUoJy4vZ2V0Q29tcHV0ZWRTdHlsZScpO1xuXG52YXIgX2dldENvbXB1dGVkU3R5bGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Q29tcHV0ZWRTdHlsZTIpO1xuXG52YXIgX3JlbW92ZVN0eWxlID0gcmVxdWlyZSgnLi9yZW1vdmVTdHlsZScpO1xuXG52YXIgX3JlbW92ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZVN0eWxlKTtcblxudmFyIF9wcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbi9wcm9wZXJ0aWVzJyk7XG5cbnZhciBfaXNUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uL2lzVHJhbnNmb3JtJyk7XG5cbnZhciBfaXNUcmFuc2Zvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHlsZShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIGNzcyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtcyA9ICcnO1xuICB2YXIgcHJvcHMgPSBwcm9wZXJ0eTtcblxuICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbm9kZS5zdHlsZVsoMCwgX2NhbWVsaXplU3R5bGUyLmRlZmF1bHQpKHByb3BlcnR5KV0gfHwgKDAsIF9nZXRDb21wdXRlZFN0eWxlMy5kZWZhdWx0KShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCgwLCBfaHlwaGVuYXRlU3R5bGUyLmRlZmF1bHQpKHByb3BlcnR5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChwcm9wcyA9IHt9KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICAoMCwgX3JlbW92ZVN0eWxlMi5kZWZhdWx0KShub2RlLCAoMCwgX2h5cGhlbmF0ZVN0eWxlMi5kZWZhdWx0KShrZXkpKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNUcmFuc2Zvcm0yLmRlZmF1bHQpKGtleSkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3MgKz0gKDAsIF9oeXBoZW5hdGVTdHlsZTIuZGVmYXVsdCkoa2V5KSArICc6ICcgKyB2YWx1ZSArICc7JztcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFuc2Zvcm1zKSB7XG4gICAgY3NzICs9IF9wcm9wZXJ0aWVzLnRyYW5zZm9ybSArICc6ICcgKyB0cmFuc2Zvcm1zICsgJzsnO1xuICB9XG5cbiAgbm9kZS5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGNzcztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9zdHlsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FtZWxpemVTdHlsZU5hbWU7XG5cbnZhciBfY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG5cbnZhciBfY2FtZWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbXNQYXR0ZXJuID0gL14tbXMtLzsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzJhZWI4YTJhNmJlYjAwNjE3YTQyMTdmN2Y4Mjg0OTI0ZmEyYWQ4MTkvc3JjL3ZlbmRvci9jb3JlL2NhbWVsaXplU3R5bGVOYW1lLmpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICovXG5mdW5jdGlvbiBjYW1lbGl6ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuICgwLCBfY2FtZWxpemUyLmRlZmF1bHQpKHN0cmluZy5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2NhbWVsaXplU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FtZWxpemU7XG52YXIgckh5cGhlbiA9IC8tKC4pL2c7XG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uockh5cGhlbiwgZnVuY3Rpb24gKF8sIGNocikge1xuICAgIHJldHVybiBjaHIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2NhbWVsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG5cbnZhciBfaHlwaGVuYXRlID0gcmVxdWlyZSgnLi9oeXBoZW5hdGUnKTtcblxudmFyIF9oeXBoZW5hdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1zUGF0dGVybiA9IC9ebXMtLzsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzJhZWI4YTJhNmJlYjAwNjE3YTQyMTdmN2Y4Mjg0OTI0ZmEyYWQ4MTkvc3JjL3ZlbmRvci9jb3JlL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuICgwLCBfaHlwaGVuYXRlMi5kZWZhdWx0KShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh5cGhlbmF0ZTtcblxudmFyIHJVcHBlciA9IC8oW0EtWl0pL2c7XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJVcHBlciwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9oeXBoZW5hdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9nZXRDb21wdXRlZFN0eWxlO1xuXG52YXIgX2NhbWVsaXplU3R5bGUgPSByZXF1aXJlKCcuLi91dGlsL2NhbWVsaXplU3R5bGUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcnBvc2l0aW9uID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIHJudW1ub25weCA9IC9eKFsrLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KSkoPyFweClbYS16JV0rJC9pO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignTm8gRWxlbWVudCBwYXNzZWQgdG8gYGdldENvbXB1dGVkU3R5bGUoKWAnKTtcbiAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudDtcblxuICByZXR1cm4gJ2RlZmF1bHRWaWV3JyBpbiBkb2MgPyBkb2MuZGVmYXVsdFZpZXcub3BlbmVyID8gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHtcbiAgICAvL2llIDggXCJtYWdpY1wiIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS4xMS1zdGFibGUvc3JjL2Nzcy9jdXJDU1MuanMjTDcyXG4gICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSB7XG4gICAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuXG4gICAgICBwcm9wID0gKDAsIF9jYW1lbGl6ZVN0eWxlMi5kZWZhdWx0KShwcm9wKTtcblxuICAgICAgaWYgKHByb3AgPT0gJ2Zsb2F0JykgcHJvcCA9ICdzdHlsZUZsb2F0JztcblxuICAgICAgdmFyIGN1cnJlbnQgPSBub2RlLmN1cnJlbnRTdHlsZVtwcm9wXSB8fCBudWxsO1xuXG4gICAgICBpZiAoY3VycmVudCA9PSBudWxsICYmIHN0eWxlICYmIHN0eWxlW3Byb3BdKSBjdXJyZW50ID0gc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChybnVtbm9ucHgudGVzdChjdXJyZW50KSAmJiAhcnBvc2l0aW9uLnRlc3QocHJvcCkpIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICB2YXIgbGVmdCA9IHN0eWxlLmxlZnQ7XG4gICAgICAgIHZhciBydW5TdHlsZSA9IG5vZGUucnVudGltZVN0eWxlO1xuICAgICAgICB2YXIgcnNMZWZ0ID0gcnVuU3R5bGUgJiYgcnVuU3R5bGUubGVmdDtcblxuICAgICAgICAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG4gICAgICAgIGlmIChyc0xlZnQpIHJ1blN0eWxlLmxlZnQgPSBub2RlLmN1cnJlbnRTdHlsZS5sZWZ0O1xuXG4gICAgICAgIHN0eWxlLmxlZnQgPSBwcm9wID09PSAnZm9udFNpemUnID8gJzFlbScgOiBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gc3R5bGUucGl4ZWxMZWZ0ICsgJ3B4JztcblxuICAgICAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgIHN0eWxlLmxlZnQgPSBsZWZ0O1xuICAgICAgICBpZiAocnNMZWZ0KSBydW5TdHlsZS5sZWZ0ID0gcnNMZWZ0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvc3R5bGUvZ2V0Q29tcHV0ZWRTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVtb3ZlU3R5bGU7XG5mdW5jdGlvbiByZW1vdmVTdHlsZShub2RlLCBrZXkpIHtcbiAgcmV0dXJuICdyZW1vdmVQcm9wZXJ0eScgaW4gbm9kZS5zdHlsZSA/IG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KSA6IG5vZGUuc3R5bGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvc3R5bGUvcmVtb3ZlU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNUcmFuc2Zvcm07XG52YXIgc3VwcG9ydGVkVHJhbnNmb3JtcyA9IC9eKCh0cmFuc2xhdGV8cm90YXRlfHNjYWxlKShYfFl8WnwzZCk/fG1hdHJpeCgzZCk/fHBlcnNwZWN0aXZlfHNrZXcoWHxZKT8pJC9pO1xuXG5mdW5jdGlvbiBpc1RyYW5zZm9ybShwcm9wZXJ0eSkge1xuICByZXR1cm4gISEocHJvcGVydHkgJiYgc3VwcG9ydGVkVHJhbnNmb3Jtcy50ZXN0KHByb3BlcnR5KSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy90cmFuc2l0aW9uL2lzVHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY2FwaXRhbGl6ZTtcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBcIlwiICsgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvdXRpbC9jYXBpdGFsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFsaWduID0gZXhwb3J0cy50b0FycmF5ID0gZXhwb3J0cy5jc3NBbmltYXRpb24gPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmNvbnRhaW5zID0gZXhwb3J0cy5LZXlDb2RlID0gZXhwb3J0cy5jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBleHBvcnRzLnNwbGl0Q29tcG9uZW50ID0gZXhwb3J0cy5pc1JlcXVpcmVkRm9yQTExeSA9IGV4cG9ydHMuZWxlbWVudFR5cGUgPSBleHBvcnRzLmRlcHJlY2F0ZWQgPSBleHBvcnRzLmNvbXBvbmVudE9yRWxlbWVudCA9IGV4cG9ydHMuYWxsID0gdW5kZWZpbmVkO1xuXG52YXIgX2FsbDIgPSByZXF1aXJlKCcuL2FsbCcpO1xuXG52YXIgX2FsbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbGwyKTtcblxudmFyIF9jb21wb25lbnRPckVsZW1lbnQyID0gcmVxdWlyZSgnLi9jb21wb25lbnRPckVsZW1lbnQnKTtcblxudmFyIF9jb21wb25lbnRPckVsZW1lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50T3JFbGVtZW50Mik7XG5cbnZhciBfZGVwcmVjYXRlZDIgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZWQnKTtcblxudmFyIF9kZXByZWNhdGVkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZWQyKTtcblxudmFyIF9lbGVtZW50VHlwZTIgPSByZXF1aXJlKCcuL2VsZW1lbnRUeXBlJyk7XG5cbnZhciBfZWxlbWVudFR5cGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZWxlbWVudFR5cGUyKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeTIgPSByZXF1aXJlKCcuL2lzUmVxdWlyZWRGb3JBMTF5Jyk7XG5cbnZhciBfaXNSZXF1aXJlZEZvckExMXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNSZXF1aXJlZEZvckExMXkyKTtcblxudmFyIF9zcGxpdENvbXBvbmVudDIgPSByZXF1aXJlKCcuL3NwbGl0Q29tcG9uZW50Jyk7XG5cbnZhciBfc3BsaXRDb21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BsaXRDb21wb25lbnQyKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gcmVxdWlyZSgnLi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMik7XG5cbnZhciBfa2V5Q29kZSA9IHJlcXVpcmUoJy4va2V5Q29kZScpO1xuXG52YXIgX2tleUNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Q29kZSk7XG5cbnZhciBfY29udGFpbnMyID0gcmVxdWlyZSgnLi9jb250YWlucycpO1xuXG52YXIgX2NvbnRhaW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5zMik7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSByZXF1aXJlKCcuL2FkZEV2ZW50TGlzdGVuZXInKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZEV2ZW50TGlzdGVuZXIyKTtcblxudmFyIF9jc3NBbmltYXRpb24yID0gcmVxdWlyZSgnLi9jc3NBbmltYXRpb24nKTtcblxudmFyIF9jc3NBbmltYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQW5pbWF0aW9uMik7XG5cbnZhciBfdG9BcnJheTIgPSByZXF1aXJlKCcuL3RvQXJyYXknKTtcblxudmFyIF90b0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQXJyYXkyKTtcblxudmFyIF9BbGlnbjIgPSByZXF1aXJlKCcuL0FsaWduJyk7XG5cbnZhciBfQWxpZ24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWxpZ24yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5hbGwgPSBfYWxsMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb25lbnRPckVsZW1lbnQgPSBfY29tcG9uZW50T3JFbGVtZW50My5kZWZhdWx0O1xuZXhwb3J0cy5kZXByZWNhdGVkID0gX2RlcHJlY2F0ZWQzLmRlZmF1bHQ7XG5leHBvcnRzLmVsZW1lbnRUeXBlID0gX2VsZW1lbnRUeXBlMy5kZWZhdWx0O1xuZXhwb3J0cy5pc1JlcXVpcmVkRm9yQTExeSA9IF9pc1JlcXVpcmVkRm9yQTExeTMuZGVmYXVsdDtcbmV4cG9ydHMuc3BsaXRDb21wb25lbnQgPSBfc3BsaXRDb21wb25lbnQzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24zLmRlZmF1bHQ7XG5leHBvcnRzLktleUNvZGUgPSBfa2V5Q29kZTIuZGVmYXVsdDtcbmV4cG9ydHMuY29udGFpbnMgPSBfY29udGFpbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBfYWRkRXZlbnRMaXN0ZW5lcjMuZGVmYXVsdDtcbmV4cG9ydHMuY3NzQW5pbWF0aW9uID0gX2Nzc0FuaW1hdGlvbjMuZGVmYXVsdDtcbmV4cG9ydHMudG9BcnJheSA9IF90b0FycmF5My5kZWZhdWx0O1xuLy9leHBvcnQgZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4gZnJvbSAnLi9nZXRDb250YWluZXJSZW5kZXJNaXhpbic7XG5cbmV4cG9ydHMuQWxpZ24gPSBfQWxpZ24zLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFsbDtcblxudmFyIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXInKTtcblxudmFyIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFsbCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsUHJvcFR5cGVzKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIGVycm9yID0gbnVsbDtcblxuICAgIHZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSB2YWxpZGF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBlcnJvciA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMi5kZWZhdWx0KShhbGxQcm9wVHlwZXMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXI7XG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4vLyBNb3N0bHkgdGFrZW4gZnJvbSBSZWFjdFByb3BUeXBlcy5cblxuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lU2FmZSArICdgIHdhcyBub3Qgc3BlY2lmaWVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYC4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDYgPyBfbGVuIC0gNiA6IDApLCBfa2V5ID0gNjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gNl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZVNhZmUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVTYWZlXS5jb25jYXQoYXJncykpO1xuICB9XG5cbiAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBSZWFjdEVsZW1lbnQgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LiBZb3UgY2FuIHVzdWFsbHkgb2J0YWluIGEgUmVhY3RDb21wb25lbnQgb3IgRE9NRWxlbWVudCAnICsgJ2Zyb20gYSBSZWFjdEVsZW1lbnQgYnkgYXR0YWNoaW5nIGEgcmVmIHRvIGl0LicpO1xuICB9XG5cbiAgaWYgKChwcm9wVHlwZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BWYWx1ZS5yZW5kZXIgIT09ICdmdW5jdGlvbicpICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LicpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKHZhbGlkYXRlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlcHJlY2F0ZWQ7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2FybmVkID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQodmFsaWRhdG9yLCByZWFzb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAhPSBudWxsKSB7XG4gICAgICB2YXIgbWVzc2FnZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBwcm9wTmFtZTtcblxuICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSh3YXJuZWRbbWVzc2FnZUtleV0sICdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCBvZiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWVTYWZlICsgJ2AgaXMgZGVwcmVjYXRlZC4gJyArIHJlYXNvbiArICcuJykpO1xuXG4gICAgICB3YXJuZWRbbWVzc2FnZUtleV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDUgPyBfbGVuIC0gNSA6IDApLCBfa2V5ID0gNTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gNV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVdLmNvbmNhdChhcmdzKSk7XG4gIH07XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5mdW5jdGlvbiBfcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufVxuXG5kZXByZWNhdGVkLl9yZXNldFdhcm5lZCA9IF9yZXNldFdhcm5lZDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9kZXByZWNhdGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93YXJuaW5nL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvdXNyL2xvY2FsL2xpYi9+L2JlZS10b29scy9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXInKTtcblxudmFyIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVsZW1lbnRUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwcm9wVmFsdWUpO1xuXG4gIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgUmVhY3RFbGVtZW50ICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBlbGVtZW50IHR5cGUgKGEgc3RyaW5nICcpICsgJ29yIGEgUmVhY3RDbGFzcykuJyk7XG4gIH1cblxuICBpZiAocHJvcFR5cGUgIT09ICdmdW5jdGlvbicgJiYgcHJvcFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gZWxlbWVudCB0eXBlIChhIHN0cmluZyAnKSArICdvciBhIFJlYWN0Q2xhc3MpLicpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGVsZW1lbnRUeXBlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNSZXF1aXJlZEZvckExMXk7XG5mdW5jdGlvbiBpc1JlcXVpcmVkRm9yQTExeSh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCBpcyByZXF1aXJlZCB0byBtYWtlICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBhY2Nlc3NpYmxlIGZvciB1c2VycyBvZiBhc3Npc3RpdmUgJykgKyAndGVjaG5vbG9naWVzIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9pc1JlcXVpcmVkRm9yQTExeS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzcGxpdENvbXBvbmVudFByb3BzO1xuLyoqXG4gKiDliIblibLopoHkvKDlhaXniLblhYPntKDlkozlrZDlhYPntKDnmoRwcm9wc1xuICogQHBhcmFtICB7W29iamVjdF19IHByb3BzICAgICDkvKDlhaXnmoTlsZ7mgKdcbiAqIEBwYXJhbSAge1tyZWFjdEVsZW1lbnRdfSBDb21wb25lbnQg57uE5Lu2XG4gKiBAcmV0dXJuIHtbYXJyYXldfSAgICAgICAgICAg6L+U5Zue5pWw57uE77yM56ys5LiA5Liq5YWD57Sg5Li654i25YWD57SgcHJvcHPlr7nosaHvvIznrKzkuozkuKrlrZDlhYPntKBwcm9wc+WvueixoVxuICovXG5mdW5jdGlvbiBzcGxpdENvbXBvbmVudFByb3BzKHByb3BzLCBDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudFByb3BUeXBlcyA9IENvbXBvbmVudC5wcm9wVHlwZXM7XG5cbiAgdmFyIHBhcmVudFByb3BzID0ge307XG4gIHZhciBjaGlsZFByb3BzID0ge307XG5cbiAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBfcmVmWzBdLFxuICAgICAgICBwcm9wVmFsdWUgPSBfcmVmWzFdO1xuXG4gICAgaWYgKGNvbXBvbmVudFByb3BUeXBlc1twcm9wTmFtZV0pIHtcbiAgICAgIHBhcmVudFByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3BhcmVudFByb3BzLCBjaGlsZFByb3BzXTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9zcGxpdENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZiAhPSBudWxsO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgIH1cblxuICAgIGlmIChhY2MgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSwgbnVsbCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICogc29tZSBrZXktY29kZXMgZGVmaW5pdGlvbiBhbmQgdXRpbHMgZnJvbSBjbG9zdXJlLWxpYnJhcnlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxudmFyIEtleUNvZGUgPSB7XG4gIC8qKlxuICAgKiBNQUNfRU5URVJcbiAgICovXG4gIE1BQ19FTlRFUjogMyxcbiAgLyoqXG4gICAqIEJBQ0tTUEFDRVxuICAgKi9cbiAgQkFDS1NQQUNFOiA4LFxuICAvKipcbiAgICogVEFCXG4gICAqL1xuICBUQUI6IDksXG4gIC8qKlxuICAgKiBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgICovXG4gIE5VTV9DRU5URVI6IDEyLCAvLyBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgLyoqXG4gICAqIEVOVEVSXG4gICAqL1xuICBFTlRFUjogMTMsXG4gIC8qKlxuICAgKiBTSElGVFxuICAgKi9cbiAgU0hJRlQ6IDE2LFxuICAvKipcbiAgICogQ1RSTFxuICAgKi9cbiAgQ1RSTDogMTcsXG4gIC8qKlxuICAgKiBBTFRcbiAgICovXG4gIEFMVDogMTgsXG4gIC8qKlxuICAgKiBQQVVTRVxuICAgKi9cbiAgUEFVU0U6IDE5LFxuICAvKipcbiAgICogQ0FQU19MT0NLXG4gICAqL1xuICBDQVBTX0xPQ0s6IDIwLFxuICAvKipcbiAgICogRVNDXG4gICAqL1xuICBFU0M6IDI3LFxuICAvKipcbiAgICogU1BBQ0VcbiAgICovXG4gIFNQQUNFOiAzMixcbiAgLyoqXG4gICAqIFBBR0VfVVBcbiAgICovXG4gIFBBR0VfVVA6IDMzLCAvLyBhbHNvIE5VTV9OT1JUSF9FQVNUXG4gIC8qKlxuICAgKiBQQUdFX0RPV05cbiAgICovXG4gIFBBR0VfRE9XTjogMzQsIC8vIGFsc28gTlVNX1NPVVRIX0VBU1RcbiAgLyoqXG4gICAqIEVORFxuICAgKi9cbiAgRU5EOiAzNSwgLy8gYWxzbyBOVU1fU09VVEhfV0VTVFxuICAvKipcbiAgICogSE9NRVxuICAgKi9cbiAgSE9NRTogMzYsIC8vIGFsc28gTlVNX05PUlRIX1dFU1RcbiAgLyoqXG4gICAqIExFRlRcbiAgICovXG4gIExFRlQ6IDM3LCAvLyBhbHNvIE5VTV9XRVNUXG4gIC8qKlxuICAgKiBVUFxuICAgKi9cbiAgVVA6IDM4LCAvLyBhbHNvIE5VTV9OT1JUSFxuICAvKipcbiAgICogUklHSFRcbiAgICovXG4gIFJJR0hUOiAzOSwgLy8gYWxzbyBOVU1fRUFTVFxuICAvKipcbiAgICogRE9XTlxuICAgKi9cbiAgRE9XTjogNDAsIC8vIGFsc28gTlVNX1NPVVRIXG4gIC8qKlxuICAgKiBQUklOVF9TQ1JFRU5cbiAgICovXG4gIFBSSU5UX1NDUkVFTjogNDQsXG4gIC8qKlxuICAgKiBJTlNFUlRcbiAgICovXG4gIElOU0VSVDogNDUsIC8vIGFsc28gTlVNX0lOU0VSVFxuICAvKipcbiAgICogREVMRVRFXG4gICAqL1xuICBERUxFVEU6IDQ2LCAvLyBhbHNvIE5VTV9ERUxFVEVcbiAgLyoqXG4gICAqIFpFUk9cbiAgICovXG4gIFpFUk86IDQ4LFxuICAvKipcbiAgICogT05FXG4gICAqL1xuICBPTkU6IDQ5LFxuICAvKipcbiAgICogVFdPXG4gICAqL1xuICBUV086IDUwLFxuICAvKipcbiAgICogVEhSRUVcbiAgICovXG4gIFRIUkVFOiA1MSxcbiAgLyoqXG4gICAqIEZPVVJcbiAgICovXG4gIEZPVVI6IDUyLFxuICAvKipcbiAgICogRklWRVxuICAgKi9cbiAgRklWRTogNTMsXG4gIC8qKlxuICAgKiBTSVhcbiAgICovXG4gIFNJWDogNTQsXG4gIC8qKlxuICAgKiBTRVZFTlxuICAgKi9cbiAgU0VWRU46IDU1LFxuICAvKipcbiAgICogRUlHSFRcbiAgICovXG4gIEVJR0hUOiA1NixcbiAgLyoqXG4gICAqIE5JTkVcbiAgICovXG4gIE5JTkU6IDU3LFxuICAvKipcbiAgICogUVVFU1RJT05fTUFSS1xuICAgKi9cbiAgUVVFU1RJT05fTUFSSzogNjMsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQVxuICAgKi9cbiAgQTogNjUsXG4gIC8qKlxuICAgKiBCXG4gICAqL1xuICBCOiA2NixcbiAgLyoqXG4gICAqIENcbiAgICovXG4gIEM6IDY3LFxuICAvKipcbiAgICogRFxuICAgKi9cbiAgRDogNjgsXG4gIC8qKlxuICAgKiBFXG4gICAqL1xuICBFOiA2OSxcbiAgLyoqXG4gICAqIEZcbiAgICovXG4gIEY6IDcwLFxuICAvKipcbiAgICogR1xuICAgKi9cbiAgRzogNzEsXG4gIC8qKlxuICAgKiBIXG4gICAqL1xuICBIOiA3MixcbiAgLyoqXG4gICAqIElcbiAgICovXG4gIEk6IDczLFxuICAvKipcbiAgICogSlxuICAgKi9cbiAgSjogNzQsXG4gIC8qKlxuICAgKiBLXG4gICAqL1xuICBLOiA3NSxcbiAgLyoqXG4gICAqIExcbiAgICovXG4gIEw6IDc2LFxuICAvKipcbiAgICogTVxuICAgKi9cbiAgTTogNzcsXG4gIC8qKlxuICAgKiBOXG4gICAqL1xuICBOOiA3OCxcbiAgLyoqXG4gICAqIE9cbiAgICovXG4gIE86IDc5LFxuICAvKipcbiAgICogUFxuICAgKi9cbiAgUDogODAsXG4gIC8qKlxuICAgKiBRXG4gICAqL1xuICBROiA4MSxcbiAgLyoqXG4gICAqIFJcbiAgICovXG4gIFI6IDgyLFxuICAvKipcbiAgICogU1xuICAgKi9cbiAgUzogODMsXG4gIC8qKlxuICAgKiBUXG4gICAqL1xuICBUOiA4NCxcbiAgLyoqXG4gICAqIFVcbiAgICovXG4gIFU6IDg1LFxuICAvKipcbiAgICogVlxuICAgKi9cbiAgVjogODYsXG4gIC8qKlxuICAgKiBXXG4gICAqL1xuICBXOiA4NyxcbiAgLyoqXG4gICAqIFhcbiAgICovXG4gIFg6IDg4LFxuICAvKipcbiAgICogWVxuICAgKi9cbiAgWTogODksXG4gIC8qKlxuICAgKiBaXG4gICAqL1xuICBaOiA5MCxcbiAgLyoqXG4gICAqIE1FVEFcbiAgICovXG4gIE1FVEE6IDkxLCAvLyBXSU5fS0VZX0xFRlRcbiAgLyoqXG4gICAqIFdJTl9LRVlfUklHSFRcbiAgICovXG4gIFdJTl9LRVlfUklHSFQ6IDkyLFxuICAvKipcbiAgICogQ09OVEVYVF9NRU5VXG4gICAqL1xuICBDT05URVhUX01FTlU6IDkzLFxuICAvKipcbiAgICogTlVNX1pFUk9cbiAgICovXG4gIE5VTV9aRVJPOiA5NixcbiAgLyoqXG4gICAqIE5VTV9PTkVcbiAgICovXG4gIE5VTV9PTkU6IDk3LFxuICAvKipcbiAgICogTlVNX1RXT1xuICAgKi9cbiAgTlVNX1RXTzogOTgsXG4gIC8qKlxuICAgKiBOVU1fVEhSRUVcbiAgICovXG4gIE5VTV9USFJFRTogOTksXG4gIC8qKlxuICAgKiBOVU1fRk9VUlxuICAgKi9cbiAgTlVNX0ZPVVI6IDEwMCxcbiAgLyoqXG4gICAqIE5VTV9GSVZFXG4gICAqL1xuICBOVU1fRklWRTogMTAxLFxuICAvKipcbiAgICogTlVNX1NJWFxuICAgKi9cbiAgTlVNX1NJWDogMTAyLFxuICAvKipcbiAgICogTlVNX1NFVkVOXG4gICAqL1xuICBOVU1fU0VWRU46IDEwMyxcbiAgLyoqXG4gICAqIE5VTV9FSUdIVFxuICAgKi9cbiAgTlVNX0VJR0hUOiAxMDQsXG4gIC8qKlxuICAgKiBOVU1fTklORVxuICAgKi9cbiAgTlVNX05JTkU6IDEwNSxcbiAgLyoqXG4gICAqIE5VTV9NVUxUSVBMWVxuICAgKi9cbiAgTlVNX01VTFRJUExZOiAxMDYsXG4gIC8qKlxuICAgKiBOVU1fUExVU1xuICAgKi9cbiAgTlVNX1BMVVM6IDEwNyxcbiAgLyoqXG4gICAqIE5VTV9NSU5VU1xuICAgKi9cbiAgTlVNX01JTlVTOiAxMDksXG4gIC8qKlxuICAgKiBOVU1fUEVSSU9EXG4gICAqL1xuICBOVU1fUEVSSU9EOiAxMTAsXG4gIC8qKlxuICAgKiBOVU1fRElWSVNJT05cbiAgICovXG4gIE5VTV9ESVZJU0lPTjogMTExLFxuICAvKipcbiAgICogRjFcbiAgICovXG4gIEYxOiAxMTIsXG4gIC8qKlxuICAgKiBGMlxuICAgKi9cbiAgRjI6IDExMyxcbiAgLyoqXG4gICAqIEYzXG4gICAqL1xuICBGMzogMTE0LFxuICAvKipcbiAgICogRjRcbiAgICovXG4gIEY0OiAxMTUsXG4gIC8qKlxuICAgKiBGNVxuICAgKi9cbiAgRjU6IDExNixcbiAgLyoqXG4gICAqIEY2XG4gICAqL1xuICBGNjogMTE3LFxuICAvKipcbiAgICogRjdcbiAgICovXG4gIEY3OiAxMTgsXG4gIC8qKlxuICAgKiBGOFxuICAgKi9cbiAgRjg6IDExOSxcbiAgLyoqXG4gICAqIEY5XG4gICAqL1xuICBGOTogMTIwLFxuICAvKipcbiAgICogRjEwXG4gICAqL1xuICBGMTA6IDEyMSxcbiAgLyoqXG4gICAqIEYxMVxuICAgKi9cbiAgRjExOiAxMjIsXG4gIC8qKlxuICAgKiBGMTJcbiAgICovXG4gIEYxMjogMTIzLFxuICAvKipcbiAgICogTlVNTE9DS1xuICAgKi9cbiAgTlVNTE9DSzogMTQ0LFxuICAvKipcbiAgICogU0VNSUNPTE9OXG4gICAqL1xuICBTRU1JQ09MT046IDE4NiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBEQVNIXG4gICAqL1xuICBEQVNIOiAxODksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogRVFVQUxTXG4gICAqL1xuICBFUVVBTFM6IDE4NywgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBDT01NQVxuICAgKi9cbiAgQ09NTUE6IDE4OCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBQRVJJT0RcbiAgICovXG4gIFBFUklPRDogMTkwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFNMQVNIXG4gICAqL1xuICBTTEFTSDogMTkxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEFQT1NUUk9QSEVcbiAgICovXG4gIEFQT1NUUk9QSEU6IDE5MiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBTSU5HTEVfUVVPVEVcbiAgICovXG4gIFNJTkdMRV9RVU9URTogMjIyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIE9QRU5fU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIE9QRU5fU1FVQVJFX0JSQUNLRVQ6IDIxOSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBCQUNLU0xBU0hcbiAgICovXG4gIEJBQ0tTTEFTSDogMjIwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIENMT1NFX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBDTE9TRV9TUVVBUkVfQlJBQ0tFVDogMjIxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFdJTl9LRVlcbiAgICovXG4gIFdJTl9LRVk6IDIyNCxcbiAgLyoqXG4gICAqIE1BQ19GRl9NRVRBXG4gICAqL1xuICBNQUNfRkZfTUVUQTogMjI0LCAvLyBGaXJlZm94IChHZWNrbykgZmlyZXMgdGhpcyBmb3IgdGhlIG1ldGEga2V5IGluc3RlYWQgb2YgOTFcbiAgLyoqXG4gICAqIFdJTl9JTUVcbiAgICovXG4gIFdJTl9JTUU6IDIyOVxufTtcblxuLypcbiB3aGV0aGVyIHRleHQgYW5kIG1vZGlmaWVkIGtleSBpcyBlbnRlcmVkIGF0IHRoZSBzYW1lIHRpbWUuXG4gKi9cbktleUNvZGUuaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQgPSBmdW5jdGlvbiBpc1RleHRNb2RpZnlpbmdLZXlFdmVudChlKSB7XG4gIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICBpZiAoZS5hbHRLZXkgJiYgIWUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHxcbiAgLy8gRnVuY3Rpb24ga2V5cyBkb24ndCBnZW5lcmF0ZSB0ZXh0XG4gIGtleUNvZGUgPj0gS2V5Q29kZS5GMSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuRjEyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGhlIGZvbGxvd2luZyBrZXlzIGFyZSBxdWl0ZSBoYXJtbGVzcywgZXZlbiBpbiBjb21iaW5hdGlvbiB3aXRoXG4gIC8vIENUUkwsIEFMVCBvciBTSElGVC5cbiAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBLZXlDb2RlLkFMVDpcbiAgICBjYXNlIEtleUNvZGUuQ0FQU19MT0NLOlxuICAgIGNhc2UgS2V5Q29kZS5DT05URVhUX01FTlU6XG4gICAgY2FzZSBLZXlDb2RlLkNUUkw6XG4gICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgY2FzZSBLZXlDb2RlLkVORDpcbiAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgIGNhc2UgS2V5Q29kZS5IT01FOlxuICAgIGNhc2UgS2V5Q29kZS5JTlNFUlQ6XG4gICAgY2FzZSBLZXlDb2RlLkxFRlQ6XG4gICAgY2FzZSBLZXlDb2RlLk1BQ19GRl9NRVRBOlxuICAgIGNhc2UgS2V5Q29kZS5NRVRBOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1MT0NLOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fQ0VOVEVSOlxuICAgIGNhc2UgS2V5Q29kZS5QQUdFX0RPV046XG4gICAgY2FzZSBLZXlDb2RlLlBBR0VfVVA6XG4gICAgY2FzZSBLZXlDb2RlLlBBVVNFOlxuICAgIGNhc2UgS2V5Q29kZS5QUklOVF9TQ1JFRU46XG4gICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgIGNhc2UgS2V5Q29kZS5TSElGVDpcbiAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgY2FzZSBLZXlDb2RlLldJTl9LRVk6XG4gICAgY2FzZSBLZXlDb2RlLldJTl9LRVlfUklHSFQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vKlxuIHdoZXRoZXIgY2hhcmFjdGVyIGlzIGVudGVyZWQuXG4gKi9cbktleUNvZGUuaXNDaGFyYWN0ZXJLZXkgPSBmdW5jdGlvbiBpc0NoYXJhY3RlcktleShrZXlDb2RlKSB7XG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTklORSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5OVU1fWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTlVNX01VTFRJUExZKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLkEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLlopIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNhZmFyaSBzZW5kcyB6ZXJvIGtleSBjb2RlIGZvciBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAgaWYgKHdpbmRvdy5uYXZpZ2F0aW9uLnVzZXJBZ2VudC5pbmRleE9mKCdXZWJLaXQnKSAhPT0gLTEgJiYga2V5Q29kZSA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgIGNhc2UgS2V5Q29kZS5RVUVTVElPTl9NQVJLOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fUExVUzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX01JTlVTOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fUEVSSU9EOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fRElWSVNJT046XG4gICAgY2FzZSBLZXlDb2RlLlNFTUlDT0xPTjpcbiAgICBjYXNlIEtleUNvZGUuREFTSDpcbiAgICBjYXNlIEtleUNvZGUuRVFVQUxTOlxuICAgIGNhc2UgS2V5Q29kZS5DT01NQTpcbiAgICBjYXNlIEtleUNvZGUuUEVSSU9EOlxuICAgIGNhc2UgS2V5Q29kZS5TTEFTSDpcbiAgICBjYXNlIEtleUNvZGUuQVBPU1RST1BIRTpcbiAgICBjYXNlIEtleUNvZGUuU0lOR0xFX1FVT1RFOlxuICAgIGNhc2UgS2V5Q29kZS5PUEVOX1NRVUFSRV9CUkFDS0VUOlxuICAgIGNhc2UgS2V5Q29kZS5CQUNLU0xBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkNMT1NFX1NRVUFSRV9CUkFDS0VUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLZXlDb2RlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2tleUNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY29udGFpbnM7XG5mdW5jdGlvbiBjb250YWlucyhyb290LCBuKSB7XG4gIHZhciBub2RlID0gbjtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvY29udGFpbnMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZEV2ZW50TGlzdGVuZXJXcmFwO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdhZGQtZG9tLWV2ZW50LWxpc3RlbmVyJyk7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGREb21FdmVudExpc3RlbmVyKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID8gZnVuY3Rpb24gcnVuKGUpIHtcbiAgICBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoY2IsIGUpO1xuICB9IDogY2I7XG4gIHJldHVybiAoMCwgX2FkZERvbUV2ZW50TGlzdGVuZXIyLmRlZmF1bHQpKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvYWRkRXZlbnRMaXN0ZW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFkZEV2ZW50TGlzdGVuZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9FdmVudE9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRPYmplY3QnKTtcblxudmFyIF9FdmVudE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudE9iamVjdCk7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjayhlKSB7XG4gICAgdmFyIG5lID0gbmV3IF9FdmVudE9iamVjdDJbJ2RlZmF1bHQnXShlKTtcbiAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgbmUpO1xuICB9XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBpZ25vcmVcbiAqIGV2ZW50IG9iamVjdCBmb3IgZG9tXG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9FdmVudEJhc2VPYmplY3QgPSByZXF1aXJlKCcuL0V2ZW50QmFzZU9iamVjdCcpO1xuXG52YXIgX0V2ZW50QmFzZU9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudEJhc2VPYmplY3QpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIFRSVUUgPSB0cnVlO1xudmFyIEZBTFNFID0gZmFsc2U7XG52YXIgY29tbW9uUHJvcHMgPSBbJ2FsdEtleScsICdidWJibGVzJywgJ2NhbmNlbGFibGUnLCAnY3RybEtleScsICdjdXJyZW50VGFyZ2V0JywgJ2V2ZW50UGhhc2UnLCAnbWV0YUtleScsICdzaGlmdEtleScsICd0YXJnZXQnLCAndGltZVN0YW1wJywgJ3ZpZXcnLCAndHlwZSddO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh3KSB7XG4gIHJldHVybiB3ID09PSBudWxsIHx8IHcgPT09IHVuZGVmaW5lZDtcbn1cblxudmFyIGV2ZW50Tm9ybWFsaXplcnMgPSBbe1xuICByZWc6IC9ea2V5LyxcbiAgcHJvcHM6IFsnY2hhcicsICdjaGFyQ29kZScsICdrZXknLCAna2V5Q29kZScsICd3aGljaCddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQud2hpY2gpKSB7XG4gICAgICBldmVudC53aGljaCA9ICFpc051bGxPclVuZGVmaW5lZChuYXRpdmVFdmVudC5jaGFyQ29kZSkgPyBuYXRpdmVFdmVudC5jaGFyQ29kZSA6IG5hdGl2ZUV2ZW50LmtleUNvZGU7XG4gICAgfVxuXG4gICAgLy8gYWRkIG1ldGFLZXkgdG8gbm9uLU1hYyBicm93c2VycyAodXNlIGN0cmwgZm9yIFBDICdzIGFuZCBNZXRhIGZvciBNYWNzKVxuICAgIGlmIChldmVudC5tZXRhS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50Lm1ldGFLZXkgPSBldmVudC5jdHJsS2V5O1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9edG91Y2gvLFxuICBwcm9wczogWyd0b3VjaGVzJywgJ2NoYW5nZWRUb3VjaGVzJywgJ3RhcmdldFRvdWNoZXMnXVxufSwge1xuICByZWc6IC9eaGFzaGNoYW5nZSQvLFxuICBwcm9wczogWyduZXdVUkwnLCAnb2xkVVJMJ11cbn0sIHtcbiAgcmVnOiAvXmdlc3R1cmVjaGFuZ2UkL2ksXG4gIHByb3BzOiBbJ3JvdGF0aW9uJywgJ3NjYWxlJ11cbn0sIHtcbiAgcmVnOiAvXihtb3VzZXdoZWVsfERPTU1vdXNlU2Nyb2xsKSQvLFxuICBwcm9wczogW10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIHZhciBkZWx0YVggPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRlbHRhWSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZGVsdGEgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHdoZWVsRGVsdGEgPSBuYXRpdmVFdmVudC53aGVlbERlbHRhO1xuICAgIHZhciBheGlzID0gbmF0aXZlRXZlbnQuYXhpcztcbiAgICB2YXIgd2hlZWxEZWx0YVkgPSBuYXRpdmVFdmVudC53aGVlbERlbHRhWTtcbiAgICB2YXIgd2hlZWxEZWx0YVggPSBuYXRpdmVFdmVudC53aGVlbERlbHRhWDtcbiAgICB2YXIgZGV0YWlsID0gbmF0aXZlRXZlbnQuZGV0YWlsO1xuXG4gICAgLy8gaWUvd2Via2l0XG4gICAgaWYgKHdoZWVsRGVsdGEpIHtcbiAgICAgIGRlbHRhID0gd2hlZWxEZWx0YSAvIDEyMDtcbiAgICB9XG5cbiAgICAvLyBnZWNrb1xuICAgIGlmIChkZXRhaWwpIHtcbiAgICAgIC8vIHByZXNzIGNvbnRyb2wgZS5kZXRhaWwgPT0gMSBlbHNlIGUuZGV0YWlsID09IDNcbiAgICAgIGRlbHRhID0gMCAtIChkZXRhaWwgJSAzID09PSAwID8gZGV0YWlsIC8gMyA6IGRldGFpbCk7XG4gICAgfVxuXG4gICAgLy8gR2Vja29cbiAgICBpZiAoYXhpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gZXZlbnQuSE9SSVpPTlRBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgIGRlbHRhWCA9IDAgLSBkZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gZXZlbnQuVkVSVElDQUxfQVhJUykge1xuICAgICAgICBkZWx0YVggPSAwO1xuICAgICAgICBkZWx0YVkgPSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsdGFZID0gd2hlZWxEZWx0YVkgLyAxMjA7XG4gICAgfVxuICAgIGlmICh3aGVlbERlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVggPSAtMSAqIHdoZWVsRGVsdGFYIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIOm7mOiupCBkZWx0YVkgKGllKVxuICAgIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YVggb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhWFxuICAgICAgICogQG1lbWJlciBFdmVudC5Eb21FdmVudC5PYmplY3RcbiAgICAgICAqL1xuICAgICAgZXZlbnQuZGVsdGFYID0gZGVsdGFYO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YVkgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhWVxuICAgICAgICogQG1lbWJlciBFdmVudC5Eb21FdmVudC5PYmplY3RcbiAgICAgICAqL1xuICAgICAgZXZlbnQuZGVsdGFZID0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmIChkZWx0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVxuICAgICAgICogQG1lbWJlciBFdmVudC5Eb21FdmVudC5PYmplY3RcbiAgICAgICAqL1xuICAgICAgZXZlbnQuZGVsdGEgPSBkZWx0YTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgcmVnOiAvXm1vdXNlfGNvbnRleHRtZW51fGNsaWNrfG1zcG9pbnRlcnwoXkRPTU1vdXNlU2Nyb2xsJCkvaSxcbiAgcHJvcHM6IFsnYnV0dG9ucycsICdjbGllbnRYJywgJ2NsaWVudFknLCAnYnV0dG9uJywgJ29mZnNldFgnLCAncmVsYXRlZFRhcmdldCcsICd3aGljaCcsICdmcm9tRWxlbWVudCcsICd0b0VsZW1lbnQnLCAnb2Zmc2V0WScsICdwYWdlWCcsICdwYWdlWScsICdzY3JlZW5YJywgJ3NjcmVlblknXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGV2ZW50RG9jID0gdW5kZWZpbmVkO1xuICAgIHZhciBkb2MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGJvZHkgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgYnV0dG9uID0gbmF0aXZlRXZlbnQuYnV0dG9uO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHBhZ2VYL1kgaWYgbWlzc2luZyBhbmQgY2xpZW50WC9ZIGF2YWlsYWJsZVxuICAgIGlmICh0YXJnZXQgJiYgaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQucGFnZVgpICYmICFpc051bGxPclVuZGVmaW5lZChuYXRpdmVFdmVudC5jbGllbnRYKSkge1xuICAgICAgZXZlbnREb2MgPSB0YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgICAgIGRvYyA9IGV2ZW50RG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGJvZHkgPSBldmVudERvYy5ib2R5O1xuICAgICAgZXZlbnQucGFnZVggPSBuYXRpdmVFdmVudC5jbGllbnRYICsgKGRvYyAmJiBkb2Muc2Nyb2xsTGVmdCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsTGVmdCB8fCAwKSAtIChkb2MgJiYgZG9jLmNsaWVudExlZnQgfHwgYm9keSAmJiBib2R5LmNsaWVudExlZnQgfHwgMCk7XG4gICAgICBldmVudC5wYWdlWSA9IG5hdGl2ZUV2ZW50LmNsaWVudFkgKyAoZG9jICYmIGRvYy5zY3JvbGxUb3AgfHwgYm9keSAmJiBib2R5LnNjcm9sbFRvcCB8fCAwKSAtIChkb2MgJiYgZG9jLmNsaWVudFRvcCB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wIHx8IDApO1xuICAgIH1cblxuICAgIC8vIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuICAgIC8vIGRvIG5vdCB1c2UgYnV0dG9uXG4gICAgaWYgKCFldmVudC53aGljaCAmJiBidXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGJ1dHRvbiAmIDEpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAxO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiAyKSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMztcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uICYgNCkge1xuICAgICAgICBldmVudC53aGljaCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC53aGljaCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHJlbGF0ZWRUYXJnZXQsIGlmIG5lY2Vzc2FyeVxuICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCAmJiBldmVudC5mcm9tRWxlbWVudCkge1xuICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LmZyb21FbGVtZW50ID09PSB0YXJnZXQgPyBldmVudC50b0VsZW1lbnQgOiBldmVudC5mcm9tRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1dO1xuXG5mdW5jdGlvbiByZXRUcnVlKCkge1xuICByZXR1cm4gVFJVRTtcbn1cblxuZnVuY3Rpb24gcmV0RmFsc2UoKSB7XG4gIHJldHVybiBGQUxTRTtcbn1cblxuZnVuY3Rpb24gRG9tRXZlbnRPYmplY3QobmF0aXZlRXZlbnQpIHtcbiAgdmFyIHR5cGUgPSBuYXRpdmVFdmVudC50eXBlO1xuXG4gIHZhciBpc05hdGl2ZSA9IHR5cGVvZiBuYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG5hdGl2ZUV2ZW50LmNhbmNlbEJ1YmJsZSA9PT0gJ2Jvb2xlYW4nO1xuXG4gIF9FdmVudEJhc2VPYmplY3QyWydkZWZhdWx0J10uY2FsbCh0aGlzKTtcblxuICB0aGlzLm5hdGl2ZUV2ZW50ID0gbmF0aXZlRXZlbnQ7XG5cbiAgLy8gaW4gY2FzZSBkb20gZXZlbnQgaGFzIGJlZW4gbWFyayBhcyBkZWZhdWx0IHByZXZlbnRlZCBieSBsb3dlciBkb20gbm9kZVxuICB2YXIgaXNEZWZhdWx0UHJldmVudGVkID0gcmV0RmFsc2U7XG4gIGlmICgnZGVmYXVsdFByZXZlbnRlZCcgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9IGVsc2UgaWYgKCdnZXRQcmV2ZW50RGVmYXVsdCcgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTExNTFcbiAgICBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5nZXRQcmV2ZW50RGVmYXVsdCgpID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9IGVsc2UgaWYgKCdyZXR1cm5WYWx1ZScgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5yZXR1cm5WYWx1ZSA9PT0gRkFMU0UgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH1cblxuICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IGlzRGVmYXVsdFByZXZlbnRlZDtcblxuICB2YXIgZml4Rm5zID0gW107XG4gIHZhciBmaXhGbiA9IHVuZGVmaW5lZDtcbiAgdmFyIGwgPSB1bmRlZmluZWQ7XG4gIHZhciBwcm9wID0gdW5kZWZpbmVkO1xuICB2YXIgcHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoKTtcblxuICBldmVudE5vcm1hbGl6ZXJzLmZvckVhY2goZnVuY3Rpb24gKG5vcm1hbGl6ZXIpIHtcbiAgICBpZiAodHlwZS5tYXRjaChub3JtYWxpemVyLnJlZykpIHtcbiAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KG5vcm1hbGl6ZXIucHJvcHMpO1xuICAgICAgaWYgKG5vcm1hbGl6ZXIuZml4KSB7XG4gICAgICAgIGZpeEZucy5wdXNoKG5vcm1hbGl6ZXIuZml4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGwgPSBwcm9wcy5sZW5ndGg7XG5cbiAgLy8gY2xvbmUgcHJvcGVydGllcyBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gIHdoaWxlIChsKSB7XG4gICAgcHJvcCA9IHByb3BzWy0tbF07XG4gICAgdGhpc1twcm9wXSA9IG5hdGl2ZUV2ZW50W3Byb3BdO1xuICB9XG5cbiAgLy8gZml4IHRhcmdldCBwcm9wZXJ0eSwgaWYgbmVjZXNzYXJ5XG4gIGlmICghdGhpcy50YXJnZXQgJiYgaXNOYXRpdmUpIHtcbiAgICB0aGlzLnRhcmdldCA9IG5hdGl2ZUV2ZW50LnNyY0VsZW1lbnQgfHwgZG9jdW1lbnQ7IC8vIHNyY0VsZW1lbnQgbWlnaHQgbm90IGJlIGRlZmluZWQgZWl0aGVyXG4gIH1cblxuICAvLyBjaGVjayBpZiB0YXJnZXQgaXMgYSB0ZXh0IG5vZGUgKHNhZmFyaSlcbiAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0Lm5vZGVUeXBlID09PSAzKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldC5wYXJlbnROb2RlO1xuICB9XG5cbiAgbCA9IGZpeEZucy5sZW5ndGg7XG5cbiAgd2hpbGUgKGwpIHtcbiAgICBmaXhGbiA9IGZpeEZuc1stLWxdO1xuICAgIGZpeEZuKHRoaXMsIG5hdGl2ZUV2ZW50KTtcbiAgfVxuXG4gIHRoaXMudGltZVN0YW1wID0gbmF0aXZlRXZlbnQudGltZVN0YW1wIHx8IERhdGUubm93KCk7XG59XG5cbnZhciBFdmVudEJhc2VPYmplY3RQcm90byA9IF9FdmVudEJhc2VPYmplY3QyWydkZWZhdWx0J10ucHJvdG90eXBlO1xuXG4oMCwgX29iamVjdEFzc2lnbjJbJ2RlZmF1bHQnXSkoRG9tRXZlbnRPYmplY3QucHJvdG90eXBlLCBFdmVudEJhc2VPYmplY3RQcm90bywge1xuICBjb25zdHJ1Y3RvcjogRG9tRXZlbnRPYmplY3QsXG5cbiAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHByZXZlbnREZWZhdWx0IGV4aXN0cyBydW4gaXQgb24gdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgcmV0dXJuVmFsdWUgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIEZBTFNFIChJRSlcbiAgICAgIGUucmV0dXJuVmFsdWUgPSBGQUxTRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5wcmV2ZW50RGVmYXVsdC5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHN0b3BQcm9wYWdhdGlvbiBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgY2FuY2VsQnViYmxlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBUUlVFIChJRSlcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gVFJVRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERvbUV2ZW50T2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBpZ25vcmVcbiAqIGJhc2UgZXZlbnQgb2JqZWN0IGZvciBjdXN0b20gYW5kIGRvbSBldmVudC5cbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRCYXNlT2JqZWN0KCkge1xuICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbkV2ZW50QmFzZU9iamVjdC5wcm90b3R5cGUgPSB7XG4gIGlzRXZlbnRPYmplY3Q6IDEsXG5cbiAgY29uc3RydWN0b3I6IEV2ZW50QmFzZU9iamVjdCxcblxuICBpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cbiAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcblxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcbiAgICAvLyBmaXhlZCAxLjJcbiAgICAvLyBjYWxsIHN0b3BQcm9wYWdhdGlvbiBpbXBsaWNpdGx5XG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcblxuICBoYWx0OiBmdW5jdGlvbiBoYWx0KGltbWVkaWF0ZSkge1xuICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgIHRoaXMuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudEJhc2VPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudEJhc2VPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9FdmVudCA9IHJlcXVpcmUoJy4vRXZlbnQnKTtcblxudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudCk7XG5cbnZhciBfY29tcG9uZW50Q2xhc3NlcyA9IHJlcXVpcmUoJ2NvbXBvbmVudC1jbGFzc2VzJyk7XG5cbnZhciBfY29tcG9uZW50Q2xhc3NlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRDbGFzc2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gX0V2ZW50Mi5kZWZhdWx0LmVuZEV2ZW50cy5sZW5ndGggIT09IDA7XG5cblxudmFyIGNhcGl0YWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJyxcbi8vIG1zIGlzIHNwZWNpYWwgLi4uLiAhXG4nbXMnXTtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcbiAgdmFyIG5vZGVDbGFzc2VzID0gKDAsIF9jb21wb25lbnRDbGFzc2VzMi5kZWZhdWx0KShub2RlKTtcblxuICBpZiAoZW5kQ2FsbGJhY2sgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVuZENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBlbmQgPSBlbmRDYWxsYmFjay5lbmQ7XG4gICAgc3RhcnQgPSBlbmRDYWxsYmFjay5zdGFydDtcbiAgICBhY3RpdmUgPSBlbmRDYWxsYmFjay5hY3RpdmU7XG4gIH1cblxuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgIF9FdmVudDIuZGVmYXVsdC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBlbmQgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoZW5kKSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX0V2ZW50Mi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBpZiAoc3RhcnQpIHtcbiAgICBzdGFydCgpO1xuICB9XG4gIG5vZGVDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgbm9kZUNsYXNzZXMuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dChhY3RpdmUsIDApO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICAgIC8vIDMwbXMgZm9yIGZpcmVmb3hcbiAgfSwgMzApO1xuXG4gIHJldHVybiB7XG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY3NzQW5pbWF0aW9uLnN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHN0eWxlLCBjYWxsYmFjaykge1xuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBfRXZlbnQyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyBpbiBzdHlsZSkge1xuICAgICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KHMpKSB7XG4gICAgICAgIG5vZGUuc3R5bGVbc10gPSBzdHlsZVtzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICB9LCAwKTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKG5vZGUsIHAsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHA7XG4gIHZhciB2ID0gdmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdiA9IHByb3BlcnR5O1xuICAgIHByb3BlcnR5ID0gJyc7XG4gIH1cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eSB8fCAnJztcbiAgY2FwaXRhbFByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIG5vZGUuc3R5bGVbcHJlZml4ICsgJ1RyYW5zaXRpb24nICsgcHJvcGVydHldID0gdjtcbiAgfSk7XG59O1xuXG5jc3NBbmltYXRpb24uaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3NzQW5pbWF0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICBlbmRFdmVudHM6IGVuZEV2ZW50cyxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uRXZlbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudHJ5IHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmRleG9mJyk7XG59XG5cbi8qKlxuICogV2hpdGVzcGFjZSByZWdleHAuXG4gKi9cblxudmFyIHJlID0gL1xccysvO1xuXG4vKipcbiAqIHRvU3RyaW5nIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdyYXAgYGVsYCBpbiBhIGBDbGFzc0xpc3RgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCl7XG4gIHJldHVybiBuZXcgQ2xhc3NMaXN0KGVsKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBDbGFzc0xpc3QgZm9yIGBlbGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KGVsKSB7XG4gIGlmICghZWwgfHwgIWVsLm5vZGVUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIERPTSBlbGVtZW50IHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpO1xuICB9XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5saXN0ID0gZWwuY2xhc3NMaXN0O1xufVxuXG4vKipcbiAqIEFkZCBjbGFzcyBgbmFtZWAgaWYgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICghfmkpIGFyci5wdXNoKG5hbWUpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgYG5hbWVgIHdoZW4gcHJlc2VudCwgb3JcbiAqIHBhc3MgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVtb3ZlXG4gKiBhbnkgd2hpY2ggbWF0Y2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obmFtZSl7XG4gIGlmICgnW29iamVjdCBSZWdFeHBdJyA9PSB0b1N0cmluZy5jYWxsKG5hbWUpKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlTWF0Y2hpbmcobmFtZSk7XG4gIH1cblxuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5yZW1vdmUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICh+aSkgYXJyLnNwbGljZShpLCAxKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBjbGFzc2VzIG1hdGNoaW5nIGByZWAuXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZU1hdGNoaW5nID0gZnVuY3Rpb24ocmUpe1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZS50ZXN0KGFycltpXSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgY2xhc3MgYG5hbWVgLCBjYW4gZm9yY2Ugc3RhdGUgdmlhIGBmb3JjZWAuXG4gKlxuICogRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBjbGFzc0xpc3QsIGJ1dCBkbyBub3Qgc3VwcG9ydCBgZm9yY2VgIHlldCxcbiAqIHRoZSBtaXN0YWtlIHdpbGwgYmUgZGV0ZWN0ZWQgYW5kIGNvcnJlY3RlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKG5hbWUsIGZvcmNlKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgICBpZiAoZm9yY2UgIT09IHRoaXMubGlzdC50b2dnbGUobmFtZSwgZm9yY2UpKSB7XG4gICAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7IC8vIHRvZ2dsZSBhZ2FpbiB0byBjb3JyZWN0XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBjbGFzc2VzLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFycmF5ID0gZnVuY3Rpb24oKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICB2YXIgc3RyID0gY2xhc3NOYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGFyciA9IHN0ci5zcGxpdChyZSk7XG4gIGlmICgnJyA9PT0gYXJyWzBdKSBhcnIuc2hpZnQoKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgY2xhc3MgYG5hbWVgIGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5oYXMgPVxuQ2xhc3NMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gdGhpcy5saXN0XG4gICAgPyB0aGlzLmxpc3QuY29udGFpbnMobmFtZSlcbiAgICA6ICEhIH5pbmRleCh0aGlzLmFycmF5KCksIG5hbWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb21wb25lbnQtaW5kZXhvZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9BcnJheTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0LnB1c2goYyk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2RvbUFsaWduID0gcmVxdWlyZSgnZG9tLWFsaWduJyk7XG5cbnZhciBfZG9tQWxpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tQWxpZ24pO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL2FkZEV2ZW50TGlzdGVuZXInKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL2ltcG9ydCBpc1dpbmRvdyBmcm9tICcuL2lzV2luZG93JztcblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8qIGVzbGludCBuby1lcS1udWxsOiAwICovXG4gIC8qIGVzbGludCBlcWVxZXE6IDAgKi9cbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBidWZmZXIoZm4sIG1zKSB7XG4gIHZhciB0aW1lciA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyRm4oKSB7XG4gICAgY2xlYXIoKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgfVxuXG4gIGJ1ZmZlckZuLmNsZWFyID0gY2xlYXI7XG5cbiAgcmV0dXJuIGJ1ZmZlckZuO1xufVxuXG52YXIgQWxpZ24gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBjaGlsZHJlblByb3BzOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhbGlnbjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0YXJnZXQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFsaWduOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgbW9uaXRvckJ1ZmZlclRpbWU6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgIH0sXG4gICAgICBvbkFsaWduOiBmdW5jdGlvbiBvbkFsaWduKCkge30sXG5cbiAgICAgIG1vbml0b3JCdWZmZXJUaW1lOiA1MCxcbiAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgLy8gaWYgcGFyZW50IHJlZiBub3QgYXR0YWNoZWQgLi4uLiB1c2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcbiAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkICYmIHByb3BzLm1vbml0b3JXaW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcmVBbGlnbiA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkIHx8IHByZXZQcm9wcy5hbGlnbiAhPT0gcHJvcHMuYWxpZ24pIHtcbiAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGFzdFRhcmdldCA9IHByZXZQcm9wcy50YXJnZXQoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBwcm9wcy50YXJnZXQoKTtcbiAgICAgICAgaWYgKGlzV2luZG93KGxhc3RUYXJnZXQpICYmIGlzV2luZG93KGN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgcmVBbGlnbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RUYXJnZXQgIT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZUFsaWduKSB7XG4gICAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0b3BNb25pdG9yV2luZG93UmVzaXplKCk7XG4gIH0sXG4gIHN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlck1vbml0b3IgPSBidWZmZXIodGhpcy5mb3JjZUFsaWduLCB0aGlzLnByb3BzLm1vbml0b3JCdWZmZXJUaW1lKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkod2luZG93LCAncmVzaXplJywgdGhpcy5idWZmZXJNb25pdG9yKTtcbiAgICB9XG4gIH0sXG4gIHN0b3BNb25pdG9yV2luZG93UmVzaXplOiBmdW5jdGlvbiBzdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlck1vbml0b3IuY2xlYXIoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9LFxuICBmb3JjZUFsaWduOiBmdW5jdGlvbiBmb3JjZUFsaWduKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdmFyIHNvdXJjZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHByb3BzLm9uQWxpZ24oc291cmNlLCAoMCwgX2RvbUFsaWduMi5kZWZhdWx0KShzb3VyY2UsIHByb3BzLnRhcmdldCgpLCBwcm9wcy5hbGlnbikpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuUHJvcHMgPSBfcHJvcHMuY2hpbGRyZW5Qcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjaGlsZHJlblByb3BzKSB7XG4gICAgICAgIGlmIChjaGlsZHJlblByb3BzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgbmV3UHJvcHNbcHJvcF0gPSB0aGlzLnByb3BzW2NoaWxkcmVuUHJvcHNbcHJvcF1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBbGlnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9BbGlnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQgPSByZXF1aXJlKCcuL2dldE9mZnNldFBhcmVudCcpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPZmZzZXRQYXJlbnQpO1xuXG52YXIgX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IHJlcXVpcmUoJy4vZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50Jyk7XG5cbnZhciBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCk7XG5cbnZhciBfYWRqdXN0Rm9yVmlld3BvcnQgPSByZXF1aXJlKCcuL2FkanVzdEZvclZpZXdwb3J0Jyk7XG5cbnZhciBfYWRqdXN0Rm9yVmlld3BvcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRqdXN0Rm9yVmlld3BvcnQpO1xuXG52YXIgX2dldFJlZ2lvbiA9IHJlcXVpcmUoJy4vZ2V0UmVnaW9uJyk7XG5cbnZhciBfZ2V0UmVnaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFJlZ2lvbik7XG5cbnZhciBfZ2V0RWxGdXR1cmVQb3MgPSByZXF1aXJlKCcuL2dldEVsRnV0dXJlUG9zJyk7XG5cbnZhciBfZ2V0RWxGdXR1cmVQb3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RWxGdXR1cmVQb3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaHR0cDovL3lpbWluZ2hlLml0ZXllLmNvbS9ibG9nLzExMjQ3MjBcblxuLyoqXG4gKiBhbGlnbiBkb20gbm9kZSBmbGV4aWJseVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5mdW5jdGlvbiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0O1xufVxuXG5mdW5jdGlvbiBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0ID4gdmlzaWJsZVJlY3QucmlnaHQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoIDwgdmlzaWJsZVJlY3QubGVmdDtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA+IHZpc2libGVSZWN0LmJvdHRvbSB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPCB2aXNpYmxlUmVjdC50b3A7XG59XG5cbmZ1bmN0aW9uIGZsaXAocG9pbnRzLCByZWcsIG1hcCkge1xuICB2YXIgcmV0ID0gW107XG4gIF91dGlsczJbXCJkZWZhdWx0XCJdLmVhY2gocG9pbnRzLCBmdW5jdGlvbiAocCkge1xuICAgIHJldC5wdXNoKHAucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbWFwW21dO1xuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZsaXBPZmZzZXQob2Zmc2V0LCBpbmRleCkge1xuICBvZmZzZXRbaW5kZXhdID0gLW9mZnNldFtpbmRleF07XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoc3RyLCBvZmZzZXRMZW4pIHtcbiAgdmFyIG4gPSB2b2lkIDA7XG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuICByZXR1cm4gbiB8fCAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbCkge1xuICBvZmZzZXRbMF0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFswXSwgZWwud2lkdGgpO1xuICBvZmZzZXRbMV0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFsxXSwgZWwuaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZG9tQWxpZ24oZWwsIHJlZk5vZGUsIGFsaWduKSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIG92ZXJmbG93ID0gYWxpZ24ub3ZlcmZsb3c7XG4gIHZhciB0YXJnZXQgPSBhbGlnbi50YXJnZXQgfHwgcmVmTm9kZTtcbiAgdmFyIHNvdXJjZSA9IGFsaWduLnNvdXJjZSB8fCBlbDtcbiAgb2Zmc2V0ID0gW10uY29uY2F0KG9mZnNldCk7XG4gIHRhcmdldE9mZnNldCA9IFtdLmNvbmNhdCh0YXJnZXRPZmZzZXQpO1xuICBvdmVyZmxvdyA9IG92ZXJmbG93IHx8IHt9O1xuICB2YXIgbmV3T3ZlcmZsb3dDZmcgPSB7fTtcblxuICB2YXIgZmFpbCA9IDA7XG4gIC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuICB2YXIgdmlzaWJsZVJlY3QgPSAoMCwgX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudDJbXCJkZWZhdWx0XCJdKShzb3VyY2UpO1xuICAvLyDlvZPliY3oioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuICB2YXIgZWxSZWdpb24gPSAoMCwgX2dldFJlZ2lvbjJbXCJkZWZhdWx0XCJdKShzb3VyY2UpO1xuICAvLyDlj4LnhafoioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuICB2YXIgcmVmTm9kZVJlZ2lvbiA9ICgwLCBfZ2V0UmVnaW9uMltcImRlZmF1bHRcIl0pKHRhcmdldCk7XG4gIC8vIOWwhiBvZmZzZXQg6L2s5o2i5oiQ5pWw5YC877yM5pSv5oyB55m+5YiG5q+UXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgcmVmTm9kZVJlZ2lvbik7XG4gIC8vIOW9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICB2YXIgZWxGdXR1cmVQb3MgPSAoMCwgX2dldEVsRnV0dXJlUG9zMltcImRlZmF1bHRcIl0pKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgLy8g5b2T5YmN6IqC54K55bCG6KaB5omA5aSE55qE5Yy65Z+fXG4gIHZhciBuZXdFbFJlZ2lvbiA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG5cbiAgLy8g5aaC5p6c5Y+v6KeG5Yy65Z+f5LiN6IO95a6M5YWo5pS+572u5b2T5YmN6IqC54K55pe25YWB6K646LCD5pW0XG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSkge1xuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RYKSB7XG4gICAgICAvLyDlpoLmnpzmqKrlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bbHJdL2lnLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIG5ld1BvaW50cywgbmV3T2Zmc2V0LCBuZXdUYXJnZXRPZmZzZXQpO1xuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWChuZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFkpIHtcbiAgICAgIC8vIOWmguaenOe6teWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bdGJdL2lnLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuICAgICAgICB2YXIgX25ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAxKTtcbiAgICAgICAgdmFyIF9uZXdFbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIF9uZXdQb2ludHMsIF9uZXdPZmZzZXQsIF9uZXdUYXJnZXRPZmZzZXQpO1xuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWmguaenOWksei0pe+8jOmHjeaWsOiuoeeul+W9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAgICAgX3V0aWxzMltcImRlZmF1bHRcIl0ubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5Y+N5LiL5ZCO55qE5L2N572u5piv5ZCm5Y+v5Lul5pS+5LiL5LqGXG4gICAgLy8g5aaC5p6c5LuN54S25pS+5LiN5LiL5Y+q5pyJ5oyH5a6a5LqG5Y+v5Lul6LCD5pW05b2T5YmN5pa55ZCR5omN6LCD5pW0XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCA9IG92ZXJmbG93LmFkanVzdFggJiYgaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcblxuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFkgPSBvdmVyZmxvdy5hZGp1c3RZICYmIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG5cbiAgICAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcbiAgICBpZiAobmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCB8fCBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZKSB7XG4gICAgICBuZXdFbFJlZ2lvbiA9ICgwLCBfYWRqdXN0Rm9yVmlld3BvcnQyW1wiZGVmYXVsdFwiXSkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5lZWQganVkZ2UgdG8gaW4gY2FzZSBzZXQgZml4ZWQgd2l0aCBpbiBjc3Mgb24gaGVpZ2h0IGF1dG8gZWxlbWVudFxuICBpZiAobmV3RWxSZWdpb24ud2lkdGggIT09IGVsUmVnaW9uLndpZHRoKSB7XG4gICAgX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKHNvdXJjZSwgJ3dpZHRoJywgX3V0aWxzMltcImRlZmF1bHRcIl0ud2lkdGgoc291cmNlKSArIG5ld0VsUmVnaW9uLndpZHRoIC0gZWxSZWdpb24ud2lkdGgpO1xuICB9XG5cbiAgaWYgKG5ld0VsUmVnaW9uLmhlaWdodCAhPT0gZWxSZWdpb24uaGVpZ2h0KSB7XG4gICAgX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKHNvdXJjZSwgJ2hlaWdodCcsIF91dGlsczJbXCJkZWZhdWx0XCJdLmhlaWdodChzb3VyY2UpICsgbmV3RWxSZWdpb24uaGVpZ2h0IC0gZWxSZWdpb24uaGVpZ2h0KTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzE5MFxuICAvLyDnm7jlr7nkuo7lsY/luZXkvY3nva7msqHlj5jvvIzogIwgbGVmdC90b3Ag5Y+Y5LqGXG4gIC8vIOS+i+WmgiA8ZGl2ICdyZWxhdGl2ZSc+PGVsIGFic29sdXRlPjwvZGl2PlxuICBfdXRpbHMyW1wiZGVmYXVsdFwiXS5vZmZzZXQoc291cmNlLCB7XG4gICAgbGVmdDogbmV3RWxSZWdpb24ubGVmdCxcbiAgICB0b3A6IG5ld0VsUmVnaW9uLnRvcFxuICB9LCB7XG4gICAgdXNlQ3NzUmlnaHQ6IGFsaWduLnVzZUNzc1JpZ2h0LFxuICAgIHVzZUNzc0JvdHRvbTogYWxpZ24udXNlQ3NzQm90dG9tLFxuICAgIHVzZUNzc1RyYW5zZm9ybTogYWxpZ24udXNlQ3NzVHJhbnNmb3JtXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG5cbmRvbUFsaWduLl9fZ2V0T2Zmc2V0UGFyZW50ID0gX2dldE9mZnNldFBhcmVudDJbXCJkZWZhdWx0XCJdO1xuXG5kb21BbGlnbi5fX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkb21BbGlnbjtcbi8qKlxuICogIDIwMTItMDQtMjYgeWltaW5naGVAZ21haWwuY29tXG4gKiAgIC0g5LyY5YyW5pm66IO95a+56b2Q566X5rOVXG4gKiAgIC0g5oWO55SoIHJlc2l6ZVhYXG4gKlxuICogIDIwMTEtMDctMTMgeWltaW5naGVAZ21haWwuY29tIG5vdGU6XG4gKiAgIC0g5aKe5Yqg5pm66IO95a+56b2Q77yM5Lul5Y+K5aSn5bCP6LCD5pW06YCJ6aG5XG4gKiovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3Byb3BlcnR5VXRpbHMgPSByZXF1aXJlKCcuL3Byb3BlcnR5VXRpbHMnKTtcblxudmFyIFJFX05VTSA9IC9bXFwtK10/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bXFwtK10/XFxkK3wpLy5zb3VyY2U7XG5cbnZhciBnZXRDb21wdXRlZFN0eWxlWCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gZm9yY2UoeCwgeSkge1xuICByZXR1cm4geCArIHk7XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgbmFtZSwgdikge1xuICB2YXIgdmFsdWUgPSB2O1xuICBpZiAoKHR5cGVvZiBuYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuYW1lKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgaSBpbiBuYW1lKSB7XG4gICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBjc3MoZWwsIGksIG5hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgICBlbC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94ID0gdm9pZCAwO1xuICB2YXIgeCA9IHZvaWQgMDtcbiAgdmFyIHkgPSB2b2lkIDA7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gIC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wO1xuXG4gIC8vIEluIElFLCBtb3N0IG9mIHRoZSB0aW1lLCAyIGV4dHJhIHBpeGVscyBhcmUgYWRkZWQgdG8gdGhlIHRvcCBhbmQgbGVmdFxuICAvLyBkdWUgdG8gdGhlIGltcGxpY2l0IDItcGl4ZWwgaW5zZXQgYm9yZGVyLiAgSW4gSUU2LzcgcXVpcmtzIG1vZGUgYW5kXG4gIC8vIElFNiBzdGFuZGFyZHMgbW9kZSwgdGhpcyBib3JkZXIgY2FuIGJlIG92ZXJyaWRkZW4gYnkgc2V0dGluZyB0aGVcbiAgLy8gZG9jdW1lbnQgZWxlbWVudCdzIGJvcmRlciB0byB6ZXJvIC0tIHRodXMsIHdlIGNhbm5vdCByZWx5IG9uIHRoZVxuICAvLyBvZmZzZXQgYWx3YXlzIGJlaW5nIDIgcGl4ZWxzLlxuXG4gIC8vIEluIHF1aXJrcyBtb2RlLCB0aGUgb2Zmc2V0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IHF1ZXJ5aW5nIHRoZSBib2R5J3NcbiAgLy8gY2xpZW50TGVmdC9jbGllbnRUb3AsIGJ1dCBpbiBzdGFuZGFyZHMgbW9kZSwgaXQgaXMgZm91bmQgYnkgcXVlcnlpbmdcbiAgLy8gdGhlIGRvY3VtZW50IGVsZW1lbnQncyBjbGllbnRMZWZ0L2NsaWVudFRvcC4gIFNpbmNlIHdlIGFscmVhZHkgY2FsbGVkXG4gIC8vIGdldENsaWVudEJvdW5kaW5nUmVjdCB3ZSBoYXZlIGFscmVhZHkgZm9yY2VkIGEgcmVmbG93LCBzbyBpdCBpcyBub3RcbiAgLy8gdG9vIGV4cGVuc2l2ZSBqdXN0IHRvIHF1ZXJ5IHRoZW0gYWxsLlxuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgdmFyIG1ldGhvZCA9ICdzY3JvbGwnICsgKHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcbiAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgdmFyIGQgPSB3LmRvY3VtZW50O1xuICAgIC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3Aodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHBvcyA9IGdldENsaWVudFBvc2l0aW9uKGVsKTtcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHBvcy5sZWZ0ICs9IGdldFNjcm9sbExlZnQodyk7XG4gIHBvcy50b3AgKz0gZ2V0U2Nyb2xsVG9wKHcpO1xuICByZXR1cm4gcG9zO1xufVxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbSwgbmFtZSwgY3MpIHtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBjcztcbiAgdmFyIHZhbCA9ICcnO1xuICB2YXIgZCA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzYxXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoJ14oJyArIFJFX05VTSArICcpKD8hcHgpW2EteiVdKyQnLCAnaScpO1xudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTtcblxuICAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuXG4gIC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcbiAgLy8gaHR0cDovL2VyaWsuZWFlLm5ldC9hcmNoaXZlcy8yMDA3LzA3LzI3LzE4LjU0LjE1LyNjb21tZW50LTEwMjI5MVxuICAvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcbiAgLy8gYnV0IGEgbnVtYmVyIHRoYXQgaGFzIGEgd2VpcmQgZW5kaW5nLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gcGl4ZWxzXG4gIC8vIGV4Y2x1ZGUgbGVmdCByaWdodCBmb3IgcmVsYXRpdml0eVxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSBlbGVtW0NVUlJFTlRfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7XG5cbiAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IHJzTGVmdDtcbiAgfVxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuICByZXR1cm4gb3B0aW9uLnVzZUNzc0JvdHRvbSA/ICdib3R0b20nIDogZGlyO1xufVxuXG5mdW5jdGlvbiBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihkaXIpIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbn1cblxuLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG4gIHZhciBwcmVzZXRIID0gLTk5OTtcbiAgdmFyIHByZXNldFYgPSAtOTk5O1xuICB2YXIgaG9yaXpvbnRhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCdsZWZ0Jywgb3B0aW9uKTtcbiAgdmFyIHZlcnRpY2FsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ3RvcCcsIG9wdGlvbik7XG4gIHZhciBvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGhvcml6b250YWxQcm9wZXJ0eSk7XG4gIHZhciBvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbih2ZXJ0aWNhbFByb3BlcnR5KTtcblxuICBpZiAoaG9yaXpvbnRhbFByb3BlcnR5ICE9PSAnbGVmdCcpIHtcbiAgICBwcmVzZXRIID0gOTk5O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsUHJvcGVydHkgIT09ICd0b3AnKSB7XG4gICAgcHJlc2V0ViA9IDk5OTtcbiAgfVxuICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uID0gJyc7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gKDAsIF9wcm9wZXJ0eVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSkoZWxlbSkgfHwgJyc7XG4gICAgKDAsIF9wcm9wZXJ0eVV0aWxzLnNldFRyYW5zaXRpb25Qcm9wZXJ0eSkoZWxlbSwgJ25vbmUnKTtcbiAgfVxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVtob3Jpem9udGFsUHJvcGVydHldID0gcHJlc2V0SCArICdweCc7XG4gIH1cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbdmVydGljYWxQcm9wZXJ0eV0gPSBwcmVzZXRWICsgJ3B4JztcbiAgfVxuICB2YXIgb2xkID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKGtleSwgb3B0aW9uKTtcbiAgICAgIHZhciBwcmVzZXQgPSBrZXkgPT09ICdsZWZ0JyA/IHByZXNldEggOiBwcmVzZXRWO1xuICAgICAgdmFyIG9mZiA9IG9yaWdpbmFsT2Zmc2V0W2tleV0gLSBvbGRba2V5XTtcbiAgICAgIGlmIChkaXIgPT09IGtleSkge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgKyBvZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgLSBvZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNzcyhlbGVtLCBvcmlnaW5hbFN0eWxlKTtcbiAgLy8gZm9yY2UgcmVsYXlvdXRcbiAgZm9yY2UoZWxlbS5vZmZzZXRUb3AsIGVsZW0ub2Zmc2V0TGVmdCk7XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgICgwLCBfcHJvcGVydHlVdGlscy5zZXRUcmFuc2l0aW9uUHJvcGVydHkpKGVsZW0sIG9yaWdpbmFsVHJhbnNpdGlvbik7XG4gIH1cbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBfa2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgIHZhciBfZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKF9rZXksIG9wdGlvbik7XG4gICAgICB2YXIgX29mZiA9IG9mZnNldFtfa2V5XSAtIG9yaWdpbmFsT2Zmc2V0W19rZXldO1xuICAgICAgaWYgKF9rZXkgPT09IF9kaXIpIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSArIF9vZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdIC0gX29mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIHJldCk7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbGVtLCBvZmZzZXQpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxYWSA9ICgwLCBfcHJvcGVydHlVdGlscy5nZXRUcmFuc2Zvcm1YWSkoZWxlbSk7XG4gIHZhciByZXN1bHRYWSA9IHsgeDogb3JpZ2luYWxYWS54LCB5OiBvcmlnaW5hbFhZLnkgfTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS54ID0gb3JpZ2luYWxYWS54ICsgb2Zmc2V0LmxlZnQgLSBvcmlnaW5hbE9mZnNldC5sZWZ0O1xuICB9XG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuICAoMCwgX3Byb3BlcnR5VXRpbHMuc2V0VHJhbnNmb3JtWFkpKGVsZW0sIHJlc3VsdFhZKTtcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgKDAsIF9wcm9wZXJ0eVV0aWxzLmdldFRyYW5zZm9ybU5hbWUpKCkgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSkge1xuICAgIHNldFRyYW5zZm9ybShlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWFjaChhcnIsIGZuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm4oYXJyW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0JvcmRlckJveEZuKGVsZW0pIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsZW0sICdib3hTaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnO1xufVxuXG52YXIgQk9YX01PREVMUyA9IFsnbWFyZ2luJywgJ2JvcmRlcicsICdwYWRkaW5nJ107XG52YXIgQ09OVEVOVF9JTkRFWCA9IC0xO1xudmFyIFBBRERJTkdfSU5ERVggPSAyO1xudmFyIEJPUkRFUl9JTkRFWCA9IDE7XG52YXIgTUFSR0lOX0lOREVYID0gMDtcblxuZnVuY3Rpb24gc3dhcChlbGVtLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgb2xkID0ge307XG4gIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gIHZhciBuYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBvbGRbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICAgIHN0eWxlW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjay5jYWxsKGVsZW0pO1xuXG4gIC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBzdHlsZVtuYW1lXSA9IG9sZFtuYW1lXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UEJNV2lkdGgoZWxlbSwgcHJvcHMsIHdoaWNoKSB7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciBwcm9wID0gdm9pZCAwO1xuICB2YXIgaiA9IHZvaWQgMDtcbiAgdmFyIGkgPSB2b2lkIDA7XG4gIGZvciAoaiA9IDA7IGogPCBwcm9wcy5sZW5ndGg7IGorKykge1xuICAgIHByb3AgPSBwcm9wc1tqXTtcbiAgICBpZiAocHJvcCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHdoaWNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjc3NQcm9wID0gdm9pZCAwO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2JvcmRlcicpIHtcbiAgICAgICAgICBjc3NQcm9wID0gJycgKyBwcm9wICsgd2hpY2hbaV0gKyAnV2lkdGgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAvLyBtdXN0IHVzZSA9PSBmb3IgaWU4XG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG52YXIgZG9tVXRpbHMgPSB7fTtcblxuZWFjaChbJ1dpZHRoJywgJ0hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICBkb21VdGlsc1snZG9jJyArIG5hbWVdID0gZnVuY3Rpb24gKHJlZldpbikge1xuICAgIHZhciBkID0gcmVmV2luLmRvY3VtZW50O1xuICAgIHJldHVybiBNYXRoLm1heChcbiAgICAvLyBmaXJlZm94IGNocm9tZSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PCBib2R5LnNjcm9sbEhlaWdodFxuICAgIC8vIGllIHN0YW5kYXJkIG1vZGUgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PiBib2R5LnNjcm9sbEhlaWdodFxuICAgIGQuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgbmFtZV0sXG4gICAgLy8gcXVpcmtzIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCDmnIDlpKfnrYnkuo7lj6/op4bnqpflj6PlpJrkuIDngrnvvJ9cbiAgICBkLmJvZHlbJ3Njcm9sbCcgKyBuYW1lXSwgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdKGQpKTtcbiAgfTtcblxuICBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0gPSBmdW5jdGlvbiAod2luKSB7XG4gICAgLy8gcGMgYnJvd3NlciBpbmNsdWRlcyBzY3JvbGxiYXIgaW4gd2luZG93LmlubmVyV2lkdGhcbiAgICB2YXIgcHJvcCA9ICdjbGllbnQnICsgbmFtZTtcbiAgICB2YXIgZG9jID0gd2luLmRvY3VtZW50O1xuICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudFByb3AgPSBkb2N1bWVudEVsZW1lbnRbcHJvcF07XG4gICAgLy8g5qCH5YeG5qih5byP5Y+WIGRvY3VtZW50RWxlbWVudFxuICAgIC8vIGJhY2tjb21wYXQg5Y+WIGJvZHlcbiAgICByZXR1cm4gZG9jLmNvbXBhdE1vZGUgPT09ICdDU1MxQ29tcGF0JyAmJiBkb2N1bWVudEVsZW1lbnRQcm9wIHx8IGJvZHkgJiYgYm9keVtwcm9wXSB8fCBkb2N1bWVudEVsZW1lbnRQcm9wO1xuICB9O1xufSk7XG5cbi8qXG4g5b6X5Yiw5YWD57Sg55qE5aSn5bCP5L+h5oGvXG4gQHBhcmFtIGVsZW1cbiBAcGFyYW0gbmFtZVxuIEBwYXJhbSB7U3RyaW5nfSBbZXh0cmFdICAncGFkZGluZycgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmdcbiAnYm9yZGVyJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlclxuICdtYXJnaW4nIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyICsgbWFyZ2luXG4gKi9cbmZ1bmN0aW9uIGdldFdIKGVsZW0sIG5hbWUsIGV4KSB7XG4gIHZhciBleHRyYSA9IGV4O1xuICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLnZpZXdwb3J0V2lkdGgoZWxlbSkgOiBkb21VdGlscy52aWV3cG9ydEhlaWdodChlbGVtKTtcbiAgfSBlbHNlIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy5kb2NXaWR0aChlbGVtKSA6IGRvbVV0aWxzLmRvY0hlaWdodChlbGVtKTtcbiAgfVxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgdmFyIGJvcmRlckJveFZhbHVlID0gbmFtZSA9PT0gJ3dpZHRoJyA/IGVsZW0ub2Zmc2V0V2lkdGggOiBlbGVtLm9mZnNldEhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtLCBjb21wdXRlZFN0eWxlKTtcbiAgdmFyIGNzc0JveFZhbHVlID0gMDtcbiAgaWYgKGJvcmRlckJveFZhbHVlID09PSBudWxsIHx8IGJvcmRlckJveFZhbHVlID09PSB1bmRlZmluZWQgfHwgYm9yZGVyQm94VmFsdWUgPD0gMCkge1xuICAgIGJvcmRlckJveFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuIGNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcbiAgICBjc3NCb3hWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIG5hbWUpO1xuICAgIGlmIChjc3NCb3hWYWx1ZSA9PT0gbnVsbCB8fCBjc3NCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IE51bWJlcihjc3NCb3hWYWx1ZSkgPCAwKSB7XG4gICAgICBjc3NCb3hWYWx1ZSA9IGVsZW0uc3R5bGVbbmFtZV0gfHwgMDtcbiAgICB9XG4gICAgLy8gTm9ybWFsaXplICcnLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcbiAgICBjc3NCb3hWYWx1ZSA9IHBhcnNlRmxvYXQoY3NzQm94VmFsdWUpIHx8IDA7XG4gIH1cbiAgaWYgKGV4dHJhID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYSA9IGlzQm9yZGVyQm94ID8gQk9SREVSX0lOREVYIDogQ09OVEVOVF9JTkRFWDtcbiAgfVxuICB2YXIgYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94ID0gYm9yZGVyQm94VmFsdWUgIT09IHVuZGVmaW5lZCB8fCBpc0JvcmRlckJveDtcbiAgdmFyIHZhbCA9IGJvcmRlckJveFZhbHVlIHx8IGNzc0JveFZhbHVlO1xuICBpZiAoZXh0cmEgPT09IENPTlRFTlRfSU5ERVgpIHtcbiAgICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgICByZXR1cm4gdmFsIC0gZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInLCAncGFkZGluZyddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBjc3NCb3hWYWx1ZTtcbiAgfSBlbHNlIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICBpZiAoZXh0cmEgPT09IEJPUkRFUl9JTkRFWCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbCArIChleHRyYSA9PT0gUEFERElOR19JTkRFWCA/IC1nZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSkgOiBnZXRQQk1XaWR0aChlbGVtLCBbJ21hcmdpbiddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSkpO1xuICB9XG4gIHJldHVybiBjc3NCb3hWYWx1ZSArIGdldFBCTVdpZHRoKGVsZW0sIEJPWF9NT0RFTFMuc2xpY2UoZXh0cmEpLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG59XG5cbnZhciBjc3NTaG93ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdibG9jaydcbn07XG5cbi8vIGZpeCAjMTE5IDogaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTE5XG5mdW5jdGlvbiBnZXRXSElnbm9yZURpc3BsYXkoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHZhbCA9IHZvaWQgMDtcbiAgdmFyIGVsZW0gPSBhcmdzWzBdO1xuICAvLyBpbiBjYXNlIGVsZW0gaXMgd2luZG93XG4gIC8vIGVsZW0ub2Zmc2V0V2lkdGggPT09IHVuZGVmaW5lZFxuICBpZiAoZWxlbS5vZmZzZXRXaWR0aCAhPT0gMCkge1xuICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgc3dhcChlbGVtLCBjc3NTaG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbmVhY2goWyd3aWR0aCcsICdoZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGZpcnN0ID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIGRvbVV0aWxzWydvdXRlcicgKyBmaXJzdF0gPSBmdW5jdGlvbiAoZWwsIGluY2x1ZGVNYXJnaW4pIHtcbiAgICByZXR1cm4gZWwgJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsLCBuYW1lLCBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX0lOREVYIDogQk9SREVSX0lOREVYKTtcbiAgfTtcbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG5cbiAgZG9tVXRpbHNbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgdikge1xuICAgIHZhciB2YWwgPSB2O1xuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgICAgICAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcbiAgICAgICAgaWYgKGlzQm9yZGVyQm94KSB7XG4gICAgICAgICAgdmFsICs9IGdldFBCTVdpZHRoKGVsZW0sIFsncGFkZGluZycsICdib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3MoZWxlbSwgbmFtZSwgdmFsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtICYmIGdldFdISWdub3JlRGlzcGxheShlbGVtLCBuYW1lLCBDT05URU5UX0lOREVYKTtcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtaXgodG8sIGZyb20pIHtcbiAgZm9yICh2YXIgaSBpbiBmcm9tKSB7XG4gICAgaWYgKGZyb20uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRvW2ldID0gZnJvbVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG52YXIgdXRpbHMgPSB7XG4gIGdldFdpbmRvdzogZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmRvY3VtZW50ICYmIG5vZGUuc2V0VGltZW91dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUsIG9wdGlvbiB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcblxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjI7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59O1xuXG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB1dGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRyYW5zZm9ybU5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lO1xuZXhwb3J0cy5zZXRUcmFuc2l0aW9uUHJvcGVydHkgPSBzZXRUcmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0eTtcbmV4cG9ydHMuZ2V0VHJhbnNmb3JtWFkgPSBnZXRUcmFuc2Zvcm1YWTtcbmV4cG9ydHMuc2V0VHJhbnNmb3JtWFkgPSBzZXRUcmFuc2Zvcm1YWTtcbnZhciB2ZW5kb3JQcmVmaXggPSB2b2lkIDA7XG5cbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuICB2ZW5kb3JQcmVmaXggPSAnJztcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlO1xuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcbiAgZm9yICh2YXIga2V5IGluIGpzQ3NzTWFwKSB7XG4gICAgaWYgKGtleSArIHRlc3RQcm9wIGluIHN0eWxlKSB7XG4gICAgICB2ZW5kb3JQcmVmaXggPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2l0aW9uUHJvcGVydHknIDogJ3RyYW5zaXRpb25Qcm9wZXJ0eSc7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybU5hbWUoKSB7XG4gIHJldHVybiBnZXRWZW5kb3JQcmVmaXgoKSA/IGdldFZlbmRvclByZWZpeCgpICsgJ1RyYW5zZm9ybScgOiAndHJhbnNmb3JtJztcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2l0aW9uUHJvcGVydHknKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0obm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lKCk7XG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIGlmIChuYW1lICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5IHx8IG5vZGUuc3R5bGVbZ2V0VHJhbnNpdGlvbk5hbWUoKV07XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVhZKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICB2YXIgbWF0cml4ID0gdHJhbnNmb3JtLnJlcGxhY2UoL1teMC05XFwtLixdL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB7IHg6IHBhcnNlRmxvYXQobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0sIDApLCB5OiBwYXJzZUZsb2F0KG1hdHJpeFsxM10gfHwgbWF0cml4WzVdLCAwKSB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59XG5cbnZhciBtYXRyaXgyZCA9IC9tYXRyaXhcXCgoLiopXFwpLztcbnZhciBtYXRyaXgzZCA9IC9tYXRyaXgzZFxcKCguKilcXCkvO1xuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm1YWShub2RlLCB4eSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBhcnIgPSB2b2lkIDA7XG4gICAgdmFyIG1hdGNoMmQgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4MmQpO1xuICAgIGlmIChtYXRjaDJkKSB7XG4gICAgICBtYXRjaDJkID0gbWF0Y2gyZFsxXTtcbiAgICAgIGFyciA9IG1hdGNoMmQuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbNF0gPSB4eS54O1xuICAgICAgYXJyWzVdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCAnbWF0cml4KCcgKyBhcnIuam9pbignLCcpICsgJyknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoM2QgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4M2QpWzFdO1xuICAgICAgYXJyID0gbWF0Y2gzZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFyclsxMl0gPSB4eS54O1xuICAgICAgYXJyWzEzXSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ21hdHJpeDNkKCcgKyBhcnIuam9pbignLCcpICsgJyknKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0VHJhbnNmb3JtKG5vZGUsICd0cmFuc2xhdGVYKCcgKyB4eS54ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB4eS55ICsgJ3B4KSB0cmFuc2xhdGVaKDApJyk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9wcm9wZXJ0eVV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcbiAgLypcbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O292ZXJmbG93OiBoaWRkZW5cIj5cbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIiBpZD1cImQ2XCI+XG4gICDlhYPntKAgNiDpq5ggMTAwcHgg5a69IDUwcHg8YnIvPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgICovXG4gIC8vIGVsZW1lbnQub2Zmc2V0UGFyZW50IGRvZXMgdGhlIHJpZ2h0IHRoaW5nIGluIGllNyBhbmQgYmVsb3cuIFJldHVybiBwYXJlbnQgd2l0aCBsYXlvdXQhXG4gIC8vICBJbiBvdGhlciBicm93c2VycyBpdCBvbmx5IGluY2x1ZGVzIGVsZW1lbnRzIHdpdGggcG9zaXRpb24gYWJzb2x1dGUsIHJlbGF0aXZlIG9yXG4gIC8vIGZpeGVkLCBub3QgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBzZXQgdG8gYXV0byBvciBzY3JvbGwuXG4gIC8vICAgICAgICBpZiAoVUEuaWUgJiYgaWVNb2RlIDwgOCkge1xuICAvLyAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gICAgICAgIH1cbiAgLy8g57uf5LiA55qEIG9mZnNldFBhcmVudCDmlrnms5VcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgdmFyIHBvc2l0aW9uU3R5bGUgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gIHZhciBza2lwU3RhdGljID0gcG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJyB8fCBwb3NpdGlvblN0eWxlID09PSAnYWJzb2x1dGUnO1xuXG4gIGlmICghc2tpcFN0YXRpYykge1xuICAgIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJyA/IG51bGwgOiBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICBmb3IgKHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keTsgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICBwb3NpdGlvblN0eWxlID0gX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKHBhcmVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgIT09ICdzdGF0aWMnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRPZmZzZXRQYXJlbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRPZmZzZXRQYXJlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbnZhciBfZ2V0T2Zmc2V0UGFyZW50ID0gcmVxdWlyZSgnLi9nZXRPZmZzZXRQYXJlbnQnKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T2Zmc2V0UGFyZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICog6I635b6X5YWD57Sg55qE5pi+56S66YOo5YiG55qE5Yy65Z+fXG4gKi9cbmZ1bmN0aW9uIGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IHtcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiBJbmZpbml0eSxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiBJbmZpbml0eVxuICB9O1xuICB2YXIgZWwgPSAoMCwgX2dldE9mZnNldFBhcmVudDJbXCJkZWZhdWx0XCJdKShlbGVtZW50KTtcbiAgdmFyIHNjcm9sbFggPSB2b2lkIDA7XG4gIHZhciBzY3JvbGxZID0gdm9pZCAwO1xuICB2YXIgd2luU2l6ZSA9IHZvaWQgMDtcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgdGhlIHZpc2libGUgcmVjdCBieSBjbGltYmluZyB0aGUgZG9tIGFjY291bnRpbmcgZm9yXG4gIC8vIGFsbCBzY3JvbGxhYmxlIGNvbnRhaW5lcnMuXG4gIHdoaWxlIChlbCkge1xuICAgIC8vIGNsaWVudFdpZHRoIGlzIHplcm8gZm9yIGlubGluZSBibG9jayBlbGVtZW50cyBpbiBpZS5cbiAgICBpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpID09PSAtMSB8fCBlbC5jbGllbnRXaWR0aCAhPT0gMCkgJiZcbiAgICAvLyBib2R5IG1heSBoYXZlIG92ZXJmbG93IHNldCBvbiBpdCwgeWV0IHdlIHN0aWxsIGdldCB0aGUgZW50aXJlXG4gICAgLy8gdmlld3BvcnQuIEluIHNvbWUgYnJvd3NlcnMsIGVsLm9mZnNldFBhcmVudCBtYXkgYmVcbiAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHNvIGNoZWNrIGZvciB0aGF0IHRvby5cbiAgICBlbCAhPT0gYm9keSAmJiBlbCAhPT0gZG9jdW1lbnRFbGVtZW50ICYmIF91dGlsczJbXCJkZWZhdWx0XCJdLmNzcyhlbCwgJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgdmFyIHBvcyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm9mZnNldChlbCk7XG4gICAgICAvLyBhZGQgYm9yZGVyXG4gICAgICBwb3MubGVmdCArPSBlbC5jbGllbnRMZWZ0O1xuICAgICAgcG9zLnRvcCArPSBlbC5jbGllbnRUb3A7XG4gICAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHBvcy50b3ApO1xuICAgICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCxcbiAgICAgIC8vIGNvbnNpZGVyIGFyZWEgd2l0aG91dCBzY3JvbGxCYXJcbiAgICAgIHBvcy5sZWZ0ICsgZWwuY2xpZW50V2lkdGgpO1xuICAgICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBwb3MudG9wICsgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBwb3MubGVmdCk7XG4gICAgfSBlbHNlIGlmIChlbCA9PT0gYm9keSB8fCBlbCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZWwgPSAoMCwgX2dldE9mZnNldFBhcmVudDJbXCJkZWZhdWx0XCJdKShlbCk7XG4gIH1cblxuICAvLyBDbGlwIGJ5IHdpbmRvdydzIHZpZXdwb3J0LlxuICBzY3JvbGxYID0gX3V0aWxzMltcImRlZmF1bHRcIl0uZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICBzY3JvbGxZID0gX3V0aWxzMltcImRlZmF1bHRcIl0uZ2V0V2luZG93U2Nyb2xsVG9wKHdpbik7XG4gIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBzY3JvbGxYKTtcbiAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBzY3JvbGxZKTtcbiAgd2luU2l6ZSA9IHtcbiAgICB3aWR0aDogX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRXaWR0aCh3aW4pLFxuICAgIGhlaWdodDogX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRIZWlnaHQod2luKVxuICB9O1xuICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBzY3JvbGxYICsgd2luU2l6ZS53aWR0aCk7XG4gIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgc2Nyb2xsWSArIHdpblNpemUuaGVpZ2h0KTtcbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG92ZXJmbG93KSB7XG4gIHZhciBwb3MgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIExlZnQgZWRnZSBpbnNpZGUgYW5kIHJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9XG5cbiAgLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICAvLyDkv53or4Hlt6bovrnnlYzlkozlj6/op4bljLrln5/lt6bovrnnlYzlr7npvZBcbiAgICBwb3MubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCwgdmlzaWJsZVJlY3QubGVmdCk7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBpbnNpZGUgYW5kIGJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9XG5cbiAgLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIC8vIOS/neivgeS4iui+ueeVjOWSjOWPr+inhuWMuuWfn+S4iui+ueeVjOWvuem9kFxuICAgIHBvcy50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCwgdmlzaWJsZVJlY3QudG9wKTtcbiAgfVxuXG4gIHJldHVybiBfdXRpbHMyW1wiZGVmYXVsdFwiXS5taXgocG9zLCBzaXplKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhZGp1c3RGb3JWaWV3cG9ydDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2FkanVzdEZvclZpZXdwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0UmVnaW9uKG5vZGUpIHtcbiAgdmFyIG9mZnNldCA9IHZvaWQgMDtcbiAgdmFyIHcgPSB2b2lkIDA7XG4gIHZhciBoID0gdm9pZCAwO1xuICBpZiAoIV91dGlsczJbXCJkZWZhdWx0XCJdLmlzV2luZG93KG5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvZmZzZXQgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5vZmZzZXQobm9kZSk7XG4gICAgdyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm91dGVySGVpZ2h0KG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB3aW4gPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogX3V0aWxzMltcImRlZmF1bHRcIl0uZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgdyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuICBvZmZzZXQud2lkdGggPSB3O1xuICBvZmZzZXQuaGVpZ2h0ID0gaDtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRSZWdpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRSZWdpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRBbGlnbk9mZnNldCA9IHJlcXVpcmUoJy4vZ2V0QWxpZ25PZmZzZXQnKTtcblxudmFyIF9nZXRBbGlnbk9mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRBbGlnbk9mZnNldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCkge1xuICB2YXIgeHkgPSB2b2lkIDA7XG4gIHZhciBkaWZmID0gdm9pZCAwO1xuICB2YXIgcDEgPSB2b2lkIDA7XG4gIHZhciBwMiA9IHZvaWQgMDtcblxuICB4eSA9IHtcbiAgICBsZWZ0OiBlbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogZWxSZWdpb24udG9wXG4gIH07XG5cbiAgcDEgPSAoMCwgX2dldEFsaWduT2Zmc2V0MltcImRlZmF1bHRcIl0pKHJlZk5vZGVSZWdpb24sIHBvaW50c1sxXSk7XG4gIHAyID0gKDAsIF9nZXRBbGlnbk9mZnNldDJbXCJkZWZhdWx0XCJdKShlbFJlZ2lvbiwgcG9pbnRzWzBdKTtcblxuICBkaWZmID0gW3AyLmxlZnQgLSBwMS5sZWZ0LCBwMi50b3AgLSBwMS50b3BdO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeHkubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0sXG4gICAgdG9wOiB4eS50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdXG4gIH07XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0RWxGdXR1cmVQb3M7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRFbEZ1dHVyZVBvcy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiDojrflj5Ygbm9kZSDkuIrnmoQgYWxpZ24g5a+56b2Q54K5IOebuOWvueS6jumhtemdoueahOWdkOagh1xuICovXG5cbmZ1bmN0aW9uIGdldEFsaWduT2Zmc2V0KHJlZ2lvbiwgYWxpZ24pIHtcbiAgdmFyIFYgPSBhbGlnbi5jaGFyQXQoMCk7XG4gIHZhciBIID0gYWxpZ24uY2hhckF0KDEpO1xuICB2YXIgdyA9IHJlZ2lvbi53aWR0aDtcbiAgdmFyIGggPSByZWdpb24uaGVpZ2h0O1xuICB2YXIgeCA9IHZvaWQgMDtcbiAgdmFyIHkgPSB2b2lkIDA7XG5cbiAgeCA9IHJlZ2lvbi5sZWZ0O1xuICB5ID0gcmVnaW9uLnRvcDtcblxuICBpZiAoViA9PT0gJ2MnKSB7XG4gICAgeSArPSBoIC8gMjtcbiAgfSBlbHNlIGlmIChWID09PSAnYicpIHtcbiAgICB5ICs9IGg7XG4gIH1cblxuICBpZiAoSCA9PT0gJ2MnKSB7XG4gICAgeCArPSB3IC8gMjtcbiAgfSBlbHNlIGlmIChIID09PSAncicpIHtcbiAgICB4ICs9IHc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0QWxpZ25PZmZzZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRBbGlnbk9mZnNldC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxyXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGZhZGUgaW4gb3IgZmFkZSBvdXQgYW5pbWF0aW9uXHJcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGZhZGVkIG91dFxyXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBSdW4gdGhlIGZhZGUgaW4gYW5pbWF0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMsIGlmIGl0IGlzIGluaXRpYWxseVxyXG4gICAqIHNob3duXHJcbiAgICovXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxyXG4gICAqIER1cmF0aW9uIG9mIHRoZSBmYWRlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsIHRvIGVuc3VyZSB0aGF0IGZpbmlzaGluZ1xyXG4gICAqIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZCBldmVudHMgYXJlXHJcbiAgICogY2FuY2VsZWRcclxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBpblxyXG4gICAqL1xuICBvbkVudGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBpblxyXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGhhcyBjb21wb25lbnQgZmFkZWQgaW5cclxuICAgKi9cbiAgb25FbnRlcmVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgZmFkZXMgb3V0XHJcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGZhZGUgb3V0XHJcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGZhZGVkIG91dFxyXG4gICAqL1xuICBvbkV4aXRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIFwiaW5cIjogZmFsc2UsXG4gIHRpbWVvdXQ6IDMwMCxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlXG59O1xuXG52YXIgRmFkZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGYWRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgRmFkZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uMltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2ZhZGUnKSxcbiAgICAgIGVudGVyZWRDbGFzc05hbWU6ICdpbicsXG4gICAgICBlbnRlcmluZ0NsYXNzTmFtZTogJ2luJ1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRmFkZTtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuRmFkZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5GYWRlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGYWRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL0ZhZGUuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF90aW5wZXJCZWVDb3JlID0gcmVxdWlyZSgndGlucGVyLWJlZS1jb3JlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvL+aYr+WQpuaYr+aJi+mjjueQtOaViOaenFxuICBhY2NvcmRpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+a/gOa0u+eahOmhuVxuICBhY3RpdmVLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIC8v6buY6K6k55qE5r+A5rS755qE6aG5XG4gIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIC8v6YCJ5Lit5Ye95pWwXG4gIG9uU2VsZWN0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjb3JkaW9uOiBmYWxzZSxcbiAgY2xzUHJlZml4OiAndS1wYW5lbC1ncm91cCdcbn07XG5cbi8vIFRPRE86IFVzZSB1bmNvbnRyb2xsYWJsZS5cblxudmFyIFBhbmVsR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWxHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWxHcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbEdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlU2VsZWN0ID0gX3RoaXMuaGFuZGxlU2VsZWN0LmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVLZXk6IHByb3BzLmRlZmF1bHRBY3RpdmVLZXlcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBhbmVsR3JvdXAucHJvdG90eXBlLmhhbmRsZVNlbGVjdCA9IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChrZXksIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXksIGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUtleSA9PT0ga2V5KSB7XG4gICAgICBrZXkgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IGtleSB9KTtcbiAgfTtcblxuICBQYW5lbEdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYWNjb3JkaW9uID0gX3Byb3BzLmFjY29yZGlvbjtcbiAgICB2YXIgcHJvcHNBY3RpdmVLZXkgPSBfcHJvcHMuYWN0aXZlS2V5O1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IF9wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuICAgIHZhciBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdDtcbiAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgdmFyIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXg7XG5cbiAgICB2YXIgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY2NvcmRpb24nLCAnYWN0aXZlS2V5JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkZWZhdWx0QWN0aXZlS2V5JywgJ29uU2VsZWN0JywgJ3N0eWxlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB2b2lkIDA7XG4gICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHNBY3RpdmVLZXkgIT0gbnVsbCA/IHByb3BzQWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgICBvdGhlcnMucm9sZSA9IG90aGVycy5yb2xlIHx8ICd0YWJsaXN0JztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkLnByb3BzLnN0eWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGRQcm9wcywge1xuICAgICAgICAgICAgaGVhZGVyUm9sZTogJ3RhYicsXG4gICAgICAgICAgICBwYW5lbFJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKF90aGlzMi5oYW5kbGVTZWxlY3QsIGNoaWxkLnByb3BzLm9uU2VsZWN0KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBhbmVsR3JvdXA7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGFuZWxHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGFuZWxHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWxHcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9CdXR0b24yW1wiZGVmYXVsdFwiXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtYnV0dG9uL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5bC65a+4XHJcbiAgICAgKi9cbiAgICBzaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAneGcnLCAnbGcnXSksXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5qC35byPXHJcbiAgICAgKi9cbiAgICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5b2i54q2XHJcbiAgICAgKi9cbiAgICBzaGFwZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Jsb2NrJywgJ3JvdW5kJywgJ3NxdWFyZWQnLCAnZmxvYXRpbmcnLCAncGlsbFJpZ2h0JywgJ3BpbGxMZWZ0JywgJ2JvcmRlcicsICdpY29uJ10pLFxuICAgIC8qKlxyXG4gICAgKiBAdGl0bGUg57G75Z6LXHJcbiAgICAqL1xuICAgIGNvbG9yczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnYWNjZW50JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdkZWZhdWx0J10pLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOaYr+WQpuemgeeUqFxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOexu+WQjVxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUgPGJ1dHRvbj4g55qEIHR5cGVcclxuICAgICAqIEB2ZUlnbm9yZVxyXG4gICAgICovXG4gICAgaHRtbFR5cGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0J10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgY2xzUHJlZml4OiAndS1idXR0b24nXG5cbn07XG5cbnZhciBzaXplTWFwID0ge1xuICAgIHNtOiAnc20nLFxuICAgIHhnOiAneGcnLFxuICAgIGxnOiAnbGcnXG59LFxuICAgIGNvbG9yc01hcCA9IHtcbiAgICBwcmltYXJ5OiAncHJpbWFyeScsXG4gICAgYWNjZW50OiAnYWNjZW50JyxcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgaW5mbzogJ2luZm8nLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBkYW5nZXI6ICdkYW5nZXInXG59LFxuICAgIHNoYXBlTWFwID0ge1xuICAgIGJsb2NrOiAnYmxvY2snLFxuICAgIHJvdW5kOiAncm91bmQnLFxuICAgIGJvcmRlcjogJ2JvcmRlcicsXG4gICAgc3F1YXJlZDogJ3NxdWFyZWQnLFxuICAgIGZsb2F0aW5nOiAnZmxvYXRpbmcnLFxuICAgIHBpbGxSaWdodDogJ3BpbGwtcmlnaHQnLFxuICAgIHBpbGxMZWZ0OiAncGlsbC1sZWZ0JyxcbiAgICBpY29uOiAnaWNvbidcbn07XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICBCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb2xvcnMgPSBfcHJvcHMuY29sb3JzLFxuICAgICAgICAgICAgc2hhcGUgPSBfcHJvcHMuc2hhcGUsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzaXplID0gX3Byb3BzLnNpemUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGh0bWxUeXBlID0gX3Byb3BzLmh0bWxUeXBlLFxuICAgICAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29sb3JzJywgJ3NoYXBlJywgJ2Rpc2FibGVkJywgJ2NsYXNzTmFtZScsICdzaXplJywgJ2NoaWxkcmVuJywgJ2h0bWxUeXBlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgICAgICB2YXIgY2xzT2JqID0ge307XG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsc09ialtjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZU1hcFtzaXplXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIHNpemVNYXBbc2l6ZV1dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhcGVNYXBbc2hhcGVdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgc2hhcGVNYXBbc2hhcGVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yc01hcFtjb2xvcnNdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgY29sb3JzTWFwW2NvbG9yc11dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbHNQcmVmaXgsIGNsc09iaik7XG4gICAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgdHlwZTogaHRtbFR5cGUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtYnV0dG9uL2J1aWxkL0J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuZXhwb3J0IGRlZmF1bHQgSWNvbiA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIFxufTtcbi8qKlxuICogIGJhZGdlIOm7mOiupOaYvuekuuWGheWuuTFcbiAqL1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXHRjbHNQcmVmaXg6ICd1Zidcbn07XG5cbmNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRsZXQge3R5cGUsY2xhc3NOYW1lLGNsc1ByZWZpeCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IGNsc09iaiA9IHt9O1xuXHRcdFxuXHRcdGxldCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbHNQcmVmaXgsdHlwZSk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8aSB7Li4ub3RoZXJzfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lcyxjbGFzc05hbWUpfT48L2k+IFxuXHRcdClcblx0fVxufVxuSWNvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5JY29uLlByb3BUeXBlcyA9IFByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0ljb24uanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQTV4REE7QUFEQTtBQXF5REE7QUFDQTs7OztBQUFBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBO0FBQ0E7Ozs7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVBBO0FBVUE7QUFDQTs7OztBQUVBOzs7Ozs7QUNwM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQ0E7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1VUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN2lCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=demo.js.map