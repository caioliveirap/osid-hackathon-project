import React, { useState } from 'react';

import axios from 'axios';
import Admin from '@/layouts/Admin';

export default function Dashboard() {
	return (
		<div className="">
			<span>teste</span>

			{/* <input
				type="text"
				placeholder="email"
				className="text-black"
				onChange={(e: any) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="password"
				className="text-black"
				onChange={(e: any) => {
					setPassword(e.target.value);
				}}
			/> */}
			{/* <button onClick={signIn}>Teste</button> */}
		</div>
	);
}

Dashboard.layout = Admin;
