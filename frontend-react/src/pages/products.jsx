import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Container,
	Button,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductForm from './../components/productform';

function Products(props) {
	const [products, setProducts] = useState();
	const { push } = useHistory();

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const { data } = await axios.get('http://localhost:3000/products');
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};
	const handleAdd = () => {
		push('/add');
	};
	const handleDelete = async (id) => {
		try {
			const { data } = await axios.delete(
				`http://localhost:3000/products/${id}`
			);
			setProducts(products.filter((item) => item._id != id));
		} catch (error) {
			console.log(error);
		}
	};
	const handleQuantityIncrement = (id) => {
		const list = [];
		products.map((item) =>
			item._id == id
				? list.push({ ...item, quantity: item.quantity + 1 })
				: list.push(item)
		);
		setProducts(list);
	};
	const handleQuantityDecrement = (id) => {
		const list = [];
		products.map((item) =>
			item._id == id
				? list.push({ ...item, quantity: item.quantity - 1 })
				: list.push(item)
		);
		setProducts(list);
	};
	console.log(products);
	if (!products) {
		return 'Loading';
	}
	return (
		<div>
			<Container>
				<Button onClick={handleAdd}>Add Product</Button>
				<TableContainer>
					<Table sx={{ minWidth: 650 }}>
						<TableHead>
							<TableRow>
								<TableCell align="center">Name</TableCell>
								<TableCell align="center">Quantity</TableCell>
								<TableCell align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{products.map((item) => (
								<TableRow
									key={item._id}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}
								>
									<TableCell
										component="th"
										scope="row"
										align="center"
									>
										{item.name}
									</TableCell>
									<TableCell
										align="center"
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<RemoveIcon
											onClick={() => {
												handleQuantityDecrement(
													item._id
												);
											}}
										/>{' '}
										{item.quantity}
										<AddIcon
											onClick={() => {
												handleQuantityIncrement(
													item._id
												);
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<EditIcon
											onClick={() =>
												push(`/edit/${item._id}`)
											}
										/>
										<DeleteIcon
											onClick={() =>
												handleDelete(item._id)
											}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</div>
	);
}

export default Products;
