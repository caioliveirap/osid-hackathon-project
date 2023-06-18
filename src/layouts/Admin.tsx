// import React, { useState } from 'react';
// import {
// 	DesktopOutlined,
// 	FileOutlined,
// 	PieChartOutlined,
// 	TeamOutlined,
// 	UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';

// const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
// 	label: React.ReactNode,
// 	key: React.Key,
// 	icon?: React.ReactNode,
// 	children?: MenuItem[]
// ): MenuItem {
// 	return {
// 		key,
// 		icon,
// 		children,
// 		label,
// 	} as MenuItem;
// }

// const items: MenuItem[] = [
// 	getItem('Dashboard', 'sub1', <UserOutlined />, [
// 		getItem('Doações', '2'),
// 		getItem('Campanhas', '3'),
// 	]),
// 	// getItem('Formulário', 'sub2', <TeamOutlined />, [
// 	// 	getItem('Team 1', '4'),
// 	// 	getItem('Team 2', '5'),
// 	// ]),
// 	getItem('Lista de doadores', '4', <FileOutlined />),
// ];

// const App = ({ children }: any) => {
// 	const [collapsed, setCollapsed] = useState(false);
// 	const {
// 		token: { colorBgContainer },
// 	} = theme.useToken();

// 	return (
// 		<Layout style={{ minHeight: '100vh' }}>
// 			<Sider
// 				collapsible
// 				collapsed={collapsed}
// 				onCollapse={(value) => setCollapsed(value)}
// 			>
// 				<div className="demo-logo-vertical" />
// 				<Menu
// 					theme="dark"
// 					defaultSelectedKeys={['1']}
// 					mode="inline"
// 					items={items}
// 				/>
// 			</Sider>
// 			<Layout>
// 				<Header style={{ padding: 0, background: colorBgContainer }} />
// 				<Content style={{ margin: '0 16px' }}>
// 					<Breadcrumb style={{ margin: '16px 0' }}>
// 						<Breadcrumb.Item>User</Breadcrumb.Item>
// 						<Breadcrumb.Item>Bill</Breadcrumb.Item>
// 					</Breadcrumb>
// 					<div
// 						style={{
// 							padding: 24,
// 							minHeight: 360,
// 							background: colorBgContainer,
// 						}}
// 					>
// 						{children}
// 					</div>
// 				</Content>
// 				<Footer style={{ textAlign: 'center' }}>
// 					{/* Ant Design ©2023 Created by Ant UED */}
// 				</Footer>
// 			</Layout>
// 		</Layout>
// 	);
// };

// export default App;

import React from 'react';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
	FileOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Sider } = Layout;
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Dashboard', 'sub1', <UserOutlined />, [
		getItem(<Link href={'/admin/dashboard'}>Doações</Link>, '2'),
		getItem('Campanhas', '3'),
	]),
	// getItem('Formulário', 'sub2', <TeamOutlined />, [
	// 	getItem('Team 1', '4'),
	// 	getItem('Team 2', '5'),
	// ]),
	getItem(
		<Link href={'/admin/lista-de-doadores'}>Lista de Doadores</Link>,
		'4',
		<FileOutlined />
	),
	getItem(
		<Link href={'/admin/lista-de-doacoes'}>Lista de Doações</Link>,
		'5',
		<FileOutlined />
	),
];

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1);

	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: `option${subKey}`,
			};
		}),
	};
});

const App: React.FC = ({ children }: any) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header style={{ display: 'flex', alignItems: 'center' }}>
				<div className="demo-logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={items1}
				/>
			</Header>
			<Layout>
				<Sider width={200} style={{ background: colorBgContainer }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
						items={items}
					/>
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						style={{
							// padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default App;
