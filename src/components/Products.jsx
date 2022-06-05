import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import { publicRequest } from '../requestMethods';
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
				const res = await publicRequest.get(
					cat ? `/products?category=${cat}` : '/products?category'
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

	console.log({ products, filteredProducts, cat });
	return (
		<Container>
			{cat ? (
				filteredProducts.length === 0 ? (
					<NoProducts />
				) : (
					filteredProducts.map((item) => (
						<Product item={item} key={item.id} />
					))
				)
			) : products.length === 0 ? (
				<NoProducts />
			) : (
				products
					.slice(0, 8)
					.map((item) => <Product item={item} key={item.id} />)
			)}
		</Container>
	);
}

function NoProducts() {
	return <h4>No products found matching these filters</h4>;
}
