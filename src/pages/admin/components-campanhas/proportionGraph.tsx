import React, { useRef, useState } from 'react';
import { Tabs, Badge, Radio } from 'antd';
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
		text: '',
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
					name: 'PJ',
					y: 35992,
					z: 92,
				},
				{
					name: 'PF',
					y: 551695,
					z: 119,
				},
			],
			colors: [
				'#3AA0FF',
				'#36CBCB',
				'#4ECB73',
				'#FAD337',
				'#F2637B',
				'#975FE4',
			],
		},
	],
};

export default function ProportionGraph({ chartProps }: any) {
	const optionsRadio = [
		{ value: '1', label: 'Todas' },
		{ value: '2', label: 'Online' },
		{ value: '3', label: 'Lojas' },
	];
	return (
		<div className="flex flex-col gap-16 justify-between p-6">
			<div className="flex items-center justify-between">
				<span className="font-medium text-base">Comparativo PJ x PF</span>
				<Radio.Group
					defaultValue="1"
					options={optionsRadio}
					optionType="button"
				/>
			</div>
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
