import React, { useState } from 'react';

import axios from 'axios';
import Admin from '@/layouts/Admin';
import UpperGraph from './components/upperGraph';
import DonationGraph from './components/donationGraph';
import ProductsTable from './components/productsTable';

export default function Dashboard() {
	return (
		<section className="flex flex-col gap-4">
			<div className="bg-white p-6">
				<UpperGraph />
			</div>
			<div className="flex gap-4">
				<div className="bg-white w-1/2">
					<ProductsTable />
				</div>
				<div className="bg-white w-1/2">
					<DonationGraph />
				</div>
			</div>
		</section>
	);
}

Dashboard.layout = Admin;
