import React from 'react';
import {
	Route,
	Navigate,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
	const user = true;

	return (
		<Router>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/products/:category' element={<ProductList />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route
					path='/login'
					element={user ? <Navigate replace to='/' /> : <Login />}
				/>
				<Route
					path='/register'
					element={user ? <Navigate replace to='/' /> : <Register />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
