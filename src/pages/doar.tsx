import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// layout for page
import { Button, Input, Radio, Select, Tabs } from 'antd';

import Auth from '@/layouts/Auth';
import { sendDonation } from '@/lib/donation/services/donationService';
import { WhatsAppOutlined } from '@ant-design/icons';

export default function Doar() {
	const router = useRouter();

	const [step, setStep] = useState(1);
	const [donation, setDonation] = useState({
		type: 'online',
		origin: 'organic_website',
		donator_type: '',
		document: '',
		resource: 'money',
		resource_details: { value: '', payment_method: 'PIX' },
	});

	const handleSubmit = async () => {
		try {
			const send = await sendDonation(donation);
			setStep(2);
		} catch (error) {}
	};

	const options = [
		{ value: '100', label: 'R$100' },
		{ value: '50', label: 'R$50' },
		{ value: '30', label: 'R$30' },
		{ value: '10', label: 'Outro valor' },
	];

	return (
		<>
			<div className="w-full flex items-center justify-center my-8">
				<div className="flex content-center items-center justify-center h-full w-full max-w-[572px]">
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

								<div className="flex flex-col gap-3 mb-6">
									<h1 className="w-full text-start font-medium text-4xl">
										Seja um <strong>Sócio-Protetor</strong> das Obras Socias
										Irmã Dulce!
									</h1>
									<span>
										Como Sócio-Protetor, você fortalece nossa rede de
										solidariedade! Além de acompanhar nossas atividades,
										realizações, campanhas e prestações de contas de parceiros,
										<strong>você terá acesso a descontos exclusivos.</strong>
									</span>
									<span>
										A sua doação mensal, é uma das mais importantes fontes de
										recursos da instituição voltadas à manutenção das atividades
										em prol da população mais carente.
									</span>
									<span>
										Escolha o impacto da sua doação, mas saiba: cadastrando uma
										doação mensal você torna seu impacto ainda maior!
									</span>
								</div>
								{step === 1 && (
									<>
										<div className="flex flex-col gap-2.5 border-b border-solid border-gray-300 pb-6 mb-2.5">
											<div className="flex flex-col gap-2 w-full">
												<label htmlFor="test">Recorrência</label>
												<Select
													// value={donatorProfile}
													// onChange={(value) => {
													// 	// setDonatorProfile(value);
													// }}
													options={[
														{ value: 'monthly', label: 'Mensal' },
														{ value: 'single', label: 'Única' },
													]}
												/>
											</div>
											<div className="">
												<Radio.Group
													options={options}
													onChange={(e) => {
														setDonation((prevFormData) => ({
															...prevFormData,
															resource_details: {
																...prevFormData.resource_details,
																value: e.target.value,
															},
														}));
													}}
													value={donation.resource_details.value}
													optionType="button"
												/>
												<div className="flex flex-col mt-2">
													<span>R$ 3,33 por dia</span>
													<span>
														50 cobertores e 20 travesseiros para pessoas em
														situação de rua
													</span>
												</div>
											</div>

											<div className="flex flex-col items-start gap-2">
												<label
													htmlFor="document"
													className="flex items-center gap-1"
												>
													{' '}
													<small className="text-red-500">*</small>Documento do
													doador
												</label>{' '}
												<Input
													onChange={(e) => {
														setDonation((prevFormData) => ({
															...prevFormData,
															document: e.target.value,
														}));
													}}
													placeholder="CPF/CNPJ"
													id="document"
												/>
											</div>
											<div className="text-sm flex justify-between">
												<div
													className={`w-[90px] h-[90px] bg-[#FAFAFA] border border-solid
											border-gray-300 rounded-2xl flex items-center cursor-pointer
											justify-center gap-2 flex-col font-medium text-xs ${
												donation.resource_details.payment_method === 'PIX'
													? 'bg-blue-100 border-blue-500'
													: ''
											}`}
													onClick={() => {
														setDonation((prevFormData) => ({
															...prevFormData,
															resource_details: {
																...prevFormData.resource_details,
																payment_method: 'PIX',
															},
														}));
													}}
												>
													<Image
														src={'/icons/payment_methods/pix.svg'}
														width={24}
														height={24}
														alt={'pix'}
													/>
													<span>PIX</span>
												</div>
												<div
													className={`w-[90px] h-[90px] bg-[#FAFAFA] border border-solid
											border-gray-300 rounded-2xl flex items-center text-center cursor-pointer
											justify-center gap-2 flex-col font-medium text-xs ${
												donation.resource_details.payment_method ===
												'credit_card'
													? 'bg-blue-100 border-blue-500'
													: ''
											}`}
													onClick={() => {
														setDonation((prevFormData) => ({
															...prevFormData,
															resource_details: {
																...prevFormData.resource_details,
																payment_method: 'credit_card',
															},
														}));
													}}
												>
													<Image
														src={'/icons/payment_methods/credit_card.svg'}
														width={24}
														height={24}
														alt={'credit_card'}
													/>
													<span>Cartão de Crédito</span>
												</div>
												<div
													className={`w-[90px] h-[90px] bg-[#FAFAFA] border border-solid
											border-gray-300 rounded-2xl flex items-center text-center cursor-pointer
											justify-center gap-2 flex-col font-medium text-xs ${
												donation.resource_details.payment_method ===
												'debit_card'
													? 'bg-blue-100 border-blue-500'
													: ''
											}`}
													onClick={() => {
														setDonation((prevFormData) => ({
															...prevFormData,
															resource_details: {
																...prevFormData.resource_details,
																payment_method: 'debit_card',
															},
														}));
													}}
												>
													<Image
														src={'/icons/payment_methods/credit_card.svg'}
														width={24}
														height={24}
														alt={'debit_card'}
													/>
													<span> Cartão de Débito</span>
												</div>
												<div
													className={`w-[90px] h-[90px] bg-[#FAFAFA] border border-solid
											border-gray-300 rounded-2xl flex items-center text-center cursor-pointer
											justify-center gap-2 flex-col font-medium text-xs ${
												donation.resource_details.payment_method === 'boleto'
													? 'bg-blue-100 border-blue-500'
													: ''
											}`}
													onClick={() => {
														setDonation((prevFormData) => ({
															...prevFormData,
															resource_details: {
																...prevFormData.resource_details,
																payment_method: 'boleto',
															},
														}));
													}}
												>
													<Image
														src={'/icons/payment_methods/boleto.svg'}
														width={24}
														height={24}
														alt={'boleto'}
													/>
													<span>Boleto</span>
												</div>
												<div
													className={`w-[90px] h-[90px] bg-[#FAFAFA] border border-solid
											border-gray-300 rounded-2xl flex items-center text-center cursor-pointer
											justify-center gap-2 flex-col  font-medium text-xs ${
												donation.resource_details.payment_method ===
												'energy_bill'
													? 'bg-blue-100 border-blue-500'
													: ''
											}`}
													onClick={() => {
														setDonation((prevFormData) => ({
															...prevFormData,
															resource_details: {
																...prevFormData.resource_details,
																payment_method: 'energy_bill',
															},
														}));
													}}
												>
													<Image
														src={'/icons/payment_methods/boleto.svg'}
														width={24}
														height={24}
														alt={'energy_bill'}
													/>
													<span>Conta de Luz</span>
												</div>
											</div>
										</div>
										<div className="flex w-full justify-end items-center gap-2">
											<span className="font-bold text-sm">R$ 100 mensais</span>
											<Button
												onClick={handleSubmit}
												type="primary"
												className="bg-blue-500"
											>
												Doar
											</Button>
										</div>
									</>
								)}

								{step === 2 && (
									<div className="flex flex-col gap-4 items-center">
										<div className="flex items-center gap-4">
											<Image
												width={160}
												height={160}
												src={'/images/qrcode.png'}
												alt={''}
											/>
											<p className="text-lg">
												Nome: Obras Irmã Dulce <br />
												Banco: NuBank
												<br />
												Conta: 67138-X
												<br />
												Agencia: 6641
												<br />
												<span className="text-sm text-green-700">
													Válido por 59 min e 10 seg
												</span>
											</p>
										</div>
										<span className="font-semibold text-base text-center">
											Com o app do seu banco, escaneie o QR Code ou copie o
											código abaixo na opção "Pix Copia e Cola"
										</span>
										<Input
											className="mt-2"
											value={'7974262c-f16c-11ec-8ea0-0242ac120002'}
										/>
										<div className="mt-2 flex gap-6">
											<Button
												// onClick={handleSubmit}
												type="primary"
												className="bg-blue-500"
											>
												Copiar código
											</Button>
											<Button
												onClick={() => {
													setStep(3);
												}}
												type="primary"
												className="bg-blue-500"
											>
												Concluir
											</Button>
										</div>
									</div>
								)}
								{step === 3 && (
									<div className="flex flex-col gap-6 items-center">
										<Image
											width={80}
											height={80}
											src={'/check_circle.svg'}
											alt={''}
										/>
										<div className="flex items-center flex-col text-center">
											<span className="text-2xl">
												Sua generosidade faz a diferença!
											</span>
											<span className="text-gray-400">
												As Obras Sociais Irmã Dulce agradecem sua doação.
											</span>
										</div>
										<div className="flex items-center justify-center gap-2">
											<button className="rounded bg-[#128C7E]  text-white py-1 px-4">
												<span className="flex items-center justify-center gap-2">
													<WhatsAppOutlined /> Converse conosco
												</span>
											</button>
											<button
												onClick={() => {
													setStep(1);
												}}
												className="rounded border border-solid border-gray-300  text-black py-1 px-4"
											>
												Doe novamente
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Doar.layout = Auth;
