
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title Icon
 * @description 在iuap字符库，`type`参数值均以-分隔。
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="tinper-icon-demo">
				<ul className="icon_lists">
            
	                <li>
	                <Icon type="uf-wechat"></Icon>
	                    <div class="name">微信</div>
	                    <div class="fontclass">.uf-wechat</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-add-c-o"></Icon>
	                    <div class="name">加</div>
	                    <div class="fontclass">.uf-add-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-search"></Icon>
	                    <div class="name">搜索</div>
	                    <div class="fontclass">.uf-search</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-histogram-arrow-up"></Icon>
	                    <div class="name">图表 折线图</div>
	                    <div class="fontclass">.uf-histogram-arrow-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-close-bold"></Icon>
	                    <div class="name">关闭</div>
	                    <div class="fontclass">.uf-close-bold</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-umbrella"></Icon>
	                    <div class="name">雨伞</div>
	                    <div class="fontclass">.uf-umbrella</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-qq"></Icon>
	                    <div class="name">QQ</div>
	                    <div class="fontclass">.uf-qq</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-4square-3"></Icon>
	                    <div class="name">分类</div>
	                    <div class="fontclass">.uf-4square-3</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-send"></Icon>
	                    <div class="name">发送</div>
	                    <div class="fontclass">.uf-send</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-map"></Icon>
	                    <div class="name">地图</div>
	                    <div class="fontclass">.uf-map</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-9square-2"></Icon>
	                    <div class="name">标定</div>
	                    <div class="fontclass">.uf-9square-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-navmenu"></Icon>
	                    <div class="name">汉堡包</div>
	                    <div class="fontclass">.uf-navmenu</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pc-2"></Icon>
	                    <div class="name">显示器</div>
	                    <div class="fontclass">.uf-pc-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-search-light-2"></Icon>
	                    <div class="name">zoom</div>
	                    <div class="fontclass">.uf-search-light-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-check-s-2"></Icon>
	                    <div class="name">任务</div>
	                    <div class="fontclass">.uf-check-s-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pencil"></Icon>
	                    <div class="name">编辑</div>
	                    <div class="fontclass">.uf-pencil</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-repeat"></Icon>
	                    <div class="name">撤销</div>
	                    <div class="fontclass">.uf-repeat</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-security-2"></Icon>
	                    <div class="name">安全</div>
	                    <div class="fontclass">.uf-security-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-lexi"></Icon>
	                    <div class="name">女</div>
	                    <div class="fontclass">.uf-lexi</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pencil-s"></Icon>
	                    <div class="name">编辑</div>
	                    <div class="fontclass">.uf-pencil-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-del"></Icon>
	                    <div class="name">删除</div>
	                    <div class="fontclass">.uf-del</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bi-o"></Icon>
	                    <div class="name">比价</div>
	                    <div class="fontclass">.uf-bi-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pencil-c"></Icon>
	                    <div class="name">编辑</div>
	                    <div class="fontclass">.uf-pencil-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-qrcode"></Icon>
	                    <div class="name">二维码</div>
	                    <div class="fontclass">.uf-qrcode</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rmb-c-o"></Icon>
	                    <div class="name">免费报价</div>
	                    <div class="fontclass">.uf-rmb-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-search-c-o"></Icon>
	                    <div class="name">搜索</div>
	                    <div class="fontclass">.uf-search-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bell"></Icon>
	                    <div class="name">铃铛</div>
	                    <div class="fontclass">.uf-bell</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pass-3"></Icon>
	                    <div class="name">机检通过</div>
	                    <div class="fontclass">.uf-pass-3</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-treearrow-down"></Icon>
	                    <div class="name">树形线</div>
	                    <div class="fontclass">.uf-treearrow-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-training"></Icon>
	                    <div class="name">培训</div>
	                    <div class="fontclass">.uf-training</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-group-2"></Icon>
	                    <div class="name">组织架构</div>
	                    <div class="fontclass">.uf-group-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-zoom-in"></Icon>
	                    <div class="name">zoom-in</div>
	                    <div class="fontclass">.uf-zoom-in</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-security-o"></Icon>
	                    <div class="name">安全</div>
	                    <div class="fontclass">.uf-security-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-baojia-c"></Icon>
	                    <div class="name">报价</div>
	                    <div class="fontclass">.uf-baojia-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rulerpen"></Icon>
	                    <div class="name">定制</div>
	                    <div class="fontclass">.uf-rulerpen</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-erpsearch"></Icon>
	                    <div class="name">erp</div>
	                    <div class="fontclass">.uf-erpsearch</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-group-o"></Icon>
	                    <div class="name">组织机构</div>
	                    <div class="fontclass">.uf-group-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud-o-updown"></Icon>
	                    <div class="name">同步中2-同步</div>
	                    <div class="fontclass">.uf-cloud-o-updown</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-close-c-o"></Icon>
	                    <div class="name">关闭</div>
	                    <div class="fontclass">.uf-close-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-add-s"></Icon>
	                    <div class="name">加</div>
	                    <div class="fontclass">.uf-add-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pc"></Icon>
	                    <div class="name">工作台</div>
	                    <div class="fontclass">.uf-pc</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rain"></Icon>
	                    <div class="name">空气_雨天</div>
	                    <div class="fontclass">.uf-rain</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-nodata"></Icon>
	                    <div class="name">无数据</div>
	                    <div class="fontclass">.uf-nodata</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-close-c"></Icon>
	                    <div class="name">关闭</div>
	                    <div class="fontclass">.uf-close-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bohui-s-o"></Icon>
	                    <div class="name">审批-驳回</div>
	                    <div class="fontclass">.uf-bohui-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud"></Icon>
	                    <div class="name">天气</div>
	                    <div class="fontclass">.uf-cloud</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bag-s"></Icon>
	                    <div class="name">商品</div>
	                    <div class="fontclass">.uf-bag-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-table-2"></Icon>
	                    <div class="name">made</div>
	                    <div class="fontclass">.uf-table-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-anglearrowpointingtoright"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-anglearrowpointingtoright</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-exc-c-o"></Icon>
	                    <div class="name">叹号</div>
	                    <div class="fontclass">.uf-exc-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-group"></Icon>
	                    <div class="name">组织机构</div>
	                    <div class="fontclass">.uf-group</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-personin-o"></Icon>
	                    <div class="name">认证激活</div>
	                    <div class="fontclass">.uf-personin-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-calendar"></Icon>
	                    <div class="name">gm_日历</div>
	                    <div class="fontclass">.uf-calendar</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-add-s-o"></Icon>
	                    <div class="name">加</div>
	                    <div class="fontclass">.uf-add-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sync-c-o"></Icon>
	                    <div class="name">同步</div>
	                    <div class="fontclass">.uf-sync-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-grid"></Icon>
	                    <div class="name">grid</div>
	                    <div class="fontclass">.uf-grid</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-anglepointingtoleft"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-anglepointingtoleft</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-activate-3"></Icon>
	                    <div class="name">激活</div>
	                    <div class="fontclass">.uf-activate-3</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-caven"></Icon>
	                    <div class="name">男</div>
	                    <div class="fontclass">.uf-caven</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-back"></Icon>
	                    <div class="name">返回</div>
	                    <div class="fontclass">.uf-back</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pass-2"></Icon>
	                    <div class="name">授权</div>
	                    <div class="fontclass">.uf-pass-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-reduce-s-o"></Icon>
	                    <div class="name">显示树</div>
	                    <div class="fontclass">.uf-reduce-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-area"></Icon>
	                    <div class="name">图表图标-面积图</div>
	                    <div class="fontclass">.uf-area</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-flag"></Icon>
	                    <div class="name">旗帜</div>
	                    <div class="fontclass">.uf-flag</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-box-o-2"></Icon>
	                    <div class="name">购买盒子</div>
	                    <div class="fontclass">.uf-box-o-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-s-o-down"></Icon>
	                    <div class="name">下架</div>
	                    <div class="fontclass">.uf-arrow-s-o-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-s-o-up"></Icon>
	                    <div class="name">上架</div>
	                    <div class="fontclass">.uf-arrow-s-o-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-building"></Icon>
	                    <div class="name">企业信息</div>
	                    <div class="fontclass">.uf-building</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tapp"></Icon>
	                    <div class="name">天气</div>
	                    <div class="fontclass">.uf-tapp</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-treefolder"></Icon>
	                    <div class="name">搜索</div>
	                    <div class="fontclass">.uf-treefolder</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-advice"></Icon>
	                    <div class="name">咨询</div>
	                    <div class="fontclass">.uf-advice</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-2collayout"></Icon>
	                    <div class="name">序列布局</div>
	                    <div class="fontclass">.uf-2collayout</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-check-s"></Icon>
	                    <div class="name">审批</div>
	                    <div class="fontclass">.uf-check-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sign"></Icon>
	                    <div class="name">采购合同</div>
	                    <div class="fontclass">.uf-sign</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-listsearch"></Icon>
	                    <div class="name">查看详情</div>
	                    <div class="fontclass">.uf-listsearch</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-gridcaretarrowup"></Icon>
	                    <div class="name">必填</div>
	                    <div class="fontclass">.uf-gridcaretarrowup</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-eye-c-o"></Icon>
	                    <div class="name">查看</div>
	                    <div class="fontclass">.uf-eye-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-check-c-o"></Icon>
	                    <div class="name">许可</div>
	                    <div class="fontclass">.uf-check-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-seal"></Icon>
	                    <div class="name">审批</div>
	                    <div class="fontclass">.uf-seal</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-erpbox"></Icon>
	                    <div class="name">erp</div>
	                    <div class="fontclass">.uf-erpbox</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rulerpen-o"></Icon>
	                    <div class="name">定制</div>
	                    <div class="fontclass">.uf-rulerpen-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-role"></Icon>
	                    <div class="name">角色</div>
	                    <div class="fontclass">.uf-role</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-exc-c-2"></Icon>
	                    <div class="name">提示叹号</div>
	                    <div class="fontclass">.uf-exc-c-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pad"></Icon>
	                    <div class="name">pad</div>
	                    <div class="fontclass">.uf-pad</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-treefolder-closed"></Icon>
	                    <div class="name">tree-new-sbling-node</div>
	                    <div class="fontclass">.uf-treefolder-closed</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-reduce-c-o"></Icon>
	                    <div class="name">减号</div>
	                    <div class="fontclass">.uf-reduce-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pass-s-o"></Icon>
	                    <div class="name">通过</div>
	                    <div class="fontclass">.uf-pass-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-setting"></Icon>
	                    <div class="name">维护</div>
	                    <div class="fontclass">.uf-setting</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-close-s"></Icon>
	                    <div class="name">ZSX号</div>
	                    <div class="fontclass">.uf-close-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-map-o"></Icon>
	                    <div class="name">地图</div>
	                    <div class="fontclass">.uf-map-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-move"></Icon>
	                    <div class="name">移动</div>
	                    <div class="fontclass">.uf-move</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-2arrow-down"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-2arrow-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-2arrow-right"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-2arrow-right</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-c-o-left"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-arrow-c-o-left</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-plus"></Icon>
	                    <div class="name">plus</div>
	                    <div class="fontclass">.uf-plus</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-c-o-right"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-arrow-c-o-right</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-c-o-down"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-arrow-c-o-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-list-s-o"></Icon>
	                    <div class="name">暂无数据</div>
	                    <div class="fontclass">.uf-list-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud-o-down"></Icon>
	                    <div class="name">云下载</div>
	                    <div class="fontclass">.uf-cloud-o-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-nodata-2"></Icon>
	                    <div class="name">无效数据</div>
	                    <div class="fontclass">.uf-nodata-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-file-s"></Icon>
	                    <div class="name">文档文件-01</div>
	                    <div class="fontclass">.uf-file-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-2arrow-up"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-2arrow-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-notification"></Icon>
	                    <div class="name">消息喇叭</div>
	                    <div class="fontclass">.uf-notification</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-piechart"></Icon>
	                    <div class="name">图表_饼</div>
	                    <div class="fontclass">.uf-piechart</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud-o-up"></Icon>
	                    <div class="name">云_上传</div>
	                    <div class="fontclass">.uf-cloud-o-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-close"></Icon>
	                    <div class="name">取消</div>
	                    <div class="fontclass">.uf-close</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-correct"></Icon>
	                    <div class="name">对号</div>
	                    <div class="fontclass">.uf-correct</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-histogram-s-o-2"></Icon>
	                    <div class="name">图表切换</div>
	                    <div class="fontclass">.uf-histogram-s-o-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-4square-2"></Icon>
	                    <div class="name">应用中心</div>
	                    <div class="fontclass">.uf-4square-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sunny"></Icon>
	                    <div class="name">天气 </div>
	                    <div class="fontclass">.uf-sunny</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-link"></Icon>
	                    <div class="name">复制链接</div>
	                    <div class="fontclass">.uf-link</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-eye"></Icon>
	                    <div class="name">查看</div>
	                    <div class="fontclass">.uf-eye</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-eye-o"></Icon>
	                    <div class="name">查看</div>
	                    <div class="fontclass">.uf-eye-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-qian"></Icon>
	                    <div class="name">签</div>
	                    <div class="fontclass">.uf-qian</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-widgetab"></Icon>
	                    <div class="name">小部件授权</div>
	                    <div class="fontclass">.uf-widgetab</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rmb-s"></Icon>
	                    <div class="name">报价</div>
	                    <div class="fontclass">.uf-rmb-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-link-off"></Icon>
	                    <div class="name">断开链接</div>
	                    <div class="fontclass">.uf-link-off</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-shang-s"></Icon>
	                    <div class="name">上架</div>
	                    <div class="fontclass">.uf-shang-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-xia-s"></Icon>
	                    <div class="name">下架</div>
	                    <div class="fontclass">.uf-xia-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-box-2"></Icon>
	                    <div class="name">盒子full</div>
	                    <div class="fontclass">.uf-box-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pass-o"></Icon>
	                    <div class="name">授权</div>
	                    <div class="fontclass">.uf-pass-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-down"></Icon>
	                    <div class="name">angle-arrow-down</div>
	                    <div class="fontclass">.uf-arrow-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-right"></Icon>
	                    <div class="name">angle-arrow-pointing-to-right</div>
	                    <div class="fontclass">.uf-arrow-right</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-left"></Icon>
	                    <div class="name">angle-pointing-to-left</div>
	                    <div class="fontclass">.uf-arrow-left</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-box"></Icon>
	                    <div class="name">archive-black-box</div>
	                    <div class="fontclass">.uf-box</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-triangle-right"></Icon>
	                    <div class="name">arrowhead-pointing-to-the-right</div>
	                    <div class="fontclass">.uf-triangle-right</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-histogram-s-o"></Icon>
	                    <div class="name">bar-graph-on-a-rectangle</div>
	                    <div class="fontclass">.uf-histogram-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-book"></Icon>
	                    <div class="name">book</div>
	                    <div class="fontclass">.uf-book</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bookmark-o"></Icon>
	                    <div class="name">bookmark-white</div>
	                    <div class="fontclass">.uf-bookmark-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-leaf"></Icon>
	                    <div class="name">branch-with-leaves-black-shape</div>
	                    <div class="fontclass">.uf-leaf</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bullseye"></Icon>
	                    <div class="name">bullseye</div>
	                    <div class="fontclass">.uf-bullseye</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-gridcaretdown"></Icon>
	                    <div class="name">camera-retro</div>
	                    <div class="fontclass">.uf-gridcaretdown</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-triangle-up"></Icon>
	                    <div class="name">caret-arrow-up</div>
	                    <div class="fontclass">.uf-triangle-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-triangle-down"></Icon>
	                    <div class="name">caret-down</div>
	                    <div class="fontclass">.uf-triangle-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud-down"></Icon>
	                    <div class="name">cloud-storage-download</div>
	                    <div class="fontclass">.uf-cloud-down</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud-up"></Icon>
	                    <div class="name">cloud-storage-uploading-option</div>
	                    <div class="fontclass">.uf-cloud-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bubble"></Icon>
	                    <div class="name">comment-black-oval-bubble-shape</div>
	                    <div class="fontclass">.uf-bubble</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bubble-o"></Icon>
	                    <div class="name">comment-white-oval-bubble</div>
	                    <div class="fontclass">.uf-bubble-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-copy"></Icon>
	                    <div class="name">copy-document</div>
	                    <div class="fontclass">.uf-copy</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-correct-2"></Icon>
	                    <div class="name">correct-symbol</div>
	                    <div class="fontclass">.uf-correct-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-2arrow-left"></Icon>
	                    <div class="name">double-left-chevron</div>
	                    <div class="fontclass">.uf-2arrow-left</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-down-2"></Icon>
	                    <div class="name">down-arrow</div>
	                    <div class="fontclass">.uf-arrow-down-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-download"></Icon>
	                    <div class="name">download-to-storage-drive</div>
	                    <div class="fontclass">.uf-download</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-earth"></Icon>
	                    <div class="name">earth-globe</div>
	                    <div class="fontclass">.uf-earth</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mail-o"></Icon>
	                    <div class="name">envelope-of-white-paper</div>
	                    <div class="fontclass">.uf-mail-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mail"></Icon>
	                    <div class="name">envelope</div>
	                    <div class="fontclass">.uf-mail</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-exc"></Icon>
	                    <div class="name">exclamation</div>
	                    <div class="fontclass">.uf-exc</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-externallink"></Icon>
	                    <div class="name">external-link-symbol</div>
	                    <div class="fontclass">.uf-externallink</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-video"></Icon>
	                    <div class="name">facetime-button</div>
	                    <div class="fontclass">.uf-video</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-films"></Icon>
	                    <div class="name">film-strip-with-two-photograms</div>
	                    <div class="fontclass">.uf-films</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-folder"></Icon>
	                    <div class="name">folder-closed-black-shape</div>
	                    <div class="fontclass">.uf-folder</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-folder-o"></Icon>
	                    <div class="name">folder-white-shape</div>
	                    <div class="fontclass">.uf-folder-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-4square"></Icon>
	                    <div class="name">four-black-squares</div>
	                    <div class="fontclass">.uf-4square</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-gift"></Icon>
	                    <div class="name">gift-box</div>
	                    <div class="fontclass">.uf-gift</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-github-c"></Icon>
	                    <div class="name">github-logo</div>
	                    <div class="fontclass">.uf-github-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-github-s"></Icon>
	                    <div class="name">github-sign</div>
	                    <div class="fontclass">.uf-github-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-heart-o"></Icon>
	                    <div class="name">heart-shape-outline</div>
	                    <div class="fontclass">.uf-heart-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-heart"></Icon>
	                    <div class="name">heart-shape-silhouette</div>
	                    <div class="fontclass">.uf-heart</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-home"></Icon>
	                    <div class="name">home</div>
	                    <div class="fontclass">.uf-home</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-i-c-2"></Icon>
	                    <div class="name">information-button</div>
	                    <div class="fontclass">.uf-i-c-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-i"></Icon>
	                    <div class="name">information-symbol</div>
	                    <div class="fontclass">.uf-i</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-triangle-left"></Icon>
	                    <div class="name">left-arrow</div>
	                    <div class="fontclass">.uf-triangle-left</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-symlist"></Icon>
	                    <div class="name">listing-option</div>
	                    <div class="fontclass">.uf-symlist</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-left-2"></Icon>
	                    <div class="name">long-arrow-pointing-to-left</div>
	                    <div class="fontclass">.uf-arrow-left-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-right-2"></Icon>
	                    <div class="name">long-arrow-pointing-to-the-right</div>
	                    <div class="fontclass">.uf-arrow-right-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-up-2"></Icon>
	                    <div class="name">long-arrow-pointing-up</div>
	                    <div class="fontclass">.uf-arrow-up-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-reduce-c"></Icon>
	                    <div class="name">minus-sign-inside-a-black-circle</div>
	                    <div class="fontclass">.uf-reduce-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-reduce-s"></Icon>
	                    <div class="name">minus-sign-inside-a-black-rounded-square-shape</div>
	                    <div class="fontclass">.uf-reduce-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-minus"></Icon>
	                    <div class="name">minus-symbol</div>
	                    <div class="fontclass">.uf-minus</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mobile"></Icon>
	                    <div class="name">mobile-phone</div>
	                    <div class="fontclass">.uf-mobile</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bell-o"></Icon>
	                    <div class="name">musical-bell-outline</div>
	                    <div class="fontclass">.uf-bell-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-9square"></Icon>
	                    <div class="name">nine-black-tiles</div>
	                    <div class="fontclass">.uf-9square</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-numlist"></Icon>
	                    <div class="name">numbered-list</div>
	                    <div class="fontclass">.uf-numlist</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-folderopen-o"></Icon>
	                    <div class="name">open-folder-outline</div>
	                    <div class="fontclass">.uf-folderopen-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-treefolderopen"></Icon>
	                    <div class="name">open-folder</div>
	                    <div class="fontclass">.uf-treefolderopen</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mac"></Icon>
	                    <div class="name">open-laptop-computer</div>
	                    <div class="fontclass">.uf-mac</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-camera"></Icon>
	                    <div class="name">photo-camera</div>
	                    <div class="fontclass">.uf-camera</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-picture"></Icon>
	                    <div class="name">picture</div>
	                    <div class="fontclass">.uf-picture</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-play"></Icon>
	                    <div class="name">play-sign</div>
	                    <div class="fontclass">.uf-play</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-play-o"></Icon>
	                    <div class="name">play-video-button</div>
	                    <div class="fontclass">.uf-play-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-qm-c"></Icon>
	                    <div class="name">question-mark-on-a-circular-black-background</div>
	                    <div class="fontclass">.uf-qm-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-qm"></Icon>
	                    <div class="name">question-sign</div>
	                    <div class="fontclass">.uf-qm</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-navmenu-light"></Icon>
	                    <div class="name">reorder-option</div>
	                    <div class="fontclass">.uf-navmenu-light</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-settings"></Icon>
	                    <div class="name">settings</div>
	                    <div class="fontclass">.uf-settings</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cart"></Icon>
	                    <div class="name">shopping-cart-black-shape</div>
	                    <div class="fontclass">.uf-cart</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-histogram"></Icon>
	                    <div class="name">signal-bars</div>
	                    <div class="fontclass">.uf-histogram</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-finetune"></Icon>
	                    <div class="name">sort-arrows-couple-pointing-up-and-down</div>
	                    <div class="fontclass">.uf-finetune</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sortup"></Icon>
	                    <div class="name">sort-by-attributes-interface-button-option</div>
	                    <div class="fontclass">.uf-sortup</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sortdown"></Icon>
	                    <div class="name">sort-by-attributes</div>
	                    <div class="fontclass">.uf-sortdown</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sort19"></Icon>
	                    <div class="name">sort-by-numeric-order</div>
	                    <div class="fontclass">.uf-sort19</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sort91"></Icon>
	                    <div class="name">sort-by-order</div>
	                    <div class="fontclass">.uf-sort91</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-za"></Icon>
	                    <div class="name">sort-reverse-alphabetical-order</div>
	                    <div class="fontclass">.uf-za</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-star-o"></Icon>
	                    <div class="name">star-1</div>
	                    <div class="fontclass">.uf-star-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-star-2"></Icon>
	                    <div class="name">star-half-empty</div>
	                    <div class="fontclass">.uf-star-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-star"></Icon>
	                    <div class="name">star</div>
	                    <div class="fontclass">.uf-star</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-luggage"></Icon>
	                    <div class="name">suitcase-with-white-details</div>
	                    <div class="fontclass">.uf-luggage</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-table"></Icon>
	                    <div class="name">table-grid</div>
	                    <div class="fontclass">.uf-table</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tel"></Icon>
	                    <div class="name">telephone-handle-silhouette</div>
	                    <div class="fontclass">.uf-tel</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tel-s"></Icon>
	                    <div class="name">telephone-symbol-button</div>
	                    <div class="fontclass">.uf-tel-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-terminal"></Icon>
	                    <div class="name">terminal</div>
	                    <div class="fontclass">.uf-terminal</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-file"></Icon>
	                    <div class="name">text-file-1</div>
	                    <div class="fontclass">.uf-file</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-file-o"></Icon>
	                    <div class="name">text-file</div>
	                    <div class="fontclass">.uf-file-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-3dot-h"></Icon>
	                    <div class="name">three-small-square-shapes</div>
	                    <div class="fontclass">.uf-3dot-h</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-time-c-o"></Icon>
	                    <div class="name">time</div>
	                    <div class="fontclass">.uf-time-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-upload"></Icon>
	                    <div class="name">upload</div>
	                    <div class="fontclass">.uf-upload</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-3dot-v"></Icon>
	                    <div class="name">vertical-ellipsis</div>
	                    <div class="fontclass">.uf-3dot-v</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rmb"></Icon>
	                    <div class="name">yen-symbol</div>
	                    <div class="fontclass">.uf-rmb</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-c-o-up"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-arrow-c-o-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-reject-2"></Icon>
	                    <div class="name">驳回</div>
	                    <div class="fontclass">.uf-reject-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-barcode"></Icon>
	                    <div class="name">barcode-1</div>
	                    <div class="fontclass">.uf-barcode</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-zoom-out"></Icon>
	                    <div class="name">zoom-out</div>
	                    <div class="fontclass">.uf-zoom-out</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-exc-t-o"></Icon>
	                    <div class="name">三角叹号</div>
	                    <div class="fontclass">.uf-exc-t-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-pass"></Icon>
	                    <div class="name">通过</div>
	                    <div class="fontclass">.uf-pass</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-flow"></Icon>
	                    <div class="name">关系网络</div>
	                    <div class="fontclass">.uf-flow</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-add-c"></Icon>
	                    <div class="name">加</div>
	                    <div class="fontclass">.uf-add-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-c-o-right-2"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-arrow-c-o-right-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-shelf-on"></Icon>
	                    <div class="name">上架</div>
	                    <div class="fontclass">.uf-shelf-on</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-shelf-off"></Icon>
	                    <div class="name">下架</div>
	                    <div class="fontclass">.uf-shelf-off</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-file-o-2"></Icon>
	                    <div class="name">文件</div>
	                    <div class="fontclass">.uf-file-o-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-truck-o"></Icon>
	                    <div class="name">到货确认</div>
	                    <div class="fontclass">.uf-truck-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-super"></Icon>
	                    <div class="name">功能强大</div>
	                    <div class="fontclass">.uf-super</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-equipment"></Icon>
	                    <div class="name">设备</div>
	                    <div class="fontclass">.uf-equipment</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-c-o-left-2"></Icon>
	                    <div class="name">箭头</div>
	                    <div class="fontclass">.uf-arrow-c-o-left-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-files-o"></Icon>
	                    <div class="name">资源文件</div>
	                    <div class="fontclass">.uf-files-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cloud-o"></Icon>
	                    <div class="name">云</div>
	                    <div class="fontclass">.uf-cloud-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rmb-s-o-2"></Icon>
	                    <div class="name">对账</div>
	                    <div class="fontclass">.uf-rmb-s-o-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-3dot-c-o"></Icon>
	                    <div class="name">管理中心</div>
	                    <div class="fontclass">.uf-3dot-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-dafeng"></Icon>
	                    <div class="name">天气_大风</div>
	                    <div class="fontclass">.uf-dafeng</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-baoxue"></Icon>
	                    <div class="name">天气_暴雪</div>
	                    <div class="fontclass">.uf-baoxue</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bingbao"></Icon>
	                    <div class="name">天气_冰雹</div>
	                    <div class="fontclass">.uf-bingbao</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-fengbao"></Icon>
	                    <div class="name">天气_风暴</div>
	                    <div class="fontclass">.uf-fengbao</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-xiaoyu"></Icon>
	                    <div class="name">天气_小雨</div>
	                    <div class="fontclass">.uf-xiaoyu</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-zhenxue"></Icon>
	                    <div class="name">天气_阵雪</div>
	                    <div class="fontclass">.uf-zhenxue</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-zhongyu"></Icon>
	                    <div class="name">天气_中雨</div>
	                    <div class="fontclass">.uf-zhongyu</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-es"></Icon>
	                    <div class="name">ES</div>
	                    <div class="fontclass">.uf-es</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-flow-o-2"></Icon>
	                    <div class="name">流程</div>
	                    <div class="fontclass">.uf-flow-o-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-activate-2"></Icon>
	                    <div class="name">激活-01</div>
	                    <div class="fontclass">.uf-activate-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-flow-o"></Icon>
	                    <div class="name">流程</div>
	                    <div class="fontclass">.uf-flow-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bulb-2"></Icon>
	                    <div class="name">技术支持</div>
	                    <div class="fontclass">.uf-bulb-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mi-c"></Icon>
	                    <div class="name">必填</div>
	                    <div class="fontclass">.uf-mi-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-top-up"></Icon>
	                    <div class="name">返回顶部</div>
	                    <div class="fontclass">.uf-top-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-creditcard"></Icon>
	                    <div class="name">credit-card</div>
	                    <div class="fontclass">.uf-creditcard</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-align-center"></Icon>
	                    <div class="name">align-center</div>
	                    <div class="fontclass">.uf-align-center</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-align-justify"></Icon>
	                    <div class="name">align-justify</div>
	                    <div class="fontclass">.uf-align-justify</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-align-left"></Icon>
	                    <div class="name">align-left</div>
	                    <div class="fontclass">.uf-align-left</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-align-right"></Icon>
	                    <div class="name">align-right</div>
	                    <div class="fontclass">.uf-align-right</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-ju-c-o"></Icon>
	                    <div class="name">拒</div>
	                    <div class="fontclass">.uf-ju-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-truck"></Icon>
	                    <div class="name">货到付款</div>
	                    <div class="fontclass">.uf-truck</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-setting-c-o"></Icon>
	                    <div class="name">流程</div>
	                    <div class="fontclass">.uf-setting-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-users-o"></Icon>
	                    <div class="name">楼宇图标_用户组</div>
	                    <div class="fontclass">.uf-users-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bag-s-o"></Icon>
	                    <div class="name">商品</div>
	                    <div class="fontclass">.uf-bag-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cai-s"></Icon>
	                    <div class="name">采购</div>
	                    <div class="fontclass">.uf-cai-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-listcheck"></Icon>
	                    <div class="name">定标</div>
	                    <div class="fontclass">.uf-listcheck</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-users"></Icon>
	                    <div class="name">群</div>
	                    <div class="fontclass">.uf-users</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-i-c"></Icon>
	                    <div class="name">查看详情</div>
	                    <div class="fontclass">.uf-i-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-building-o"></Icon>
	                    <div class="name">企业信息</div>
	                    <div class="fontclass">.uf-building-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rmb-s-o"></Icon>
	                    <div class="name">报价管理</div>
	                    <div class="fontclass">.uf-rmb-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-reject"></Icon>
	                    <div class="name">已驳回</div>
	                    <div class="fontclass">.uf-reject</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-9dot"></Icon>
	                    <div class="name">菜单</div>
	                    <div class="fontclass">.uf-9dot</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-loadingstate"></Icon>
	                    <div class="name">loading</div>
	                    <div class="fontclass">.uf-loadingstate</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-gateway"></Icon>
	                    <div class="name">网关</div>
	                    <div class="fontclass">.uf-gateway</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-ticket-s-o"></Icon>
	                    <div class="name">发票</div>
	                    <div class="fontclass">.uf-ticket-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-userset"></Icon>
	                    <div class="name">管理中心</div>
	                    <div class="fontclass">.uf-userset</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-puzzle-o"></Icon>
	                    <div class="name">组件</div>
	                    <div class="fontclass">.uf-puzzle-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-box-o"></Icon>
	                    <div class="name">物料管理</div>
	                    <div class="fontclass">.uf-box-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bulb"></Icon>
	                    <div class="name">激活</div>
	                    <div class="fontclass">.uf-bulb</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-exc-t"></Icon>
	                    <div class="name">感叹号_icon</div>
	                    <div class="fontclass">.uf-exc-t</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-rmb-c"></Icon>
	                    <div class="name">报价</div>
	                    <div class="fontclass">.uf-rmb-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-table-s-o"></Icon>
	                    <div class="name">发票</div>
	                    <div class="fontclass">.uf-table-s-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-umbrella-o"></Icon>
	                    <div class="name">伞</div>
	                    <div class="fontclass">.uf-umbrella-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-dropbox"></Icon>
	                    <div class="name">dropbox</div>
	                    <div class="fontclass">.uf-dropbox</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-search-light"></Icon>
	                    <div class="name">搜索-搜索</div>
	                    <div class="fontclass">.uf-search-light</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-cart-o"></Icon>
	                    <div class="name">shopping-cart-black-shape</div>
	                    <div class="fontclass">.uf-cart-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-kero-col"></Icon>
	                    <div class="name">kero</div>
	                    <div class="fontclass">.uf-kero-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-uba-col"></Icon>
	                    <div class="name">uba</div>
	                    <div class="fontclass">.uf-uba-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tinperzc-col"></Icon>
	                    <div class="name">tinperzc</div>
	                    <div class="fontclass">.uf-tinperzc-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tinperzch-col"></Icon>
	                    <div class="name">tinperzch</div>
	                    <div class="fontclass">.uf-tinperzch-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-iuap-col"></Icon>
	                    <div class="name">iuap</div>
	                    <div class="fontclass">.uf-iuap-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-iuapdesign-col"></Icon>
	                    <div class="name">iuapdesignz</div>
	                    <div class="fontclass">.uf-iuapdesign-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-bee-col"></Icon>
	                    <div class="name">bee</div>
	                    <div class="fontclass">.uf-bee-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-neoui-col"></Icon>
	                    <div class="name">neoui</div>
	                    <div class="fontclass">.uf-neoui-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-sparrow-col"></Icon>
	                    <div class="name">sparrow</div>
	                    <div class="fontclass">.uf-sparrow-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tinpercn-col"></Icon>
	                    <div class="name">tinpercn</div>
	                    <div class="fontclass">.uf-tinpercn-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-tinperen-col"></Icon>
	                    <div class="name">tinperen</div>
	                    <div class="fontclass">.uf-tinperen-col</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-arrow-up"></Icon>
	                    <div class="name">angle-arrow-down</div>
	                    <div class="fontclass">.uf-arrow-up</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mailsym"></Icon>
	                    <div class="name">webmail</div>
	                    <div class="fontclass">.uf-mailsym</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-print"></Icon>
	                    <div class="name">办公用品</div>
	                    <div class="fontclass">.uf-print</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-ticket-3"></Icon>
	                    <div class="name">报销</div>
	                    <div class="fontclass">.uf-ticket-3</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-loan"></Icon>
	                    <div class="name">借款</div>
	                    <div class="fontclass">.uf-loan</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-ticket-2"></Icon>
	                    <div class="name">凭证中心</div>
	                    <div class="fontclass">.uf-ticket-2</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-offwork"></Icon>
	                    <div class="name">请假</div>
	                    <div class="fontclass">.uf-offwork</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-todolist"></Icon>
	                    <div class="name">待办</div>
	                    <div class="fontclass">.uf-todolist</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-personin"></Icon>
	                    <div class="name">员工入职</div>
	                    <div class="fontclass">.uf-personin</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-ticket"></Icon>
	                    <div class="name">票务</div>
	                    <div class="fontclass">.uf-ticket</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-linechart"></Icon>
	                    <div class="name">小icon-图表</div>
	                    <div class="fontclass">.uf-linechart</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-4leaf"></Icon>
	                    <div class="name">应用中心</div>
	                    <div class="fontclass">.uf-4leaf</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-listset"></Icon>
	                    <div class="name">信息维护</div>
	                    <div class="fontclass">.uf-listset</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-qi-c-o"></Icon>
	                    <div class="name">企业认证</div>
	                    <div class="fontclass">.uf-qi-c-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-exc-c"></Icon>
	                    <div class="name">叹号</div>
	                    <div class="fontclass">.uf-exc-c</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-code"></Icon>
	                    <div class="name">集成开发</div>
	                    <div class="fontclass">.uf-code</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-plug-o"></Icon>
	                    <div class="name">热拔插</div>
	                    <div class="fontclass">.uf-plug-o</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-search-s"></Icon>
	                    <div class="name">搜索</div>
	                    <div class="fontclass">.uf-search-s</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-treeadd"></Icon>
	                    <div class="name">tree-new-sbling-node</div>
	                    <div class="fontclass">.uf-treeadd</div>
	                </li>
	            
	                <li>
	                <Icon type="uf-mi"></Icon>
	                    <div class="name">必填</div>
	                    <div class="fontclass">.uf-mi</div>
	                </li>
	       		</ul>
			</div>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" Icon","code":"/**\n * @title Icon\n * @description 在iuap字符库，`type`参数值均以-分隔。\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"tinper-icon-demo\">\n\t\t\t\t<ul className=\"icon_lists\">\n            \n\t                <li>\n\t                <Icon type=\"uf-wechat\"></Icon>\n\t                    <div class=\"name\">微信</div>\n\t                    <div class=\"fontclass\">.uf-wechat</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-c-o\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-arrow-up\"></Icon>\n\t                    <div class=\"name\">图表 折线图</div>\n\t                    <div class=\"fontclass\">.uf-histogram-arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-bold\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-bold</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-umbrella\"></Icon>\n\t                    <div class=\"name\">雨伞</div>\n\t                    <div class=\"fontclass\">.uf-umbrella</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qq\"></Icon>\n\t                    <div class=\"name\">QQ</div>\n\t                    <div class=\"fontclass\">.uf-qq</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square-3\"></Icon>\n\t                    <div class=\"name\">分类</div>\n\t                    <div class=\"fontclass\">.uf-4square-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-send\"></Icon>\n\t                    <div class=\"name\">发送</div>\n\t                    <div class=\"fontclass\">.uf-send</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-map\"></Icon>\n\t                    <div class=\"name\">地图</div>\n\t                    <div class=\"fontclass\">.uf-map</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9square-2\"></Icon>\n\t                    <div class=\"name\">标定</div>\n\t                    <div class=\"fontclass\">.uf-9square-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-navmenu\"></Icon>\n\t                    <div class=\"name\">汉堡包</div>\n\t                    <div class=\"fontclass\">.uf-navmenu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pc-2\"></Icon>\n\t                    <div class=\"name\">显示器</div>\n\t                    <div class=\"fontclass\">.uf-pc-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-light-2\"></Icon>\n\t                    <div class=\"name\">zoom</div>\n\t                    <div class=\"fontclass\">.uf-search-light-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-s-2\"></Icon>\n\t                    <div class=\"name\">任务</div>\n\t                    <div class=\"fontclass\">.uf-check-s-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-repeat\"></Icon>\n\t                    <div class=\"name\">撤销</div>\n\t                    <div class=\"fontclass\">.uf-repeat</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-security-2\"></Icon>\n\t                    <div class=\"name\">安全</div>\n\t                    <div class=\"fontclass\">.uf-security-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-lexi\"></Icon>\n\t                    <div class=\"name\">女</div>\n\t                    <div class=\"fontclass\">.uf-lexi</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil-s\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-del\"></Icon>\n\t                    <div class=\"name\">删除</div>\n\t                    <div class=\"fontclass\">.uf-del</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bi-o\"></Icon>\n\t                    <div class=\"name\">比价</div>\n\t                    <div class=\"fontclass\">.uf-bi-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pencil-c\"></Icon>\n\t                    <div class=\"name\">编辑</div>\n\t                    <div class=\"fontclass\">.uf-pencil-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qrcode\"></Icon>\n\t                    <div class=\"name\">二维码</div>\n\t                    <div class=\"fontclass\">.uf-qrcode</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-c-o\"></Icon>\n\t                    <div class=\"name\">免费报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-c-o\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bell\"></Icon>\n\t                    <div class=\"name\">铃铛</div>\n\t                    <div class=\"fontclass\">.uf-bell</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-3\"></Icon>\n\t                    <div class=\"name\">机检通过</div>\n\t                    <div class=\"fontclass\">.uf-pass-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treearrow-down\"></Icon>\n\t                    <div class=\"name\">树形线</div>\n\t                    <div class=\"fontclass\">.uf-treearrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-training\"></Icon>\n\t                    <div class=\"name\">培训</div>\n\t                    <div class=\"fontclass\">.uf-training</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group-2\"></Icon>\n\t                    <div class=\"name\">组织架构</div>\n\t                    <div class=\"fontclass\">.uf-group-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zoom-in\"></Icon>\n\t                    <div class=\"name\">zoom-in</div>\n\t                    <div class=\"fontclass\">.uf-zoom-in</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-security-o\"></Icon>\n\t                    <div class=\"name\">安全</div>\n\t                    <div class=\"fontclass\">.uf-security-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-baojia-c\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-baojia-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rulerpen\"></Icon>\n\t                    <div class=\"name\">定制</div>\n\t                    <div class=\"fontclass\">.uf-rulerpen</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-erpsearch\"></Icon>\n\t                    <div class=\"name\">erp</div>\n\t                    <div class=\"fontclass\">.uf-erpsearch</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group-o\"></Icon>\n\t                    <div class=\"name\">组织机构</div>\n\t                    <div class=\"fontclass\">.uf-group-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-updown\"></Icon>\n\t                    <div class=\"name\">同步中2-同步</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-updown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-c-o\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-s\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pc\"></Icon>\n\t                    <div class=\"name\">工作台</div>\n\t                    <div class=\"fontclass\">.uf-pc</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rain\"></Icon>\n\t                    <div class=\"name\">空气_雨天</div>\n\t                    <div class=\"fontclass\">.uf-rain</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-nodata\"></Icon>\n\t                    <div class=\"name\">无数据</div>\n\t                    <div class=\"fontclass\">.uf-nodata</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-c\"></Icon>\n\t                    <div class=\"name\">关闭</div>\n\t                    <div class=\"fontclass\">.uf-close-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bohui-s-o\"></Icon>\n\t                    <div class=\"name\">审批-驳回</div>\n\t                    <div class=\"fontclass\">.uf-bohui-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud\"></Icon>\n\t                    <div class=\"name\">天气</div>\n\t                    <div class=\"fontclass\">.uf-cloud</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bag-s\"></Icon>\n\t                    <div class=\"name\">商品</div>\n\t                    <div class=\"fontclass\">.uf-bag-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table-2\"></Icon>\n\t                    <div class=\"name\">made</div>\n\t                    <div class=\"fontclass\">.uf-table-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-anglearrowpointingtoright\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-anglearrowpointingtoright</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c-o\"></Icon>\n\t                    <div class=\"name\">叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-group\"></Icon>\n\t                    <div class=\"name\">组织机构</div>\n\t                    <div class=\"fontclass\">.uf-group</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-personin-o\"></Icon>\n\t                    <div class=\"name\">认证激活</div>\n\t                    <div class=\"fontclass\">.uf-personin-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-calendar\"></Icon>\n\t                    <div class=\"name\">gm_日历</div>\n\t                    <div class=\"fontclass\">.uf-calendar</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-s-o\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sync-c-o\"></Icon>\n\t                    <div class=\"name\">同步</div>\n\t                    <div class=\"fontclass\">.uf-sync-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-grid\"></Icon>\n\t                    <div class=\"name\">grid</div>\n\t                    <div class=\"fontclass\">.uf-grid</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-anglepointingtoleft\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-anglepointingtoleft</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-activate-3\"></Icon>\n\t                    <div class=\"name\">激活</div>\n\t                    <div class=\"fontclass\">.uf-activate-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-caven\"></Icon>\n\t                    <div class=\"name\">男</div>\n\t                    <div class=\"fontclass\">.uf-caven</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-back\"></Icon>\n\t                    <div class=\"name\">返回</div>\n\t                    <div class=\"fontclass\">.uf-back</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-2\"></Icon>\n\t                    <div class=\"name\">授权</div>\n\t                    <div class=\"fontclass\">.uf-pass-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-s-o\"></Icon>\n\t                    <div class=\"name\">显示树</div>\n\t                    <div class=\"fontclass\">.uf-reduce-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-area\"></Icon>\n\t                    <div class=\"name\">图表图标-面积图</div>\n\t                    <div class=\"fontclass\">.uf-area</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flag\"></Icon>\n\t                    <div class=\"name\">旗帜</div>\n\t                    <div class=\"fontclass\">.uf-flag</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-o-2\"></Icon>\n\t                    <div class=\"name\">购买盒子</div>\n\t                    <div class=\"fontclass\">.uf-box-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-s-o-down\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-arrow-s-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-s-o-up\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-arrow-s-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-building\"></Icon>\n\t                    <div class=\"name\">企业信息</div>\n\t                    <div class=\"fontclass\">.uf-building</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tapp\"></Icon>\n\t                    <div class=\"name\">天气</div>\n\t                    <div class=\"fontclass\">.uf-tapp</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolder\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-treefolder</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-advice\"></Icon>\n\t                    <div class=\"name\">咨询</div>\n\t                    <div class=\"fontclass\">.uf-advice</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2collayout\"></Icon>\n\t                    <div class=\"name\">序列布局</div>\n\t                    <div class=\"fontclass\">.uf-2collayout</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-s\"></Icon>\n\t                    <div class=\"name\">审批</div>\n\t                    <div class=\"fontclass\">.uf-check-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sign\"></Icon>\n\t                    <div class=\"name\">采购合同</div>\n\t                    <div class=\"fontclass\">.uf-sign</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listsearch\"></Icon>\n\t                    <div class=\"name\">查看详情</div>\n\t                    <div class=\"fontclass\">.uf-listsearch</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gridcaretarrowup\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-gridcaretarrowup</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye-c-o\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-check-c-o\"></Icon>\n\t                    <div class=\"name\">许可</div>\n\t                    <div class=\"fontclass\">.uf-check-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-seal\"></Icon>\n\t                    <div class=\"name\">审批</div>\n\t                    <div class=\"fontclass\">.uf-seal</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-erpbox\"></Icon>\n\t                    <div class=\"name\">erp</div>\n\t                    <div class=\"fontclass\">.uf-erpbox</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rulerpen-o\"></Icon>\n\t                    <div class=\"name\">定制</div>\n\t                    <div class=\"fontclass\">.uf-rulerpen-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-role\"></Icon>\n\t                    <div class=\"name\">角色</div>\n\t                    <div class=\"fontclass\">.uf-role</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c-2\"></Icon>\n\t                    <div class=\"name\">提示叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pad\"></Icon>\n\t                    <div class=\"name\">pad</div>\n\t                    <div class=\"fontclass\">.uf-pad</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolder-closed\"></Icon>\n\t                    <div class=\"name\">tree-new-sbling-node</div>\n\t                    <div class=\"fontclass\">.uf-treefolder-closed</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-c-o\"></Icon>\n\t                    <div class=\"name\">减号</div>\n\t                    <div class=\"fontclass\">.uf-reduce-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-s-o\"></Icon>\n\t                    <div class=\"name\">通过</div>\n\t                    <div class=\"fontclass\">.uf-pass-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-setting\"></Icon>\n\t                    <div class=\"name\">维护</div>\n\t                    <div class=\"fontclass\">.uf-setting</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close-s\"></Icon>\n\t                    <div class=\"name\">ZSX号</div>\n\t                    <div class=\"fontclass\">.uf-close-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-map-o\"></Icon>\n\t                    <div class=\"name\">地图</div>\n\t                    <div class=\"fontclass\">.uf-map-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-move\"></Icon>\n\t                    <div class=\"name\">移动</div>\n\t                    <div class=\"fontclass\">.uf-move</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-down\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-right\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-left\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-plus\"></Icon>\n\t                    <div class=\"name\">plus</div>\n\t                    <div class=\"fontclass\">.uf-plus</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-right\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-down\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-list-s-o\"></Icon>\n\t                    <div class=\"name\">暂无数据</div>\n\t                    <div class=\"fontclass\">.uf-list-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-down\"></Icon>\n\t                    <div class=\"name\">云下载</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-nodata-2\"></Icon>\n\t                    <div class=\"name\">无效数据</div>\n\t                    <div class=\"fontclass\">.uf-nodata-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-s\"></Icon>\n\t                    <div class=\"name\">文档文件-01</div>\n\t                    <div class=\"fontclass\">.uf-file-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-up\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-notification\"></Icon>\n\t                    <div class=\"name\">消息喇叭</div>\n\t                    <div class=\"fontclass\">.uf-notification</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-piechart\"></Icon>\n\t                    <div class=\"name\">图表_饼</div>\n\t                    <div class=\"fontclass\">.uf-piechart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o-up\"></Icon>\n\t                    <div class=\"name\">云_上传</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-close\"></Icon>\n\t                    <div class=\"name\">取消</div>\n\t                    <div class=\"fontclass\">.uf-close</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-correct\"></Icon>\n\t                    <div class=\"name\">对号</div>\n\t                    <div class=\"fontclass\">.uf-correct</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-s-o-2\"></Icon>\n\t                    <div class=\"name\">图表切换</div>\n\t                    <div class=\"fontclass\">.uf-histogram-s-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square-2\"></Icon>\n\t                    <div class=\"name\">应用中心</div>\n\t                    <div class=\"fontclass\">.uf-4square-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sunny\"></Icon>\n\t                    <div class=\"name\">天气 </div>\n\t                    <div class=\"fontclass\">.uf-sunny</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-link\"></Icon>\n\t                    <div class=\"name\">复制链接</div>\n\t                    <div class=\"fontclass\">.uf-link</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-eye-o\"></Icon>\n\t                    <div class=\"name\">查看</div>\n\t                    <div class=\"fontclass\">.uf-eye-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qian\"></Icon>\n\t                    <div class=\"name\">签</div>\n\t                    <div class=\"fontclass\">.uf-qian</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-widgetab\"></Icon>\n\t                    <div class=\"name\">小部件授权</div>\n\t                    <div class=\"fontclass\">.uf-widgetab</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-link-off\"></Icon>\n\t                    <div class=\"name\">断开链接</div>\n\t                    <div class=\"fontclass\">.uf-link-off</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shang-s\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-shang-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-xia-s\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-xia-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-2\"></Icon>\n\t                    <div class=\"name\">盒子full</div>\n\t                    <div class=\"fontclass\">.uf-box-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass-o\"></Icon>\n\t                    <div class=\"name\">授权</div>\n\t                    <div class=\"fontclass\">.uf-pass-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-down\"></Icon>\n\t                    <div class=\"name\">angle-arrow-down</div>\n\t                    <div class=\"fontclass\">.uf-arrow-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-right\"></Icon>\n\t                    <div class=\"name\">angle-arrow-pointing-to-right</div>\n\t                    <div class=\"fontclass\">.uf-arrow-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-left\"></Icon>\n\t                    <div class=\"name\">angle-pointing-to-left</div>\n\t                    <div class=\"fontclass\">.uf-arrow-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box\"></Icon>\n\t                    <div class=\"name\">archive-black-box</div>\n\t                    <div class=\"fontclass\">.uf-box</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-right\"></Icon>\n\t                    <div class=\"name\">arrowhead-pointing-to-the-right</div>\n\t                    <div class=\"fontclass\">.uf-triangle-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram-s-o\"></Icon>\n\t                    <div class=\"name\">bar-graph-on-a-rectangle</div>\n\t                    <div class=\"fontclass\">.uf-histogram-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-book\"></Icon>\n\t                    <div class=\"name\">book</div>\n\t                    <div class=\"fontclass\">.uf-book</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bookmark-o\"></Icon>\n\t                    <div class=\"name\">bookmark-white</div>\n\t                    <div class=\"fontclass\">.uf-bookmark-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-leaf\"></Icon>\n\t                    <div class=\"name\">branch-with-leaves-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-leaf</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bullseye\"></Icon>\n\t                    <div class=\"name\">bullseye</div>\n\t                    <div class=\"fontclass\">.uf-bullseye</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gridcaretdown\"></Icon>\n\t                    <div class=\"name\">camera-retro</div>\n\t                    <div class=\"fontclass\">.uf-gridcaretdown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-up\"></Icon>\n\t                    <div class=\"name\">caret-arrow-up</div>\n\t                    <div class=\"fontclass\">.uf-triangle-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-down\"></Icon>\n\t                    <div class=\"name\">caret-down</div>\n\t                    <div class=\"fontclass\">.uf-triangle-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-down\"></Icon>\n\t                    <div class=\"name\">cloud-storage-download</div>\n\t                    <div class=\"fontclass\">.uf-cloud-down</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-up\"></Icon>\n\t                    <div class=\"name\">cloud-storage-uploading-option</div>\n\t                    <div class=\"fontclass\">.uf-cloud-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bubble\"></Icon>\n\t                    <div class=\"name\">comment-black-oval-bubble-shape</div>\n\t                    <div class=\"fontclass\">.uf-bubble</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bubble-o\"></Icon>\n\t                    <div class=\"name\">comment-white-oval-bubble</div>\n\t                    <div class=\"fontclass\">.uf-bubble-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-copy\"></Icon>\n\t                    <div class=\"name\">copy-document</div>\n\t                    <div class=\"fontclass\">.uf-copy</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-correct-2\"></Icon>\n\t                    <div class=\"name\">correct-symbol</div>\n\t                    <div class=\"fontclass\">.uf-correct-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-2arrow-left\"></Icon>\n\t                    <div class=\"name\">double-left-chevron</div>\n\t                    <div class=\"fontclass\">.uf-2arrow-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-down-2\"></Icon>\n\t                    <div class=\"name\">down-arrow</div>\n\t                    <div class=\"fontclass\">.uf-arrow-down-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-download\"></Icon>\n\t                    <div class=\"name\">download-to-storage-drive</div>\n\t                    <div class=\"fontclass\">.uf-download</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-earth\"></Icon>\n\t                    <div class=\"name\">earth-globe</div>\n\t                    <div class=\"fontclass\">.uf-earth</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mail-o\"></Icon>\n\t                    <div class=\"name\">envelope-of-white-paper</div>\n\t                    <div class=\"fontclass\">.uf-mail-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mail\"></Icon>\n\t                    <div class=\"name\">envelope</div>\n\t                    <div class=\"fontclass\">.uf-mail</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc\"></Icon>\n\t                    <div class=\"name\">exclamation</div>\n\t                    <div class=\"fontclass\">.uf-exc</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-externallink\"></Icon>\n\t                    <div class=\"name\">external-link-symbol</div>\n\t                    <div class=\"fontclass\">.uf-externallink</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-video\"></Icon>\n\t                    <div class=\"name\">facetime-button</div>\n\t                    <div class=\"fontclass\">.uf-video</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-films\"></Icon>\n\t                    <div class=\"name\">film-strip-with-two-photograms</div>\n\t                    <div class=\"fontclass\">.uf-films</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folder\"></Icon>\n\t                    <div class=\"name\">folder-closed-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-folder</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folder-o\"></Icon>\n\t                    <div class=\"name\">folder-white-shape</div>\n\t                    <div class=\"fontclass\">.uf-folder-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4square\"></Icon>\n\t                    <div class=\"name\">four-black-squares</div>\n\t                    <div class=\"fontclass\">.uf-4square</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gift\"></Icon>\n\t                    <div class=\"name\">gift-box</div>\n\t                    <div class=\"fontclass\">.uf-gift</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-github-c\"></Icon>\n\t                    <div class=\"name\">github-logo</div>\n\t                    <div class=\"fontclass\">.uf-github-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-github-s\"></Icon>\n\t                    <div class=\"name\">github-sign</div>\n\t                    <div class=\"fontclass\">.uf-github-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-heart-o\"></Icon>\n\t                    <div class=\"name\">heart-shape-outline</div>\n\t                    <div class=\"fontclass\">.uf-heart-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-heart\"></Icon>\n\t                    <div class=\"name\">heart-shape-silhouette</div>\n\t                    <div class=\"fontclass\">.uf-heart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-home\"></Icon>\n\t                    <div class=\"name\">home</div>\n\t                    <div class=\"fontclass\">.uf-home</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i-c-2\"></Icon>\n\t                    <div class=\"name\">information-button</div>\n\t                    <div class=\"fontclass\">.uf-i-c-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i\"></Icon>\n\t                    <div class=\"name\">information-symbol</div>\n\t                    <div class=\"fontclass\">.uf-i</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-triangle-left\"></Icon>\n\t                    <div class=\"name\">left-arrow</div>\n\t                    <div class=\"fontclass\">.uf-triangle-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-symlist\"></Icon>\n\t                    <div class=\"name\">listing-option</div>\n\t                    <div class=\"fontclass\">.uf-symlist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-left-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-to-left</div>\n\t                    <div class=\"fontclass\">.uf-arrow-left-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-right-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-to-the-right</div>\n\t                    <div class=\"fontclass\">.uf-arrow-right-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-up-2\"></Icon>\n\t                    <div class=\"name\">long-arrow-pointing-up</div>\n\t                    <div class=\"fontclass\">.uf-arrow-up-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-c\"></Icon>\n\t                    <div class=\"name\">minus-sign-inside-a-black-circle</div>\n\t                    <div class=\"fontclass\">.uf-reduce-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reduce-s\"></Icon>\n\t                    <div class=\"name\">minus-sign-inside-a-black-rounded-square-shape</div>\n\t                    <div class=\"fontclass\">.uf-reduce-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-minus\"></Icon>\n\t                    <div class=\"name\">minus-symbol</div>\n\t                    <div class=\"fontclass\">.uf-minus</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mobile\"></Icon>\n\t                    <div class=\"name\">mobile-phone</div>\n\t                    <div class=\"fontclass\">.uf-mobile</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bell-o\"></Icon>\n\t                    <div class=\"name\">musical-bell-outline</div>\n\t                    <div class=\"fontclass\">.uf-bell-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9square\"></Icon>\n\t                    <div class=\"name\">nine-black-tiles</div>\n\t                    <div class=\"fontclass\">.uf-9square</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-numlist\"></Icon>\n\t                    <div class=\"name\">numbered-list</div>\n\t                    <div class=\"fontclass\">.uf-numlist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-folderopen-o\"></Icon>\n\t                    <div class=\"name\">open-folder-outline</div>\n\t                    <div class=\"fontclass\">.uf-folderopen-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treefolderopen\"></Icon>\n\t                    <div class=\"name\">open-folder</div>\n\t                    <div class=\"fontclass\">.uf-treefolderopen</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mac\"></Icon>\n\t                    <div class=\"name\">open-laptop-computer</div>\n\t                    <div class=\"fontclass\">.uf-mac</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-camera\"></Icon>\n\t                    <div class=\"name\">photo-camera</div>\n\t                    <div class=\"fontclass\">.uf-camera</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-picture\"></Icon>\n\t                    <div class=\"name\">picture</div>\n\t                    <div class=\"fontclass\">.uf-picture</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-play\"></Icon>\n\t                    <div class=\"name\">play-sign</div>\n\t                    <div class=\"fontclass\">.uf-play</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-play-o\"></Icon>\n\t                    <div class=\"name\">play-video-button</div>\n\t                    <div class=\"fontclass\">.uf-play-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qm-c\"></Icon>\n\t                    <div class=\"name\">question-mark-on-a-circular-black-background</div>\n\t                    <div class=\"fontclass\">.uf-qm-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qm\"></Icon>\n\t                    <div class=\"name\">question-sign</div>\n\t                    <div class=\"fontclass\">.uf-qm</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-navmenu-light\"></Icon>\n\t                    <div class=\"name\">reorder-option</div>\n\t                    <div class=\"fontclass\">.uf-navmenu-light</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-settings\"></Icon>\n\t                    <div class=\"name\">settings</div>\n\t                    <div class=\"fontclass\">.uf-settings</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cart\"></Icon>\n\t                    <div class=\"name\">shopping-cart-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-cart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-histogram\"></Icon>\n\t                    <div class=\"name\">signal-bars</div>\n\t                    <div class=\"fontclass\">.uf-histogram</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-finetune\"></Icon>\n\t                    <div class=\"name\">sort-arrows-couple-pointing-up-and-down</div>\n\t                    <div class=\"fontclass\">.uf-finetune</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sortup\"></Icon>\n\t                    <div class=\"name\">sort-by-attributes-interface-button-option</div>\n\t                    <div class=\"fontclass\">.uf-sortup</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sortdown\"></Icon>\n\t                    <div class=\"name\">sort-by-attributes</div>\n\t                    <div class=\"fontclass\">.uf-sortdown</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sort19\"></Icon>\n\t                    <div class=\"name\">sort-by-numeric-order</div>\n\t                    <div class=\"fontclass\">.uf-sort19</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sort91\"></Icon>\n\t                    <div class=\"name\">sort-by-order</div>\n\t                    <div class=\"fontclass\">.uf-sort91</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-za\"></Icon>\n\t                    <div class=\"name\">sort-reverse-alphabetical-order</div>\n\t                    <div class=\"fontclass\">.uf-za</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star-o\"></Icon>\n\t                    <div class=\"name\">star-1</div>\n\t                    <div class=\"fontclass\">.uf-star-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star-2\"></Icon>\n\t                    <div class=\"name\">star-half-empty</div>\n\t                    <div class=\"fontclass\">.uf-star-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-star\"></Icon>\n\t                    <div class=\"name\">star</div>\n\t                    <div class=\"fontclass\">.uf-star</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-luggage\"></Icon>\n\t                    <div class=\"name\">suitcase-with-white-details</div>\n\t                    <div class=\"fontclass\">.uf-luggage</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table\"></Icon>\n\t                    <div class=\"name\">table-grid</div>\n\t                    <div class=\"fontclass\">.uf-table</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tel\"></Icon>\n\t                    <div class=\"name\">telephone-handle-silhouette</div>\n\t                    <div class=\"fontclass\">.uf-tel</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tel-s\"></Icon>\n\t                    <div class=\"name\">telephone-symbol-button</div>\n\t                    <div class=\"fontclass\">.uf-tel-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-terminal\"></Icon>\n\t                    <div class=\"name\">terminal</div>\n\t                    <div class=\"fontclass\">.uf-terminal</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file\"></Icon>\n\t                    <div class=\"name\">text-file-1</div>\n\t                    <div class=\"fontclass\">.uf-file</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-o\"></Icon>\n\t                    <div class=\"name\">text-file</div>\n\t                    <div class=\"fontclass\">.uf-file-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-h\"></Icon>\n\t                    <div class=\"name\">three-small-square-shapes</div>\n\t                    <div class=\"fontclass\">.uf-3dot-h</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-time-c-o\"></Icon>\n\t                    <div class=\"name\">time</div>\n\t                    <div class=\"fontclass\">.uf-time-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-upload\"></Icon>\n\t                    <div class=\"name\">upload</div>\n\t                    <div class=\"fontclass\">.uf-upload</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-v\"></Icon>\n\t                    <div class=\"name\">vertical-ellipsis</div>\n\t                    <div class=\"fontclass\">.uf-3dot-v</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb\"></Icon>\n\t                    <div class=\"name\">yen-symbol</div>\n\t                    <div class=\"fontclass\">.uf-rmb</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-up\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reject-2\"></Icon>\n\t                    <div class=\"name\">驳回</div>\n\t                    <div class=\"fontclass\">.uf-reject-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-barcode\"></Icon>\n\t                    <div class=\"name\">barcode-1</div>\n\t                    <div class=\"fontclass\">.uf-barcode</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zoom-out\"></Icon>\n\t                    <div class=\"name\">zoom-out</div>\n\t                    <div class=\"fontclass\">.uf-zoom-out</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-t-o\"></Icon>\n\t                    <div class=\"name\">三角叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-t-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-pass\"></Icon>\n\t                    <div class=\"name\">通过</div>\n\t                    <div class=\"fontclass\">.uf-pass</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow\"></Icon>\n\t                    <div class=\"name\">关系网络</div>\n\t                    <div class=\"fontclass\">.uf-flow</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-add-c\"></Icon>\n\t                    <div class=\"name\">加</div>\n\t                    <div class=\"fontclass\">.uf-add-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-right-2\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-right-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shelf-on\"></Icon>\n\t                    <div class=\"name\">上架</div>\n\t                    <div class=\"fontclass\">.uf-shelf-on</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-shelf-off\"></Icon>\n\t                    <div class=\"name\">下架</div>\n\t                    <div class=\"fontclass\">.uf-shelf-off</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-file-o-2\"></Icon>\n\t                    <div class=\"name\">文件</div>\n\t                    <div class=\"fontclass\">.uf-file-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-truck-o\"></Icon>\n\t                    <div class=\"name\">到货确认</div>\n\t                    <div class=\"fontclass\">.uf-truck-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-super\"></Icon>\n\t                    <div class=\"name\">功能强大</div>\n\t                    <div class=\"fontclass\">.uf-super</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-equipment\"></Icon>\n\t                    <div class=\"name\">设备</div>\n\t                    <div class=\"fontclass\">.uf-equipment</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-c-o-left-2\"></Icon>\n\t                    <div class=\"name\">箭头</div>\n\t                    <div class=\"fontclass\">.uf-arrow-c-o-left-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-files-o\"></Icon>\n\t                    <div class=\"name\">资源文件</div>\n\t                    <div class=\"fontclass\">.uf-files-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cloud-o\"></Icon>\n\t                    <div class=\"name\">云</div>\n\t                    <div class=\"fontclass\">.uf-cloud-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s-o-2\"></Icon>\n\t                    <div class=\"name\">对账</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-3dot-c-o\"></Icon>\n\t                    <div class=\"name\">管理中心</div>\n\t                    <div class=\"fontclass\">.uf-3dot-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-dafeng\"></Icon>\n\t                    <div class=\"name\">天气_大风</div>\n\t                    <div class=\"fontclass\">.uf-dafeng</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-baoxue\"></Icon>\n\t                    <div class=\"name\">天气_暴雪</div>\n\t                    <div class=\"fontclass\">.uf-baoxue</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bingbao\"></Icon>\n\t                    <div class=\"name\">天气_冰雹</div>\n\t                    <div class=\"fontclass\">.uf-bingbao</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-fengbao\"></Icon>\n\t                    <div class=\"name\">天气_风暴</div>\n\t                    <div class=\"fontclass\">.uf-fengbao</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-xiaoyu\"></Icon>\n\t                    <div class=\"name\">天气_小雨</div>\n\t                    <div class=\"fontclass\">.uf-xiaoyu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zhenxue\"></Icon>\n\t                    <div class=\"name\">天气_阵雪</div>\n\t                    <div class=\"fontclass\">.uf-zhenxue</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-zhongyu\"></Icon>\n\t                    <div class=\"name\">天气_中雨</div>\n\t                    <div class=\"fontclass\">.uf-zhongyu</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-es\"></Icon>\n\t                    <div class=\"name\">ES</div>\n\t                    <div class=\"fontclass\">.uf-es</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow-o-2\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-flow-o-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-activate-2\"></Icon>\n\t                    <div class=\"name\">激活-01</div>\n\t                    <div class=\"fontclass\">.uf-activate-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-flow-o\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-flow-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bulb-2\"></Icon>\n\t                    <div class=\"name\">技术支持</div>\n\t                    <div class=\"fontclass\">.uf-bulb-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mi-c\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-mi-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-top-up\"></Icon>\n\t                    <div class=\"name\">返回顶部</div>\n\t                    <div class=\"fontclass\">.uf-top-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-creditcard\"></Icon>\n\t                    <div class=\"name\">credit-card</div>\n\t                    <div class=\"fontclass\">.uf-creditcard</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-center\"></Icon>\n\t                    <div class=\"name\">align-center</div>\n\t                    <div class=\"fontclass\">.uf-align-center</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-justify\"></Icon>\n\t                    <div class=\"name\">align-justify</div>\n\t                    <div class=\"fontclass\">.uf-align-justify</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-left\"></Icon>\n\t                    <div class=\"name\">align-left</div>\n\t                    <div class=\"fontclass\">.uf-align-left</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-align-right\"></Icon>\n\t                    <div class=\"name\">align-right</div>\n\t                    <div class=\"fontclass\">.uf-align-right</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ju-c-o\"></Icon>\n\t                    <div class=\"name\">拒</div>\n\t                    <div class=\"fontclass\">.uf-ju-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-truck\"></Icon>\n\t                    <div class=\"name\">货到付款</div>\n\t                    <div class=\"fontclass\">.uf-truck</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-setting-c-o\"></Icon>\n\t                    <div class=\"name\">流程</div>\n\t                    <div class=\"fontclass\">.uf-setting-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-users-o\"></Icon>\n\t                    <div class=\"name\">楼宇图标_用户组</div>\n\t                    <div class=\"fontclass\">.uf-users-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bag-s-o\"></Icon>\n\t                    <div class=\"name\">商品</div>\n\t                    <div class=\"fontclass\">.uf-bag-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cai-s\"></Icon>\n\t                    <div class=\"name\">采购</div>\n\t                    <div class=\"fontclass\">.uf-cai-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listcheck\"></Icon>\n\t                    <div class=\"name\">定标</div>\n\t                    <div class=\"fontclass\">.uf-listcheck</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-users\"></Icon>\n\t                    <div class=\"name\">群</div>\n\t                    <div class=\"fontclass\">.uf-users</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-i-c\"></Icon>\n\t                    <div class=\"name\">查看详情</div>\n\t                    <div class=\"fontclass\">.uf-i-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-building-o\"></Icon>\n\t                    <div class=\"name\">企业信息</div>\n\t                    <div class=\"fontclass\">.uf-building-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-s-o\"></Icon>\n\t                    <div class=\"name\">报价管理</div>\n\t                    <div class=\"fontclass\">.uf-rmb-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-reject\"></Icon>\n\t                    <div class=\"name\">已驳回</div>\n\t                    <div class=\"fontclass\">.uf-reject</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-9dot\"></Icon>\n\t                    <div class=\"name\">菜单</div>\n\t                    <div class=\"fontclass\">.uf-9dot</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-loadingstate\"></Icon>\n\t                    <div class=\"name\">loading</div>\n\t                    <div class=\"fontclass\">.uf-loadingstate</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-gateway\"></Icon>\n\t                    <div class=\"name\">网关</div>\n\t                    <div class=\"fontclass\">.uf-gateway</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-s-o\"></Icon>\n\t                    <div class=\"name\">发票</div>\n\t                    <div class=\"fontclass\">.uf-ticket-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-userset\"></Icon>\n\t                    <div class=\"name\">管理中心</div>\n\t                    <div class=\"fontclass\">.uf-userset</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-puzzle-o\"></Icon>\n\t                    <div class=\"name\">组件</div>\n\t                    <div class=\"fontclass\">.uf-puzzle-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-box-o\"></Icon>\n\t                    <div class=\"name\">物料管理</div>\n\t                    <div class=\"fontclass\">.uf-box-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bulb\"></Icon>\n\t                    <div class=\"name\">激活</div>\n\t                    <div class=\"fontclass\">.uf-bulb</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-t\"></Icon>\n\t                    <div class=\"name\">感叹号_icon</div>\n\t                    <div class=\"fontclass\">.uf-exc-t</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-rmb-c\"></Icon>\n\t                    <div class=\"name\">报价</div>\n\t                    <div class=\"fontclass\">.uf-rmb-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-table-s-o\"></Icon>\n\t                    <div class=\"name\">发票</div>\n\t                    <div class=\"fontclass\">.uf-table-s-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-umbrella-o\"></Icon>\n\t                    <div class=\"name\">伞</div>\n\t                    <div class=\"fontclass\">.uf-umbrella-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-dropbox\"></Icon>\n\t                    <div class=\"name\">dropbox</div>\n\t                    <div class=\"fontclass\">.uf-dropbox</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-light\"></Icon>\n\t                    <div class=\"name\">搜索-搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-light</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-cart-o\"></Icon>\n\t                    <div class=\"name\">shopping-cart-black-shape</div>\n\t                    <div class=\"fontclass\">.uf-cart-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-kero-col\"></Icon>\n\t                    <div class=\"name\">kero</div>\n\t                    <div class=\"fontclass\">.uf-kero-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-uba-col\"></Icon>\n\t                    <div class=\"name\">uba</div>\n\t                    <div class=\"fontclass\">.uf-uba-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperzc-col\"></Icon>\n\t                    <div class=\"name\">tinperzc</div>\n\t                    <div class=\"fontclass\">.uf-tinperzc-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperzch-col\"></Icon>\n\t                    <div class=\"name\">tinperzch</div>\n\t                    <div class=\"fontclass\">.uf-tinperzch-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-iuap-col\"></Icon>\n\t                    <div class=\"name\">iuap</div>\n\t                    <div class=\"fontclass\">.uf-iuap-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-iuapdesign-col\"></Icon>\n\t                    <div class=\"name\">iuapdesignz</div>\n\t                    <div class=\"fontclass\">.uf-iuapdesign-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-bee-col\"></Icon>\n\t                    <div class=\"name\">bee</div>\n\t                    <div class=\"fontclass\">.uf-bee-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-neoui-col\"></Icon>\n\t                    <div class=\"name\">neoui</div>\n\t                    <div class=\"fontclass\">.uf-neoui-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-sparrow-col\"></Icon>\n\t                    <div class=\"name\">sparrow</div>\n\t                    <div class=\"fontclass\">.uf-sparrow-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinpercn-col\"></Icon>\n\t                    <div class=\"name\">tinpercn</div>\n\t                    <div class=\"fontclass\">.uf-tinpercn-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-tinperen-col\"></Icon>\n\t                    <div class=\"name\">tinperen</div>\n\t                    <div class=\"fontclass\">.uf-tinperen-col</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-arrow-up\"></Icon>\n\t                    <div class=\"name\">angle-arrow-down</div>\n\t                    <div class=\"fontclass\">.uf-arrow-up</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mailsym\"></Icon>\n\t                    <div class=\"name\">webmail</div>\n\t                    <div class=\"fontclass\">.uf-mailsym</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-print\"></Icon>\n\t                    <div class=\"name\">办公用品</div>\n\t                    <div class=\"fontclass\">.uf-print</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-3\"></Icon>\n\t                    <div class=\"name\">报销</div>\n\t                    <div class=\"fontclass\">.uf-ticket-3</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-loan\"></Icon>\n\t                    <div class=\"name\">借款</div>\n\t                    <div class=\"fontclass\">.uf-loan</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket-2\"></Icon>\n\t                    <div class=\"name\">凭证中心</div>\n\t                    <div class=\"fontclass\">.uf-ticket-2</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-offwork\"></Icon>\n\t                    <div class=\"name\">请假</div>\n\t                    <div class=\"fontclass\">.uf-offwork</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-todolist\"></Icon>\n\t                    <div class=\"name\">待办</div>\n\t                    <div class=\"fontclass\">.uf-todolist</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-personin\"></Icon>\n\t                    <div class=\"name\">员工入职</div>\n\t                    <div class=\"fontclass\">.uf-personin</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-ticket\"></Icon>\n\t                    <div class=\"name\">票务</div>\n\t                    <div class=\"fontclass\">.uf-ticket</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-linechart\"></Icon>\n\t                    <div class=\"name\">小icon-图表</div>\n\t                    <div class=\"fontclass\">.uf-linechart</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-4leaf\"></Icon>\n\t                    <div class=\"name\">应用中心</div>\n\t                    <div class=\"fontclass\">.uf-4leaf</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-listset\"></Icon>\n\t                    <div class=\"name\">信息维护</div>\n\t                    <div class=\"fontclass\">.uf-listset</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-qi-c-o\"></Icon>\n\t                    <div class=\"name\">企业认证</div>\n\t                    <div class=\"fontclass\">.uf-qi-c-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-exc-c\"></Icon>\n\t                    <div class=\"name\">叹号</div>\n\t                    <div class=\"fontclass\">.uf-exc-c</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-code\"></Icon>\n\t                    <div class=\"name\">集成开发</div>\n\t                    <div class=\"fontclass\">.uf-code</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-plug-o\"></Icon>\n\t                    <div class=\"name\">热拔插</div>\n\t                    <div class=\"fontclass\">.uf-plug-o</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-search-s\"></Icon>\n\t                    <div class=\"name\">搜索</div>\n\t                    <div class=\"fontclass\">.uf-search-s</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-treeadd\"></Icon>\n\t                    <div class=\"name\">tree-new-sbling-node</div>\n\t                    <div class=\"fontclass\">.uf-treeadd</div>\n\t                </li>\n\t            \n\t                <li>\n\t                <Icon type=\"uf-mi\"></Icon>\n\t                    <div class=\"name\">必填</div>\n\t                    <div class=\"fontclass\">.uf-mi</div>\n\t                </li>\n\t       \t\t</ul>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" 在iuap字符库，`type`参数值均以-分隔。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
