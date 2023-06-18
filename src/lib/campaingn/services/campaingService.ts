import api from '../../api.config';

export const generateCampaingn = async (campaingn: string) => {
	try {
		let propmtToRequest = `Gere uma mensagem de agradecimento 
        de doação para um(a) doador(a) de roupas chamado Francisco Azevedo, 
        a mensagem precisa ser curta, apenas um parágrafo , 
        inclua uma frase de irmã dulce no final, 
        e a organização beneficiada é a Obra Social Irmã Dulce, 
        a campanha em questão é para o ${campaingn}, assinado por Maria Rita`;

		const response = await api.post(`/openai/run-prompt`, {
			prompt: propmtToRequest,
			campaingn: campaingn,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getCampaings = async () => {
	try {
		const response = await api.get(`/campaings/list`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
