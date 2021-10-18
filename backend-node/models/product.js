const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		quantity: {
			type: Number,
			min: 1,
			required: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		order: {
			type: Schema.Types.ObjectId,
			ref: 'Order'
		}
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
