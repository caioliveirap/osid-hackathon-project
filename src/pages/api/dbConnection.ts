import { connect, connection } from 'mongoose';

const connected = {
	isConnected: false,
};

export default async function connectToDatabase() {
	if (connected.isConnected) {
		return;
	}
	console.log(process.env.MONGODB_URI);
	const db = await connect(process.env.MONGODB_URI as string);
	connected.isConnected = (db.connections[0] as any).readyState;
}

connection.on('error', (err) => console.error('Mongodb Errro:', err.message));

connection.on('error', (err) => console.error('Mongodb Errro:', err.message));
