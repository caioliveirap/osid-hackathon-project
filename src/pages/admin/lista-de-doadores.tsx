import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';

import Admin from '@/layouts/Admin';
import { GetServerSideProps } from 'next';
import { getDonators } from '@/lib/donators/services/donatorsService';

export default function ListaDeDoadores({ donators }: any) {
	const [donatorsList, setDonatorsList] = useState(donators.data);
	const [filterParam, setFilterParam] = useState('');

	// const dataSource = [
	// 	{
	// 		name: 'Caio de Oliveira Pinto',
	// 		email: 'caio191201@gmail.com',
	// 		phone_number: '(75) 99103-3357',
	// 		donator_type: 'Pessoa física',
	// 		document: '082.875.820-40',
	// 	},
	// 	{
	// 		name: 'Caio de Oliveira Pinto',
	// 		email: 'caio191201@gmail.com',
	// 		phone_number: '(75) 99103-3357',
	// 		donator_type: 'Pessoa Jurídica',
	// 		document: '47.252.607/0001-22',
	// 	},
	// ];

	const columns = [
		{
			title: 'Nome',
			dataIndex: 'name',
			key: 'name',
			sorter: (a: any, b: any) => a.name - b.name,
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			sorter: (a: any, b: any) => a.amount - b.amount,
		},
		{
			title: 'Documento',
			dataIndex: 'document',
			key: 'document',
			sorter: (a: any, b: any) => a.status - b.status,
		},
		{
			title: 'Tipo do doador',
			dataIndex: 'donator_type',
			key: 'donator_type',
			render: (val: any) =>
				val === 'natural_person' ? 'Pessoa física' : 'Pessoa jurídica',
			sorter: (a: any, b: any) => a.status - b.status,
		},
		{
			title: 'Telefone',
			dataIndex: 'phone_number',
			key: 'phone_number',
			sorter: (a: any, b: any) => a.status - b.status,
		},
	];

	const filter = () => {
		let newDonatorList = [...donators.data];
		newDonatorList = newDonatorList.filter((key) => {
			if (
				key.email.toLowerCase().includes(filterParam) ||
				key.name.toLowerCase().includes(filterParam) ||
				key.document.toLowerCase().includes(filterParam)
			) {
				return key;
			}
		});
		setDonatorsList(newDonatorList);
	};

	return (
		<div className="">
			<div className="bg-white mb-6 p-6 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<label htmlFor="buscar-doador">Buscar: </label>
					<Input
						id="buscar-doador"
						onChange={(e) => {
							setFilterParam(e.target.value);
						}}
						value={filterParam}
					/>
				</div>
				<div className="flex gap-2">
					<Button
						onClick={() => {
							setDonatorsList(donators.data);
							setFilterParam('');
						}}
					>
						Limpar
					</Button>
					<Button onClick={filter} className=" bg-blue-500" type="primary">
						Consulta
					</Button>
				</div>
			</div>
			<div className="bg-white p-6">
				<div className="mb-4">
					<h1 className="text-base text-medium">Doadores</h1>
				</div>
				<Table
					className="w-full"
					pagination={{ pageSize: 5 }}
					dataSource={donatorsList}
					columns={columns}
				/>
			</div>

			{/* <ul>
				{donatorsList.map((item: any, _index: any) => {
					return <li key={`donator-${_index}`}>{item.name}</li>;
				})}
			</ul> */}
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const donators = await getDonators();
	return { props: { donators } };
};

ListaDeDoadores.layout = Admin;
