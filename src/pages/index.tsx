import { useState } from 'react';
import { initFirebase } from './api/auth/firebase';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
const Home = () => {
	initFirebase();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = getAuth();

	const signIn = async () => {
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			console.log(result);
		} catch (error: any) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.message,
			});
		}
	};

	return (
		<div className="">
			<input
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
			/>
			<button onClick={signIn}>Teste</button>
		</div>
	);
};

export default Home;
