import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 2rem;
	background-color: #008080c9;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.9rem;
	font-weight: 500;
	letter-spacing: 3px;
`;

export default function Announcement() {
	return <Container>Super Deal! Free Shiping on Orders Over $50</Container>;
}
