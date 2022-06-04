import React from 'react';
import {
	FavoriteBorder,
	Search,
	ShoppingCartOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 17.6rem;
	height: 22rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5fbfd;
	position: relative;
`;

const Circle = styled.div`
	width: 12.5rem;
	height: 12.5rem;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;

const Icon = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0.8rem;
	transition: all 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

export default function Product({ item }) {
	return (
		<Link to={`/product/${item._id}`} style={{ color: 'black' }}>
			<Container>
				<Circle />
				<Image src={item.img} />
				<Info>
					<Icon>
						<ShoppingCartOutlined />
					</Icon>
					<Icon>
						<Search />
					</Icon>
					<Icon>
						<FavoriteBorder />
					</Icon>
				</Info>
			</Container>
		</Link>
	);
}
