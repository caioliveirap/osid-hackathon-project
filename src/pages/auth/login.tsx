import Auth from '@/layouts/Auth';
import { Button, Checkbox, Input, Tabs, TabsProps } from 'antd';
import React from 'react';
import Image from 'next/image';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
export default function Login() {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: `Login`,
			children: (
				<>
					<div className="flex flex-col gap-7  pb-6 ">
						<div className="flex flex-col items-start gap-2">
							<Input
								size="large"
								placeholder="Digite seu email"
								prefix={<UserOutlined />}
							/>
						</div>
						<div className="flex flex-col items-start gap-2">
							<Input
								size="large"
								placeholder="Digite sua senha"
								prefix={<LockOutlined />}
							/>
						</div>
					</div>
					<div className="flex items-center justify-between mb-6">
						<Checkbox>Lembrar-me</Checkbox>
						<a className="text-blue-500">Esqueceu sua senha</a>
					</div>
				</>
			),
		},
		{
			key: '2',
			label: `Cadastro`,
			children: (
				<div className="flex flex-col gap-2.5 border-b border-solid border-gray-300 pb-6 mb-2.5"></div>
			),
		},
	];
	return (
		<>
			<div
				className="h-screen w-full flex items-center justify-center lg:justify-end"
				style={{
					background: 'url("/images/login_bg.png")',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundColor: '#4DA2D5',
					backgroundBlendMode: 'multiply',
				}}
			>
				<div className="flex items-center justify-center bg-white lg:h-full m-6 mt-6 lg:m-0 lg:w-5/12">
					<div className="bg-white p-6 w-full max-w-[360px]">
						<div className="mb-20 flex items-center justify-center">
							<Image
								src={'/images/dulce_logo.png'}
								width={210}
								height={70}
								alt={''}
							/>
						</div>
						<Tabs defaultActiveKey="1" items={items} />

						<div className="flex justify-start">
							<Link href="/admin/dashboard">
								<Button className="bg-blue-500" type="primary">
									Entrar
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Login.layout = Auth;
