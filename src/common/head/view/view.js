import React from 'react';
import {Flex,WingBlank} from 'antd-mobile';
import './style.less';

const Page = () => (

    <Flex className="head">
        <Flex.Item><i className="icon anticon icon-back">&#xe620;</i></Flex.Item>
        <Flex.Item className="title">我的营养计划</Flex.Item>
        <Flex.Item></Flex.Item>
    </Flex>
)

export default Page;