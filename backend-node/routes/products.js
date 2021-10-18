const express = require('express');
const router = express.Router();
let Product = require('../models/product');

router.get('/', (req, res) => {
	Product.find()
		.then((products) => res.send(products))
		.catch((err) => res.status(400).send('Error: ' + err));
});

router.get('/:id', (req, res) => {
	Product.findById(req.params.id)
		.then((product) => res.send(product))
		.catch((err) => res.status(400).send('Error: ' + err));
});

router.post('/', (req, res) => {
	Product.create(req.body)
		.then((product) => res.send(product))
		.catch((err) => res.status(400).send('Error: ' + err));
});

router.put('/:id', (req, res) => {
	Product.findOneAndUpdate({ _id: req.params.id }, req.body).then((product) =>
		res.send(product)
	);
});

router.delete('/:id', (req, res) =>
	Product.findOneAndDelete({ _id: req.params.id }).then((product) =>
		res.send(product)
	)
);

module.exports = router;
