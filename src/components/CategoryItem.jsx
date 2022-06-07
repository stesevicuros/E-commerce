import styled from 'styled-components';
import React from 'react';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
	flex: 1;
	margin: 0 3px;
	height: 70vh;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	${mobile({ height: '30vh' })}
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 1.5rem;

	${mobile({ fontSize: '5rem' })}
`;
const Button = styled.button`
	border: none;
	padding: 1.1rem;
	background-color: #ffffffc9;
	color: grey;
	cursor: pointer;
	border-radius: 0.2rem;
	transition: all 0.5s ease;
	font-weight: 600;

	letter-spacing: 2px;

	${mobile({ fontSize: '4rem', padding: '1.5rem' })}

	&:hover {
		background-color: white;
	}
`;

export default function CategoryItem({ item }) {
	return (
		<Container>
			<Link to={`/products/${item.cat}`}>
				<Image src={item.img} />
				<Info>
					<Title>{item.title}</Title>
					<Button>SHOP NOW</Button>
				</Info>
			</Link>
		</Container>
	);
}
