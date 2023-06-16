import type { NextApiRequest, NextApiResponse } from 'next';

export default async function GetExampleList(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(req);
	// const { id } = req.query;
	res.status(200).json({ ok: 'true' });
}
