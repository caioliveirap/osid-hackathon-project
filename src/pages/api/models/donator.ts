import { model, models, Schema } from 'mongoose';

const donatorSchema = new Schema(
	{
		name: String,
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone_number: String,
		donator_type: String, // Pessoa Jurídica de Direito Público, Pessoa Física, Pessoa Jurídica de Direito Privado
		document: String, // CPF ou CNPJ
		how_discovered: String, // Como conheceu a obra social
	},
	{ timestamps: true }
);

const Donator = models.Donator || model('Donator', donatorSchema);

export default Donator;
