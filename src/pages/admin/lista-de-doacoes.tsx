import React, { useState } from 'react';
import { Table, Input, Button, Modal } from 'antd';

import Admin from '@/layouts/Admin';
import { GetServerSideProps } from 'next';
import { getDonations } from '@/lib/donation/services/donationService';
import ModalAdicionarDoacao from './components-doacoes/modal-adicionar-doacao';

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
	const originList: any = {
		ad_campaigns: 'Campanhas publicitárias',
		organic_website: 'Orgânico no site',
		onsite_counter: 'Presencialmente em balcão',
		word_of_mouth: 'Indicação de amigos e familiares',
		social_media: 'Redes sociais',
		supporter_member: 'Sócio-protetor',
	};

	const donerType: any = {
		natural_person: 'Física',
		legal_person: 'Jurídica',
		person_of_private_law: 'Direito Privado',
		anonymous: 'Anônima',
	};

	const resourceList: any = {
		money: 'Dinheiro',
		services: 'Serviço',
		products: 'Produtos',
		movable_property: 'Bens móveis',
		real_estate: 'Bens imóveis',
	};
	const columns = [
		{
			title: 'Tipo',
			dataIndex: 'type',
			key: 'type',
			render: (val: any) => (val === 'online' ? 'Online' : 'Presencial'),
			sorter: (a: any, b: any) => a.name - b.name,
		},
		{
			title: 'Origem',
			dataIndex: 'origin',
			key: 'origin',
			render: (val: any) => originList[val],
		},
		{
			title: 'Tipo de doador',
			dataIndex: 'donator_type',
			key: 'donator_type',
			render: (val: any) => donerType[val],
			sorter: (a: any, b: any) => a.status - b.status,
		},
		{
			title: 'Recurso',
			dataIndex: 'resource',
			key: 'resource',
			render: (val: any) => resourceList[val],
			sorter: (a: any, b: any) => a.status - b.status,
		},
		{
			title: 'Descrição',
			dataIndex: 'description',
			key: 'description',
			sorter: (a: any, b: any) => a.status - b.status,
		},
		{
			title: 'Detalhes',
			dataIndex: 'resource_details',
			key: 'resource_details',
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
