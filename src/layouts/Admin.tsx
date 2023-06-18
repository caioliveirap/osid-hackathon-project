import React from 'react';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
	FileOutlined,
	BellOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Badge, Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

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

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
// 	key,
// 	label: `nav ${key}`,
// }));

const App: React.FC = ({ children }: any) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: ' 8px 16px',
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				<Image width={32} height={32} src={'/images/dulce.png'} alt={''} />
				<div className="flex items-center gap-4 text-white">
					<Badge count={5} className="cursor-pointer">
						<BellOutlined style={{ color: 'white' }} />
					</Badge>
					<span className="text-white">Caio Oliveira</span>
				</div>
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
				<Layout style={{ padding: ' 24px 24px' }}>
					{/* <Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb> */}
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
