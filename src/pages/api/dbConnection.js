import { connect, connection } from 'mongoose';

const connected = {
	isConnected: false,
};

export default async function connectToDatabase() {
	if (connected.isConnected) {
		return;
	}

	const db = await connect(process.env.MONGODB_URI);
	connected.isConnected = db.connections[0].readyState;
}

connection.on('error', (err) => console.error('Mongodb Errro:', err.message));

connection.on('error', (err) => console.error('Mongodb Errro:', err.message));
