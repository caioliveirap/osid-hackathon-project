import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';

// layout for page
import Image from 'next/image';
import { redirect } from 'next/navigation';

import Auth from '@/layouts/Auth';
import { Button, Input } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { sendDonators } from '@/lib/donators/services/donatorsService';
export default function Register() {
	const router = useRouter();
	const [donator, setDonator] = useState({
		name: '',
		company_name: '',
		colaborator_name: '',
		email: '',
		phone_number: '',
		donator_type: '',
		document: '',
	});

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
							id="name"
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									name: e.target.value,
								}));
							}}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>CPF
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									document: e.target.value,
								}));
							}}
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>E-Mail
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									email: e.target.value,
								}));
							}}
							id="email"
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Telefone
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									phone_number: e.target.value,
								}));
							}}
							id="phone_number"
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
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									company_name: e.target.value,
								}));
							}}
							id="company_name"
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>CNPJ
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									document: e.target.value,
								}));
							}}
							id="CNPJ"
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Nome do colaborador
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									colaborator_name: e.target.value,
								}));
							}}
							id="colaborator_name"
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>E-Mail
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									email: e.target.value,
								}));
							}}
							id="email"
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="document" className="flex items-center gap-1">
							{' '}
							<small className="text-red-500">*</small>Telefone
						</label>{' '}
						<Input
							onChange={(e) => {
								setDonator((prevFormData) => ({
									...prevFormData,
									phone_number: e.target.value,
								}));
							}}
							id="phone_number"
						/>
					</div>
				</div>
			),
		},
	];

	const sendDonator = async () => {
		const save = await sendDonators(donator);
		router.push('/doar');
	};

	return (
		<>
			<div className="w-full flex items-center justify-center my-8">
				<div className="flex content-center items-center justify-center h-full w-full max-w-[512px]">
					<div className="w-full px-4">
						<div className=" flex flex-col min-w-0  w-full shadow-lg rounded-lg bg-blueGray-200 border-0">
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
									<Button
										onClick={sendDonator}
										className="bg-blue-500"
										type="primary"
									>
										Cadastrar
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Register.layout = Auth;
