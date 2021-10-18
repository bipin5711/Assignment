import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import ProductForm from '../../components/productform';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';

function EditProduct(props) {
	const { push } = useHistory();
	const [product, setProduct] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:3000/products/${id}`
			);
			setProduct(data);
		} catch (error) {
			console.log(error);
		}
	};
	const handleSubmit = async (values) => {
		try {
			const { data } = await axios.put(
				`http://localhost:3000/products/${id}`,
				{ name: values.name, quantity: values.quantity }
			);
			push('/');
		} catch (error) {
			console.log(error);
		}
	};
	if (!product) {
		return 'Loading';
	}
	return (
		<div style={{ margin: '12px' }}>
			<Typography>Edit Product</Typography>
			<Formik
				initialValues={product}
				onSubmit={handleSubmit}
				enableReinitialize
			>
				{({ values, setFieldValue }) => {
					console.log('values', values);
					return (
						<ProductForm
							values={values}
							setFieldValue={setFieldValue}
						/>
					);
				}}
			</Formik>
		</div>
	);
}

export default EditProduct;
