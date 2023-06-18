import React, { useState } from 'react';
import { Table, Input, Button, Modal, Select, Radio } from 'antd';

import Admin from '@/layouts/Admin';
const { TextArea } = Input;

export const ModalAdicionarDoacao = () => {
	const [newDonation, setNewDonation] = useState({
		type: '',
		origin: '',
		product: '',
		donator_type: '',
		resource: '',
	});
	const options = [
		{ value: 'natural_person', label: 'Física' },
		{ value: 'legal_person', label: 'Jurídica' },
		{ value: 'person_of_private_law', label: 'Direito Privado' },
		{ value: 'anonymous', label: 'Anônima' },
	];
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-4">
				<div className="">
					<Radio.Group
						options={options}
						onChange={(e) => {
							setNewDonation((prevFormData) => ({
								...prevFormData,
								donator_type: e.target.value,
							}));
						}}
						value={newDonation.donator_type}
						optionType="button"
					/>
				</div>

				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="document" className="flex items-center gap-1">
						{' '}
						<small className="text-red-500">*</small>Documento do doador
					</label>
					<Input id="document" />
					{/* <Select
					placeholder="CNPJ"
					// value={newDonation.type}
					// onChange={(value) => {
					// 	setNewDonation((prevFormData) => ({
					// 		...prevFormData,
					// 		type: value,
					// 	}));
					// }}
					options={[
						{ value: 'online', label: 'Online' },
						{ value: 'onsite', label: 'Presencial' },
					]}
				/> */}
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="type">Tipo</label>
					<Select
						id="type"
						placeholder="Online"
						value={newDonation.type}
						onChange={(value) => {
							setNewDonation((prevFormData) => ({
								...prevFormData,
								type: value,
							}));
						}}
						options={[
							{ value: 'online', label: 'Online' },
							{ value: 'onsite', label: 'Presencial' },
						]}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="origin">Origem</label>
					<Select
						placeholder="Online"
						id="origin"
						value={newDonation.origin}
						onChange={(value) => {
							setNewDonation((prevFormData) => ({
								...prevFormData,
								origin: value,
							}));
						}}
						options={[
							{ value: 'ad_campaigns', label: 'Campanhas publicitárias' },
							{ value: 'organic_website', label: 'Orgânico no site' },
							{ value: 'onsite_counter', label: 'Presencialmente em balcão' },
							{
								value: 'word_of_mouth',
								label: 'Indicação de amigos e familiares',
							},
							{ value: 'social_media', label: 'Redes sociais' },
							{ value: 'supporter_member', label: 'Sócio-protetor' },
						]}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="resource">Recurso a ser doado</label>
					<Select
						placeholder="Online"
						id="resource"
						value={newDonation.resource}
						onChange={(value) => {
							setNewDonation((prevFormData) => ({
								...prevFormData,
								resource: value,
							}));
						}}
						options={[
							{ value: 'money', label: 'Dinheiro' },
							{ value: 'services', label: 'Orgânico no site' },
							{ value: 'products', label: 'Presencialmente em balcão' },
							{
								value: 'movable_property',
								label: 'Bens móveis',
							},
							{ value: 'real_estate', label: 'Bens imóveis' },
						]}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="product">Produto</label>
					<Select
						placeholder="Online"
						id="product"
						value={newDonation.product}
						onChange={(value) => {
							setNewDonation((prevFormData) => ({
								...prevFormData,
								product: value,
							}));
						}}
						options={[
							{ value: 'money', label: 'Dinheiro' },
							{ value: 'services', label: 'Orgânico no site' },
							{ value: 'products', label: 'Presencialmente em balcão' },
							{
								value: 'movable_property',
								label: 'Bens móveis',
							},
							{ value: 'real_estate', label: 'Bens imóveis' },
						]}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="description">Descrição</label>
					<TextArea id="description" rows={4} />
				</div>
			</div>
			<div className="flex items-center justify-end">
				<Button>Cancelar</Button>
				<Button className=" bg-blue-500" type="primary">
					Cadastrar doação
				</Button>
			</div>
		</div>
	);
};
