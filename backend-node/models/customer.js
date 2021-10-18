const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
