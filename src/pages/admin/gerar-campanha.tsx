import React, { useState } from 'react';

import axios from 'axios';
import Admin from '@/layouts/Admin';
import { Button, Select } from 'antd';
import {
	generateCampaingn,
	getCampaings,
} from '@/lib/campaingn/services/campaingService';
import { GetServerSideProps } from 'next';

export default function GerarCampanha({ campanhas }: any) {
	const [campaingn, setCampaingn] = useState('Natal');
	const [campaingnResult, setCampaingnResult] = useState('');
	const [campaingnList, setCampaingnList] = useState(campanhas.data);

	const getCampaingnResult = async () => {
		const response = await generateCampaingn(campaingn);
		setCampaingnResult(response.data.choices[0].message.content);
		let newData = [...campaingnList];
		newData.push({ message: response.data.choices[0].message.content });
		setCampaingnList(newData);
	};

	return (
		<section className="flex flex-col gap-4">
			<div className="bg-white p-6 flex flex-col gap-6">
				<div className="w-full flex justify-between">
					<Select
						placeholder="Online"
						id="origin"
						value={campaingn}
						onChange={(value) => {
							setCampaingn(value);
						}}
						options={[
							{ value: 'Black friday', label: 'Black friday' },
							{ value: 'Dia Santa Dulce', label: 'Dia Santa Dulce' },
							{ value: 'Inverno Amigo', label: 'Inverno Amigo' },
							{
								value: 'Natal',
								label: 'Natal',
							},
							{ value: 'São João', label: 'São João' },
							{ value: 'Cobertores', label: 'Cobertores' },
						]}
					/>
					<Button onClick={getCampaingnResult}>Gerar</Button>
				</div>
				<div className="">
					<span>{campaingnResult}</span>
				</div>
			</div>
			<div className="bg-white p-6 flex flex-col gap-4">
				<h1>Campanhas passadas:</h1>
				<ul className="list-disc	list-inside	flex flex-col gap-2">
					{campaingnList.map((item: any, _index: any) => {
						return <li key={`campanhas_${_index}`}>{item.message}</li>;
					})}
				</ul>
			</div>
		</section>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const campanhas = await getCampaings();
	return { props: { campanhas } };
};

GerarCampanha.layout = Admin;
