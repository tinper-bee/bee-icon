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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _beeLayout = __webpack_require__(1);

	var _beePanel = __webpack_require__(7);

	var _beeButton = __webpack_require__(74);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(76);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var CARET = _react2['default'].createElement('i', { className: 'uf uf-chevronarrowdown' });

	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-chevronarrowup' });

	var Demo1 = __webpack_require__(78);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " Icon", "code": "/**\n * @title Icon\n * @description 在iuap字符库，`type`参数值均以-分隔。\n */\n\nimport React, { Component } from 'react';\nimport Icon from 'tinper-bee';\n\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"tinper-icon-demo\">\n\t\t\t\t<ul className=\"icon_lists\">\n            \n\t                <li>\n\t                <Icon type=\"uf-wechat\"></Icon>\n\t                    <div class=\"name\">微信</div>\n\t                    <div class=\"fontclass\">.uf-wechat</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-c-o\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-arrow-up\"></Icon>\n\t                    <div class=\"name\">图表 折线图</div>\n\t                    <div class=\"fontclass\">.uf-histogram-arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-bold\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-bold</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-umbrella\"></Icon>\n\t                    <div class=\"name\">雨伞</div>\n\t                    <div class=\"fontclass\">.uf-umbrella</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qq\"></Icon>\n\t                    <div class=\"name\">QQ</div>\n\t                    <div class=\"fontclass\">.uf-qq</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square-3\"></Icon>\n\t                    <div class=\"name\">分类</div>\n\t                    <div class=\"fontclass\">.uf-4square-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-send\"></Icon>\n\t                    <div class=\"name\">发送</div>\n\t                    <div class=\"fontclass\">.uf-send</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-map\"></Icon>\n\t                    <div class=\"name\">地图</div>\n\t                    <div class=\"fontclass\">.uf-map</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9square-2\"></Icon>\n\t                    <div class=\"name\">标定</div>\n\t                    <div class=\"fontclass\">.uf-9square-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-navmenu\"></Icon>\n\t                    <div class=\"name\">汉堡包</div>\n\t                    <div class=\"fontclass\">.uf-navmenu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pc-2\"></Icon>\n\t                    <div class=\"name\">显示器</div>\n\t                    <div class=\"fontclass\">.uf-pc-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-light-2\"></Icon>\n\t                    <div class=\"name\">zoom</div>\n\t                    <div class=\"fontclass\">.uf-search-light-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-s-2\"></Icon>\n\t                    <div class=\"name\">任务</div>\n\t                    <div class=\"fontclass\">.uf-check-s-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-repeat\"></Icon>\n\t                    <div class=\"name\">撤销</div>\n\t                    <div class=\"fontclass\">.uf-repeat</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-security-2\"></Icon>\n\t                    <div class=\"name\">安全</div>\n\t                    <div class=\"fontclass\">.uf-security-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-lexi\"></Icon>\n\t                    <div class=\"name\">女</div>\n\t                    <div class=\"fontclass\">.uf-lexi</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil-s\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-del\"></Icon>\n\t                    <div class=\"name\">删除</div>\n\t                    <div class=\"fontclass\">.uf-del</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bi-o\"></Icon>\n\t                    <div class=\"name\">比价</div>\n\t                    <div class=\"fontclass\">.uf-bi-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil-c\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qrcode\"></Icon>\n\t                    <div class=\"name\">二维码</div>\n\t                    <div class=\"fontclass\">.uf-qrcode</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-c-o\"></Icon>\n\t                    <div class=\"name\">免费报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-c-o\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bell\"></Icon>\n\t                    <div class=\"name\">铃铛</div>\n\t                    <div class=\"fontclass\">.uf-bell</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-3\"></Icon>\n\t                    <div class=\"name\">机检通过</div>\n\t                    <div class=\"fontclass\">.uf-pass-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treearrow-down\"></Icon>\n\t                    <div class=\"name\">树形线</div>\n\t                    <div class=\"fontclass\">.uf-treearrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-training\"></Icon>\n\t                    <div class=\"name\">培训</div>\n\t                    <div class=\"fontclass\">.uf-training</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group-2\"></Icon>\n\t                    <div class=\"name\">组织架构</div>\n\t                    <div class=\"fontclass\">.uf-group-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zoom-in\"></Icon>\n\t                    <div class=\"name\">zoom-in</div>\n\t                    <div class=\"fontclass\">.uf-zoom-in</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-security-o\"></Icon>\n\t                    <div class=\"name\">安全</div>\n\t                    <div class=\"fontclass\">.uf-security-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-baojia-c\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-baojia-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rulerpen\"></Icon>\n\t                    <div class=\"name\">定制</div>\n\t                    <div class=\"fontclass\">.uf-rulerpen</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-erpsearch\"></Icon>\n\t                    <div class=\"name\">erp</div>\n\t                    <div class=\"fontclass\">.uf-erpsearch</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group-o\"></Icon>\n\t                    <div class=\"name\">组织机构</div>\n\t                    <div class=\"fontclass\">.uf-group-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-updown\"></Icon>\n\t                    <div class=\"name\">同步中2-同步</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-updown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-c-o\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-s\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pc\"></Icon>\n\t                    <div class=\"name\">工作台</div>\n\t                    <div class=\"fontclass\">.uf-pc</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rain\"></Icon>\n\t                    <div class=\"name\">空气_雨天</div>\n\t                    <div class=\"fontclass\">.uf-rain</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-nodata\"></Icon>\n\t                    <div class=\"name\">无数据</div>\n\t                    <div class=\"fontclass\">.uf-nodata</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-c\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bohui-s-o\"></Icon>\n\t                    <div class=\"name\">审批-驳回</div>\n\t                    <div class=\"fontclass\">.uf-bohui-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud\"></Icon>\n\t                    <div class=\"name\">天气</div>\n\t                    <div class=\"fontclass\">.uf-cloud</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bag-s\"></Icon>\n\t                    <div class=\"name\">商品</div>\n\t                    <div class=\"fontclass\">.uf-bag-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table-2\"></Icon>\n\t                    <div class=\"name\">made</div>\n\t                    <div class=\"fontclass\">.uf-table-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-anglearrowpointingtoright\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-anglearrowpointingtoright</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c-o\"></Icon>\n\t                    <div class=\"name\">叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group\"></Icon>\n\t                    <div class=\"name\">组织机构</div>\n\t                    <div class=\"fontclass\">.uf-group</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-personin-o\"></Icon>\n\t                    <div class=\"name\">认证激活</div>\n\t                    <div class=\"fontclass\">.uf-personin-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-calendar\"></Icon>\n\t                    <div class=\"name\">gm_日历</div>\n\t                    <div class=\"fontclass\">.uf-calendar</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-s-o\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sync-c-o\"></Icon>\n\t                    <div class=\"name\">同步</div>\n\t                    <div class=\"fontclass\">.uf-sync-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-grid\"></Icon>\n\t                    <div class=\"name\">grid</div>\n\t                    <div class=\"fontclass\">.uf-grid</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-anglepointingtoleft\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-anglepointingtoleft</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-activate-3\"></Icon>\n\t                    <div class=\"name\">激活</div>\n\t                    <div class=\"fontclass\">.uf-activate-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-caven\"></Icon>\n\t                    <div class=\"name\">男</div>\n\t                    <div class=\"fontclass\">.uf-caven</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-back\"></Icon>\n\t                    <div class=\"name\">返回</div>\n\t                    <div class=\"fontclass\">.uf-back</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-2\"></Icon>\n\t                    <div class=\"name\">授权</div>\n\t                    <div class=\"fontclass\">.uf-pass-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-s-o\"></Icon>\n\t                    <div class=\"name\">显示树</div>\n\t                    <div class=\"fontclass\">.uf-reduce-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-area\"></Icon>\n\t                    <div class=\"name\">图表图标-面积图</div>\n\t                    <div class=\"fontclass\">.uf-area</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flag\"></Icon>\n\t                    <div class=\"name\">旗帜</div>\n\t                    <div class=\"fontclass\">.uf-flag</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-o-2\"></Icon>\n\t                    <div class=\"name\">购买盒子</div>\n\t                    <div class=\"fontclass\">.uf-box-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-s-o-down\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-arrow-s-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-s-o-up\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-arrow-s-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-building\"></Icon>\n\t                    <div class=\"name\">企业信息</div>\n\t                    <div class=\"fontclass\">.uf-building</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tapp\"></Icon>\n\t                    <div class=\"name\">天气</div>\n\t                    <div class=\"fontclass\">.uf-tapp</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolder\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-treefolder</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-advice\"></Icon>\n\t                    <div class=\"name\">咨询</div>\n\t                    <div class=\"fontclass\">.uf-advice</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2collayout\"></Icon>\n\t                    <div class=\"name\">序列布局</div>\n\t                    <div class=\"fontclass\">.uf-2collayout</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-s\"></Icon>\n\t                    <div class=\"name\">审批</div>\n\t                    <div class=\"fontclass\">.uf-check-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sign\"></Icon>\n\t                    <div class=\"name\">采购合同</div>\n\t                    <div class=\"fontclass\">.uf-sign</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listsearch\"></Icon>\n\t                    <div class=\"name\">查看详情</div>\n\t                    <div class=\"fontclass\">.uf-listsearch</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gridcaretarrowup\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-gridcaretarrowup</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye-c-o\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-c-o\"></Icon>\n\t                    <div class=\"name\">许可</div>\n\t                    <div class=\"fontclass\">.uf-check-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-seal\"></Icon>\n\t                    <div class=\"name\">审批</div>\n\t                    <div class=\"fontclass\">.uf-seal</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-erpbox\"></Icon>\n\t                    <div class=\"name\">erp</div>\n\t                    <div class=\"fontclass\">.uf-erpbox</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rulerpen-o\"></Icon>\n\t                    <div class=\"name\">定制</div>\n\t                    <div class=\"fontclass\">.uf-rulerpen-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-role\"></Icon>\n\t                    <div class=\"name\">角色</div>\n\t                    <div class=\"fontclass\">.uf-role</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c-2\"></Icon>\n\t                    <div class=\"name\">提示叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pad\"></Icon>\n\t                    <div class=\"name\">pad</div>\n\t                    <div class=\"fontclass\">.uf-pad</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolder-closed\"></Icon>\n\t                    <div class=\"name\">tree-new-sbling-node</div>\n\t                    <div class=\"fontclass\">.uf-treefolder-closed</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-c-o\"></Icon>\n\t                    <div class=\"name\">减号</div>\n\t                    <div class=\"fontclass\">.uf-reduce-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-s-o\"></Icon>\n\t                    <div class=\"name\">通过</div>\n\t                    <div class=\"fontclass\">.uf-pass-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-setting\"></Icon>\n\t                    <div class=\"name\">维护</div>\n\t                    <div class=\"fontclass\">.uf-setting</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-s\"></Icon>\n\t                    <div class=\"name\">ZSX号</div>\n\t                    <div class=\"fontclass\">.uf-close-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-map-o\"></Icon>\n\t                    <div class=\"name\">地图</div>\n\t                    <div class=\"fontclass\">.uf-map-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-move\"></Icon>\n\t                    <div class=\"name\">移动</div>\n\t                    <div class=\"fontclass\">.uf-move</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-down\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-right\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-left\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-plus\"></Icon>\n\t                    <div class=\"name\">plus</div>\n\t                    <div class=\"fontclass\">.uf-plus</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-right\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-down\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-list-s-o\"></Icon>\n\t                    <div class=\"name\">暂无数据</div>\n\t                    <div class=\"fontclass\">.uf-list-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-down\"></Icon>\n\t                    <div class=\"name\">云下载</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-nodata-2\"></Icon>\n\t                    <div class=\"name\">无效数据</div>\n\t                    <div class=\"fontclass\">.uf-nodata-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-s\"></Icon>\n\t                    <div class=\"name\">文档文件-01</div>\n\t                    <div class=\"fontclass\">.uf-file-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-up\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-notification\"></Icon>\n\t                    <div class=\"name\">消息喇叭</div>\n\t                    <div class=\"fontclass\">.uf-notification</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-piechart\"></Icon>\n\t                    <div class=\"name\">图表_饼</div>\n\t                    <div class=\"fontclass\">.uf-piechart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-up\"></Icon>\n\t                    <div class=\"name\">云_上传</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close\"></Icon>\n\t                    <div class=\"name\">取消</div>\n\t                    <div class=\"fontclass\">.uf-close</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-correct\"></Icon>\n\t                    <div class=\"name\">对号</div>\n\t                    <div class=\"fontclass\">.uf-correct</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-s-o-2\"></Icon>\n\t                    <div class=\"name\">图表切换</div>\n\t                    <div class=\"fontclass\">.uf-histogram-s-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square-2\"></Icon>\n\t                    <div class=\"name\">应用中心</div>\n\t                    <div class=\"fontclass\">.uf-4square-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sunny\"></Icon>\n\t                    <div class=\"name\">天气 </div>\n\t                    <div class=\"fontclass\">.uf-sunny</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-link\"></Icon>\n\t                    <div class=\"name\">复制链接</div>\n\t                    <div class=\"fontclass\">.uf-link</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye-o\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qian\"></Icon>\n\t                    <div class=\"name\">签</div>\n\t                    <div class=\"fontclass\">.uf-qian</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-widgetab\"></Icon>\n\t                    <div class=\"name\">小部件授权</div>\n\t                    <div class=\"fontclass\">.uf-widgetab</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-link-off\"></Icon>\n\t                    <div class=\"name\">断开链接</div>\n\t                    <div class=\"fontclass\">.uf-link-off</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shang-s\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-shang-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-xia-s\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-xia-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-2\"></Icon>\n\t                    <div class=\"name\">盒子full</div>\n\t                    <div class=\"fontclass\">.uf-box-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-o\"></Icon>\n\t                    <div class=\"name\">授权</div>\n\t                    <div class=\"fontclass\">.uf-pass-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-down\"></Icon>\n\t                    <div class=\"name\">angle-arrow-down</div>\n\t                    <div class=\"fontclass\">.uf-arrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-right\"></Icon>\n\t                    <div class=\"name\">angle-arrow-pointing-to-right</div>\n\t                    <div class=\"fontclass\">.uf-arrow-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-left\"></Icon>\n\t                    <div class=\"name\">angle-pointing-to-left</div>\n\t                    <div class=\"fontclass\">.uf-arrow-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box\"></Icon>\n\t                    <div class=\"name\">archive-black-box</div>\n\t                    <div class=\"fontclass\">.uf-box</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-right\"></Icon>\n\t                    <div class=\"name\">arrowhead-pointing-to-the-right</div>\n\t                    <div class=\"fontclass\">.uf-triangle-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-s-o\"></Icon>\n\t                    <div class=\"name\">bar-graph-on-a-rectangle</div>\n\t                    <div class=\"fontclass\">.uf-histogram-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-book\"></Icon>\n\t                    <div class=\"name\">book</div>\n\t                    <div class=\"fontclass\">.uf-book</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bookmark-o\"></Icon>\n\t                    <div class=\"name\">bookmark-white</div>\n\t                    <div class=\"fontclass\">.uf-bookmark-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-leaf\"></Icon>\n\t                    <div class=\"name\">branch-with-leaves-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-leaf</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bullseye\"></Icon>\n\t                    <div class=\"name\">bullseye</div>\n\t                    <div class=\"fontclass\">.uf-bullseye</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gridcaretdown\"></Icon>\n\t                    <div class=\"name\">camera-retro</div>\n\t                    <div class=\"fontclass\">.uf-gridcaretdown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-up\"></Icon>\n\t                    <div class=\"name\">caret-arrow-up</div>\n\t                    <div class=\"fontclass\">.uf-triangle-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-down\"></Icon>\n\t                    <div class=\"name\">caret-down</div>\n\t                    <div class=\"fontclass\">.uf-triangle-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-down\"></Icon>\n\t                    <div class=\"name\">cloud-storage-download</div>\n\t                    <div class=\"fontclass\">.uf-cloud-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-up\"></Icon>\n\t                    <div class=\"name\">cloud-storage-uploading-option</div>\n\t                    <div class=\"fontclass\">.uf-cloud-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bubble\"></Icon>\n\t                    <div class=\"name\">comment-black-oval-bubble-shape</div>\n\t                    <div class=\"fontclass\">.uf-bubble</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bubble-o\"></Icon>\n\t                    <div class=\"name\">comment-white-oval-bubble</div>\n\t                    <div class=\"fontclass\">.uf-bubble-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-copy\"></Icon>\n\t                    <div class=\"name\">copy-document</div>\n\t                    <div class=\"fontclass\">.uf-copy</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-correct-2\"></Icon>\n\t                    <div class=\"name\">correct-symbol</div>\n\t                    <div class=\"fontclass\">.uf-correct-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-left\"></Icon>\n\t                    <div class=\"name\">double-left-chevron</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-down-2\"></Icon>\n\t                    <div class=\"name\">down-arrow</div>\n\t                    <div class=\"fontclass\">.uf-arrow-down-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-download\"></Icon>\n\t                    <div class=\"name\">download-to-storage-drive</div>\n\t                    <div class=\"fontclass\">.uf-download</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-earth\"></Icon>\n\t                    <div class=\"name\">earth-globe</div>\n\t                    <div class=\"fontclass\">.uf-earth</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mail-o\"></Icon>\n\t                    <div class=\"name\">envelope-of-white-paper</div>\n\t                    <div class=\"fontclass\">.uf-mail-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mail\"></Icon>\n\t                    <div class=\"name\">envelope</div>\n\t                    <div class=\"fontclass\">.uf-mail</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc\"></Icon>\n\t                    <div class=\"name\">exclamation</div>\n\t                    <div class=\"fontclass\">.uf-exc</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-externallink\"></Icon>\n\t                    <div class=\"name\">external-link-symbol</div>\n\t                    <div class=\"fontclass\">.uf-externallink</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-video\"></Icon>\n\t                    <div class=\"name\">facetime-button</div>\n\t                    <div class=\"fontclass\">.uf-video</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-films\"></Icon>\n\t                    <div class=\"name\">film-strip-with-two-photograms</div>\n\t                    <div class=\"fontclass\">.uf-films</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folder\"></Icon>\n\t                    <div class=\"name\">folder-closed-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-folder</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folder-o\"></Icon>\n\t                    <div class=\"name\">folder-white-shape</div>\n\t                    <div class=\"fontclass\">.uf-folder-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square\"></Icon>\n\t                    <div class=\"name\">four-black-squares</div>\n\t                    <div class=\"fontclass\">.uf-4square</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gift\"></Icon>\n\t                    <div class=\"name\">gift-box</div>\n\t                    <div class=\"fontclass\">.uf-gift</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-github-c\"></Icon>\n\t                    <div class=\"name\">github-logo</div>\n\t                    <div class=\"fontclass\">.uf-github-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-github-s\"></Icon>\n\t                    <div class=\"name\">github-sign</div>\n\t                    <div class=\"fontclass\">.uf-github-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-heart-o\"></Icon>\n\t                    <div class=\"name\">heart-shape-outline</div>\n\t                    <div class=\"fontclass\">.uf-heart-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-heart\"></Icon>\n\t                    <div class=\"name\">heart-shape-silhouette</div>\n\t                    <div class=\"fontclass\">.uf-heart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-home\"></Icon>\n\t                    <div class=\"name\">home</div>\n\t                    <div class=\"fontclass\">.uf-home</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i-c-2\"></Icon>\n\t                    <div class=\"name\">information-button</div>\n\t                    <div class=\"fontclass\">.uf-i-c-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i\"></Icon>\n\t                    <div class=\"name\">information-symbol</div>\n\t                    <div class=\"fontclass\">.uf-i</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-left\"></Icon>\n\t                    <div class=\"name\">left-arrow</div>\n\t                    <div class=\"fontclass\">.uf-triangle-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-symlist\"></Icon>\n\t                    <div class=\"name\">listing-option</div>\n\t                    <div class=\"fontclass\">.uf-symlist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-left-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-to-left</div>\n\t                    <div class=\"fontclass\">.uf-arrow-left-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-right-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-to-the-right</div>\n\t                    <div class=\"fontclass\">.uf-arrow-right-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-up-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-up</div>\n\t                    <div class=\"fontclass\">.uf-arrow-up-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-c\"></Icon>\n\t                    <div class=\"name\">minus-sign-inside-a-black-circle</div>\n\t                    <div class=\"fontclass\">.uf-reduce-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-s\"></Icon>\n\t                    <div class=\"name\">minus-sign-inside-a-black-rounded-square-shape</div>\n\t                    <div class=\"fontclass\">.uf-reduce-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-minus\"></Icon>\n\t                    <div class=\"name\">minus-symbol</div>\n\t                    <div class=\"fontclass\">.uf-minus</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mobile\"></Icon>\n\t                    <div class=\"name\">mobile-phone</div>\n\t                    <div class=\"fontclass\">.uf-mobile</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bell-o\"></Icon>\n\t                    <div class=\"name\">musical-bell-outline</div>\n\t                    <div class=\"fontclass\">.uf-bell-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9square\"></Icon>\n\t                    <div class=\"name\">nine-black-tiles</div>\n\t                    <div class=\"fontclass\">.uf-9square</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-numlist\"></Icon>\n\t                    <div class=\"name\">numbered-list</div>\n\t                    <div class=\"fontclass\">.uf-numlist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folderopen-o\"></Icon>\n\t                    <div class=\"name\">open-folder-outline</div>\n\t                    <div class=\"fontclass\">.uf-folderopen-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolderopen\"></Icon>\n\t                    <div class=\"name\">open-folder</div>\n\t                    <div class=\"fontclass\">.uf-treefolderopen</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mac\"></Icon>\n\t                    <div class=\"name\">open-laptop-computer</div>\n\t                    <div class=\"fontclass\">.uf-mac</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-camera\"></Icon>\n\t                    <div class=\"name\">photo-camera</div>\n\t                    <div class=\"fontclass\">.uf-camera</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-picture\"></Icon>\n\t                    <div class=\"name\">picture</div>\n\t                    <div class=\"fontclass\">.uf-picture</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-play\"></Icon>\n\t                    <div class=\"name\">play-sign</div>\n\t                    <div class=\"fontclass\">.uf-play</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-play-o\"></Icon>\n\t                    <div class=\"name\">play-video-button</div>\n\t                    <div class=\"fontclass\">.uf-play-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qm-c\"></Icon>\n\t                    <div class=\"name\">question-mark-on-a-circular-black-background</div>\n\t                    <div class=\"fontclass\">.uf-qm-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qm\"></Icon>\n\t                    <div class=\"name\">question-sign</div>\n\t                    <div class=\"fontclass\">.uf-qm</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-navmenu-light\"></Icon>\n\t                    <div class=\"name\">reorder-option</div>\n\t                    <div class=\"fontclass\">.uf-navmenu-light</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-settings\"></Icon>\n\t                    <div class=\"name\">settings</div>\n\t                    <div class=\"fontclass\">.uf-settings</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cart\"></Icon>\n\t                    <div class=\"name\">shopping-cart-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-cart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram\"></Icon>\n\t                    <div class=\"name\">signal-bars</div>\n\t                    <div class=\"fontclass\">.uf-histogram</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-finetune\"></Icon>\n\t                    <div class=\"name\">sort-arrows-couple-pointing-up-and-down</div>\n\t                    <div class=\"fontclass\">.uf-finetune</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sortup\"></Icon>\n\t                    <div class=\"name\">sort-by-attributes-interface-button-option</div>\n\t                    <div class=\"fontclass\">.uf-sortup</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sortdown\"></Icon>\n\t                    <div class=\"name\">sort-by-attributes</div>\n\t                    <div class=\"fontclass\">.uf-sortdown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sort19\"></Icon>\n\t                    <div class=\"name\">sort-by-numeric-order</div>\n\t                    <div class=\"fontclass\">.uf-sort19</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sort91\"></Icon>\n\t                    <div class=\"name\">sort-by-order</div>\n\t                    <div class=\"fontclass\">.uf-sort91</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-za\"></Icon>\n\t                    <div class=\"name\">sort-reverse-alphabetical-order</div>\n\t                    <div class=\"fontclass\">.uf-za</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star-o\"></Icon>\n\t                    <div class=\"name\">star-1</div>\n\t                    <div class=\"fontclass\">.uf-star-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star-2\"></Icon>\n\t                    <div class=\"name\">star-half-empty</div>\n\t                    <div class=\"fontclass\">.uf-star-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star\"></Icon>\n\t                    <div class=\"name\">star</div>\n\t                    <div class=\"fontclass\">.uf-star</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-luggage\"></Icon>\n\t                    <div class=\"name\">suitcase-with-white-details</div>\n\t                    <div class=\"fontclass\">.uf-luggage</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table\"></Icon>\n\t                    <div class=\"name\">table-grid</div>\n\t                    <div class=\"fontclass\">.uf-table</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tel\"></Icon>\n\t                    <div class=\"name\">telephone-handle-silhouette</div>\n\t                    <div class=\"fontclass\">.uf-tel</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tel-s\"></Icon>\n\t                    <div class=\"name\">telephone-symbol-button</div>\n\t                    <div class=\"fontclass\">.uf-tel-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-terminal\"></Icon>\n\t                    <div class=\"name\">terminal</div>\n\t                    <div class=\"fontclass\">.uf-terminal</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file\"></Icon>\n\t                    <div class=\"name\">text-file-1</div>\n\t                    <div class=\"fontclass\">.uf-file</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-o\"></Icon>\n\t                    <div class=\"name\">text-file</div>\n\t                    <div class=\"fontclass\">.uf-file-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-h\"></Icon>\n\t                    <div class=\"name\">three-small-square-shapes</div>\n\t                    <div class=\"fontclass\">.uf-3dot-h</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-time-c-o\"></Icon>\n\t                    <div class=\"name\">time</div>\n\t                    <div class=\"fontclass\">.uf-time-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-upload\"></Icon>\n\t                    <div class=\"name\">upload</div>\n\t                    <div class=\"fontclass\">.uf-upload</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-v\"></Icon>\n\t                    <div class=\"name\">vertical-ellipsis</div>\n\t                    <div class=\"fontclass\">.uf-3dot-v</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb\"></Icon>\n\t                    <div class=\"name\">yen-symbol</div>\n\t                    <div class=\"fontclass\">.uf-rmb</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-up\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reject-2\"></Icon>\n\t                    <div class=\"name\">驳回</div>\n\t                    <div class=\"fontclass\">.uf-reject-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-barcode\"></Icon>\n\t                    <div class=\"name\">barcode-1</div>\n\t                    <div class=\"fontclass\">.uf-barcode</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zoom-out\"></Icon>\n\t                    <div class=\"name\">zoom-out</div>\n\t                    <div class=\"fontclass\">.uf-zoom-out</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-t-o\"></Icon>\n\t                    <div class=\"name\">三角叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-t-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass\"></Icon>\n\t                    <div class=\"name\">通过</div>\n\t                    <div class=\"fontclass\">.uf-pass</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow\"></Icon>\n\t                    <div class=\"name\">关系网络</div>\n\t                    <div class=\"fontclass\">.uf-flow</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-c\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-right-2\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-right-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shelf-on\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-shelf-on</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shelf-off\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-shelf-off</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-o-2\"></Icon>\n\t                    <div class=\"name\">文件</div>\n\t                    <div class=\"fontclass\">.uf-file-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-truck-o\"></Icon>\n\t                    <div class=\"name\">到货确认</div>\n\t                    <div class=\"fontclass\">.uf-truck-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-super\"></Icon>\n\t                    <div class=\"name\">功能强大</div>\n\t                    <div class=\"fontclass\">.uf-super</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-equipment\"></Icon>\n\t                    <div class=\"name\">设备</div>\n\t                    <div class=\"fontclass\">.uf-equipment</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-left-2\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-left-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-files-o\"></Icon>\n\t                    <div class=\"name\">资源文件</div>\n\t                    <div class=\"fontclass\">.uf-files-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o\"></Icon>\n\t                    <div class=\"name\">云</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s-o-2\"></Icon>\n\t                    <div class=\"name\">对账</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-c-o\"></Icon>\n\t                    <div class=\"name\">管理中心</div>\n\t                    <div class=\"fontclass\">.uf-3dot-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-dafeng\"></Icon>\n\t                    <div class=\"name\">天气_大风</div>\n\t                    <div class=\"fontclass\">.uf-dafeng</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-baoxue\"></Icon>\n\t                    <div class=\"name\">天气_暴雪</div>\n\t                    <div class=\"fontclass\">.uf-baoxue</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bingbao\"></Icon>\n\t                    <div class=\"name\">天气_冰雹</div>\n\t                    <div class=\"fontclass\">.uf-bingbao</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-fengbao\"></Icon>\n\t                    <div class=\"name\">天气_风暴</div>\n\t                    <div class=\"fontclass\">.uf-fengbao</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-xiaoyu\"></Icon>\n\t                    <div class=\"name\">天气_小雨</div>\n\t                    <div class=\"fontclass\">.uf-xiaoyu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zhenxue\"></Icon>\n\t                    <div class=\"name\">天气_阵雪</div>\n\t                    <div class=\"fontclass\">.uf-zhenxue</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zhongyu\"></Icon>\n\t                    <div class=\"name\">天气_中雨</div>\n\t                    <div class=\"fontclass\">.uf-zhongyu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-es\"></Icon>\n\t                    <div class=\"name\">ES</div>\n\t                    <div class=\"fontclass\">.uf-es</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow-o-2\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-flow-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-activate-2\"></Icon>\n\t                    <div class=\"name\">激活-01</div>\n\t                    <div class=\"fontclass\">.uf-activate-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow-o\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-flow-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bulb-2\"></Icon>\n\t                    <div class=\"name\">技术支持</div>\n\t                    <div class=\"fontclass\">.uf-bulb-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mi-c\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-mi-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-top-up\"></Icon>\n\t                    <div class=\"name\">返回顶部</div>\n\t                    <div class=\"fontclass\">.uf-top-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-creditcard\"></Icon>\n\t                    <div class=\"name\">credit-card</div>\n\t                    <div class=\"fontclass\">.uf-creditcard</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-center\"></Icon>\n\t                    <div class=\"name\">align-center</div>\n\t                    <div class=\"fontclass\">.uf-align-center</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-justify\"></Icon>\n\t                    <div class=\"name\">align-justify</div>\n\t                    <div class=\"fontclass\">.uf-align-justify</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-left\"></Icon>\n\t                    <div class=\"name\">align-left</div>\n\t                    <div class=\"fontclass\">.uf-align-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-right\"></Icon>\n\t                    <div class=\"name\">align-right</div>\n\t                    <div class=\"fontclass\">.uf-align-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ju-c-o\"></Icon>\n\t                    <div class=\"name\">拒</div>\n\t                    <div class=\"fontclass\">.uf-ju-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-truck\"></Icon>\n\t                    <div class=\"name\">货到付款</div>\n\t                    <div class=\"fontclass\">.uf-truck</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-setting-c-o\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-setting-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-users-o\"></Icon>\n\t                    <div class=\"name\">楼宇图标_用户组</div>\n\t                    <div class=\"fontclass\">.uf-users-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bag-s-o\"></Icon>\n\t                    <div class=\"name\">商品</div>\n\t                    <div class=\"fontclass\">.uf-bag-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cai-s\"></Icon>\n\t                    <div class=\"name\">采购</div>\n\t                    <div class=\"fontclass\">.uf-cai-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listcheck\"></Icon>\n\t                    <div class=\"name\">定标</div>\n\t                    <div class=\"fontclass\">.uf-listcheck</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-users\"></Icon>\n\t                    <div class=\"name\">群</div>\n\t                    <div class=\"fontclass\">.uf-users</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i-c\"></Icon>\n\t                    <div class=\"name\">查看详情</div>\n\t                    <div class=\"fontclass\">.uf-i-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-building-o\"></Icon>\n\t                    <div class=\"name\">企业信息</div>\n\t                    <div class=\"fontclass\">.uf-building-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s-o\"></Icon>\n\t                    <div class=\"name\">报价管理</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reject\"></Icon>\n\t                    <div class=\"name\">已驳回</div>\n\t                    <div class=\"fontclass\">.uf-reject</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9dot\"></Icon>\n\t                    <div class=\"name\">菜单</div>\n\t                    <div class=\"fontclass\">.uf-9dot</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-loadingstate\"></Icon>\n\t                    <div class=\"name\">loading</div>\n\t                    <div class=\"fontclass\">.uf-loadingstate</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gateway\"></Icon>\n\t                    <div class=\"name\">网关</div>\n\t                    <div class=\"fontclass\">.uf-gateway</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-s-o\"></Icon>\n\t                    <div class=\"name\">发票</div>\n\t                    <div class=\"fontclass\">.uf-ticket-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-userset\"></Icon>\n\t                    <div class=\"name\">管理中心</div>\n\t                    <div class=\"fontclass\">.uf-userset</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-puzzle-o\"></Icon>\n\t                    <div class=\"name\">组件</div>\n\t                    <div class=\"fontclass\">.uf-puzzle-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-o\"></Icon>\n\t                    <div class=\"name\">物料管理</div>\n\t                    <div class=\"fontclass\">.uf-box-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bulb\"></Icon>\n\t                    <div class=\"name\">激活</div>\n\t                    <div class=\"fontclass\">.uf-bulb</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-t\"></Icon>\n\t                    <div class=\"name\">感叹号_icon</div>\n\t                    <div class=\"fontclass\">.uf-exc-t</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-c\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table-s-o\"></Icon>\n\t                    <div class=\"name\">发票</div>\n\t                    <div class=\"fontclass\">.uf-table-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-umbrella-o\"></Icon>\n\t                    <div class=\"name\">伞</div>\n\t                    <div class=\"fontclass\">.uf-umbrella-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-dropbox\"></Icon>\n\t                    <div class=\"name\">dropbox</div>\n\t                    <div class=\"fontclass\">.uf-dropbox</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-light\"></Icon>\n\t                    <div class=\"name\">搜索-搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-light</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cart-o\"></Icon>\n\t                    <div class=\"name\">shopping-cart-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-cart-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-kero-col\"></Icon>\n\t                    <div class=\"name\">kero</div>\n\t                    <div class=\"fontclass\">.uf-kero-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-uba-col\"></Icon>\n\t                    <div class=\"name\">uba</div>\n\t                    <div class=\"fontclass\">.uf-uba-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperzc-col\"></Icon>\n\t                    <div class=\"name\">tinperzc</div>\n\t                    <div class=\"fontclass\">.uf-tinperzc-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperzch-col\"></Icon>\n\t                    <div class=\"name\">tinperzch</div>\n\t                    <div class=\"fontclass\">.uf-tinperzch-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-iuap-col\"></Icon>\n\t                    <div class=\"name\">iuap</div>\n\t                    <div class=\"fontclass\">.uf-iuap-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-iuapdesign-col\"></Icon>\n\t                    <div class=\"name\">iuapdesignz</div>\n\t                    <div class=\"fontclass\">.uf-iuapdesign-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bee-col\"></Icon>\n\t                    <div class=\"name\">bee</div>\n\t                    <div class=\"fontclass\">.uf-bee-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-neoui-col\"></Icon>\n\t                    <div class=\"name\">neoui</div>\n\t                    <div class=\"fontclass\">.uf-neoui-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sparrow-col\"></Icon>\n\t                    <div class=\"name\">sparrow</div>\n\t                    <div class=\"fontclass\">.uf-sparrow-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinpercn-col\"></Icon>\n\t                    <div class=\"name\">tinpercn</div>\n\t                    <div class=\"fontclass\">.uf-tinpercn-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperen-col\"></Icon>\n\t                    <div class=\"name\">tinperen</div>\n\t                    <div class=\"fontclass\">.uf-tinperen-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-up\"></Icon>\n\t                    <div class=\"name\">angle-arrow-down</div>\n\t                    <div class=\"fontclass\">.uf-arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mailsym\"></Icon>\n\t                    <div class=\"name\">webmail</div>\n\t                    <div class=\"fontclass\">.uf-mailsym</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-print\"></Icon>\n\t                    <div class=\"name\">办公用品</div>\n\t                    <div class=\"fontclass\">.uf-print</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-3\"></Icon>\n\t                    <div class=\"name\">报销</div>\n\t                    <div class=\"fontclass\">.uf-ticket-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-loan\"></Icon>\n\t                    <div class=\"name\">借款</div>\n\t                    <div class=\"fontclass\">.uf-loan</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-2\"></Icon>\n\t                    <div class=\"name\">凭证中心</div>\n\t                    <div class=\"fontclass\">.uf-ticket-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-offwork\"></Icon>\n\t                    <div class=\"name\">请假</div>\n\t                    <div class=\"fontclass\">.uf-offwork</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-todolist\"></Icon>\n\t                    <div class=\"name\">待办</div>\n\t                    <div class=\"fontclass\">.uf-todolist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-personin\"></Icon>\n\t                    <div class=\"name\">员工入职</div>\n\t                    <div class=\"fontclass\">.uf-personin</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket\"></Icon>\n\t                    <div class=\"name\">票务</div>\n\t                    <div class=\"fontclass\">.uf-ticket</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-linechart\"></Icon>\n\t                    <div class=\"name\">小icon-图表</div>\n\t                    <div class=\"fontclass\">.uf-linechart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4leaf\"></Icon>\n\t                    <div class=\"name\">应用中心</div>\n\t                    <div class=\"fontclass\">.uf-4leaf</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listset\"></Icon>\n\t                    <div class=\"name\">信息维护</div>\n\t                    <div class=\"fontclass\">.uf-listset</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qi-c-o\"></Icon>\n\t                    <div class=\"name\">企业认证</div>\n\t                    <div class=\"fontclass\">.uf-qi-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c\"></Icon>\n\t                    <div class=\"name\">叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-code\"></Icon>\n\t                    <div class=\"name\">集成开发</div>\n\t                    <div class=\"fontclass\">.uf-code</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-plug-o\"></Icon>\n\t                    <div class=\"name\">热拔插</div>\n\t                    <div class=\"fontclass\">.uf-plug-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-s\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treeadd\"></Icon>\n\t                    <div class=\"name\">tree-new-sbling-node</div>\n\t                    <div class=\"fontclass\">.uf-treeadd</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mi\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-mi</div>\n\t                </li>\n\t       \t\t</ul>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n", "desc": " 在iuap字符库，`type`参数值均以-分隔。" }];

	var Demo = function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props) {
	        _classCallCheck(this, Demo);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
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

	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);

	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);

	        return _possibleConstructorReturn(this, _Component2.call(this, props));
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};

	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

	var Col = function (_Component) {
	  _inherits(Col, _Component);

	  function Col() {
	    _classCallCheck(this, Col);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);

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
	        className: (0, _classnames2["default"])(tbClass, className)
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};

	var Row = function (_Component) {
	  _inherits(Row, _Component);

	  function Row() {
	    _classCallCheck(this, Row);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);

	    var bsclass = '' + clsPrefix;

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
	  fluid: false,
	  clsPrefix: 'u-container'
	};

	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);

	  function Con() {
	    _classCallCheck(this, Con);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Con.prototype.render = function render() {
	    var _tbclass;

	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);

	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;

	var _Panel2 = __webpack_require__(8);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelGroup2 = __webpack_require__(73);

	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
	    var headerContent = _props.headerContent;
	    var onExiting = _props.onExiting;
	    var onExited = _props.onExited;
	    var defaultExpanded = _props.defaultExpanded;
	    var eventKey = _props.eventKey;
	    var onSelect = _props.onSelect;

	    var props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);

	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;

	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;

	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;

	var _Transition2 = __webpack_require__(10);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _Collapse2 = __webpack_require__(15);

	var _Collapse3 = _interopRequireDefault(_Collapse2);

	var _Fade2 = __webpack_require__(72);

	var _Fade3 = _interopRequireDefault(_Fade2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0;
	var transitionTiming = void 0,
	    transitionDuration = void 0;
	var transitionProperty = void 0,
	    transitionDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var transitionEnd = void 0;
	  var prefix = '';
	  var eventNames = {
	    O: 'otransitionend',
	    Moz: 'transitionend',
	    Webkit: 'webkitTransitionEnd',
	    ms: 'MSTransitionEnd'
	  };

	  var element = document.createElement('div');
	  for (var vendor in eventNames) {
	    if (eventNames.hasOwnProperty(vendor)) {
	      if (element.style[vendor + 'TransitionProperty'] !== undefined) {
	        prefix = '-' + vendor.toLowerCase();
	        transitionEnd = eventNames[vendor];
	        break;
	      }
	    }
	  }if (!transitionEnd && element.style.transitionProperty !== undefined) transitionEnd = 'transitionend';

	  element = null;

	  return { transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
	      return node.attachEvent('on' + eventName, handler);
	    };
	  }();
	}

	exports.default = on;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

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

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

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

	var _createChainedFunction2 = __webpack_require__(49);

	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

	var _keyCode = __webpack_require__(50);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _contains2 = __webpack_require__(51);

	var _contains3 = _interopRequireDefault(_contains2);

	var _addEventListener2 = __webpack_require__(52);

	var _addEventListener3 = _interopRequireDefault(_addEventListener2);

	var _cssAnimation2 = __webpack_require__(57);

	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);

	var _toArray2 = __webpack_require__(61);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _Align2 = __webpack_require__(62);

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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 27 */
/***/ (function(module, exports) {

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

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 31 */
/***/ (function(module, exports) {

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
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 33 */
/***/ (function(module, exports) {

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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _entries = __webpack_require__(35);

	var _entries2 = _interopRequireDefault(_entries);

	exports.default = splitComponentProps;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	  (0, _entries2.default)(props).forEach(function (_ref) {
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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	module.exports = __webpack_require__(40).Object.entries;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(38)
	  , $entries = __webpack_require__(43)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(39)
	  , core      = __webpack_require__(40)
	  , ctx       = __webpack_require__(41)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(42);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(44)
	  , toIObject = __webpack_require__(45)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(46)
	  , defined = __webpack_require__(48);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(47);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

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

/***/ }),
/* 50 */
/***/ (function(module, exports) {

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

/***/ }),
/* 51 */
/***/ (function(module, exports) {

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

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(53);

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

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;

	var _EventObject = __webpack_require__(54);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
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

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EventBaseObject = __webpack_require__(55);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(56);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

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
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
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
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
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

	  _EventBaseObject2["default"].call(this);

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
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
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

	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
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

	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

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
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		} catch (err) {
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

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(58);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(59);

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

/***/ }),
/* 58 */
/***/ (function(module, exports) {

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

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(60);
	} catch (err) {
	  var index = __webpack_require__(60);
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


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(63);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(52);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

	var Align = function (_Component) {
	  _inherits(Align, _Component);

	  function Align() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Align);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.startMonitorWindowResize = function () {
	      if (!_this.resizeHandler) {
	        _this.bufferMonitor = buffer(_this.forceAlign, _this.props.monitorBufferTime);
	        _this.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this.bufferMonitor);
	      }
	    }, _this.stopMonitorWindowResize = function () {
	      if (_this.resizeHandler) {
	        _this.bufferMonitor.clear();
	        _this.resizeHandler.remove();
	        _this.resizeHandler = null;
	      }
	    }, _this.forceAlign = function () {
	      var props = _this.props;
	      if (!props.disabled) {
	        var source = _reactDom2.default.findDOMNode(_this);
	        props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };

	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
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
	  };

	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };

	  Align.prototype.render = function render() {
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
	  };

	  return Align;
	}(_react.Component);

	Align.propTypes = {
	  childrenProps: _react.PropTypes.object,
	  align: _react.PropTypes.object.isRequired,
	  target: _react.PropTypes.func,
	  onAlign: _react.PropTypes.func,
	  monitorBufferTime: _react.PropTypes.number,
	  monitorWindowResize: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  children: _react.PropTypes.any
	};
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},

	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	;

	exports.default = Align;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(64);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(66);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(67);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(68);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(69);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(70);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);

	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
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
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);

	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTargetNotOutOfVisible) {
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
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);

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
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);

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
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
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

	domAlign.__getOffsetParent = _getOffsetParent2['default'];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];

	exports['default'] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _propertyUtils = __webpack_require__(65);

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

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}

	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
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
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
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

	  getDocument: getDocument,
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

	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports) {

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

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(64);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
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
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(64);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(66);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
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
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
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
	    el = (0, _getOffsetParent2['default'])(el);
	  }

	  // Clip by document's size.
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var maxVisibleWidth = Math.max(documentElement.scrollWidth, scrollX + viewportWidth);
	  visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var maxVisibleHeight = Math.max(documentElement.scrollHeight, scrollY + viewportHeight);
	  visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);

	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(64);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
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

	  return _utils2['default'].mix(pos, size);
	}

	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(64);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(71);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports) {

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

	  var x = region.left;
	  var y = region.top;

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

	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

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
	          _extends(childProps, {
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

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(75);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(77);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Icon2['default'];
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _src = __webpack_require__(76);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
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

	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZTkwNjY5NGVhZTdmMzRlMjgwNyIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvUm93LmpzIiwid2VicGFjazovLy8uL34vYmVlLWxheW91dC9idWlsZC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9zdHlsZS9yZW1vdmVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2RlcHJlY2F0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy95dXpoYW8vLm52bS92ZXJzaW9ucy9ub2RlL3Y3LjkuMC9saWIvfi9iZWUtdG9vbHMvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2VsZW1lbnRUeXBlLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9pc1JlcXVpcmVkRm9yQTExeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvc3BsaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9rZXlDb2RlLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvYWRkRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudEJhc2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jc3NBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL0V2ZW50LmpzIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LWNsYXNzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvcHJvcGVydHlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2FkanVzdEZvclZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9nZXRSZWdpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldEVsRnV0dXJlUG9zLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9nZXRBbGlnbk9mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL0ZhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWxHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1idXR0b24vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtYnV0dG9uL2J1aWxkL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vZGVtby9kZW1vbGlzdC9EZW1vMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZTkwNjY5NGVhZTdmMzRlMjgwNyIsIlxuaW1wb3J0IHsgQ29uLCBSb3csIENvbCB9IGZyb20gJ2JlZS1sYXlvdXQnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdiZWUtcGFuZWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdiZWUtYnV0dG9uJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYyc7XG5cblxuY29uc3QgQ0FSRVQgPSA8aSBjbGFzc05hbWU9XCJ1ZiB1Zi1jaGV2cm9uYXJyb3dkb3duXCI+PC9pPjtcblxuY29uc3QgQ0FSRVRVUCA9IDxpIGNsYXNzTmFtZT1cInVmIHVmLWNoZXZyb25hcnJvd3VwXCI+PC9pPjtcblxuXG52YXIgRGVtbzEgPSByZXF1aXJlKFwiLi9kZW1vbGlzdC9EZW1vMVwiKTt2YXIgRGVtb0FycmF5ID0gW3tcImV4YW1wbGVcIjo8RGVtbzEgLz4sXCJ0aXRsZVwiOlwiIEljb25cIixcImNvZGVcIjpcIi8qKlxcbiAqIEB0aXRsZSBJY29uXFxuICogQGRlc2NyaXB0aW9uIOWcqGl1YXDlrZfnrKblupPvvIxgdHlwZWDlj4LmlbDlgLzlnYfku6Ut5YiG6ZqU44CCXFxuICovXFxuXFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcXG5pbXBvcnQgSWNvbiBmcm9tICd0aW5wZXItYmVlJztcXG5cXG5jbGFzcyBEZW1vMSBleHRlbmRzIENvbXBvbmVudCB7XFxuXFx0cmVuZGVyICgpIHtcXG5cXHRcXHRyZXR1cm4gKFxcblxcdFxcdFxcdDxkaXYgY2xhc3NOYW1lPVxcXCJ0aW5wZXItaWNvbi1kZW1vXFxcIj5cXG5cXHRcXHRcXHRcXHQ8dWwgY2xhc3NOYW1lPVxcXCJpY29uX2xpc3RzXFxcIj5cXG4gICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi13ZWNoYXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW+ruS/oTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtd2VjaGF0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWRkLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YqgPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hZGQtYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mkJzntKI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNlYXJjaDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhpc3RvZ3JhbS1hcnJvdy11cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zu+6KGoIOaKmOe6v+WbvjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGlzdG9ncmFtLWFycm93LXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvc2UtYm9sZFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YWz6ZetPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG9zZS1ib2xkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdW1icmVsbGFcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPumbqOS8njwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdW1icmVsbGE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1xcVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+UVE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXFxPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtNHNxdWFyZS0zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7liIbnsbs8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTRzcXVhcmUtMzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNlbmRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPkemAgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2VuZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1hcFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zyw5Zu+PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tYXA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi05c3F1YXJlLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuagh+WumjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtOXNxdWFyZS0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbmF2bWVudVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5rGJ5aCh5YyFPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1uYXZtZW51PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGMtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pi+56S65ZmoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wYy0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoLWxpZ2h0LTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnpvb208L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNlYXJjaC1saWdodC0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2hlY2stcy0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ku7vliqE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNoZWNrLXMtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBlbmNpbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+57yW6L6RPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wZW5jaWw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yZXBlYXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaSpOmUgDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcmVwZWF0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VjdXJpdHktMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6J5YWoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zZWN1cml0eS0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGV4aVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5aWzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1sZXhpPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGVuY2lsLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue8lui+kTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVuY2lsLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1kZWxcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWIoOmZpDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZGVsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmktb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5q+U5Lu3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iaS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGVuY2lsLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue8lui+kTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVuY2lsLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1xcmNvZGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS6jOe7tOeggTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcXJjb2RlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YWN6LS55oql5Lu3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ybWItYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pCc57SiPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zZWFyY2gtYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmVsbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6ZOD6ZObPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iZWxsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFzcy0zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mnLrmo4DpgJrov4c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBhc3MtMzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyZWVhcnJvdy1kb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7moJHlvaLnur88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRyZWVhcnJvdy1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJhaW5pbmdcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWfueiurTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJhaW5pbmc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncm91cC0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nu4Tnu4fmnrbmnoQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdyb3VwLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi16b29tLWluXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj56b29tLWluPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi16b29tLWluPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VjdXJpdHktb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6J5YWoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zZWN1cml0eS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmFvamlhLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7tzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYmFvamlhLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ydWxlcnBlblxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6a5Yi2PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ydWxlcnBlbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWVycHNlYXJjaFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZXJwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1lcnBzZWFyY2g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncm91cC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nu4Tnu4fmnLrmnoQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdyb3VwLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC1vLXVwZG93blxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5ZCM5q2l5LitMi3lkIzmraU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNsb3VkLW8tdXBkb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvc2UtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lhbPpl608L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNsb3NlLWMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFkZC1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7liqA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFkZC1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW3peS9nOWPsDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yYWluXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nqbrmsJRf6Zuo5aSpPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yYWluPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbm9kYXRhXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ml6DmlbDmja48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW5vZGF0YTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNsb3NlLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWFs+mXrTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvc2UtYzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJvaHVpLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6h5om5Lemps+WbnjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm9odWktcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvdWRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkqeawlDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvdWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYWctc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5ZWG5ZOBPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iYWctczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRhYmxlLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1hZGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRhYmxlLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hbmdsZWFycm93cG9pbnRpbmd0b3JpZ2h0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFuZ2xlYXJyb3dwb2ludGluZ3RvcmlnaHQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1leGMtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lj7nlj7c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWV4Yy1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncm91cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+57uE57uH5py65p6EPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ncm91cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBlcnNvbmluLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuiupOivgea/gOa0uzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVyc29uaW4tbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNhbGVuZGFyXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5nbV/ml6XljoY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNhbGVuZGFyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWRkLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YqgPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hZGQtcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3luYy1jLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWQjOatpTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc3luYy1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncmlkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5ncmlkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ncmlkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYW5nbGVwb2ludGluZ3RvbGVmdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+566t5aS0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hbmdsZXBvaW50aW5ndG9sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWN0aXZhdGUtM1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5r+A5rS7PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hY3RpdmF0ZS0zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2F2ZW5cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueUtzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2F2ZW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYWNrXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ov5Tlm548L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJhY2s8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wYXNzLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaOiOadgzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGFzcy0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcmVkdWNlLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pi+56S65qCRPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yZWR1Y2Utcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJlYVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zu+6KGo5Zu+5qCHLemdouenr+WbvjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJlYTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZsYWdcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaXl+W4nDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZmxhZzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJveC1vLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPui0reS5sOebkuWtkDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm94LW8tMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LXMtby1kb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIvmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXMtby1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctcy1vLXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIrmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXMtby11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1aWxkaW5nXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kvIHkuJrkv6Hmga88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJ1aWxkaW5nPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGFwcFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5aSp5rCUPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10YXBwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJlZWZvbGRlclxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pCc57SiPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cmVlZm9sZGVyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWR2aWNlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lkqjor6I8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFkdmljZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLTJjb2xsYXlvdXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW6j+WIl+W4g+WxgDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtMmNvbGxheW91dDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNoZWNrLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWuoeaJuTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2hlY2stczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNpZ25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPumHh+i0reWQiOWQjDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2lnbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWxpc3RzZWFyY2hcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuafpeeci+ivpuaDhTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGlzdHNlYXJjaDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWdyaWRjYXJldGFycm93dXBcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW/heWhqzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ3JpZGNhcmV0YXJyb3d1cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWV5ZS1jLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuafpeecizwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXllLWMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNoZWNrLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6K645Y+vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jaGVjay1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zZWFsXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lrqHmibk8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNlYWw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1lcnBib3hcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmVycDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXJwYm94PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcnVsZXJwZW4tb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5a6a5Yi2PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ydWxlcnBlbi1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm9sZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6KeS6ImyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yb2xlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjLWMtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5o+Q56S65Y+55Y+3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leGMtYy0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5wYWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBhZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyZWVmb2xkZXItY2xvc2VkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50cmVlLW5ldy1zYmxpbmctbm9kZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJlZWZvbGRlci1jbG9zZWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yZWR1Y2UtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lh4/lj7c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJlZHVjZS1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wYXNzLXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6YCa6L+HPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wYXNzLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNldHRpbmdcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue7tOaKpDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2V0dGluZzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNsb3NlLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPlpTWOWPtzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvc2UtczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1hcC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lnLDlm748L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW1hcC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbW92ZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+56e75YqoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tb3ZlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtMmFycm93LWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtMmFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi0yYXJyb3ctcmlnaHRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtMmFycm93LXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctYy1vLWxlZnRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctYy1vLWxlZnQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wbHVzXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5wbHVzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wbHVzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctYy1vLXJpZ2h0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LWMtby1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWMtby1kb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LWMtby1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGlzdC1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaaguaXoOaVsOaNrjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGlzdC1zLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC1vLWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS6keS4i+i9vTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvdWQtby1kb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbm9kYXRhLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaXoOaViOaVsOaNrjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbm9kYXRhLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1maWxlLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaWh+aho+aWh+S7ti0wMTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZmlsZS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtMmFycm93LXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrq3lpLQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTJhcnJvdy11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW5vdGlmaWNhdGlvblxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5raI5oGv5ZaH5Y+tPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ub3RpZmljYXRpb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1waWVjaGFydFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Zu+6KGoX+mlvDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGllY2hhcnQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC1vLXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kupFf5LiK5LygPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG91ZC1vLXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvc2VcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPlua2iDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2xvc2U8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jb3JyZWN0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lr7nlj7c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNvcnJlY3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1oaXN0b2dyYW0tcy1vLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWbvuihqOWIh+aNojwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGlzdG9ncmFtLXMtby0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtNHNxdWFyZS0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lupTnlKjkuK3lv4M8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTRzcXVhcmUtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXN1bm55XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJQgPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zdW5ueTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWxpbmtcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkjeWItumTvuaOpTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGluazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWV5ZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5p+l55yLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1leWUtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5p+l55yLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leWUtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXFpYW5cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuetvjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcWlhbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXdpZGdldGFiXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lsI/pg6jku7bmjojmnYM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXdpZGdldGFiPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7tzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcm1iLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1saW5rLW9mZlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pat5byA6ZO+5o6lPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1saW5rLW9mZjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNoYW5nLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS4iuaetjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2hhbmctczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXhpYS1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIvmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXhpYS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYm94LTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuebkuWtkGZ1bGw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJveC0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFzcy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mjojmnYM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBhc3MtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFuZ2xlLWFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1yaWdodFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YW5nbGUtYXJyb3ctcG9pbnRpbmctdG8tcmlnaHQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctbGVmdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YW5nbGUtcG9pbnRpbmctdG8tbGVmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctbGVmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJveFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YXJjaGl2ZS1ibGFjay1ib3g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyaWFuZ2xlLXJpZ2h0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5hcnJvd2hlYWQtcG9pbnRpbmctdG8tdGhlLXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cmlhbmdsZS1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhpc3RvZ3JhbS1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmJhci1ncmFwaC1vbi1hLXJlY3RhbmdsZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGlzdG9ncmFtLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJvb2tcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmJvb2s8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJvb2s8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ib29rbWFyay1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5ib29rbWFyay13aGl0ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm9va21hcmstbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWxlYWZcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmJyYW5jaC13aXRoLWxlYXZlcy1ibGFjay1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGVhZjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1bGxzZXllXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5idWxsc2V5ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnVsbHNleWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1ncmlkY2FyZXRkb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5jYW1lcmEtcmV0cm88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdyaWRjYXJldGRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10cmlhbmdsZS11cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y2FyZXQtYXJyb3ctdXA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRyaWFuZ2xlLXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJpYW5nbGUtZG93blxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y2FyZXQtZG93bjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJpYW5nbGUtZG93bjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNsb3VkLWRvd25cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmNsb3VkLXN0b3JhZ2UtZG93bmxvYWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNsb3VkLWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jbG91ZC11cFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y2xvdWQtc3RvcmFnZS11cGxvYWRpbmctb3B0aW9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG91ZC11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1YmJsZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y29tbWVudC1ibGFjay1vdmFsLWJ1YmJsZS1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnViYmxlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYnViYmxlLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmNvbW1lbnQtd2hpdGUtb3ZhbC1idWJibGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJ1YmJsZS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY29weVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y29weS1kb2N1bWVudDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY29weTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNvcnJlY3QtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Y29ycmVjdC1zeW1ib2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNvcnJlY3QtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLTJhcnJvdy1sZWZ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5kb3VibGUtbGVmdC1jaGV2cm9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi0yYXJyb3ctbGVmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWRvd24tMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZG93bi1hcnJvdzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctZG93bi0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZG93bmxvYWRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmRvd25sb2FkLXRvLXN0b3JhZ2UtZHJpdmU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWRvd25sb2FkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZWFydGhcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmVhcnRoLWdsb2JlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1lYXJ0aDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1haWwtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZW52ZWxvcGUtb2Ytd2hpdGUtcGFwZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW1haWwtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1haWxcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmVudmVsb3BlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tYWlsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5leGNsYW1hdGlvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXhjPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXh0ZXJuYWxsaW5rXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5leHRlcm5hbC1saW5rLXN5bWJvbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXh0ZXJuYWxsaW5rPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdmlkZW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmZhY2V0aW1lLWJ1dHRvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdmlkZW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1maWxtc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZmlsbS1zdHJpcC13aXRoLXR3by1waG90b2dyYW1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1maWxtczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZvbGRlclxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Zm9sZGVyLWNsb3NlZC1ibGFjay1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZm9sZGVyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZm9sZGVyLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmZvbGRlci13aGl0ZS1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZm9sZGVyLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi00c3F1YXJlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5mb3VyLWJsYWNrLXNxdWFyZXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTRzcXVhcmU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1naWZ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5naWZ0LWJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ2lmdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWdpdGh1Yi1jXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5naXRodWItbG9nbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ2l0aHViLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1naXRodWItc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+Z2l0aHViLXNpZ248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWdpdGh1Yi1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtaGVhcnQtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aGVhcnQtc2hhcGUtb3V0bGluZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaGVhcnQtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhlYXJ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5oZWFydC1zaGFwZS1zaWxob3VldHRlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1oZWFydDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhvbWVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmhvbWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWhvbWU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1pLWMtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aW5mb3JtYXRpb24tYnV0dG9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1pLWMtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmluZm9ybWF0aW9uLXN5bWJvbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyaWFuZ2xlLWxlZnRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmxlZnQtYXJyb3c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRyaWFuZ2xlLWxlZnQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zeW1saXN0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5saXN0aW5nLW9wdGlvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc3ltbGlzdDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LWxlZnQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+bG9uZy1hcnJvdy1wb2ludGluZy10by1sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hcnJvdy1sZWZ0LTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1yaWdodC0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5sb25nLWFycm93LXBvaW50aW5nLXRvLXRoZS1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctcmlnaHQtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFycm93LXVwLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmxvbmctYXJyb3ctcG9pbnRpbmctdXA8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXVwLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1yZWR1Y2UtY1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+bWludXMtc2lnbi1pbnNpZGUtYS1ibGFjay1jaXJjbGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJlZHVjZS1jPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcmVkdWNlLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1pbnVzLXNpZ24taW5zaWRlLWEtYmxhY2stcm91bmRlZC1zcXVhcmUtc2hhcGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJlZHVjZS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbWludXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1pbnVzLXN5bWJvbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbWludXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1tb2JpbGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm1vYmlsZS1waG9uZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbW9iaWxlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmVsbC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5tdXNpY2FsLWJlbGwtb3V0bGluZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYmVsbC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtOXNxdWFyZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+bmluZS1ibGFjay10aWxlczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtOXNxdWFyZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW51bWxpc3RcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm51bWJlcmVkLWxpc3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW51bWxpc3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1mb2xkZXJvcGVuLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm9wZW4tZm9sZGVyLW91dGxpbmU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZvbGRlcm9wZW4tbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRyZWVmb2xkZXJvcGVuXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5vcGVuLWZvbGRlcjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJlZWZvbGRlcm9wZW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1tYWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPm9wZW4tbGFwdG9wLWNvbXB1dGVyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1tYWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jYW1lcmFcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnBob3RvLWNhbWVyYTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2FtZXJhPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGljdHVyZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+cGljdHVyZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGljdHVyZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBsYXlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnBsYXktc2lnbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGxheTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXBsYXktb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+cGxheS12aWRlby1idXR0b248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXBsYXktbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXFtLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnF1ZXN0aW9uLW1hcmstb24tYS1jaXJjdWxhci1ibGFjay1iYWNrZ3JvdW5kPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1xbS1jPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcW1cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnF1ZXN0aW9uLXNpZ248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXFtPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbmF2bWVudS1saWdodFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+cmVvcmRlci1vcHRpb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW5hdm1lbnUtbGlnaHQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zZXR0aW5nc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c2V0dGluZ3M8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNldHRpbmdzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2FydFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c2hvcHBpbmctY2FydC1ibGFjay1zaGFwZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtY2FydDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWhpc3RvZ3JhbVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c2lnbmFsLWJhcnM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWhpc3RvZ3JhbTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZpbmV0dW5lXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWFycm93cy1jb3VwbGUtcG9pbnRpbmctdXAtYW5kLWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZpbmV0dW5lPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc29ydHVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWJ5LWF0dHJpYnV0ZXMtaW50ZXJmYWNlLWJ1dHRvbi1vcHRpb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNvcnR1cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNvcnRkb3duXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWJ5LWF0dHJpYnV0ZXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNvcnRkb3duPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc29ydDE5XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zb3J0LWJ5LW51bWVyaWMtb3JkZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNvcnQxOTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNvcnQ5MVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c29ydC1ieS1vcmRlcjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc29ydDkxPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtemFcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnNvcnQtcmV2ZXJzZS1hbHBoYWJldGljYWwtb3JkZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXphPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3Rhci1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zdGFyLTE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXN0YXItbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXN0YXItMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c3Rhci1oYWxmLWVtcHR5PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zdGFyLTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1zdGFyXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zdGFyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1zdGFyPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbHVnZ2FnZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+c3VpdGNhc2Utd2l0aC13aGl0ZS1kZXRhaWxzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1sdWdnYWdlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGFibGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnRhYmxlLWdyaWQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRhYmxlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGVsXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50ZWxlcGhvbmUtaGFuZGxlLXNpbGhvdWV0dGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRlbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRlbC1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50ZWxlcGhvbmUtc3ltYm9sLWJ1dHRvbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGVsLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10ZXJtaW5hbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+dGVybWluYWw8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRlcm1pbmFsPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZmlsZVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+dGV4dC1maWxlLTE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZpbGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1maWxlLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnRleHQtZmlsZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZmlsZS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtM2RvdC1oXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aHJlZS1zbWFsbC1zcXVhcmUtc2hhcGVzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi0zZG90LWg8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aW1lLWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+dGltZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGltZS1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi11cGxvYWRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnVwbG9hZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdXBsb2FkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtM2RvdC12XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj52ZXJ0aWNhbC1lbGxpcHNpczwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtM2RvdC12PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj55ZW4tc3ltYm9sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1ybWI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1jLW8tdXBcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueureWktDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYXJyb3ctYy1vLXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcmVqZWN0LTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPumps+WbnjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcmVqZWN0LTI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYXJjb2RlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5iYXJjb2RlLTE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJhcmNvZGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi16b29tLW91dFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+em9vbS1vdXQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXpvb20tb3V0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjLXQtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5LiJ6KeS5Y+55Y+3PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1leGMtdC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGFzc1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6YCa6L+HPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1wYXNzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZmxvd1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5YWz57O7572R57ucPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mbG93PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWRkLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWKoDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYWRkLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hcnJvdy1jLW8tcmlnaHQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+566t5aS0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hcnJvdy1jLW8tcmlnaHQtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNoZWxmLW9uXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIrmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNoZWxmLW9uPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2hlbGYtb2ZmXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kuIvmnrY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNoZWxmLW9mZjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZpbGUtby0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mlofku7Y8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWZpbGUtby0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdHJ1Y2stb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Yiw6LSn56Gu6K6kPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cnVjay1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3VwZXJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWKn+iDveW8uuWkpzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc3VwZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1lcXVpcG1lbnRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuiuvuWkhzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXF1aXBtZW50PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctYy1vLWxlZnQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+566t5aS0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hcnJvdy1jLW8tbGVmdC0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZmlsZXMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6LWE5rqQ5paH5Lu2PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1maWxlcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2xvdWQtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5LqRPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jbG91ZC1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLXMtby0yXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lr7notKY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXJtYi1zLW8tMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLTNkb3QtYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nrqHnkIbkuK3lv4M8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTNkb3QtYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZGFmZW5nXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf5aSn6aOOPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1kYWZlbmc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1iYW94dWVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkqeawlF/mmrTpm6o8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJhb3h1ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJpbmdiYW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWkqeawlF/lhrDpm7k8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJpbmdiYW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1mZW5nYmFvXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf6aOO5pq0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mZW5nYmFvPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYteGlhb3l1XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf5bCP6ZuoPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi14aWFveXU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi16aGVueHVlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lpKnmsJRf6Zi16ZuqPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi16aGVueHVlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtemhvbmd5dVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5aSp5rCUX+S4rembqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtemhvbmd5dTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWVzXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5FUzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1mbG93LW8tMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5rWB56iLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mbG93LW8tMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFjdGl2YXRlLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPua/gOa0uy0wMTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYWN0aXZhdGUtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWZsb3ctb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5rWB56iLPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1mbG93LW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1idWxiLTJcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKgOacr+aUr+aMgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnVsYi0yPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbWktY1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5b+F5aGrPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1taS1jPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdG9wLXVwXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ov5Tlm57pobbpg6g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRvcC11cDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNyZWRpdGNhcmRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmNyZWRpdC1jYXJkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jcmVkaXRjYXJkPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWxpZ24tY2VudGVyXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5hbGlnbi1jZW50ZXI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFsaWduLWNlbnRlcjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWFsaWduLWp1c3RpZnlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFsaWduLWp1c3RpZnk8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFsaWduLWp1c3RpZnk8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1hbGlnbi1sZWZ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5hbGlnbi1sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hbGlnbi1sZWZ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYWxpZ24tcmlnaHRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFsaWduLXJpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1hbGlnbi1yaWdodDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWp1LWMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5ouSPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1qdS1jLW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10cnVja1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+6LSn5Yiw5LuY5qy+PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10cnVjazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNldHRpbmctYy1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mtYHnqIs8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNldHRpbmctYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdXNlcnMtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5qW85a6H5Zu+5qCHX+eUqOaIt+e7hDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdXNlcnMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJhZy1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWVhuWTgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYmFnLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWNhaS1zXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7ph4fotK08L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNhaS1zPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGlzdGNoZWNrXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lrprmoIc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxpc3RjaGVjazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXVzZXJzXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nvqQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXVzZXJzPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtaS1jXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mn6XnnIvor6bmg4U8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWktYzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWJ1aWxkaW5nLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS8geS4muS/oeaBrzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYnVpbGRpbmctbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXJtYi1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7t+euoeeQhjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcm1iLXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXJlamVjdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5bey6amz5ZuePC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1yZWplY3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi05ZG90XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7oj5zljZU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLTlkb3Q8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1sb2FkaW5nc3RhdGVcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmxvYWRpbmc8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxvYWRpbmdzdGF0ZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLWdhdGV3YXlcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPue9keWFszwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZ2F0ZXdheTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRpY2tldC1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPkeelqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlja2V0LXMtbzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXVzZXJzZXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueuoeeQhuS4reW/gzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdXNlcnNldDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXB1enpsZS1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7nu4Tku7Y8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXB1enpsZS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYm94LW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueJqeaWmeeuoeeQhjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtYm94LW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1idWxiXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7mv4DmtLs8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWJ1bGI8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1leGMtdFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5oSf5Y+55Y+3X2ljb248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWV4Yy10PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcm1iLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpeS7tzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcm1iLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10YWJsZS1zLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPkeelqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGFibGUtcy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdW1icmVsbGEtb1xcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5LyePC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi11bWJyZWxsYS1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZHJvcGJveFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+ZHJvcGJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZHJvcGJveDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXNlYXJjaC1saWdodFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5pCc57SiLeaQnOe0ojwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2VhcmNoLWxpZ2h0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtY2FydC1vXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5zaG9wcGluZy1jYXJ0LWJsYWNrLXNoYXBlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1jYXJ0LW88L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1rZXJvLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+a2VybzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYta2Vyby1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi11YmEtY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj51YmE8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXViYS1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aW5wZXJ6Yy1jb2xcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnRpbnBlcnpjPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10aW5wZXJ6Yy1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aW5wZXJ6Y2gtY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aW5wZXJ6Y2g8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRpbnBlcnpjaC1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1pdWFwLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aXVhcDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtaXVhcC1jb2w8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1pdWFwZGVzaWduLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+aXVhcGRlc2lnbno8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWl1YXBkZXNpZ24tY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYmVlLWNvbFxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+YmVlPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi1iZWUtY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbmVvdWktY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj5uZW91aTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbmVvdWktY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc3BhcnJvdy1jb2xcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnNwYXJyb3c8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXNwYXJyb3ctY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGlucGVyY24tY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aW5wZXJjbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlucGVyY24tY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGlucGVyZW4tY29sXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50aW5wZXJlbjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlucGVyZW4tY29sPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtYXJyb3ctdXBcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPmFuZ2xlLWFycm93LWRvd248L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWFycm93LXVwPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbWFpbHN5bVxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+d2VibWFpbDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbWFpbHN5bTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXByaW50XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lip7lhaznlKjlk4E8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXByaW50PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtdGlja2V0LTNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaKpemUgDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlja2V0LTM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1sb2FuXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lgJ/mrL48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxvYW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aWNrZXQtMlxcXCI+PC9JY29uPlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCI+5Yet6K+B5Lit5b+DPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb250Y2xhc3NcXFwiPi51Zi10aWNrZXQtMjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW9mZndvcmtcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuivt+WBhzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtb2Zmd29yazwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLXRvZG9saXN0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lvoXlip48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLXRvZG9saXN0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtcGVyc29uaW5cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWRmOW3peWFpeiBjDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGVyc29uaW48L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10aWNrZXRcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuelqOWKoTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdGlja2V0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtbGluZWNoYXJ0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lsI9pY29uLeWbvuihqDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtbGluZWNoYXJ0PC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtNGxlYWZcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuW6lOeUqOS4reW/gzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtNGxlYWY8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1saXN0c2V0XFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7kv6Hmga/nu7TmiqQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWxpc3RzZXQ8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1xaS1jLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuS8geS4muiupOivgTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcWktYy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtZXhjLWNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuWPueWPtzwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtZXhjLWM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1jb2RlXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7pm4bmiJDlvIDlj5E8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLWNvZGU8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi1wbHVnLW9cXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPueDreaLlOaPkjwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtcGx1Zy1vPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgICAgICAgXFxuXFx0ICAgICAgICAgICAgICAgIDxsaT5cXG5cXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cXFwidWYtc2VhcmNoLXNcXFwiPjwvSWNvbj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPuaQnOe0ojwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtc2VhcmNoLXM8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgPC9saT5cXG5cXHQgICAgICAgICAgICBcXG5cXHQgICAgICAgICAgICAgICAgPGxpPlxcblxcdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVxcXCJ1Zi10cmVlYWRkXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj50cmVlLW5ldy1zYmxpbmctbm9kZTwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udGNsYXNzXFxcIj4udWYtdHJlZWFkZDwvZGl2PlxcblxcdCAgICAgICAgICAgICAgICA8L2xpPlxcblxcdCAgICAgICAgICAgIFxcblxcdCAgICAgICAgICAgICAgICA8bGk+XFxuXFx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XFxcInVmLW1pXFxcIj48L0ljb24+XFxuXFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7lv4Xloas8L2Rpdj5cXG5cXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvbnRjbGFzc1xcXCI+LnVmLW1pPC9kaXY+XFxuXFx0ICAgICAgICAgICAgICAgIDwvbGk+XFxuXFx0ICAgICAgIFxcdFxcdDwvdWw+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0KVxcblxcdH1cXG59XFxuXFxuXCIsXCJkZXNjXCI6XCIg5ZyoaXVhcOWtl+espuW6k++8jGB0eXBlYOWPguaVsOWAvOWdh+S7pS3liIbpmpTjgIJcIn1dXG5cblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGV4YW1wbGUsIGNvZGUsIGRlc2MgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY2FyZXQgPSB0aGlzLnN0YXRlLm9wZW4gPyBDQVJFVFVQIDogQ0FSRVQ7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdGF0ZS5vcGVuID8gXCLpmpDol4/ku6PnoIFcIiA6IFwi5p+l55yL5Luj56CBXCI7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gKFxuICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cImJsb2NrXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgICAgICAgICB7IGNhcmV0IH1cbiAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPGgzPnsgdGl0bGUgfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+eyBkZXNjIH08L3A+XG4gICAgICAgICAgICAgICAgPFBhbmVsIGNvbGxhcHNpYmxlIGV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuIH0gY29sb3JzPSdib3JkZXJlZCcgaGVhZGVyPXsgZXhhbXBsZSB9IGZvb3Rlcj17Zm9vdGVyfSBmb290ZXJTdHlsZSA9IHt7cGFkZGluZzogMCxib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwifX0gPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlIGNsYXNzTmFtZT1cImhsanMgamF2YXNjcmlwdFwiPnsgY29kZSB9PC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgRGVtb0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtEZW1vQXJyYXkubWFwKChjaGlsZCxpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vIGV4YW1wbGU9IHtjaGlsZC5leGFtcGxlfSB0aXRsZT0ge2NoaWxkLnRpdGxlfSBjb2RlPSB7Y2hpbGQuY29kZX0gZGVzYz0ge2NoaWxkLmRlc2N9IGtleT0ge2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8RGVtb0dyb3VwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW5wZXJCZWVEZW1vJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRlbW8vaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNvbiA9IGV4cG9ydHMuUm93ID0gZXhwb3J0cy5Db2wgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sMiA9IHJlcXVpcmUoJy4vQ29sJyk7XG5cbnZhciBfQ29sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbDIpO1xuXG52YXIgX1JvdzIgPSByZXF1aXJlKCcuL1JvdycpO1xuXG52YXIgX1JvdzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cyKTtcblxudmFyIF9MYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xuXG52YXIgX0xheW91dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MYXlvdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0cy5Db2wgPSBfQ29sM1tcImRlZmF1bHRcIl07XG5leHBvcnRzLlJvdyA9IF9Sb3czW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuQ29uID0gX0xheW91dDJbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtbGF5b3V0L2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogeHPmmL7npLrliJfmlbBcbiAgICovXG4gIHhzOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5pi+56S65YiX5pWwXG4gICAqL1xuICBzbTogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOaYvuekuuWIl+aVsFxuICAgKi9cbiAgbWQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGfmmL7npLrliJfmlbBcbiAgICovXG4gIGxnOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHhz5YGP56e75YiX5pWwXG4gICAqL1xuICB4c09mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeWBj+enu+WIl+aVsFxuICAgKi9cbiAgc21PZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTlgY/np7vliJfmlbBcbiAgICovXG4gIG1kT2Zmc2V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5YGP56e75YiX5pWwXG4gICAqL1xuICBsZ09mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB4c+WPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgeHNQdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICBzbVB1c2g6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTlj7PlgY/np7vliJfmlbBcbiAgICovXG4gIG1kUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+WPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgbGdQdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHhz5bem5YGP56e75YiX5pWwXG4gICAqL1xuICB4c1B1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc23lt6blgY/np7vliJfmlbBcbiAgICovXG4gIHNtUHVsbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOW3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgbWRQdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5bem5YGP56e75YiX5pWwXG4gICAqL1xuICBsZ1B1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2RpdicsXG4gIGNsc1ByZWZpeDogJ3UtY29sJ1xufTtcblxudmFyIERFVklDRV9TSVpFUyA9IFsnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcblxudmFyIENvbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2wsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnRDbGFzcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnRDbGFzcycsICdjbGFzc05hbWUnLCAnY2xzUHJlZml4J10pO1xuXG4gICAgdmFyIHRiQ2xhc3MgPSBbXTtcbiAgICAvKipcbiAgICAgKiDlr7nkvKDlhaVwcm9wc+WBmuagt+W8j+i9rOWMllxuICAgICAqIEB0eXBlIHtbdHlwZV19XG4gICAgICovXG4gICAgREVWSUNFX1NJWkVTLmZvckVhY2goZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgIGZ1bmN0aW9uIHBvcFByb3AocHJvcFN1ZmZpeCwgbW9kaWZpZXIpIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gJycgKyBzaXplICsgcHJvcFN1ZmZpeDtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IG90aGVyc1twcm9wTmFtZV07XG5cbiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSB1bmRlZmluZWQgJiYgcHJvcFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0YkNsYXNzLnB1c2goY2xzUHJlZml4ICsgJy0nICsgc2l6ZSArIG1vZGlmaWVyICsgJy0nICsgcHJvcFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBvdGhlcnNbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgICBwb3BQcm9wKCcnLCAnJyk7XG4gICAgICBwb3BQcm9wKCdPZmZzZXQnLCAnLW9mZnNldCcpO1xuICAgICAgcG9wUHJvcCgnUHVzaCcsICctcHVzaCcpO1xuICAgICAgcG9wUHJvcCgnUHVsbCcsICctcHVsbCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRiQ2xhc3MsIGNsYXNzTmFtZSlcbiAgICAgIH0sIG90aGVycyksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ29sO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1sYXlvdXQvYnVpbGQvQ29sLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZWxlbWVudCwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2RpdicsXG4gIGNsc1ByZWZpeDogJ3Utcm93J1xufTtcblxudmFyIFJvdyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm93KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUm93LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnRDbGFzcyxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnRDbGFzcycsICdjbHNQcmVmaXgnLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgdmFyIGJzY2xhc3MgPSAnJyArIGNsc1ByZWZpeDtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShic2NsYXNzLCBjbGFzc05hbWUpXG4gICAgICB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBSb3c7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Sb3cucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUm93LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSb3c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWxheW91dC9idWlsZC9Sb3cuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXHJcbiAgICogQWRkcyBgY29udGFpbmVyLWZsdWlkYCBjbGFzcy5cclxuICAgKi9cbiAgZmx1aWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXHJcbiAgICogWW91IGNhbiB1c2UgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnRcclxuICAgKi9cbiAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZWxlbWVudCwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2RpdicsXG4gIGZsdWlkOiBmYWxzZSxcbiAgY2xzUHJlZml4OiAndS1jb250YWluZXInXG59O1xuXG52YXIgQ29uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RiY2xhc3M7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZmx1aWQgPSBfcHJvcHMuZmx1aWQsXG4gICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnRDbGFzcyxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydmbHVpZCcsICdjb21wb25lbnRDbGFzcycsICdjbHNQcmVmaXgnLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgdmFyIHRiY2xhc3MgPSAoX3RiY2xhc3MgPSB7fSwgX2RlZmluZVByb3BlcnR5KF90YmNsYXNzLCAnJyArIGNsc1ByZWZpeCwgIWZsdWlkKSwgX2RlZmluZVByb3BlcnR5KF90YmNsYXNzLCBjbHNQcmVmaXggKyAnLWZsdWlkJywgZmx1aWQpLCBfdGJjbGFzcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCBvdGhlcnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkodGJjbGFzcywgY2xhc3NOYW1lKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ29uO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Db24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ29uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWxheW91dC9idWlsZC9MYXlvdXQuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QYW5lbEdyb3VwID0gZXhwb3J0cy5QYW5lbCA9IHVuZGVmaW5lZDtcblxudmFyIF9QYW5lbDIgPSByZXF1aXJlKCcuL1BhbmVsJyk7XG5cbnZhciBfUGFuZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWwyKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IHJlcXVpcmUoJy4vUGFuZWxHcm91cCcpO1xuXG52YXIgX1BhbmVsR3JvdXAzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWxHcm91cDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0cy5QYW5lbCA9IF9QYW5lbDNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5QYW5lbEdyb3VwID0gX1BhbmVsR3JvdXAzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXBhbmVsL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9iZWVUcmFuc2l0aW9uID0gcmVxdWlyZSgnYmVlLXRyYW5zaXRpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8v5piv5ZCm5re75Yqg5oqY5Y+gXG4gIGNvbGxhcHNpYmxlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcbiAgb25TZWxlY3Q6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvL+WktOmDqOe7hOS7tlxuICBoZWFkZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ub2RlLFxuICBoZWFkZXJTdHlsZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9iamVjdCxcbiAgaWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVhZGVyQ29udGVudDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8vZm9vdGVy57uE5Lu2XG4gIGZvb3RlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm5vZGUsXG4gIGZvb3RlclN0eWxlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub2JqZWN0LFxuICAvL+m7mOiupOaYr+WQpuaJk+W8gFxuICBkZWZhdWx0RXhwYW5kZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+aYr+WQpuaJk+W8gFxuICBleHBhbmRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8v5q+P5LiqcGFuZWznmoTmoIforrBcbiAgZXZlbnRLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIGhlYWRlclJvbGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gIHBhbmVsUm9sZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgLy/popzoibJcbiAgY29sb3JzOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ2FjY2VudCcsICdzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInLCAnZGVmYXVsdCcsICdib3JkZXJlZCddKSxcblxuICAvLyBGcm9tIENvbGxhcHNlLueahOaJqeWxleWKqOeUu1xuICBvbkVudGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25FbnRlcmluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW50ZXJlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdGluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdEV4cGFuZGVkOiBmYWxzZSxcbiAgY2xzUHJlZml4OiBcInUtcGFuZWxcIixcbiAgY29sb3JzOiBcImRlZmF1bHRcIlxufTtcblxudmFyIFBhbmVsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhbmVsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lbChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrVGl0bGUgPSBfdGhpcy5oYW5kbGVDbGlja1RpdGxlLmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogX3RoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvL+WktOmDqOeCueWHu+S6i+S7tlxuXG5cbiAgUGFuZWwucHJvdG90eXBlLmhhbmRsZUNsaWNrVGl0bGUgPSBmdW5jdGlvbiBoYW5kbGVDbGlja1RpdGxlKGUpIHtcbiAgICAvLyDkuI3orqnkuovku7bov5vlhaXkuovku7bmsaBcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8v5riy5p+TcGFuZWxoZWFkZXJcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiByZW5kZXJIZWFkZXIoY29sbGFwc2libGUsIGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkLCBjbHNQcmVmaXgpIHtcbiAgICB2YXIgdGl0bGVDbGFzc05hbWUgPSBjbHNQcmVmaXggKyAnLXRpdGxlJztcblxuICAgIGlmICghY29sbGFwc2libGUpIHtcbiAgICAgIGlmICghX3JlYWN0MltcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQoaGVhZGVyKSkge1xuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXIucHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNsYXNzTmFtZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghX3JlYWN0MltcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQoaGVhZGVyKSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgIHsgcm9sZTogJ3ByZXNlbnRhdGlvbicsIGNsYXNzTmFtZTogdGl0bGVDbGFzc05hbWUgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLCBpZCwgcm9sZSwgZXhwYW5kZWQpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oZWFkZXJDb250ZW50KSB7XG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXIucHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNsYXNzTmFtZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXIucHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNsYXNzTmFtZSksXG4gICAgICBjaGlsZHJlbjogdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLnByb3BzLmNoaWxkcmVuLCBpZCwgcm9sZSwgZXhwYW5kZWQpXG4gICAgfSk7XG4gIH07XG5cbiAgLy/lpoLmnpzkvb/nlKjpk77mjqXvvIzmuLLmn5PkuLph5qCH562+XG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVyQW5jaG9yID0gZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIGhyZWY6IGlkICYmICcjJyArIGlkLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGlkLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IGV4cGFuZGVkLFxuICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGV4cGFuZGVkLFxuICAgICAgICBjbGFzc05hbWU6IGV4cGFuZGVkID8gbnVsbCA6ICdjb2xsYXBzZWQnXG4gICAgICB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfTtcblxuICAvL+WmguaenOacieaKmOWPoOWKqOeUu++8jOa4suafk+aKmOWPoOWKqOeUu1xuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckNvbGxhcHNpYmxlQm9keSA9IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlQm9keShpZCwgZXhwYW5kZWQsIHJvbGUsIGNoaWxkcmVuLCBjbHNQcmVmaXgsIGFuaW1hdGlvbkhvb2tzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfYmVlVHJhbnNpdGlvbi5Db2xsYXBzZSxcbiAgICAgIF9leHRlbmRzKHsgJ2luJzogZXhwYW5kZWQgfSwgYW5pbWF0aW9uSG9va3MpLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsc1ByZWZpeCArICctY29sbGFwc2UnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICFleHBhbmRlZFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnJlbmRlckJvZHkoY2hpbGRyZW4sIGNsc1ByZWZpeClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIC8v5riy5p+TcGFuZWxib2R5XG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVyQm9keSA9IGZ1bmN0aW9uIHJlbmRlckJvZHkocmF3Q2hpbGRyZW4sIGNsc1ByZWZpeCkge1xuICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgIHZhciBib2R5Q2hpbGRyZW4gPSBbXTtcblxuICAgIHZhciBib2R5Q2xhc3NOYW1lID0gY2xzUHJlZml4ICsgJy1ib2R5JztcblxuICAgIC8v5re75Yqg5YiwYm9keeeahGNoaWxkcmVu5LitXG4gICAgZnVuY3Rpb24gbWF5YmVBZGRCb2R5KCkge1xuICAgICAgaWYgKCFib2R5Q2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8g57uZ5a2Q57uE5Lu25re75Yqga2V577yM5Li65LqG5LmL5ZCO6Kem5Y+R5LqL5Lu25pe25L2/55SoXG4gICAgICBjaGlsZHJlbi5wdXNoKF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGtleTogY2hpbGRyZW4ubGVuZ3RoLCBjbGFzc05hbWU6IGJvZHlDbGFzc05hbWUgfSxcbiAgICAgICAgYm9keUNoaWxkcmVuXG4gICAgICApKTtcblxuICAgICAgYm9keUNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy/ovazmjaLkuLrmlbDnu4TvvIzmlrnkvr/lpI3nlKhcbiAgICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5DaGlsZHJlbi50b0FycmF5KHJhd0NoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKF9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJiBjaGlsZC5wcm9wcy5maWxsKSB7XG4gICAgICAgIG1heWJlQWRkQm9keSgpO1xuXG4gICAgICAgIC8v5bCG5qCH56S6ZmlsbOiuvue9ruS4unVuZGVmaW5lZFxuICAgICAgICBjaGlsZHJlbi5wdXNoKCgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgeyBmaWxsOiB1bmRlZmluZWQgfSkpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYm9keUNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgbWF5YmVBZGRCb2R5KCk7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH07XG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY29sbGFwc2libGUgPSBfcHJvcHMuY29sbGFwc2libGU7XG4gICAgdmFyIGhlYWRlciA9IF9wcm9wcy5oZWFkZXI7XG4gICAgdmFyIGlkID0gX3Byb3BzLmlkO1xuICAgIHZhciBmb290ZXIgPSBfcHJvcHMuZm9vdGVyO1xuICAgIHZhciBwcm9wc0V4cGFuZGVkID0gX3Byb3BzLmV4cGFuZGVkO1xuICAgIHZhciBmb290ZXJTdHlsZSA9IF9wcm9wcy5mb290ZXJTdHlsZTtcbiAgICB2YXIgaGVhZGVyU3R5bGUgPSBfcHJvcHMuaGVhZGVyU3R5bGU7XG4gICAgdmFyIGhlYWRlclJvbGUgPSBfcHJvcHMuaGVhZGVyUm9sZTtcbiAgICB2YXIgcGFuZWxSb2xlID0gX3Byb3BzLnBhbmVsUm9sZTtcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgY29sb3JzID0gX3Byb3BzLmNvbG9ycztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIG9uRW50ZXIgPSBfcHJvcHMub25FbnRlcjtcbiAgICB2YXIgb25FbnRlcmluZyA9IF9wcm9wcy5vbkVudGVyaW5nO1xuICAgIHZhciBvbkVudGVyZWQgPSBfcHJvcHMub25FbnRlcmVkO1xuICAgIHZhciBjbHNQcmVmaXggPSBfcHJvcHMuY2xzUHJlZml4O1xuICAgIHZhciBvbkV4aXQgPSBfcHJvcHMub25FeGl0O1xuICAgIHZhciBoZWFkZXJDb250ZW50ID0gX3Byb3BzLmhlYWRlckNvbnRlbnQ7XG4gICAgdmFyIG9uRXhpdGluZyA9IF9wcm9wcy5vbkV4aXRpbmc7XG4gICAgdmFyIG9uRXhpdGVkID0gX3Byb3BzLm9uRXhpdGVkO1xuICAgIHZhciBkZWZhdWx0RXhwYW5kZWQgPSBfcHJvcHMuZGVmYXVsdEV4cGFuZGVkO1xuICAgIHZhciBldmVudEtleSA9IF9wcm9wcy5ldmVudEtleTtcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3Q7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbGxhcHNpYmxlJywgJ2hlYWRlcicsICdpZCcsICdmb290ZXInLCAnZXhwYW5kZWQnLCAnZm9vdGVyU3R5bGUnLCAnaGVhZGVyU3R5bGUnLCAnaGVhZGVyUm9sZScsICdwYW5lbFJvbGUnLCAnY2xhc3NOYW1lJywgJ2NvbG9ycycsICdjaGlsZHJlbicsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ2Nsc1ByZWZpeCcsICdvbkV4aXQnLCAnaGVhZGVyQ29udGVudCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnLCAnZGVmYXVsdEV4cGFuZGVkJywgJ2V2ZW50S2V5JywgJ29uU2VsZWN0J10pO1xuXG4gICAgdmFyIGV4cGFuZGVkID0gcHJvcHNFeHBhbmRlZCAhPSBudWxsID8gcHJvcHNFeHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcbiAgICBjbGFzc2VzW2Nsc1ByZWZpeCArICctJyArIGNvbG9yc10gPSB0cnVlO1xuXG4gICAgdmFyIGhlYWRlckNsYXNzID0gX2RlZmluZVByb3BlcnR5KHt9LCBjbHNQcmVmaXggKyAnLWhlYWRpbmcnLCB0cnVlKTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgaWQ6IGNvbGxhcHNpYmxlID8gbnVsbCA6IGlkXG4gICAgICB9KSxcbiAgICAgIGhlYWRlciAmJiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXJDbGFzcyksIHN0eWxlOiBoZWFkZXJTdHlsZSwgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1RpdGxlIH0sXG4gICAgICAgIHRoaXMucmVuZGVySGVhZGVyKGNvbGxhcHNpYmxlLCBoZWFkZXIsIGlkLCBoZWFkZXJSb2xlLCBleHBhbmRlZCwgY2xzUHJlZml4KVxuICAgICAgKSxcbiAgICAgIGNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCBwYW5lbFJvbGUsIGNoaWxkcmVuLCBjbHNQcmVmaXgsIHsgb25FbnRlcjogb25FbnRlciwgb25FbnRlcmluZzogb25FbnRlcmluZywgb25FbnRlcmVkOiBvbkVudGVyZWQsIG9uRXhpdDogb25FeGl0LCBvbkV4aXRpbmc6IG9uRXhpdGluZywgb25FeGl0ZWQ6IG9uRXhpdGVkIH0pIDogdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpLFxuICAgICAgZm9vdGVyICYmIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xzUHJlZml4ICsgJy1mb290ZXInLCBzdHlsZTogZm9vdGVyU3R5bGUgfSxcbiAgICAgICAgZm9vdGVyXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUGFuZWw7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBhbmVsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQYW5lbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GYWRlID0gZXhwb3J0cy5Db2xsYXBzZSA9IGV4cG9ydHMuVHJhbnNpdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9UcmFuc2l0aW9uMiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbjIpO1xuXG52YXIgX0NvbGxhcHNlMiA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZTIpO1xuXG52YXIgX0ZhZGUyID0gcmVxdWlyZSgnLi9GYWRlJyk7XG5cbnZhciBfRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzLlRyYW5zaXRpb24gPSBfVHJhbnNpdGlvbjNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Db2xsYXBzZSA9IF9Db2xsYXBzZTNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5GYWRlID0gX0ZhZGUzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5FWElUSU5HID0gZXhwb3J0cy5FTlRFUkVEID0gZXhwb3J0cy5FTlRFUklORyA9IGV4cG9ydHMuRVhJVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9wcm9wZXJ0aWVzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzJyk7XG5cbnZhciBfcHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wZXJ0aWVzKTtcblxudmFyIF9vbiA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2V2ZW50cy9vbicpO1xuXG52YXIgX29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0gX3Byb3BlcnRpZXMyW1wiZGVmYXVsdFwiXS5lbmQ7XG5cbi8v6K6+572u54q25oCB56CBXG52YXIgVU5NT1VOVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSAwO1xudmFyIEVYSVRFRCA9IGV4cG9ydHMuRVhJVEVEID0gMTtcbnZhciBFTlRFUklORyA9IGV4cG9ydHMuRU5URVJJTkcgPSAyO1xudmFyIEVOVEVSRUQgPSBleHBvcnRzLkVOVEVSRUQgPSAzO1xudmFyIEVYSVRJTkcgPSBleHBvcnRzLkVYSVRJTkcgPSA0O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6Kem5Y+R5Yqo55S7XG4gICAqL1xuICBcImluXCI6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICog5LiN5pi+56S655qE5pe25YCZ5piv5ZCm56e76Zmk57uE5Lu2XG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIOWmguaenOiuvue9ruS4uum7mOiupOaYvuekuu+8jOaMgui9veaXtuaYvuekuuWKqOeUu1xuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiDorr7nva7otoXml7bml7bpl7TvvIzpmLLmraLlh7rnjrDpl67popjvvIzlj6/orr7nva7kuLo+PeWKqOeUu+aXtumXtFxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIOmAgOWHuue7hOS7tuaXtua3u+WKoOeahGNsYXNzXG4gICAqL1xuICBleGl0ZWRDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6YCA5Ye657uE5Lu25Lit5re75Yqg55qEY2xhc3NcbiAgICovXG4gIGV4aXRpbmdDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75ZCO5re75Yqg55qEY2xhc3NcbiAgICovXG4gIGVudGVyZWRDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75pe25re75Yqg55qEY2xhc3NcbiAgICovXG4gIGVudGVyaW5nQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75byA5aeL5pe255qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkVudGVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvkuK3nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRW50ZXJpbmc6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+WQjueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FbnRlcmVkOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpgIDlh7rliqjnlLvlvIDlp4vml7bnmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75Lit55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmAgOWHuuWKqOeUu+WQjueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIFwiaW5cIjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgdGltZW91dDogNTAwMCxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5cbi8qKlxuICog5Yqo55S757uE5Lu2XG4gKi9cblxudmFyIFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgdmFyIGluaXRpYWxTdGF0dXMgPSB2b2lkIDA7XG4gICAgaWYgKHByb3BzW1wiaW5cIl0pIHtcbiAgICAgIC8vIOWcqGNvbXBvbmVudGRpZG1vdW505pe25byA5aeL5omn6KGM5Yqo55S7XG4gICAgICBpbml0aWFsU3RhdHVzID0gcHJvcHMudHJhbnNpdGlvbkFwcGVhciA/IEVYSVRFRCA6IEVOVEVSRUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxTdGF0dXMgPSBwcm9wcy51bm1vdW50T25FeGl0ID8gVU5NT1VOVEVEIDogRVhJVEVEO1xuICAgIH1cbiAgICBfdGhpcy5zdGF0ZSA9IHsgc3RhdHVzOiBpbml0aWFsU3RhdHVzIH07XG5cbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhciAmJiB0aGlzLnByb3BzW1wiaW5cIl0pIHtcbiAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzW1wiaW5cIl0gJiYgdGhpcy5wcm9wcy51bm1vdW50T25FeGl0KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgICAvLyDlnKhjb21wb25lbnREaWRVcGRhdGXmiafooYzliqjnlLsuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiBzdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgLy8g5b2T5L2/55SodW5tb3VudE9uRXhpdOaXtu+8jGV4aXRlZOS4umV4aXRpbmflkox1bm1vbnTnmoTov4fmuKHnirbmgIFcbiAgICAgIGlmICh0aGlzLnByb3BzW1wiaW5cIl0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBVTk1PVU5URUQgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDnoa7kv53lj6rlk43lupRwcm9w5Y+Y5YyWXG4gICAgaWYgKHRoaXMuX25lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5wcm9wc1tcImluXCJdKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVYSVRJTkcpIHtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFtuS7lu+8jOW9k+aIkeS7rOW3sue7j+i+k+WFpeaIlui+k+WHulxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtRXhpdCh0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmiJHku6zlt7Lnu4/ovpPlhaXmiJbovpPlh7rlrozmiJBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihwcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTJbXCJkZWZhdWx0XCJdLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgLy8g6L+Z6YeM5o6l5pS25pawcHJvcHNcbiAgICBwcm9wcy5vbkVudGVyKG5vZGUpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMltcImRlZmF1bHRcIl0uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBwcm9wcy5vbkV4aXQobm9kZSk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVElORyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8g56Gu5L+d5Zyo57uE5Lu26ZSA5q+B5ZCO5oyC6LW355qEc2V0U3RhdGXooqvmtojpmaRcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uRW5kRXZlbnQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubmV4dENhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX29uMltcImRlZmF1bHRcIl0pKG5vZGUsIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGhpcy5wcm9wcy50aW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgT2JqZWN0LmtleXMoVHJhbnNpdGlvbi5wcm9wVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGRlbGV0ZSBjaGlsZFByb3BzW2tleV07XG4gICAgfSk7XG5cbiAgICB2YXIgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHZvaWQgMDtcbiAgICBpZiAoc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4aXRlZENsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmVudGVyaW5nQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5lbnRlcmVkQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFWElUSU5HKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leGl0aW5nQ2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoY2hpbGQsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSwgdHJhbnNpdGlvbkNsYXNzTmFtZSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xudmFyIHByZWZpeCA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRW5kID0gdm9pZCAwO1xudmFyIHRyYW5zaXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdm9pZCAwO1xudmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB2b2lkIDA7XG5cbmlmIChfaW5ET00yLmRlZmF1bHQpIHtcbiAgdmFyIF9nZXRUcmFuc2l0aW9uUHJvcGVydCA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCk7XG5cbiAgcHJlZml4ID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LnByZWZpeDtcbiAgZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC50cmFuc2l0aW9uRW5kO1xuXG5cbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyAnLScgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJztcbn1cblxuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5leHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHRyYW5zaXRpb25Qcm9wZXJ0eTtcbmV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmc7XG5leHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheTtcbmV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbkVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCkge1xuICB2YXIgdHJhbnNpdGlvbkVuZCA9IHZvaWQgMDtcbiAgdmFyIHByZWZpeCA9ICcnO1xuICB2YXIgZXZlbnROYW1lcyA9IHtcbiAgICBPOiAnb3RyYW5zaXRpb25lbmQnLFxuICAgIE1vejogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIG1zOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAodmFyIHZlbmRvciBpbiBldmVudE5hbWVzKSB7XG4gICAgaWYgKGV2ZW50TmFtZXMuaGFzT3duUHJvcGVydHkodmVuZG9yKSkge1xuICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbdmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eSddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJlZml4ID0gJy0nICsgdmVuZG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRyYW5zaXRpb25FbmQgPSBldmVudE5hbWVzW3ZlbmRvcl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfWlmICghdHJhbnNpdGlvbkVuZCAmJiBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB0cmFuc2l0aW9uRW5kID0gJ3RyYW5zaXRpb25lbmQnO1xuXG4gIGVsZW1lbnQgPSBudWxsO1xuXG4gIHJldHVybiB7IHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsIHByZWZpeDogcHJlZml4IH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2luRE9NLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5ET00gPSByZXF1aXJlKCcuLi91dGlsL2luRE9NJyk7XG5cbnZhciBfaW5ET00yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5ET00pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb24gPSBmdW5jdGlvbiBvbigpIHt9O1xuaWYgKF9pbkRPTTIuZGVmYXVsdCkge1xuICBvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUgfHwgZmFsc2UpO1xuICAgIH07ZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9KCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL2V2ZW50cy9vbi5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9zdHlsZSA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3N0eWxlJyk7XG5cbnZhciBfc3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGUpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbik7XG5cbnZhciBfY2FwaXRhbGl6ZSA9IHJlcXVpcmUoJy4vdXRpbC9jYXBpdGFsaXplJyk7XG5cbnZhciBfY2FwaXRhbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplKTtcblxudmFyIF90aW5wZXJCZWVDb3JlID0gcmVxdWlyZSgndGlucGVyLWJlZS1jb3JlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgTUFSR0lOUyA9IHtcbiAgaGVpZ2h0OiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgd2lkdGg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddXG59O1xuXG4vLyByZWFkaW5nIGEgZGltZW5zaW9uIHByb3Agd2lsbCBjYXVzZSB0aGUgYnJvd3NlciB0byByZWNhbGN1bGF0ZSxcbi8vIHdoaWNoIHdpbGwgbGV0IG91ciBhbmltYXRpb25zIHdvcmtcbmZ1bmN0aW9uIHRyaWdnZXJCcm93c2VyUmVmbG93KG5vZGUpIHtcbiAgbm9kZS5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG59XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvblZhbHVlKGRpbWVuc2lvbiwgZWxlbSkge1xuICB2YXIgdmFsdWUgPSBlbGVtWydvZmZzZXQnICsgKDAsIF9jYXBpdGFsaXplMltcImRlZmF1bHRcIl0pKGRpbWVuc2lvbildO1xuICB2YXIgbWFyZ2lucyA9IE1BUkdJTlNbZGltZW5zaW9uXTtcblxuICByZXR1cm4gdmFsdWUgKyBwYXJzZUludCgoMCwgX3N0eWxlMltcImRlZmF1bHRcIl0pKGVsZW0sIG1hcmdpbnNbMF0pLCAxMCkgKyBwYXJzZUludCgoMCwgX3N0eWxlMltcImRlZmF1bHRcIl0pKGVsZW0sIG1hcmdpbnNbMV0pLCAxMCk7XG59XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxyXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGV4cGFuZCBvciBjb2xsYXBzZSBhbmltYXRpb25cclxuICAgKi9cbiAgXCJpblwiOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBVbm1vdW50IHRoZSBjb21wb25lbnQgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgY29sbGFwc2VkXHJcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxyXG4gICAqIFJ1biB0aGUgZXhwYW5kIGFuaW1hdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLCBpZiBpdCBpcyBpbml0aWFsbHlcclxuICAgKiBzaG93blxyXG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBEdXJhdGlvbiBvZiB0aGUgY29sbGFwc2UgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXRcclxuICAgKiBmaW5pc2hpbmcgY2FsbGJhY2tzIGFyZSBmaXJlZCBldmVuIGlmIHRoZSBvcmlnaW5hbCBicm93c2VyIHRyYW5zaXRpb24gZW5kXHJcbiAgICogZXZlbnRzIGFyZSBjYW5jZWxlZFxyXG4gICAqL1xuICB0aW1lb3V0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGV4cGFuZHNcclxuICAgKi9cbiAgb25FbnRlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGV4cGFuZFxyXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZXhwYW5kZWRcclxuICAgKi9cbiAgb25FbnRlcmVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgY29sbGFwc2VzXHJcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGNvbGxhcHNlXHJcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGNvbGxhcHNlZFxyXG4gICAqL1xuICBvbkV4aXRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXHJcbiAgICogVGhlIGRpbWVuc2lvbiB1c2VkIHdoZW4gY29sbGFwc2luZywgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXHJcbiAgICogZGltZW5zaW9uXHJcbiAgICpcclxuICAgKiBfTm90ZTogQm9vdHN0cmFwIG9ubHkgcGFydGlhbGx5IHN1cHBvcnRzICd3aWR0aCchXHJcbiAgICogWW91IHdpbGwgbmVlZCB0byBzdXBwbHkgeW91ciBvd24gQ1NTIGFuaW1hdGlvbiBmb3IgdGhlIGAud2lkdGhgIENTUyBjbGFzcy5fXHJcbiAgICovXG4gIGRpbWVuc2lvbjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9uZU9mKFsnaGVpZ2h0JywgJ3dpZHRoJ10pLCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgaGVpZ2h0IG9yIHdpZHRoIG9mIHRoZSBhbmltYXRpbmcgRE9NIG5vZGVcclxuICAgKlxyXG4gICAqIEFsbG93cyBmb3IgcHJvdmlkaW5nIHNvbWUgY3VzdG9tIGxvZ2ljIGZvciBob3cgbXVjaCB0aGUgQ29sbGFwc2UgY29tcG9uZW50XHJcbiAgICogc2hvdWxkIGFuaW1hdGUgaW4gaXRzIHNwZWNpZmllZCBkaW1lbnNpb24uIENhbGxlZCB3aXRoIHRoZSBjdXJyZW50XHJcbiAgICogZGltZW5zaW9uIHByb3AgdmFsdWUgYW5kIHRoZSBET00gbm9kZS5cclxuICAgKi9cbiAgZ2V0RGltZW5zaW9uVmFsdWU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxyXG4gICAqIEFSSUEgcm9sZSBvZiBjb2xsYXBzaWJsZSBlbGVtZW50XHJcbiAgICovXG4gIHJvbGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIFwiaW5cIjogZmFsc2UsXG4gIHRpbWVvdXQ6IDMwMCxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuXG4gIGRpbWVuc2lvbjogJ2hlaWdodCcsXG4gIGdldERpbWVuc2lvblZhbHVlOiBnZXREaW1lbnNpb25WYWx1ZVxufTtcblxudmFyIENvbGxhcHNlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbGxhcHNlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2xsYXBzZShwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xsYXBzZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyID0gX3RoaXMuaGFuZGxlRW50ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRW50ZXJpbmcgPSBfdGhpcy5oYW5kbGVFbnRlcmluZy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFbnRlcmVkID0gX3RoaXMuaGFuZGxlRW50ZXJlZC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFeGl0ID0gX3RoaXMuaGFuZGxlRXhpdC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFeGl0aW5nID0gX3RoaXMuaGFuZGxlRXhpdGluZy5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKiAtLSBFeHBhbmRpbmcgLS0gKi9cblxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFbnRlciA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gJzAnO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyaW5nKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZ2V0U2Nyb2xsRGltZW5zaW9uVmFsdWUoZWxlbSwgZGltZW5zaW9uKTtcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyZWQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSBudWxsO1xuICB9O1xuXG4gIC8qIC0tIENvbGxhcHNpbmcgLS0gKi9cblxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gaGFuZGxlRXhpdChlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMucHJvcHMuZ2V0RGltZW5zaW9uVmFsdWUoZGltZW5zaW9uLCBlbGVtKSArICdweCc7XG4gICAgdHJpZ2dlckJyb3dzZXJSZWZsb3coZWxlbSk7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiBoYW5kbGVFeGl0aW5nKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gJzAnO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5fZGltZW5zaW9uID0gZnVuY3Rpb24gX2RpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJvcHMuZGltZW5zaW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5kaW1lbnNpb24oKSA6IHRoaXMucHJvcHMuZGltZW5zaW9uO1xuICB9O1xuXG4gIC8vIGZvciB0ZXN0aW5nXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuX2dldFNjcm9sbERpbWVuc2lvblZhbHVlID0gZnVuY3Rpb24gX2dldFNjcm9sbERpbWVuc2lvblZhbHVlKGVsZW0sIGRpbWVuc2lvbikge1xuICAgIHJldHVybiBlbGVtWydzY3JvbGwnICsgKDAsIF9jYXBpdGFsaXplMltcImRlZmF1bHRcIl0pKGRpbWVuc2lvbildICsgJ3B4JztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvbkVudGVyID0gX3Byb3BzLm9uRW50ZXI7XG4gICAgdmFyIG9uRW50ZXJpbmcgPSBfcHJvcHMub25FbnRlcmluZztcbiAgICB2YXIgb25FbnRlcmVkID0gX3Byb3BzLm9uRW50ZXJlZDtcbiAgICB2YXIgb25FeGl0ID0gX3Byb3BzLm9uRXhpdDtcbiAgICB2YXIgb25FeGl0aW5nID0gX3Byb3BzLm9uRXhpdGluZztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb25FbnRlcicsICdvbkVudGVyaW5nJywgJ29uRW50ZXJlZCcsICdvbkV4aXQnLCAnb25FeGl0aW5nJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5kaW1lbnNpb247XG4gICAgZGVsZXRlIHByb3BzLmdldERpbWVuc2lvblZhbHVlO1xuXG4gICAgdmFyIGhhbmRsZUVudGVyID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlciwgb25FbnRlcik7XG4gICAgdmFyIGhhbmRsZUVudGVyaW5nID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlcmluZywgb25FbnRlcmluZyk7XG4gICAgdmFyIGhhbmRsZUVudGVyZWQgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUVudGVyZWQsIG9uRW50ZXJlZCk7XG4gICAgdmFyIGhhbmRsZUV4aXQgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUV4aXQsIG9uRXhpdCk7XG4gICAgdmFyIGhhbmRsZUV4aXRpbmcgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUV4aXRpbmcsIG9uRXhpdGluZyk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLl9kaW1lbnNpb24oKSA9PT0gJ3dpZHRoJ1xuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbjJbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogcHJvcHMucm9sZSA/IHByb3BzW1wiaW5cIl0gOiBudWxsLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgIGV4aXRlZENsYXNzTmFtZTogJ2NvbGxhcHNlJyxcbiAgICAgIGV4aXRpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgIGVudGVyZWRDbGFzc05hbWU6ICdjb2xsYXBzZSBpbicsXG4gICAgICBlbnRlcmluZ0NsYXNzTmFtZTogJ2NvbGxhcHNpbmcnLFxuICAgICAgb25FbnRlcjogaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogaGFuZGxlRW50ZXJlZCxcbiAgICAgIG9uRXhpdDogaGFuZGxlRXhpdCxcbiAgICAgIG9uRXhpdGluZzogaGFuZGxlRXhpdGluZ1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkNvbGxhcHNlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2xsYXBzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3R5bGU7XG5cbnZhciBfY2FtZWxpemVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2FtZWxpemVTdHlsZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZSk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGUgPSByZXF1aXJlKCcuLi91dGlsL2h5cGhlbmF0ZVN0eWxlJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGUpO1xuXG52YXIgX2dldENvbXB1dGVkU3R5bGUyID0gcmVxdWlyZSgnLi9nZXRDb21wdXRlZFN0eWxlJyk7XG5cbnZhciBfZ2V0Q29tcHV0ZWRTdHlsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDb21wdXRlZFN0eWxlMik7XG5cbnZhciBfcmVtb3ZlU3R5bGUgPSByZXF1aXJlKCcuL3JlbW92ZVN0eWxlJyk7XG5cbnZhciBfcmVtb3ZlU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVtb3ZlU3R5bGUpO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9pc1RyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0nKTtcblxudmFyIF9pc1RyYW5zZm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1RyYW5zZm9ybSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICB2YXIgY3NzID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1zID0gJyc7XG4gIHZhciBwcm9wcyA9IHByb3BlcnR5O1xuXG4gIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBub2RlLnN0eWxlWygwLCBfY2FtZWxpemVTdHlsZTIuZGVmYXVsdCkocHJvcGVydHkpXSB8fCAoMCwgX2dldENvbXB1dGVkU3R5bGUzLmRlZmF1bHQpKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoKDAsIF9oeXBoZW5hdGVTdHlsZTIuZGVmYXVsdCkocHJvcGVydHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHByb3BzID0ge30pW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgICgwLCBfcmVtb3ZlU3R5bGUyLmRlZmF1bHQpKG5vZGUsICgwLCBfaHlwaGVuYXRlU3R5bGUyLmRlZmF1bHQpKGtleSkpO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc1RyYW5zZm9ybTIuZGVmYXVsdCkoa2V5KSkge1xuICAgICAgdHJhbnNmb3JtcyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzcyArPSAoMCwgX2h5cGhlbmF0ZVN0eWxlMi5kZWZhdWx0KShrZXkpICsgJzogJyArIHZhbHVlICsgJzsnO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICBjc3MgKz0gX3Byb3BlcnRpZXMudHJhbnNmb3JtICsgJzogJyArIHRyYW5zZm9ybXMgKyAnOyc7XG4gIH1cblxuICBub2RlLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgY3NzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbGl6ZVN0eWxlTmFtZTtcblxudmFyIF9jYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIF9jYW1lbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvY2FtZWxpemVTdHlsZU5hbWUuanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gKDAsIF9jYW1lbGl6ZTIuZGVmYXVsdCkoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbGl6ZTtcbnZhciBySHlwaGVuID0gLy0oLikvZztcblxuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShySHlwaGVuLCBmdW5jdGlvbiAoXywgY2hyKSB7XG4gICAgcmV0dXJuIGNoci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxudmFyIF9oeXBoZW5hdGUgPSByZXF1aXJlKCcuL2h5cGhlbmF0ZScpO1xuXG52YXIgX2h5cGhlbmF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gKDAsIF9oeXBoZW5hdGUyLmRlZmF1bHQpKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9oeXBoZW5hdGVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlO1xuXG52YXIgclVwcGVyID0gLyhbQS1aXSkvZztcblxuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoclVwcGVyLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2dldENvbXB1dGVkU3R5bGU7XG5cbnZhciBfY2FtZWxpemVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2FtZWxpemVTdHlsZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBycG9zaXRpb24gPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgcm51bW5vbnB4ID0gL14oWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpKSg/IXB4KVthLXolXSskL2k7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBFbGVtZW50IHBhc3NlZCB0byBgZ2V0Q29tcHV0ZWRTdHlsZSgpYCcpO1xuICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHJldHVybiAnZGVmYXVsdFZpZXcnIGluIGRvYyA/IGRvYy5kZWZhdWx0Vmlldy5vcGVuZXIgPyBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpIDoge1xuICAgIC8vaWUgOCBcIm1hZ2ljXCIgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjExLXN0YWJsZS9zcmMvY3NzL2N1ckNTUy5qcyNMNzJcbiAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHByb3ApIHtcbiAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG5cbiAgICAgIHByb3AgPSAoMCwgX2NhbWVsaXplU3R5bGUyLmRlZmF1bHQpKHByb3ApO1xuXG4gICAgICBpZiAocHJvcCA9PSAnZmxvYXQnKSBwcm9wID0gJ3N0eWxlRmxvYXQnO1xuXG4gICAgICB2YXIgY3VycmVudCA9IG5vZGUuY3VycmVudFN0eWxlW3Byb3BdIHx8IG51bGw7XG5cbiAgICAgIGlmIChjdXJyZW50ID09IG51bGwgJiYgc3R5bGUgJiYgc3R5bGVbcHJvcF0pIGN1cnJlbnQgPSBzdHlsZVtwcm9wXTtcblxuICAgICAgaWYgKHJudW1ub25weC50ZXN0KGN1cnJlbnQpICYmICFycG9zaXRpb24udGVzdChwcm9wKSkge1xuICAgICAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgICAgIHZhciBsZWZ0ID0gc3R5bGUubGVmdDtcbiAgICAgICAgdmFyIHJ1blN0eWxlID0gbm9kZS5ydW50aW1lU3R5bGU7XG4gICAgICAgIHZhciByc0xlZnQgPSBydW5TdHlsZSAmJiBydW5TdHlsZS5sZWZ0O1xuXG4gICAgICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICAgICAgaWYgKHJzTGVmdCkgcnVuU3R5bGUubGVmdCA9IG5vZGUuY3VycmVudFN0eWxlLmxlZnQ7XG5cbiAgICAgICAgc3R5bGUubGVmdCA9IHByb3AgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQgPSBzdHlsZS5waXhlbExlZnQgKyAncHgnO1xuXG4gICAgICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgc3R5bGUubGVmdCA9IGxlZnQ7XG4gICAgICAgIGlmIChyc0xlZnQpIHJ1blN0eWxlLmxlZnQgPSByc0xlZnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9zdHlsZS9nZXRDb21wdXRlZFN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZW1vdmVTdHlsZTtcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKG5vZGUsIGtleSkge1xuICByZXR1cm4gJ3JlbW92ZVByb3BlcnR5JyBpbiBub2RlLnN0eWxlID8gbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpIDogbm9kZS5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9zdHlsZS9yZW1vdmVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1RyYW5zZm9ybTtcbnZhciBzdXBwb3J0ZWRUcmFuc2Zvcm1zID0gL14oKHRyYW5zbGF0ZXxyb3RhdGV8c2NhbGUpKFh8WXxafDNkKT98bWF0cml4KDNkKT98cGVyc3BlY3RpdmV8c2tldyhYfFkpPykkL2k7XG5cbmZ1bmN0aW9uIGlzVHJhbnNmb3JtKHByb3BlcnR5KSB7XG4gIHJldHVybiAhIShwcm9wZXJ0eSAmJiBzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3QocHJvcGVydHkpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjYXBpdGFsaXplO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIFwiXCIgKyBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWxpZ24gPSBleHBvcnRzLnRvQXJyYXkgPSBleHBvcnRzLmNzc0FuaW1hdGlvbiA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuY29udGFpbnMgPSBleHBvcnRzLktleUNvZGUgPSBleHBvcnRzLmNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IGV4cG9ydHMuc3BsaXRDb21wb25lbnQgPSBleHBvcnRzLmlzUmVxdWlyZWRGb3JBMTF5ID0gZXhwb3J0cy5lbGVtZW50VHlwZSA9IGV4cG9ydHMuZGVwcmVjYXRlZCA9IGV4cG9ydHMuY29tcG9uZW50T3JFbGVtZW50ID0gZXhwb3J0cy5hbGwgPSB1bmRlZmluZWQ7XG5cbnZhciBfYWxsMiA9IHJlcXVpcmUoJy4vYWxsJyk7XG5cbnZhciBfYWxsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FsbDIpO1xuXG52YXIgX2NvbXBvbmVudE9yRWxlbWVudDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudE9yRWxlbWVudCcpO1xuXG52YXIgX2NvbXBvbmVudE9yRWxlbWVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRPckVsZW1lbnQyKTtcblxudmFyIF9kZXByZWNhdGVkMiA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlZCcpO1xuXG52YXIgX2RlcHJlY2F0ZWQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlZDIpO1xuXG52YXIgX2VsZW1lbnRUeXBlMiA9IHJlcXVpcmUoJy4vZWxlbWVudFR5cGUnKTtcblxudmFyIF9lbGVtZW50VHlwZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbGVtZW50VHlwZTIpO1xuXG52YXIgX2lzUmVxdWlyZWRGb3JBMTF5MiA9IHJlcXVpcmUoJy4vaXNSZXF1aXJlZEZvckExMXknKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1JlcXVpcmVkRm9yQTExeTIpO1xuXG52YXIgX3NwbGl0Q29tcG9uZW50MiA9IHJlcXVpcmUoJy4vc3BsaXRDb21wb25lbnQnKTtcblxudmFyIF9zcGxpdENvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGxpdENvbXBvbmVudDIpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yKTtcblxudmFyIF9rZXlDb2RlID0gcmVxdWlyZSgnLi9rZXlDb2RlJyk7XG5cbnZhciBfa2V5Q29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlDb2RlKTtcblxudmFyIF9jb250YWluczIgPSByZXF1aXJlKCcuL2NvbnRhaW5zJyk7XG5cbnZhciBfY29udGFpbnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbnMyKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMiA9IHJlcXVpcmUoJy4vYWRkRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRXZlbnRMaXN0ZW5lcjIpO1xuXG52YXIgX2Nzc0FuaW1hdGlvbjIgPSByZXF1aXJlKCcuL2Nzc0FuaW1hdGlvbicpO1xuXG52YXIgX2Nzc0FuaW1hdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBbmltYXRpb24yKTtcblxudmFyIF90b0FycmF5MiA9IHJlcXVpcmUoJy4vdG9BcnJheScpO1xuXG52YXIgX3RvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9BcnJheTIpO1xuXG52YXIgX0FsaWduMiA9IHJlcXVpcmUoJy4vQWxpZ24nKTtcblxudmFyIF9BbGlnbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BbGlnbjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmFsbCA9IF9hbGwzLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvbmVudE9yRWxlbWVudCA9IF9jb21wb25lbnRPckVsZW1lbnQzLmRlZmF1bHQ7XG5leHBvcnRzLmRlcHJlY2F0ZWQgPSBfZGVwcmVjYXRlZDMuZGVmYXVsdDtcbmV4cG9ydHMuZWxlbWVudFR5cGUgPSBfZWxlbWVudFR5cGUzLmRlZmF1bHQ7XG5leHBvcnRzLmlzUmVxdWlyZWRGb3JBMTF5ID0gX2lzUmVxdWlyZWRGb3JBMTF5My5kZWZhdWx0O1xuZXhwb3J0cy5zcGxpdENvbXBvbmVudCA9IF9zcGxpdENvbXBvbmVudDMuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjMuZGVmYXVsdDtcbmV4cG9ydHMuS2V5Q29kZSA9IF9rZXlDb2RlMi5kZWZhdWx0O1xuZXhwb3J0cy5jb250YWlucyA9IF9jb250YWluczMuZGVmYXVsdDtcbmV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IF9hZGRFdmVudExpc3RlbmVyMy5kZWZhdWx0O1xuZXhwb3J0cy5jc3NBbmltYXRpb24gPSBfY3NzQW5pbWF0aW9uMy5kZWZhdWx0O1xuZXhwb3J0cy50b0FycmF5ID0gX3RvQXJyYXkzLmRlZmF1bHQ7XG4vL2V4cG9ydCBnZXRDb250YWluZXJSZW5kZXJNaXhpbiBmcm9tICcuL2dldENvbnRhaW5lclJlbmRlck1peGluJztcblxuZXhwb3J0cy5BbGlnbiA9IF9BbGlnbjMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWxsO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWxsKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxQcm9wVHlwZXMoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGFsbFByb3BUeXBlcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjtcbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbi8vIE1vc3RseSB0YWtlbiBmcm9tIFJlYWN0UHJvcFR5cGVzLlxuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWVTYWZlICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lU2FmZSArICdgLicpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNiA/IF9sZW4gLSA2IDogMCksIF9rZXkgPSA2OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA2XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGUuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lU2FmZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZVNhZmVdLmNvbmNhdChhcmdzKSk7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvdXRpbHMvY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocHJvcFZhbHVlKTtcblxuICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIFJlYWN0RWxlbWVudCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdENvbXBvbmVudCBvciBhICcpICsgJ0RPTUVsZW1lbnQuIFlvdSBjYW4gdXN1YWxseSBvYnRhaW4gYSBSZWFjdENvbXBvbmVudCBvciBET01FbGVtZW50ICcgKyAnZnJvbSBhIFJlYWN0RWxlbWVudCBieSBhdHRhY2hpbmcgYSByZWYgdG8gaXQuJyk7XG4gIH1cblxuICBpZiAoKHByb3BUeXBlICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcFZhbHVlLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykgJiYgcHJvcFZhbHVlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdENvbXBvbmVudCBvciBhICcpICsgJ0RPTUVsZW1lbnQuJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIuZGVmYXVsdCkodmFsaWRhdGUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbXBvbmVudE9yRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVwcmVjYXRlZDtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3YXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gZGVwcmVjYXRlZCh2YWxpZGF0b3IsIHJlYXNvbikge1xuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9IG51bGwpIHtcbiAgICAgIHZhciBtZXNzYWdlS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIHByb3BOYW1lO1xuXG4gICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHdhcm5lZFttZXNzYWdlS2V5XSwgJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lU2FmZSArICdgIG9mICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBpcyBkZXByZWNhdGVkLiAnICsgcmVhc29uICsgJy4nKSk7XG5cbiAgICAgIHdhcm5lZFttZXNzYWdlS2V5XSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmZ1bmN0aW9uIF9yZXNldFdhcm5lZCgpIHtcbiAgd2FybmVkID0ge307XG59XG5cbmRlcHJlY2F0ZWQuX3Jlc2V0V2FybmVkID0gX3Jlc2V0V2FybmVkO1xuLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2RlcHJlY2F0ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dhcm5pbmcvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy95dXpoYW8vLm52bS92ZXJzaW9ucy9ub2RlL3Y3LjkuMC9saWIvfi9iZWUtdG9vbHMvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlbGVtZW50VHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocHJvcFZhbHVlKTtcblxuICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIFJlYWN0RWxlbWVudCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gZWxlbWVudCB0eXBlIChhIHN0cmluZyAnKSArICdvciBhIFJlYWN0Q2xhc3MpLicpO1xuICB9XG5cbiAgaWYgKHByb3BUeXBlICE9PSAnZnVuY3Rpb24nICYmIHByb3BUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGVsZW1lbnQgdHlwZSAoYSBzdHJpbmcgJykgKyAnb3IgYSBSZWFjdENsYXNzKS4nKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMi5kZWZhdWx0KShlbGVtZW50VHlwZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvZWxlbWVudFR5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUmVxdWlyZWRGb3JBMTF5O1xuZnVuY3Rpb24gaXNSZXF1aXJlZEZvckExMXkodmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZVNhZmUgPSBjb21wb25lbnROYW1lIHx8ICc8PGFub255bW91cz4+JztcbiAgICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWVTYWZlICsgJ2AgaXMgcmVxdWlyZWQgdG8gbWFrZSAnICsgKCdgJyArIGNvbXBvbmVudE5hbWVTYWZlICsgJ2AgYWNjZXNzaWJsZSBmb3IgdXNlcnMgb2YgYXNzaXN0aXZlICcpICsgJ3RlY2hub2xvZ2llcyBzdWNoIGFzIHNjcmVlbiByZWFkZXJzLicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDUgPyBfbGVuIC0gNSA6IDApLCBfa2V5ID0gNTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gNV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVdLmNvbmNhdChhcmdzKSk7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaXNSZXF1aXJlZEZvckExMXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2VudHJpZXMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9lbnRyaWVzXCIpO1xuXG52YXIgX2VudHJpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW50cmllcyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNwbGl0Q29tcG9uZW50UHJvcHM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICog5YiG5Ymy6KaB5Lyg5YWl54i25YWD57Sg5ZKM5a2Q5YWD57Sg55qEcHJvcHNcbiAqIEBwYXJhbSAge1tvYmplY3RdfSBwcm9wcyAgICAg5Lyg5YWl55qE5bGe5oCnXG4gKiBAcGFyYW0gIHtbcmVhY3RFbGVtZW50XX0gQ29tcG9uZW50IOe7hOS7tlxuICogQHJldHVybiB7W2FycmF5XX0gICAgICAgICAgIOi/lOWbnuaVsOe7hO+8jOesrOS4gOS4quWFg+e0oOS4uueItuWFg+e0oHByb3Bz5a+56LGh77yM56ys5LqM5Liq5a2Q5YWD57SgcHJvcHPlr7nosaFcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb21wb25lbnRQcm9wcyhwcm9wcywgQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnRQcm9wVHlwZXMgPSBDb21wb25lbnQucHJvcFR5cGVzO1xuXG4gIHZhciBwYXJlbnRQcm9wcyA9IHt9O1xuICB2YXIgY2hpbGRQcm9wcyA9IHt9O1xuXG4gICgwLCBfZW50cmllczIuZGVmYXVsdCkocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBfcmVmWzBdLFxuICAgICAgICBwcm9wVmFsdWUgPSBfcmVmWzFdO1xuXG4gICAgaWYgKGNvbXBvbmVudFByb3BUeXBlc1twcm9wTmFtZV0pIHtcbiAgICAgIHBhcmVudFByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3BhcmVudFByb3BzLCBjaGlsZFByb3BzXTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9zcGxpdENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9lbnRyaWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZW50cmllcy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuZW50cmllcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9lbnRyaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwOi8vZ29vLmdsL1hrQnJqRFxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGVudHJpZXMgPSByZXF1aXJlKCcuLyQub2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBpc0VudW0gICAgPSAkLmlzRW51bTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYgIT0gbnVsbDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGYpIHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIG51bGwpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIHNvbWUga2V5LWNvZGVzIGRlZmluaXRpb24gYW5kIHV0aWxzIGZyb20gY2xvc3VyZS1saWJyYXJ5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbnZhciBLZXlDb2RlID0ge1xuICAvKipcbiAgICogTUFDX0VOVEVSXG4gICAqL1xuICBNQUNfRU5URVI6IDMsXG4gIC8qKlxuICAgKiBCQUNLU1BBQ0VcbiAgICovXG4gIEJBQ0tTUEFDRTogOCxcbiAgLyoqXG4gICAqIFRBQlxuICAgKi9cbiAgVEFCOiA5LFxuICAvKipcbiAgICogTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gICAqL1xuICBOVU1fQ0VOVEVSOiAxMiwgLy8gTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gIC8qKlxuICAgKiBFTlRFUlxuICAgKi9cbiAgRU5URVI6IDEzLFxuICAvKipcbiAgICogU0hJRlRcbiAgICovXG4gIFNISUZUOiAxNixcbiAgLyoqXG4gICAqIENUUkxcbiAgICovXG4gIENUUkw6IDE3LFxuICAvKipcbiAgICogQUxUXG4gICAqL1xuICBBTFQ6IDE4LFxuICAvKipcbiAgICogUEFVU0VcbiAgICovXG4gIFBBVVNFOiAxOSxcbiAgLyoqXG4gICAqIENBUFNfTE9DS1xuICAgKi9cbiAgQ0FQU19MT0NLOiAyMCxcbiAgLyoqXG4gICAqIEVTQ1xuICAgKi9cbiAgRVNDOiAyNyxcbiAgLyoqXG4gICAqIFNQQUNFXG4gICAqL1xuICBTUEFDRTogMzIsXG4gIC8qKlxuICAgKiBQQUdFX1VQXG4gICAqL1xuICBQQUdFX1VQOiAzMywgLy8gYWxzbyBOVU1fTk9SVEhfRUFTVFxuICAvKipcbiAgICogUEFHRV9ET1dOXG4gICAqL1xuICBQQUdFX0RPV046IDM0LCAvLyBhbHNvIE5VTV9TT1VUSF9FQVNUXG4gIC8qKlxuICAgKiBFTkRcbiAgICovXG4gIEVORDogMzUsIC8vIGFsc28gTlVNX1NPVVRIX1dFU1RcbiAgLyoqXG4gICAqIEhPTUVcbiAgICovXG4gIEhPTUU6IDM2LCAvLyBhbHNvIE5VTV9OT1JUSF9XRVNUXG4gIC8qKlxuICAgKiBMRUZUXG4gICAqL1xuICBMRUZUOiAzNywgLy8gYWxzbyBOVU1fV0VTVFxuICAvKipcbiAgICogVVBcbiAgICovXG4gIFVQOiAzOCwgLy8gYWxzbyBOVU1fTk9SVEhcbiAgLyoqXG4gICAqIFJJR0hUXG4gICAqL1xuICBSSUdIVDogMzksIC8vIGFsc28gTlVNX0VBU1RcbiAgLyoqXG4gICAqIERPV05cbiAgICovXG4gIERPV046IDQwLCAvLyBhbHNvIE5VTV9TT1VUSFxuICAvKipcbiAgICogUFJJTlRfU0NSRUVOXG4gICAqL1xuICBQUklOVF9TQ1JFRU46IDQ0LFxuICAvKipcbiAgICogSU5TRVJUXG4gICAqL1xuICBJTlNFUlQ6IDQ1LCAvLyBhbHNvIE5VTV9JTlNFUlRcbiAgLyoqXG4gICAqIERFTEVURVxuICAgKi9cbiAgREVMRVRFOiA0NiwgLy8gYWxzbyBOVU1fREVMRVRFXG4gIC8qKlxuICAgKiBaRVJPXG4gICAqL1xuICBaRVJPOiA0OCxcbiAgLyoqXG4gICAqIE9ORVxuICAgKi9cbiAgT05FOiA0OSxcbiAgLyoqXG4gICAqIFRXT1xuICAgKi9cbiAgVFdPOiA1MCxcbiAgLyoqXG4gICAqIFRIUkVFXG4gICAqL1xuICBUSFJFRTogNTEsXG4gIC8qKlxuICAgKiBGT1VSXG4gICAqL1xuICBGT1VSOiA1MixcbiAgLyoqXG4gICAqIEZJVkVcbiAgICovXG4gIEZJVkU6IDUzLFxuICAvKipcbiAgICogU0lYXG4gICAqL1xuICBTSVg6IDU0LFxuICAvKipcbiAgICogU0VWRU5cbiAgICovXG4gIFNFVkVOOiA1NSxcbiAgLyoqXG4gICAqIEVJR0hUXG4gICAqL1xuICBFSUdIVDogNTYsXG4gIC8qKlxuICAgKiBOSU5FXG4gICAqL1xuICBOSU5FOiA1NyxcbiAgLyoqXG4gICAqIFFVRVNUSU9OX01BUktcbiAgICovXG4gIFFVRVNUSU9OX01BUks6IDYzLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEFcbiAgICovXG4gIEE6IDY1LFxuICAvKipcbiAgICogQlxuICAgKi9cbiAgQjogNjYsXG4gIC8qKlxuICAgKiBDXG4gICAqL1xuICBDOiA2NyxcbiAgLyoqXG4gICAqIERcbiAgICovXG4gIEQ6IDY4LFxuICAvKipcbiAgICogRVxuICAgKi9cbiAgRTogNjksXG4gIC8qKlxuICAgKiBGXG4gICAqL1xuICBGOiA3MCxcbiAgLyoqXG4gICAqIEdcbiAgICovXG4gIEc6IDcxLFxuICAvKipcbiAgICogSFxuICAgKi9cbiAgSDogNzIsXG4gIC8qKlxuICAgKiBJXG4gICAqL1xuICBJOiA3MyxcbiAgLyoqXG4gICAqIEpcbiAgICovXG4gIEo6IDc0LFxuICAvKipcbiAgICogS1xuICAgKi9cbiAgSzogNzUsXG4gIC8qKlxuICAgKiBMXG4gICAqL1xuICBMOiA3NixcbiAgLyoqXG4gICAqIE1cbiAgICovXG4gIE06IDc3LFxuICAvKipcbiAgICogTlxuICAgKi9cbiAgTjogNzgsXG4gIC8qKlxuICAgKiBPXG4gICAqL1xuICBPOiA3OSxcbiAgLyoqXG4gICAqIFBcbiAgICovXG4gIFA6IDgwLFxuICAvKipcbiAgICogUVxuICAgKi9cbiAgUTogODEsXG4gIC8qKlxuICAgKiBSXG4gICAqL1xuICBSOiA4MixcbiAgLyoqXG4gICAqIFNcbiAgICovXG4gIFM6IDgzLFxuICAvKipcbiAgICogVFxuICAgKi9cbiAgVDogODQsXG4gIC8qKlxuICAgKiBVXG4gICAqL1xuICBVOiA4NSxcbiAgLyoqXG4gICAqIFZcbiAgICovXG4gIFY6IDg2LFxuICAvKipcbiAgICogV1xuICAgKi9cbiAgVzogODcsXG4gIC8qKlxuICAgKiBYXG4gICAqL1xuICBYOiA4OCxcbiAgLyoqXG4gICAqIFlcbiAgICovXG4gIFk6IDg5LFxuICAvKipcbiAgICogWlxuICAgKi9cbiAgWjogOTAsXG4gIC8qKlxuICAgKiBNRVRBXG4gICAqL1xuICBNRVRBOiA5MSwgLy8gV0lOX0tFWV9MRUZUXG4gIC8qKlxuICAgKiBXSU5fS0VZX1JJR0hUXG4gICAqL1xuICBXSU5fS0VZX1JJR0hUOiA5MixcbiAgLyoqXG4gICAqIENPTlRFWFRfTUVOVVxuICAgKi9cbiAgQ09OVEVYVF9NRU5VOiA5MyxcbiAgLyoqXG4gICAqIE5VTV9aRVJPXG4gICAqL1xuICBOVU1fWkVSTzogOTYsXG4gIC8qKlxuICAgKiBOVU1fT05FXG4gICAqL1xuICBOVU1fT05FOiA5NyxcbiAgLyoqXG4gICAqIE5VTV9UV09cbiAgICovXG4gIE5VTV9UV086IDk4LFxuICAvKipcbiAgICogTlVNX1RIUkVFXG4gICAqL1xuICBOVU1fVEhSRUU6IDk5LFxuICAvKipcbiAgICogTlVNX0ZPVVJcbiAgICovXG4gIE5VTV9GT1VSOiAxMDAsXG4gIC8qKlxuICAgKiBOVU1fRklWRVxuICAgKi9cbiAgTlVNX0ZJVkU6IDEwMSxcbiAgLyoqXG4gICAqIE5VTV9TSVhcbiAgICovXG4gIE5VTV9TSVg6IDEwMixcbiAgLyoqXG4gICAqIE5VTV9TRVZFTlxuICAgKi9cbiAgTlVNX1NFVkVOOiAxMDMsXG4gIC8qKlxuICAgKiBOVU1fRUlHSFRcbiAgICovXG4gIE5VTV9FSUdIVDogMTA0LFxuICAvKipcbiAgICogTlVNX05JTkVcbiAgICovXG4gIE5VTV9OSU5FOiAxMDUsXG4gIC8qKlxuICAgKiBOVU1fTVVMVElQTFlcbiAgICovXG4gIE5VTV9NVUxUSVBMWTogMTA2LFxuICAvKipcbiAgICogTlVNX1BMVVNcbiAgICovXG4gIE5VTV9QTFVTOiAxMDcsXG4gIC8qKlxuICAgKiBOVU1fTUlOVVNcbiAgICovXG4gIE5VTV9NSU5VUzogMTA5LFxuICAvKipcbiAgICogTlVNX1BFUklPRFxuICAgKi9cbiAgTlVNX1BFUklPRDogMTEwLFxuICAvKipcbiAgICogTlVNX0RJVklTSU9OXG4gICAqL1xuICBOVU1fRElWSVNJT046IDExMSxcbiAgLyoqXG4gICAqIEYxXG4gICAqL1xuICBGMTogMTEyLFxuICAvKipcbiAgICogRjJcbiAgICovXG4gIEYyOiAxMTMsXG4gIC8qKlxuICAgKiBGM1xuICAgKi9cbiAgRjM6IDExNCxcbiAgLyoqXG4gICAqIEY0XG4gICAqL1xuICBGNDogMTE1LFxuICAvKipcbiAgICogRjVcbiAgICovXG4gIEY1OiAxMTYsXG4gIC8qKlxuICAgKiBGNlxuICAgKi9cbiAgRjY6IDExNyxcbiAgLyoqXG4gICAqIEY3XG4gICAqL1xuICBGNzogMTE4LFxuICAvKipcbiAgICogRjhcbiAgICovXG4gIEY4OiAxMTksXG4gIC8qKlxuICAgKiBGOVxuICAgKi9cbiAgRjk6IDEyMCxcbiAgLyoqXG4gICAqIEYxMFxuICAgKi9cbiAgRjEwOiAxMjEsXG4gIC8qKlxuICAgKiBGMTFcbiAgICovXG4gIEYxMTogMTIyLFxuICAvKipcbiAgICogRjEyXG4gICAqL1xuICBGMTI6IDEyMyxcbiAgLyoqXG4gICAqIE5VTUxPQ0tcbiAgICovXG4gIE5VTUxPQ0s6IDE0NCxcbiAgLyoqXG4gICAqIFNFTUlDT0xPTlxuICAgKi9cbiAgU0VNSUNPTE9OOiAxODYsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogREFTSFxuICAgKi9cbiAgREFTSDogMTg5LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEVRVUFMU1xuICAgKi9cbiAgRVFVQUxTOiAxODcsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQ09NTUFcbiAgICovXG4gIENPTU1BOiAxODgsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogUEVSSU9EXG4gICAqL1xuICBQRVJJT0Q6IDE5MCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBTTEFTSFxuICAgKi9cbiAgU0xBU0g6IDE5MSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBBUE9TVFJPUEhFXG4gICAqL1xuICBBUE9TVFJPUEhFOiAxOTIsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogU0lOR0xFX1FVT1RFXG4gICAqL1xuICBTSU5HTEVfUVVPVEU6IDIyMiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBPUEVOX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBPUEVOX1NRVUFSRV9CUkFDS0VUOiAyMTksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQkFDS1NMQVNIXG4gICAqL1xuICBCQUNLU0xBU0g6IDIyMCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBDTE9TRV9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6IDIyMSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBXSU5fS0VZXG4gICAqL1xuICBXSU5fS0VZOiAyMjQsXG4gIC8qKlxuICAgKiBNQUNfRkZfTUVUQVxuICAgKi9cbiAgTUFDX0ZGX01FVEE6IDIyNCwgLy8gRmlyZWZveCAoR2Vja28pIGZpcmVzIHRoaXMgZm9yIHRoZSBtZXRhIGtleSBpbnN0ZWFkIG9mIDkxXG4gIC8qKlxuICAgKiBXSU5fSU1FXG4gICAqL1xuICBXSU5fSU1FOiAyMjlcbn07XG5cbi8qXG4gd2hldGhlciB0ZXh0IGFuZCBtb2RpZmllZCBrZXkgaXMgZW50ZXJlZCBhdCB0aGUgc2FtZSB0aW1lLlxuICovXG5LZXlDb2RlLmlzVGV4dE1vZGlmeWluZ0tleUV2ZW50ID0gZnVuY3Rpb24gaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQoZSkge1xuICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgaWYgKGUuYWx0S2V5ICYmICFlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8XG4gIC8vIEZ1bmN0aW9uIGtleXMgZG9uJ3QgZ2VuZXJhdGUgdGV4dFxuICBrZXlDb2RlID49IEtleUNvZGUuRjEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLkYxMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRoZSBmb2xsb3dpbmcga2V5cyBhcmUgcXVpdGUgaGFybWxlc3MsIGV2ZW4gaW4gY29tYmluYXRpb24gd2l0aFxuICAvLyBDVFJMLCBBTFQgb3IgU0hJRlQuXG4gIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgS2V5Q29kZS5BTFQ6XG4gICAgY2FzZSBLZXlDb2RlLkNBUFNfTE9DSzpcbiAgICBjYXNlIEtleUNvZGUuQ09OVEVYVF9NRU5VOlxuICAgIGNhc2UgS2V5Q29kZS5DVFJMOlxuICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgIGNhc2UgS2V5Q29kZS5FTkQ6XG4gICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICBjYXNlIEtleUNvZGUuSE9NRTpcbiAgICBjYXNlIEtleUNvZGUuSU5TRVJUOlxuICAgIGNhc2UgS2V5Q29kZS5MRUZUOlxuICAgIGNhc2UgS2V5Q29kZS5NQUNfRkZfTUVUQTpcbiAgICBjYXNlIEtleUNvZGUuTUVUQTpcbiAgICBjYXNlIEtleUNvZGUuTlVNTE9DSzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX0NFTlRFUjpcbiAgICBjYXNlIEtleUNvZGUuUEFHRV9ET1dOOlxuICAgIGNhc2UgS2V5Q29kZS5QQUdFX1VQOlxuICAgIGNhc2UgS2V5Q29kZS5QQVVTRTpcbiAgICBjYXNlIEtleUNvZGUuUFJJTlRfU0NSRUVOOlxuICAgIGNhc2UgS2V5Q29kZS5SSUdIVDpcbiAgICBjYXNlIEtleUNvZGUuU0hJRlQ6XG4gICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZOlxuICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZX1JJR0hUOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLypcbiB3aGV0aGVyIGNoYXJhY3RlciBpcyBlbnRlcmVkLlxuICovXG5LZXlDb2RlLmlzQ2hhcmFjdGVyS2V5ID0gZnVuY3Rpb24gaXNDaGFyYWN0ZXJLZXkoa2V5Q29kZSkge1xuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLlpFUk8gJiYga2V5Q29kZSA8PSBLZXlDb2RlLk5JTkUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuTlVNX1pFUk8gJiYga2V5Q29kZSA8PSBLZXlDb2RlLk5VTV9NVUxUSVBMWSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5BICYmIGtleUNvZGUgPD0gS2V5Q29kZS5aKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBTYWZhcmkgc2VuZHMgemVybyBrZXkgY29kZSBmb3Igbm9uLWxhdGluIGNoYXJhY3RlcnMuXG4gIGlmICh3aW5kb3cubmF2aWdhdGlvbi51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT09IC0xICYmIGtleUNvZGUgPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICBjYXNlIEtleUNvZGUuUVVFU1RJT05fTUFSSzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX1BMVVM6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9NSU5VUzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX1BFUklPRDpcbiAgICBjYXNlIEtleUNvZGUuTlVNX0RJVklTSU9OOlxuICAgIGNhc2UgS2V5Q29kZS5TRU1JQ09MT046XG4gICAgY2FzZSBLZXlDb2RlLkRBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkVRVUFMUzpcbiAgICBjYXNlIEtleUNvZGUuQ09NTUE6XG4gICAgY2FzZSBLZXlDb2RlLlBFUklPRDpcbiAgICBjYXNlIEtleUNvZGUuU0xBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkFQT1NUUk9QSEU6XG4gICAgY2FzZSBLZXlDb2RlLlNJTkdMRV9RVU9URTpcbiAgICBjYXNlIEtleUNvZGUuT1BFTl9TUVVBUkVfQlJBQ0tFVDpcbiAgICBjYXNlIEtleUNvZGUuQkFDS1NMQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5DTE9TRV9TUVVBUkVfQlJBQ0tFVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5Q29kZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9rZXlDb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvbnRhaW5zO1xuZnVuY3Rpb24gY29udGFpbnMocm9vdCwgbikge1xuICB2YXIgbm9kZSA9IG47XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRFdmVudExpc3RlbmVyV3JhcDtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyID0gcmVxdWlyZSgnYWRkLWRvbS1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRG9tRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYikge1xuICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAyICovXG4gIHZhciBjYWxsYmFjayA9IF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA/IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuICByZXR1cm4gKDAsIF9hZGREb21FdmVudExpc3RlbmVyMi5kZWZhdWx0KSh0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2FkZEV2ZW50TGlzdGVuZXIuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYWRkRXZlbnRMaXN0ZW5lcjtcblxudmFyIF9FdmVudE9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRPYmplY3QnKTtcblxudmFyIF9FdmVudE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudE9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soZSkge1xuICAgIHZhciBuZSA9IG5ldyBfRXZlbnRPYmplY3QyW1wiZGVmYXVsdFwiXShlKTtcbiAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgbmUpO1xuICB9XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0V2ZW50QmFzZU9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRCYXNlT2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50QmFzZU9iamVjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBldmVudCBvYmplY3QgZm9yIGRvbVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG52YXIgVFJVRSA9IHRydWU7XG52YXIgRkFMU0UgPSBmYWxzZTtcbnZhciBjb21tb25Qcm9wcyA9IFsnYWx0S2V5JywgJ2J1YmJsZXMnLCAnY2FuY2VsYWJsZScsICdjdHJsS2V5JywgJ2N1cnJlbnRUYXJnZXQnLCAnZXZlbnRQaGFzZScsICdtZXRhS2V5JywgJ3NoaWZ0S2V5JywgJ3RhcmdldCcsICd0aW1lU3RhbXAnLCAndmlldycsICd0eXBlJ107XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHcpIHtcbiAgcmV0dXJuIHcgPT09IG51bGwgfHwgdyA9PT0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnROb3JtYWxpemVycyA9IFt7XG4gIHJlZzogL15rZXkvLFxuICBwcm9wczogWydjaGFyJywgJ2NoYXJDb2RlJywgJ2tleScsICdrZXlDb2RlJywgJ3doaWNoJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChldmVudC53aGljaCkpIHtcbiAgICAgIGV2ZW50LndoaWNoID0gIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNoYXJDb2RlKSA/IG5hdGl2ZUV2ZW50LmNoYXJDb2RlIDogbmF0aXZlRXZlbnQua2V5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWV0YUtleSB0byBub24tTWFjIGJyb3dzZXJzICh1c2UgY3RybCBmb3IgUEMgJ3MgYW5kIE1ldGEgZm9yIE1hY3MpXG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQubWV0YUtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL150b3VjaC8sXG4gIHByb3BzOiBbJ3RvdWNoZXMnLCAnY2hhbmdlZFRvdWNoZXMnLCAndGFyZ2V0VG91Y2hlcyddXG59LCB7XG4gIHJlZzogL15oYXNoY2hhbmdlJC8sXG4gIHByb3BzOiBbJ25ld1VSTCcsICdvbGRVUkwnXVxufSwge1xuICByZWc6IC9eZ2VzdHVyZWNoYW5nZSQvaSxcbiAgcHJvcHM6IFsncm90YXRpb24nLCAnc2NhbGUnXVxufSwge1xuICByZWc6IC9eKG1vdXNld2hlZWx8RE9NTW91c2VTY3JvbGwpJC8sXG4gIHByb3BzOiBbXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWCA9IHZvaWQgMDtcbiAgICB2YXIgZGVsdGFZID0gdm9pZCAwO1xuICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcbiAgICB2YXIgd2hlZWxEZWx0YSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGE7XG4gICAgdmFyIGF4aXMgPSBuYXRpdmVFdmVudC5heGlzO1xuICAgIHZhciB3aGVlbERlbHRhWSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFZO1xuICAgIHZhciB3aGVlbERlbHRhWCA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFYO1xuICAgIHZhciBkZXRhaWwgPSBuYXRpdmVFdmVudC5kZXRhaWw7XG5cbiAgICAvLyBpZS93ZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSB3aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIGdlY2tvXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgLy8gcHJlc3MgY29udHJvbCBlLmRldGFpbCA9PSAxIGVsc2UgZS5kZXRhaWwgPT0gM1xuICAgICAgZGVsdGEgPSAwIC0gKGRldGFpbCAlIDMgPT09IDAgPyBkZXRhaWwgLyAzIDogZGV0YWlsKTtcbiAgICB9XG5cbiAgICAvLyBHZWNrb1xuICAgIGlmIChheGlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChheGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgZGVsdGFYID0gMCAtIGRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSBldmVudC5WRVJUSUNBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVkgPSB3aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKHdoZWVsRGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWCA9IC0xICogd2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8g6buY6K6kIGRlbHRhWSAoaWUpXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWCBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFYXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVggPSBkZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFZXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGEgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9ebW91c2V8Y29udGV4dG1lbnV8Y2xpY2t8bXNwb2ludGVyfCheRE9NTW91c2VTY3JvbGwkKS9pLFxuICBwcm9wczogWydidXR0b25zJywgJ2NsaWVudFgnLCAnY2xpZW50WScsICdidXR0b24nLCAnb2Zmc2V0WCcsICdyZWxhdGVkVGFyZ2V0JywgJ3doaWNoJywgJ2Zyb21FbGVtZW50JywgJ3RvRWxlbWVudCcsICdvZmZzZXRZJywgJ3BhZ2VYJywgJ3BhZ2VZJywgJ3NjcmVlblgnLCAnc2NyZWVuWSddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZXZlbnREb2MgPSB2b2lkIDA7XG4gICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICB2YXIgYm9keSA9IHZvaWQgMDtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBidXR0b24gPSBuYXRpdmVFdmVudC5idXR0b247XG5cbiAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgaWYgKHRhcmdldCAmJiBpc051bGxPclVuZGVmaW5lZChldmVudC5wYWdlWCkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNsaWVudFgpKSB7XG4gICAgICBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgYm9keSA9IGV2ZW50RG9jLmJvZHk7XG4gICAgICBldmVudC5wYWdlWCA9IG5hdGl2ZUV2ZW50LmNsaWVudFggKyAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50TGVmdCB8fCBib2R5ICYmIGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgIGV2ZW50LnBhZ2VZID0gbmF0aXZlRXZlbnQuY2xpZW50WSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMCk7XG4gICAgfVxuXG4gICAgLy8gd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG4gICAgLy8gZG8gbm90IHVzZSBidXR0b25cbiAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYnV0dG9uICYgMSkge1xuICAgICAgICBldmVudC53aGljaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDIpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAzO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVsYXRlZFRhcmdldCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LmZyb21FbGVtZW50KSB7XG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQuZnJvbUVsZW1lbnQgPT09IHRhcmdldCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIHJldFRydWUoKSB7XG4gIHJldHVybiBUUlVFO1xufVxuXG5mdW5jdGlvbiByZXRGYWxzZSgpIHtcbiAgcmV0dXJuIEZBTFNFO1xufVxuXG5mdW5jdGlvbiBEb21FdmVudE9iamVjdChuYXRpdmVFdmVudCkge1xuICB2YXIgdHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGU7XG5cbiAgdmFyIGlzTmF0aXZlID0gdHlwZW9mIG5hdGl2ZUV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF0aXZlRXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbic7XG5cbiAgX0V2ZW50QmFzZU9iamVjdDJbXCJkZWZhdWx0XCJdLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIC8vIGluIGNhc2UgZG9tIGV2ZW50IGhhcyBiZWVuIG1hcmsgYXMgZGVmYXVsdCBwcmV2ZW50ZWQgYnkgbG93ZXIgZG9tIG5vZGVcbiAgdmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IHJldEZhbHNlO1xuICBpZiAoJ2RlZmF1bHRQcmV2ZW50ZWQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgnZ2V0UHJldmVudERlZmF1bHQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjkxMTUxXG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZ2V0UHJldmVudERlZmF1bHQoKSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgncmV0dXJuVmFsdWUnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQucmV0dXJuVmFsdWUgPT09IEZBTFNFID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9XG5cbiAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgdmFyIGZpeEZucyA9IFtdO1xuICB2YXIgZml4Rm4gPSB2b2lkIDA7XG4gIHZhciBsID0gdm9pZCAwO1xuICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgdmFyIHByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KCk7XG5cbiAgZXZlbnROb3JtYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChub3JtYWxpemVyKSB7XG4gICAgaWYgKHR5cGUubWF0Y2gobm9ybWFsaXplci5yZWcpKSB7XG4gICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChub3JtYWxpemVyLnByb3BzKTtcbiAgICAgIGlmIChub3JtYWxpemVyLmZpeCkge1xuICAgICAgICBmaXhGbnMucHVzaChub3JtYWxpemVyLmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsID0gcHJvcHMubGVuZ3RoO1xuXG4gIC8vIGNsb25lIHByb3BlcnRpZXMgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICB3aGlsZSAobCkge1xuICAgIHByb3AgPSBwcm9wc1stLWxdO1xuICAgIHRoaXNbcHJvcF0gPSBuYXRpdmVFdmVudFtwcm9wXTtcbiAgfVxuXG4gIC8vIGZpeCB0YXJnZXQgcHJvcGVydHksIGlmIG5lY2Vzc2FyeVxuICBpZiAoIXRoaXMudGFyZ2V0ICYmIGlzTmF0aXZlKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50OyAvLyBzcmNFbGVtZW50IG1pZ2h0IG5vdCBiZSBkZWZpbmVkIGVpdGhlclxuICB9XG5cbiAgLy8gY2hlY2sgaWYgdGFyZ2V0IGlzIGEgdGV4dCBub2RlIChzYWZhcmkpXG4gIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGwgPSBmaXhGbnMubGVuZ3RoO1xuXG4gIHdoaWxlIChsKSB7XG4gICAgZml4Rm4gPSBmaXhGbnNbLS1sXTtcbiAgICBmaXhGbih0aGlzLCBuYXRpdmVFdmVudCk7XG4gIH1cblxuICB0aGlzLnRpbWVTdGFtcCA9IG5hdGl2ZUV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufVxuXG52YXIgRXZlbnRCYXNlT2JqZWN0UHJvdG8gPSBfRXZlbnRCYXNlT2JqZWN0MltcImRlZmF1bHRcIl0ucHJvdG90eXBlO1xuXG4oMCwgX29iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKShEb21FdmVudE9iamVjdC5wcm90b3R5cGUsIEV2ZW50QmFzZU9iamVjdFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBEb21FdmVudE9iamVjdCxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgcHJldmVudERlZmF1bHQgZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gRkFMU0UgKElFKVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IEZBTFNFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7XG4gIH0sXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHN0b3BQcm9wYWdhdGlvbiBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgY2FuY2VsQnViYmxlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBUUlVFIChJRSlcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gVFJVRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRG9tRXZlbnRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAaWdub3JlXG4gKiBiYXNlIGV2ZW50IG9iamVjdCBmb3IgY3VzdG9tIGFuZCBkb20gZXZlbnQuXG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcbiAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG4gICAgLy8gZml4ZWQgMS4yXG4gICAgLy8gY2FsbCBzdG9wUHJvcGFnYXRpb24gaW1wbGljaXRseVxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudEJhc2VPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfRXZlbnQgPSByZXF1aXJlKCcuL0V2ZW50Jyk7XG5cbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnQpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMgPSByZXF1aXJlKCdjb21wb25lbnQtY2xhc3NlcycpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50Q2xhc3Nlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IF9FdmVudDIuZGVmYXVsdC5lbmRFdmVudHMubGVuZ3RoICE9PSAwO1xuXG5cbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICB2YXIgcmV0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgaWYgKHJldCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSkge1xuICBpZiAoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQpIHtcbiAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgdGltZSA9IE1hdGgubWF4KHRyYW5zaXRpb25EdXJhdGlvbiArIHRyYW5zaXRpb25EZWxheSwgYW5pbWF0aW9uRHVyYXRpb24gKyBhbmltYXRpb25EZWxheSk7XG4gICAgLy8gc29tZXRpbWVzLCBicm93c2VyIGJ1Z1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSkge1xuICBpZiAobm9kZS5yY0VuZEFuaW1UaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KG5vZGUucmNFbmRBbmltVGltZW91dCk7XG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG52YXIgY3NzQW5pbWF0aW9uID0gZnVuY3Rpb24gY3NzQW5pbWF0aW9uKG5vZGUsIHRyYW5zaXRpb25OYW1lLCBlbmRDYWxsYmFjaykge1xuICB2YXIgbmFtZUlzT2JqID0gKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJhbnNpdGlvbk5hbWUpKSA9PT0gJ29iamVjdCc7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5uYW1lIDogdHJhbnNpdGlvbk5hbWU7XG4gIHZhciBhY3RpdmVDbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5hY3RpdmUgOiB0cmFuc2l0aW9uTmFtZSArICctYWN0aXZlJztcbiAgdmFyIGVuZCA9IGVuZENhbGxiYWNrO1xuICB2YXIgc3RhcnQgPSB2b2lkIDA7XG4gIHZhciBhY3RpdmUgPSB2b2lkIDA7XG4gIHZhciBub2RlQ2xhc3NlcyA9ICgwLCBfY29tcG9uZW50Q2xhc3NlczIuZGVmYXVsdCkobm9kZSk7XG5cbiAgaWYgKGVuZENhbGxiYWNrICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbmRDYWxsYmFjaykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZW5kID0gZW5kQ2FsbGJhY2suZW5kO1xuICAgIHN0YXJ0ID0gZW5kQ2FsbGJhY2suc3RhcnQ7XG4gICAgYWN0aXZlID0gZW5kQ2FsbGJhY2suYWN0aXZlO1xuICB9XG5cbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICBfRXZlbnQyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGVDbGFzc2VzLmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoYWN0aXZlLCAwKTtcbiAgICB9XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgICAvLyAzMG1zIGZvciBmaXJlZm94XG4gIH0sIDMwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgX0V2ZW50Mi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBfRXZlbnQyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNzc0FuaW1hdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jc3NBbmltYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25FbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfSxcblxuICBhbmltYXRpb25lbmQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBFVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBFVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgaWYgKEVWRU5UX05BTUVfTUFQLmhhc093blByb3BlcnR5KGJhc2VFdmVudE5hbWUpKSB7XG4gICAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG5cbiAgZW5kRXZlbnRzOiBlbmRFdmVudHMsXG5cbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNpdGlvbkV2ZW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9FdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnRyeSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbn0gY2F0Y2ggKGVycikge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdjb21wb25lbnQtaW5kZXhvZicpO1xufVxuXG4vKipcbiAqIFdoaXRlc3BhY2UgcmVnZXhwLlxuICovXG5cbnZhciByZSA9IC9cXHMrLztcblxuLyoqXG4gKiB0b1N0cmluZyByZWZlcmVuY2UuXG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXcmFwIGBlbGAgaW4gYSBgQ2xhc3NMaXN0YC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpe1xuICByZXR1cm4gbmV3IENsYXNzTGlzdChlbCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgQ2xhc3NMaXN0IGZvciBgZWxgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIENsYXNzTGlzdChlbCkge1xuICBpZiAoIWVsIHx8ICFlbC5ub2RlVHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBET00gZWxlbWVudCByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTtcbiAgfVxuICB0aGlzLmVsID0gZWw7XG4gIHRoaXMubGlzdCA9IGVsLmNsYXNzTGlzdDtcbn1cblxuLyoqXG4gKiBBZGQgY2xhc3MgYG5hbWVgIGlmIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihuYW1lKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICB0aGlzLmxpc3QuYWRkKG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xuICBpZiAoIX5pKSBhcnIucHVzaChuYW1lKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIGBuYW1lYCB3aGVuIHByZXNlbnQsIG9yXG4gKiBwYXNzIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHJlbW92ZVxuICogYW55IHdoaWNoIG1hdGNoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuICBpZiAoJ1tvYmplY3QgUmVnRXhwXScgPT0gdG9TdHJpbmcuY2FsbChuYW1lKSkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZU1hdGNoaW5nKG5hbWUpO1xuICB9XG5cbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICB0aGlzLmxpc3QucmVtb3ZlKG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xuICBpZiAofmkpIGFyci5zcGxpY2UoaSwgMSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgY2xhc3NlcyBtYXRjaGluZyBgcmVgLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmVNYXRjaGluZyA9IGZ1bmN0aW9uKHJlKXtcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmUudGVzdChhcnJbaV0pKSB7XG4gICAgICB0aGlzLnJlbW92ZShhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlIGNsYXNzIGBuYW1lYCwgY2FuIGZvcmNlIHN0YXRlIHZpYSBgZm9yY2VgLlxuICpcbiAqIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgY2xhc3NMaXN0LCBidXQgZG8gbm90IHN1cHBvcnQgYGZvcmNlYCB5ZXQsXG4gKiB0aGUgbWlzdGFrZSB3aWxsIGJlIGRldGVjdGVkIGFuZCBjb3JyZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2VcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihuYW1lLCBmb3JjZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgICAgaWYgKGZvcmNlICE9PSB0aGlzLmxpc3QudG9nZ2xlKG5hbWUsIGZvcmNlKSkge1xuICAgICAgICB0aGlzLmxpc3QudG9nZ2xlKG5hbWUpOyAvLyB0b2dnbGUgYWdhaW4gdG8gY29ycmVjdFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3QudG9nZ2xlKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgY2xhc3Nlcy5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBjbGFzc05hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcbiAgdmFyIHN0ciA9IGNsYXNzTmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIHZhciBhcnIgPSBzdHIuc3BsaXQocmUpO1xuICBpZiAoJycgPT09IGFyclswXSkgYXJyLnNoaWZ0KCk7XG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGNsYXNzIGBuYW1lYCBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuaGFzID1cbkNsYXNzTGlzdC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHRoaXMubGlzdFxuICAgID8gdGhpcy5saXN0LmNvbnRhaW5zKG5hbWUpXG4gICAgOiAhISB+aW5kZXgodGhpcy5hcnJheSgpLCBuYW1lKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcG9uZW50LWNsYXNzZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcG9uZW50LWluZGV4b2YvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQXJyYXk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG4gIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldC5wdXNoKGMpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi90b0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9kb21BbGlnbiA9IHJlcXVpcmUoJ2RvbS1hbGlnbicpO1xuXG52YXIgX2RvbUFsaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbUFsaWduKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi9hZGRFdmVudExpc3RlbmVyJyk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRFdmVudExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vL2ltcG9ydCBpc1dpbmRvdyBmcm9tICcuL2lzV2luZG93JztcblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8qIGVzbGludCBuby1lcS1udWxsOiAwICovXG4gIC8qIGVzbGludCBlcWVxZXE6IDAgKi9cbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBidWZmZXIoZm4sIG1zKSB7XG4gIHZhciB0aW1lciA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyRm4oKSB7XG4gICAgY2xlYXIoKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgfVxuXG4gIGJ1ZmZlckZuLmNsZWFyID0gY2xlYXI7XG5cbiAgcmV0dXJuIGJ1ZmZlckZuO1xufVxuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWxpZ24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFsaWduKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxpZ24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMucmVzaXplSGFuZGxlcikge1xuICAgICAgICBfdGhpcy5idWZmZXJNb25pdG9yID0gYnVmZmVyKF90aGlzLmZvcmNlQWxpZ24sIF90aGlzLnByb3BzLm1vbml0b3JCdWZmZXJUaW1lKTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkod2luZG93LCAncmVzaXplJywgX3RoaXMuYnVmZmVyTW9uaXRvcik7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucmVzaXplSGFuZGxlcikge1xuICAgICAgICBfdGhpcy5idWZmZXJNb25pdG9yLmNsZWFyKCk7XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmZvcmNlQWxpZ24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcyk7XG4gICAgICAgIHByb3BzLm9uQWxpZ24oc291cmNlLCAoMCwgX2RvbUFsaWduMi5kZWZhdWx0KShzb3VyY2UsIHByb3BzLnRhcmdldCgpLCBwcm9wcy5hbGlnbikpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQWxpZ24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAvLyBpZiBwYXJlbnQgcmVmIG5vdCBhdHRhY2hlZCAuLi4uIHVzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxuICAgIHRoaXMuZm9yY2VBbGlnbigpO1xuICAgIGlmICghcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcmVBbGlnbiA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkIHx8IHByZXZQcm9wcy5hbGlnbiAhPT0gcHJvcHMuYWxpZ24pIHtcbiAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGFzdFRhcmdldCA9IHByZXZQcm9wcy50YXJnZXQoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBwcm9wcy50YXJnZXQoKTtcbiAgICAgICAgaWYgKGlzV2luZG93KGxhc3RUYXJnZXQpICYmIGlzV2luZG93KGN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgcmVBbGlnbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RUYXJnZXQgIT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZUFsaWduKSB7XG4gICAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuUHJvcHMgPSBfcHJvcHMuY2hpbGRyZW5Qcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjaGlsZHJlblByb3BzKSB7XG4gICAgICAgIGlmIChjaGlsZHJlblByb3BzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgbmV3UHJvcHNbcHJvcF0gPSB0aGlzLnByb3BzW2NoaWxkcmVuUHJvcHNbcHJvcF1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH07XG5cbiAgcmV0dXJuIEFsaWduO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQWxpZ24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlblByb3BzOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgYWxpZ246IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRhcmdldDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbkFsaWduOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG1vbml0b3JCdWZmZXJUaW1lOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogX3JlYWN0LlByb3BUeXBlcy5hbnlcbn07XG5BbGlnbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhcmdldDogZnVuY3Rpb24gdGFyZ2V0KCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH0sXG4gIG9uQWxpZ246IGZ1bmN0aW9uIG9uQWxpZ24oKSB7fSxcblxuICBtb25pdG9yQnVmZmVyVGltZTogNTAsXG4gIG1vbml0b3JXaW5kb3dSZXNpemU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG47XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFsaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL0FsaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudCA9IHJlcXVpcmUoJy4vZ2V0T2Zmc2V0UGFyZW50Jyk7XG5cbnZhciBfZ2V0T2Zmc2V0UGFyZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE9mZnNldFBhcmVudCk7XG5cbnZhciBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50ID0gcmVxdWlyZSgnLi9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQnKTtcblxudmFyIF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KTtcblxudmFyIF9hZGp1c3RGb3JWaWV3cG9ydCA9IHJlcXVpcmUoJy4vYWRqdXN0Rm9yVmlld3BvcnQnKTtcblxudmFyIF9hZGp1c3RGb3JWaWV3cG9ydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGp1c3RGb3JWaWV3cG9ydCk7XG5cbnZhciBfZ2V0UmVnaW9uID0gcmVxdWlyZSgnLi9nZXRSZWdpb24nKTtcblxudmFyIF9nZXRSZWdpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UmVnaW9uKTtcblxudmFyIF9nZXRFbEZ1dHVyZVBvcyA9IHJlcXVpcmUoJy4vZ2V0RWxGdXR1cmVQb3MnKTtcblxudmFyIF9nZXRFbEZ1dHVyZVBvczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRFbEZ1dHVyZVBvcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gaHR0cDovL3lpbWluZ2hlLml0ZXllLmNvbS9ibG9nLzExMjQ3MjBcblxuLyoqXG4gKiBhbGlnbiBkb20gbm9kZSBmbGV4aWJseVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5mdW5jdGlvbiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0O1xufVxuXG5mdW5jdGlvbiBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0ID4gdmlzaWJsZVJlY3QucmlnaHQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoIDwgdmlzaWJsZVJlY3QubGVmdDtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA+IHZpc2libGVSZWN0LmJvdHRvbSB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPCB2aXNpYmxlUmVjdC50b3A7XG59XG5cbmZ1bmN0aW9uIGlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0gKDAsIF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyWydkZWZhdWx0J10pKHRhcmdldCk7XG4gIHZhciB0YXJnZXRSZWdpb24gPSAoMCwgX2dldFJlZ2lvbjJbJ2RlZmF1bHQnXSkodGFyZ2V0KTtcblxuICByZXR1cm4gIXZpc2libGVSZWN0IHx8IHRhcmdldFJlZ2lvbi5sZWZ0ICsgdGFyZ2V0UmVnaW9uLndpZHRoIDw9IHZpc2libGVSZWN0LmxlZnQgfHwgdGFyZ2V0UmVnaW9uLnRvcCArIHRhcmdldFJlZ2lvbi5oZWlnaHQgPD0gdmlzaWJsZVJlY3QudG9wIHx8IHRhcmdldFJlZ2lvbi5sZWZ0ID49IHZpc2libGVSZWN0LnJpZ2h0IHx8IHRhcmdldFJlZ2lvbi50b3AgPj0gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBmbGlwKHBvaW50cywgcmVnLCBtYXApIHtcbiAgdmFyIHJldCA9IFtdO1xuICBfdXRpbHMyWydkZWZhdWx0J10uZWFjaChwb2ludHMsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0LnB1c2gocC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtYXBbbV07XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmxpcE9mZnNldChvZmZzZXQsIGluZGV4KSB7XG4gIG9mZnNldFtpbmRleF0gPSAtb2Zmc2V0W2luZGV4XTtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldChzdHIsIG9mZnNldExlbikge1xuICB2YXIgbiA9IHZvaWQgMDtcbiAgaWYgKC8lJC8udGVzdChzdHIpKSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpLCAxMCkgLyAxMDAgKiBvZmZzZXRMZW47XG4gIH0gZWxzZSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ciwgMTApO1xuICB9XG4gIHJldHVybiBuIHx8IDA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsKSB7XG4gIG9mZnNldFswXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzBdLCBlbC53aWR0aCk7XG4gIG9mZnNldFsxXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzFdLCBlbC5oZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBkb21BbGlnbihlbCwgcmVmTm9kZSwgYWxpZ24pIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gIHZhciB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgb3ZlcmZsb3cgPSBhbGlnbi5vdmVyZmxvdztcbiAgdmFyIHRhcmdldCA9IGFsaWduLnRhcmdldCB8fCByZWZOb2RlO1xuICB2YXIgc291cmNlID0gYWxpZ24uc291cmNlIHx8IGVsO1xuICBvZmZzZXQgPSBbXS5jb25jYXQob2Zmc2V0KTtcbiAgdGFyZ2V0T2Zmc2V0ID0gW10uY29uY2F0KHRhcmdldE9mZnNldCk7XG4gIG92ZXJmbG93ID0gb3ZlcmZsb3cgfHwge307XG4gIHZhciBuZXdPdmVyZmxvd0NmZyA9IHt9O1xuICB2YXIgZmFpbCA9IDA7XG4gIC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuICB2YXIgdmlzaWJsZVJlY3QgPSAoMCwgX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudDJbJ2RlZmF1bHQnXSkoc291cmNlKTtcbiAgLy8g5b2T5YmN6IqC54K55omA5Y2g55qE5Yy65Z+fLCBsZWZ0L3RvcC93aWR0aC9oZWlnaHRcbiAgdmFyIGVsUmVnaW9uID0gKDAsIF9nZXRSZWdpb24yWydkZWZhdWx0J10pKHNvdXJjZSk7XG4gIC8vIOWPgueFp+iKgueCueaJgOWNoOeahOWMuuWfnywgbGVmdC90b3Avd2lkdGgvaGVpZ2h0XG4gIHZhciByZWZOb2RlUmVnaW9uID0gKDAsIF9nZXRSZWdpb24yWydkZWZhdWx0J10pKHRhcmdldCk7XG4gIC8vIOWwhiBvZmZzZXQg6L2s5o2i5oiQ5pWw5YC877yM5pSv5oyB55m+5YiG5q+UXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgcmVmTm9kZVJlZ2lvbik7XG4gIC8vIOW9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICB2YXIgZWxGdXR1cmVQb3MgPSAoMCwgX2dldEVsRnV0dXJlUG9zMlsnZGVmYXVsdCddKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7XG4gIC8vIOW9k+WJjeiKgueCueWwhuimgeaJgOWkhOeahOWMuuWfn1xuICB2YXIgbmV3RWxSZWdpb24gPSBfdXRpbHMyWydkZWZhdWx0J10ubWVyZ2UoZWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcblxuICB2YXIgaXNUYXJnZXROb3RPdXRPZlZpc2libGUgPSAhaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCk7XG5cbiAgLy8g5aaC5p6c5Y+v6KeG5Yy65Z+f5LiN6IO95a6M5YWo5pS+572u5b2T5YmN6IqC54K55pe25YWB6K646LCD5pW0XG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSAmJiBpc1RhcmdldE5vdE91dE9mVmlzaWJsZSkge1xuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RYKSB7XG4gICAgICAvLyDlpoLmnpzmqKrlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bbHJdL2lnLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyWydkZWZhdWx0J10pKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBuZXdQb2ludHMsIG5ld09mZnNldCwgbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWChuZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFkpIHtcbiAgICAgIC8vIOWmguaenOe6teWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bdGJdL2lnLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuICAgICAgICB2YXIgX25ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAxKTtcbiAgICAgICAgdmFyIF9uZXdFbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyWydkZWZhdWx0J10pKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBfbmV3UG9pbnRzLCBfbmV3T2Zmc2V0LCBfbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWmguaenOWksei0pe+8jOmHjeaWsOiuoeeul+W9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyWydkZWZhdWx0J10pKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgICAgIF91dGlsczJbJ2RlZmF1bHQnXS5taXgobmV3RWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6Xlj43kuIvlkI7nmoTkvY3nva7mmK/lkKblj6/ku6XmlL7kuIvkuoZcbiAgICAvLyDlpoLmnpzku43nhLbmlL7kuI3kuIvlj6rmnInmjIflrprkuoblj6/ku6XosIPmlbTlvZPliY3mlrnlkJHmiY3osIPmlbRcbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RYID0gb3ZlcmZsb3cuYWRqdXN0WCAmJiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpO1xuXG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSA9IG92ZXJmbG93LmFkanVzdFkgJiYgaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcblxuICAgIC8vIOehruWunuimgeiwg+aVtO+8jOeUmuiHs+WPr+iDveS8muiwg+aVtOmrmOW6puWuveW6plxuICAgIGlmIChuZXdPdmVyZmxvd0NmZy5hZGp1c3RYIHx8IG5ld092ZXJmbG93Q2ZnLmFkanVzdFkpIHtcbiAgICAgIG5ld0VsUmVnaW9uID0gKDAsIF9hZGp1c3RGb3JWaWV3cG9ydDJbJ2RlZmF1bHQnXSkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5lZWQganVkZ2UgdG8gaW4gY2FzZSBzZXQgZml4ZWQgd2l0aCBpbiBjc3Mgb24gaGVpZ2h0IGF1dG8gZWxlbWVudFxuICBpZiAobmV3RWxSZWdpb24ud2lkdGggIT09IGVsUmVnaW9uLndpZHRoKSB7XG4gICAgX3V0aWxzMlsnZGVmYXVsdCddLmNzcyhzb3VyY2UsICd3aWR0aCcsIF91dGlsczJbJ2RlZmF1bHQnXS53aWR0aChzb3VyY2UpICsgbmV3RWxSZWdpb24ud2lkdGggLSBlbFJlZ2lvbi53aWR0aCk7XG4gIH1cblxuICBpZiAobmV3RWxSZWdpb24uaGVpZ2h0ICE9PSBlbFJlZ2lvbi5oZWlnaHQpIHtcbiAgICBfdXRpbHMyWydkZWZhdWx0J10uY3NzKHNvdXJjZSwgJ2hlaWdodCcsIF91dGlsczJbJ2RlZmF1bHQnXS5oZWlnaHQoc291cmNlKSArIG5ld0VsUmVnaW9uLmhlaWdodCAtIGVsUmVnaW9uLmhlaWdodCk7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xOTBcbiAgLy8g55u45a+55LqO5bGP5bmV5L2N572u5rKh5Y+Y77yM6ICMIGxlZnQvdG9wIOWPmOS6hlxuICAvLyDkvovlpoIgPGRpdiAncmVsYXRpdmUnPjxlbCBhYnNvbHV0ZT48L2Rpdj5cbiAgX3V0aWxzMlsnZGVmYXVsdCddLm9mZnNldChzb3VyY2UsIHtcbiAgICBsZWZ0OiBuZXdFbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogbmV3RWxSZWdpb24udG9wXG4gIH0sIHtcbiAgICB1c2VDc3NSaWdodDogYWxpZ24udXNlQ3NzUmlnaHQsXG4gICAgdXNlQ3NzQm90dG9tOiBhbGlnbi51c2VDc3NCb3R0b20sXG4gICAgdXNlQ3NzVHJhbnNmb3JtOiBhbGlnbi51c2VDc3NUcmFuc2Zvcm1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb2ludHM6IHBvaW50cyxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldCxcbiAgICBvdmVyZmxvdzogbmV3T3ZlcmZsb3dDZmdcbiAgfTtcbn1cblxuZG9tQWxpZ24uX19nZXRPZmZzZXRQYXJlbnQgPSBfZ2V0T2Zmc2V0UGFyZW50MlsnZGVmYXVsdCddO1xuXG5kb21BbGlnbi5fX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyWydkZWZhdWx0J107XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRvbUFsaWduO1xuLyoqXG4gKiAgMjAxMi0wNC0yNiB5aW1pbmdoZUBnbWFpbC5jb21cbiAqICAgLSDkvJjljJbmmbrog73lr7npvZDnrpfms5VcbiAqICAgLSDmhY7nlKggcmVzaXplWFhcbiAqXG4gKiAgMjAxMS0wNy0xMyB5aW1pbmdoZUBnbWFpbC5jb20gbm90ZTpcbiAqICAgLSDlop7liqDmmbrog73lr7npvZDvvIzku6Xlj4rlpKflsI/osIPmlbTpgInpoblcbiAqKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3Byb3BlcnR5VXRpbHMgPSByZXF1aXJlKCcuL3Byb3BlcnR5VXRpbHMnKTtcblxudmFyIFJFX05VTSA9IC9bXFwtK10/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bXFwtK10/XFxkK3wpLy5zb3VyY2U7XG5cbnZhciBnZXRDb21wdXRlZFN0eWxlWCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gZm9yY2UoeCwgeSkge1xuICByZXR1cm4geCArIHk7XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgbmFtZSwgdikge1xuICB2YXIgdmFsdWUgPSB2O1xuICBpZiAoKHR5cGVvZiBuYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuYW1lKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgaSBpbiBuYW1lKSB7XG4gICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBjc3MoZWwsIGksIG5hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgICBlbC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94ID0gdm9pZCAwO1xuICB2YXIgeCA9IHZvaWQgMDtcbiAgdmFyIHkgPSB2b2lkIDA7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gIC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wO1xuXG4gIC8vIEluIElFLCBtb3N0IG9mIHRoZSB0aW1lLCAyIGV4dHJhIHBpeGVscyBhcmUgYWRkZWQgdG8gdGhlIHRvcCBhbmQgbGVmdFxuICAvLyBkdWUgdG8gdGhlIGltcGxpY2l0IDItcGl4ZWwgaW5zZXQgYm9yZGVyLiAgSW4gSUU2LzcgcXVpcmtzIG1vZGUgYW5kXG4gIC8vIElFNiBzdGFuZGFyZHMgbW9kZSwgdGhpcyBib3JkZXIgY2FuIGJlIG92ZXJyaWRkZW4gYnkgc2V0dGluZyB0aGVcbiAgLy8gZG9jdW1lbnQgZWxlbWVudCdzIGJvcmRlciB0byB6ZXJvIC0tIHRodXMsIHdlIGNhbm5vdCByZWx5IG9uIHRoZVxuICAvLyBvZmZzZXQgYWx3YXlzIGJlaW5nIDIgcGl4ZWxzLlxuXG4gIC8vIEluIHF1aXJrcyBtb2RlLCB0aGUgb2Zmc2V0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IHF1ZXJ5aW5nIHRoZSBib2R5J3NcbiAgLy8gY2xpZW50TGVmdC9jbGllbnRUb3AsIGJ1dCBpbiBzdGFuZGFyZHMgbW9kZSwgaXQgaXMgZm91bmQgYnkgcXVlcnlpbmdcbiAgLy8gdGhlIGRvY3VtZW50IGVsZW1lbnQncyBjbGllbnRMZWZ0L2NsaWVudFRvcC4gIFNpbmNlIHdlIGFscmVhZHkgY2FsbGVkXG4gIC8vIGdldENsaWVudEJvdW5kaW5nUmVjdCB3ZSBoYXZlIGFscmVhZHkgZm9yY2VkIGEgcmVmbG93LCBzbyBpdCBpcyBub3RcbiAgLy8gdG9vIGV4cGVuc2l2ZSBqdXN0IHRvIHF1ZXJ5IHRoZW0gYWxsLlxuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgdmFyIG1ldGhvZCA9ICdzY3JvbGwnICsgKHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcbiAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgdmFyIGQgPSB3LmRvY3VtZW50O1xuICAgIC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3Aodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHBvcyA9IGdldENsaWVudFBvc2l0aW9uKGVsKTtcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHBvcy5sZWZ0ICs9IGdldFNjcm9sbExlZnQodyk7XG4gIHBvcy50b3AgKz0gZ2V0U2Nyb2xsVG9wKHcpO1xuICByZXR1cm4gcG9zO1xufVxuXG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAvLyBtdXN0IHVzZSA9PSBmb3IgaWU4XG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudChub2RlKSB7XG4gIGlmIChpc1dpbmRvdyhub2RlKSkge1xuICAgIHJldHVybiBub2RlLmRvY3VtZW50O1xuICB9XG4gIGlmIChub2RlLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbSwgbmFtZSwgY3MpIHtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBjcztcbiAgdmFyIHZhbCA9ICcnO1xuICB2YXIgZCA9IGdldERvY3VtZW50KGVsZW0pO1xuICBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZSB8fCBkLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvNjFcbiAgaWYgKGNvbXB1dGVkU3R5bGUpIHtcbiAgICB2YWwgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgY29tcHV0ZWRTdHlsZVtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBfUkVfTlVNX05PX1BYID0gbmV3IFJlZ0V4cCgnXignICsgUkVfTlVNICsgJykoPyFweClbYS16JV0rJCcsICdpJyk7XG52YXIgUkVfUE9TID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIENVUlJFTlRfU1RZTEUgPSAnY3VycmVudFN0eWxlJztcbnZhciBSVU5USU1FX1NUWUxFID0gJ3J1bnRpbWVTdHlsZSc7XG52YXIgTEVGVCA9ICdsZWZ0JztcbnZhciBQWCA9ICdweCc7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlSUUoZWxlbSwgbmFtZSkge1xuICAvLyBjdXJyZW50U3R5bGUgbWF5YmUgbnVsbFxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzUyMzEuYXNweFxuICB2YXIgcmV0ID0gZWxlbVtDVVJSRU5UX1NUWUxFXSAmJiBlbGVtW0NVUlJFTlRfU1RZTEVdW25hbWVdO1xuXG4gIC8vIOW9kyB3aWR0aC9oZWlnaHQg6K6+572u5Li655m+5YiG5q+U5pe277yM6YCa6L+HIHBpeGVsTGVmdCDmlrnlvI/ovazmjaLnmoQgd2lkdGgvaGVpZ2h0IOWAvFxuICAvLyDkuIDlvIDlp4vlsLHlpITnkIbkuoYhIENVU1RPTV9TVFlMRS5oZWlnaHQsQ1VTVE9NX1NUWUxFLndpZHRoICxjc3NIb29rIOino+WGs0AyMDExLTA4LTE5XG4gIC8vIOWcqCBpZSDkuIvkuI3lr7nvvIzpnIDopoHnm7TmjqXnlKggb2Zmc2V0IOaWueW8j1xuICAvLyBib3JkZXJXaWR0aCDnrYnlgLzkuZ/mnInpl67popjvvIzkvYbogIPomZHliLAgYm9yZGVyV2lkdGgg6K6+5Li655m+5YiG5q+U55qE5qaC546H5b6I5bCP77yM6L+Z6YeM5bCx5LiN6ICD6JmR5LqGXG5cbiAgLy8gRnJvbSB0aGUgYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1xuICAvLyBodHRwOi8vZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDcvMDcvMjcvMTguNTQuMTUvI2NvbW1lbnQtMTAyMjkxXG4gIC8vIElmIHdlJ3JlIG5vdCBkZWFsaW5nIHdpdGggYSByZWd1bGFyIHBpeGVsIG51bWJlclxuICAvLyBidXQgYSBudW1iZXIgdGhhdCBoYXMgYSB3ZWlyZCBlbmRpbmcsIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBwaXhlbHNcbiAgLy8gZXhjbHVkZSBsZWZ0IHJpZ2h0IGZvciByZWxhdGl2aXR5XG4gIGlmIChfUkVfTlVNX05PX1BYLnRlc3QocmV0KSAmJiAhUkVfUE9TLnRlc3QobmFtZSkpIHtcbiAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgICB2YXIgbGVmdCA9IHN0eWxlW0xFRlRdO1xuICAgIHZhciByc0xlZnQgPSBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gcHJldmVudCBmbGFzaGluZyBvZiBjb250ZW50XG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IGVsZW1bQ1VSUkVOVF9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG4gICAgc3R5bGVbTEVGVF0gPSBuYW1lID09PSAnZm9udFNpemUnID8gJzFlbScgOiByZXQgfHwgMDtcbiAgICByZXQgPSBzdHlsZS5waXhlbExlZnQgKyBQWDtcblxuICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICBzdHlsZVtMRUZUXSA9IGxlZnQ7XG5cbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gcnNMZWZ0O1xuICB9XG4gIHJldHVybiByZXQgPT09ICcnID8gJ2F1dG8nIDogcmV0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2V0Q29tcHV0ZWRTdHlsZVggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IF9nZXRDb21wdXRlZFN0eWxlIDogX2dldENvbXB1dGVkU3R5bGVJRTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0RGlyZWN0aW9uKGRpciwgb3B0aW9uKSB7XG4gIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiBvcHRpb24udXNlQ3NzUmlnaHQgPyAncmlnaHQnIDogZGlyO1xuICB9XG4gIHJldHVybiBvcHRpb24udXNlQ3NzQm90dG9tID8gJ2JvdHRvbScgOiBkaXI7XG59XG5cbmZ1bmN0aW9uIG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGRpcikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ3JpZ2h0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICByZXR1cm4gJ2xlZnQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAnYm90dG9tJykge1xuICAgIHJldHVybiAndG9wJztcbiAgfVxufVxuXG4vLyDorr7nva4gZWxlbSDnm7jlr7kgZWxlbS5vd25lckRvY3VtZW50IOeahOWdkOagh1xuZnVuY3Rpb24gc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICAvLyBzZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG4gIGlmIChjc3MoZWxlbSwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIH1cbiAgdmFyIHByZXNldEggPSAtOTk5O1xuICB2YXIgcHJlc2V0ViA9IC05OTk7XG4gIHZhciBob3Jpem9udGFsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ2xlZnQnLCBvcHRpb24pO1xuICB2YXIgdmVydGljYWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbigndG9wJywgb3B0aW9uKTtcbiAgdmFyIG9wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oaG9yaXpvbnRhbFByb3BlcnR5KTtcbiAgdmFyIG9wcG9zaXRlVmVydGljYWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKHZlcnRpY2FsUHJvcGVydHkpO1xuXG4gIGlmIChob3Jpem9udGFsUHJvcGVydHkgIT09ICdsZWZ0Jykge1xuICAgIHByZXNldEggPSA5OTk7XG4gIH1cblxuICBpZiAodmVydGljYWxQcm9wZXJ0eSAhPT0gJ3RvcCcpIHtcbiAgICBwcmVzZXRWID0gOTk5O1xuICB9XG4gIHZhciBvcmlnaW5hbFRyYW5zaXRpb24gPSAnJztcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBvcmlnaW5hbFRyYW5zaXRpb24gPSAoMCwgX3Byb3BlcnR5VXRpbHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5KShlbGVtKSB8fCAnJztcbiAgICAoMCwgX3Byb3BlcnR5VXRpbHMuc2V0VHJhbnNpdGlvblByb3BlcnR5KShlbGVtLCAnbm9uZScpO1xuICB9XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW2hvcml6b250YWxQcm9wZXJ0eV0gPSBwcmVzZXRIICsgJ3B4JztcbiAgfVxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IHByZXNldFYgKyAncHgnO1xuICB9XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIHByZXNldCA9IGtleSA9PT0gJ2xlZnQnID8gcHJlc2V0SCA6IHByZXNldFY7XG4gICAgICB2YXIgb2ZmID0gb3JpZ2luYWxPZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuICAgICAgaWYgKGRpciA9PT0ga2V5KSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCArIG9mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCAtIG9mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpO1xuICAvLyBmb3JjZSByZWxheW91dFxuICBmb3JjZShlbGVtLm9mZnNldFRvcCwgZWxlbS5vZmZzZXRMZWZ0KTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgKDAsIF9wcm9wZXJ0eVV0aWxzLnNldFRyYW5zaXRpb25Qcm9wZXJ0eSkoZWxlbSwgb3JpZ2luYWxUcmFuc2l0aW9uKTtcbiAgfVxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIF9rZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgdmFyIF9kaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oX2tleSwgb3B0aW9uKTtcbiAgICAgIHZhciBfb2ZmID0gb2Zmc2V0W19rZXldIC0gb3JpZ2luYWxPZmZzZXRbX2tleV07XG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCkge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFhZID0gKDAsIF9wcm9wZXJ0eVV0aWxzLmdldFRyYW5zZm9ybVhZKShlbGVtKTtcbiAgdmFyIHJlc3VsdFhZID0geyB4OiBvcmlnaW5hbFhZLngsIHk6IG9yaWdpbmFsWFkueSB9O1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnggPSBvcmlnaW5hbFhZLnggKyBvZmZzZXQubGVmdCAtIG9yaWdpbmFsT2Zmc2V0LmxlZnQ7XG4gIH1cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnkgPSBvcmlnaW5hbFhZLnkgKyBvZmZzZXQudG9wIC0gb3JpZ2luYWxPZmZzZXQudG9wO1xuICB9XG4gICgwLCBfcHJvcGVydHlVdGlscy5zZXRUcmFuc2Zvcm1YWSkoZWxlbSwgcmVzdWx0WFkpO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXQoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgaWYgKG9wdGlvbi51c2VDc3NSaWdodCB8fCBvcHRpb24udXNlQ3NzQm90dG9tKSB7XG4gICAgc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH0gZWxzZSBpZiAob3B0aW9uLnVzZUNzc1RyYW5zZm9ybSAmJiAoMCwgX3Byb3BlcnR5VXRpbHMuZ2V0VHJhbnNmb3JtTmFtZSkoKSBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKSB7XG4gICAgc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7XG5cbiAgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3AgPSB2b2lkIDA7XG4gIHZhciBqID0gdm9pZCAwO1xuICB2YXIgaSA9IHZvaWQgMDtcbiAgZm9yIChqID0gMDsgaiA8IHByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB2b2lkIDA7XG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSAnJyArIHByb3AgKyB3aGljaFtpXSArICdXaWR0aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIGNzc1Byb3ApKSB8fCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBkb21VdGlscyA9IHt9O1xuXG5lYWNoKFsnV2lkdGgnLCAnSGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRvbVV0aWxzWydkb2MnICsgbmFtZV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC8vIGZpcmVmb3ggY2hyb21lIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ8IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgLy8gaWUgc3RhbmRhcmQgbW9kZSA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ+IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgZC5kb2N1bWVudEVsZW1lbnRbJ3Njcm9sbCcgKyBuYW1lXSxcbiAgICAvLyBxdWlya3MgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IOacgOWkp+etieS6juWPr+inhueql+WPo+WkmuS4gOeCue+8n1xuICAgIGQuYm9keVsnc2Nyb2xsJyArIG5hbWVdLCBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXSA9IGZ1bmN0aW9uICh3aW4pIHtcbiAgICAvLyBwYyBicm93c2VyIGluY2x1ZGVzIHNjcm9sbGJhciBpbiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHZhciBwcm9wID0gJ2NsaWVudCcgKyBuYW1lO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTtcbiAgICAvLyDmoIflh4bmqKHlvI/lj5YgZG9jdW1lbnRFbGVtZW50XG4gICAgLy8gYmFja2NvbXBhdCDlj5YgYm9keVxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcblxuLypcbiDlvpfliLDlhYPntKDnmoTlpKflsI/kv6Hmga9cbiBAcGFyYW0gZWxlbVxuIEBwYXJhbSBuYW1lXG4gQHBhcmFtIHtTdHJpbmd9IFtleHRyYV0gICdwYWRkaW5nJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZ1xuICdib3JkZXInIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyXG4gJ21hcmdpbicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXIgKyBtYXJnaW5cbiAqL1xuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXgpIHtcbiAgdmFyIGV4dHJhID0gZXg7XG4gIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMudmlld3BvcnRXaWR0aChlbGVtKSA6IGRvbVV0aWxzLnZpZXdwb3J0SGVpZ2h0KGVsZW0pO1xuICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLmRvY1dpZHRoKGVsZW0pIDogZG9tVXRpbHMuZG9jSGVpZ2h0KGVsZW0pO1xuICB9XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuICB2YXIgYm9yZGVyQm94VmFsdWUgPSBuYW1lID09PSAnd2lkdGgnID8gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0sIGNvbXB1dGVkU3R5bGUpO1xuICB2YXIgY3NzQm94VmFsdWUgPSAwO1xuICBpZiAoYm9yZGVyQm94VmFsdWUgPT09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgLy8gRmFsbCBiYWNrIHRvIGNvbXB1dGVkIHRoZW4gdW4gY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG4gICAgaWYgKGNzc0JveFZhbHVlID09PSBudWxsIHx8IGNzc0JveFZhbHVlID09PSB1bmRlZmluZWQgfHwgTnVtYmVyKGNzc0JveFZhbHVlKSA8IDApIHtcbiAgICAgIGNzc0JveFZhbHVlID0gZWxlbS5zdHlsZVtuYW1lXSB8fCAwO1xuICAgIH1cbiAgICAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuICAgIGNzc0JveFZhbHVlID0gcGFyc2VGbG9hdChjc3NCb3hWYWx1ZSkgfHwgMDtcbiAgfVxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG4gIHZhciBib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3ggPSBib3JkZXJCb3hWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGlzQm9yZGVyQm94O1xuICB2YXIgdmFsID0gYm9yZGVyQm94VmFsdWUgfHwgY3NzQm94VmFsdWU7XG4gIGlmIChleHRyYSA9PT0gQ09OVEVOVF9JTkRFWCkge1xuICAgIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICAgIHJldHVybiB2YWwgLSBnZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlcicsICdwYWRkaW5nJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9IGVsc2UgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIGlmIChleHRyYSA9PT0gQk9SREVSX0lOREVYKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gdmFsICsgKGV4dHJhID09PSBQQURESU5HX0lOREVYID8gLWdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSA6IGdldFBCTVdpZHRoKGVsZW0sIFsnbWFyZ2luJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSk7XG4gIH1cbiAgcmV0dXJuIGNzc0JveFZhbHVlICsgZ2V0UEJNV2lkdGgoZWxlbSwgQk9YX01PREVMUy5zbGljZShleHRyYSksIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbn1cblxudmFyIGNzc1Nob3cgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuLy8gZml4ICMxMTkgOiBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xMTlcbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW47IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgdmFsID0gdm9pZCAwO1xuICB2YXIgZWxlbSA9IGFyZ3NbMF07XG4gIC8vIGluIGNhc2UgZWxlbSBpcyB3aW5kb3dcbiAgLy8gZWxlbS5vZmZzZXRXaWR0aCA9PT0gdW5kZWZpbmVkXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZWFjaChbJ3dpZHRoJywgJ2hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgZG9tVXRpbHNbJ291dGVyJyArIGZpcnN0XSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcblxuICBkb21VdGlsc1tuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCB2KSB7XG4gICAgdmFyIHZhbCA9IHY7XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICAgICAgICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1peCh0bywgZnJvbSkge1xuICBmb3IgKHZhciBpIGluIGZyb20pIHtcbiAgICBpZiAoZnJvbS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdG9baV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5cbnZhciB1dGlscyA9IHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuZG9jdW1lbnQgJiYgbm9kZS5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlO1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgfSxcblxuICBnZXREb2N1bWVudDogZ2V0RG9jdW1lbnQsXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUsIG9wdGlvbiB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcblxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjI7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59O1xuXG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gdXRpbHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUcmFuc2Zvcm1OYW1lID0gZ2V0VHJhbnNmb3JtTmFtZTtcbmV4cG9ydHMuc2V0VHJhbnNpdGlvblByb3BlcnR5ID0gc2V0VHJhbnNpdGlvblByb3BlcnR5O1xuZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHkgPSBnZXRUcmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLmdldFRyYW5zZm9ybVhZID0gZ2V0VHJhbnNmb3JtWFk7XG5leHBvcnRzLnNldFRyYW5zZm9ybVhZID0gc2V0VHJhbnNmb3JtWFk7XG52YXIgdmVuZG9yUHJlZml4ID0gdm9pZCAwO1xuXG52YXIganNDc3NNYXAgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICAvLyBJRSBkaWQgaXQgd3JvbmcgYWdhaW4gLi4uXG4gIG1zOiAnLW1zLScsXG4gIE86ICctby0nXG59O1xuXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXgoKSB7XG4gIGlmICh2ZW5kb3JQcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZW5kb3JQcmVmaXg7XG4gIH1cbiAgdmVuZG9yUHJlZml4ID0gJyc7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZTtcbiAgdmFyIHRlc3RQcm9wID0gJ1RyYW5zZm9ybSc7XG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmVuZG9yUHJlZml4ID0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmVuZG9yUHJlZml4O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gZ2V0VmVuZG9yUHJlZml4KCkgKyAnVHJhbnNpdGlvblByb3BlcnR5JyA6ICd0cmFuc2l0aW9uUHJvcGVydHknO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2Zvcm0nIDogJ3RyYW5zZm9ybSc7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zaXRpb25OYW1lKCk7XG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIGlmIChuYW1lICE9PSAndHJhbnNpdGlvblByb3BlcnR5Jykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNmb3JtTmFtZSgpO1xuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCBub2RlLnN0eWxlW2dldFRyYW5zaXRpb25OYW1lKCldO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1YWShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4geyB4OiBwYXJzZUZsb2F0KG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdLCAwKSwgeTogcGFyc2VGbG9hdChtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSwgMCkgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxuXG52YXIgbWF0cml4MmQgPSAvbWF0cml4XFwoKC4qKVxcKS87XG52YXIgbWF0cml4M2QgPSAvbWF0cml4M2RcXCgoLiopXFwpLztcblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtWFkobm9kZSwgeHkpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICB2YXIgYXJyID0gdm9pZCAwO1xuICAgIHZhciBtYXRjaDJkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDJkKTtcbiAgICBpZiAobWF0Y2gyZCkge1xuICAgICAgbWF0Y2gyZCA9IG1hdGNoMmRbMV07XG4gICAgICBhcnIgPSBtYXRjaDJkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzRdID0geHkueDtcbiAgICAgIGFycls1XSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ21hdHJpeCgnICsgYXJyLmpvaW4oJywnKSArICcpJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaDNkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDNkKVsxXTtcbiAgICAgIGFyciA9IG1hdGNoM2Quc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbMTJdID0geHkueDtcbiAgICAgIGFyclsxM10gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsICdtYXRyaXgzZCgnICsgYXJyLmpvaW4oJywnKSArICcpJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldFRyYW5zZm9ybShub2RlLCAndHJhbnNsYXRlWCgnICsgeHkueCArICdweCkgdHJhbnNsYXRlWSgnICsgeHkueSArICdweCkgdHJhbnNsYXRlWigwKScpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvcHJvcGVydHlVdGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIOW+l+WIsOS8muWvvOiHtOWFg+e0oOaYvuekuuS4jeWFqOeahOelluWFiOWFg+e0oFxuICovXG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmIChfdXRpbHMyWydkZWZhdWx0J10uaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIGllIOi/meS4quS5n+S4jeaYr+WujOWFqOWPr+ihjFxuICAvKlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7b3ZlcmZsb3c6IGhpZGRlblwiPlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7cG9zaXRpb246IHJlbGF0aXZlO1wiIGlkPVwiZDZcIj5cbiAgIOWFg+e0oCA2IOmrmCAxMDBweCDlrr0gNTBweDxici8+XG4gICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgKi9cbiAgLy8gZWxlbWVudC5vZmZzZXRQYXJlbnQgZG9lcyB0aGUgcmlnaHQgdGhpbmcgaW4gaWU3IGFuZCBiZWxvdy4gUmV0dXJuIHBhcmVudCB3aXRoIGxheW91dCFcbiAgLy8gIEluIG90aGVyIGJyb3dzZXJzIGl0IG9ubHkgaW5jbHVkZXMgZWxlbWVudHMgd2l0aCBwb3NpdGlvbiBhYnNvbHV0ZSwgcmVsYXRpdmUgb3JcbiAgLy8gZml4ZWQsIG5vdCBlbGVtZW50cyB3aXRoIG92ZXJmbG93IHNldCB0byBhdXRvIG9yIHNjcm9sbC5cbiAgLy8gICAgICAgIGlmIChVQS5pZSAmJiBpZU1vZGUgPCA4KSB7XG4gIC8vICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAvLyAgICAgICAgfVxuICAvLyDnu5/kuIDnmoQgb2Zmc2V0UGFyZW50IOaWueazlVxuICB2YXIgZG9jID0gX3V0aWxzMlsnZGVmYXVsdCddLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuICB2YXIgcG9zaXRpb25TdHlsZSA9IF91dGlsczJbJ2RlZmF1bHQnXS5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gIHZhciBza2lwU3RhdGljID0gcG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJyB8fCBwb3NpdGlvblN0eWxlID09PSAnYWJzb2x1dGUnO1xuXG4gIGlmICghc2tpcFN0YXRpYykge1xuICAgIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJyA/IG51bGwgOiBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICBmb3IgKHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keTsgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICBwb3NpdGlvblN0eWxlID0gX3V0aWxzMlsnZGVmYXVsdCddLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuICAgIGlmIChwb3NpdGlvblN0eWxlICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGdldE9mZnNldFBhcmVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldE9mZnNldFBhcmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQgPSByZXF1aXJlKCcuL2dldE9mZnNldFBhcmVudCcpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPZmZzZXRQYXJlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICog6I635b6X5YWD57Sg55qE5pi+56S66YOo5YiG55qE5Yy65Z+fXG4gKi9cbmZ1bmN0aW9uIGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IHtcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiBJbmZpbml0eSxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiBJbmZpbml0eVxuICB9O1xuICB2YXIgZWwgPSAoMCwgX2dldE9mZnNldFBhcmVudDJbJ2RlZmF1bHQnXSkoZWxlbWVudCk7XG4gIHZhciBkb2MgPSBfdXRpbHMyWydkZWZhdWx0J10uZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIHRoZSB2aXNpYmxlIHJlY3QgYnkgY2xpbWJpbmcgdGhlIGRvbSBhY2NvdW50aW5nIGZvclxuICAvLyBhbGwgc2Nyb2xsYWJsZSBjb250YWluZXJzLlxuICB3aGlsZSAoZWwpIHtcbiAgICAvLyBjbGllbnRXaWR0aCBpcyB6ZXJvIGZvciBpbmxpbmUgYmxvY2sgZWxlbWVudHMgaW4gaWUuXG4gICAgaWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA9PT0gLTEgfHwgZWwuY2xpZW50V2lkdGggIT09IDApICYmXG4gICAgLy8gYm9keSBtYXkgaGF2ZSBvdmVyZmxvdyBzZXQgb24gaXQsIHlldCB3ZSBzdGlsbCBnZXQgdGhlIGVudGlyZVxuICAgIC8vIHZpZXdwb3J0LiBJbiBzb21lIGJyb3dzZXJzLCBlbC5vZmZzZXRQYXJlbnQgbWF5IGJlXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzbyBjaGVjayBmb3IgdGhhdCB0b28uXG4gICAgZWwgIT09IGJvZHkgJiYgZWwgIT09IGRvY3VtZW50RWxlbWVudCAmJiBfdXRpbHMyWydkZWZhdWx0J10uY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gX3V0aWxzMlsnZGVmYXVsdCddLm9mZnNldChlbCk7XG4gICAgICAvLyBhZGQgYm9yZGVyXG4gICAgICBwb3MubGVmdCArPSBlbC5jbGllbnRMZWZ0O1xuICAgICAgcG9zLnRvcCArPSBlbC5jbGllbnRUb3A7XG4gICAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHBvcy50b3ApO1xuICAgICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCxcbiAgICAgIC8vIGNvbnNpZGVyIGFyZWEgd2l0aG91dCBzY3JvbGxCYXJcbiAgICAgIHBvcy5sZWZ0ICsgZWwuY2xpZW50V2lkdGgpO1xuICAgICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBwb3MudG9wICsgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBwb3MubGVmdCk7XG4gICAgfSBlbHNlIGlmIChlbCA9PT0gYm9keSB8fCBlbCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZWwgPSAoMCwgX2dldE9mZnNldFBhcmVudDJbJ2RlZmF1bHQnXSkoZWwpO1xuICB9XG5cbiAgLy8gQ2xpcCBieSBkb2N1bWVudCdzIHNpemUuXG4gIHZhciBzY3JvbGxYID0gX3V0aWxzMlsnZGVmYXVsdCddLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSBfdXRpbHMyWydkZWZhdWx0J10udmlld3BvcnRXaWR0aCh3aW4pO1xuICB2YXIgbWF4VmlzaWJsZVdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIG1heFZpc2libGVXaWR0aCk7XG5cbiAgdmFyIHNjcm9sbFkgPSBfdXRpbHMyWydkZWZhdWx0J10uZ2V0V2luZG93U2Nyb2xsVG9wKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IF91dGlsczJbJ2RlZmF1bHQnXS52aWV3cG9ydEhlaWdodCh3aW4pO1xuICB2YXIgbWF4VmlzaWJsZUhlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgbWF4VmlzaWJsZUhlaWdodCk7XG5cbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgb3ZlcmZsb3cpIHtcbiAgdmFyIHBvcyA9IF91dGlsczJbJ2RlZmF1bHQnXS5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIExlZnQgZWRnZSBpbnNpZGUgYW5kIHJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9XG5cbiAgLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICAvLyDkv53or4Hlt6bovrnnlYzlkozlj6/op4bljLrln5/lt6bovrnnlYzlr7npvZBcbiAgICBwb3MubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCwgdmlzaWJsZVJlY3QubGVmdCk7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBpbnNpZGUgYW5kIGJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9XG5cbiAgLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIC8vIOS/neivgeS4iui+ueeVjOWSjOWPr+inhuWMuuWfn+S4iui+ueeVjOWvuem9kFxuICAgIHBvcy50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCwgdmlzaWJsZVJlY3QudG9wKTtcbiAgfVxuXG4gIHJldHVybiBfdXRpbHMyWydkZWZhdWx0J10ubWl4KHBvcywgc2l6ZSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFkanVzdEZvclZpZXdwb3J0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvYWRqdXN0Rm9yVmlld3BvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0UmVnaW9uKG5vZGUpIHtcbiAgdmFyIG9mZnNldCA9IHZvaWQgMDtcbiAgdmFyIHcgPSB2b2lkIDA7XG4gIHZhciBoID0gdm9pZCAwO1xuICBpZiAoIV91dGlsczJbJ2RlZmF1bHQnXS5pc1dpbmRvdyhub2RlKSAmJiBub2RlLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgb2Zmc2V0ID0gX3V0aWxzMlsnZGVmYXVsdCddLm9mZnNldChub2RlKTtcbiAgICB3ID0gX3V0aWxzMlsnZGVmYXVsdCddLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IF91dGlsczJbJ2RlZmF1bHQnXS5vdXRlckhlaWdodChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgd2luID0gX3V0aWxzMlsnZGVmYXVsdCddLmdldFdpbmRvdyhub2RlKTtcbiAgICBvZmZzZXQgPSB7XG4gICAgICBsZWZ0OiBfdXRpbHMyWydkZWZhdWx0J10uZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiBfdXRpbHMyWydkZWZhdWx0J10uZ2V0V2luZG93U2Nyb2xsVG9wKHdpbilcbiAgICB9O1xuICAgIHcgPSBfdXRpbHMyWydkZWZhdWx0J10udmlld3BvcnRXaWR0aCh3aW4pO1xuICAgIGggPSBfdXRpbHMyWydkZWZhdWx0J10udmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuICBvZmZzZXQud2lkdGggPSB3O1xuICBvZmZzZXQuaGVpZ2h0ID0gaDtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gZ2V0UmVnaW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvZ2V0UmVnaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0QWxpZ25PZmZzZXQgPSByZXF1aXJlKCcuL2dldEFsaWduT2Zmc2V0Jyk7XG5cbnZhciBfZ2V0QWxpZ25PZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0QWxpZ25PZmZzZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KSB7XG4gIHZhciBwMSA9ICgwLCBfZ2V0QWxpZ25PZmZzZXQyWydkZWZhdWx0J10pKHJlZk5vZGVSZWdpb24sIHBvaW50c1sxXSk7XG4gIHZhciBwMiA9ICgwLCBfZ2V0QWxpZ25PZmZzZXQyWydkZWZhdWx0J10pKGVsUmVnaW9uLCBwb2ludHNbMF0pO1xuICB2YXIgZGlmZiA9IFtwMi5sZWZ0IC0gcDEubGVmdCwgcDIudG9wIC0gcDEudG9wXTtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IGVsUmVnaW9uLmxlZnQgLSBkaWZmWzBdICsgb2Zmc2V0WzBdIC0gdGFyZ2V0T2Zmc2V0WzBdLFxuICAgIHRvcDogZWxSZWdpb24udG9wIC0gZGlmZlsxXSArIG9mZnNldFsxXSAtIHRhcmdldE9mZnNldFsxXVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRFbEZ1dHVyZVBvcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldEVsRnV0dXJlUG9zLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIOiOt+WPliBub2RlIOS4iueahCBhbGlnbiDlr7npvZDngrkg55u45a+55LqO6aG16Z2i55qE5Z2Q5qCHXG4gKi9cblxuZnVuY3Rpb24gZ2V0QWxpZ25PZmZzZXQocmVnaW9uLCBhbGlnbikge1xuICB2YXIgViA9IGFsaWduLmNoYXJBdCgwKTtcbiAgdmFyIEggPSBhbGlnbi5jaGFyQXQoMSk7XG4gIHZhciB3ID0gcmVnaW9uLndpZHRoO1xuICB2YXIgaCA9IHJlZ2lvbi5oZWlnaHQ7XG5cbiAgdmFyIHggPSByZWdpb24ubGVmdDtcbiAgdmFyIHkgPSByZWdpb24udG9wO1xuXG4gIGlmIChWID09PSAnYycpIHtcbiAgICB5ICs9IGggLyAyO1xuICB9IGVsc2UgaWYgKFYgPT09ICdiJykge1xuICAgIHkgKz0gaDtcbiAgfVxuXG4gIGlmIChIID09PSAnYycpIHtcbiAgICB4ICs9IHcgLyAyO1xuICB9IGVsc2UgaWYgKEggPT09ICdyJykge1xuICAgIHggKz0gdztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gZ2V0QWxpZ25PZmZzZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRBbGlnbk9mZnNldC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxyXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGZhZGUgaW4gb3IgZmFkZSBvdXQgYW5pbWF0aW9uXHJcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGZhZGVkIG91dFxyXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBSdW4gdGhlIGZhZGUgaW4gYW5pbWF0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMsIGlmIGl0IGlzIGluaXRpYWxseVxyXG4gICAqIHNob3duXHJcbiAgICovXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxyXG4gICAqIER1cmF0aW9uIG9mIHRoZSBmYWRlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsIHRvIGVuc3VyZSB0aGF0IGZpbmlzaGluZ1xyXG4gICAqIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZCBldmVudHMgYXJlXHJcbiAgICogY2FuY2VsZWRcclxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBpblxyXG4gICAqL1xuICBvbkVudGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBpblxyXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGhhcyBjb21wb25lbnQgZmFkZWQgaW5cclxuICAgKi9cbiAgb25FbnRlcmVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgZmFkZXMgb3V0XHJcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGZhZGUgb3V0XHJcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGZhZGVkIG91dFxyXG4gICAqL1xuICBvbkV4aXRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIFwiaW5cIjogZmFsc2UsXG4gIHRpbWVvdXQ6IDMwMCxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlXG59O1xuXG52YXIgRmFkZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGYWRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgRmFkZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uMltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2ZhZGUnKSxcbiAgICAgIGVudGVyZWRDbGFzc05hbWU6ICdpbicsXG4gICAgICBlbnRlcmluZ0NsYXNzTmFtZTogJ2luJ1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRmFkZTtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuRmFkZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5GYWRlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGYWRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL0ZhZGUuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF90aW5wZXJCZWVDb3JlID0gcmVxdWlyZSgndGlucGVyLWJlZS1jb3JlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvL+aYr+WQpuaYr+aJi+mjjueQtOaViOaenFxuICBhY2NvcmRpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+a/gOa0u+eahOmhuVxuICBhY3RpdmVLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIC8v6buY6K6k55qE5r+A5rS755qE6aG5XG4gIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnksXG4gIC8v6YCJ5Lit5Ye95pWwXG4gIG9uU2VsZWN0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjb3JkaW9uOiBmYWxzZSxcbiAgY2xzUHJlZml4OiAndS1wYW5lbC1ncm91cCdcbn07XG5cbi8vIFRPRE86IFVzZSB1bmNvbnRyb2xsYWJsZS5cblxudmFyIFBhbmVsR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWxHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWxHcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbEdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlU2VsZWN0ID0gX3RoaXMuaGFuZGxlU2VsZWN0LmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVLZXk6IHByb3BzLmRlZmF1bHRBY3RpdmVLZXlcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBhbmVsR3JvdXAucHJvdG90eXBlLmhhbmRsZVNlbGVjdCA9IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChrZXksIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXksIGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUtleSA9PT0ga2V5KSB7XG4gICAgICBrZXkgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IGtleSB9KTtcbiAgfTtcblxuICBQYW5lbEdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYWNjb3JkaW9uID0gX3Byb3BzLmFjY29yZGlvbjtcbiAgICB2YXIgcHJvcHNBY3RpdmVLZXkgPSBfcHJvcHMuYWN0aXZlS2V5O1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IF9wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuICAgIHZhciBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdDtcbiAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgdmFyIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXg7XG5cbiAgICB2YXIgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY2NvcmRpb24nLCAnYWN0aXZlS2V5JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkZWZhdWx0QWN0aXZlS2V5JywgJ29uU2VsZWN0JywgJ3N0eWxlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB2b2lkIDA7XG4gICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHNBY3RpdmVLZXkgIT0gbnVsbCA/IHByb3BzQWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgICBvdGhlcnMucm9sZSA9IG90aGVycy5yb2xlIHx8ICd0YWJsaXN0JztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkLnByb3BzLnN0eWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgICAgIF9leHRlbmRzKGNoaWxkUHJvcHMsIHtcbiAgICAgICAgICAgIGhlYWRlclJvbGU6ICd0YWInLFxuICAgICAgICAgICAgcGFuZWxSb2xlOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRlZDogY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKShfdGhpczIuaGFuZGxlU2VsZWN0LCBjaGlsZC5wcm9wcy5vblNlbGVjdClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQYW5lbEdyb3VwO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5QYW5lbEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBhbmVsR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhbmVsR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXBhbmVsL2J1aWxkL1BhbmVsR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfQnV0dG9uMltcImRlZmF1bHRcIl07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWJ1dHRvbi9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOWwuuWvuFxyXG4gICAgICovXG4gICAgc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ3hnJywgJ2xnJ10pLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOagt+W8j1xyXG4gICAgICovXG4gICAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOW9oueKtlxyXG4gICAgICovXG4gICAgc2hhcGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydibG9jaycsICdyb3VuZCcsICdzcXVhcmVkJywgJ2Zsb2F0aW5nJywgJ3BpbGxSaWdodCcsICdwaWxsTGVmdCcsICdib3JkZXInLCAnaWNvbiddKSxcbiAgICAvKipcclxuICAgICogQHRpdGxlIOexu+Wei1xyXG4gICAgKi9cbiAgICBjb2xvcnM6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ2FjY2VudCcsICdzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInLCAnZGVmYXVsdCddKSxcbiAgICAvKipcclxuICAgICAqIEB0aXRsZSDmmK/lkKbnpoHnlKhcclxuICAgICAqIEB2ZUlnbm9yZVxyXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcclxuICAgICAqIEB0aXRsZSDnsbvlkI1cclxuICAgICAqIEB2ZUlnbm9yZVxyXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIDxidXR0b24+IOeahCB0eXBlXHJcbiAgICAgKiBAdmVJZ25vcmVcclxuICAgICAqL1xuICAgIGh0bWxUeXBlOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc3VibWl0JywgJ2J1dHRvbicsICdyZXNldCddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgIGNsc1ByZWZpeDogJ3UtYnV0dG9uJ1xuXG59O1xuXG52YXIgc2l6ZU1hcCA9IHtcbiAgICBzbTogJ3NtJyxcbiAgICB4ZzogJ3hnJyxcbiAgICBsZzogJ2xnJ1xufSxcbiAgICBjb2xvcnNNYXAgPSB7XG4gICAgcHJpbWFyeTogJ3ByaW1hcnknLFxuICAgIGFjY2VudDogJ2FjY2VudCcsXG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICB3YXJuaW5nOiAnd2FybmluZycsXG4gICAgZGFuZ2VyOiAnZGFuZ2VyJ1xufSxcbiAgICBzaGFwZU1hcCA9IHtcbiAgICBibG9jazogJ2Jsb2NrJyxcbiAgICByb3VuZDogJ3JvdW5kJyxcbiAgICBib3JkZXI6ICdib3JkZXInLFxuICAgIHNxdWFyZWQ6ICdzcXVhcmVkJyxcbiAgICBmbG9hdGluZzogJ2Zsb2F0aW5nJyxcbiAgICBwaWxsUmlnaHQ6ICdwaWxsLXJpZ2h0JyxcbiAgICBwaWxsTGVmdDogJ3BpbGwtbGVmdCcsXG4gICAgaWNvbjogJ2ljb24nXG59O1xuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgQnV0dG9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29sb3JzID0gX3Byb3BzLmNvbG9ycyxcbiAgICAgICAgICAgIHNoYXBlID0gX3Byb3BzLnNoYXBlLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc2l6ZSA9IF9wcm9wcy5zaXplLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBodG1sVHlwZSA9IF9wcm9wcy5odG1sVHlwZSxcbiAgICAgICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbG9ycycsICdzaGFwZScsICdkaXNhYmxlZCcsICdjbGFzc05hbWUnLCAnc2l6ZScsICdjaGlsZHJlbicsICdodG1sVHlwZScsICdjbHNQcmVmaXgnXSk7XG5cbiAgICAgICAgdmFyIGNsc09iaiA9IHt9O1xuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemVNYXBbc2l6ZV0pIHtcbiAgICAgICAgICAgIGNsc09ialtjbHNQcmVmaXggKyAnLScgKyBzaXplTWFwW3NpemVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXBlTWFwW3NoYXBlXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIHNoYXBlTWFwW3NoYXBlXV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvcnNNYXBbY29sb3JzXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIGNvbG9yc01hcFtjb2xvcnNdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xzUHJlZml4LCBjbHNPYmopO1xuICAgICAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGh0bWxUeXBlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgICAgIH0sIG90aGVycyksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBCdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWJ1dHRvbi9idWlsZC9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XHJcbmV4cG9ydCBkZWZhdWx0IEljb24gO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xuICBcbn07XG4vKipcbiAqICBiYWRnZSDpu5jorqTmmL7npLrlhoXlrrkxXG4gKi9cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblx0Y2xzUHJlZml4OiAndWYnXG59O1xuXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0bGV0IHt0eXBlLGNsYXNzTmFtZSxjbHNQcmVmaXgsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBjbHNPYmogPSB7fTtcblx0XHRcblx0XHRsZXQgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xzUHJlZml4LHR5cGUpO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGkgey4uLm90aGVyc30gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZXMsY2xhc3NOYW1lKX0+PC9pPiBcblx0XHQpXG5cdH1cbn1cbkljb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuSWNvbi5Qcm9wVHlwZXMgPSBQcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9JY29uLmpzIiwiLyoqXG4gKiBAdGl0bGUgSWNvblxuICogQGRlc2NyaXB0aW9uIOWcqGl1YXDlrZfnrKblupPvvIxgdHlwZWDlj4LmlbDlgLzlnYfku6Ut5YiG6ZqU44CCXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL3NyYyc7XG5cbmNsYXNzIERlbW8xIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aW5wZXItaWNvbi1kZW1vXCI+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJpY29uX2xpc3RzXCI+XG4gICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi13ZWNoYXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lvq7kv6E8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXdlY2hhdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWRkLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWKoDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWRkLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VhcmNoXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5pCc57SiPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZWFyY2g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWhpc3RvZ3JhbS1hcnJvdy11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWbvuihqCDmipjnur/lm748L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWhpc3RvZ3JhbS1hcnJvdy11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvc2UtYm9sZFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWFs+mXrTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvc2UtYm9sZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdW1icmVsbGFcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7pm6jkvJ48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXVtYnJlbGxhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1xcVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlFRPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1xcTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtNHNxdWFyZS0zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YiG57G7PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi00c3F1YXJlLTM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlbmRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lj5HpgIE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNlbmQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1hcFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWcsOWbvjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWFwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi05c3F1YXJlLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7moIflrpo8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTlzcXVhcmUtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbmF2bWVudVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaxieWgoeWMhTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbmF2bWVudTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGMtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaYvuekuuWZqDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGMtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VhcmNoLWxpZ2h0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj56b29tPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZWFyY2gtbGlnaHQtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2hlY2stcy0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Lu75YqhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jaGVjay1zLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBlbmNpbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPue8lui+kTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGVuY2lsPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1yZXBlYXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mkqTplIA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJlcGVhdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VjdXJpdHktMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWuieWFqDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2VjdXJpdHktMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbGV4aVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWlszwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbGV4aTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGVuY2lsLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nvJbovpE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBlbmNpbC1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1kZWxcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7liKDpmaQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWRlbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmktb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuavlOS7tzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmktbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGVuY2lsLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nvJbovpE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBlbmNpbC1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1xcmNvZGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kuoznu7TnoIE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXFyY29kZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcm1iLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWFjei0ueaKpeS7tzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcm1iLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VhcmNoLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaQnOe0ojwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2VhcmNoLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmVsbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPumTg+mTmzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmVsbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGFzcy0zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5py65qOA6YCa6L+HPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wYXNzLTM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyZWVhcnJvdy1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5qCR5b2i57q/PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmVlYXJyb3ctZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJhaW5pbmdcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7ln7norq08L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyYWluaW5nPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ncm91cC0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+57uE57uH5p625p6EPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ncm91cC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi16b29tLWluXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+em9vbS1pbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtem9vbS1pbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VjdXJpdHktb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWuieWFqDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc2VjdXJpdHktbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmFvamlhLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7miqXku7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJhb2ppYS1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ydWxlcnBlblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWumuWItjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcnVsZXJwZW48L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWVycHNlYXJjaFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmVycDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXJwc2VhcmNoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ncm91cC1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+57uE57uH5py65p6EPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ncm91cC1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG91ZC1vLXVwZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWQjOatpeS4rTIt5ZCM5q2lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG91ZC1vLXVwZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvc2UtYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YWz6ZetPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG9zZS1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFkZC1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YqgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hZGQtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lt6XkvZzlj7A8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBjPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1yYWluXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+56m65rCUX+mbqOWkqTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcmFpbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbm9kYXRhXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5peg5pWw5o2uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ub2RhdGE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3NlLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lhbPpl608L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3NlLWM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJvaHVpLXMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWuoeaJuS3pqbPlm548L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJvaHVpLXMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvdWRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpKnmsJQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3VkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1iYWctc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWVhuWTgTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmFnLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRhYmxlLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5tYWRlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10YWJsZS0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hbmdsZWFycm93cG9pbnRpbmd0b3JpZ2h0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hbmdsZWFycm93cG9pbnRpbmd0b3JpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1leGMtYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Y+55Y+3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1leGMtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ncm91cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPue7hOe7h+acuuaehDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZ3JvdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBlcnNvbmluLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7orqTor4Hmv4DmtLs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBlcnNvbmluLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNhbGVuZGFyXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Z21f5pel5Y6GPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jYWxlbmRhcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWRkLXMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWKoDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWRkLXMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc3luYy1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lkIzmraU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXN5bmMtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ncmlkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Z3JpZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZ3JpZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYW5nbGVwb2ludGluZ3RvbGVmdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYW5nbGVwb2ludGluZ3RvbGVmdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWN0aXZhdGUtM1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua/gOa0uzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWN0aXZhdGUtMzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2F2ZW5cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nlLc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNhdmVuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1iYWNrXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6L+U5ZuePC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iYWNrPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wYXNzLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mjojmnYM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBhc3MtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmVkdWNlLXMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaYvuekuuagkTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcmVkdWNlLXMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJlYVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWbvuihqOWbvuaghy3pnaLnp6/lm748L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFyZWE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZsYWdcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7ml5fluJw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZsYWc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJveC1vLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7otK3kubDnm5LlrZA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJveC1vLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LXMtby1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LiL5p62PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1zLW8tZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctcy1vLXVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LiK5p62PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1zLW8tdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJ1aWxkaW5nXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LyB5Lia5L+h5oGvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWlsZGluZzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGFwcFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGFwcDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJlZWZvbGRlclwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaQnOe0ojwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJlZWZvbGRlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWR2aWNlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5ZKo6K+iPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hZHZpY2U8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTJjb2xsYXlvdXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7luo/liJfluIPlsYA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTJjb2xsYXlvdXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNoZWNrLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lrqHmibk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNoZWNrLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNpZ25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7ph4fotK3lkIjlkIw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNpZ248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxpc3RzZWFyY2hcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mn6XnnIvor6bmg4U8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxpc3RzZWFyY2g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWdyaWRjYXJldGFycm93dXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lv4Xloas8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWdyaWRjYXJldGFycm93dXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV5ZS1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mn6XnnIs8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV5ZS1jLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNoZWNrLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuiuuOWPrzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2hlY2stYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zZWFsXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5a6h5om5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZWFsPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1lcnBib3hcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5lcnA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWVycGJveDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcnVsZXJwZW4tb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWumuWItjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcnVsZXJwZW4tbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcm9sZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuinkuiJsjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcm9sZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXhjLWMtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaPkOekuuWPueWPtzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXhjLWMtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGFkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+cGFkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wYWQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyZWVmb2xkZXItY2xvc2VkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dHJlZS1uZXctc2JsaW5nLW5vZGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyZWVmb2xkZXItY2xvc2VkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1yZWR1Y2UtYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YeP5Y+3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1yZWR1Y2UtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wYXNzLXMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPumAmui/hzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGFzcy1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNldHRpbmdcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nu7TmiqQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNldHRpbmc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3NlLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5aU1jlj7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3NlLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1hcC1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Zyw5Zu+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1tYXAtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbW92ZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuenu+WKqDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbW92ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtMmFycm93LWRvd25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTJhcnJvdy1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi0yYXJyb3ctcmlnaHRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTJhcnJvdy1yaWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctYy1vLWxlZnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWMtby1sZWZ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wbHVzXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+cGx1czwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGx1czwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctYy1vLXJpZ2h0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1jLW8tcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWMtby1kb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1jLW8tZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbGlzdC1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mmoLml6DmlbDmja48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxpc3Qtcy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG91ZC1vLWRvd25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kupHkuIvovb08L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3VkLW8tZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbm9kYXRhLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7ml6DmlYjmlbDmja48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW5vZGF0YS0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1maWxlLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mlofmoaPmlofku7YtMDE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZpbGUtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtMmFycm93LXVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566t5aS0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi0yYXJyb3ctdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW5vdGlmaWNhdGlvblwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua2iOaBr+WWh+WPrTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbm90aWZpY2F0aW9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1waWVjaGFydFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWbvuihqF/ppbw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBpZWNoYXJ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG91ZC1vLXVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LqRX+S4iuS8oDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvdWQtby11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvc2VcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lj5bmtog8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNsb3NlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jb3JyZWN0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5a+55Y+3PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jb3JyZWN0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1oaXN0b2dyYW0tcy1vLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lm77ooajliIfmjaI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWhpc3RvZ3JhbS1zLW8tMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtNHNxdWFyZS0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5bqU55So5Lit5b+DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi00c3F1YXJlLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXN1bm55XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc3Vubnk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxpbmtcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpI3liLbpk77mjqU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxpbms8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWV5ZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuafpeecizwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXllPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1leWUtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuafpeecizwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXllLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXFpYW5cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrb48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXFpYW48L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXdpZGdldGFiXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5bCP6YOo5Lu25o6I5p2DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi13aWRnZXRhYjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcm1iLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7miqXku7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJtYi1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1saW5rLW9mZlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaWreW8gOmTvuaOpTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbGluay1vZmY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNoYW5nLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kuIrmnrY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNoYW5nLXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXhpYS1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LiL5p62PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi14aWEtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYm94LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nm5LlrZBmdWxsPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib3gtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGFzcy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5o6I5p2DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wYXNzLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWRvd25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hbmdsZS1hcnJvdy1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1yaWdodFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmFuZ2xlLWFycm93LXBvaW50aW5nLXRvLXJpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy1yaWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctbGVmdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmFuZ2xlLXBvaW50aW5nLXRvLWxlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWxlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJveFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmFyY2hpdmUtYmxhY2stYm94PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib3g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyaWFuZ2xlLXJpZ2h0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YXJyb3doZWFkLXBvaW50aW5nLXRvLXRoZS1yaWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJpYW5nbGUtcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWhpc3RvZ3JhbS1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5iYXItZ3JhcGgtb24tYS1yZWN0YW5nbGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWhpc3RvZ3JhbS1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJvb2tcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5ib29rPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ib29rPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ib29rbWFyay1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Ym9va21hcmstd2hpdGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJvb2ttYXJrLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWxlYWZcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5icmFuY2gtd2l0aC1sZWF2ZXMtYmxhY2stc2hhcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxlYWY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJ1bGxzZXllXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YnVsbHNleWU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJ1bGxzZXllPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1ncmlkY2FyZXRkb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Y2FtZXJhLXJldHJvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ncmlkY2FyZXRkb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmlhbmdsZS11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNhcmV0LWFycm93LXVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmlhbmdsZS11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJpYW5nbGUtZG93blwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNhcmV0LWRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyaWFuZ2xlLWRvd248L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNsb3VkLWRvd25cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jbG91ZC1zdG9yYWdlLWRvd25sb2FkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jbG91ZC1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jbG91ZC11cFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNsb3VkLXN0b3JhZ2UtdXBsb2FkaW5nLW9wdGlvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvdWQtdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJ1YmJsZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNvbW1lbnQtYmxhY2stb3ZhbC1idWJibGUtc2hhcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJ1YmJsZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYnViYmxlLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jb21tZW50LXdoaXRlLW92YWwtYnViYmxlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWJibGUtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY29weVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNvcHktZG9jdW1lbnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNvcHk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNvcnJlY3QtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmNvcnJlY3Qtc3ltYm9sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jb3JyZWN0LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTJhcnJvdy1sZWZ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZG91YmxlLWxlZnQtY2hldnJvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtMmFycm93LWxlZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWRvd24tMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmRvd24tYXJyb3c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWRvd24tMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZG93bmxvYWRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5kb3dubG9hZC10by1zdG9yYWdlLWRyaXZlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1kb3dubG9hZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZWFydGhcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5lYXJ0aC1nbG9iZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZWFydGg8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1haWwtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmVudmVsb3BlLW9mLXdoaXRlLXBhcGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1tYWlsLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1haWxcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5lbnZlbG9wZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWFpbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXhjXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZXhjbGFtYXRpb248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV4YzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXh0ZXJuYWxsaW5rXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+ZXh0ZXJuYWwtbGluay1zeW1ib2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV4dGVybmFsbGluazwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdmlkZW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5mYWNldGltZS1idXR0b248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXZpZGVvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1maWxtc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmZpbG0tc3RyaXAtd2l0aC10d28tcGhvdG9ncmFtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmlsbXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZvbGRlclwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmZvbGRlci1jbG9zZWQtYmxhY2stc2hhcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZvbGRlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZm9sZGVyLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5mb2xkZXItd2hpdGUtc2hhcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZvbGRlci1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi00c3F1YXJlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Zm91ci1ibGFjay1zcXVhcmVzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi00c3F1YXJlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1naWZ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Z2lmdC1ib3g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWdpZnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWdpdGh1Yi1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+Z2l0aHViLWxvZ288L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWdpdGh1Yi1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1naXRodWItc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmdpdGh1Yi1zaWduPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1naXRodWItczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtaGVhcnQtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmhlYXJ0LXNoYXBlLW91dGxpbmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWhlYXJ0LW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWhlYXJ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+aGVhcnQtc2hhcGUtc2lsaG91ZXR0ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtaGVhcnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWhvbWVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5ob21lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ob21lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1pLWMtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmluZm9ybWF0aW9uLWJ1dHRvbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtaS1jLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWlcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5pbmZvcm1hdGlvbi1zeW1ib2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyaWFuZ2xlLWxlZnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5sZWZ0LWFycm93PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10cmlhbmdsZS1sZWZ0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zeW1saXN0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bGlzdGluZy1vcHRpb248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXN5bWxpc3Q8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LWxlZnQtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmxvbmctYXJyb3ctcG9pbnRpbmctdG8tbGVmdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctbGVmdC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1yaWdodC0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bG9uZy1hcnJvdy1wb2ludGluZy10by10aGUtcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LXJpZ2h0LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFycm93LXVwLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5sb25nLWFycm93LXBvaW50aW5nLXVwPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy11cC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1yZWR1Y2UtY1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPm1pbnVzLXNpZ24taW5zaWRlLWEtYmxhY2stY2lyY2xlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1yZWR1Y2UtYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmVkdWNlLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5taW51cy1zaWduLWluc2lkZS1hLWJsYWNrLXJvdW5kZWQtc3F1YXJlLXNoYXBlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1yZWR1Y2UtczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbWludXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5taW51cy1zeW1ib2w8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1pbnVzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1tb2JpbGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5tb2JpbGUtcGhvbmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1vYmlsZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmVsbC1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bXVzaWNhbC1iZWxsLW91dGxpbmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJlbGwtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtOXNxdWFyZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPm5pbmUtYmxhY2stdGlsZXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTlzcXVhcmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW51bWxpc3RcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5udW1iZXJlZC1saXN0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1udW1saXN0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1mb2xkZXJvcGVuLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5vcGVuLWZvbGRlci1vdXRsaW5lPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1mb2xkZXJvcGVuLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRyZWVmb2xkZXJvcGVuXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+b3Blbi1mb2xkZXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyZWVmb2xkZXJvcGVuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1tYWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5vcGVuLWxhcHRvcC1jb21wdXRlcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWFjPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jYW1lcmFcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5waG90by1jYW1lcmE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNhbWVyYTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGljdHVyZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnBpY3R1cmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBpY3R1cmU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBsYXlcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5wbGF5LXNpZ248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBsYXk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXBsYXktb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnBsYXktdmlkZW8tYnV0dG9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wbGF5LW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXFtLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5xdWVzdGlvbi1tYXJrLW9uLWEtY2lyY3VsYXItYmxhY2stYmFja2dyb3VuZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcW0tYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcW1cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5xdWVzdGlvbi1zaWduPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1xbTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbmF2bWVudS1saWdodFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnJlb3JkZXItb3B0aW9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1uYXZtZW51LWxpZ2h0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zZXR0aW5nc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNldHRpbmdzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZXR0aW5nczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2FydFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNob3BwaW5nLWNhcnQtYmxhY2stc2hhcGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWNhcnQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWhpc3RvZ3JhbVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNpZ25hbC1iYXJzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1oaXN0b2dyYW08L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZpbmV0dW5lXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c29ydC1hcnJvd3MtY291cGxlLXBvaW50aW5nLXVwLWFuZC1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1maW5ldHVuZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc29ydHVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c29ydC1ieS1hdHRyaWJ1dGVzLWludGVyZmFjZS1idXR0b24tb3B0aW9uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zb3J0dXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNvcnRkb3duXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c29ydC1ieS1hdHRyaWJ1dGVzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zb3J0ZG93bjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc29ydDE5XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c29ydC1ieS1udW1lcmljLW9yZGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zb3J0MTk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNvcnQ5MVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnNvcnQtYnktb3JkZXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNvcnQ5MTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtemFcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zb3J0LXJldmVyc2UtYWxwaGFiZXRpY2FsLW9yZGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi16YTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc3Rhci1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c3Rhci0xPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zdGFyLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXN0YXItMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnN0YXItaGFsZi1lbXB0eTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc3Rhci0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1zdGFyXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c3RhcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtc3RhcjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbHVnZ2FnZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnN1aXRjYXNlLXdpdGgtd2hpdGUtZGV0YWlsczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbHVnZ2FnZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGFibGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj50YWJsZS1ncmlkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10YWJsZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGVsXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGVsZXBob25lLWhhbmRsZS1zaWxob3VldHRlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10ZWw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRlbC1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGVsZXBob25lLXN5bWJvbC1idXR0b248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRlbC1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10ZXJtaW5hbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRlcm1pbmFsPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10ZXJtaW5hbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmlsZVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRleHQtZmlsZS0xPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1maWxlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1maWxlLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj50ZXh0LWZpbGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWZpbGUtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtM2RvdC1oXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGhyZWUtc21hbGwtc3F1YXJlLXNoYXBlczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtM2RvdC1oPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10aW1lLWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnRpbWU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpbWUtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi11cGxvYWRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj51cGxvYWQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXVwbG9hZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtM2RvdC12XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dmVydGljYWwtZWxsaXBzaXM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTNkb3QtdjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcm1iXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+eWVuLXN5bWJvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcm1iPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1jLW8tdXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrq3lpLQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFycm93LWMtby11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcmVqZWN0LTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7pqbPlm548L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJlamVjdC0yPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1iYXJjb2RlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YmFyY29kZS0xPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iYXJjb2RlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi16b29tLW91dFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnpvb20tb3V0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi16b29tLW91dDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXhjLXQtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS4ieinkuWPueWPtzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZXhjLXQtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGFzc1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPumAmui/hzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcGFzczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmxvd1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWFs+ezu+e9kee7nDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmxvdzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWRkLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7liqA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFkZC1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hcnJvdy1jLW8tcmlnaHQtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctYy1vLXJpZ2h0LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNoZWxmLW9uXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LiK5p62PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zaGVsZi1vbjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2hlbGYtb2ZmXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5LiL5p62PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zaGVsZi1vZmY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZpbGUtby0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5paH5Lu2PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1maWxlLW8tMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdHJ1Y2stb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWIsOi0p+ehruiupDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJ1Y2stbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc3VwZXJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lip/og73lvLrlpKc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXN1cGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1lcXVpcG1lbnRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7orr7lpIc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWVxdWlwbWVudDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctYy1vLWxlZnQtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPueureWktDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYXJyb3ctYy1vLWxlZnQtMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZmlsZXMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPui1hOa6kOaWh+S7tjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmlsZXMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2xvdWQtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS6kTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2xvdWQtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcm1iLXMtby0yXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5a+56LSmPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1ybWItcy1vLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLTNkb3QtYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+566h55CG5Lit5b+DPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi0zZG90LWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZGFmZW5nXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUX+Wkp+mjjjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZGFmZW5nPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1iYW94dWVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpKnmsJRf5pq06ZuqPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iYW94dWU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJpbmdiYW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lpKnmsJRf5Yaw6Zu5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1iaW5nYmFvPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1mZW5nYmFvXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUX+mjjuaatDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmVuZ2JhbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYteGlhb3l1XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUX+Wwj+mbqDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYteGlhb3l1PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi16aGVueHVlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5aSp5rCUX+mYtembqjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtemhlbnh1ZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtemhvbmd5dVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWkqeawlF/kuK3pm6g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXpob25neXU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWVzXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+RVM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWVzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1mbG93LW8tMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua1geeoizwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmxvdy1vLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFjdGl2YXRlLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mv4DmtLstMDE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWFjdGl2YXRlLTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWZsb3ctb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua1geeoizwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtZmxvdy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1idWxiLTJcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mioDmnK/mlK/mjIE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJ1bGItMjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbWktY1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuW/heWhqzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtbWktYzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdG9wLXVwXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6L+U5Zue6aG26YOoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10b3AtdXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNyZWRpdGNhcmRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5jcmVkaXQtY2FyZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY3JlZGl0Y2FyZDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWxpZ24tY2VudGVyXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YWxpZ24tY2VudGVyPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hbGlnbi1jZW50ZXI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWFsaWduLWp1c3RpZnlcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hbGlnbi1qdXN0aWZ5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hbGlnbi1qdXN0aWZ5PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1hbGlnbi1sZWZ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+YWxpZ24tbGVmdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWxpZ24tbGVmdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYWxpZ24tcmlnaHRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hbGlnbi1yaWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYWxpZ24tcmlnaHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWp1LWMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaLkjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtanUtYy1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cnVja1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPui0p+WIsOS7mOasvjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdHJ1Y2s8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNldHRpbmctYy1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5rWB56iLPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zZXR0aW5nLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdXNlcnMtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPualvOWuh+Wbvuagh1/nlKjmiLfnu4Q8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXVzZXJzLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJhZy1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7llYblk4E8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJhZy1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWNhaS1zXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6YeH6LStPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jYWktczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbGlzdGNoZWNrXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5a6a5qCHPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1saXN0Y2hlY2s8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXVzZXJzXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+576kPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi11c2VyczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtaS1jXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5p+l55yL6K+m5oOFPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1pLWM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWJ1aWxkaW5nLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kvIHkuJrkv6Hmga88L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJ1aWxkaW5nLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJtYi1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7miqXku7fnrqHnkIY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJtYi1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXJlamVjdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuW3sumps+WbnjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtcmVqZWN0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi05ZG90XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6I+c5Y2VPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi05ZG90PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1sb2FkaW5nc3RhdGVcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5sb2FkaW5nPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1sb2FkaW5nc3RhdGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLWdhdGV3YXlcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nvZHlhbM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWdhdGV3YXk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRpY2tldC1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lj5Hnpag8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpY2tldC1zLW88L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXVzZXJzZXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nrqHnkIbkuK3lv4M8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXVzZXJzZXQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXB1enpsZS1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+57uE5Lu2PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wdXp6bGUtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYm94LW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7nianmlpnnrqHnkIY8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWJveC1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1idWxiXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5r+A5rS7PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1idWxiPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1leGMtdFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaEn+WPueWPt19pY29uPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1leGMtdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcm1iLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7miqXku7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXJtYi1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10YWJsZS1zLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lj5Hnpag8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRhYmxlLXMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdW1icmVsbGEtb1wiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS8njwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdW1icmVsbGEtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZHJvcGJveFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmRyb3Bib3g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWRyb3Bib3g8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXNlYXJjaC1saWdodFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuaQnOe0oi3mkJzntKI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNlYXJjaC1saWdodDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtY2FydC1vXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+c2hvcHBpbmctY2FydC1ibGFjay1zaGFwZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtY2FydC1vPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1rZXJvLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmtlcm88L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWtlcm8tY29sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi11YmEtY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dWJhPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi11YmEtY29sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10aW5wZXJ6Yy1jb2xcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj50aW5wZXJ6YzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGlucGVyemMtY29sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10aW5wZXJ6Y2gtY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGlucGVyemNoPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10aW5wZXJ6Y2gtY29sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1pdWFwLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPml1YXA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWl1YXAtY29sPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1pdWFwZGVzaWduLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPml1YXBkZXNpZ256PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1pdWFwZGVzaWduLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYmVlLWNvbFwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPmJlZTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtYmVlLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbmVvdWktY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+bmVvdWk8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW5lb3VpLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc3BhcnJvdy1jb2xcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5zcGFycm93PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1zcGFycm93LWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlucGVyY24tY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGlucGVyY248L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpbnBlcmNuLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlucGVyZW4tY29sXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dGlucGVyZW48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpbnBlcmVuLWNvbDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtYXJyb3ctdXBcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5hbmdsZS1hcnJvdy1kb3duPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1hcnJvdy11cDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbWFpbHN5bVwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPndlYm1haWw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW1haWxzeW08L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXByaW50XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5Yqe5YWs55So5ZOBPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1wcmludDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtdGlja2V0LTNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7miqXplIA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpY2tldC0zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1sb2FuXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5YCf5qy+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1sb2FuPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10aWNrZXQtMlwiPjwvSWNvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuWHreivgeS4reW/gzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250Y2xhc3NcIj4udWYtdGlja2V0LTI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW9mZndvcmtcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7or7flgYc8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLW9mZndvcms8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLXRvZG9saXN0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5b6F5YqePC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi10b2RvbGlzdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtcGVyc29uaW5cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lkZjlt6XlhaXogYw8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBlcnNvbmluPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10aWNrZXRcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7npajliqE8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRpY2tldDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtbGluZWNoYXJ0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5bCPaWNvbi3lm77ooag8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWxpbmVjaGFydDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtNGxlYWZcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lupTnlKjkuK3lv4M8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLTRsZWFmPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1saXN0c2V0XCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5L+h5oGv57u05oqkPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1saXN0c2V0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1xaS1jLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7kvIHkuJrorqTor4E8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXFpLWMtbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtZXhjLWNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7lj7nlj7c8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLWV4Yy1jPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1jb2RlXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+6ZuG5oiQ5byA5Y+RPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1jb2RlPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi1wbHVnLW9cIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7ng63mi5Tmj5I8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXBsdWctbzwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICA8bGk+XG5cdCAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidWYtc2VhcmNoLXNcIj48L0ljb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7mkJzntKI8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXNlYXJjaC1zPC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDxsaT5cblx0ICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1Zi10cmVlYWRkXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+dHJlZS1uZXctc2JsaW5nLW5vZGU8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udGNsYXNzXCI+LnVmLXRyZWVhZGQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPGxpPlxuXHQgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVmLW1pXCI+PC9JY29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5b+F5aGrPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnRjbGFzc1wiPi51Zi1taTwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgIFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW8xO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZW1vL2RlbW9saXN0L0RlbW8xLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFRQTtBQUNBOzs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFQQTtBQVVBO0FBQ0E7Ozs7QUFFQTs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0NBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaFZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQ0E7Ozs7OztBQ0FBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7QUFDQTs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBUEE7Ozs7O0FBUUE7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBNXhEQTtBQURBO0FBcXlEQTtBQUNBOzs7O0FBRUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=demo.js.map