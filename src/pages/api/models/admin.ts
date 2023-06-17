import { model, models, Schema } from 'mongoose';

const schemaOptions = {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const adminSchema = new Schema({
	name: String,
	password: String,
	email: {
		type: String,
		required: true,
		unique: true,
	},
	schemaOptions,
});

const Admin = models.Admin || model('Admin', adminSchema);

export default Admin;
