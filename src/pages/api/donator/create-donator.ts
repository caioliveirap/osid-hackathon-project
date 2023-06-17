import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../dbConnection';
import Donator from '../models/donator';

connectToDatabase();

export default async function CreateDonator(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// const { id } = req.query;
	try {
		console.log(req.body, 'body');
		const donator = await new Donator(req.body);
		const save = await donator.save();
		res.status(200).json({ success: true, data: save });
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}
