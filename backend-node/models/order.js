const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
	{
		order_date: {
			type: Date,
			default: Date.now(),
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Product',
			},
		],
		// customer: {
		// 	type: Schema.Types.ObjectId,
		// 	ref: 'Customer',
		// },
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
