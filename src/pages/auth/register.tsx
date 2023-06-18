import React from 'react';

// layout for page
import Image from 'next/image';

import Auth from '@/layouts/Auth';
import { Button, Input } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
export default function Register() {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: `Pessoa física`,
			children: (
				<div className="flex flex-col gap-2.5 border-b border-solid border-gray-300 pb-6 mb-2.5">
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Nome
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>CPF
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>E-Mail
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Telefone
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
				</div>
			),
		},
		{
			key: '2',
			label: `Pessoa jurídica`,
			children: (
				<div className="flex flex-col gap-2.5 border-b border-solid border-gray-300 pb-6 mb-2.5">
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Nome da empresa
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>CNPJ
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Nome do colaborador
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>E-Mail
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Telefone
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Tipo
						</label>{' '}
						<Input
							id="buscar-doador"
							// onChange={(e) => {
							// 	setFilterParam(e.target.value);
							// }}
							// value={filterParam}
						/>
					</div>
				</div>
			),
		},
	];

	return (
		<>
			<div
				className="h-screen w-full flex items-center justify-center"
				style={{
					background: 'url("/images/login_bg.png")',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundColor: '#4DA2D5',
					backgroundBlendMode: 'multiply',
				}}
			>
				<div className="flex content-center items-center justify-center h-full w-full max-w-[512px]">
					<div className="w-full px-4">
						<div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="bg-white p-6">
								<div className="mb-4 flex items-center justify-center">
									<Image
										src={'/images/dulce_logo.png'}
										width={210}
										height={70}
										alt={''}
									/>
								</div>

								<h1 className="w-full text-center font-medium text-base border-b border-solid border-gray-300 pb-4 mb-6">
									Formulário de Cadastro para Doações
								</h1>
								<Tabs defaultActiveKey="1" items={items} />

								<div className="flex justify-end">
									<Button className="bg-blue-500" type="primary">
										Cadastrar
									</Button>
								</div>
							</div>

							{/* <div className="rounded-t mb-0 px-6 py-6">
								<div className="text-center mb-3">
									<h6 className="text-blueGray-500 text-sm font-bold">
										Sign up with
									</h6>
								</div>
								<div className="btn-wrapper text-center">
									<button
										className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
										type="button"
									>
										<img alt="..." className="w-5 mr-1" src="/img/github.svg" />
										Github
									</button>
									<button
										className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
										type="button"
									>
										<img alt="..." className="w-5 mr-1" src="/img/google.svg" />
										Google
									</button>
								</div>
								<hr className="mt-6 border-b-1 border-blueGray-300" />
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<div className="text-blueGray-400 text-center mb-3 font-bold">
									<small>Or sign up with credentials</small>
								</div>
								<form>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Name
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Name"
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Email
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Email"
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											type="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Password"
										/>
									</div>

									<div>
										<label className="inline-flex items-center cursor-pointer">
											<input
												id="customCheckLogin"
												type="checkbox"
												className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
											/>
											<span className="ml-2 text-sm font-semibold text-blueGray-600">
												I agree with the{' '}
												<a
													href="#pablo"
													className="text-lightBlue-500"
													onClick={(e) => e.preventDefault()}
												>
													Privacy Policy
												</a>
											</span>
										</label>
									</div>

									<div className="text-center mt-6">
										<button
											className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
											type="button"
										>
											Create Account
										</button>
									</div>
								</form>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Register.layout = Auth;
