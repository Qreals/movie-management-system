import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LaptopOutlined,
    UserOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const menuList = [
        {
            label: '用户管理',
            icon:<UserOutlined/>,
            children: [
                {
                    label:'用户列表',
                    url:'/user/list'
                }
            ],
        },
        {
            label: '影院管理',
            icon:<LaptopOutlined/>,
            children: [
                {
                    label:'放映厅管理'
                },
                {
                    label:'场次管理'
                },
                {
                    label:'电影信息管理'
                }
            ],
        },
        {
            label: '电影管理',
            icon:<NotificationOutlined/>,
            children: [
                {
                    label:'订单管理'
                },
                {
                    label:'评论管理'
                },
                {
                    label:'标签管理'
                },
                {
                    label:'票房可视化'
                }
            ],
        }
    ]

    const items2: MenuProps['items'] = menuList.map(
        (item, index) => {
            const key = String(index + 1);

            return {
                key: `sub${key}`,
                icon: item.icon,
                label: item.label,

                children: item.children.map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: _.label,
                    };
                }),
            };
        },
    );

    return (
        <Layout className={cx('home-page')}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    items={items2}
                >

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}

                    <div className={cx('title')}>电影院管理系统</div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;