import api from '../../api.config';

export const sendDonation = async (donation: any) => {
	try {
		const response = await api.post(`/donations/add-donation`, {
			donation: donation,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
