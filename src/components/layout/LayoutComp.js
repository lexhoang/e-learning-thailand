import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderComp from './Header';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function LayoutComp() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <HeaderComp />
            <Content>
                <Outlet />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
}

