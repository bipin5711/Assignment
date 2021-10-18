import React from 'react';
import { TextField, Button } from '@mui/material';
import { Form, Field } from 'formik';

function ProductForm(props) {
	const { values, setFieldValue } = props;
	let t;
	const handleChange = (name, value) => {
		setFieldValue(name, value);
	};

	return (
		<Form>
			<Field
				name="name"
				component={TextField}
				label="Name"
				value={values.name}
				onChange={(event) => handleChange('name', event.target.value)}
			/>
			<Field
				name="quantity"
				component={TextField}
				value={values.quantity}
				label="Quantity"
				onChange={(event) =>
					handleChange('quantity', event.target.value)
				}
			/>
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</Form>
	);
}

export default ProductForm;
