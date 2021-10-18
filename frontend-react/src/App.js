import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/product';
import Navbar from './components/navbar';
import AddProduct from './pages/product/add';
import EditProduct from "./pages/product/edit";
import Orders from "./pages/orders";

function App() {
	return (
		<div className="App">
			<Router basename="/">
				<Navbar />
				{
					<Switch>
						<Route path="/" exact component={Products} />
						<Route path="/add" exact component={AddProduct} />
						<Route path="/edit/:id" exact component={EditProduct} />
						<Route path="/orders" exact component={Orders} />
					</Switch>
				}
			</Router>
		</div>
	);
}

export default App;
