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
		text: 'Comparativo PJ x PF',
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
					y: 305992,
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
