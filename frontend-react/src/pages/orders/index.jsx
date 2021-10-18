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
import ProductForm from '../../components/productform';

function Orders(props) {
	const [orders, setOrders] = useState();
	const { push } = useHistory();

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const { data } = await axios.get('http://localhost:3000/orders');
			setOrders(data);
		} catch (error) {
			console.log(error);
		}
	};
	const handleDelete = async (id) => {
		try {
			const { data } = await axios.delete(
				`http://localhost:3000/orders/${id}`
			);
			setOrders(orders.filter((item) => item._id != id));
		} catch (error) {
			console.log(error);
		}
	};
	if (!orders) {
		return 'Loading';
	}
	return (
		<div>
			<Container>
				<TableContainer>
					<Table sx={{ minWidth: 650 }}>
						<TableHead>
							<TableRow>
								<TableCell align="center">Order Date</TableCell>
								<TableCell align="center">
									Product Name
								</TableCell>
								<TableCell align="center">Quantity</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((item) => (
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
										{item.order_date.substring(0, 10)}
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										align="center"
									>
										{item.products && item.products[0]
											? item.products[0].name
											: ''}
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										align="center"
									>
										{item.products && item.products[0]
											? item.products[0].quantity
											: ''}
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

export default Orders;
