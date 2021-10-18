import React from 'react';
import { Formik } from 'formik';
import ProductForm from '../components/productform';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

function AddProduct(props) {
	const { push } = useHistory();
	const initialValues = {
		name: '',
		quantity: '',
	};

	const handleSubmit = async (values) => {
		try {
			const { data } = await axios.post(
				'http://localhost:3000/products',
				values
			);
			push('/');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Typography>Add Product</Typography>
			<Formik
				initialValues={initialValues}
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

export default AddProduct;
