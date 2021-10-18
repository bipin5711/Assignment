const express = require('express');
const router = express.Router();
let Order = require('../models/order');

router.get('/', (req, res) => {
	Order.find()
		.populate('products')
		.then((orders) => res.send(orders))
		.catch((err) => res.status(400).send('Error: ' + err));
});
router.get('/:id', (req, res) => {
	Order.findById(req.params.id)
		.then((order) => res.send(order))
		.catch((err) => res.status(400).send('Error: ' + err));
});

router.post('/', (req, res) => {
	Order.create(req.body)
		.then((order) => res.send(order))
		.catch((err) => res.status(400).send('Error: ' + err));
});

router.put('/:id', (req, res) => {
	Order.findOneAndUpdate(req.params.id, req.body).then((order) =>
		Order.findOne(req.params.id).then((order) => res.send(order))
	);
});

router.delete('/:id', (req, res) =>
	Order.findOneAndDelete(req.params.id).then((order) => res.send(order))
);

module.exports = router;
