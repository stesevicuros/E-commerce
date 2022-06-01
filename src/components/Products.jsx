import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
	padding: 1.15rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export default function Products({ cat, filters, sort }) {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat
						? `http://localhost:3000/api/products?category=${cat}`
						: 'http://localhost:3000/api/products?category'
				);
				setProducts(res.data);
			} catch (err) {}
		};
		getProducts();
	}, [cat]);

	useEffect(() => {
		cat &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(
						([key, value]) => item[key.includes(value)]
					)
				)
			);
	}, [products, cat, filters]);

	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === 'asc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{cat
				? filteredProducts.map((item) => (
						<Product item={item} key={item.id} />
				  ))
				: products.slice
						.call(0, 8)
						.map((item) => <Product item={item} key={item.id} />)}
		</Container>
	);
}
