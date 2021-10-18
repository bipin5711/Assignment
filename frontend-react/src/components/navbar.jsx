import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
	const { push } = useHistory();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Button color="inherit">Assignment</Button>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 0.1 }}
						onClick={() => push('/')}
					>
						Products
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 0.1 }}
						onClick={() => push('/orders')}
					>
						Orders
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
