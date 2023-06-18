import React, { useRef, useState } from 'react';
import { Tabs, Badge } from 'antd';
import axios from 'axios';
import Admin from '@/layouts/Admin';
import type { TabsProps } from 'antd';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: any = {
	chart: {
		type: 'column',
	},
	title: {
		text: 'Tendência de Doações nas Lojas',
	},
	xAxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		crosshair: true,
	},
	series: [
		{
			name: 'Tokyo',
			data: [
				49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
				95.6, 54.4,
			],
		},
	],
	legend: { enabled: false },
};

const donationRank = [
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
	{ city: 'Salvador', donation_amount: '323,323' },
];

const items: TabsProps['items'] = [
	{
		key: '1',
		label: <span className="text-base">Doações recebidas</span>,
		children: (
			<div className="flex gap-16 justify-between">
				<div className="w-2/3">
					<HighchartsReact highcharts={Highcharts} options={options} />
				</div>
				<div className="flex flex-col gap-5">
					<span className="font-medium">Ranking de doações</span>
					<ul className="flex gap-4 flex-col">
						{donationRank.map((item, _index) => {
							return (
								<li className="flex items-center gap-4" key={`rank_${_index}`}>
									<Badge count={_index + 1} />
									<span>{item.city}</span>
									<span>{item.donation_amount}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		),
	},
	{
		key: '2',
		label: <span className="text-base">Visitas</span>,
		children: `Content of Tab Pane 2`,
	},
];

export default function UpperGraph({ chartProps }: any) {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	return (
		<div className="">
			<Tabs defaultActiveKey="1" items={items} />
		</div>
	);
}

// Dashboard.layout = Admin;
