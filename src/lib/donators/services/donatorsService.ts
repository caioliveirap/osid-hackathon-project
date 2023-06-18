import api from '../../api.config';

export const getDonators = async () => {
	try {
		const response = await api.get(`/donators/list`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
