import React from 'react';
import { Outlet } from 'react-router-dom' // 这个用来显示子路由内容

import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;
import CommonAside from '../components/commonAside';
import CommonHeader from '../components/commonHeader';
import CommonTag from '../components/commonTag'
import { useSelector } from 'react-redux'
import { RouterAuth } from '../router/routerAuth'

const Main = () => {
    const collapsed = useSelector(state => state.tab.isCollapse)

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // 获取展开收起的状态
    return (
        <RouterAuth>
            <Layout className='main-container'>
                <CommonAside collapsed={collapsed}></CommonAside>
                <Layout>
                    <CommonHeader collapsed={collapsed}></CommonHeader>
                    <CommonTag></CommonTag>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </RouterAuth>
    );
}

export default Main