import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/products';
import Navbar from './components/navbar';
import AddProduct from './pages/addproduct';
import EditProduct from "./pages/editproduct";

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
					</Switch>
				}
			</Router>
		</div>
	);
}

export default App;
