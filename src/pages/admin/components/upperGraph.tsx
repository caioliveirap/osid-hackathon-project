import React, { useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Admin from '@/layouts/Admin';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
	{
		key: '1',
		label: `Tab 1`,
		children: `Content of Tab Pane 1`,
	},
	{
		key: '2',
		label: `Tab 2`,
		children: `Content of Tab Pane 2`,
	},
	{
		key: '3',
		label: `Tab 3`,
		children: `Content of Tab Pane 3`,
	},
];

export default function UpperGraph() {
	return (
		<div className="">
			{/* <span>teste 2</span> */}
			<Tabs defaultActiveKey="1" items={items} />
		</div>
	);
}

// Dashboard.layout = Admin;
