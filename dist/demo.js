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

	var _beeButton = __webpack_require__(49);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(51);

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
	            _react2['default'].createElement(_src2['default'], { type: 'add-square-button' }),
	            _react2['default'].createElement(_src2['default'], { type: 'adjust-contrast' }),
	            _react2['default'].createElement(_src2['default'], { type: 'align-justify' }),
	            _react2['default'].createElement(_src2['default'], { type: 'align-to-left' }),
	            _react2['default'].createElement(_src2['default'], { type: 'align-to-right' })
	        );
	    };

	    return Demo1;
	}(_react.Component);

	var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " Icon", "code": "/**\n * @title Icon\n * @description 在iuap字符库，`type`参数值均以-分隔。\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"tinper-icon-demo\">\n\t\t\t\t<Icon type=\"add-square-button\"/> \n\t\t\t\t<Icon type=\"adjust-contrast\" />\n\t\t\t\t<Icon type=\"align-justify\" />\n\t\t\t\t<Icon type=\"align-to-left\" />\n\t\t\t\t<Icon type=\"align-to-right\" />\n\t\t\t</div>\n\t\t)\n\t}\n}", "desc": " 在iuap字符库，`type`参数值均以-分隔。" }];

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
	        var _props = this.props;
	        var title = _props.title;
	        var example = _props.example;
	        var code = _props.code;
	        var desc = _props.desc;

	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";

	        var footer = _react2['default'].createElement(
	            _beeButton2['default'],
	            { shape: 'block', onClick: this.handleClick },
	            caret,
	            text
	        );
	        var header = _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { md: 11 },
	                example
	            ),
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { md: 1 },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { shape: 'icon', onClick: this.handleClick },
	                    caret
	                )
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 10, mdOffset: 1, sm: 12, smOffset: 0 },
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
	                { collapsible: true, expanded: this.state.open, colors: 'bordered', header: header, footer: footer, footerStyle: { padding: 0 } },
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

	var _PanelGroup2 = __webpack_require__(48);

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

	var _Fade2 = __webpack_require__(47);

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
	exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;

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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(50);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ },
/* 50 */
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
	        var _props = this.props;
	        var colors = _props.colors;
	        var shape = _props.shape;
	        var disabled = _props.disabled;
	        var className = _props.className;
	        var size = _props.size;
	        var children = _props.children;
	        var htmlType = _props.htmlType;
	        var clsPrefix = _props.clsPrefix;

	        var others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(52);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Icon2['default'];
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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
			var _props = this.props;
			var type = _props.type;
			var className = _props.className;
			var clsPrefix = _props.clsPrefix;

			var clsObj = {};

			if (type) {
				type = type.replace(/-/g, "");
				clsObj[clsPrefix + '-' + type] = true;
			}
			var classNames = (0, _classnames2['default'])(clsPrefix, clsObj);

			return _react2['default'].createElement('i', { className: (0, _classnames2['default'])(classNames, className) });
		};

		return Icon;
	}(_react.Component);

	Icon.defaultProps = defaultProps;
	Icon.PropTypes = _react.PropTypes;

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ZTBlNWQ1ZTM3MzA2NzIyZDkyMCIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL34vYmVlLWxheW91dC9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvQ29sLmpzIiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL34vYmVlLWxheW91dC9idWlsZC9Sb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtbGF5b3V0L2J1aWxkL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1wYW5lbC9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL2V2ZW50cy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL0NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2NhbWVsaXplU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2NhbWVsaXplLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9oeXBoZW5hdGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvc3R5bGUvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL3JlbW92ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9pc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL3V0aWwvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvdXRpbHMvY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbXBvbmVudE9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvZGVwcmVjYXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dhcm5pbmcvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vYmVlLXRvb2xzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaXNSZXF1aXJlZEZvckExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3NwbGl0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvRmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzIiwid2VicGFjazovLy8uL34vYmVlLWJ1dHRvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1idXR0b24vYnVpbGQvQnV0dG9uLmpzIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9JY29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOWUwZTVkNWUzNzMwNjcyMmQ5MjBcbiAqKi8iLCJcbmltcG9ydCB7IENvbiwgUm93LCBDb2wgfSBmcm9tICdiZWUtbGF5b3V0JztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAnYmVlLXBhbmVsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnYmVlLWJ1dHRvbic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMnO1xuXG5cbmNvbnN0IENBUkVUID0gPGkgY2xhc3NOYW1lPVwidWYgdWYtY2hldnJvbmFycm93ZG93blwiPjwvaT47XG5cbmNvbnN0IENBUkVUVVAgPSA8aSBjbGFzc05hbWU9XCJ1ZiB1Zi1jaGV2cm9uYXJyb3d1cFwiPjwvaT47XG5cblxuLyoqXG4gKiBAdGl0bGUgSWNvblxuICogQGRlc2NyaXB0aW9uIOWcqGl1YXDlrZfnrKblupPvvIxgdHlwZWDlj4LmlbDlgLzlnYfku6Ut5YiG6ZqU44CCXG4gKi9cbmNsYXNzIERlbW8xIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aW5wZXItaWNvbi1kZW1vXCI+XG5cdFx0XHRcdDxJY29uIHR5cGU9XCJhZGQtc3F1YXJlLWJ1dHRvblwiLz4gXG5cdFx0XHRcdDxJY29uIHR5cGU9XCJhZGp1c3QtY29udHJhc3RcIiAvPlxuXHRcdFx0XHQ8SWNvbiB0eXBlPVwiYWxpZ24tanVzdGlmeVwiIC8+XG5cdFx0XHRcdDxJY29uIHR5cGU9XCJhbGlnbi10by1sZWZ0XCIgLz5cblx0XHRcdFx0PEljb24gdHlwZT1cImFsaWduLXRvLXJpZ2h0XCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufXZhciBEZW1vQXJyYXkgPSBbe1wiZXhhbXBsZVwiOjxEZW1vMSAvPixcInRpdGxlXCI6XCIgSWNvblwiLFwiY29kZVwiOlwiLyoqXFxuICogQHRpdGxlIEljb25cXG4gKiBAZGVzY3JpcHRpb24g5ZyoaXVhcOWtl+espuW6k++8jGB0eXBlYOWPguaVsOWAvOWdh+S7pS3liIbpmpTjgIJcXG4gKi9cXG5jbGFzcyBEZW1vMSBleHRlbmRzIENvbXBvbmVudCB7XFxuXFx0cmVuZGVyICgpIHtcXG5cXHRcXHRyZXR1cm4gKFxcblxcdFxcdFxcdDxkaXYgY2xhc3NOYW1lPVxcXCJ0aW5wZXItaWNvbi1kZW1vXFxcIj5cXG5cXHRcXHRcXHRcXHQ8SWNvbiB0eXBlPVxcXCJhZGQtc3F1YXJlLWJ1dHRvblxcXCIvPiBcXG5cXHRcXHRcXHRcXHQ8SWNvbiB0eXBlPVxcXCJhZGp1c3QtY29udHJhc3RcXFwiIC8+XFxuXFx0XFx0XFx0XFx0PEljb24gdHlwZT1cXFwiYWxpZ24tanVzdGlmeVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8SWNvbiB0eXBlPVxcXCJhbGlnbi10by1sZWZ0XFxcIiAvPlxcblxcdFxcdFxcdFxcdDxJY29uIHR5cGU9XFxcImFsaWduLXRvLXJpZ2h0XFxcIiAvPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdClcXG5cXHR9XFxufVwiLFwiZGVzY1wiOlwiIOWcqGl1YXDlrZfnrKblupPvvIxgdHlwZWDlj4LmlbDlgLzlnYfku6Ut5YiG6ZqU44CCXCJ9XVxuXG5cbmNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBleGFtcGxlLCBjb2RlLCBkZXNjICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNhcmV0ID0gdGhpcy5zdGF0ZS5vcGVuID8gQ0FSRVRVUCA6IENBUkVUO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuc3RhdGUub3BlbiA/IFwi6ZqQ6JeP5Luj56CBXCIgOiBcIuafpeeci+S7o+eggVwiO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IChcbiAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJibG9ja1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0+XG4gICAgICAgICAgICAgICAgeyBjYXJldCB9XG4gICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSAoXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezExfT5cbiAgICAgICAgICAgICAgICB7IGV4YW1wbGUgfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezF9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJpY29uXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgICAgICAgICAgICAgeyBjYXJldCB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb2wgbWQ9ezEwfSBtZE9mZnNldD17MX0gc209ezEyfSBzbU9mZnNldD17MH0+XG4gICAgICAgICAgICAgICAgPGgzPnsgdGl0bGUgfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+eyBkZXNjIH08L3A+XG4gICAgICAgICAgICAgICAgPFBhbmVsIGNvbGxhcHNpYmxlIGV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuIH0gY29sb3JzPSdib3JkZXJlZCcgaGVhZGVyPXsgaGVhZGVyIH0gZm9vdGVyPXtmb290ZXJ9IGZvb3RlclN0eWxlID0ge3twYWRkaW5nOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxwcmU+PGNvZGUgY2xhc3NOYW1lPVwiaGxqcyBqYXZhc2NyaXB0XCI+eyBjb2RlIH08L2NvZGU+PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBEZW1vR3JvdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAge0RlbW9BcnJheS5tYXAoKGNoaWxkLGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW8gZXhhbXBsZT0ge2NoaWxkLmV4YW1wbGV9IHRpdGxlPSB7Y2hpbGQudGl0bGV9IGNvZGU9IHtjaGlsZC5jb2RlfSBkZXNjPSB7Y2hpbGQuZGVzY30ga2V5PSB7aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxEZW1vR3JvdXAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbnBlckJlZURlbW8nKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkZW1vL2luZGV4LmpzXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db24gPSBleHBvcnRzLlJvdyA9IGV4cG9ydHMuQ29sID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbDIgPSByZXF1aXJlKCcuL0NvbCcpO1xuXG52YXIgX0NvbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2wyKTtcblxudmFyIF9Sb3cyID0gcmVxdWlyZSgnLi9Sb3cnKTtcblxudmFyIF9Sb3czID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm93Mik7XG5cbnZhciBfTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcblxudmFyIF9MYXlvdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGF5b3V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQ29sID0gX0NvbDNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Sb3cgPSBfUm93M1tcImRlZmF1bHRcIl07XG5leHBvcnRzLkNvbiA9IF9MYXlvdXQyW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtbGF5b3V0L2J1aWxkL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZWxlbWVudCwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiB4c+aYvuekuuWIl+aVsFxuICAgKi9cbiAgeHM6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc23mmL7npLrliJfmlbBcbiAgICovXG4gIHNtOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1k5pi+56S65YiX5pWwXG4gICAqL1xuICBtZDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+aYvuekuuWIl+aVsFxuICAgKi9cbiAgbGc6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogeHPlgY/np7vliJfmlbBcbiAgICovXG4gIHhzT2Zmc2V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5YGP56e75YiX5pWwXG4gICAqL1xuICBzbU9mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOWBj+enu+WIl+aVsFxuICAgKi9cbiAgbWRPZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGflgY/np7vliJfmlbBcbiAgICovXG4gIGxnT2Zmc2V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHhz5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICB4c1B1c2g6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc23lj7PlgY/np7vliJfmlbBcbiAgICovXG4gIHNtUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOWPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgbWRQdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICBsZ1B1c2g6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogeHPlt6blgY/np7vliJfmlbBcbiAgICovXG4gIHhzUHVsbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeW3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgc21QdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1k5bem5YGP56e75YiX5pWwXG4gICAqL1xuICBtZFB1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGflt6blgY/np7vliJfmlbBcbiAgICovXG4gIGxnUHVsbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiAnZGl2J1xufTtcblxudmFyIGNsc1ByZWZpeCA9ICd1LWNvbCc7XG5cbnZhciBERVZJQ0VfU0laRVMgPSBbJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5cbnZhciBDb2wgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2woKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSBfcHJvcHMuY2xhc3NlcztcblxuICAgIHZhciBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbXBvbmVudENsYXNzJywgJ2NsYXNzZXMnXSk7XG5cbiAgICB2YXIgdGJDbGFzcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIOWvueS8oOWFpXByb3Bz5YGa5qC35byP6L2s5YyWXG4gICAgICogQHR5cGUge1t0eXBlXX1cbiAgICAgKi9cbiAgICBERVZJQ0VfU0laRVMuZm9yRWFjaChmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgZnVuY3Rpb24gcG9wUHJvcChwcm9wU3VmZml4LCBtb2RpZmllcikge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSAnJyArIHNpemUgKyBwcm9wU3VmZml4O1xuICAgICAgICB2YXIgcHJvcFZhbHVlID0gb3RoZXJzW3Byb3BOYW1lXTtcblxuICAgICAgICBpZiAocHJvcFZhbHVlICE9IHVuZGVmaW5lZCAmJiBwcm9wVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHRiQ2xhc3MucHVzaChjbHNQcmVmaXggKyAnLScgKyBzaXplICsgbW9kaWZpZXIgKyAnLScgKyBwcm9wVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIG90aGVyc1twcm9wTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHBvcFByb3AoJycsICcnKTtcbiAgICAgIHBvcFByb3AoJ09mZnNldCcsICctb2Zmc2V0Jyk7XG4gICAgICBwb3BQcm9wKCdQdXNoJywgJy1wdXNoJyk7XG4gICAgICBwb3BQcm9wKCdQdWxsJywgJy1wdWxsJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkodGJDbGFzcywgY2xhc3NlcylcbiAgICAgIH0sIG90aGVycyksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ29sO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVlLWxheW91dC9idWlsZC9Db2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZWxlbWVudCwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2Rpdidcbn07XG5cbnZhciBjbHNQcmVmaXggPSAndS1yb3cnO1xuXG52YXIgUm93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJvdywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm93KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3cpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBSb3cucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgQ29tcG9uZW50ID0gX3Byb3BzLmNvbXBvbmVudENsYXNzO1xuICAgIHZhciBjbGFzc2VzID0gX3Byb3BzLmNsYXNzZXM7XG5cbiAgICB2YXIgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnRDbGFzcycsICdjbGFzc2VzJ10pO1xuXG4gICAgdmFyIGJzY2xhc3MgPSAnJyArIGNsc1ByZWZpeDtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShic2NsYXNzLCBjbGFzc2VzKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUm93O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUm93O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVlLWxheW91dC9idWlsZC9Sb3cuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcclxuICAgKiBBZGRzIGBjb250YWluZXItZmx1aWRgIGNsYXNzLlxyXG4gICAqL1xuICBmbHVpZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAvKipcclxuICAgKiBZb3UgY2FuIHVzZSBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudFxyXG4gICAqL1xuICBjb21wb25lbnRDbGFzczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5lbGVtZW50LCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXSlcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiAnZGl2JyxcbiAgZmx1aWQ6IGZhbHNlXG59O1xuXG52YXIgY2xzUHJlZml4ID0gJ3UtY29udGFpbmVyJztcblxudmFyIENvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90YmNsYXNzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZsdWlkID0gX3Byb3BzLmZsdWlkO1xuICAgIHZhciBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSBfcHJvcHMuY2xhc3NlcztcblxuICAgIHZhciBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2ZsdWlkJywgJ2NvbXBvbmVudENsYXNzJywgJ2NsYXNzZXMnXSk7XG5cbiAgICB2YXIgdGJjbGFzcyA9IChfdGJjbGFzcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3RiY2xhc3MsICcnICsgY2xzUHJlZml4LCAhZmx1aWQpLCBfZGVmaW5lUHJvcGVydHkoX3RiY2xhc3MsIGNsc1ByZWZpeCArICctZmx1aWQnLCBmbHVpZCksIF90YmNsYXNzKTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSh0YmNsYXNzLCBjbGFzc2VzKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ29uO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Db24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ29uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtbGF5b3V0L2J1aWxkL0xheW91dC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUGFuZWxHcm91cCA9IGV4cG9ydHMuUGFuZWwgPSB1bmRlZmluZWQ7XG5cbnZhciBfUGFuZWwyID0gcmVxdWlyZSgnLi9QYW5lbCcpO1xuXG52YXIgX1BhbmVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsMik7XG5cbnZhciBfUGFuZWxHcm91cDIgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXAyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuUGFuZWwgPSBfUGFuZWwzW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuUGFuZWxHcm91cCA9IF9QYW5lbEdyb3VwM1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVlLXBhbmVsL2J1aWxkL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2JlZVRyYW5zaXRpb24gPSByZXF1aXJlKCdiZWUtdHJhbnNpdGlvbicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLy/mmK/lkKbmt7vliqDmipjlj6BcbiAgY29sbGFwc2libGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICBvblNlbGVjdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8v5aS06YOo57uE5Lu2XG4gIGhlYWRlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm5vZGUsXG4gIGhlYWRlclN0eWxlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub2JqZWN0LFxuICBpZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcl0pLFxuICBoZWFkZXJDb250ZW50OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcbiAgLy9mb290ZXLnu4Tku7ZcbiAgZm9vdGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubm9kZSxcbiAgZm9vdGVyU3R5bGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vYmplY3QsXG4gIC8v6buY6K6k5piv5ZCm5omT5byAXG4gIGRlZmF1bHRFeHBhbmRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8v5piv5ZCm5omT5byAXG4gIGV4cGFuZGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcbiAgLy/mr4/kuKpwYW5lbOeahOagh+iusFxuICBldmVudEtleTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueSxcbiAgaGVhZGVyUm9sZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFuZWxSb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvL+minOiJslxuICBjb2xvcnM6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnYWNjZW50JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdkZWZhdWx0JywgJ2JvcmRlcmVkJ10pLFxuXG4gIC8vIEZyb20gQ29sbGFwc2Uu55qE5omp5bGV5Yqo55S7XG4gIG9uRW50ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkVudGVyaW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25FbnRlcmVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25FeGl0aW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25FeGl0ZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0RXhwYW5kZWQ6IGZhbHNlLFxuICBjbHNQcmVmaXg6IFwidS1wYW5lbFwiLFxuICBjb2xvcnM6IFwiZGVmYXVsdFwiXG59O1xuXG52YXIgUGFuZWwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhbmVsKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmVsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlQ2xpY2tUaXRsZSA9IF90aGlzLmhhbmRsZUNsaWNrVGl0bGUuYmluZChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4cGFuZGVkOiBfdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWRcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8v5aS06YOo54K55Ye75LqL5Lu2XG5cblxuICBQYW5lbC5wcm90b3R5cGUuaGFuZGxlQ2xpY2tUaXRsZSA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrVGl0bGUoZSkge1xuICAgIC8vIOS4jeiuqeS6i+S7tui/m+WFpeS6i+S7tuaxoFxuICAgIGUucGVyc2lzdCgpO1xuICAgIGUuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy/muLLmn5NwYW5lbGhlYWRlclxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckhlYWRlciA9IGZ1bmN0aW9uIHJlbmRlckhlYWRlcihjb2xsYXBzaWJsZSwgaGVhZGVyLCBpZCwgcm9sZSwgZXhwYW5kZWQsIGNsc1ByZWZpeCkge1xuICAgIHZhciB0aXRsZUNsYXNzTmFtZSA9IGNsc1ByZWZpeCArICctdGl0bGUnO1xuXG4gICAgaWYgKCFjb2xsYXBzaWJsZSkge1xuICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChoZWFkZXIpKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGhlYWRlci5wcm9wcy5jbGFzc05hbWUsIHRpdGxlQ2xhc3NOYW1lKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChoZWFkZXIpKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2g0JyxcbiAgICAgICAgeyByb2xlOiAncHJlc2VudGF0aW9uJywgY2xhc3NOYW1lOiB0aXRsZUNsYXNzTmFtZSB9LFxuICAgICAgICB0aGlzLnJlbmRlckFuY2hvcihoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZClcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhlYWRlckNvbnRlbnQpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGhlYWRlci5wcm9wcy5jbGFzc05hbWUsIHRpdGxlQ2xhc3NOYW1lKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGhlYWRlci5wcm9wcy5jbGFzc05hbWUsIHRpdGxlQ2xhc3NOYW1lKSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnJlbmRlckFuY2hvcihoZWFkZXIucHJvcHMuY2hpbGRyZW4sIGlkLCByb2xlLCBleHBhbmRlZClcbiAgICB9KTtcbiAgfTtcblxuICAvL+WmguaenOS9v+eUqOmTvuaOpe+8jOa4suafk+S4umHmoIfnrb5cblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJBbmNob3IgPSBmdW5jdGlvbiByZW5kZXJBbmNob3IoaGVhZGVyLCBpZCwgcm9sZSwgZXhwYW5kZWQpIHtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHtcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgaHJlZjogaWQgJiYgJyMnICsgaWQsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tUaXRsZSxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBpZCxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBleHBhbmRlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBleHBhbmRlZCA/IG51bGwgOiAnY29sbGFwc2VkJ1xuICAgICAgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH07XG5cbiAgLy/lpoLmnpzmnInmipjlj6DliqjnlLvvvIzmuLLmn5Pmipjlj6DliqjnlLtcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJDb2xsYXBzaWJsZUJvZHkgPSBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCByb2xlLCBjaGlsZHJlbiwgY2xzUHJlZml4LCBhbmltYXRpb25Ib29rcykge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX2JlZVRyYW5zaXRpb24uQ29sbGFwc2UsXG4gICAgICBfZXh0ZW5kcyh7ICdpbic6IGV4cGFuZGVkIH0sIGFuaW1hdGlvbkhvb2tzKSxcbiAgICAgIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHNQcmVmaXggKyAnLWNvbGxhcHNlJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhZXhwYW5kZWRcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICAvL+a4suafk3BhbmVsYm9keVxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckJvZHkgPSBmdW5jdGlvbiByZW5kZXJCb2R5KHJhd0NoaWxkcmVuLCBjbHNQcmVmaXgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gW107XG5cbiAgICB2YXIgYm9keUNsYXNzTmFtZSA9IGNsc1ByZWZpeCArICctYm9keSc7XG5cbiAgICAvL+a3u+WKoOWIsGJvZHnnmoRjaGlsZHJlbuS4rVxuICAgIGZ1bmN0aW9uIG1heWJlQWRkQm9keSgpIHtcbiAgICAgIGlmICghYm9keUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOe7meWtkOe7hOS7tua3u+WKoGtlee+8jOS4uuS6huS5i+WQjuinpuWPkeS6i+S7tuaXtuS9v+eUqFxuICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IGNoaWxkcmVuLmxlbmd0aCwgY2xhc3NOYW1lOiBib2R5Q2xhc3NOYW1lIH0sXG4gICAgICAgIGJvZHlDaGlsZHJlblxuICAgICAgKSk7XG5cbiAgICAgIGJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8v6L2s5o2i5Li65pWw57uE77yM5pa55L6/5aSN55SoXG4gICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4udG9BcnJheShyYXdDaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCkge1xuICAgICAgICBtYXliZUFkZEJvZHkoKTtcblxuICAgICAgICAvL+Wwhuagh+ekumZpbGzorr7nva7kuLp1bmRlZmluZWRcbiAgICAgICAgY2hpbGRyZW4ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHsgZmlsbDogdW5kZWZpbmVkIH0pKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIG1heWJlQWRkQm9keSgpO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNvbGxhcHNpYmxlID0gX3Byb3BzLmNvbGxhcHNpYmxlO1xuICAgIHZhciBoZWFkZXIgPSBfcHJvcHMuaGVhZGVyO1xuICAgIHZhciBpZCA9IF9wcm9wcy5pZDtcbiAgICB2YXIgZm9vdGVyID0gX3Byb3BzLmZvb3RlcjtcbiAgICB2YXIgcHJvcHNFeHBhbmRlZCA9IF9wcm9wcy5leHBhbmRlZDtcbiAgICB2YXIgZm9vdGVyU3R5bGUgPSBfcHJvcHMuZm9vdGVyU3R5bGU7XG4gICAgdmFyIGhlYWRlclN0eWxlID0gX3Byb3BzLmhlYWRlclN0eWxlO1xuICAgIHZhciBoZWFkZXJSb2xlID0gX3Byb3BzLmhlYWRlclJvbGU7XG4gICAgdmFyIHBhbmVsUm9sZSA9IF9wcm9wcy5wYW5lbFJvbGU7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGNvbG9ycyA9IF9wcm9wcy5jb2xvcnM7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBvbkVudGVyID0gX3Byb3BzLm9uRW50ZXI7XG4gICAgdmFyIG9uRW50ZXJpbmcgPSBfcHJvcHMub25FbnRlcmluZztcbiAgICB2YXIgb25FbnRlcmVkID0gX3Byb3BzLm9uRW50ZXJlZDtcbiAgICB2YXIgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeDtcbiAgICB2YXIgb25FeGl0ID0gX3Byb3BzLm9uRXhpdDtcbiAgICB2YXIgb25FeGl0aW5nID0gX3Byb3BzLm9uRXhpdGluZztcbiAgICB2YXIgb25FeGl0ZWQgPSBfcHJvcHMub25FeGl0ZWQ7XG4gICAgdmFyIGRlZmF1bHRFeHBhbmRlZCA9IF9wcm9wcy5kZWZhdWx0RXhwYW5kZWQ7XG4gICAgdmFyIGV2ZW50S2V5ID0gX3Byb3BzLmV2ZW50S2V5O1xuICAgIHZhciBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdDtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29sbGFwc2libGUnLCAnaGVhZGVyJywgJ2lkJywgJ2Zvb3RlcicsICdleHBhbmRlZCcsICdmb290ZXJTdHlsZScsICdoZWFkZXJTdHlsZScsICdoZWFkZXJSb2xlJywgJ3BhbmVsUm9sZScsICdjbGFzc05hbWUnLCAnY29sb3JzJywgJ2NoaWxkcmVuJywgJ29uRW50ZXInLCAnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnY2xzUHJlZml4JywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnLCAnZGVmYXVsdEV4cGFuZGVkJywgJ2V2ZW50S2V5JywgJ29uU2VsZWN0J10pO1xuXG4gICAgdmFyIGV4cGFuZGVkID0gcHJvcHNFeHBhbmRlZCAhPSBudWxsID8gcHJvcHNFeHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcbiAgICBjbGFzc2VzW2Nsc1ByZWZpeCArICctJyArIGNvbG9yc10gPSB0cnVlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBpZDogY29sbGFwc2libGUgPyBudWxsIDogaWRcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyICYmIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xzUHJlZml4ICsgJy1oZWFkaW5nJywgc3R5bGU6IGhlYWRlclN0eWxlIH0sXG4gICAgICAgIHRoaXMucmVuZGVySGVhZGVyKGNvbGxhcHNpYmxlLCBoZWFkZXIsIGlkLCBoZWFkZXJSb2xlLCBleHBhbmRlZCwgY2xzUHJlZml4KVxuICAgICAgKSxcbiAgICAgIGNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCBwYW5lbFJvbGUsIGNoaWxkcmVuLCBjbHNQcmVmaXgsIHsgb25FbnRlcjogb25FbnRlciwgb25FbnRlcmluZzogb25FbnRlcmluZywgb25FbnRlcmVkOiBvbkVudGVyZWQsIG9uRXhpdDogb25FeGl0LCBvbkV4aXRpbmc6IG9uRXhpdGluZywgb25FeGl0ZWQ6IG9uRXhpdGVkIH0pIDogdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpLFxuICAgICAgZm9vdGVyICYmIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xzUHJlZml4ICsgJy1mb290ZXInLCBzdHlsZTogZm9vdGVyU3R5bGUgfSxcbiAgICAgICAgZm9vdGVyXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUGFuZWw7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBhbmVsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQYW5lbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRmFkZSA9IGV4cG9ydHMuQ29sbGFwc2UgPSBleHBvcnRzLlRyYW5zaXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24yKTtcblxudmFyIF9Db2xsYXBzZTIgPSByZXF1aXJlKCcuL0NvbGxhcHNlJyk7XG5cbnZhciBfQ29sbGFwc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2UyKTtcblxudmFyIF9GYWRlMiA9IHJlcXVpcmUoJy4vRmFkZScpO1xuXG52YXIgX0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFkZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0cy5UcmFuc2l0aW9uID0gX1RyYW5zaXRpb24zW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuQ29sbGFwc2UgPSBfQ29sbGFwc2UzW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuRmFkZSA9IF9GYWRlM1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCdkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9wcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BlcnRpZXMpO1xuXG52YXIgX29uID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvZXZlbnRzL29uJyk7XG5cbnZhciBfb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb24pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSBfcHJvcGVydGllczJbXCJkZWZhdWx0XCJdLmVuZDtcblxuLy/orr7nva7nirbmgIHnoIFcbnZhciBVTk1PVU5URUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IDA7XG52YXIgRVhJVEVEID0gZXhwb3J0cy5FWElURUQgPSAxO1xudmFyIEVOVEVSSU5HID0gZXhwb3J0cy5FTlRFUklORyA9IDI7XG52YXIgRU5URVJFRCA9IGV4cG9ydHMuRU5URVJFRCA9IDM7XG52YXIgRVhJVElORyA9IGV4cG9ydHMuRVhJVElORyA9IDQ7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbop6blj5HliqjnlLtcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiDkuI3mmL7npLrnmoTml7blgJnmmK/lkKbnp7vpmaTnu4Tku7ZcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICog5aaC5p6c6K6+572u5Li66buY6K6k5pi+56S677yM5oyC6L295pe25pi+56S65Yqo55S7XG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIOiuvue9rui2heaXtuaXtumXtO+8jOmYsuatouWHuueOsOmXrumimO+8jOWPr+iuvue9ruS4uj495Yqo55S75pe26Ze0XG4gICAqL1xuICB0aW1lb3V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICog6YCA5Ye657uE5Lu25pe25re75Yqg55qEY2xhc3NcbiAgICovXG4gIGV4aXRlZENsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpgIDlh7rnu4Tku7bkuK3mt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZXhpdGluZ0NsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvlkI7mt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZW50ZXJlZENsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvml7bmt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZW50ZXJpbmdDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvlvIDlp4vml7bnmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+S4reeahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FbnRlcmluZzogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75ZCO55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkVudGVyZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmAgOWHuuWKqOeUu+W8gOWni+aXtueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FeGl0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpgIDlh7rliqjnlLvkuK3nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75ZCO55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXRlZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuICB0aW1lb3V0OiA1MDAwLFxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblxuLyoqXG4gKiDliqjnlLvnu4Tku7ZcbiAqL1xuXG52YXIgVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zaXRpb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICB2YXIgaW5pdGlhbFN0YXR1cyA9IHZvaWQgMDtcbiAgICBpZiAocHJvcHNbXCJpblwiXSkge1xuICAgICAgLy8g5ZyoY29tcG9uZW50ZGlkbW91bnTml7blvIDlp4vmiafooYzliqjnlLtcbiAgICAgIGluaXRpYWxTdGF0dXMgPSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyID8gRVhJVEVEIDogRU5URVJFRDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbFN0YXR1cyA9IHByb3BzLnVubW91bnRPbkV4aXQgPyBVTk1PVU5URUQgOiBFWElURUQ7XG4gICAgfVxuICAgIF90aGlzLnN0YXRlID0geyBzdGF0dXM6IGluaXRpYWxTdGF0dXMgfTtcblxuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyICYmIHRoaXMucHJvcHNbXCJpblwiXSkge1xuICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHNbXCJpblwiXSAmJiB0aGlzLnByb3BzLnVubW91bnRPbkV4aXQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICAgIC8vIOWcqGNvbXBvbmVudERpZFVwZGF0ZeaJp+ihjOWKqOeUuy5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICAvLyDlvZPkvb/nlKh1bm1vdW50T25FeGl05pe277yMZXhpdGVk5Li6ZXhpdGluZ+WSjHVubW9udOeahOi/h+a4oeeKtuaAgVxuICAgICAgaWYgKHRoaXMucHJvcHNbXCJpblwiXSkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFVOTU9VTlRFRCB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOehruS/neWPquWTjeW6lHByb3Dlj5jljJZcbiAgICBpZiAodGhpcy5fbmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuX25lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzW1wiaW5cIl0pIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRVhJVElORykge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YW25LuW77yM5b2T5oiR5Lus5bey57uP6L6T5YWl5oiW6L6T5Ye6XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaIkeS7rOW3sue7j+i+k+WFpeaIlui+k+WHuuWujOaIkFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMltcImRlZmF1bHRcIl0uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAvLyDov5nph4zmjqXmlLbmlrBwcm9wc1xuICAgIHByb3BzLm9uRW50ZXIobm9kZSk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUkVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHByb3BzLm9uRXhpdChub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElUSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyDnoa7kv53lnKjnu4Tku7bplIDmr4HlkI7mjILotbfnmoRzZXRTdGF0Zeiiq+a2iOmZpFxuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgKDAsIF9vbjJbXCJkZWZhdWx0XCJdKShub2RlLCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRoaXMucHJvcHMudGltZW91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgdmFyIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIE9iamVjdC5rZXlzKFRyYW5zaXRpb24ucHJvcFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgY2hpbGRQcm9wc1trZXldO1xuICAgIH0pO1xuXG4gICAgdmFyIHRyYW5zaXRpb25DbGFzc05hbWUgPSB2b2lkIDA7XG4gICAgaWYgKHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leGl0ZWRDbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5lbnRlcmluZ0NsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZW50ZXJlZENsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRVhJVElORykge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZXhpdGluZ0NsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyW1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUsIHRyYW5zaXRpb25DbGFzc05hbWUpXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRyYW5zaXRpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvVHJhbnNpdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xudmFyIHByZWZpeCA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkVuZCA9IHZvaWQgMDtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdm9pZCAwO1xudmFyIGFuaW1hdGlvbk5hbWUgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uVGltaW5nID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkRlbGF5ID0gdm9pZCAwO1xuXG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIHZhciBfZ2V0VHJhbnNpdGlvblByb3BlcnQgPSBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpO1xuXG4gIHByZWZpeCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5wcmVmaXg7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQudHJhbnNpdGlvbkVuZDtcbiAgZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQuYW5pbWF0aW9uRW5kO1xuXG5cbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyAnLScgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJztcblxuICBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lID0gcHJlZml4ICsgJy1hbmltYXRpb24tbmFtZSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbiA9IHByZWZpeCArICctYW5pbWF0aW9uLWR1cmF0aW9uJztcbiAgZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSA9IHByZWZpeCArICctYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbic7XG59XG5cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uVGltaW5nO1xuZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXk7XG5leHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG5leHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lO1xuZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmc7XG5leHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbkVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCkge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcblxuICB2YXIgdmVuZG9yTWFwID0ge1xuICAgIE86IGZ1bmN0aW9uIE8oZSkge1xuICAgICAgcmV0dXJuICdvJyArIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIE1vejogZnVuY3Rpb24gTW96KGUpIHtcbiAgICAgIHJldHVybiAnbW96JyArIGU7XG4gICAgfSxcbiAgICBXZWJraXQ6IGZ1bmN0aW9uIFdlYmtpdChlKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdCcgKyBlO1xuICAgIH0sXG4gICAgbXM6IGZ1bmN0aW9uIG1zKGUpIHtcbiAgICAgIHJldHVybiAnTVMnICsgZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlbmRvcnMgPSBPYmplY3Qua2V5cyh2ZW5kb3JNYXApO1xuXG4gIHZhciB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgICAgYW5pbWF0aW9uRW5kID0gdm9pZCAwO1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZlbmRvciA9IHZlbmRvcnNbaV07XG5cbiAgICBpZiAodmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHtcbiAgICAgIHByZWZpeCA9ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNpdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBhbmltYXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnQW5pbWF0aW9uRW5kJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIXRyYW5zaXRpb25FbmQgJiYgJ3RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgaWYgKCFhbmltYXRpb25FbmQgJiYgJ2FuaW1hdGlvbk5hbWUnIGluIHN0eWxlKSB0cmFuc2l0aW9uRW5kID0gJ2FuaW1hdGlvbmVuZCc7XG5cbiAgc3R5bGUgPSBudWxsO1xuXG4gIHJldHVybiB7IGFuaW1hdGlvbkVuZDogYW5pbWF0aW9uRW5kLCB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLCBwcmVmaXg6IHByZWZpeCB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5ET00gPSByZXF1aXJlKCcuLi91dGlsL2luRE9NJyk7XG5cbnZhciBfaW5ET00yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5ET00pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb24gPSBmdW5jdGlvbiBvbigpIHt9O1xuaWYgKF9pbkRPTTIuZGVmYXVsdCkge1xuICBvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUgfHwgZmFsc2UpO1xuICAgIH07ZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUudGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQgPSBub2RlO1xuICAgICAgICBoYW5kbGVyLmNhbGwobm9kZSwgZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG9tLWhlbHBlcnMvZXZlbnRzL29uLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfc3R5bGUgPSByZXF1aXJlKCdkb20taGVscGVycy9zdHlsZScpO1xuXG52YXIgX3N0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgX2NhcGl0YWxpemUgPSByZXF1aXJlKCcuL3V0aWwvY2FwaXRhbGl6ZScpO1xuXG52YXIgX2NhcGl0YWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZSk7XG5cbnZhciBfdGlucGVyQmVlQ29yZSA9IHJlcXVpcmUoJ3RpbnBlci1iZWUtY29yZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIE1BUkdJTlMgPSB7XG4gIGhlaWdodDogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHdpZHRoOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXVxufTtcblxuLy8gcmVhZGluZyBhIGRpbWVuc2lvbiBwcm9wIHdpbGwgY2F1c2UgdGhlIGJyb3dzZXIgdG8gcmVjYWxjdWxhdGUsXG4vLyB3aGljaCB3aWxsIGxldCBvdXIgYW5pbWF0aW9ucyB3b3JrXG5mdW5jdGlvbiB0cmlnZ2VyQnJvd3NlclJlZmxvdyhub2RlKSB7XG4gIG5vZGUub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25WYWx1ZShkaW1lbnNpb24sIGVsZW0pIHtcbiAgdmFyIHZhbHVlID0gZWxlbVsnb2Zmc2V0JyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXTtcbiAgdmFyIG1hcmdpbnMgPSBNQVJHSU5TW2RpbWVuc2lvbl07XG5cbiAgcmV0dXJuIHZhbHVlICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzBdKSwgMTApICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzFdKSwgMTApO1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcclxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBleHBhbmQgb3IgY29sbGFwc2UgYW5pbWF0aW9uXHJcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGNvbGxhcHNlZFxyXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBSdW4gdGhlIGV4cGFuZCBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XHJcbiAgICogc2hvd25cclxuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogRHVyYXRpb24gb2YgdGhlIGNvbGxhcHNlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsIHRvIGVuc3VyZSB0aGF0XHJcbiAgICogZmluaXNoaW5nIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZFxyXG4gICAqIGV2ZW50cyBhcmUgY2FuY2VsZWRcclxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBleHBhbmRzXHJcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBleHBhbmRcclxuICAgKi9cbiAgb25FbnRlcmluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGV4cGFuZGVkXHJcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGNvbGxhcHNlc1xyXG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBjb2xsYXBzZVxyXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBjb2xsYXBzZWRcclxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBkaW1lbnNpb24gdXNlZCB3aGVuIGNvbGxhcHNpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxyXG4gICAqIGRpbWVuc2lvblxyXG4gICAqXHJcbiAgICogX05vdGU6IEJvb3RzdHJhcCBvbmx5IHBhcnRpYWxseSBzdXBwb3J0cyAnd2lkdGgnIVxyXG4gICAqIFlvdSB3aWxsIG5lZWQgdG8gc3VwcGx5IHlvdXIgb3duIENTUyBhbmltYXRpb24gZm9yIHRoZSBgLndpZHRoYCBDU1MgY2xhc3MuX1xyXG4gICAqL1xuICBkaW1lbnNpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZihbJ2hlaWdodCcsICd3aWR0aCddKSwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGhlaWdodCBvciB3aWR0aCBvZiB0aGUgYW5pbWF0aW5nIERPTSBub2RlXHJcbiAgICpcclxuICAgKiBBbGxvd3MgZm9yIHByb3ZpZGluZyBzb21lIGN1c3RvbSBsb2dpYyBmb3IgaG93IG11Y2ggdGhlIENvbGxhcHNlIGNvbXBvbmVudFxyXG4gICAqIHNob3VsZCBhbmltYXRlIGluIGl0cyBzcGVjaWZpZWQgZGltZW5zaW9uLiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudFxyXG4gICAqIGRpbWVuc2lvbiBwcm9wIHZhbHVlIGFuZCB0aGUgRE9NIG5vZGUuXHJcbiAgICovXG4gIGdldERpbWVuc2lvblZhbHVlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcclxuICAgKiBBUklBIHJvbGUgb2YgY29sbGFwc2libGUgZWxlbWVudFxyXG4gICAqL1xuICByb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBcImluXCI6IGZhbHNlLFxuICB0aW1lb3V0OiAzMDAsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcblxuICBkaW1lbnNpb246ICdoZWlnaHQnLFxuICBnZXREaW1lbnNpb25WYWx1ZTogZ2V0RGltZW5zaW9uVmFsdWVcbn07XG5cbnZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2xsYXBzZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sbGFwc2UocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGFwc2UpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlciA9IF90aGlzLmhhbmRsZUVudGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gX3RoaXMuaGFuZGxlRW50ZXJpbmcuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IF90aGlzLmhhbmRsZUVudGVyZWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRXhpdCA9IF90aGlzLmhhbmRsZUV4aXQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IF90aGlzLmhhbmRsZUV4aXRpbmcuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyogLS0gRXhwYW5kaW5nIC0tICovXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2dldFNjcm9sbERpbWVuc2lvblZhbHVlKGVsZW0sIGRpbWVuc2lvbik7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmVkKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gbnVsbDtcbiAgfTtcblxuICAvKiAtLSBDb2xsYXBzaW5nIC0tICovXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRXhpdCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLnByb3BzLmdldERpbWVuc2lvblZhbHVlKGRpbWVuc2lvbiwgZWxlbSkgKyAncHgnO1xuICAgIHRyaWdnZXJCcm93c2VyUmVmbG93KGVsZW0pO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gaGFuZGxlRXhpdGluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuX2RpbWVuc2lvbiA9IGZ1bmN0aW9uIF9kaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLmRpbWVuc2lvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuZGltZW5zaW9uKCkgOiB0aGlzLnByb3BzLmRpbWVuc2lvbjtcbiAgfTtcblxuICAvLyBmb3IgdGVzdGluZ1xuXG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLl9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZSA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZShlbGVtLCBkaW1lbnNpb24pIHtcbiAgICByZXR1cm4gZWxlbVsnc2Nyb2xsJyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXSArICdweCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25FbnRlciA9IF9wcm9wcy5vbkVudGVyO1xuICAgIHZhciBvbkVudGVyaW5nID0gX3Byb3BzLm9uRW50ZXJpbmc7XG4gICAgdmFyIG9uRW50ZXJlZCA9IF9wcm9wcy5vbkVudGVyZWQ7XG4gICAgdmFyIG9uRXhpdCA9IF9wcm9wcy5vbkV4aXQ7XG4gICAgdmFyIG9uRXhpdGluZyA9IF9wcm9wcy5vbkV4aXRpbmc7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ29uRW50ZXInLCAnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdjbGFzc05hbWUnXSk7XG5cbiAgICBkZWxldGUgcHJvcHMuZGltZW5zaW9uO1xuICAgIGRlbGV0ZSBwcm9wcy5nZXREaW1lbnNpb25WYWx1ZTtcblxuICAgIHZhciBoYW5kbGVFbnRlciA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRW50ZXIsIG9uRW50ZXIpO1xuICAgIHZhciBoYW5kbGVFbnRlcmluZyA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRW50ZXJpbmcsIG9uRW50ZXJpbmcpO1xuICAgIHZhciBoYW5kbGVFbnRlcmVkID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlcmVkLCBvbkVudGVyZWQpO1xuICAgIHZhciBoYW5kbGVFeGl0ID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFeGl0LCBvbkV4aXQpO1xuICAgIHZhciBoYW5kbGVFeGl0aW5nID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFeGl0aW5nLCBvbkV4aXRpbmcpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5fZGltZW5zaW9uKCkgPT09ICd3aWR0aCdcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAnYXJpYS1leHBhbmRlZCc6IHByb3BzLnJvbGUgPyBwcm9wc1tcImluXCJdIDogbnVsbCxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICBleGl0ZWRDbGFzc05hbWU6ICdjb2xsYXBzZScsXG4gICAgICBleGl0aW5nQ2xhc3NOYW1lOiAnY29sbGFwc2luZycsXG4gICAgICBlbnRlcmVkQ2xhc3NOYW1lOiAnY29sbGFwc2UgaW4nLFxuICAgICAgZW50ZXJpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgICBvbkV4aXQ6IGhhbmRsZUV4aXQsXG4gICAgICBvbkV4aXRpbmc6IGhhbmRsZUV4aXRpbmdcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Db2xsYXBzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29sbGFwc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdHlsZTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbC9jYW1lbGl6ZVN0eWxlJyk7XG5cbnZhciBfY2FtZWxpemVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZVN0eWxlKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvaHlwaGVuYXRlU3R5bGUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZSk7XG5cbnZhciBfZ2V0Q29tcHV0ZWRTdHlsZTIgPSByZXF1aXJlKCcuL2dldENvbXB1dGVkU3R5bGUnKTtcblxudmFyIF9nZXRDb21wdXRlZFN0eWxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldENvbXB1dGVkU3R5bGUyKTtcblxudmFyIF9yZW1vdmVTdHlsZSA9IHJlcXVpcmUoJy4vcmVtb3ZlU3R5bGUnKTtcblxudmFyIF9yZW1vdmVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW1vdmVTdHlsZSk7XG5cbnZhciBfcHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb24vcHJvcGVydGllcycpO1xuXG52YXIgX2lzVHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbi9pc1RyYW5zZm9ybScpO1xuXG52YXIgX2lzVHJhbnNmb3JtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVHJhbnNmb3JtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3R5bGUobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHZhciBjc3MgPSAnJztcbiAgdmFyIHRyYW5zZm9ybXMgPSAnJztcbiAgdmFyIHByb3BzID0gcHJvcGVydHk7XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5vZGUuc3R5bGVbKDAsIF9jYW1lbGl6ZVN0eWxlMi5kZWZhdWx0KShwcm9wZXJ0eSldIHx8ICgwLCBfZ2V0Q29tcHV0ZWRTdHlsZTMuZGVmYXVsdCkobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgoMCwgX2h5cGhlbmF0ZVN0eWxlMi5kZWZhdWx0KShwcm9wZXJ0eSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAocHJvcHMgPSB7fSlbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW2tleV07XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgICAgKDAsIF9yZW1vdmVTdHlsZTIuZGVmYXVsdCkobm9kZSwgKDAsIF9oeXBoZW5hdGVTdHlsZTIuZGVmYXVsdCkoa2V5KSk7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzVHJhbnNmb3JtMi5kZWZhdWx0KShrZXkpKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzICs9ICgwLCBfaHlwaGVuYXRlU3R5bGUyLmRlZmF1bHQpKGtleSkgKyAnOiAnICsgdmFsdWUgKyAnOyc7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhbnNmb3Jtcykge1xuICAgIGNzcyArPSBfcHJvcGVydGllcy50cmFuc2Zvcm0gKyAnOiAnICsgdHJhbnNmb3JtcyArICc7JztcbiAgfVxuXG4gIG5vZGUuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBjc3M7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kb20taGVscGVycy9zdHlsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbGl6ZVN0eWxlTmFtZTtcblxudmFyIF9jYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIF9jYW1lbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvY2FtZWxpemVTdHlsZU5hbWUuanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gKDAsIF9jYW1lbGl6ZTIuZGVmYXVsdCkoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FtZWxpemU7XG52YXIgckh5cGhlbiA9IC8tKC4pL2c7XG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uockh5cGhlbiwgZnVuY3Rpb24gKF8sIGNocikge1xuICAgIHJldHVybiBjaHIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG52YXIgX2h5cGhlbmF0ZSA9IHJlcXVpcmUoJy4vaHlwaGVuYXRlJyk7XG5cbnZhciBfaHlwaGVuYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiAoMCwgX2h5cGhlbmF0ZTIuZGVmYXVsdCkoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlO1xuXG52YXIgclVwcGVyID0gLyhbQS1aXSkvZztcblxuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoclVwcGVyLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9nZXRDb21wdXRlZFN0eWxlO1xuXG52YXIgX2NhbWVsaXplU3R5bGUgPSByZXF1aXJlKCcuLi91dGlsL2NhbWVsaXplU3R5bGUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcnBvc2l0aW9uID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIHJudW1ub25weCA9IC9eKFsrLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KSkoPyFweClbYS16JV0rJC9pO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignTm8gRWxlbWVudCBwYXNzZWQgdG8gYGdldENvbXB1dGVkU3R5bGUoKWAnKTtcbiAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudDtcblxuICByZXR1cm4gJ2RlZmF1bHRWaWV3JyBpbiBkb2MgPyBkb2MuZGVmYXVsdFZpZXcub3BlbmVyID8gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHtcbiAgICAvL2llIDggXCJtYWdpY1wiIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS4xMS1zdGFibGUvc3JjL2Nzcy9jdXJDU1MuanMjTDcyXG4gICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSB7XG4gICAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuXG4gICAgICBwcm9wID0gKDAsIF9jYW1lbGl6ZVN0eWxlMi5kZWZhdWx0KShwcm9wKTtcblxuICAgICAgaWYgKHByb3AgPT0gJ2Zsb2F0JykgcHJvcCA9ICdzdHlsZUZsb2F0JztcblxuICAgICAgdmFyIGN1cnJlbnQgPSBub2RlLmN1cnJlbnRTdHlsZVtwcm9wXSB8fCBudWxsO1xuXG4gICAgICBpZiAoY3VycmVudCA9PSBudWxsICYmIHN0eWxlICYmIHN0eWxlW3Byb3BdKSBjdXJyZW50ID0gc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChybnVtbm9ucHgudGVzdChjdXJyZW50KSAmJiAhcnBvc2l0aW9uLnRlc3QocHJvcCkpIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICB2YXIgbGVmdCA9IHN0eWxlLmxlZnQ7XG4gICAgICAgIHZhciBydW5TdHlsZSA9IG5vZGUucnVudGltZVN0eWxlO1xuICAgICAgICB2YXIgcnNMZWZ0ID0gcnVuU3R5bGUgJiYgcnVuU3R5bGUubGVmdDtcblxuICAgICAgICAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG4gICAgICAgIGlmIChyc0xlZnQpIHJ1blN0eWxlLmxlZnQgPSBub2RlLmN1cnJlbnRTdHlsZS5sZWZ0O1xuXG4gICAgICAgIHN0eWxlLmxlZnQgPSBwcm9wID09PSAnZm9udFNpemUnID8gJzFlbScgOiBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gc3R5bGUucGl4ZWxMZWZ0ICsgJ3B4JztcblxuICAgICAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgIHN0eWxlLmxlZnQgPSBsZWZ0O1xuICAgICAgICBpZiAocnNMZWZ0KSBydW5TdHlsZS5sZWZ0ID0gcnNMZWZ0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kb20taGVscGVycy9zdHlsZS9nZXRDb21wdXRlZFN0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlbW92ZVN0eWxlO1xuZnVuY3Rpb24gcmVtb3ZlU3R5bGUobm9kZSwga2V5KSB7XG4gIHJldHVybiAncmVtb3ZlUHJvcGVydHknIGluIG5vZGUuc3R5bGUgPyBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSkgOiBub2RlLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG9tLWhlbHBlcnMvc3R5bGUvcmVtb3ZlU3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1RyYW5zZm9ybTtcbnZhciBzdXBwb3J0ZWRUcmFuc2Zvcm1zID0gL14oKHRyYW5zbGF0ZXxyb3RhdGV8c2NhbGUpKFh8WXxafDNkKT98bWF0cml4KDNkKT98cGVyc3BlY3RpdmV8c2tldyhYfFkpPykkL2k7XG5cbmZ1bmN0aW9uIGlzVHJhbnNmb3JtKHByb3BlcnR5KSB7XG4gIHJldHVybiAhIShwcm9wZXJ0eSAmJiBzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3QocHJvcGVydHkpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9pc1RyYW5zZm9ybS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY2FwaXRhbGl6ZTtcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBcIlwiICsgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jc3NBbmltYXRpb24gPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmNvbnRhaW5zID0gZXhwb3J0cy5LZXlDb2RlID0gZXhwb3J0cy5jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBleHBvcnRzLnNwbGl0Q29tcG9uZW50ID0gZXhwb3J0cy5pc1JlcXVpcmVkRm9yQTExeSA9IGV4cG9ydHMuZWxlbWVudFR5cGUgPSBleHBvcnRzLmRlcHJlY2F0ZWQgPSBleHBvcnRzLmNvbXBvbmVudE9yRWxlbWVudCA9IGV4cG9ydHMuYWxsID0gdW5kZWZpbmVkO1xuXG52YXIgX2FsbDIgPSByZXF1aXJlKCcuL2FsbCcpO1xuXG52YXIgX2FsbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbGwyKTtcblxudmFyIF9jb21wb25lbnRPckVsZW1lbnQyID0gcmVxdWlyZSgnLi9jb21wb25lbnRPckVsZW1lbnQnKTtcblxudmFyIF9jb21wb25lbnRPckVsZW1lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50T3JFbGVtZW50Mik7XG5cbnZhciBfZGVwcmVjYXRlZDIgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZWQnKTtcblxudmFyIF9kZXByZWNhdGVkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZWQyKTtcblxudmFyIF9lbGVtZW50VHlwZTIgPSByZXF1aXJlKCcuL2VsZW1lbnRUeXBlJyk7XG5cbnZhciBfZWxlbWVudFR5cGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZWxlbWVudFR5cGUyKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeTIgPSByZXF1aXJlKCcuL2lzUmVxdWlyZWRGb3JBMTF5Jyk7XG5cbnZhciBfaXNSZXF1aXJlZEZvckExMXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNSZXF1aXJlZEZvckExMXkyKTtcblxudmFyIF9zcGxpdENvbXBvbmVudDIgPSByZXF1aXJlKCcuL3NwbGl0Q29tcG9uZW50Jyk7XG5cbnZhciBfc3BsaXRDb21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BsaXRDb21wb25lbnQyKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gcmVxdWlyZSgnLi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMik7XG5cbnZhciBfa2V5Q29kZSA9IHJlcXVpcmUoJy4va2V5Q29kZScpO1xuXG52YXIgX2tleUNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Q29kZSk7XG5cbnZhciBfY29udGFpbnMyID0gcmVxdWlyZSgnLi9jb250YWlucycpO1xuXG52YXIgX2NvbnRhaW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5zMik7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSByZXF1aXJlKCcuL2FkZEV2ZW50TGlzdGVuZXInKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZEV2ZW50TGlzdGVuZXIyKTtcblxudmFyIF9jc3NBbmltYXRpb24yID0gcmVxdWlyZSgnLi9jc3NBbmltYXRpb24nKTtcblxudmFyIF9jc3NBbmltYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQW5pbWF0aW9uMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuYWxsID0gX2FsbDMuZGVmYXVsdDtcbmV4cG9ydHMuY29tcG9uZW50T3JFbGVtZW50ID0gX2NvbXBvbmVudE9yRWxlbWVudDMuZGVmYXVsdDtcbmV4cG9ydHMuZGVwcmVjYXRlZCA9IF9kZXByZWNhdGVkMy5kZWZhdWx0O1xuZXhwb3J0cy5lbGVtZW50VHlwZSA9IF9lbGVtZW50VHlwZTMuZGVmYXVsdDtcbmV4cG9ydHMuaXNSZXF1aXJlZEZvckExMXkgPSBfaXNSZXF1aXJlZEZvckExMXkzLmRlZmF1bHQ7XG5leHBvcnRzLnNwbGl0Q29tcG9uZW50ID0gX3NwbGl0Q29tcG9uZW50My5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMy5kZWZhdWx0O1xuZXhwb3J0cy5LZXlDb2RlID0gX2tleUNvZGUyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbnRhaW5zID0gX2NvbnRhaW5zMy5kZWZhdWx0O1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gX2FkZEV2ZW50TGlzdGVuZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmNzc0FuaW1hdGlvbiA9IF9jc3NBbmltYXRpb24zLmRlZmF1bHQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhbGw7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhbGwoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFByb3BUeXBlcygpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBlcnJvciA9IG51bGw7XG5cbiAgICB2YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cblxuICByZXR1cm4gKDAsIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIuZGVmYXVsdCkoYWxsUHJvcFR5cGVzKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjtcbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbi8vIE1vc3RseSB0YWtlbiBmcm9tIFJlYWN0UHJvcFR5cGVzLlxuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWVTYWZlICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lU2FmZSArICdgLicpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNiA/IF9sZW4gLSA2IDogMCksIF9rZXkgPSA2OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA2XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGUuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lU2FmZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZVNhZmVdLmNvbmNhdChhcmdzKSk7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBSZWFjdEVsZW1lbnQgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LiBZb3UgY2FuIHVzdWFsbHkgb2J0YWluIGEgUmVhY3RDb21wb25lbnQgb3IgRE9NRWxlbWVudCAnICsgJ2Zyb20gYSBSZWFjdEVsZW1lbnQgYnkgYXR0YWNoaW5nIGEgcmVmIHRvIGl0LicpO1xuICB9XG5cbiAgaWYgKChwcm9wVHlwZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BWYWx1ZS5yZW5kZXIgIT09ICdmdW5jdGlvbicpICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LicpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKHZhbGlkYXRlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbXBvbmVudE9yRWxlbWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBkZXByZWNhdGVkO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdhcm5lZCA9IHt9O1xuXG5mdW5jdGlvbiBkZXByZWNhdGVkKHZhbGlkYXRvciwgcmVhc29uKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZVNhZmUgPSBjb21wb25lbnROYW1lIHx8ICc8PGFub255bW91cz4+JztcbiAgICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT0gbnVsbCkge1xuICAgICAgdmFyIG1lc3NhZ2VLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgcHJvcE5hbWU7XG5cbiAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkod2FybmVkW21lc3NhZ2VLZXldLCAnVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWVTYWZlICsgJ2Agb2YgJyArICgnYCcgKyBjb21wb25lbnROYW1lU2FmZSArICdgIGlzIGRlcHJlY2F0ZWQuICcgKyByZWFzb24gKyAnLicpKTtcblxuICAgICAgd2FybmVkW21lc3NhZ2VLZXldID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiA1ID8gX2xlbiAtIDUgOiAwKSwgX2tleSA9IDU7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDVdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lXS5jb25jYXQoYXJncykpO1xuICB9O1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZnVuY3Rpb24gX3Jlc2V0V2FybmVkKCkge1xuICB3YXJuZWQgPSB7fTtcbn1cblxuZGVwcmVjYXRlZC5fcmVzZXRXYXJuZWQgPSBfcmVzZXRXYXJuZWQ7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9kZXByZWNhdGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2FybmluZy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL2JlZS10b29scy9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZWxlbWVudFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBSZWFjdEVsZW1lbnQgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGVsZW1lbnQgdHlwZSAoYSBzdHJpbmcgJykgKyAnb3IgYSBSZWFjdENsYXNzKS4nKTtcbiAgfVxuXG4gIGlmIChwcm9wVHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBlbGVtZW50IHR5cGUgKGEgc3RyaW5nICcpICsgJ29yIGEgUmVhY3RDbGFzcykuJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIuZGVmYXVsdCkoZWxlbWVudFR5cGUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RpbnBlci1iZWUtY29yZS9saWIvZWxlbWVudFR5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNSZXF1aXJlZEZvckExMXk7XG5mdW5jdGlvbiBpc1JlcXVpcmVkRm9yQTExeSh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCBpcyByZXF1aXJlZCB0byBtYWtlICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBhY2Nlc3NpYmxlIGZvciB1c2VycyBvZiBhc3Npc3RpdmUgJykgKyAndGVjaG5vbG9naWVzIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2lzUmVxdWlyZWRGb3JBMTF5LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3BsaXRDb21wb25lbnRQcm9wcztcbi8qKlxuICog5YiG5Ymy6KaB5Lyg5YWl54i25YWD57Sg5ZKM5a2Q5YWD57Sg55qEcHJvcHNcbiAqIEBwYXJhbSAge1tvYmplY3RdfSBwcm9wcyAgICAg5Lyg5YWl55qE5bGe5oCnXG4gKiBAcGFyYW0gIHtbcmVhY3RFbGVtZW50XX0gQ29tcG9uZW50IOe7hOS7tlxuICogQHJldHVybiB7W2FycmF5XX0gICAgICAgICAgIOi/lOWbnuaVsOe7hO+8jOesrOS4gOS4quWFg+e0oOS4uueItuWFg+e0oHByb3Bz5a+56LGh77yM56ys5LqM5Liq5a2Q5YWD57SgcHJvcHPlr7nosaFcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb21wb25lbnRQcm9wcyhwcm9wcywgQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnRQcm9wVHlwZXMgPSBDb21wb25lbnQucHJvcFR5cGVzO1xuXG4gIHZhciBwYXJlbnRQcm9wcyA9IHt9O1xuICB2YXIgY2hpbGRQcm9wcyA9IHt9O1xuXG4gIE9iamVjdC5lbnRyaWVzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHByb3BOYW1lID0gX3JlZlswXSxcbiAgICAgICAgcHJvcFZhbHVlID0gX3JlZlsxXTtcblxuICAgIGlmIChjb21wb25lbnRQcm9wVHlwZXNbcHJvcE5hbWVdKSB7XG4gICAgICBwYXJlbnRQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkUHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtwYXJlbnRQcm9wcywgY2hpbGRQcm9wc107XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9zcGxpdENvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmICE9IG51bGw7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFjYyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICogc29tZSBrZXktY29kZXMgZGVmaW5pdGlvbiBhbmQgdXRpbHMgZnJvbSBjbG9zdXJlLWxpYnJhcnlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxudmFyIEtleUNvZGUgPSB7XG4gIC8qKlxuICAgKiBNQUNfRU5URVJcbiAgICovXG4gIE1BQ19FTlRFUjogMyxcbiAgLyoqXG4gICAqIEJBQ0tTUEFDRVxuICAgKi9cbiAgQkFDS1NQQUNFOiA4LFxuICAvKipcbiAgICogVEFCXG4gICAqL1xuICBUQUI6IDksXG4gIC8qKlxuICAgKiBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgICovXG4gIE5VTV9DRU5URVI6IDEyLCAvLyBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgLyoqXG4gICAqIEVOVEVSXG4gICAqL1xuICBFTlRFUjogMTMsXG4gIC8qKlxuICAgKiBTSElGVFxuICAgKi9cbiAgU0hJRlQ6IDE2LFxuICAvKipcbiAgICogQ1RSTFxuICAgKi9cbiAgQ1RSTDogMTcsXG4gIC8qKlxuICAgKiBBTFRcbiAgICovXG4gIEFMVDogMTgsXG4gIC8qKlxuICAgKiBQQVVTRVxuICAgKi9cbiAgUEFVU0U6IDE5LFxuICAvKipcbiAgICogQ0FQU19MT0NLXG4gICAqL1xuICBDQVBTX0xPQ0s6IDIwLFxuICAvKipcbiAgICogRVNDXG4gICAqL1xuICBFU0M6IDI3LFxuICAvKipcbiAgICogU1BBQ0VcbiAgICovXG4gIFNQQUNFOiAzMixcbiAgLyoqXG4gICAqIFBBR0VfVVBcbiAgICovXG4gIFBBR0VfVVA6IDMzLCAvLyBhbHNvIE5VTV9OT1JUSF9FQVNUXG4gIC8qKlxuICAgKiBQQUdFX0RPV05cbiAgICovXG4gIFBBR0VfRE9XTjogMzQsIC8vIGFsc28gTlVNX1NPVVRIX0VBU1RcbiAgLyoqXG4gICAqIEVORFxuICAgKi9cbiAgRU5EOiAzNSwgLy8gYWxzbyBOVU1fU09VVEhfV0VTVFxuICAvKipcbiAgICogSE9NRVxuICAgKi9cbiAgSE9NRTogMzYsIC8vIGFsc28gTlVNX05PUlRIX1dFU1RcbiAgLyoqXG4gICAqIExFRlRcbiAgICovXG4gIExFRlQ6IDM3LCAvLyBhbHNvIE5VTV9XRVNUXG4gIC8qKlxuICAgKiBVUFxuICAgKi9cbiAgVVA6IDM4LCAvLyBhbHNvIE5VTV9OT1JUSFxuICAvKipcbiAgICogUklHSFRcbiAgICovXG4gIFJJR0hUOiAzOSwgLy8gYWxzbyBOVU1fRUFTVFxuICAvKipcbiAgICogRE9XTlxuICAgKi9cbiAgRE9XTjogNDAsIC8vIGFsc28gTlVNX1NPVVRIXG4gIC8qKlxuICAgKiBQUklOVF9TQ1JFRU5cbiAgICovXG4gIFBSSU5UX1NDUkVFTjogNDQsXG4gIC8qKlxuICAgKiBJTlNFUlRcbiAgICovXG4gIElOU0VSVDogNDUsIC8vIGFsc28gTlVNX0lOU0VSVFxuICAvKipcbiAgICogREVMRVRFXG4gICAqL1xuICBERUxFVEU6IDQ2LCAvLyBhbHNvIE5VTV9ERUxFVEVcbiAgLyoqXG4gICAqIFpFUk9cbiAgICovXG4gIFpFUk86IDQ4LFxuICAvKipcbiAgICogT05FXG4gICAqL1xuICBPTkU6IDQ5LFxuICAvKipcbiAgICogVFdPXG4gICAqL1xuICBUV086IDUwLFxuICAvKipcbiAgICogVEhSRUVcbiAgICovXG4gIFRIUkVFOiA1MSxcbiAgLyoqXG4gICAqIEZPVVJcbiAgICovXG4gIEZPVVI6IDUyLFxuICAvKipcbiAgICogRklWRVxuICAgKi9cbiAgRklWRTogNTMsXG4gIC8qKlxuICAgKiBTSVhcbiAgICovXG4gIFNJWDogNTQsXG4gIC8qKlxuICAgKiBTRVZFTlxuICAgKi9cbiAgU0VWRU46IDU1LFxuICAvKipcbiAgICogRUlHSFRcbiAgICovXG4gIEVJR0hUOiA1NixcbiAgLyoqXG4gICAqIE5JTkVcbiAgICovXG4gIE5JTkU6IDU3LFxuICAvKipcbiAgICogUVVFU1RJT05fTUFSS1xuICAgKi9cbiAgUVVFU1RJT05fTUFSSzogNjMsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQVxuICAgKi9cbiAgQTogNjUsXG4gIC8qKlxuICAgKiBCXG4gICAqL1xuICBCOiA2NixcbiAgLyoqXG4gICAqIENcbiAgICovXG4gIEM6IDY3LFxuICAvKipcbiAgICogRFxuICAgKi9cbiAgRDogNjgsXG4gIC8qKlxuICAgKiBFXG4gICAqL1xuICBFOiA2OSxcbiAgLyoqXG4gICAqIEZcbiAgICovXG4gIEY6IDcwLFxuICAvKipcbiAgICogR1xuICAgKi9cbiAgRzogNzEsXG4gIC8qKlxuICAgKiBIXG4gICAqL1xuICBIOiA3MixcbiAgLyoqXG4gICAqIElcbiAgICovXG4gIEk6IDczLFxuICAvKipcbiAgICogSlxuICAgKi9cbiAgSjogNzQsXG4gIC8qKlxuICAgKiBLXG4gICAqL1xuICBLOiA3NSxcbiAgLyoqXG4gICAqIExcbiAgICovXG4gIEw6IDc2LFxuICAvKipcbiAgICogTVxuICAgKi9cbiAgTTogNzcsXG4gIC8qKlxuICAgKiBOXG4gICAqL1xuICBOOiA3OCxcbiAgLyoqXG4gICAqIE9cbiAgICovXG4gIE86IDc5LFxuICAvKipcbiAgICogUFxuICAgKi9cbiAgUDogODAsXG4gIC8qKlxuICAgKiBRXG4gICAqL1xuICBROiA4MSxcbiAgLyoqXG4gICAqIFJcbiAgICovXG4gIFI6IDgyLFxuICAvKipcbiAgICogU1xuICAgKi9cbiAgUzogODMsXG4gIC8qKlxuICAgKiBUXG4gICAqL1xuICBUOiA4NCxcbiAgLyoqXG4gICAqIFVcbiAgICovXG4gIFU6IDg1LFxuICAvKipcbiAgICogVlxuICAgKi9cbiAgVjogODYsXG4gIC8qKlxuICAgKiBXXG4gICAqL1xuICBXOiA4NyxcbiAgLyoqXG4gICAqIFhcbiAgICovXG4gIFg6IDg4LFxuICAvKipcbiAgICogWVxuICAgKi9cbiAgWTogODksXG4gIC8qKlxuICAgKiBaXG4gICAqL1xuICBaOiA5MCxcbiAgLyoqXG4gICAqIE1FVEFcbiAgICovXG4gIE1FVEE6IDkxLCAvLyBXSU5fS0VZX0xFRlRcbiAgLyoqXG4gICAqIFdJTl9LRVlfUklHSFRcbiAgICovXG4gIFdJTl9LRVlfUklHSFQ6IDkyLFxuICAvKipcbiAgICogQ09OVEVYVF9NRU5VXG4gICAqL1xuICBDT05URVhUX01FTlU6IDkzLFxuICAvKipcbiAgICogTlVNX1pFUk9cbiAgICovXG4gIE5VTV9aRVJPOiA5NixcbiAgLyoqXG4gICAqIE5VTV9PTkVcbiAgICovXG4gIE5VTV9PTkU6IDk3LFxuICAvKipcbiAgICogTlVNX1RXT1xuICAgKi9cbiAgTlVNX1RXTzogOTgsXG4gIC8qKlxuICAgKiBOVU1fVEhSRUVcbiAgICovXG4gIE5VTV9USFJFRTogOTksXG4gIC8qKlxuICAgKiBOVU1fRk9VUlxuICAgKi9cbiAgTlVNX0ZPVVI6IDEwMCxcbiAgLyoqXG4gICAqIE5VTV9GSVZFXG4gICAqL1xuICBOVU1fRklWRTogMTAxLFxuICAvKipcbiAgICogTlVNX1NJWFxuICAgKi9cbiAgTlVNX1NJWDogMTAyLFxuICAvKipcbiAgICogTlVNX1NFVkVOXG4gICAqL1xuICBOVU1fU0VWRU46IDEwMyxcbiAgLyoqXG4gICAqIE5VTV9FSUdIVFxuICAgKi9cbiAgTlVNX0VJR0hUOiAxMDQsXG4gIC8qKlxuICAgKiBOVU1fTklORVxuICAgKi9cbiAgTlVNX05JTkU6IDEwNSxcbiAgLyoqXG4gICAqIE5VTV9NVUxUSVBMWVxuICAgKi9cbiAgTlVNX01VTFRJUExZOiAxMDYsXG4gIC8qKlxuICAgKiBOVU1fUExVU1xuICAgKi9cbiAgTlVNX1BMVVM6IDEwNyxcbiAgLyoqXG4gICAqIE5VTV9NSU5VU1xuICAgKi9cbiAgTlVNX01JTlVTOiAxMDksXG4gIC8qKlxuICAgKiBOVU1fUEVSSU9EXG4gICAqL1xuICBOVU1fUEVSSU9EOiAxMTAsXG4gIC8qKlxuICAgKiBOVU1fRElWSVNJT05cbiAgICovXG4gIE5VTV9ESVZJU0lPTjogMTExLFxuICAvKipcbiAgICogRjFcbiAgICovXG4gIEYxOiAxMTIsXG4gIC8qKlxuICAgKiBGMlxuICAgKi9cbiAgRjI6IDExMyxcbiAgLyoqXG4gICAqIEYzXG4gICAqL1xuICBGMzogMTE0LFxuICAvKipcbiAgICogRjRcbiAgICovXG4gIEY0OiAxMTUsXG4gIC8qKlxuICAgKiBGNVxuICAgKi9cbiAgRjU6IDExNixcbiAgLyoqXG4gICAqIEY2XG4gICAqL1xuICBGNjogMTE3LFxuICAvKipcbiAgICogRjdcbiAgICovXG4gIEY3OiAxMTgsXG4gIC8qKlxuICAgKiBGOFxuICAgKi9cbiAgRjg6IDExOSxcbiAgLyoqXG4gICAqIEY5XG4gICAqL1xuICBGOTogMTIwLFxuICAvKipcbiAgICogRjEwXG4gICAqL1xuICBGMTA6IDEyMSxcbiAgLyoqXG4gICAqIEYxMVxuICAgKi9cbiAgRjExOiAxMjIsXG4gIC8qKlxuICAgKiBGMTJcbiAgICovXG4gIEYxMjogMTIzLFxuICAvKipcbiAgICogTlVNTE9DS1xuICAgKi9cbiAgTlVNTE9DSzogMTQ0LFxuICAvKipcbiAgICogU0VNSUNPTE9OXG4gICAqL1xuICBTRU1JQ09MT046IDE4NiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBEQVNIXG4gICAqL1xuICBEQVNIOiAxODksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogRVFVQUxTXG4gICAqL1xuICBFUVVBTFM6IDE4NywgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBDT01NQVxuICAgKi9cbiAgQ09NTUE6IDE4OCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBQRVJJT0RcbiAgICovXG4gIFBFUklPRDogMTkwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFNMQVNIXG4gICAqL1xuICBTTEFTSDogMTkxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEFQT1NUUk9QSEVcbiAgICovXG4gIEFQT1NUUk9QSEU6IDE5MiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBTSU5HTEVfUVVPVEVcbiAgICovXG4gIFNJTkdMRV9RVU9URTogMjIyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIE9QRU5fU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIE9QRU5fU1FVQVJFX0JSQUNLRVQ6IDIxOSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBCQUNLU0xBU0hcbiAgICovXG4gIEJBQ0tTTEFTSDogMjIwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIENMT1NFX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBDTE9TRV9TUVVBUkVfQlJBQ0tFVDogMjIxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFdJTl9LRVlcbiAgICovXG4gIFdJTl9LRVk6IDIyNCxcbiAgLyoqXG4gICAqIE1BQ19GRl9NRVRBXG4gICAqL1xuICBNQUNfRkZfTUVUQTogMjI0LCAvLyBGaXJlZm94IChHZWNrbykgZmlyZXMgdGhpcyBmb3IgdGhlIG1ldGEga2V5IGluc3RlYWQgb2YgOTFcbiAgLyoqXG4gICAqIFdJTl9JTUVcbiAgICovXG4gIFdJTl9JTUU6IDIyOVxufTtcblxuLypcbiB3aGV0aGVyIHRleHQgYW5kIG1vZGlmaWVkIGtleSBpcyBlbnRlcmVkIGF0IHRoZSBzYW1lIHRpbWUuXG4gKi9cbktleUNvZGUuaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQgPSBmdW5jdGlvbiBpc1RleHRNb2RpZnlpbmdLZXlFdmVudChlKSB7XG4gIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICBpZiAoZS5hbHRLZXkgJiYgIWUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHxcbiAgLy8gRnVuY3Rpb24ga2V5cyBkb24ndCBnZW5lcmF0ZSB0ZXh0XG4gIGtleUNvZGUgPj0gS2V5Q29kZS5GMSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuRjEyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGhlIGZvbGxvd2luZyBrZXlzIGFyZSBxdWl0ZSBoYXJtbGVzcywgZXZlbiBpbiBjb21iaW5hdGlvbiB3aXRoXG4gIC8vIENUUkwsIEFMVCBvciBTSElGVC5cbiAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBLZXlDb2RlLkFMVDpcbiAgICBjYXNlIEtleUNvZGUuQ0FQU19MT0NLOlxuICAgIGNhc2UgS2V5Q29kZS5DT05URVhUX01FTlU6XG4gICAgY2FzZSBLZXlDb2RlLkNUUkw6XG4gICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgY2FzZSBLZXlDb2RlLkVORDpcbiAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgIGNhc2UgS2V5Q29kZS5IT01FOlxuICAgIGNhc2UgS2V5Q29kZS5JTlNFUlQ6XG4gICAgY2FzZSBLZXlDb2RlLkxFRlQ6XG4gICAgY2FzZSBLZXlDb2RlLk1BQ19GRl9NRVRBOlxuICAgIGNhc2UgS2V5Q29kZS5NRVRBOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1MT0NLOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fQ0VOVEVSOlxuICAgIGNhc2UgS2V5Q29kZS5QQUdFX0RPV046XG4gICAgY2FzZSBLZXlDb2RlLlBBR0VfVVA6XG4gICAgY2FzZSBLZXlDb2RlLlBBVVNFOlxuICAgIGNhc2UgS2V5Q29kZS5QUklOVF9TQ1JFRU46XG4gICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgIGNhc2UgS2V5Q29kZS5TSElGVDpcbiAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgY2FzZSBLZXlDb2RlLldJTl9LRVk6XG4gICAgY2FzZSBLZXlDb2RlLldJTl9LRVlfUklHSFQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vKlxuIHdoZXRoZXIgY2hhcmFjdGVyIGlzIGVudGVyZWQuXG4gKi9cbktleUNvZGUuaXNDaGFyYWN0ZXJLZXkgPSBmdW5jdGlvbiBpc0NoYXJhY3RlcktleShrZXlDb2RlKSB7XG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTklORSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5OVU1fWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTlVNX01VTFRJUExZKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLkEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLlopIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNhZmFyaSBzZW5kcyB6ZXJvIGtleSBjb2RlIGZvciBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAgaWYgKHdpbmRvdy5uYXZpZ2F0aW9uLnVzZXJBZ2VudC5pbmRleE9mKCdXZWJLaXQnKSAhPT0gLTEgJiYga2V5Q29kZSA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgIGNhc2UgS2V5Q29kZS5RVUVTVElPTl9NQVJLOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fUExVUzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX01JTlVTOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fUEVSSU9EOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fRElWSVNJT046XG4gICAgY2FzZSBLZXlDb2RlLlNFTUlDT0xPTjpcbiAgICBjYXNlIEtleUNvZGUuREFTSDpcbiAgICBjYXNlIEtleUNvZGUuRVFVQUxTOlxuICAgIGNhc2UgS2V5Q29kZS5DT01NQTpcbiAgICBjYXNlIEtleUNvZGUuUEVSSU9EOlxuICAgIGNhc2UgS2V5Q29kZS5TTEFTSDpcbiAgICBjYXNlIEtleUNvZGUuQVBPU1RST1BIRTpcbiAgICBjYXNlIEtleUNvZGUuU0lOR0xFX1FVT1RFOlxuICAgIGNhc2UgS2V5Q29kZS5PUEVOX1NRVUFSRV9CUkFDS0VUOlxuICAgIGNhc2UgS2V5Q29kZS5CQUNLU0xBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkNMT1NFX1NRVUFSRV9CUkFDS0VUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLZXlDb2RlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RpbnBlci1iZWUtY29yZS9saWIva2V5Q29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvbnRhaW5zO1xuZnVuY3Rpb24gY29udGFpbnMocm9vdCwgbikge1xuICB2YXIgbm9kZSA9IG47XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RpbnBlci1iZWUtY29yZS9saWIvY29udGFpbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkRXZlbnRMaXN0ZW5lcldyYXA7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2FkZC1kb20tZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZERvbUV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IpIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuICgwLCBfYWRkRG9tRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2FkZEV2ZW50TGlzdGVuZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFkZEV2ZW50TGlzdGVuZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9FdmVudE9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRPYmplY3QnKTtcblxudmFyIF9FdmVudE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudE9iamVjdCk7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjayhlKSB7XG4gICAgdmFyIG5lID0gbmV3IF9FdmVudE9iamVjdDJbJ2RlZmF1bHQnXShlKTtcbiAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgbmUpO1xuICB9XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAaWdub3JlXG4gKiBldmVudCBvYmplY3QgZm9yIGRvbVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudEJhc2VPYmplY3QnKTtcblxudmFyIF9FdmVudEJhc2VPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnRCYXNlT2JqZWN0KTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBUUlVFID0gdHJ1ZTtcbnZhciBGQUxTRSA9IGZhbHNlO1xudmFyIGNvbW1vblByb3BzID0gWydhbHRLZXknLCAnYnViYmxlcycsICdjYW5jZWxhYmxlJywgJ2N0cmxLZXknLCAnY3VycmVudFRhcmdldCcsICdldmVudFBoYXNlJywgJ21ldGFLZXknLCAnc2hpZnRLZXknLCAndGFyZ2V0JywgJ3RpbWVTdGFtcCcsICd2aWV3JywgJ3R5cGUnXTtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodykge1xuICByZXR1cm4gdyA9PT0gbnVsbCB8fCB3ID09PSB1bmRlZmluZWQ7XG59XG5cbnZhciBldmVudE5vcm1hbGl6ZXJzID0gW3tcbiAgcmVnOiAvXmtleS8sXG4gIHByb3BzOiBbJ2NoYXInLCAnY2hhckNvZGUnLCAna2V5JywgJ2tleUNvZGUnLCAnd2hpY2gnXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50LndoaWNoKSkge1xuICAgICAgZXZlbnQud2hpY2ggPSAhaXNOdWxsT3JVbmRlZmluZWQobmF0aXZlRXZlbnQuY2hhckNvZGUpID8gbmF0aXZlRXZlbnQuY2hhckNvZGUgOiBuYXRpdmVFdmVudC5rZXlDb2RlO1xuICAgIH1cblxuICAgIC8vIGFkZCBtZXRhS2V5IHRvIG5vbi1NYWMgYnJvd3NlcnMgKHVzZSBjdHJsIGZvciBQQyAncyBhbmQgTWV0YSBmb3IgTWFjcylcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudC5tZXRhS2V5ID0gZXZlbnQuY3RybEtleTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgcmVnOiAvXnRvdWNoLyxcbiAgcHJvcHM6IFsndG91Y2hlcycsICdjaGFuZ2VkVG91Y2hlcycsICd0YXJnZXRUb3VjaGVzJ11cbn0sIHtcbiAgcmVnOiAvXmhhc2hjaGFuZ2UkLyxcbiAgcHJvcHM6IFsnbmV3VVJMJywgJ29sZFVSTCddXG59LCB7XG4gIHJlZzogL15nZXN0dXJlY2hhbmdlJC9pLFxuICBwcm9wczogWydyb3RhdGlvbicsICdzY2FsZSddXG59LCB7XG4gIHJlZzogL14obW91c2V3aGVlbHxET01Nb3VzZVNjcm9sbCkkLyxcbiAgcHJvcHM6IFtdLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZGVsdGFYID0gdW5kZWZpbmVkO1xuICAgIHZhciBkZWx0YVkgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRlbHRhID0gdW5kZWZpbmVkO1xuICAgIHZhciB3aGVlbERlbHRhID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YTtcbiAgICB2YXIgYXhpcyA9IG5hdGl2ZUV2ZW50LmF4aXM7XG4gICAgdmFyIHdoZWVsRGVsdGFZID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YVk7XG4gICAgdmFyIHdoZWVsRGVsdGFYID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YVg7XG4gICAgdmFyIGRldGFpbCA9IG5hdGl2ZUV2ZW50LmRldGFpbDtcblxuICAgIC8vIGllL3dlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhKSB7XG4gICAgICBkZWx0YSA9IHdoZWVsRGVsdGEgLyAxMjA7XG4gICAgfVxuXG4gICAgLy8gZ2Vja29cbiAgICBpZiAoZGV0YWlsKSB7XG4gICAgICAvLyBwcmVzcyBjb250cm9sIGUuZGV0YWlsID09IDEgZWxzZSBlLmRldGFpbCA9PSAzXG4gICAgICBkZWx0YSA9IDAgLSAoZGV0YWlsICUgMyA9PT0gMCA/IGRldGFpbCAvIDMgOiBkZXRhaWwpO1xuICAgIH1cblxuICAgIC8vIEdlY2tvXG4gICAgaWYgKGF4aXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUykge1xuICAgICAgICBkZWx0YVkgPSAwO1xuICAgICAgICBkZWx0YVggPSAwIC0gZGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IGV2ZW50LlZFUlRJQ0FMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2Via2l0XG4gICAgaWYgKHdoZWVsRGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWSA9IHdoZWVsRGVsdGFZIC8gMTIwO1xuICAgIH1cbiAgICBpZiAod2hlZWxEZWx0YVggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsdGFYID0gLTEgKiB3aGVlbERlbHRhWCAvIDEyMDtcbiAgICB9XG5cbiAgICAvLyDpu5jorqQgZGVsdGFZIChpZSlcbiAgICBpZiAoIWRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgICBkZWx0YVkgPSBkZWx0YTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGFYIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVhcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhWCA9IGRlbHRhWDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGFZIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVlcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhWSA9IGRlbHRhWTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL15tb3VzZXxjb250ZXh0bWVudXxjbGlja3xtc3BvaW50ZXJ8KF5ET01Nb3VzZVNjcm9sbCQpL2ksXG4gIHByb3BzOiBbJ2J1dHRvbnMnLCAnY2xpZW50WCcsICdjbGllbnRZJywgJ2J1dHRvbicsICdvZmZzZXRYJywgJ3JlbGF0ZWRUYXJnZXQnLCAnd2hpY2gnLCAnZnJvbUVsZW1lbnQnLCAndG9FbGVtZW50JywgJ29mZnNldFknLCAncGFnZVgnLCAncGFnZVknLCAnc2NyZWVuWCcsICdzY3JlZW5ZJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIHZhciBldmVudERvYyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZG9jID0gdW5kZWZpbmVkO1xuICAgIHZhciBib2R5ID0gdW5kZWZpbmVkO1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGJ1dHRvbiA9IG5hdGl2ZUV2ZW50LmJ1dHRvbjtcblxuICAgIC8vIENhbGN1bGF0ZSBwYWdlWC9ZIGlmIG1pc3NpbmcgYW5kIGNsaWVudFgvWSBhdmFpbGFibGVcbiAgICBpZiAodGFyZ2V0ICYmIGlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50LnBhZ2VYKSAmJiAhaXNOdWxsT3JVbmRlZmluZWQobmF0aXZlRXZlbnQuY2xpZW50WCkpIHtcbiAgICAgIGV2ZW50RG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICBkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBib2R5ID0gZXZlbnREb2MuYm9keTtcbiAgICAgIGV2ZW50LnBhZ2VYID0gbmF0aXZlRXZlbnQuY2xpZW50WCArIChkb2MgJiYgZG9jLnNjcm9sbExlZnQgfHwgYm9keSAmJiBib2R5LnNjcm9sbExlZnQgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgZXZlbnQucGFnZVkgPSBuYXRpdmVFdmVudC5jbGllbnRZICsgKGRvYyAmJiBkb2Muc2Nyb2xsVG9wIHx8IGJvZHkgJiYgYm9keS5zY3JvbGxUb3AgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRUb3AgfHwgYm9keSAmJiBib2R5LmNsaWVudFRvcCB8fCAwKTtcbiAgICB9XG5cbiAgICAvLyB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcbiAgICAvLyBkbyBub3QgdXNlIGJ1dHRvblxuICAgIGlmICghZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChidXR0b24gJiAxKSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uICYgMikge1xuICAgICAgICBldmVudC53aGljaCA9IDM7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDQpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCByZWxhdGVkVGFyZ2V0LCBpZiBuZWNlc3NhcnlcbiAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQuZnJvbUVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5mcm9tRWxlbWVudCA9PT0gdGFyZ2V0ID8gZXZlbnQudG9FbGVtZW50IDogZXZlbnQuZnJvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XTtcblxuZnVuY3Rpb24gcmV0VHJ1ZSgpIHtcbiAgcmV0dXJuIFRSVUU7XG59XG5cbmZ1bmN0aW9uIHJldEZhbHNlKCkge1xuICByZXR1cm4gRkFMU0U7XG59XG5cbmZ1bmN0aW9uIERvbUV2ZW50T2JqZWN0KG5hdGl2ZUV2ZW50KSB7XG4gIHZhciB0eXBlID0gbmF0aXZlRXZlbnQudHlwZTtcblxuICB2YXIgaXNOYXRpdmUgPSB0eXBlb2YgbmF0aXZlRXZlbnQuc3RvcFByb3BhZ2F0aW9uID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBuYXRpdmVFdmVudC5jYW5jZWxCdWJibGUgPT09ICdib29sZWFuJztcblxuICBfRXZlbnRCYXNlT2JqZWN0MlsnZGVmYXVsdCddLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIC8vIGluIGNhc2UgZG9tIGV2ZW50IGhhcyBiZWVuIG1hcmsgYXMgZGVmYXVsdCBwcmV2ZW50ZWQgYnkgbG93ZXIgZG9tIG5vZGVcbiAgdmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IHJldEZhbHNlO1xuICBpZiAoJ2RlZmF1bHRQcmV2ZW50ZWQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgnZ2V0UHJldmVudERlZmF1bHQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjkxMTUxXG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZ2V0UHJldmVudERlZmF1bHQoKSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgncmV0dXJuVmFsdWUnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQucmV0dXJuVmFsdWUgPT09IEZBTFNFID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9XG5cbiAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgdmFyIGZpeEZucyA9IFtdO1xuICB2YXIgZml4Rm4gPSB1bmRlZmluZWQ7XG4gIHZhciBsID0gdW5kZWZpbmVkO1xuICB2YXIgcHJvcCA9IHVuZGVmaW5lZDtcbiAgdmFyIHByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KCk7XG5cbiAgZXZlbnROb3JtYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChub3JtYWxpemVyKSB7XG4gICAgaWYgKHR5cGUubWF0Y2gobm9ybWFsaXplci5yZWcpKSB7XG4gICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChub3JtYWxpemVyLnByb3BzKTtcbiAgICAgIGlmIChub3JtYWxpemVyLmZpeCkge1xuICAgICAgICBmaXhGbnMucHVzaChub3JtYWxpemVyLmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsID0gcHJvcHMubGVuZ3RoO1xuXG4gIC8vIGNsb25lIHByb3BlcnRpZXMgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICB3aGlsZSAobCkge1xuICAgIHByb3AgPSBwcm9wc1stLWxdO1xuICAgIHRoaXNbcHJvcF0gPSBuYXRpdmVFdmVudFtwcm9wXTtcbiAgfVxuXG4gIC8vIGZpeCB0YXJnZXQgcHJvcGVydHksIGlmIG5lY2Vzc2FyeVxuICBpZiAoIXRoaXMudGFyZ2V0ICYmIGlzTmF0aXZlKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50OyAvLyBzcmNFbGVtZW50IG1pZ2h0IG5vdCBiZSBkZWZpbmVkIGVpdGhlclxuICB9XG5cbiAgLy8gY2hlY2sgaWYgdGFyZ2V0IGlzIGEgdGV4dCBub2RlIChzYWZhcmkpXG4gIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGwgPSBmaXhGbnMubGVuZ3RoO1xuXG4gIHdoaWxlIChsKSB7XG4gICAgZml4Rm4gPSBmaXhGbnNbLS1sXTtcbiAgICBmaXhGbih0aGlzLCBuYXRpdmVFdmVudCk7XG4gIH1cblxuICB0aGlzLnRpbWVTdGFtcCA9IG5hdGl2ZUV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufVxuXG52YXIgRXZlbnRCYXNlT2JqZWN0UHJvdG8gPSBfRXZlbnRCYXNlT2JqZWN0MlsnZGVmYXVsdCddLnByb3RvdHlwZTtcblxuKDAsIF9vYmplY3RBc3NpZ24yWydkZWZhdWx0J10pKERvbUV2ZW50T2JqZWN0LnByb3RvdHlwZSwgRXZlbnRCYXNlT2JqZWN0UHJvdG8sIHtcbiAgY29uc3RydWN0b3I6IERvbUV2ZW50T2JqZWN0LFxuXG4gIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMubmF0aXZlRXZlbnQ7XG5cbiAgICAvLyBpZiBwcmV2ZW50RGVmYXVsdCBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBGQUxTRSAoSUUpXG4gICAgICBlLnJldHVyblZhbHVlID0gRkFMU0U7XG4gICAgfVxuXG4gICAgRXZlbnRCYXNlT2JqZWN0UHJvdG8ucHJldmVudERlZmF1bHQuY2FsbCh0aGlzKTtcbiAgfSxcblxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMubmF0aXZlRXZlbnQ7XG5cbiAgICAvLyBpZiBzdG9wUHJvcGFnYXRpb24gZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIGNhbmNlbEJ1YmJsZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gVFJVRSAoSUUpXG4gICAgICBlLmNhbmNlbEJ1YmJsZSA9IFRSVUU7XG4gICAgfVxuXG4gICAgRXZlbnRCYXNlT2JqZWN0UHJvdG8uc3RvcFByb3BhZ2F0aW9uLmNhbGwodGhpcyk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEb21FdmVudE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGlnbm9yZVxuICogYmFzZSBldmVudCBvYmplY3QgZm9yIGN1c3RvbSBhbmQgZG9tIGV2ZW50LlxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICAgIC8vIGZpeGVkIDEuMlxuICAgIC8vIGNhbGwgc3RvcFByb3BhZ2F0aW9uIGltcGxpY2l0bHlcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRCYXNlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfRXZlbnQgPSByZXF1aXJlKCcuL0V2ZW50Jyk7XG5cbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnQpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMgPSByZXF1aXJlKCdjb21wb25lbnQtY2xhc3NlcycpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50Q2xhc3Nlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IF9FdmVudDIuZGVmYXVsdC5lbmRFdmVudHMubGVuZ3RoICE9PSAwO1xuXG5cbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICB2YXIgcmV0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgaWYgKHJldCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSkge1xuICBpZiAoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQpIHtcbiAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgdGltZSA9IE1hdGgubWF4KHRyYW5zaXRpb25EdXJhdGlvbiArIHRyYW5zaXRpb25EZWxheSwgYW5pbWF0aW9uRHVyYXRpb24gKyBhbmltYXRpb25EZWxheSk7XG4gICAgLy8gc29tZXRpbWVzLCBicm93c2VyIGJ1Z1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSkge1xuICBpZiAobm9kZS5yY0VuZEFuaW1UaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KG5vZGUucmNFbmRBbmltVGltZW91dCk7XG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG52YXIgY3NzQW5pbWF0aW9uID0gZnVuY3Rpb24gY3NzQW5pbWF0aW9uKG5vZGUsIHRyYW5zaXRpb25OYW1lLCBlbmRDYWxsYmFjaykge1xuICB2YXIgbmFtZUlzT2JqID0gKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJhbnNpdGlvbk5hbWUpKSA9PT0gJ29iamVjdCc7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5uYW1lIDogdHJhbnNpdGlvbk5hbWU7XG4gIHZhciBhY3RpdmVDbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5hY3RpdmUgOiB0cmFuc2l0aW9uTmFtZSArICctYWN0aXZlJztcbiAgdmFyIGVuZCA9IGVuZENhbGxiYWNrO1xuICB2YXIgc3RhcnQgPSB2b2lkIDA7XG4gIHZhciBhY3RpdmUgPSB2b2lkIDA7XG4gIHZhciBub2RlQ2xhc3NlcyA9ICgwLCBfY29tcG9uZW50Q2xhc3NlczIuZGVmYXVsdCkobm9kZSk7XG5cbiAgaWYgKGVuZENhbGxiYWNrICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbmRDYWxsYmFjaykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZW5kID0gZW5kQ2FsbGJhY2suZW5kO1xuICAgIHN0YXJ0ID0gZW5kQ2FsbGJhY2suc3RhcnQ7XG4gICAgYWN0aXZlID0gZW5kQ2FsbGJhY2suYWN0aXZlO1xuICB9XG5cbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICBfRXZlbnQyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGVDbGFzc2VzLmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoYWN0aXZlLCAwKTtcbiAgICB9XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgICAvLyAzMG1zIGZvciBmaXJlZm94XG4gIH0sIDMwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgX0V2ZW50Mi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBfRXZlbnQyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNzc0FuaW1hdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25FdmVudHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9FdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudHJ5IHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmRleG9mJyk7XG59XG5cbi8qKlxuICogV2hpdGVzcGFjZSByZWdleHAuXG4gKi9cblxudmFyIHJlID0gL1xccysvO1xuXG4vKipcbiAqIHRvU3RyaW5nIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdyYXAgYGVsYCBpbiBhIGBDbGFzc0xpc3RgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCl7XG4gIHJldHVybiBuZXcgQ2xhc3NMaXN0KGVsKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBDbGFzc0xpc3QgZm9yIGBlbGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KGVsKSB7XG4gIGlmICghZWwgfHwgIWVsLm5vZGVUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIERPTSBlbGVtZW50IHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpO1xuICB9XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5saXN0ID0gZWwuY2xhc3NMaXN0O1xufVxuXG4vKipcbiAqIEFkZCBjbGFzcyBgbmFtZWAgaWYgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICghfmkpIGFyci5wdXNoKG5hbWUpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgYG5hbWVgIHdoZW4gcHJlc2VudCwgb3JcbiAqIHBhc3MgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVtb3ZlXG4gKiBhbnkgd2hpY2ggbWF0Y2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obmFtZSl7XG4gIGlmICgnW29iamVjdCBSZWdFeHBdJyA9PSB0b1N0cmluZy5jYWxsKG5hbWUpKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlTWF0Y2hpbmcobmFtZSk7XG4gIH1cblxuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5yZW1vdmUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICh+aSkgYXJyLnNwbGljZShpLCAxKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBjbGFzc2VzIG1hdGNoaW5nIGByZWAuXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZU1hdGNoaW5nID0gZnVuY3Rpb24ocmUpe1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZS50ZXN0KGFycltpXSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgY2xhc3MgYG5hbWVgLCBjYW4gZm9yY2Ugc3RhdGUgdmlhIGBmb3JjZWAuXG4gKlxuICogRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBjbGFzc0xpc3QsIGJ1dCBkbyBub3Qgc3VwcG9ydCBgZm9yY2VgIHlldCxcbiAqIHRoZSBtaXN0YWtlIHdpbGwgYmUgZGV0ZWN0ZWQgYW5kIGNvcnJlY3RlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKG5hbWUsIGZvcmNlKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgICBpZiAoZm9yY2UgIT09IHRoaXMubGlzdC50b2dnbGUobmFtZSwgZm9yY2UpKSB7XG4gICAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7IC8vIHRvZ2dsZSBhZ2FpbiB0byBjb3JyZWN0XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBjbGFzc2VzLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFycmF5ID0gZnVuY3Rpb24oKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICB2YXIgc3RyID0gY2xhc3NOYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGFyciA9IHN0ci5zcGxpdChyZSk7XG4gIGlmICgnJyA9PT0gYXJyWzBdKSBhcnIuc2hpZnQoKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgY2xhc3MgYG5hbWVgIGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5oYXMgPVxuQ2xhc3NMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gdGhpcy5saXN0XG4gICAgPyB0aGlzLmxpc3QuY29udGFpbnMobmFtZSlcbiAgICA6ICEhIH5pbmRleCh0aGlzLmFycmF5KCksIG5hbWUpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbXBvbmVudC1jbGFzc2VzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21wb25lbnQtaW5kZXhvZi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZmFkZSBpbiBvciBmYWRlIG91dCBhbmltYXRpb25cclxuICAgKi9cbiAgXCJpblwiOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBVbm1vdW50IHRoZSBjb21wb25lbnQgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgZmFkZWQgb3V0XHJcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxyXG4gICAqIFJ1biB0aGUgZmFkZSBpbiBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XHJcbiAgICogc2hvd25cclxuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogRHVyYXRpb24gb2YgdGhlIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXQgZmluaXNoaW5nXHJcbiAgICogY2FsbGJhY2tzIGFyZSBmaXJlZCBldmVuIGlmIHRoZSBvcmlnaW5hbCBicm93c2VyIHRyYW5zaXRpb24gZW5kIGV2ZW50cyBhcmVcclxuICAgKiBjYW5jZWxlZFxyXG4gICAqL1xuICB0aW1lb3V0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGZhZGVzIGluXHJcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBmYWRlIGluXHJcbiAgICovXG4gIG9uRW50ZXJpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgaGFzIGNvbXBvbmVudCBmYWRlZCBpblxyXG4gICAqL1xuICBvbkVudGVyZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBvdXRcclxuICAgKi9cbiAgb25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBvdXRcclxuICAgKi9cbiAgb25FeGl0aW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZmFkZWQgb3V0XHJcbiAgICovXG4gIG9uRXhpdGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdGltZW91dDogMzAwLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2Vcbn07XG5cbnZhciBGYWRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZhZGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBGYWRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZmFkZScpLFxuICAgICAgZW50ZXJlZENsYXNzTmFtZTogJ2luJyxcbiAgICAgIGVudGVyaW5nQ2xhc3NOYW1lOiAnaW4nXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGYWRlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5GYWRlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZhZGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZhZGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9GYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF90aW5wZXJCZWVDb3JlID0gcmVxdWlyZSgndGlucGVyLWJlZS1jb3JlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvL+aYr+WQpuaYr+aJi+mjjueQtOaViOaenFxuICBhY2NvcmRpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+a/gOa0u+eahOmhuVxuICBhY3RpdmVLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIC8v6buY6K6k55qE5r+A5rS755qE6aG5XG4gIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIC8v6YCJ5Lit5Ye95pWwXG4gIG9uU2VsZWN0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjb3JkaW9uOiBmYWxzZSxcbiAgY2xzUHJlZml4OiAndS1wYW5lbC1ncm91cCdcbn07XG5cbi8vIFRPRE86IFVzZSB1bmNvbnRyb2xsYWJsZS5cblxudmFyIFBhbmVsR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWxHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWxHcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbEdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlU2VsZWN0ID0gX3RoaXMuaGFuZGxlU2VsZWN0LmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVLZXk6IHByb3BzLmRlZmF1bHRBY3RpdmVLZXlcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBhbmVsR3JvdXAucHJvdG90eXBlLmhhbmRsZVNlbGVjdCA9IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChrZXksIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXksIGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUtleSA9PT0ga2V5KSB7XG4gICAgICBrZXkgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IGtleSB9KTtcbiAgfTtcblxuICBQYW5lbEdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYWNjb3JkaW9uID0gX3Byb3BzLmFjY29yZGlvbjtcbiAgICB2YXIgcHJvcHNBY3RpdmVLZXkgPSBfcHJvcHMuYWN0aXZlS2V5O1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IF9wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuICAgIHZhciBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdDtcbiAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgdmFyIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXg7XG5cbiAgICB2YXIgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY2NvcmRpb24nLCAnYWN0aXZlS2V5JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkZWZhdWx0QWN0aXZlS2V5JywgJ29uU2VsZWN0JywgJ3N0eWxlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB2b2lkIDA7XG4gICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHNBY3RpdmVLZXkgIT0gbnVsbCA/IHByb3BzQWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgICBvdGhlcnMucm9sZSA9IG90aGVycy5yb2xlIHx8ICd0YWJsaXN0JztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkLnByb3BzLnN0eWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGRQcm9wcywge1xuICAgICAgICAgICAgaGVhZGVyUm9sZTogJ3RhYicsXG4gICAgICAgICAgICBwYW5lbFJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKF90aGlzMi5oYW5kbGVTZWxlY3QsIGNoaWxkLnByb3BzLm9uU2VsZWN0KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBhbmVsR3JvdXA7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGFuZWxHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGFuZWxHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfQnV0dG9uMltcImRlZmF1bHRcIl07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtYnV0dG9uL2J1aWxkL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgICAvKipcclxuICAgICAqIEB0aXRsZSDlsLrlr7hcclxuICAgICAqL1xuICAgIHNpemU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzbScsICd4ZycsICdsZyddKSxcbiAgICAvKipcclxuICAgICAqIEB0aXRsZSDmoLflvI9cclxuICAgICAqL1xuICAgIHN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcclxuICAgICAqIEB0aXRsZSDlvaLnirZcclxuICAgICAqL1xuICAgIHNoYXBlOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnYmxvY2snLCAncm91bmQnLCAnc3F1YXJlZCcsICdmbG9hdGluZycsICdwaWxsUmlnaHQnLCAncGlsbExlZnQnLCAnYm9yZGVyJywgJ2ljb24nXSksXG4gICAgLyoqXHJcbiAgICAqIEB0aXRsZSDnsbvlnotcclxuICAgICovXG4gICAgY29sb3JzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdhY2NlbnQnLCAnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2RlZmF1bHQnXSksXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5piv5ZCm56aB55SoXHJcbiAgICAgKiBAdmVJZ25vcmVcclxuICAgICAqL1xuICAgIGRpc2FibGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg57G75ZCNXHJcbiAgICAgKiBAdmVJZ25vcmVcclxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcclxuICAgICAqIEB0aXRsZSA8YnV0dG9uPiDnmoQgdHlwZVxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBodG1sVHlwZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3N1Ym1pdCcsICdidXR0b24nLCAncmVzZXQnXSlcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGh0bWxUeXBlOiAnYnV0dG9uJyxcbiAgICBjbHNQcmVmaXg6ICd1LWJ1dHRvbidcblxufTtcblxudmFyIHNpemVNYXAgPSB7XG4gICAgc206ICdzbScsXG4gICAgeGc6ICd4ZycsXG4gICAgbGc6ICdsZydcbn0sXG4gICAgY29sb3JzTWFwID0ge1xuICAgIHByaW1hcnk6ICdwcmltYXJ5JyxcbiAgICBhY2NlbnQ6ICdhY2NlbnQnLFxuICAgIHN1Y2Nlc3M6ICdzdWNjZXNzJyxcbiAgICBpbmZvOiAnaW5mbycsXG4gICAgd2FybmluZzogJ3dhcm5pbmcnLFxuICAgIGRhbmdlcjogJ2Rhbmdlcidcbn0sXG4gICAgc2hhcGVNYXAgPSB7XG4gICAgYmxvY2s6ICdibG9jaycsXG4gICAgcm91bmQ6ICdyb3VuZCcsXG4gICAgYm9yZGVyOiAnYm9yZGVyJyxcbiAgICBzcXVhcmVkOiAnc3F1YXJlZCcsXG4gICAgZmxvYXRpbmc6ICdmbG9hdGluZycsXG4gICAgcGlsbFJpZ2h0OiAncGlsbC1yaWdodCcsXG4gICAgcGlsbExlZnQ6ICdwaWxsLWxlZnQnLFxuICAgIGljb246ICdpY29uJ1xufTtcblxudmFyIEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIH1cblxuICAgIEJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGNvbG9ycyA9IF9wcm9wcy5jb2xvcnM7XG4gICAgICAgIHZhciBzaGFwZSA9IF9wcm9wcy5zaGFwZTtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgdmFyIHNpemUgPSBfcHJvcHMuc2l6ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgICAgICB2YXIgaHRtbFR5cGUgPSBfcHJvcHMuaHRtbFR5cGU7XG4gICAgICAgIHZhciBjbHNQcmVmaXggPSBfcHJvcHMuY2xzUHJlZml4O1xuXG4gICAgICAgIHZhciBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbG9ycycsICdzaGFwZScsICdkaXNhYmxlZCcsICdjbGFzc05hbWUnLCAnc2l6ZScsICdjaGlsZHJlbicsICdodG1sVHlwZScsICdjbHNQcmVmaXgnXSk7XG5cbiAgICAgICAgdmFyIGNsc09iaiA9IHt9O1xuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemVNYXBbc2l6ZV0pIHtcbiAgICAgICAgICAgIGNsc09ialtjbHNQcmVmaXggKyAnLScgKyBzaXplTWFwW3NpemVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXBlTWFwW3NoYXBlXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIHNoYXBlTWFwW3NoYXBlXV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvcnNNYXBbY29sb3JzXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIGNvbG9yc01hcFtjb2xvcnNdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xzUHJlZml4LCBjbHNPYmopO1xuICAgICAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGh0bWxUeXBlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgICAgIH0sIG90aGVycyksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBCdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWUtYnV0dG9uL2J1aWxkL0J1dHRvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xyXG5leHBvcnQgZGVmYXVsdCBJY29uIDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xuICBcbn07XG4vKipcbiAqICBiYWRnZSDpu5jorqTmmL7npLrlhoXlrrkxXG4gKi9cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblx0Y2xzUHJlZml4OiAndWYnXG59O1xuXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0bGV0IHt0eXBlLGNsYXNzTmFtZSxjbHNQcmVmaXh9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgY2xzT2JqID0ge307XG5cdFx0XG5cdFx0aWYodHlwZSkge1xuXHRcdFx0dHlwZT10eXBlLnJlcGxhY2UoLy0vZyxcIlwiKTtcblx0XHRcdGNsc09ialtgJHtjbHNQcmVmaXh9LSR7dHlwZX1gXSA9IHRydWU7XG5cdFx0fVxuXHRcdGxldCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbHNQcmVmaXgsY2xzT2JqKTtcblxuXHRcdHJldHVybihcblx0XHRcdDxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWVzLGNsYXNzTmFtZSl9PjwvaT4gXG5cdFx0KVxuXHR9XG59XG5JY29uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkljb24uUHJvcFR5cGVzID0gUHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9JY29uLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUNFQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBOzs7O0FBQUE7QUFDQTtBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QURDQTtBQUNBO0FDQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUhBO0FBUUE7QUFDQTs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBUEE7QUFVQTtBQUNBOzs7O0FBRUE7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0NBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDelJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNVVBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FwREZBO0FBSUE7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=demo.js.map