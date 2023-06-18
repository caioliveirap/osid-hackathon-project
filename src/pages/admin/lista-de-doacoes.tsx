import React, { useState } from 'react';
import { Table, Input, Button, Modal } from 'antd';

import Admin from '@/layouts/Admin';
import { GetServerSideProps } from 'next';
import { getDonations } from '@/lib/donation/services/donationService';
import { ModalAdicionarDoacao } from './components-doacoes/modal-adicionar-doacao';

export default function ListaDeDoacoes({ donations }: any) {
	const [donationsList, setDonationsList] = useState(donations.data);
	const [filterParam, setFilterParam] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
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
		let newDonatorList = [...donations.data];
		newDonatorList = newDonatorList.filter((key) => {
			if (
				key.email.toLowerCase().includes(filterParam) ||
				key.name.toLowerCase().includes(filterParam) ||
				key.document.toLowerCase().includes(filterParam)
			) {
				return key;
			}
		});
		setDonationsList(newDonatorList);
	};

	return (
		<>
			<Modal
				title="Adicionar nova doação"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<ModalAdicionarDoacao />
			</Modal>
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
								setDonationsList(donations.data);
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
					<div className="mb-4 flex items-center justify-between">
						<h1 className="text-base text-medium">Doações</h1>
						<div className="">
							{/* <Button>Limpar</Button> */}
							<Button
								onClick={showModal}
								className=" bg-blue-500"
								type="primary"
							>
								Adicionar Novo
							</Button>
						</div>
					</div>
					<Table
						className="w-full"
						pagination={{ pageSize: 5 }}
						dataSource={donationsList}
						columns={columns}
					/>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const donations = await getDonations();
	return { props: { donations } };
};

ListaDeDoacoes.layout = Admin;
