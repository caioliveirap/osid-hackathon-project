import React, { useRef, useState } from 'react';
import { Table } from 'antd';

export default function ProductsTable({ chartProps }: any) {
	const dataSource = [
		{
			name: 'Roupas',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Alimentos',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'EPI',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Serviços',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Outros',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Outros',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Outros',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Outros',
			amount: 811,
			status: 'Em baixa',
		},
		{
			name: 'Outros',
			amount: 811,
			status: 'Em baixa',
		},
	];

	const columns = [
		{
			title: 'Produtos',
			dataIndex: 'name',
			key: 'name',
			sorter: (a: any, b: any) => a.name - b.name,
		},
		{
			title: 'Quantidade',
			dataIndex: 'amount',
			key: 'amount',
			sorter: (a: any, b: any) => a.amount - b.amount,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			sorter: (a: any, b: any) => a.status - b.status,
		},
	];

	return (
		<div className="flex gap-16 justify-between w-full h-full p-6">
			<Table
				className="w-full"
				pagination={{ pageSize: 5 }}
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
}

// Dashboard.layout = Admin;
