import React, { useRef, useState } from 'react';
import { Tabs, Badge } from 'antd';
import axios from 'axios';
import Admin from '@/layouts/Admin';
import type { TabsProps } from 'antd';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: any = {
	chart: {
		type: 'pie',
	},
	title: {
		text: 'Doações',
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: false,
			},
			showInLegend: true,
		},
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle',
		itemMarginTop: 10,
		itemMarginBottom: 10,
	},
	series: [
		{
			minPointSize: 10,
			innerSize: '60%',
			zMin: 0,
			name: 'countries',
			borderRadius: 5,
			data: [
				{
					name: 'Dinheiro',
					y: 505992,
					z: 92,
				},
				{
					name: 'Produtos',
					y: 551695,
					z: 119,
				},
				{
					name: 'Bens móveis',
					y: 312679,
					z: 121,
				},
				{
					name: 'Bens imóveis',
					y: 78865,
					z: 136,
				},
				{
					name: 'Serviços',
					y: 301336,
					z: 200,
				},
				{
					name: 'Bazar',
					y: 41284,
					z: 213,
				},
			],
			colors: [
				'#4caefe',
				'#3dc3e8',
				'#2dd9db',
				'#1feeaf',
				'#0ff3a0',
				'#00e887',
			],
		},
	],
};

export default function DonationGraph({ chartProps }: any) {
	return (
		<div className="flex gap-16 justify-between p-6">
			<HighchartsReact
				width={300}
				responsive={true}
				highcharts={Highcharts}
				options={options}
			/>
		</div>
	);
}

// Dashboard.layout = Admin;
