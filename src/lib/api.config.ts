import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
	baseURL: process.env.BACKEND_URI,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(config) => {
		Swal.fire({
			title: 'Loading',
			text: 'Please wait...',
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});
		return config;
	},
	(error) => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		});
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => {
		Swal.close();
		Swal.fire({
			icon: 'success',
			title: 'Sucesso!',
			showCloseButton: false,
			showCancelButton: false,
			footer: '',
		});
		return response;
	},
	(error) => {
		Swal.close();
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		});
		return Promise.reject(error);
	}
);

export default api;
