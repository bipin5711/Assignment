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
		orders: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
