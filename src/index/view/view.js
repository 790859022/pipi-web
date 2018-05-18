import React from 'react';
import classnames from 'classnames';
import {view as Head} from '../../common/head/';
import './style.less';

const View = ({filterData, filterStatus, clickHandler}) => (
    <div className="page-container">
        <Head/>
        <div className="index-container">
            <div className="user-address">
                <p className="name"><i className="icon anticon">&#xe685;</i>配送至：建国门外外交公寓 <i
                    className="icon anticon">&#xe61f;</i></p>
                <p className="tip">温馨提示：目前仅支持北京回龙观地区配送</p>
            </div>
            <div className="pipi-rmd">
                <h2>PiPi推荐 <span>一键定制，智能搭配</span></h2>
                <img src={require('../../common/images/index-img01.jpg')} width="100%" alt=""/>
            </div>
            <div className="list">
                <div className="title">
                    <span className="name">自主搭配</span>
                    <span className="tip">食物越丰富，营养越均衡</span>
                    <span className={classnames("btn-filter", {"show": filterStatus})}
                          onClick={clickHandler.bind(null, 'filter-btn', {})}
                    >筛选 <i className="icon anticon">&#xe663;</i></span>
                </div>
                <div className={classnames("filter-layer",{"show": filterStatus})}>
                    <ul>
                        {
                            filterData.map(item => <li
                                key={item['id']}
                                className={classnames({'active': item['checked']})}
                                onClick={clickHandler.bind(null, 'filter-item', item)}
                            >
                                {item['value']}
                            </li>)
                        }
                        {/*<li className="active">全部</li>*/}
                        {/*<li>手脚冰凉</li>*/}
                        {/*<li>手脚冰凉</li>*/}
                        {/*<li>口臭</li>*/}
                        {/*<li>口臭</li>*/}
                        {/*<li>口臭</li>*/}
                        {/*<li>手脚冰凉</li>*/}
                        {/*<li>口臭</li>*/}
                        {/*<li>口臭</li>*/}
                        {/*<li>手脚冰凉</li>*/}
                    </ul>
                </div>
                <div className="type-tab">
                    <ul>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                        <li>主食(1/3)</li>
                    </ul>
                </div>
                <div className="type-list">
                    <div className="item">
                        <img src={require('../../common/images/index-img02.jpg')} alt=""/>
                        <div>
                            <div className="item-name">玉米 <span className="item-unit">500g</span></div>
                            <div className="item-tag"><span>降血压</span></div>
                            <div className="item-desc">富含膳食纤维，能有效降低血压，富含膳食纤维，能有效降低血压</div>
                            <div className="item-price">￥7.9</div>
                            <div className="btn-add"><i className="icon anticon">&#xe668;</i></div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require('../../common/images/index-img02.jpg')} alt=""/>
                        <div>
                            <div className="item-name">玉米 <span className="item-unit">500g</span></div>
                            <div className="item-tag"><span>降血压</span></div>
                            <div className="item-desc">富含膳食纤维，能有效降低血压，富含膳食纤维，能有效降低血压</div>
                            <div className="item-price">￥7.9</div>
                            <div className="btn-add"><i className="icon anticon">&#xe668;</i></div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require('../../common/images/index-img02.jpg')} alt=""/>
                        <div>
                            <div className="item-name">玉米 <span className="item-unit">500g</span></div>
                            <div className="item-tag"><span>降血压</span></div>
                            <div className="item-desc">富含膳食纤维，能有效降低血压，富含膳食纤维，能有效降低血压</div>
                            <div className="item-price">￥7.9</div>
                            <div className="btn-add"><i className="icon anticon">&#xe668;</i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-cart"><i className="icon anticon">&#xe668;</i><span className="num">99</span></div>
        </div>

    </div>
)

export default View;