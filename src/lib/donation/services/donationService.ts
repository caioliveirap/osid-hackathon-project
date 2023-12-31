import api from '../../api.config';

export const sendDonation = async (donation: any) => {
	try {
		const response = await api.post(`/donations/create-new`, {
			donation: donation,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getDonations = async () => {
	try {
		const response = await api.get(`/donations/list`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
