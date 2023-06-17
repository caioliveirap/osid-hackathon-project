import React, { useState } from 'react';

// layout for page
import { Input, Select } from 'antd';

import Auth from '@/layouts/Auth';
import { sendDonation } from '@/lib/donation/services/donationService';

export default function Doar() {
	const [donatorProfile, setDonatorProfile] = useState('natural_person');
	const [formDataNaturalPerson, setFormDataNaturalPerson] = useState({
		client_type: '',
		name: '',
		email: '',
		donation_type: '',
		document: '',
		donator_profile: 'natural_person',
		phone_number: '',
		// Add more fields as needed
	});

	const [formDataLegalPerson, setFormDataLegalPerson] = useState({
		company_name: '',
		colaborator_name: '',
		document: '',
		email: '',
		phone_number: '',
		donator_profile: 'legal_person',
	});

	const handleChangeNaturalPerson = (event: any) => {
		const { name, value } = event.target;
		setFormDataNaturalPerson((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};
	const handleChangeLegalPerson = (event: any) => {
		const { name, value } = event.target;
		setFormDataLegalPerson((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async () => {
		let body;
		if (donatorProfile === 'natural_person') {
			body = formDataNaturalPerson;
		}
		if (donatorProfile === 'legal_person') {
			body = formDataLegalPerson;
		}
		try {
			const send = await sendDonation(body);
			console.log(send);
			// Swal.fire({
			// 	icon: 'success',
			// 	title: 'Success',
			// 	text: 'Sucesso!',
			// });
		} catch (error) {
			// Swal.fire({
			// 	icon: 'error',
			// 	title: 'Success',
			// 	text: 'Sucesso!',
			// });
		}
	};

	return (
		<>
			<div className="container mx-auto px-4 h-screen">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-6/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="flex-auto px-4 lg:px-10 py-10">
								<div className="text-blueGray-400 text-center mb-3 font-bold">
									<small>Doar para a OSID! </small>
								</div>
								<form action="" className="flex flex-col gap-4">
									<div className="flex flex-col gap-2 w-full">
										<label htmlFor="test">Doador</label>
										<Select
											defaultValue="lucy"
											value={donatorProfile}
											onChange={(value) => {
												setDonatorProfile(value);
											}}
											options={[
												{ value: 'natural_person', label: 'Pessoa física' },
												{ value: 'legal_person', label: 'Pessoa jurídica' },
											]}
										/>
									</div>
									{formDataNaturalPerson.donator_profile ===
									'natural_person' ? (
										<>
											<div className="flex items-center gap-4 w-full">
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="name">Nome</label>
													<Input
														id="name"
														placeholder="Basic usage"
														name="name"
														value={formDataNaturalPerson.name}
														onChange={handleChangeNaturalPerson}
													/>
												</div>
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="document">CPF</label>
													<Input
														id="document"
														placeholder="Basic usage"
														name="document"
														value={formDataNaturalPerson.document}
														onChange={handleChangeNaturalPerson}
													/>
												</div>
											</div>
											<div className="flex items-center gap-4 w-full">
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="email">Email</label>
													<Input
														id="email"
														placeholder="Basic usage"
														name="email"
														value={formDataNaturalPerson.email}
														onChange={handleChangeNaturalPerson}
													/>
												</div>
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="phone_number">Telefone</label>
													<Input
														id="phone_number"
														placeholder="Basic usage"
														name="phone_number"
														value={formDataNaturalPerson.phone_number}
														onChange={handleChangeNaturalPerson}
													/>
												</div>
											</div>
										</>
									) : (
										<>
											<div className="flex items-center gap-4 w-full">
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="company_name">Nome da empresa</label>
													<Input
														id="company_name"
														placeholder="Basic usage"
														name="company_name"
														value={formDataLegalPerson.company_name}
														onChange={handleChangeLegalPerson}
													/>
												</div>
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="colaborator_name">
														Nome do colaborador
													</label>
													<Input
														id="colaborator_name"
														placeholder="Basic usage"
														name="colaborator_name"
														value={formDataLegalPerson.colaborator_name}
														onChange={handleChangeLegalPerson}
													/>
												</div>
											</div>
											<div className="flex items-center gap-4 w-full">
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="document">CNPJ</label>
													<Input
														id="document"
														placeholder="Basic usage"
														name="document"
														value={formDataLegalPerson.document}
														onChange={handleChangeLegalPerson}
													/>
												</div>
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="email">Email</label>
													<Input
														id="email"
														placeholder="Basic usage"
														name="email"
														value={formDataLegalPerson.email}
														onChange={handleChangeLegalPerson}
													/>
												</div>
											</div>
											<div className="flex items-center gap-4 w-full">
												<div className="flex flex-col gap-2 w-full">
													<label htmlFor="phone_number">Telefone</label>
													<Input
														id="phone_number"
														placeholder="Basic usage"
														name="phone_number"
														value={formDataLegalPerson.phone_number}
														onChange={handleChangeLegalPerson}
													/>
												</div>
											</div>
										</>
									)}
									<button type="button" onClick={handleSubmit}>
										Enviar doação
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Doar.layout = Auth;
