import React, { useState } from 'react';

import axios from 'axios';
import Admin from '@/layouts/Admin';
import UpperGraph from './components-dashboard/upperGraph';
import DonationGraph from './components-dashboard/donationGraph';
import ProductsTable from './components-dashboard/productsTable';
import ProportionGraph from './components-campanhas/proportionGraph';
import CampaingGraph from './components-campanhas/campaingGraph';
import { CaretUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

export default function Campanhas() {
	return (
		<section className="flex flex-col gap-4">
			<div className="flex gap-4">
				<div className="flex w-1/2 gap-6">
					<div className="flex flex-col bg-white w-full p-6 gap-1">
						<span className="text-gray-400 text-sm flex justify-between items-center">
							Total de doações <InfoCircleOutlined />
						</span>
						<span className="text-3xl font-bold">R$ 126,560</span>
						<span className="flex items-center justify-between border-b border-solid border-gray-200 pb-4 mb-4">
							Crescimento de 12%{' '}
							<CaretUpOutlined style={{ color: '#52C41A' }} />
						</span>
						<p className="flex items-center gap-2">
							<span>Doações diárias</span>
							<span>R$ 12,423</span>
						</p>
					</div>
					<div className="flex flex-col bg-white w-full p-6 gap-1">
						<span className="text-gray-400 text-sm flex justify-between items-center">
							Visitas <InfoCircleOutlined />
						</span>
						<span className="text-3xl font-bold">8,846</span>
						<span className="flex items-center justify-between border-b border-solid border-gray-200 pb-4 mb-4">
							Crescimento de 15%{' '}
							<CaretUpOutlined style={{ color: '#52C41A' }} />
						</span>
						{/* <p className="flex items-center gap-2">
							<span>Doações diárias</span>
							<span>R$ 12,423</span>
						</p> */}
					</div>
				</div>
				<div className="flex w-1/2 gap-6">
					<div className="flex flex-col bg-white w-full p-6 gap-1">
						<span className="text-gray-400 text-sm flex justify-between items-center">
							Pagamentos <InfoCircleOutlined />
						</span>
						<span className="text-3xl font-bold">6,560</span>
						<span className="flex items-center justify-between border-b border-solid border-gray-200 pb-4 mb-4">
							Taxa de conversão 60%
							{/* <CaretUpOutlined style={{ color: '#52C41A' }} /> */}
						</span>
						{/* <p className="flex items-center gap-2">
							<span>Doações diárias</span>
							<span>R$ 12,423</span>
						</p> */}
					</div>
					<div className="flex flex-col bg-white w-full p-6 gap-1">
						<span className="text-gray-400 text-sm flex justify-between items-center">
							Efeito operacional <InfoCircleOutlined />
						</span>
						<span className="text-3xl font-bold">78%</span>
						<span className="flex items-center justify-between border-b border-solid border-gray-200 pb-4 mb-4">
							Crescimento de 25%{' '}
							<CaretUpOutlined style={{ color: '#52C41A' }} />
						</span>
						{/* <p className="flex items-center gap-2">
							<span>Doações diárias</span>
							<span>R$ 12,423</span>
						</p> */}
					</div>
				</div>
			</div>

			<div className="flex gap-4">
				<div className="bg-white w-1/2">
					<ProportionGraph />
				</div>
				<div className="bg-white w-1/2">
					<CampaingGraph />
				</div>
			</div>
		</section>
	);
}

Campanhas.layout = Admin;
