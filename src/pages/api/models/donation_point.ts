import { model, models, Schema } from 'mongoose';

const schemaOptions = {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const donationPointSchema = new Schema({
	location: String,
	name: String,
	institution_cnpj: String, // CNPJ
	schemaOptions,
});

const DonationPoint =
	models.DonationPoint || model('DonationPoint', donationPointSchema);

export default DonationPoint;
