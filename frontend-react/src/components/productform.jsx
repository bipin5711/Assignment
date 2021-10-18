import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Form, Field } from 'formik';

function ProductForm(props) {
	const { values, setFieldValue } = props;
	const handleChange = (name, value) => {
		setFieldValue(name, value);
	};

	return (
		<Form>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Field
						name="name"
						component={TextField}
						label="Name"
						value={values.name}
						onChange={(event) =>
							handleChange('name', event.target.value)
						}
					/>
				</Grid>
				<Grid item xs={12}>
					<Field
						name="quantity"
						component={TextField}
						value={values.quantity}
						label="Quantity"
						onChange={(event) =>
							handleChange('quantity', event.target.value)
						}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" variant="contained">
						Submit
					</Button>
				</Grid>
			</Grid>
		</Form>
	);
}

export default ProductForm;
